import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import { fetchArxivData } from "./arxiv.ts";
import { toCstDateStr } from "./date.ts";
import { fetchHfData } from "./hf.ts";
import { fetchHnData } from "./hn.ts";
import { collectCandidates, dedupeAndRank, type PickCandidate } from "./picks.ts";
import { callLlm, parseLlmJson } from "./report.ts";
import { fetchTrendingData } from "./trending.ts";

interface Recommendation {
  id: string;
  reason: string;
}

interface RecommendationResponse {
  summary?: string;
  picks?: Recommendation[];
}

function buildPrompt(candidates: PickCandidate[]): string {
  const list = candidates
    .map(
      (item, index) =>
        `${index + 1}. [${item.id}] ${item.title}\nSource: ${item.source} | Score: ${item.score}/100 | Signal: ${item.signal}\nDescription: ${item.description}\nURL: ${item.url}`,
    )
    .join("\n\n");

  return `You are an editor for a daily AI and open-source radar. Select exactly five useful and diverse links from the ranked candidates below. Prefer practical usefulness, current momentum, technical impact, relevance to AI builders, and source diversity.\n\nCandidates:\n${list}\n\nReturn JSON only, with no markdown or commentary:\n{"summary":"one concise sentence","picks":[{"id":"an exact candidate id","reason":"a concise recommendation reason"}]}\n\nRules:\n- picks must contain exactly five entries\n- every id must exactly match a candidate id\n- do not repeat projects or URLs`;
}

function fallbackReason(item: PickCandidate): string {
  return `Ranked ${item.score}/100 from ${item.source}; ${item.signal}`;
}

function buildMarkdown(
  date: string,
  total: number,
  candidates: PickCandidate[],
  response: RecommendationResponse,
): string {
  const byId = new Map(candidates.map((item) => [item.id, item]));
  const selected: Array<{ item: PickCandidate; reason: string }> = [];

  for (const pick of response.picks ?? []) {
    const item = byId.get(pick.id);
    if (!item || selected.some((entry) => entry.item.id === item.id)) continue;
    const reason = pick.reason?.trim() || fallbackReason(item);
    selected.push({ item, reason });
    if (selected.length === 5) break;
  }

  for (const item of candidates) {
    if (selected.length === 5) break;
    if (selected.some((entry) => entry.item.id === item.id)) continue;
    selected.push({ item, reason: fallbackReason(item) });
  }

  const usedFallback = (response.picks?.length ?? 0) !== 5 || selected.some((entry) => entry.reason === fallbackReason(entry.item));
  if (usedFallback) console.warn("[picks] LLM response was incomplete; filled remaining picks from ranked links.");

  const lines = [
    `# Information Radar - ${date}`,
    "",
    `> Collected ${total} raw links, deduplicated and ranked 30, then selected 5 recommendations.`,
    "",
    `**Today at a glance:** ${response.summary?.trim() || "Top ranked AI and open-source updates, with an automatic fallback for reliable daily delivery."}`,
    "",
    "## Top 5 recommendations",
    "",
  ];

  for (const [index, entry] of selected.entries()) {
    const { item, reason } = entry;
    lines.push(
      `### ${index + 1}. [${item.title}](${item.url})`,
      `- Source: ${item.source} | Radar score: ${item.score}/100`,
      `- Signal: ${item.signal}`,
      `- Why it matters: ${reason}`,
      "",
    );
  }
  lines.push("---", "Generated automatically by agents-radar.");
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
