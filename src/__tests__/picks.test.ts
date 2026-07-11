import { describe, expect, it } from "vitest";
import { dedupeAndRank, type PickCandidate } from "../picks.ts";

const item = (
  id: string,
  url: string,
  score: number,
  source: PickCandidate["source"] = "GitHub 热榜",
): PickCandidate => ({
  id,
  title: id,
  url,
  score,
  source,
  description: "test",
  signal: "test",
});

describe("dedupeAndRank", () => {
  it("keeps the highest-scoring version of a repeated link", () => {
    const ranked = dedupeAndRank([
      item("low", "https://github.com/acme/radar?utm_source=test", 42),
      item("high", "https://github.com/acme/radar", 88, "Hacker News"),
    ]);
    expect(ranked).toHaveLength(1);
    expect(ranked[0]?.id).toBe("high");
  });

  it("returns candidates in descending score order", () => {
    const ranked = dedupeAndRank([
      item("third", "https://example.com/3", 30),
      item("first", "https://example.com/1", 90),
      item("second", "https://example.com/2", 60),
    ]);
    expect(ranked.map((candidate) => candidate.id)).toEqual(["first", "second", "third"]);
  });
});
