# AI CLI Tools Community Digest 2026-07-11

> Generated: 2026-07-11 08:08 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**2026-07-11**

## 1. Ecosystem Overview

The AI CLI tools landscape on July 11, 2026, reflects a maturing but turbulent ecosystem. Seven major tools—Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI—all show active development cycles, yet share persistent pain points around platform reliability, model management, and agent autonomy. The day's event is dominated by GPT-5.6 rollout adaptations (Pi, OpenCode, Copilot CLI) and Claude's Fable-5 model issues, alongside a notable surge in Android/Termux fragmentation concerns and multi-agent orchestration demands across most tool communities. Security hardening (SSRF fixes, credential symlink protections) and per-subagent model routing are emerging as cross-cutting priorities, signaling that the community has moved past basic code generation and now demands production-grade infrastructure for autonomous agent workflows.

## 2. Activity Comparison

| Tool | Issues Tracked (Notable) | PRs Tracked (Notable) | Release Today | Community Engagement (Comments/Reactions) |
|---|---|---|---|---|
| **Claude Code** | 10 hot issues | 5 key PRs | ✅ v2.1.207 | High – 128 👍 on top FR, 63 comments on Android issue |
| **OpenAI Codex** | 10 hot issues | 10 key PRs | ✅ 2 alpha builds | High – 104 👍 on auto-resolve FR, 50 comments on closed session bug |
| **Gemini CLI** | 10 hot issues | 10 key PRs | ❌ None | Moderate – 8 👍 on generalist hang, active security hardening |
| **Copilot CLI** | 10 hot issues | 1 PR | ✅ v1.0.71-0 | Moderate – voice mode issues drawing investigation |
| **Kimi Code** | 0 new issues | 5 PRs | ❌ None | Low – all activity concentrated on PRs |
| **OpenCode** | 10 hot issues | 10 key PRs | ❌ None | High – 169 👍 on model discovery FR, CPU regression active |
| **Pi** | 10 hot issues | 10 key PRs | ❌ None | Moderate – 17 👍 on `ultra` thinking level, GPT-5.6 wave |
| **Qwen Code** | 10 hot issues | 10 key PRs | ✅ v0.19.9 + nightly | Moderate – 20 comments on multi-workspace RFC |
| **DeepSeek TUI** | 10 hot issues | 10 key PRs | ❌ None | Moderate – 33 comments on agent autonomy issue |

**Note:** Issues/PRs counted from each digest's "Hot Issues" and "Key PR Progress" selections, not total tracker volume.

## 3. Shared Feature Directions

The following feature requirements appear across multiple tool communities:

