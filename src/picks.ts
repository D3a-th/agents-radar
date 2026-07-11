import type { ArxivData } from "./arxiv.ts";
import type { HfData } from "./hf.ts";
import type { HnData } from "./hn.ts";
import type { TrendingData } from "./trending.ts";

export type PickSource = "GitHub 热榜" | "GitHub 搜索" | "Hacker News" | "Hugging Face";

export interface PickCandidate {
  id: string;
  title: string;
  url: string;
  source: PickSource;
  description: string;
  score: number;
  signal: string;
}

function clampScore(value: number): number {
  return Math.max(1, Math.min(100, Math.round(value)));
}

function urlKey(value: string): string {
  try {
    const url = new URL(value);
    url.hash = "";
    for (const key of [...url.searchParams.keys()]) {
      if (key.startsWith("utm_") || key === "ref") url.searchParams.delete(key);
    }
    return `${url.hostname.toLowerCase()}${url.pathname.replace(/\/$/, "")}`.toLowerCase();
  } catch {
    return value.trim().toLowerCase().replace(/\/$/, "");
  }
}

function sourceRank(source: PickSource): number {
  return { "GitHub 热榜": 4, "GitHub 搜索": 3, "Hacker News": 2, "Hugging Face": 1 }[source];
}

/** Deduplicate identical links, then rank with a small source-diversity guard. */
export function dedupeAndRank(candidates: PickCandidate[], limit = 30): PickCandidate[] {
  const unique = new Map<string, PickCandidate>();
  for (const candidate of candidates) {
    const key = urlKey(candidate.url);
    const existing = unique.get(key);
    if (
      !existing ||
      candidate.score > existing.score ||
      (candidate.score === existing.score && sourceRank(candidate.source) > sourceRank(existing.source))
    ) {
      unique.set(key, candidate);
    }
  }

  const sorted = [...unique.values()].sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
  const perSourceLimit = Math.ceil(limit / 3);
  const counts = new Map<PickSource, number>();
  const selected: PickCandidate[] = [];

  for (const candidate of sorted) {
    if ((counts.get(candidate.source) ?? 0) >= perSourceLimit) continue;
    selected.push(candidate);
    counts.set(candidate.source, (counts.get(candidate.source) ?? 0) + 1);
    if (selected.length === limit) return selected;
  }

  for (const candidate of sorted) {
    if (selected.some((item) => item.id === candidate.id)) continue;
    selected.push(candidate);
    if (selected.length === limit) break;
  }
  return selected;
}

export function collectCandidates(data: {
  trending: TrendingData;
  hn: HnData;
  hf: HfData;
  arxiv: ArxivData;
}): PickCandidate[] {
  const candidates: PickCandidate[] = [];

  for (const repo of data.trending.trendingRepos) {
    const score = clampScore(55 + Math.log2(repo.todayStars + 1) * 7 + Math.log10(repo.totalStars + 1) * 3);
    candidates.push({
      id: `trend:${repo.fullName}`,
      title: repo.fullName,
      url: repo.url,
      source: "GitHub 热榜",
      description: repo.description || "GitHub 今日热门项目",
      score,
      signal: `今日 +${repo.todayStars} Star，累计 ${repo.totalStars} Star`,
    });
  }

  for (const repo of data.trending.searchRepos) {
    const score = clampScore(42 + Math.log10(repo.stargazersCount + 1) * 10);
    candidates.push({
      id: `search:${repo.fullName}`,
      title: repo.fullName,
      url: repo.url,
      source: "GitHub 搜索",
      description: repo.description || "近期活跃的 AI 开源项目",
      score,
      signal: `累计 ${repo.stargazersCount} Star，主题：${repo.searchQuery}`,
    });
  }

  for (const story of data.hn.stories) {
    const score = clampScore(30 + Math.log2(story.points + 1) * 8 + Math.log2(story.comments + 1) * 4);
    candidates.push({
      id: `hn:${story.id}`,
      title: story.title,
      url: story.url,
      source: "Hacker News",
      description: `来自 Hacker News 的 AI 讨论，由 ${story.author} 发布。`,
      score,
      signal: `${story.points} 分，${story.comments} 条讨论`,
    });
  }

  for (const model of data.hf.models) {
    const score = clampScore(35 + Math.log2(model.likes + 1) * 7 + Math.log10(model.downloads + 1) * 4);
    candidates.push({
      id: `hf:${model.id}`,
      title: model.id,
      url: model.url,
      source: "Hugging Face",
      description: `${model.pipelineTag || "AI"} 模型，标签：${model.tags.slice(0, 3).join(", ") || "暂无"}`,
      score,
      signal: `${model.likes} 个赞，${model.downloads} 次下载`,
    });
  }

  // Papers are deliberately not in the 30-link pool: this first version is focused on useful projects and products.
  void data.arxiv;
  return candidates;
}
