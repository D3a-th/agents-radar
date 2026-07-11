import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fetchArxivData } from "./arxiv.ts";
import { toCstDateStr } from "./date.ts";
import { fetchHfData } from "./hf.ts";
import { fetchHnData } from "./hn.ts";
import { collectCandidates, dedupeAndRank, type PickCandidate } from "./picks.ts";
import { parseLlmJson, callLlm } from "./report.ts";
import { fetchTrendingData } from "./trending.ts";

interface Recommendation {
  id: string;
  reason: string;
}

interface RecommendationResponse {
  summary: string;
  picks: Recommendation[];
}

function buildPrompt(candidates: PickCandidate[]): string {
  const list = candidates
    .map(
      (item, index) =>
        `${index + 1}. [${item.id}] ${item.title}\n来源：${item.source}｜雷达分：${item.score}/100｜信号：${item.signal}\n说明：${item.description}\n链接：${item.url}`,
    )
    .join("\n\n");

  return `你是中文科技情报编辑。以下是已完成去重和初步打分的 30 条 AI/开源链接。请只挑出最值得实际点击的 5 条，优先考虑：可用性、今天的热度、技术影响力、与 AI 开发者的相关度和来源多样性。

候选链接：
${list}

只返回合法 JSON，不要 Markdown 或解释，格式必须为：
{"summary":"一句话概括今天最值得关注的方向","picks":[{"id":"候选的完整 id","reason":"不超过 55 个中文字的推荐理由"}]}

规则：
- picks 必须恰好 5 条，且 id 必须来自候选列表
- 不要重复同一项目或链接
- 推荐理由要具体，提及热度、能力或适用场景，不要空泛赞美`;
}

function buildMarkdown(
  date: string,
  total: number,
  candidates: PickCandidate[],
  response: RecommendationResponse,
): string {
  const byId = new Map(candidates.map((item) => [item.id, item]));
  const selected: Array<{ item: PickCandidate; reason: string }> = [];
  for (const pick of response.picks) {
    const item = byId.get(pick.id);
    if (!item || selected.some((entry) => entry.item.id === item.id)) continue;
    selected.push({ item, reason: pick.reason.trim() });
  }
  if (selected.length !== 5)
    throw new Error(`LLM returned ${selected.length} valid recommendations; expected 5.`);

  const lines = [
    `# 信息雷达 · ${date}`,
    "",
    `> 今日从 ${total} 条候选链接中去重、评分，筛出 30 条，再精选 5 条。`,
    "",
    `**今日判断：** ${response.summary.trim()}`,
    "",
    "## 今日 5 条推荐",
    "",
  ];
  for (const [index, entry] of selected.entries()) {
    const { item, reason } = entry;
    lines.push(
      `### ${index + 1}. [${item.title}](${item.url})`,
      `- 来源：${item.source}｜雷达分：${item.score}/100`,
      `- 热度信号：${item.signal}`,
      `- 推荐理由：${reason}`,
      "",
    );
  }
  lines.push("---", "由 agents-radar 自动生成。");
  return lines.join("\n");
}

async function main(): Promise<void> {
  const date = toCstDateStr(new Date());
  console.log(`[picks] Fetching candidates for ${date}...`);
  const [trending, hn, hf, arxiv] = await Promise.all([
    fetchTrendingData(),
    fetchHnData(),
    fetchHfData(),
    fetchArxivData(),
  ]);
  const allCandidates = collectCandidates({ trending, hn, hf, arxiv });
  const candidates = dedupeAndRank(allCandidates, 30);
  if (candidates.length < 5) throw new Error(`Only ${candidates.length} unique candidates were available.`);
  console.log(`[picks] ${allCandidates.length} raw candidates -> ${candidates.length} ranked links.`);

  const raw = await callLlm(buildPrompt(candidates), 1536);
  const response = parseLlmJson<RecommendationResponse>(raw);
  if (!response.summary || !Array.isArray(response.picks))
    throw new Error("LLM response did not include summary and picks.");

  const content = buildMarkdown(date, allCandidates.length, candidates, response);
  const outputDir = path.join("digests", date);
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, "daily-picks.md");
  fs.writeFileSync(outputPath, content, "utf-8");
  console.log(`[picks] Saved ${outputPath}`);
}

main().catch((err: unknown) => {
  console.error("[picks]", err instanceof Error ? err.message : err);
  process.exit(1);
});