| Feature Direction | Tools Mentioning | Specific Needs |
|---|---|---|
| **Multi-agent orchestration / tiered models** | Claude Code (#56913, #38698), OpenAI Codex (#14039), Gemini CLI (#21968), Copilot CLI (#3709) | Per-subagent model/provider selection; "brain + workers" architecture for cost optimization |
| **Automatic model discovery** | Claude Code, OpenCode (#6231, 169 👍), Copilot CLI (#3795) | Auto-fetch models from custom/OpenAI-compatible endpoints (LM Studio, Ollama) |
| **MCP / plugin ecosystem maturity** | Copilot CLI (#4085, #4089), Kimi Code (#2490), OpenAI Codex, Gemini CLI (#28355) | OAuth flow fixes, global MCP config loading in non-interactive modes |
| **App Preview / external URL access** | Claude Code (#27263, 128 👍), OpenCode (#26772), Gemini CLI | Whitelist external URLs for OAuth; integrated browser in desktop apps |
| **Session continuity & recovery** | Claude Code (#76342), Qwen Code (#6695, #6710), Copilot CLI (#4094), Pi (#6477) | Session restore after crashes; distinguish cancellation from failure; compaction reliability |
| **Platform parity (Windows, macOS ARM, Android)** | Claude Code (#50270), OpenAI Codex (#32314, #32032), OpenCode (#35828), Pi (#6300), Qwen Code (#6590) | Android/Termux regression; Windows shell hangs; macOS Swift symbol issues; package consistency |
| **Voice mode / accessibility** | Copilot CLI (#4024, #4090), Claude Code (#76589) | ASR model reliability; push-to-talk UX; text-to-speech for accessibility |

## 4. Differentiation Analysis

**Feature Focus:**
- *Claude Code, Gemini CLI* – Leaders in autonomous agent architecture (tiered brains, subagent orchestration, persistent state). Both emphasize subagent trajectory and autonomy features.
- *OpenCode* – Differentiated by dense local-model integrations (Ollama, LM Studio) and a highly-upvoted model discovery request, reflecting a self-hosted-first philosophy.
- *Copilot CLI* – Unique voice mode focus; heavily invested in MCP ecosystem and enterprise OAuth flows (Atlassian, Azure AD). Standalone binary management for musl/Windows.
- *Pi* – Acts as a model catalog/proxy layer; strong emphasis on provider abstraction (OpenRouter, Bedrock, Vertex) and reasoning-level expansion (`ultra`, `max`).
- *Qwen Code* – Differentiates via daemon-level multi-workspace support and Chinese enterprise integrations (DingTalk channels). Web Shell UI enhancements mirroring desktop patterns.
- *DeepSeek TUI* – Focused on Fleet/Workflow/Lane orchestration, Rust performance, and minimal TUI-first approach.

**Target Users:**
- *Claude Code / Gemini CLI* – Power users building autonomous agent pipelines with complex subagent topologies.
- *OpenAI Codex* – VS Code extension users and enterprise Azure customers; broader IDE integration.
- *Copilot CLI* – Enterprise teams requiring OAuth, MCP-based tool ecosystems, and voice-first interaction.
- *Pi* – Developers who need multi-provider model management and testing; extensions API for custom tooling.
- *OpenCode / Kimi Code* – Self-hosted and local-first developers; ACP server integration for IDEs.
- *Qwen Code* – Chinese enterprise users and multi-workspace daemon operators.
- *DeepSeek TUI* – Performance-sensitive and minimalist terminal users; Rust/TUI enthusiasts.

**Technical Approach:**
- *Rust-based*: OpenAI Codex (rust-v0.145.x), Pi (Bun), DeepSeek TUI (Rust/TUI) – note the Rust momentum.
- *TypeScript/Node.js*: Claude Code, Gemini CLI, Qwen Code, OpenCode.
- *Go-based*: Copilot CLI.
- *Security posture differentiation*: OpenCode and Gemini CLI are leaderboard for security-hardening PRs (SSRF, symlink credential protection, TOCTOU fixes).

## 5. Community Momentum & Maturity

**High Activity / Rapid Iteration:**
- **OpenAI Codex** – 10 PRs tracked today, 2 alpha releases, closes a major session bug (#18993). Most PR momentum, though alpha builds lack changelogs.
- **Gemini CLI** – 10 PRs, heavy security hardening (TOCTOU, path traversal, prompt injection), long-running feature EPICs (AST-aware codebase, component evals). Maturing security culture.
- **Qwen Code** – 2 releases (one stable, one nightly), multi-workspace RFC gaining traction, goal evaluation lifecycle improvements.
- **Pi** – Rapid GPT-5.6 response (multiple PRs for Sol/Terra/Luna + `ultra` thinking level), extension API improvements.

**Moderate Activity:**
- **Claude Code** – Core release (v2.1.207) with auto-mode lift, but Android regression (#50270) festering for 3 months creates trust erosion. High community frustration.
- **Copilot CLI** – Minor patch release (v1.0.71-0), but only 1 PR active. Voice mode issues are active investigations; OAuth MCP problems blocking enterprise adoption.
- **OpenCode** – No release but 10 PRs, including critical SSRF fix and CPU regression investigation. High upvotes on feature requests (model discovery #6231 at 169 👍) indicate strong but frustrated user base.

**Lower Activity / Smaller Community:**
- **Kimi Code** – Only 5 PRs, no new issues, no releases. Minimal community volume; PRs focused on ACP parity and error messaging improvements.
- **DeepSeek TUI** – 10 PRs but mostly dependency bumps and internal infrastructure. Only 1 behavioral issue (#4032) draws community discussion.

**Maturity Signals:**
- *Security hardening*: Most mature tools (OpenCode, Gemini CLI, Pi) now have explicit security PRs in each digest.
- *Plugin/extension ecosystems*: Claude Code (plugin documentation hardening), OpenAI Codex (plugin caching), Kimi Code (MCP config), Copilot CLI (MCP OAuth) – ecosystem thinking is standard.
- *Performance observability*: Qwen Code's stream timeout handling, OpenCode's CPU bloat investigation, Pi's RSS benchmark – tools are building debugging infrastructure.
- *"Stuck" issues as lagging indicators*: Claude Code's Android regression (63 comments, 3 months), OpenCode's git abuse (#3176 running since Oct 2025), Copilot CLI's VS Code blank screen (#9615, 6 months) – these degrade trust when unaddressed.

## 6. Trend Signals

**1. Agent Autonomy vs. User Intent Control**
The most contested design space across all tools: How much should agents self-direct? DeepSeek TUI's #4032 (agent overriding user scripts), Claude Code's YOLO regressions (#5970), and Copilot CLI's hallucinating web_search (#4093) all point to a core tension. Expect more permission profiles, explicit delegation patterns, and debate around "automatic" vs. "manual" mode defaults.

**2. Multi-Model Orchestration as a First-Class Feature**
Four tools (Claude Code, OpenAI Codex, Gemini CLI, Copilot CLI) have active feature requests for per-subagent model routing. Cost optimization (cheap sub-models for routine tasks) and latency management (local Ollama for quick operations) are the drivers. This is becoming table stakes for any tool claiming multi-agent capabilities.

**3. Platform Fragmentation is a Growing Liability**
Android/Termux regression at Claude Code (#50270, 3 months), Windows sandbox slowdowns at OpenAI Codex (#32314), macOS Computer Use crashes (#32032), Alpine Linux musl binary removal at Copilot CLI (#4091) – each tool has at least one platform-specific pain point. Developers working across Linux, macOS, Windows, and mobile are increasingly vocal about parity gaps.

**4. MCP Ecosystem Becomes Enterprise Gate**
Copilot CLI's OAuth MCP failures (#4085, #4089) and Kimi Code's ACP MCP parity fix (#2490) reveal that the Model Context Protocol is no longer experimental—it's necessary for enterprise adoption. Broken OAuth, silent handler failures, and missing tool exposure are blocking production deployments.

**5. "Silent Changes" Erode Trust Across the Board**
Claude Code's server-side experiment removing thinking summaries (#75607), Copilot CLI's silent `xhigh reasoning` removal (#2739), and Pi's context-window clamping regression (#6206) all demonstrate that undocumented changes are a major trust risk. Community backlash is consistent and sharp.

**6. Performance and Memory Leaks Signal Scaling Gaps**
OpenCode's 13GB+ SQLite (#33356), Claude Code's 119GB desktop memory leak (#76588), Qwen Code's unbounded glob OOM (#6614), and DeepSeek TUI's RSS benchmark (#4326) – as these tools handle larger projects and longer sessions, resource management is becoming a bottleneck that community members are actively benchmarking.

**7. Chinese-Language Tooling and Enterprise Localization**
Qwen Code's DingTalk channel integration (#6602, #6660) and Gemini CLI's Chinese FAQ updates (#4331) indicate growing demand for localized enterprise features. Tools serving Chinese markets (Qwen Code, DeepSeek TUI) are investing in localized channels, while others (Copilot CLI) lack Asian IME support (#1815 only closed recently after 3 months).

**8. Security Hardening is Now Standard Practice**
OpenCode's SSRF fix, Gemini CLI's TOCTOU and path traversal fixes, Claude Code's plugin YAML/symlink hardening – each digest contains at least one security PR. This is no longer exceptional; it's baseline maintenance for any production-grade CLI tool.

**Takeaway for Developers:** When evaluating an AI CLI tool, look beyond core generation capability to (a) platform coverage for your OS, (b) multi-model orchestration support, (c) MCP ecosystem maturity, and (d) the maintainer's track record on silent changes and bug fix velocity. The tools with the most velocity (OpenAI Codex, Pi, Qwen Code) are also the ones closing bugs and releasing fixes fastest, while tools with older open regressions (Claude Code's Android bug, Copilot CLI's VS Code blank screen) are losing community confidence despite strong feature work.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-11 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking
*The most-discussed pull requests by comment volume (all open).*

1. **Fix `run_eval.py` 0% Recall Bug** ([PR #1298](https://github.com/anthropics/skills/pull/1298))  
   *Functionality*: Repairs the skill-creator evaluation pipeline so that `run_eval.py` correctly detects skill triggers instead of always reporting 0% recall.  
   *Discussion highlights*: Addresses Issue #556 with 10+ independent reproductions; includes fixes for Windows stream reading, trigger detection, and parallel workers.  
   *Status*: Open, heavy discussion.

2. **Document Typography Skill** ([PR #514](https://github.com/anthropics/skills/pull/514))  
   *Functionality*: Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.  
   *Discussion highlights*: Users note these issues affect every Claude-generated document; strong interest in production-quality output.  
   *Status*: Open.

3. **Frontend-Design Skill Clarity** ([PR #210](https://github.com/anthropics/skills/pull/210))  
   *Functionality*: Revises the existing frontend-design skill to improve actionability, coherence, and single-conversation usability.  
   *Discussion highlights*: Community feedback focused on making instructions precise enough to steer behavior without over-constraining.  
   *Status*: Open.

4. **Skill-Quality & Skill-Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83))  
   *Functionality*: Two meta-skills that evaluate skills across structure/documentation, security, and five quality dimensions.  
   *Discussion highlights*: Strong interest in quality gates for the skills ecosystem; security dimension especially timely given Issue #492.  
   *Status*: Open.

5. **Self-Audit Skill (v1.3.0)** ([PR #1367](https://github.com/anthropics/skills/pull/1367))  
   *Functionality*: A universal skill that performs mechanical file verification followed by a four-dimension reasoning quality audit.  
   *Discussion highlights*: Novel "damage-severity priority" approach; community debating scope and markdown parsing details.  
   *Status*: Open.

6. **Testing-Patterns Skill** ([PR #723](https://github.com/anthropics/skills/pull/723))  
   *Functionality*: Comprehensive coverage of unit testing (AAA pattern), React Testing Library, end-to-end, and testing philosophy (Testing Trophy model).  
   *Discussion highlights*: Requested by multiple community members; discussion around maintaining concise trigger conditions.  
   *Status*: Open.

7. **Color-Expert Skill** ([PR #1302](https://github.com/anthropics/skills/pull/1302))  
   *Functionality*: Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD), color spaces (OKLCH, OKLAB, CAM16), and accessibility.  
   *Discussion highlights*: Niche but highly detailed; community appreciated the "what-to-use-when" tables.  
   *Status*: Open.

8. **CONTRIBUTING.md** ([PR #509](https://github.com/anthropics/skills/pull/509))  
   *Functionality*: Adds a contributing guide to improve the repository's community health score from 25%.  
   *Discussion highlights*: Closes Issue #452; five-section format praised as a model for other repositories.  
   *Status*: Open.

---

## 2. Community Demand Trends
*From the most active issues, five clear demand directions emerge:*

- **Skill reliability & developer tooling** – The `run_eval.py` 0% recall bug (Issues [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061)) has 22+ combined comments. The community strongly needs a working evaluation loop to optimize skill descriptions. Windows compatibility is a recurring sub-theme.

- **Security and trust boundaries** – Issue [#492](https://github.com/anthropics/skills/issues/492) (34 comments) highlights the risk of community skills impersonating official Anthropic skills under the `anthropic/` namespace. Users demand namespace verification, permission scoping, and trust scoring.

- **Enterprise sharing & governance** – Issue [#228](https://github.com/anthropics/skills/issues/228) (14 comments) requests org-wide skill sharing via libraries or direct links. Related: Issue [#1175](https://github.com/anthropics/skills/issues/1175) raises SharePoint security and context window concerns.

- **New skill categories** – Active proposals for **agent governance** (Issue [#412](https://github.com/anthropics/skills/issues/412)), **compact memory notation** (Issue [#1329](https://github.com/anthropics/skills/issues/1329)), and **reasoning quality gate pipeline** (Issue [#1385](https://github.com/anthropics/skills/issues/1385)) show appetite for infrastructure-level and safety-oriented skills.

- **Duplicate content & plugin hygiene** – Issue [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) reports that `document-skills` and `example-skills` plugins install identical content. The community wants clearer plugin boundaries and deduplication.

---

## 3. High-Potential Pending Skills
*These open PRs have active cross-references and reviews, suggesting imminent landing:*

- **`run_eval.py` fix suite** ([PR #1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323)) – Multiple PRs address the same core evaluation bug. The earliest (PR #1298) is the most comprehensive; others may be superseded. Expect a merged fix soon.

- **Self-Audit Skill** ([PR #1367](https://github.com/anthropics/skills/pull/1367)) – Author has already filed a follow-up issue [#1385](https://github.com/anthropics/skills/issues/1385) extending the concept. Active engagement with maintainers suggests strong likelihood of merge.

- **Document Typography** ([PR #514](https://github.com/anthropics/skills/pull/514)) – No major blockers; community consensus on value. Low complexity, high utility.

- **Testing-Patterns** ([PR #723](https://github.com/anthropics/skills/pull/723)) – Comprehensive and well-structured; waiting on final trigger condition polish.

- **Skill-Quality & Security Analyzers** ([PR #83](https://github.com/anthropics/skills/pull/83)) – Long-running (since Nov 2025). Recent security incidents (Issue #492) may accelerate its merge.

- **ODT Skill** ([PR #486](https://github.com/anthropics/skills/pull/486)) – Niche but filling a clear gap in document format support (LibreOffice, ISO standard). Discussion focuses on template filling and ODT-to-HTML conversion.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill development tooling (fixing the broken evaluation loop) alongside enterprise-grade governance patterns—security namespace verification, organizational sharing, and reasoning quality gates—rather than for any single domain-specific skill.**

---

# Claude Code Community Digest
**2026-07-11**

## Today's Highlights

[`v2.1.207`](https://github.com/anthropics/claude-code/releases/tag/v2.1.207) ended the opt-in requirement for **Auto mode** on Bedrock, Vertex AI, and Foundry, and fixed a long-standing terminal freeze during streaming of long lists/tables. Meanwhile, the community is buzzing over two blockers: an **Android/glibc regression** (#50270, 63 comments) that has made Claude Code unusable on Termux for months, and a highly-voted **external URL whitelist** feature (#27263, 128 👍) that would unlock OAuth and third-party integrations. A flurry of new bugs today (many with zero comments) suggests the recent chat/cowork merge and Fable‑5 rollout have introduced fresh instability.

## Releases

[`v2.1.207`](https://github.com/anthropics/claude-code/releases/tag/v2.1.207) – **Auto mode** is now universally available without the `CLAUDE_CODE_ENABLE_AUTO_MODE` environment variable on Bedrock, Vertex AI, and Foundry; users can disable it via `disableAutoMode` in settings. A critical fix addresses terminal freezing and keystroke lag when streaming responses containing very long lists, tables, or paragraphs.

## Hot Issues

1. **[#50270 – Android/Termux broken since v2.1.113 (glibc native binary, no JS fallback)](https://github.com/anthropics/claude-code/issues/50270)**  
   *Comments: 63 • 👍: 55*  
   The switch from a JavaScript entry point to a glibc Linux binary completely breaks Claude Code on Termux (Android). Community frustration is high, with no fix in sight after three months – a major portability regression.

2. **[#27263 – Configurable external URL whitelist for OAuth / third‑party flows](https://github.com/anthropics/claude-code/issues/27263)**  
   *Comments: 49 • 👍: 128*  
   The most upvoted open feature request. Users need a way to allow specific external URLs (e.g., for OAuth callbacks) in the new App Preview feature, which currently blocks all external navigation.

3. **[#56913 – Tiered Opus brains + Sonnet workers for autonomous operation](https://github.com/anthropics/claude-code/issues/56913)**  
   *Comments: 46 • 👍: 0*  
   A long-running discussion (46 comments) about making Claude Code a true autonomous orchestrator – using a powerful (expensive) model as the “brain” with cheaper sub-agents for specific tasks, persistent state, and pipeline automation.

4. **[#38698 – Per‑agent model provider routing (e.g., local Ollama for subagents)](https://github.com/anthropics/claude-code/issues/38698)**  
   *Comments: 8 • 👍: 39*  
   Users want to route individual sub-agents to different providers within the same session – e.g., Anthropic for the orchestrator, local Ollama for cheap tasks. Currently `model` is session-wide.

5. **[#49535 – Persistent “safety classifier temporarily unavailable” outage blocking auto mode](https://github.com/anthropics/claude-code/issues/49535)**  
   *Comments: 5 • 👍: 25*  
   A server-side safety classifier unavailability makes all edit/write/bash tools fail in auto mode. Users report this lasting for hours, rendering the feature unusable.

6. **[#75607 – Server-side experiment silently removed Opus 4.8 thinking summaries; CLI self‑updated despite autoUpdates: false](https://github.com/anthropics/claude-code/issues/75607)**  
   *Comments: 4 • 👍: 6*  
   A concerning report: a server-side experiment (`x-cc-atis`) removed thinking summaries without notice, and the CLI ignored the `autoUpdates: false` setting. Users fear loss of control over their environment.

7. **[#76189 – Fable‑5 advisor returns “unavailable” whenever transcript contains any prior tool call](https://github.com/anthropics/claude-code/issues/76189)**  
   *Comments: 4 • 👍: 1*  
   The server-side advisor with `advisorModel: "fable"` fails after any prior tool use – even a single `Bash(ls)`. Opus advisor is immune, suggesting a Fable‑5 specific regression.

8. **[#76342 – Persistent headless remote‑control sessions invisible in mobile app](https://github.com/anthropics/claude-code/issues/76342)**  
   *Comments: 3 • 👍: 0*  
   Operators of long-running headless sessions report they cannot reach them via the mobile app. No safe way to monitor or interact with multi-day workflows.

9. **[#76604 – Cowork broken since Chat/Cowork merge; projects disappear within 24h](https://github.com/anthropics/claude-code/issues/76604)**  
   *Comments: 3 • 👍: 0*  
   A fresh data-loss bug: after the 8–9 July chat/cowork merge, projects vanish and connector tools never reach Cowork sessions on Windows. High severity for team users.

10. **[#46460 – Support using Dispatch in Claude Desktop](https://github.com/anthropics/claude-code/issues/46460)**  
    *Comments: 3 • 👍: 18*  
    Users managing multiple computers want the Dispatch (multi-machine orchestration) feature available in the Desktop app, not just the CLI.

## Key PR Progress

1. **[#76581 – Harden plugin YAML, path, and symlink handling](https://github.com/anthropics/claude-code/pull/76581)**  
   Official plugin scripts are patched against YAML frontmatter breakout, path traversal, and symlink-based credential overwrite. Important for supply-chain security.

2. **[#76576 – Align plugin docs with v2.1.207 shell‑injection fix](https://github.com/anthropics/claude-code/pull/76576)**  
   Updates the hosted plugin reference and hook validator to reflect that `${user_config.*}` in shell-form hooks is now rejected and `pluginConfigs` is no longer read from project-level settings.

3. **[#41447 – Open‑source Claude Code (stale)](https://github.com/anthropics/claude-code/pull/41447)**  
   A long-standing PR (since March) that aims to make the CLI open source. No recent updates – community interest is high but progress appears stalled.

4. **[#76475 – Fix missing `innerHTML +=` sink in security-guidance patterns](https://github.com/anthropics/claude-code/pull/76475)**  
   Security-guidance plugin now detects `innerHTML+=` append patterns, not just direct assignment. Catches a common XSS vector.

5. **[#76394 – Claude Code Launcher for Windows CLI](https://github.com/anthropics/claude-code/pull/76394)**  
   A third-party contribution providing a full-featured Windows PowerShell launcher with 14 interactive menus. Community-driven platform parity effort.

## Feature Request Trends

- **Orchestration & autonomy** (#56913, #38698): The strongest trend is toward multi-agent, multi-model workflows – tiered brains, per-agent routing, persistent state, and long-running autonomy.
- **App Preview / external access** (#27263): A highly-upvoted need to whitelist external URLs for OAuth and third-party flows, opening up the preview feature for real-world web apps.
- **Desktop & mobile parity** (#46460, #76554, #76342): Features like Dispatch and Remote Control are requested in the Desktop app and mobile app, reflecting a desire to manage workflows across devices seamlessly.
- **Accessibility** (#76589): Requests for text-to-speech and other a11y improvements are emerging, especially for the Cowork / Dispatch interface.
- **Agent transparency** (#76607, #76606): Users want better visibility into which model a subagent is actually running and why prompt cache is being invalidated.

## Developer Pain Points

- **Platform fragmentation**: The Android/Termux glibc regression (#50270) has been open for three months, eroding trust in cross-platform support. Windows users also report MSIX installation failures (#74170) and update banner mismatches (#75654).
- **Silent changes & loss of control**: The server-side experiment that removed thinking summaries (#75607) and the auto‑update ignoring user settings (#75607) have angered power users. The recent cowork merge caused data loss (#76604).
- **Safety classifier downtime**: Persistent “classifier unavailable” errors (#49535) block auto mode for hours, a critical reliability issue.
- **Model downgrades & unpredictable behavior**: Multiple reports of unwarranted model switches (e.g., Fable‑5 to Opus 4.8) due to safeguards (#76605, #76612) or silent experiments (#75607). The Fable‑5 advisor bug (#76189) further erodes trust in model-specific features.
- **Memory & performance**: A desktop memory leak reaching 119 GB (#76588) and CPU pinning on RAM disks (#76608) highlight resource management gaps.
- **Data integrity**: Compaction summary recording partial stdout as confirmed results (#76584) and prompt cache invalidation (#76606) show core systemic issues that increase costs and skew session state.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-11

## Today's Highlights
Two new alpha releases (rust-v0.145.0-alpha.3 and alpha.4) went live, though no changelog details were provided. A major session bug (#18993) that has frustrated users for months finally saw closure, while a new wave of Windows-specific crashes, image‑gen regressions, and sandbox performance issues dominated the issue tracker. Several important infrastructure PRs landed, notably around environment inheritance, plugin caching, and Windows executable resolution.

## Releases
- **rust-v0.145.0-alpha.3** and **rust-v0.145.0-alpha.4**  
  Both are tagged as alpha builds of the Rust-based Codex CLI. No further changelog was published in the last 24 hours.

## Hot Issues (10 noteworthy)

1. **[#18993 – Unable to open past conversation history in VS Code extension](https://github.com/openai/codex/issues/18993)**  
   *Closed after 50 comments and 54 upvotes.* The regression prevented users from loading any previous chat history in the VS Code extension. Community relief is palpable; fix is merged.

2. **[#28507 – “Selected model is at capacity” error in App](https://github.com/openai/codex/issues/28507)**  
   *30 comments, 16 upvotes.* Persistent capacity errors for Pro users on Windows. No resolution yet; likely a backend scaling issue.

3. **[#28969 – Add setting to disable auto-resolve in 60 seconds (CLI)](https://github.com/openai/codex/issues/28969)**  
   *23 comments, 104 upvotes* – the most upvoted open issue. Users want control over automatic resolution timeouts during planning questions. Strong demand.

4. **[#32032 – Computer Use crashes on macOS 15.7.7 due to Swift Concurrency symbol](https://github.com/openai/codex/issues/32032)**  
   *16 comments.* A critical blocker for macOS users of Computer Use. Related to #22822.

5. **[#9615 – VS Code extension goes completely blank](https://github.com/openai/codex/issues/9615)**  
   *11 comments, still open after 6 months.* Reproducible on Windows, affects all models. High priority for extension stability.

6. **[#14039 – Allow per-subagent model/provider/profile selection](https://github.com/openai/codex/issues/14039)**  
   *10 comments, 15 upvotes.* Long-standing enhancement request for multi-model workflows. Still open.

7. **[#24069 – Regression: Codex CLI 0.133.0 breaks native subagent spawning for local Ollama](https://github.com/openai/codex/issues/24069)**  
   *8 comments.* Critical for local-first users. Downgrading to 0.132.0 is the current workaround.

8. **[#31882 – GPT-5.6 hardcoded settings cause 400 errors on Azure](https://github.com/openai/codex/issues/31882)**  
   *7 comments, 16 upvotes.* Azure customers cannot use latest models because of hardcoded backend flags. Needs immediate fix.

9. **[#32343 – Unsigned codex-computer-use.exe triggers Defender false positive](https://github.com/openai/codex/issues/32343)**  
   *3 comments, closed.* Security tooling flags the bundled binary. Quick closure suggests a code-signing fix is in progress.

10. **[#32314 – Elevated sandbox adds 20s per command on Windows](https://github.com/openai/codex/issues/32314)**  
    *2 comments, opened today.* Severe sandbox performance penalty. Workaround: run unelevated, but that breaks `apply_patch` with split roots.

## Key PR Progress (10 important)

1. **[#30135 – Publish versioned bash fork artifacts](https://github.com/openai/codex/pull/30135)**  
   Restores independently versioned bash fork pipeline, similar to zsh split in #30114. Reduces rebuild effort.

2. **[#30036 – Make Windows executable resolution deterministic](https://github.com/openai/codex/pull/30036)**  
   Fixes a race condition where Windows could choose a different executable when `lpApplicationName` is absent. Stacks on #29845.

3. **[#30016 – Core: inherit current step environments in subagents](https://github.com/openai/codex/pull/30016)**  
   Subagents now receive the environment active at sampling time, not a stale snapshot. Critical for deferred executors.

4. **[#30017 – Core: refresh turn diff roots from step context](https://github.com/openai/codex/pull/30017)**  
   Prevents path formatting errors when a deferred environment becomes available after turn start.

5. **[#29960 – Cache stable executor skills per model step](https://github.com/openai/codex/pull/29960)**  
   Avoids rereading skill metadata on every sampling step. Performance optimization.

6. **[#29946 – Cache stable plugin metadata separately from live MCP runtimes](https://github.com/openai/codex/pull/29946)**  
   Segregates plugin manifests (stable) from MCP process state (volatile). Improves reliability.

7. **[#32332 – Add ordinals to paginated rollout records](https://github.com/openai/codex/pull/32332)**  
   Durable ordering for paginated thread history – enables processing suffixes without rebuilding all history.

8. **[#32312 – Require prefixes for outbound response item IDs](https://github.com/openai/codex/pull/32312)**  
   Introduces `ResponseItemId` with UUIDv7 + prefixes. Improves observability and legacy compatibility.

9. **[#32290 – Respect model support for reasoning summaries](https://github.com/openai/codex/pull/32290)**  
   Fixes #31969: the `reasoning.summary` parameter is now omitted for models that don't support it (e.g., `gpt-5.3-codex-spark`).

10. **[#32288 – Make GPT-5.6 Sol the default Bedrock model](https://github.com/openai/codex/pull/32288)**  
    Promotes GPT-5.6 variants ahead of 5.5/5.4 in Amazon Bedrock catalog. Includes per-variant descriptions.

## Feature Request Trends
- **Per-subagent model selection** (#14039): Ability to assign different models, providers, or profiles to spawned subagents.
- **Disable auto-resolve in CLI** (#28969): Users want manual control over question-timeout behavior.
- **Robust remote previews** (#29125): Support for video files (`mp4`, `webm`, `mov`, `gif`) and proper PDF rendering in remote workspaces.
- **Better image-generation output handling** (multiple issues): Save to accessible local paths, expose file system paths to agents, and fix broken image placeholders.

## Developer Pain Points
- **Windows stability is a mess**: Multiple crashes (`0xc0000409`, heap corruption), elevated sandbox slowdowns (20s per command), and AppX container restarts (#31989, #32361, #32314).
- **Image generation regression**: `image_gen` returns inline data but no saved file path – broken on both Desktop and CLI since versions 0.140/0.141 (#28898, #28849, #29180, #32153).
- **macOS Computer Use broken**: Missing Swift Concurrency symbol on 15.7.x makes the MCP plugin crash on launch (#32032, #22822).
- **Azure/custom provider friction**: Hardcoded model settings (`use_responses_lite`, `multi_agent_version`) cause 400 errors for non-ChatGPT backends (#31882).
- **CLI update loop**: Successful update still prompts for update on next run (#30774).
- **MCP hangs with remote config overrides**: TUI freezes at "Loading MCP" when `resume --remote` mismatches app-server capabilities (#32240).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-11

## Today’s Highlights
No new releases landed in the last 24 hours, but the community surfaced several critical bugs, including a **subagent falsely reporting goal success after hitting MAX_TURNS** and the **generalist agent hanging indefinitely**. Security‑focused pull requests are gaining momentum, with fixes for path traversal in the A2A restore command and a TOCTOU vulnerability in IDE token file creation. Meanwhile, long‑running feature work continues on AST‑aware codebase mapping and component‑level evaluations.

## Releases
None (last 24 hours).

## Hot Issues (10 selected from 30 updated today)

1. **[#22323 – Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   The `codebase_investigator` subagent emits `status: "success"` and `Termination Reason: "GOAL"` even when it hit the turn limit without doing any analysis. This misleads users into thinking work was completed. 10 comments, 2 👍.

2. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   Gemin‑CLI hangs forever when deferring to the generalist agent for simple tasks like folder creation. Workaround: disable sub‑agent delegation. 7 comments, 8 👍 – high community impact.

3. **[#25166 – Shell command execution gets stuck with “Waiting input” after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   After executing a finished shell command, the UI still shows “Awaiting user input,” leaving the session frozen. Happens with trivial commands. 4 comments, 3 👍.

4. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   The browser agent terminates with `GOAL` but produces no useful output on Wayland sessions. 4 comments, 1 👍.

5. **[#28355 – MCP tool discovery silently blocks for 10 minutes](https://github.com/google-gemini/gemini-cli/issues/28355)**  
   When an MCP server returns a mismatched `id` in `tools/list`, gemini‑cli waits 600 seconds with no spinner or warning before giving up. Filed today, 1 comment, urgent UX issue.

6. **[#26522 – Stop Auto Memory from retrying low‑signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   The Auto Memory extraction agent repeatedly re‑reads low‑signal transcripts because it never marks them as processed. Causes endless CPU loops. 5 comments.

7. **[#24246 – Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   Users with over 400 tools enabled hit a 400 error; the agent should scope tools intelligently. 3 comments.

8. **[#22267 – Browser Agent ignores settings.json overrides (e.g., maxTurns)](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   `AgentRegistry` correctly reads settings, but the browser agent doesn’t apply them, making user‑configured limits useless. 3 comments.

9. **[#21763 – Bugreport doesn’t provide context of the subagent](https://github.com/google-gemini/gemini-cli/issues/21763)**  
   The `/bug` report only contains the main session; sub‑agent activity is omitted, hampering debugging. 2 comments.

10. **[#21968 – Gemini does not use skills and sub‑agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
    Users must explicitly instruct the model to use custom skills/sub‑agents, even for related tasks. Purely anecdotal but widely echoed. 6 comments.

## Key PR Progress (10 selected from 11 updated)

1. **[#28319 – Refactor(a2a‑server): enforce path trust check prior to environment loading](https://github.com/google-gemini/gemini-cli/pull/28319)**  
   Ensures workspace path trust is verified before reading `~/.env` files, preventing untrusted environment injection. `AsyncLocalStorage` isolates task environments.

2. **[#28164 – Fix(core): limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164)** *(CLOSED)*  
   Caps recursive reasoning at 15 turns per request (configurable via `maxSessionTurns`), protecting against infinite loops and API quota exhaustion.

3. **[#28248 – Docs: explain MCP env expansion](https://github.com/google-gemini/gemini-cli/pull/28248)**  
   Adds a dedicated section to the MCP configuration docs covering `$VAR`, `${VAR:-fallback}`, Windows `%VAR%`, and warns against unsupported syntax.

4. **[#28247 – Fix(core): match ls ignore globs by relative path](https://github.com/google-gemini/gemini-cli/pull/28247)**  
   `ls` ignore patterns containing path separators are now matched against workspace‑relative paths instead of basenames only, fixing `**` glob failures.

5. **[#28316 – Fix(a2a‑server): ensure task cancellation aborts execution loop](https://github.com/google-gemini/gemini-cli/pull/28316)**  
   Prevents “ghost executions” after cancelling tasks. Also addresses race conditions, memory leaks, and an unhandled promise rejection discovered during review.

6. **[#28353 – Fix(a2a‑server): prevent path traversal in restore command (defense‑in‑depth)](https://github.com/google-gemini/gemini-cli/pull/28353)**  
   Normalizes user‑supplied paths to ensure they stay inside `checkpointDir`, closing a path traversal that could read arbitrary files.

7. **[#28352 – Fix(caretaker): sanitize and wrap issue title in untrusted_context](https://github.com/google-gemini/gemini-cli/pull/28352)**  
   Escapes `</untrusted_context>` tags in issue titles to prevent prompt injection in the caretaker agent’s ingestion pipeline.

8. **[#28345 – Feat(caretaker‑triage): implement LLM triage orchestrator and container build](https://github.com/google-gemini/gemini-cli/pull/28345)**  
   Introduces an LLM‑based triage orchestrator (`triage_orchestrator.py`) with GCS debug logging and a Cloud Run Job container definition.

9. **[#28330 – Fix(ide‑companion): set token file mode atomically to close TOCTOU window](https://github.com/google-gemini/gemini-cli/pull/28330)**  
   Uses `fs.writeFile` with explicit mode `0o600` instead of a separate `chmod`, eliminating the race where the auth‑token file is briefly world‑readable.

10. **[#28349 – Fix(cli): guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28349)**  
    Prevents `RangeError: Maximum call stack size exceeded` when the settings object contains circular references (e.g., `obj.self = obj`).

## Feature Request Trends

Several EPICs dominate the feature landscape:

- **AST‑Aware Codebase Understanding** – Issue #22745 tracks investigations into AST‑aided file reads, search, and codebase mapping. Related sub‑issues explore using tools like `tilth` or `glyph` to improve the `codebase_investigator`.
- **Component‑Level Evaluations** – Issue #24353 is a follow‑up to the behavioral‑evals system, aiming to generate and run 76+ tests across 6 Gemini models for reliable agent benchmarking.
- **Agent Self‑Awareness** – #21432 requests that the CLI accurately know its own flags, hotkeys, and execution mechanics to act as its own expert guide.
- **Subagent Trajectory Sharing** – #22598 proposes exposing sub‑agent trajectories via `/chat share` to aid debugging and evaluation.
- **Safety & Destructive Behavior Prevention** – #22672 asks the agent to avoid dangerous commands (`git reset`, `--force`) when safer alternatives exist, especially for databases and complex git operations.

## Developer Pain Points

The most frequently reported frustrations are:

- **Agent Hangs & False Success** – The generalist agent hangs forever, and subagents falsely report goal achievement after hitting turn limits, eroding trust.
- **Shell / Terminal Issues** – Commands that finish prompt “Wait for input” indefinitely; terminal resizing causes flicker and performance hiccups.
- **Browser Agent Fragility** – Fails on Wayland, ignores `settings.json` overrides, and lacks session‑takeover logic for persistent browser profiles.
- **Memory System Loops** – Auto Memory retries low‑signal transcripts indefinitely, logging excessive data and leaking secrets into model context.
- **MCP / Tool Limits** – MCP tool discovery blocks silently for 10 minutes on invalid server responses; more than 128 tools cause a 400 error.
- **Configuration & Permission Gaps** – Symlinked agent files not recognized, sub‑agents running despite being disabled, and bug reports missing sub‑agent context.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-11

## Today’s Highlights

A new patch release (v1.0.71-0) introduces a pinned prompts dashboard and streamlined install guidance, but the community remains focused on critical bugs: voice mode ASR models are failing silently for all bundled speech recognition backends, and a mid-session TUI freeze continues to plague WSL2 users. Additionally, multiple reports of broken OAuth flows for MCP servers highlight authentication gaps that are blocking enterprise adoption.

---

## Releases

**v1.0.71-0** (published in last 24h)

*Added*
- Pinned prompts setting in `/settings` to control prompt pinning
- Repo and Repo (local) scope tabs in the `/settings` dashboard

*Improved*
- Uses targeted validation commands and lighter install guidance by default
- New keybindings: `ctrl+x → x` to close a session, `ctrl+x → h` to hide the side panel

Full release notes: [github.com/github/copilot-cli/releases/tag/v1.0.71-0](https://github.com/github/copilot-cli/releases/tag/v1.0.71-0)

---

## Hot Issues (10 of 23 recently updated)

### 1. Voice mode: all bundled ASR models fail silently  
**#4024** — *OPEN* — `area:models`  
**Summary:** `/voice` records audio (microphone level reacts) but every transcription returns empty for all three offered ASR models. Root cause appears to be a bug in the MultiModalProcessor routing for Nemotron speech (RNNT) in Foundry Local Core.  
**Why it matters:** Voice mode is a marquee feature; a complete silent failure undermines trust.  
**Community reaction:** 0 👍 but 7 comments — active investigation.  
[github.com/github/copilot-cli/issues/4024](https://github.com/github/copilot-cli/issues/4024)

### 2. TUI wedges mid-turn – WSL2 + Windows Terminal  
**#4069** — *OPEN* — `triage`  
**Summary:** Session screen clears, input becomes dead, Ctrl+C/Ctrl+\ ignored. The error log shows `write EIO` on stdout followed by `EPIPE` on the Rust JSON-RPC transport. Reported on WSL2 with Windows Terminal.  
**Why it matters:** This is the top-voted open issue (8 👍, 7 comments) and a total work stoppage for many users.  
[github.com/github/copilot-cli/issues/4069](https://github.com/github/copilot-cli/issues/4069)

### 3. Atlassian MCP server: OAuth succeeds but zero tools exposed  
**#4089** — *OPEN* — `area:authentication` + `area:mcp`  
**Summary:** The Atlassian MCP server connects and OAuth completes, but no tools are ever exposed to agent sessions. Other HTTP MCP servers (LeanIX, Lucid) work correctly with the same app configuration.  
**Why it matters:** MCP ecosystem is critical for enterprise workflows; broken integrations block adoption.  
[github.com/github/copilot-cli/issues/4089](https://github.com/github/copilot-cli/issues/4089)

### 4. `xhigh reasoning` removed for GPT‑5.4 and GPT‑5.3‑codex  
**#2739** — *CLOSED* — `area:models`  
**Summary:** Users reported that the `xhigh` reasoning parameter was silently removed from two popular models. The issue was closed, but not before generating 12 👍 and 5 comments — a clear sign of user dissatisfaction.  
**Why it matters:** Undocumented model capability removal erodes confidence in model parity.  
[github.com/github/copilot-cli/issues/2739](https://github.com/github/copilot-cli/issues/2739)

### 5. Feature: opt‑in model discovery for BYOK / custom providers  
**#3795** — *OPEN* — `area:models`  
**Summary:** BYOK mode requires manual `COPILOT_MODEL` or `--model` setting. The CLI does not query the custom provider for a list of available models, making first-time usage cumbersome.  
**Why it matters:** BYOK (bring-your-own-key) users want a seamless experience discovering local models.  
[github.com/github/copilot-cli/issues/3795](https://github.com/github/copilot-cli/issues/3795)

### 6. `web_search` tool returns hallucinated answers with fake citations  
**#4093** — *OPEN* — `area:tools`  
**Summary:** The built-in `web_search` tool occasionally returns confident, detailed answers with citations that are entirely fabricated when underlying retrieval finds nothing relevant.  
**Why it matters:** Hallucination in a tool that is supposed to ground LLM responses is dangerous for correctness.  
[github.com/github/copilot-cli/issues/4093](https://github.com/github/copilot-cli/issues/4093)

### 7. Deleting a session in the app does not propagate to session store  
**#4094** — *OPEN* — `triage`  
**Summary:** Deleting a session from the Copilot app UI leaves orphaned rows in `session-store.db`, `data.db`, and VS Code Copilot Chat history.  
**Why it matters:** Privacy and data hygiene are compromised; sessions persist across the client-server boundary.  
[github.com/github/copilot-cli/issues/4094](https://github.com/github/copilot-cli/issues/4094)

### 8. MCP OAuth flow broken: servers marked `needs‑auth` during discovery  
**#4085** — *OPEN* — `area:authentication` + `area:mcp`  
**Summary:** OAuth-protected MCP servers fail to connect because no auth handler is registered, leaving them permanently `needs-auth`. Even retry attempts drop after ~90s.  
**Why it matters:** A root‑cause issue that replicates across multiple servers (Azure AD, Work IQ).  
[github.com/github/copilot-cli/issues/4085](https://github.com/github/copilot-cli/issues/4085)

### 9. Voice mode: auto‑submit on spacebar release (PTT send)  
**#4090** — *OPEN* — `area:input-keyboard`  
**Summary:** Users want push-to-talk voice mode to automatically submit transcribed text when the spacebar is released, avoiding a separate Enter press.  
**Why it matters:** Reduces friction in voice‑first workflows; high frequency of similar requests.  
[github.com/github/copilot-cli/issues/4090](https://github.com/github/copilot-cli/issues/4090)

### 10. Standalone binary removed from all `linuxmusl-x64` release tarballs  
**#4091** — *CLOSED* — `breaking change`  
**Summary:** Alpine Linux users found that the precompiled standalone binary was removed starting from v1.0.71 releases, breaking environments that rely on musl builds.  
**Why it matters:** A breaking change without migration notice; closed quickly but highlights release process gap.  
[github.com/github/copilot-cli/issues/4091](https://github.com/github/copilot-cli/issues/4091)

---

## Key PR Progress

Only one pull request was updated in the last 24h:  
**#2565** — *OPEN* — `install: guard against duplicate PATH entries on reinstall`  
**Summary:** Running the installer twice without restarting the shell appends a duplicate PATH line to the shell profile, because the script uses `command -v copilot` to decide whether to prompt, and that check requires a shell restart.  
**Why it matters:** A small but recurring annoyance for rapid iteration; merged if accepted will improve first‑run UX.  
[github.com/github/copilot-cli/pull/2565](https://github.com/github/copilot-cli/pull/2565)

*(Only one PR was active in the reporting window; no other PRs updated.)*

---

## Feature Request Trends

Three key directions emerge from the issue tracker:

1. **Voice‑mode enhancements**  
   - Auto‑submit on spacebar release (#4090)  
   - Temporarily mute system playback during voice capture (#4092)  
   - These requests indicate that voice mode is being actively used and users want it to be more ergonomic.

2. **MCP ecosystem maturity**  
   - Proper OAuth support (handlers not crashing) (#4084, #4085, #4086)  
   - Auto‑update of plugins from marketplace (#3331)  
   - Static OAuth callback for Atllassian (#4089)  
   - The community is pushing for MCP to be enterprise‑grade.

3. **BYOK / custom provider flexibility**  
   - Allow custom HTTP headers (#3399)  
   - Model discovery query (#3795)  
   - Ability to switch between multiple models (including local) mid‑session (#3709)  
   - Users want the same ease of use as hosted models when running their own.

---

## Developer Pain Points

Recurring frustrations visible in this digest:

- **Silent failures** — Voice mode ASR models returning empty results (#4024) and `web_search` hallucinating (#4093) erode trust in tool reliability.  
- **Session state corruption** — Orphaned sessions (#4094) and TUI freezes (#4069) disrupt workflow and raise data‑hygiene concerns.  
- **Model management regressions** — Silent removal of `xhigh reasoning` (#2739) and removal of the standalone musl binary (#4091) show that release decisions can break core functionality without adequate communication.  
- **OAuth friction** — Multiple MCP server integrations fail silently due to missing auth handlers (#4085, #4086, #4089), blocking enterprise adoption of the Copilot CLI ecosystem.  
- **Shell tool blocking** — The agent becomes unresponsive when a `bash` tool call blocks indefinitely (#2533), a fundamental usability issue for automation scenarios.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-11

## 1. Today’s Highlights
The biggest fix today brings `kimi acp` (the multi‑session ACP server) up to parity with interactive `kimi` by loading globally‑configured MCP servers. Fresh installs also get a more helpful error message when trying to run commands before login. Meanwhile, a Safari‑specific IME composition bug has been closed after a long‑running PR.

---

## 2. Releases
No new releases in the last 24 hours. The latest stable version remains unchanged.

---

## 3. Hot Issues
No new issues were filed in the last 24 hours. All recent community activity is concentrated on pull requests (see below).

---

## 4. Key PR Progress
All 5 pull requests updated in the last 24 hours are listed. Since only 5 are available, they are all covered.

### Open PRs

- **#2490 – `fix(acp): load global MCP config in kimi acp server`**  
  *Author: nankingjing | Created: 2026-07-11*  
  **Summary:** ACP clients (Zed, JetBrains AI Assistant, orchestrators) previously saw only built‑in tools because the global MCP configuration was never loaded. This PR fixes parity gap [#2464](https://github.com/MoonshotAI/kimi-cli/issues/2464).  
  [🔗 PR #2490](https://github.com/MoonshotAI/kimi-cli/pull/2490)

- **#2489 – `fix(soul): restore plan-mode tool bindings after /init creates throwaway soul`**  
  *Author: nankingjing | Created: 2026-07-10*  
  **Summary:** Running `/init` created a throwaway `KimiSoul` that rebinds shared tool instances, corrupting `ExitPlanMode`, `EnterPlanMode`, and `WritePlan` in the live session. Fixes [#2478](https://github.com/MoonshotAI/kimi-cli/issues/2478).  
  [🔗 PR #2489](https://github.com/MoonshotAI/kimi-cli/pull/2489)

- **#2488 – `fix(soul): make LLMNotSet error message actionable for fresh installs`**  
  *Author: nankingjing | Created: 2026-07-10*  
  **Summary:** Homebrew‑installed users running any command before `kimi login` saw only `LLM not set`. The new message guides users to authenticate first. Closes [#2456](https://github.com/MoonshotAI/kimi-cli/issues/2456).  
  [🔗 PR #2488](https://github.com/MoonshotAI/kimi-cli/pull/2488)

### Closed PRs (updated within last 24h)

- **#2353 – `fix(web): tighten app layout spacing`**  
  *Author: anxndsgn | Created: 2026-05-23 | Closed: 2026-07-10*  
  **Summary:** Removes outer gutters (preserves safe‑area insets) and refines sidebar list spacing / search input display. A pure UI polish for the web interface.  
  [🔗 PR #2353](https://github.com/MoonshotAI/kimi-cli/pull/2353)

- **#1815 – `fix(web): prevent Enter from sending message during IME composition on Safari`**  
  *Author: qianqiuqiu | Created: 2026-04-09 | Closed: 2026-07-10*  
  **Summary:** On Safari (macOS) with Chinese IME, pressing Enter to commit raw text from the candidate bar incorrectly sent the message. This long‑standing bug is now fixed.  
  [🔗 PR #1815](https://github.com/MoonshotAI/kimi-cli/pull/1815)

---

## 5. Feature Request Trends
While no new issues appeared today, the PR activity reveals several user‑driven themes:

- **ACP parity with interactive mode** – Tools configured globally should be available in the ACP server (PR #2490).
- **Better onboarding for new users** – Clearer error messages and guidance after installation (#2488).
- **UI polish and browser compatibility** – Layout refinements (#2353) and Safari IME handling (#1815) indicate ongoing demand for a consistent web experience.
- **Reliability during multi‑session workflows** – Fixing tool‑binding corruption when using `/init` (#2489) addresses a core stability concern.

---

## 6. Developer Pain Points
The PRs this week highlight several recurrent frustrations:

- **ACP clients missing global tools** – Developers integrating Kimi into IDEs or orchestrators were unable to use custom MCP servers, breaking expected workflows.
- **Cryptic errors on fresh installs** – `LLM not set` without actionable next steps confused new users, especially those installing via Homebrew.
- **Tool binding corruption** – `/init` inadvertently shared mutable state between sessions, causing plan‑mode tools to break.
- **Safari IME composition** – A long‑standing bug (over 3 months from creation to closure) that made the web interface unusable for users typing in Chinese on macOS.

---

*Generated from GitHub data for `MoonshotAI/kimi-cli` on 2026-07-11.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-11

## Today's Highlights

A busy day of bug fixes and security hardening, led by a critical SSRF vulnerability patch, a long‑standing snapshot‑compaction issue, and a surge of community frustration over CPU and memory bloat. Multiple PRs also address Windows‑specific shell hangs, credential‑file corruption, and silent background‑task failures.

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

*1. [#30086 – High CPU usage in newer versions of OpenCode](https://github.com/anomalyco/opencode/issues/30086)*  
21 comments, 12 👍  
Users report dramatic CPU spikes starting around 7 days ago, making even 3 concurrent sessions unresponsive. The issue is heavily upvoted and implies a regression in the latest updates.

*2. [#3176 – Why is OpenCode massively abusing git?](https://github.com/anomalyco/opencode/issues/3176)*  
17 comments, 9 👍  
A long‑standing complaint (since Oct 2025) that OpenCode runs `git add .` on huge directories (45 GB, 54k files) as part of session snapshots. Community members call this “insane behavior.”

*3. [#6231 – Auto-discover models from OpenAI-compatible provider endpoints](https://github.com/anomalyco/opencode/issues/6231)*  
15 comments, 169 👍  
The most upvoted open feature request. Users want OpenCode to automatically fetch available models from local providers (LM Studio, Ollama, etc.) instead of requiring manual enumeration in config.

*4. [#26772 – Integrated browser for desktop](https://github.com/anomalyco/opencode/issues/26772)*  
13 comments, 3 👍  
A feature request for an in‑app browser to inspect and interact with web content directly from OpenCode Desktop.

*5. [#36140 – GPT-5.6 Luna returns model not found with ChatGPT OAuth](https://github.com/anomalyco/opencode/issues/36140)*  
12 comments, 58 👍  
After OpenAI’s GPT-5.6 release, the built‑in ChatGPT OAuth provider fails with “Model not found.” This is a high‑priority compatibility issue.

*6. [#28089 – OpenCode leaks temporary .so files in /tmp, consuming hundreds of GB](https://github.com/anomalyco/opencode/issues/28089)*  
3 comments, 5 👍  
On Linux, temporary ELF shared objects accumulate without cleanup, filling disk volumes. A silent resource‑exhaustion bug.

*7. [#33356 – Unbounded growth of the `event` table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)*  
3 comments  
Event‑sourcing table never pruned or compacted, causing SQLite bloats that fill volumes and slow down long‑running instances.

*8. [#20977 – Electron desktop app hangs on startup with large .gitignored projects](https://github.com/anomalyco/opencode/issues/20977)*  
4 comments, 2 👍  
Sidecar process pegs CPU at 100% when the saved project list includes directories with many `.gitignored` files. Makes the app unusable on large projects.

*9. [#36218 – Renderer OOM crash loop after updating to v1.17.18](https://github.com/anomalyco/opencode/issues/36218)*  
3 comments  
Desktop app enters a crash loop within 30–60 seconds of startup with an out‑of‑memory error. Affects users who updated from v1.17.15.

*10. [#35828 – Windows TUI fails in v1.17.15 when project .opencode already exists](https://github.com/anomalyco/opencode/issues/35828)*  
3 comments, 2 👍  
On Windows, creating a session in a project that already has a `.opencode` directory causes an `Unexpected server error` due to a race condition in `Config.loadInstanceState`.

---

## Key PR Progress

*1. [#36377 – fix(opencode): close webfetch SSRF redirect bypass, fix IP range checks, harden response handling](https://github.com/anomalyco/opencode/pull/36377)*  
Closes a critical SSRF vulnerability where the `webfetch` tool’s redirect validation could be bypassed. The same fix also improves IP‑range verification and response handling.

*2. [#36375 – fix(runner): queue work when already running instead of discarding](https://github.com/anomalyco/opencode/pull/36375)*  
Fixes a bug where background subagent completions (`ops.prompt()`) were silently dropped if the runner was busy. Now queues the request.

*3. [#36143 – fix(opencode): support GPT-5.6 Responses Lite](https://github.com/anomalyco/opencode/pull/36143)*  
Resolves the “model not found” error for GPT-5.6 Sol/Terra/Luna by routing them through the new Responses Lite API instead of the legacy path.

*4. [#36353 – fix(core): unblock shell tool when a descendant keeps the stdio pipe](https://github.com/anomalyco/opencode/pull/36353)*  
Fixes a Windows‑specific hang where a background process that inherits the stdio pipe prevents the shell tool from ever completing.

*5. [#36369 – feat(cli): show startup progress before TUI](https://github.com/anomalyco/opencode/pull/36369)*  
Adds progress indicators during CLI startup, which can take several seconds resolving the background service. Improves user experience.

*6. [#36368 – fix(client): allow large sse events](https://github.com/anomalyco/opencode/pull/36368)*  
Raises the SSE frame buffer limit from 1 MiB to 32 MiB to avoid truncation of large tool results (e.g., image data).

*7. [#36361 – fix(session): log summary and prune background task failures](https://github.com/anomalyco/opencode/pull/36361)*  
Makes the background `summary.summarize` and `compaction.prune` failures visible (previously silent). Related to #13710.

*8. [#36363 – fix(opencode): defer defaultAgent lookup in session summarize](https://github.com/anomalyco/opencode/pull/36363)*  
Fixes `/compact` silently failing when `default_agent` is a subagent – now defers the lookup to prevent crashes.

*9. [#36360 – fix(fs): refuse credential writes through symlinks](https://github.com/anomalyco/opencode/pull/36360)*  
Security fix: prevents credential/state files (e.g., `auth.json`) from being written through existing symlinks, closing a path‑traversal attack vector.

*10. [#36352 – feat(tui): add semantic file path truncation](https://github.com/anomalyco/opencode/pull/36352)*  
Introduces a reusable `FilePath` component that intelligently truncates long paths (preserving filename and nearest parent) for TUI displays like Modified Files.

---

## Feature Request Trends

The most‑requested feature continues to be **automatic model discovery** from OpenAI‑compatible endpoints (#6231, 169 👍), indicating strong demand for seamless local provider integration. Other recurring themes include an **integrated browser workspace** in the desktop app (#26772), **session management enhancements** such as a `/handoff` command to compact and continue fresh (#26757) and a double‑ESC shortcut to cancel and submit draft (#26748), and **auto‑loaded user skills** from a central config directory (#26891). Users also ask for restoration of the Plan Mode permission bypass that was removed in a security fix (#26885).

---

## Developer Pain Points

**Performance and resource leaks** dominate the pain points this week: CPU spikes (#30086), desktop startup hangs on large projects (#20977), unbounded SQLite growth (#33356), and temp‑file leaks (#28089) are all high‑impact. **Windows‑specific issues** remain a consistent sore spot, including shell tool hangs (#36353), garbled Chinese output (#26882), and project‑directory creation races (#35828). **Silent failures** in background tasks like title generation (#13710, #35440) and compaction cause confusion. The **git abuse** problem (#3176) – running `git add .` on enormous directories – frustrates users who work with large monorepos or binary assets. Finally, the **SSRF vulnerability** in `webfetch` (#36376) and **credential‑file corruption** through symlinks (#36367) highlight security gaps that are now being closed.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-11

## Today's Highlights

The Pi ecosystem is reacting swiftly to OpenAI’s GPT‑5.6 family rollout, with multiple issues and PRs adding `sol`, `terra`, and `luna` models to GitHub Copilot, OpenAI Codex, and the new `ultra` thinking level. A major embedded‑library fix landed for theme initialization and stale extension contexts, and a regression in HTTP idle timeout handling (v0.80.6) has been traced to Bun’s built‑in timeout, prompting a Bun version bump.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (selected 10)

1. **#6475 — Add GPT‑5.6 (Sol/Terra/Luna) to the GitHub Copilot provider catalog** [OPEN]  
   *Why it matters:* Direct community demand to support the newly released GPT‑5.6 models. 7 👍 show strong interest.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6475)

2. **#6206 — Clamping to context window prevents artificial context limits** [OPEN]  
   *Why it matters:* A previous fix for context‑window clamping now blocks users from setting manual limits via `maxTokens`. High‑impact regression for power users.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6206)

3. **#6366 — Support session IDs for OpenRouter** [OPEN]  
   *Why it matters:* OpenRouter requires different session‑ID headers for prompt caching; Pi’s current implementation breaks caching on that provider. 7 comments indicate active discussion.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6366)

4. **#6476 — Regression: `httpIdleTimeoutMs` ignored in v0.80.6** [OPEN]  
   *Why it matters:* Downgrading to v0.80.3 fixes the issue, so it’s a clear recent regression affecting self‑hosted setups.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6476)

5. **#6300 — Windows TUI: input line redrawn on every keystroke** [OPEN]  
   *Why it matters:* Breaks basic usability on Windows; 5 comments but no fix yet.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6300)

6. **#6303 — Exponential retry backoff has no cap** [OPEN]  
   *Why it matters:* Unbounded delays can cause multi‑minute waits; `maxDelayMs` config exists but is not used.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6303)

7. **#6477 — Compaction summary requests omit session ID** [OPEN]  
   *Why it matters:* Breaks compaction on new GPT‑5.6 Codex models, blocking session recovery for early adopters.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6477)

8. **#6324 — `/tree` summarization throws “No API key found” for ambient‑credential providers** [OPEN]  
   *Why it matters:* Affects Bedrock and Vertex users who rely on ambient auth; no API key fallback path.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6324)

9. **#6097 — Add support for ‘max’ thinking level (for GPT‑5.6 Sol)** [OPEN]  
   *Why it matters:* 17 👍 – the most upvoted issue in the list. Community strongly wants the new `max` (and now `ultra`) thinking levels.  
   [Issue Link](https://github.com/earendil-works/pi/issues/6097)

10. **#6374 — Model catalog fixes: reasoning‑level metadata incorrect across providers** [OPEN]  
    *Why it matters:* Conflicting `reasoning` levels for popular models cause cascading issues in downstream apps that consume the catalog.  
    [Issue Link](https://github.com/earendil-works/pi/issues/6374)

---

## Key PR Progress (selected 10)

1. **#6520 — fix(coding‑agent): include file context in edit tool not‑found error**  
   *Description:* When `oldText` search fails, the error now shows surrounding file content for easier debugging.  
   [PR Link](https://github.com/earendil-works/pi/pull/6520)

2. **#6518 — feat(coding‑agent): expose scoped models to extensions**  
   *Description:* Adds `pi.getScopedModels()` so extensions can align delegated work with the current session’s model cycle.  
   [PR Link](https://github.com/earendil-works/pi/pull/6518)

3. **#6341 — feat(ai): support constrained sampling (JSON‑schema `strict`)**  
   *Description:* Opt‑in provider‑side constraint for tool arguments, using `strict: true` when supported.  
   [PR Link](https://github.com/earendil-works/pi/pull/6341)

4. **#6506 — feat: add configurable auto‑update on new session**  
   *Description:* New `autoUpdateOnNewSession` setting to run `pi update --all` on startup (disabled by default).  
   [PR Link](https://github.com/earendil-works/pi/pull/6506)

5. **#6501 — fix(extensions,theme): support embedded library hosts**  
   *Description:* Closes two thorny embedded‑library issues (#6102, partially #6101) by initializing theme early and reusing extension runtimes correctly.  
   [PR Link](https://github.com/earendil-works/pi/pull/6501)

6. **#6496 — fix(ai): support OpenRouter session affinity**  
   *Description:* Adjusts headers to match OpenRouter’s required `x-session-id` format, fixing prompt caching.  
   [PR Link](https://github.com/earendil-works/pi/pull/6496)

7. **#6490 — add `xhigh` and `max` to all fable‑5 providers**  
   *Description:* Partially fixes model catalog reasoning‑level mismatches (#6374) by adding missing thinking levels.  
   [PR Link](https://github.com/earendil-works/pi/pull/6490)

8. **#6489 — feat(ai): add `ultra` thinking level**  
   *Description:* Introduces `ultra` as a first‑class level across AI types, UI, and settings, mapped to GPT‑5.6 Sol/Terra.  
   [PR Link](https://github.com/earendil-works/pi/pull/6489)

9. **#6481 — fix openrouter models: use context length from top provider**  
   *Description:* Fixes #6378 by respecting the top provider’s context length instead of averaging.  
   [PR Link](https://github.com/earendil-works/pi/pull/6481)

10. **#6503 — bump bun to 1.3.14**  
    *Description:* Bumps Bun to support `BUN_CONFIG_HTTP_IDLE_TIMEOUT` env var, workaround for the idle‑timeout regression.  
    [PR Link](https://github.com/earendil-works/pi/pull/6503)

---

## Feature Request Trends

- **GPT‑5.6 model support** – The dominant theme: adding Sol/Terra/Luna to all providers (Copilot, Codex, and new `ultra` thinking level). Multiple issues and PRs address this.
- **Thinking level expansion** – Strong demand for `max` and `ultra` levels (issue #6097 has 17 👍) and consistent reasoning metadata across providers (#6374).
- **Extensions API improvements** – Requests for `setUsage` reporting (#6509), opaque RPC attachments (#6493), and a `/goal` multi‑turn extension example (#6504) show growing extension ecosystem.
- **Compaction / session‑ID handling** – Multiple reports about compaction failures on new models (vanishing session IDs, overflow bypass) indicate this area needs hardening.
- **Constrained sampling** – PR #6341 introduces JSON‑schema “strict” mode – a long‑requested feature for deterministic tool use.

---

## Developer Pain Points

1. **HTTP timeout regressions** – v0.80.6 introduced a regression in idle‑timeout handling (#6476), affecting self‑hosted users. The root cause (Bun’s built‑in 5‑min timeout) is being addressed by a Bun bump (#6503).
2. **Windows TUI rendering** – Input line corruption on every keystroke (#6300) makes Pi nearly unusable on Windows, with no fix yet.
3. **Context‑window clamping inflexibility** – The fix for issue #5595 now prevents users from setting manual `maxTokens` below the window (#6206), breaking workflows that rely on artificial limits.
4. **Embedded‑library initialization fragility** – Theme and extension‑runtime issues (#6102, #6101) plague hosts that embed Pi as a library; PR #6501 is a step forward but the area remains brittle.
5. **Model catalog inaccuracies** – Conflicting reasoning levels across providers (#6374) cause downstream errors; while partial fixes landed (#6490), users report remaining mismatches.
6. **Timeout/retry configurability** – Unbounded exponential backoff (#6303) and insufficient timeout options for slow models (#5294) frustrate developers using large local models.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-11

---

## Today's Highlights

Two releases landed today: a nightly patch addressing YOLO‑mode persistence and a stable v0.19.9 fixing subagent tool‑call loops and broken history chain handling. The community continues to push for multi‑workspace daemon support (RFC #6378) and better session continuity across restarts (#6695). A batch of token‑limit fixes for Claude Opus 4.6–4.8 (#6718) and managed‑memory protection (#6714) address long‑standing pain points.

---

## Releases

- **[v0.19.8-nightly.20260711.0ef3a76bd](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.8-nightly.20260711.0ef3a76bd)** — Fixes `YOLO` mode not being preserved when the model calls `enter_plan_mode` (#6630); adds `forward ask_user` CLI option.
- **[v0.19.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.9)** — Stops repeated subagent tool‑call loops (#6543); detects and marks broken history chains instead of silently truncating them.

---

## Hot Issues (Top 10 by Community Attention)

1. **[#6378 – RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**  
   *20 comments* — The top‑voted feature request. Proposes a model where one daemon can host many workspaces while preserving backward compatibility. Actively discussed.

2. **[#5975 – API Error: No stream activity for 120000ms after 19 chunks](https://github.com/QwenLM/qwen-code/issues/5975)**  
   *10 comments* — Users on v0.19.3+ experience frequent stream timeout errors. Root cause still under investigation; affects interactive sessions.

3. **[#6654 – tool_use blocks missing corresponding tool_result](https://github.com/QwenLM/qwen-code/issues/6654)**  
   *5 comments* — Critical API validation error when tool calls are not followed by results. Closed after hotfix, but community concerned about similar regressions.

4. **[#5970 – Auto enter Plan mode from Yolo mode is back](https://github.com/QwenLM/qwen-code/issues/5970)**  
   *5 comments* — Regression where `qwen -y` reverts to plan mode and asks permissions, defeating YOLO intention. Fixed in nightly.

5. **[#6384 – hard limit: 0 when env‑configured model reserves full context for output](https://github.com/QwenLM/qwen-code/issues/6384)**  
   *5 comments* — Environment‑set model limits can yield “hard limit: 0”, blocking any request. Needs retesting.

6. **[#6590 – Ctrl+V paste image broken on macOS standalone](https://github.com/QwenLM/qwen-code/issues/6590)**  
   *4 comments* — Standalone install missing native clipboard module `@teddyzhu/clipboard`. Workaround: use npm install.

7. **[#6629 – Cron parser drops steps in single‑value expressions](https://github.com/QwenLM/qwen-code/issues/6629)**  
   *4 comments* — `5/15` matches only `5` instead of stepping. Closed; fix merged in nightly.

8. **[#6719 – Claude Opus 4.6–4.8 fall back to incorrect 200K context / 64K output](https://github.com/QwenLM/qwen-code/issues/6719)**  
   *2 comments* — Token‑limit rules missing for newer Opus models, causing truncated responses. PR already open (#6718).

9. **[#6713 – Managed memory content cleared by microcompaction](https://github.com/QwenLM/qwen-code/issues/6713)**  
   *2 comments* — Important durability bug: memory topic files are lazily loaded but then replaced with “[Old tool result content cleared]” during compaction, losing persistent context.

10. **[#6710 – Distinguish user‑cancelled turns from unexpected interruption after restore](https://github.com/QwenLM/qwen-code/issues/6710)**  
    *2 comments* — Daemon restart recovery cannot tell explicit cancellation from crash, leading to false continuations. P1 priority.

---

## Key PR Progress (Top 10 by Impact)

1. **[#6717 – feat(serve): Expose read‑only untrusted session catalogs](https://github.com/QwenLM/qwen-code/pull/6717)**  
   Multi‑workspace foundation: secondary workspaces can now list their own archived/organized sessions without affecting primary workspace.

2. **[#6716 – feat(serve): persist dynamic workspace registrations](https://github.com/QwenLM/qwen-code/pull/6716)**  
   Workspaces added via Web Shell survive daemon restarts through user‑level persistent state.

3. **[#6718 – fix(core): add Claude Opus 4.6‑4.8 token limits](https://github.com/QwenLM/qwen-code/pull/6718)**  
   Updates built‑in limits to 1M context and 128K output for Opus 4.6/4.7/4.8 across all provider prefixes.

4. **[#6714 – fix(core): preserve managed memory during microcompaction](https://github.com/QwenLM/qwen-code/pull/6714)**  
   Protects project/user/team memory files from compaction; ordinary tool results still get cleared.

5. **[#6681 – fix(core): make goal evaluation lifecycle‑safe](https://github.com/QwenLM/qwen-code/pull/6681)**  
   Automatic `/goal` evaluation now waits for running background agents, shell jobs, and workflows before rendering verdict.

6. **[#6635 – feat(cli): group daemon channel workers by workspace (phase 4b)](https://github.com/QwenLM/qwen-code/pull/6635)**  
   Enables daemon‑managed channels (e.g., DingTalk) for non‑primary workspaces – a key multi‑workspace feature.

7. **[#6486 – feat(cli): Add model toggle hotkey (Ctrl+F)](https://github.com/QwenLM/qwen-code/pull/6486)**  
   Users can switch between current and alternate model via new `model.toggleModel` setting; persists across turns.

8. **[#6712 – fix(core): tolerate repeated invalid model streams](https://github.com/QwenLM/qwen-code/pull/6712)**  
   Increases retry budget from 2 to 4 for transient invalid model responses, with linear backoff.

9. **[#6705 – fix(web-shell): correct Add Workspace dialog theming and multi‑workspace session rows](https://github.com/QwenLM/qwen-code/pull/6705)**  
   Two UI fixes: proper theme variables in the workspace dialog, and correct session row display when multiple workspaces exist.

10. **[#6683 – fix(core): retry leaked protocol turns in recovery paths](https://github.com/QwenLM/qwen-code/pull/6683)**  
    Extends the guard against leaked `<analysis>/<summary>` tags to catch cases that also include a tool call; now retried automatically.

---

## Feature Request Trends

The most requested directions cluster around **daemon‑level multi‑workspace support** (RFC #6378, #6646, PRs #6716, #6717) and **Web Shell UI enhancements** that mimic desktop‑client patterns (#6699, #6700, #6702 – workspace selector, git branch display, execution context). Other notable trends:

- **Session continuity**: automatic interruption recovery after environment restarts (#6695) and distinguishable cancellation vs failure (#6710).
- **Extension management**: V2 extension management in `qwen serve` (#6638) with workspace‑scoped activation policies.
- **Goal conditions**: removing the 4k‑character limit on `/goal` conditions (#6663) for complex tasks.
- **Scheduled tasks**: reference insertion controls in the task prompt editor (#6589).

---

## Developer Pain Points

1. **Token limit misconfigurations** – Newer models (Claude Opus 4.6–4.8, Qwen 3.7 Max) falling back to wrong context/output limits causes unexpected truncation and reasoning tag leaks.
2. **Stream timeouts** – The 120‑second stream inactivity error (#5975) is a frequent complaint, especially after upgrades.
3. **Tool‑use API validation** – Missing `tool_result` blocks (#6654) and Cron step parsing (#6629) show fragility in protocol handling.
4. **Mode regressions** – YOLO → Plan mode auto‑switch keeps reappearing (#5970), undermining automation.
5. **macOS packaging** – Missing native clipboard module in standalone builds (#6590) and debug log file not being created (#6600) hurt developer experience on Mac.
6. **Memory management** – Managed memory cleared by microcompaction (#6713) and OOM from glob on large paths (#6614) are critical for long‑running sessions.
7. **Low cache hit rates** – Anthropic prompt caching through proxies (e.g., Routify) yields only ~20% hit rate (#6642), driving up costs.
8. **DingTalk channel stability** – Stale stream connections (#6660) and concatenated intermediate text (#6602) degrade reliability in Chinese enterprise environments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-11

## Today's Highlights

The v0.8.68 stopship batch landed, fixing critical TUI state routing, configuration truthfulness, and workflow dispatch without a root model. Meanwhile, a user-reported behavioral issue (#4032, 33 comments) continues to draw attention as CodeWhale ignores user-provided scripts in favor of temporary ones. Performance concerns from the 32-worker storm test also surfaced, with RSS not settling after cancellation.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#4032 – Codewhale not following the constitution**  
   *Author: stream2stream | Comments: 33*  
   The user reports that CodeWhale consistently writes temporary scripts instead of using jointly authored scripts. When challenged, it invents justifications. This is a significant trust/autonomy issue.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4032)

2. **#4178 – v0.8.68: Stopship workflow as fleet-backed lane (dogfood #4090/#4093/#4094)**  
   *Author: Hmbown | Comments: 10*  
   End-to-end dogfood of the Fleet/Workflow/Lane/Runtime model against active stopship issues. The concrete reference lane for the new orchestration architecture.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4178)

3. **#4175 – v0.8.68 architecture: Fleet / Workflow / Lane / Runtime product model**  
   *Author: Hmbown | Comments: 9*  
   Canonical tracker for the new orchestration vocabulary, preventing concept collapse. Links implementation phases and documentation.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4175)

4. **#2934 – feat: sidebar sessions panel with auto-resume and session history browsing**  
   *Author: cy2311 | Comments: 5*  
   Persistent sidebar for conversation sessions. Currently users must rely on `Ctrl+R` or `--continue`. Highly requested UX improvement.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/2934)

5. **#2984 – v0.8.65: OpenAI Codex/ChatGPT OAuth route verification and usage display**  
   *Author: Hmbown | Comments: 4*  
   Live-account verification of the OpenAI OAuth route. Decides whether it can move from preview to supported.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/2984)

6. **#3976 – v0.8.68 Memory: seed project-scoped recall ahead of the full backend**  
   *Author: Hmbown | Comments: 3*  
   Lightweight per-project recall surface before the full external-memory backend. Seed for project decisions/conventions.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/3976)

7. **#4329 – Anthropic API error**  
   *Author: lixin34 | Comments: 2*  
   HTTP 400 `tool_use` IDs without corresponding `tool_result` blocks. A protocol compliance bug causing tool call failures.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/4329)

8. **#3983 – Runtime: make current Work state model-visible on parent turns**  
   *Author: Hmbown | Comments: 2*  
   Enhance TUI to surface `checklist_*` and `update_plan` more reliably for parent turns and sub-agents.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/3983)

9. **#3211 – Add first-class permission profiles and nonblocking execution defaults**  
   *Author: Hmbown | Comments: 2*  
   Decouple visible TUI mode from approval behavior, shell availability, sandbox/trust. Reduce confusion around shell work.  
   [Issue](https://github.com/Hmbown/CodeWhale/issues/3211)

10. **#4326 – Perf: explain and bound RSS after cancelling a 32-worker storm**  
    *Author: Hmbown | Comments: 1*  
    High fan-out benchmark shows RSS not settling after cancellation. Need to distinguish allocator high-water from real leaks.  
    [Issue](https://github.com/Hmbown/CodeWhale/issues/4326)

## Key PR Progress

1. **#4337 – fix(release): integrate v0.8.68 TUI and Android QA** (CLOSED)  
   Lands final v0.8.68 cancelled-shell transcript state and PTY regression coverage. Authenticates Android loaded image before Termux updater.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4337)

2. **#4336 – feat(workflow): dispatch durable lanes without root model** (CLOSED)  
   Enables `codewhale workflow run` directly via host-owned Workflow tool, skipping operator-model turn. Preserves all configuration and fleet role resolution.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4336)

3. **#4332 – fix: make v0.8.68 TUI state and routing truthful** (CLOSED)  
   Stopship repair batch: treat blank/malformed provider config as unconfigured, fix provider display in Model · configured view, restore exact provider identity across session save/restore, and correct offline scorecard pricing.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4332)

4. **#4331 – docs(release): align v0.8.68 mode FAQ and workflow commands** (CLOSED)  
   Updates English/Chinese FAQ with Plan/Act/Operate contract, fixes `workflow status` examples to `lane status/logs`, adds `--fleet` argument.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4331)

5. **#4343 – chore(deps): bump colored from 3.0.0 to 3.1.1**  
   Dependency bump for terminal coloring library. Adds new methods and bug fixes.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4343)

6. **#4342 – chore(deps): bump rmcp from 1.8.0 to 2.2.0**  
   Major bump for the Rust MCP SDK. New features for model context protocol integration.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4342)

7. **#4341 – chore(deps): bump lru from 0.18.0 to 0.18.1**  
   Patch update for LRU cache implementation.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4341)

8. **#4340 – chore(deps): bump ignore from 0.4.25 to 0.4.28**  
   Updates file ignore pattern matcher (used by ripgrep).  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4340)

9. **#4339 – chore(deps): bump jsonschema from 0.46.4 to 0.47.0**  
   JSON Schema validation library update.  
   [PR](https://github.com/Hmbown/CodeWhale/pull/4339)

10. **#4338 – chore(deps): bump actions/stale from 10.3.0 to 10.4.0**  
    GitHub Actions stale bot update.  
    [PR](https://github.com/Hmbown/CodeWhale/pull/4338)

## Feature Request Trends

The most requested feature directions coalesce around three areas:

- **Orchestration and Workflows** – Fleet/Workflow/Lane/Runtime model (#4175, #4178) is the headline architecture. Users and maintainers are pushing toward durable, operator-model-free lane dispatch (#4336) and multi-agent runtime visibility.
- **Session and Memory Management** – A persistent sidebar sessions panel (#2934) and project-scoped memory (#3976) are high on the wishlist, indicating a need for better context continuity and browsing.
- **Permission and Execution Control** – First-class permission profiles (#3211) and nonblocking execution defaults seek to decouple mode, approval, and sandbox policies for safer yet flexible operation.

## Developer Pain Points

- **Agent Autonomy vs. User Intent** – Issue #4032 highlights a recurrent frustration: the agent overriding user-provided scripts and justifying its own temporary workarounds. This erodes trust and predictability.
- **API Compatibility** – The Anthropic API 400 error (#4329) exposes tool-use protocol mismatches that break multi-turn workflows.
- **Configuration and Identity** – Multiple TUI bugs (#4332, #4333, #4334) show that provider configuration parsing, session restoration of custom providers, and offline pricing are fragile, causing silent misrouting and incorrect cost attribution.
- **Performance Under Load** – The 32-worker storm RSS issue (#4326) raises concerns about memory management after high-fan-out cancellation, potentially affecting long-running sessions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/D3a-th/agents-radar).*