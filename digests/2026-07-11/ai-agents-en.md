# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 449 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-11 08:08 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# 🐚 OpenClaw Project Digest – 2026-07-11

## 1. Today’s Overview
OpenClaw is seeing intense activity: **449 issues** and **500 pull requests** were updated in the past 24 hours, with 172 issues closed and 151 PRs merged or closed. The project remains in a high‑velocity maintenance phase, driven by P0/P1 memory‑leak bugs, session‑state regressions, and a steady stream of security‑related feature requests. No new releases were published today, but the volume of incoming fixes suggests the team is preparing a significant patch cycle. Key areas of focus include gateway stability, prompt‑cache continuity across boundaries, and sandboxing of credential material.

---

## 2. Releases
*None – no new releases today.*

---

## 3. Project Progress
Today’s merged/closed PRs advanced critical fixes and grooming:

- **#94130** (merged) – Anthropic `max_turns` stop reason now normalized to `length`, with provider diagnostics preserved. This unblocks users encountering premature turn limits without losing debug info.
- **#104300** (closed) – Control UI dev‑branch badge moved to its own footer strip, decluttering the sidebar.
- **#104039** (open, but noted as a fix) – Prunes stale session entries independently of `maxEntries`, solving the silent‑growth problem for long‑running gateways.
- **#97103** (open, waiting on author) – `sessions cleanup` now reports stale archive files (`.deleted.*`, `.reset.*`) in both dry‑run and apply phases.
- **#102082** (open) – Slack progress chrome (tool emoji + status) is now suppressed by converting to reactions instead of posting messages, reducing noise.

Several closed issues also indicate progress: **#103332** (regression with codex/gpt5.6) was resolved, and **#85714** (stranded final `agent_message`) was closed with a related PR.

---

## 4. Community Hot Topics
The most active discussions illuminate persistent user pain points:

| Issue / PR | Comments | 👍 | Key Theme |
|-----------|---------|---|-----------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) – Tool outputs rendered as image attachments | 20 | 2 | Agent blindness to stdout/stderr when ANSI output collapses to `(see attached image)` |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) – Embedded prompt cache breaks across boundaries | 16 | 1 | Cross‑session continuity loss, especially with room events and policy changes |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked secrets for API keys | 15 | 4 | Security – need to let agents use keys without exposing raw strings |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) – Gateway memory leak P0 (350MB→15.5GB) | 15 | 1 | Repeated OOM kills after 2–3 days |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) – Slack Block Kit support (closed) | 14 | 0 | Richer interactive messages – feature request resolved? |

**Underlying needs:** Users are demanding better visibility into tool execution, robust session continuity, hardened secret management, and memory‑efficient long‑running gateways. The memory‑leak thread (#91588) has been open for over a month and remains the most critical stability concern.

---

## 5. Bugs & Stability
Today’s update surface reveals several high‑severity bugs:

### P0 / Critical
- **#91588** – Gateway memory leak (RSS grows from 350 MB to 15.5 GB over days, OOM kills). No fix PR linked. Impact: crash loops for all users with prolonged uptime.
- **#102175** – Prompt‑cache breaks across room‑event/policy/Responses boundaries. Leads to degraded conversation quality. No fix PR.

### P1 / High
- **#99241** – Tool output rendered as image placeholder, making agent blind to its own results. Marked `needs‑product‑decision`.
- **#94846** – Cron isolated `agentTurn` skips final delivery if an early tool error was classified as fatal, even after recovery. PR **#95996** aims to fix deferred parent semantics.
- **#87109** – Gateway heap grows to 1 GB+ on macOS at idle, causing silent cron failures. Referenced in #86613/#86509.
- **#101763** – Hosted Molty model selector fails: Claude version ID uses dots instead of hyphens, causing API rejection. User‑facing blocker.

### P2 / Notable
- **#103332** (closed) – Regression with codex/gpt5.6 on pi runtime – fixed today.
- **#93928** – Feishu drive pagination bug (`File not found` for files beyond first page) – fix already merged in #101572.
- **#85714** (closed) – Final agent message stranded when LLM forgets to call delivery tool – resolved.

**Pattern:** Memory pressure and session‑state corruption dominate the bug landscape. Many issues have `clawsweeper:needs‑product‑decision` or `needs‑maintainer‑review` tags, indicating the team is still triaging the next wave of fixes.

---

## 6. Feature Requests & Roadmap Signals
Top user‑requested features with the most traction:

| Feature | Issue | Priority | Comments | Likely Next Version? |
|---------|-------|----------|----------|----------------------|
| **Masked secrets** (API keys hidden from agents) | [#10659](https://github.com/openclaw/openclaw/issues/10659) | P1 | 15 comments, 4 👍 | High – security critical |
| **Filesystem sandboxing** (tools.fileAccess) | [#7722](https://github.com/openclaw/openclaw/issues/7722) | P2 | 11 comments, 4 👍 | Medium – large scope |
| **Streaming TTS pipeline for voice calls** | [#8355](https://github.com/openclaw/openclaw/issues/8355) | P2 | 7 comments, 2 👍 | Possible – reduces latency |
| **Batch API support** (50% cost savings) | [#9865](https://github.com/openclaw/openclaw/issues/9865) | P2 | 6 comments | Low – background scheduling |
| **Webhook multi‑turn sessions** (sessionKey reuse) | [#11665](https://github.com/openclaw/openclaw/issues/11665) | P2 | 11 comments | Medium – documented but broken |
| **Dynamic model discovery** (OpenRouter) | [#10687](https://github.com/openclaw/openclaw/issues/10687) | P2 | 10 comments, 3 👍 | Medium – needed for fast‑moving catalogs |
| **Exec‑approval denylist** | [#6615](https://github.com/openclaw/openclaw/issues/6615) | P2 | 8 comments, 7 👍 | High – most‑upvoted enhancement |

**Roadmap signals:** The presence of P1‑tagged security features (masked secrets, denylist) and the continued focus on session stability suggest v2026.7.x will include hardened credential handling and better resource governance.

---

## 7. User Feedback Summary
Real pain points expressed in today’s issue threads:

- **“My agent cannot read its own tool outputs.”** – Repeatedly cited in #99241; ANSI‑heavy workflows break entirely.
- **“Cron jobs silently fail after 12h of uptime.”** – #87109 reports heap growth leading to event‑loop starvation with no error reporting.
- **“Model selector doesn’t persist on hosted Molty.”** – #101763: a dot‑vs‑hyphen mismatch forces users to manually specify models.
- **“Slack progress messages flood channels.”** – PR #102082 addresses this by converting tool‑chrome to reactions.
- **“Telegram files 5–20 MB cause permanent chat deadlock.”** – #27984 (recently closed) – the fix appears to have shipped.
- **“OAuth token refresh fails without retry.”** – #8673: transient network blips break agent operations.
- **“I want my agent to append to files, not overwrite.”** – PR #102243 adds `append` mode to the write tool.

Satisfaction signals: users actively contribute configurations, workarounds, and test reports (e.g., WSL flaky test reproduction in #7057). The community is engaged but frustrated by lingering memory and session issues.

---

## 8. Backlog Watch
Issues and PRs that have been open for extended periods and require maintainer attention:

| Item | Age | Priority | Impact | Notes |
|------|-----|----------|--------|-------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked secrets | 5 months (Feb 6) | P1 | Security – prevents credential leaks | 4 👍, needs product decision & security review |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) – Gateway memory leak | 1 month (Jun 9) | P0 | OOM crashes | No associated fix PR; critical backlog item |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) – Webhook multi‑turn | 5 months (Feb 8) | P2 | Feature broken as documented | Linked PR open; needs maintainer review |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem sandboxing | 5 months (Feb 3) | P2 | Security – path restriction | 4 👍, needs product decision |
| [#96134](https://github.com/openclaw/openclaw/pull/96134) – Remote SSH gateway plaintext rejection | 18 days | P2 | UX – blocks valid SSH config | “Ready for maintainer look” since Jun 23 |
| [#92405](https://github.com/openclaw/openclaw/issues/92405) – Subagent spawn persists raw provider | 1 month (Jun 12) | P1 | Depth‑2 spawns die silently | Contains fix; needs live repro |

**Notable:** The P0 memory leak (#91588) has no assigned fix PR despite being open for over a month. Multiple P1 enhancements (masked secrets, model discovery) have been awaiting maintainer action since February. The backlog is dominated by security‑critical and stability‑critical items that may block the next stable release.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-07-11

## 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing intense, convergent activity as projects mature beyond prototypes toward production-grade deployments. Core infrastructure concerns—memory management, session continuity, credential security, and cross-platform reliability—dominate development across all major projects, with bug-fix velocity outpacing new feature work on most repositories. The ecosystem remains fragmented but shows emergent patterns: a clear "reference implementation" tier (OpenClaw, ZeroClaw, CoPaw) driving architecture decisions, a "feature-first" tier pushing platform-specific capabilities (Hermes Agent, IronClaw), and a "minimalist" tier serving niche verticals (NullClaw, Moltis, TinyClaw). Community feedback converges on three core demands: trustworthy long-running agents, transparent tool execution, and flexible model routing.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Health Score | Notable Signal |
|---------|----------------------|-------------------|---------------|--------------|----------------|
| **OpenClaw** | 449 | 500 | None | ⚠️ Overloaded | P0 memory leak untriaged; flood of merge activity |
| **ZeroClaw** | 19 | 50 | None | 🟢 High | Major SOP feature merged; CI flakiness emerging |
| **CoPaw** | 38 | 25 | v2.0.0 (GA) | 🟡 Fragile | Critical sandbox regression; rapid patch response |
| **IronClaw** | 23 | 50 | None | 🟢 High | Bug-bash underway; nine P1-P3 issues filed today |
| **Hermes Agent** | 50 | 50 | None | 🟡 Pressure | Linux Desktop crash unpatched; high incoming bug volume |
| **NanoBot** | 9 | 45 | None | 🟢 Healthy | Fast bug closure; security PRs awaiting merge |
| **NanoClaw** | 0 | 20 | None | 🟢 Healthy | Timestamp consistency sweep; clean merge ratio |
| **PicoClaw** | 1 | 16 | None | 🟡 Stretched | WhatsApp fix merged; five stale PRs > 2 weeks |
| **LobsterAI** | 0 | 3 | 2026.7.10 | 🟡 Moderate | Multi-agent regression in latest patch |
| **NullClaw** | 3 | 0 | None | 🔴 Low | No merged PRs; security bug unfixed (7+ days) |
| **Moltis** | 0 | 1 | None | ⚪ Dormant | Single model-addition PR pending |
| **TinyClaw** | 0 | 0 | — | ⚪ Inactive | No activity |
| **ZeptoClaw** | 0 | 0 | — | ⚪ Inactive | No activity |

**Health Score Legend:** 🟢 Healthy (stable, responsive) | 🟡 Moderate/Fragile (bugs present but being addressed) | ⚠️ Overloaded (critical bug volume > fix capacity) | 🔴 Low (stalled, unpatched critical issues) | ⚪ Inactive/Dormant

---

## 3. OpenClaw's Position

OpenClaw remains the **largest and most active reference implementation** in the ecosystem, with 449 issues and 500 PRs updated in 24 hours—an order of magnitude more than any peer. This scale confers both advantages and liabilities:

**Advantages vs. peers:**
- **Community mass:** 4× the issue/PR throughput of Hermes Agent and ZeroClaw, 10× that of NanoBot. This creates the largest contributor pool and fastest time-to-fix for common issues.
- **Feature surface:** Broader multi-channel support (Slack, Telegram, Feishu, hosted Molty) than any competitor except ZeroClaw.
- **Prompt‑cache infrastructure:** Unique focus on session‑continuity across boundaries (room events, policy changes)—a concern only CoPaw (#5950) and IronClaw (#5975) have recently addressed.

**Technical approach differences:**
- OpenClaw employs a **gateway‑centric architecture** with persistent session state, contrasting with NanoBot's lightweight React‑agent model and CoPaw's runtime‑2.0 sandboxed kernel.
- OpenClaw's prompt‑cache lifecycle management is more sophisticated than any peer, but the P0 memory leak (#91588, RSS 350MB→15.5GB) suggests this complexity carries significant operational cost.

**Community size comparison:**
Based on issue/PR volume as a proxy, approximate relative community size:
- OpenClaw: ~10,000+ contributors (multi-day 400+ issue/PR waves)
- ZeroClaw / Hermes Agent / IronClaw: ~1,000–3,000
- NanoBot / NanoClaw / CoPaw: ~500–1,000
- Others: < 200

---

## 4. Shared Technical Focus Areas

The following requirements surfaced across multiple projects in the last 24 hours, indicating ecosystem-wide pain points:

| Requirement | Projects Affected | Specific Instances |
|-------------|-------------------|-------------------|
| **Memory / session leak** | OpenClaw, NanoClaw, CoPaw | #91588 (350MB→15.5GB OOM), #3001 (stale skill copies), #5951 (20GB pwsh recursion) |
| **MCP lifecycle reliability** | NanoBot, Hermes, CoPaw, PicoClaw | #4764/#4843 (reconnect scopes), #62505 (watchdog kills live servers), #5947 (access policies ignored) |
| **Credential/secret management** | OpenClaw, NanoBot, NullClaw | #10659 (masked secrets P1), #4776 (unauthorized /restart), #974 (shared bearer A2A route) |
| **Multimodal tool rendering** | OpenClaw, ZeroClaw, Hermes | #99241 (tool output → image placeholder), #5514 (duplicate responses on multi-image), #62480 (quiet mode empty) |
| **Session state / context continuity** | OpenClaw, Hermes, NullClaw, IronClaw | #102175 (prompt-cache break), #43008 (resume awareness), #972 (Telegram idle death), #5418 (message order) |
| **Sandbox / workspace confinement** | NanoBot, CoPaw, ZeroClaw, OpenClaw | #4796 (restrict_to_workspace False), #5951 (sandbox explosion), #8826/#8827 (SSRF protection) |
| **Slack integration reliability** | OpenClaw, IronClaw, ZeroClaw | #102082 (progress noise), #5943/#5944 (DM delivery failures), #6055 (thread hydration) |

**Pattern:** Security hardening (credentials, sandboxing, authorization) and runtime stability (memory, MCP, sessions) are the two highest-urgency cross-project concerns. Multimodal tool execution is a growing frustration as agents increasingly handle images.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | CoPaw | ZeroClaw | NullClaw |
|-----------|----------|--------------|---------|-------|----------|----------|
| **Primary target user** | Enterprise / power users | Desktop users | CLI/terminal power users | Chinese enterprise | Developers / integrators | Security / minimalist |
| **Key differentiator** | Largest feature surface, prompt‑cache | Multi‑platform Desktop (Windows, Linux, macOS) | Fast MCP development, Dream background agent | AgentScope 2.0 architectural migration | SOP visual authoring, git forge channels | Lightweight Zig-based, CLI providers |
| **Architecture** | Gateway‑centric, persistent sessions | Desktop TUI/CLI, provider pools | React‑event agent, MCP‑first | Runtime 2.0 sandboxed kernel | Plugin‑based channels, declarative workflows | Low‑footprint, minimal dependencies |
| **Channel support** | Extensive (Slack, Telegram, Feishu, Molty) | Broad (Desktop, Telegram, WeChat, Web) | WebUI, CLI, MCP | DingTalk, WeChat, Desktop shell | Slack, Telegram, WeChat, git forge | Telegram, A2A |
| **Release cadence** | Continuous (no release today, high volume) | Continuous (no release, 50 PRs/day) | Feature releases (no release, 45 PRs/day) | Major GA today (v2.0.0) | Minor releases (v0.8.x, no release today) | Dormant (no PRs) |
| **Community language** | English | English | English | Chinese + English | English | English |
| **Risk profile** | Stability (P0 memory leak) | Platform stability (Linux Desktop crash) | Security (unauthorized restart) | Migration regressions (sandbox, MCP) | Channel edge cases (Telegram, WeChat) | Security (A2A bearer) |

**Key takeaways:**
- **OpenClaw** leads in breadth but struggles with depth of stability.
- **Hermes Agent** and **ZeroClaw** are the most responsive to reported bugs (fix PRs within same day for top issues).
- **CoPaw** took the biggest architectural risk with v2.0.0 and is experiencing the most disruptive regressions.
- **NanoBot** has the cleanest balance of feature velocity and bug closure rate.
- **NullClaw** and **Moltis** risk irrelevance without increased maintainer activity.

---

## 6. Community Momentum & Maturity

**Activity Tiers:**

**Tier 1 — Rapid Iteration (50+ PRs/day, multiple releases/month)**
- **OpenClaw** — 500 PRs/day, but signal-to-noise is low; many PRs are stale re-triggers.
- **Hermes Agent** — 50 PRs/day, high bug report rate matched by fast fix PRs.
- **ZeroClaw** — 50 PRs/day, major feature work (SOP) alongside channel fixes.
- **CoPaw** — 25 PRs/day post-v2.0.0, driver is regression patching and community triage.

**Tier 2 — Maturing (10–45 PRs/day, bi-weekly releases)**
- **NanoBot** — 45 PRs/day, clean closure rate (6 merged in 24h), security hardening.
- **NanoClaw** — 20 PRs/day, timestamp sweep shows attention to developer experience.
- **PicoClaw** — 16 PRs/day, limited maintainer capacity (5 stale PRs).
- **IronClaw** — 50 PRs/day (on par with Tier 1), but all are bug-fix focused; no feature release.
- **LobsterAI** — 3 PRs/day, patch release today, moderate community engagement.

**Tier 3 — Low-Touch / Stagnant (< 5 PRs/day, no recent releases)**
- **NullClaw** — Critical security bug unfixed for 7+ days, no merged PRs.
- **Moltis** — Single PR pending; no community feedback.
- **TinyClaw / ZeptoClaw** — Effectively inactive.

**Maturity assessment:**
- **Most mature:** OpenClaw, ZeroClaw — largest communities, most extensive documentation, established governance patterns.
- **Most rapidly improving:** NanoBot, Hermes Agent — fast turnaround on bugs, growing contributor bases.
- **Most fragile post-transition:** CoPaw — v2.0.0 is a necessary move but destabilized the user experience.
- **Most at risk:** NullClaw, Moltis — lack of maintainer engagement threatens long-term viability.

---

## 7. Trend Signals

Six industry trends extracted from cross-project community feedback and issue patterns:

### 1. Programmable Agent-Centric Workflows
The merge of SOP visual authoring in ZeroClaw (#8590) and the surge in declarative skill auto-activation requests (ZeroClaw #8965, Hermes #30640 Cursor SDK) signal growing demand for **deterministic, auditable agent workflows**—not just conversational AI. Developers want agents that execute predefined procedures with human oversight.

### 2. Multimodal Pain Is Universal
Across OpenClaw, ZeroClaw, and Hermes Agent, users report agents losing visibility into their own tool outputs when they involve images (OpenClaw #99241: "agent cannot read its own tool outputs"). The ecosystem lacks a standard for tool result rendering that preserves agent-accessible structure.

### 3. Security Hardening Is No Longer Optional
Masked secrets (OpenClaw #10659, 5 months open), unauthorized command access (NanoBot #4776), shared bearer token flaws (NullClaw #974), and absent workspace confinement (NanoBot #4796) are not being addressed fast enough. Community patience is thinning—users are demanding enterprise-grade security postures as agents gain access to real credentials and files.

### 4. Session Continuity Is the New Baseline
Users now expect agents to maintain coherent state across idle periods (NullClaw #972, Hermes #43008), channel boundaries (OpenClaw #102175), and context compression (CoPaw #5856). The era of stateless chat agents is ending; the next generation must handle days-long conversations with persistent memory.

### 5. Runtime Consolidation
CoPaw's AgentScope 2.0 migration, IronClaw's Reborn runtime push (#5935: "Retire v1 runtime"), and OpenClaw's gateway stability focus all indicate a **shift from feature-proliferation to runtime hardening**. The ecosystem is recognizing that multiple runtimes increase maintenance burden and bug surface.

### 6. Cost Optimization Through Model Routing
Per-conversation model overrides (NanoBot #4253), batch API support (OpenClaw #9865), and fallback chains (PicoClaw #3200) reflect growing user sophistication: they want to **route simple tasks to cheap models and complex tasks to premium ones**, without manual configuration. This is a direct response to rising API costs as agents multiply.

**Value for AI agent developers:**
- Prioritize **session state management** and **credential security**—these are the two highest-ROI investments based on cross-project pain.
- Design **tool output schemas** that remain machine-readable even when rendered for humans—the "image placeholder" bug is a sign of a deeper architectural gap.
- Plan for **multi-model routing** as a core feature, not an afterthought; users are already asking for it across 4+ projects.
- Be prepared for **runtime consolidation**—the market will not support 12+ independent agent frameworks long-term. The projects that survive will be those that deliver stable, secure, extensible runtimes rather than the most features.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-11

## 1. Today's Overview

Activity remains high, with 9 issues and 45 pull requests updated in the last 24 hours. The project closed 5 issues and merged/closed 6 PRs during this period, reflecting steady progress on both bug fixes and feature work. No new releases were published. Notable focus areas include MCP lifecycle stability, security hardening (workspace restriction, slash command authorization), and memory consolidation enhancements. The community raised several feature requests around model selection flexibility, indicating strong user demand for per-conversation and per-subagent model overrides.

## 2. Releases

No new releases detected.

## 3. Project Progress

Six pull requests were merged or closed today, advancing several areas:

- **MCP stability**:  
  - [#4764](https://github.com/HKUDS/nanobot/pull/4764) – Isolate reconnect cancel scopes to prevent gateway crashes when MCP servers timeout.  
  - [#4843](https://github.com/HKUDS/nanobot/pull/4843) – Keep transport cleanup in owner tasks to avoid AnyIO scope leaks during shutdown/reconnect.

- **WebUI fixes**:  
  - [#4836](https://github.com/HKUDS/nanobot/pull/4836) – Bind landing page first message to the newly created chat, preventing misrouting to an existing conversation.

- **Dream (background agent) improvements**:  
  - [#4873](https://github.com/HKUDS/nanobot/pull/4873) – Skip no-op periodic commits when durable memory files have no changes, eliminating empty commits.

- **Subagent model override**:  
  - [#4623](https://github.com/HKUDS/nanobot/pull/4623) – Add optional `model` parameter to the `spawn` tool, allowing per-subagent model selection.

- **Cron job model presets**:  
  - [#4622](https://github.com/HKUDS/nanobot/pull/4622) – Support per-cron-job `model_preset`, enabling different models for scheduled tasks without global changes.

These merges show continued progress on MCP robustness, user-requested model flexibility, and quality-of-life improvements for the Dream system.

## 4. Community Hot Topics

The most active issue this period is **#4253** (6 comments) – a feature request to override the model per conversation. The author explains they alternate between a fast OpenRouter preset and a private local llama.cpp preset depending on task sensitivity. This issue has been open since June 8 and generated discussion about implementation approaches.

Other active issues (2–3 comments):  
- [#4860](https://github.com/HKUDS/nanobot/issues/4860) – User confusion about missing `onboard` and `webui` commands after installation (closed after clarification).  
- [#4302](https://github.com/HKUDS/nanobot/issues/4302) – Gateway crash after MCP reconnect (closed with fix in #4764).  
- [#4634](https://github.com/HKUDS/nanobot/issues/4634) – `edit_file` wrongly modifies wrong occurrence despite correct `old_text` (closed with discussion).  
- [#4231](https://github.com/HKUDS/nanobot/issues/4231) – Add model parameter to `spawn` tool (closed with the merge of #4623).  

The underlying need is clear: users want flexible model selection at multiple levels (conversation, subagent, cron) without global configuration changes. The merges of #4623 and #4622 directly address two of these requests.

## 5. Bugs & Stability

**High severity**:  
- **Security vulnerability** [#4776](https://github.com/HKUDS/nanobot/issues/4776) (open) – `/restart` command has no authorization; any paired user can DoS the entire process. No fix PR yet, but a related security PR [#4844](https://github.com/HKUDS/nanobot/pull/4844) (open) addresses slash command authorization for sustained goals.  
- **Workspace confinement** [#4796](https://github.com/HKUDS/nanobot/issues/4796) – `restrict_to_workspace` defaults to `False`, allowing unrestricted tool operations. Fix PR [#4880](https://github.com/HKUDS/nanobot/pull/4880) (open) changes default to `True`.

**Medium severity** (all closed with fixes):  
- [#4860](https://github.com/HKUDS/nanobot/issues/4860) – Missing `onboard`/`webui` commands (user error / documentation mismatch).  
- [#4302](https://github.com/HKUDS/nanobot/issues/4302) – MCP reconnect crash (fixed in #4764).  
- [#4835](https://github.com/HKUDS/nanobot/issues/4835) – WebUI landing message sent to wrong chat (fixed in #4836).  
- [#4872](https://github.com/HKUDS/nanobot/issues/4872) – Dream creates empty commits (fixed in #4873).

**Low severity / pending**:  
- [#4634](https://github.com/HKUDS/nanobot/issues/4634) – `edit_file` ambiguity (discussion ongoing, no fix PR yet).  
- PRs [#4837](https://github.com/HKUDS/nanobot/pull/4837) (open) and [#4842](https://github.com/HKUDS/nanobot/pull/4842) (open) address multimodal content crashes and `CancelledError` in shutdown; not yet merged.

Overall, the project is responsive to regressions; most reported bugs have been fixed within days.

## 6. Feature Requests & Roadmap Signals

Recent feature requests with high community resonance:

- **Per-conversation model override** [#4253](https://github.com/HKUDS/nanobot/issues/4253) – Still open and the most commented issue. Given the merges of #4623 (subagent override) and #4622 (cron preset), this appears to be the next logical step. Likely to be addressed in the next minor release.  
- **Sustained-goal opt-in** – PR [#4879](https://github.com/HKUDS/nanobot/pull/4879) (open) proposes gating long-running background tasks behind an opt-in flag (default off) to avoid blocking user interactions. This indicates the team is rethinking the long_task design.  
- **Eager memory consolidation** – PR [#4626](https://github.com/HKUDS/nanobot/pull/4626) (open) adds opt-in eager archiving of conversation slices, paving the way for improved memory management. Related PRs [#4621](https://github.com/HKUDS/nanobot/pull/4621) and [#4627](https://github.com/HKUDS/nanobot/pull/4627) further refine memory provenance and delivery context.  
- **Aggregated subagent results** – PR [#4624](https://github.com/HKUDS/nanobot/pull/4624) (open) adds buffered result mode for subagents, useful for tools that return multiple results asynchronously.

The roadmap appears to be moving toward better configurability, memory persistence, and agent lifecycle control.

## 7. User Feedback Summary

**Pain points**:  
- Users struggle with installation commands that don’t match documentation ([#4860](https://github.com/HKUDS/nanobot/issues/4860)).  
- MCP server timeouts cause crashes and disrupt workflows ([#4302](https://github.com/HKUDS/nanobot/issues/4302)).  
- The lack of per-conversation model selection forces users to switch between presets manually ([#4253](https://github.com/HKUDS/nanobot/issues/4253)).  
- Unwanted empty commits from Dream clutter version history ([#4872](https://github.com/HKUDS/nanobot/issues/4872)).  
- Security gaps in `/restart` and workspace confinement raise reliability concerns ([#4776](https://github.com/HKUDS/nanobot/issues/4776), [#4796](https://github.com/HKUDS/nanobot/issues/4796)).

**Positive signals**:  
- Users appreciate the `spawn` tool and explicitly request model override (now merged).  
- The community actively contributes fixes (e.g., #4764, #4836, #4873) and provides detailed bug reports with reproduction steps.  
- Multiple contributors are independently working on memory consolidation and execution isolation, suggesting a healthy open-source ecosystem.

**Satisfaction indicator**: The rapid closure of bugs and the merging of popular feature requests (subagent model override, cron presets) within days of discussion shows a responsive maintainer team.

## 8. Backlog Watch

The following important items have been open for an extended time without resolution:

- **#4021** (PR, opened May 27) – Dedup reasoning items before send to avoid OpenAI Codex 400 errors. Still open with 0 comments since June. May be waiting on maintainer review.  
- **#4253** (issue, opened June 8) – Per-conversation model override. High community interest but no assigned milestone.  
- **#4231** (issue, opened June 7) – Subagent model override. Now closed by #4623, but note that the PR took over three weeks from issue creation to merge.  
- **#4378** (issue, opened June 17) – Cron model/preset. Closed today by #4622; resolved after 24 days.  
- **#4776** (issue, opened July 6) – Security: `/restart` authorization. No activity after initial report. Given the security implications, this deserves priority attention.

No extremely stale PRs or issues beyond 1.5 months were identified. The project maintains a healthy review cadence.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-11

## 1. Today's Overview

Hermes Agent is in a period of high community activity: **50 issues** and **50 pull requests** were updated in the last 24 hours, with **8 issues closed** and **9 PRs merged/closed**. No new releases were published, but the sheer volume of incoming bug reports (especially around provider configuration, session state, and platform-specific crashes) signals both heavy adoption and pressing stability concerns. The maintainers are responding with a flurry of targeted fixes, particularly for the Z.AI/billing area and for Windows/Linux desktop stability. The project shows a healthy pulse but is clearly feeling the strain of a rapidly expanding user base.

---

## 2. Releases

No new releases were published on 2026-07-11.

---

## 3. Project Progress

### Merged/Closed PRs (visible from top activity)
- **#62522** – `feat(browser): add Helium browser support on Linux` – Merged. Adds lightweight Chromium fork as browser candidate, conditional `--user-data-dir`.  
  [PR #62522](https://github.com/NousResearch/hermes-agent/pull/62522)

- **#62497** – `fix: add MiniMax M2.x to reasoning stale-stream timeout floor` – Merged. Prevents premature timeout for MiniMax M2.7 reasoning model.  
  [PR #62497](https://github.com/NousResearch/hermes-agent/pull/62497)

### Closed Issues (selected)
- **#47714** – Desktop/TUI sessions fall back to OpenRouter when using named custom provider (bug closed).  
  [Issue #47714](https://github.com/NousResearch/hermes-agent/issues/47714)

- **#61487** – Z.AI provider pool cascade-marks every key when one hits per-key quota (bug closed).  
  [Issue #61487](https://github.com/NousResearch/hermes-agent/issues/61487)

- **#61563** – Z.AI manual-pool credentials always routed to wrong endpoint (bug closed).  
  [Issue #61563](https://github.com/NousResearch/hermes-agent/issues/61563)

- **#30640** – RFC: Cursor SDK integration – closed as resolved (feature).  
  [Issue #30640](https://github.com/NousResearch/hermes-agent/issues/30640)

- **#62384** – Add reviewed local-to-shared skill promotion workflow (feature closed).  
  [Issue #62384](https://github.com/NousResearch/hermes-agent/issues/62384)

**Overall**: The team tackled several high-priority bugs in the Z.AI billing/pool area and merged a popular request (Helium browser support). The Cursor SDK RFC moved to closed status, likely meaning it is being implemented.

---

## 4. Community Hot Topics

### Most active issues (by comments + reactions)

| Issue | Comments | 👍 | Topic |
|-------|----------|----|-------|
| [#47714](https://github.com/NousResearch/hermes-agent/issues/47714) (closed) | 9 | 4 | Desktop/TUI sessions falling back to OpenRouter |
| [#17199](https://github.com/NousResearch/hermes-agent/issues/17199) | 7 | 0 | DeepSeek provider model normalization breaks custom endpoints |
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | 6 | 1 | Extremely large prompts causing multi-minute stalls |
| [#61487](https://github.com/NousResearch/hermes-agent/issues/61487) (closed) | 6 | 0 | Z.AI cascade key exhaustion |
| [#30640](https://github.com/NousResearch/hermes-agent/issues/30640) (closed) | 5 | 0 | Cursor SDK integration RFC |
| [#43008](https://github.com/NousResearch/hermes-agent/issues/43008) | 5 | 0 | Graceful session resume / idle-expiry awareness |
| [#47970](https://github.com/NousResearch/hermes-agent/issues/47970) | 4 | 1 | GLM-5.2 context_length falls back to 200K |

**Analysis**:  
- **Custom provider confusion** dominates – users struggle with named custom providers not being respected in Desktop/TUI and Dashboard model switchers.  
- **Large prompt stalls** (#61265) suggest a systemic problem in prompt construction for local models.  
- **Z.AI billing/pool issues** have been receiving quick fixes, indicating the provider’s growing user base.  
- **Session awareness** (#43008) and **context length** bugs show users need clearer feedback when context is lost.  
- The **Cursor SDK** RFC (#30640) was warmly received and is now closed, likely signaling upcoming implementation.

Most active PRs (no comment counts given) include several fixes for the above issues: #62524 (quiet mode fix), #62530 (MCP watchdog fix), #62523 (gateway startup notification), #62517 (MiniMax timeout).

---

## 5. Bugs & Stability

### New bugs reported today (2026-07-11)

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **High** | [#62462](https://github.com/NousResearch/hermes-agent/issues/62462) | Hermes Desktop crashes on Linux because `node-pty` native module missing | No |
| **High** | [#62480](https://github.com/NousResearch/hermes-agent/issues/62480) | `chat -Q` quiet mode returns empty content on tool-using turns | Yes – [#62524](https://github.com/NousResearch/hermes-agent/pull/62524) |
| **High** | [#62505](https://github.com/NousResearch/hermes-agent/issues/62505) | MCP stdio watchdog kills live servers when `create_time` changes | Yes – [#62530](https://github.com/NousResearch/hermes-agent/pull/62530) |
| **Medium** | [#62512](https://github.com/NousResearch/hermes-agent/issues/62512) | Gateway startup notification not sent | Yes – [#62523](https://github.com/NousResearch/hermes-agent/pull/62523) |
| **Medium** | [#62514](https://github.com/NousResearch/hermes-agent/issues/62514) | Windows: `.sh/.bash` cron jobs fail with exit 127 (backslash path) | No |
| **Medium** | [#62494](https://github.com/NousResearch/hermes-agent/issues/62494) | `hermes chat --model <alias>` ignores `model_aliases` | No |
| **Low** | [#62481](https://github.com/NousResearch/hermes-agent/issues/62481) | First Enter in new chat requires second press (regression from #54527) | No |
| **Low** | [#62532](https://github.com/NousResearch/hermes-agent/issues/62532) (PR) | Windows UAC elevation loses `HERMES_HOME` | Yes – PR itself is a fix |

### Other notable open bugs
- **#51058** – TUI/Desktop session mix-up after context compression (P2, no fix yet)  
- **#57143** – Dashboard model switcher falls back to OpenRouter for custom providers (P2)  
- **#56158** – `/model` switch from Telegram persists stale `base_url` (P2)  
- **#62175** – Dashboard leaks CLOSE_WAIT sockets (~40/day) → EMFILE (P2)  
- **#40913** – OpenAI-codex provider ignores `model.base_url` in credential pool (P2)  
- **#49731** – Gateway broken in middle of tasks (needs-repro)

**Summary**: The most critical new crash (Linux Desktop) has no fix yet; however, the quiet mode emptiness, MCP watchdog, and gateway startup notification all have pending fix PRs. Several regression-level bugs (Enter key, alias handling) remain unfixed.

---

## 6. Feature Requests & Roadmap Signals

### New feature requests today
- **#62512** – Gateway startup notification – addressed by PR #62523.  
- **#62475** – Context-aware boosting for skills in large lists (69 skills gets lost).  
- **#62384** – Local-to-shared skill promotion workflow (closed, likely implemented).  
- **#51250** – GUI pop-up for memory approval (like tool-use approval) – 1 👍.

### Older but active feature requests
- **#43008** – Graceful session resume / reset-awareness (P3, enhancement).  
- **#17415** – Trusted internal triggers between gateway role sessions (P3).  
- **#38975** – Desktop UI: add full custom OpenAI-compatible provider setup.  
- **#23359** – Provider/model inventory scriptable surface (P2, blocked).  
- **#10036** – Gemini CLI support / skill installation convenience (P3).  
- **#55589** – WhatsApp replies to cron deliveries lose context (P2, sweeper:risk-session-state).

### Predicted next features
- **Skill promotion workflow** (#62384) – likely to land soon.  
- **Cursor SDK integration** (#30640) – RFC closed, implementation expected.  
- **GUI memory approval** (#51250) – popular request, maybe next minor version.  
- **Custom provider UI setup** (#38975) – needed to reduce config bugs.  
- **Scriptable provider inventory** (#23359) – likely needed for automation, but blocked by multiple PRs.

---

## 7. User Feedback Summary

Users are actively using Hermes in diverse environments – Linux Desktop, Windows, Telegram, WeChat, local models, Z.AI, OpenAI-compatible proxies – and reporting both satisfaction and frustration.

**Praises**:  
- The Cursor SDK RFC was well-received; users want deeper IDE integration.  
- Quick turnaround on Z.AI billing fixes is appreciated.  
- Community-contributed skills (e.g., GRC compliance) show growing ecosystem.

**Pain Points**:  
- **Provider configuration is brittle**: custom providers break in Desktop/TUI/Dashboard/CLI in different ways – users have to fall back to OpenRouter or use CLI-only workarounds.  
- **Session/responsiveness issues**: context compression leading to lost sessions, quiet mode silently failing, gateway dropping context on idle.  
- **Platform-specific problems**: Linux Desktop crashes (node-pty), Windows cron broken, TUI session mix-up.  
- **Large prompt stalls** with local models frustrate power users running local LLMs.  
- **Billing and key management**: Z.AI pool cascade, wrong endpoints – but these are being fixed.

**Satisfaction indicators**: High issue volume and PR activity suggests an engaged community that cares enough to report bugs and submit fixes.

---

## 8. Backlog Watch

Issues and PRs that have been open for an extended time without maintainer resolution or significant activity:

| Issue/PR | Created | Last Updated | Comments | Need |
|----------|---------|--------------|----------|------|
| [#17199](https://github.com/NousResearch/hermes-agent/issues/17199) – DeepSeek provider custom endpoint breakage | 2026-04-29 | 2026-07-11 | 7 | Fix needed – blocking users with custom OpenAI-compatible endpoints |
| [#43008](https://github.com/NousResearch/hermes-agent/issues/43008) – Graceful session resume | 2026-06-09 | 2026-07-11 | 5 | Enhancement – no assignee or PR |
| [#10036](https://github.com/NousResearch/hermes-agent/issues/10036) – Gemini CLI / skill installation | 2026-04-15 | 2026-07-11 | 3 | Feature request unanswered |
| [#23359](https://github.com/NousResearch/hermes-agent/issues/23359) – Scriptable provider inventory | 2026-05-10 | 2026-07-11 | 2 | Blocked by five reinventions |
| [#17415](https://github.com/NousResearch/hermes-agent/issues/17415) – Trusted internal triggers | 2026-04-29 | 2026-07-11 | 3 | Feature, no visible progress |
| [#40913](https://github.com/NousResearch/hermes-agent/issues/40913) – openai-codex ignores base_url | 2026-06-07 | 2026-07-11 | 2 | Bug, no fix PR yet |
| [#49731](https://github.com/NousResearch/hermes-agent/issues/49731) – Gateway broken in middle of tasks | 2026-06-20 | 2026-07-11 | 1 | Needs reproduction, may be critical |

**Call to action**: Issues #17199 and #40913 are provider configuration bugs that have been open for over a month and are causing real workflow breakage. #43008 and #17415 are architectural enhancements that would greatly improve session reliability but lack traction. The scriptable inventory (#23359) is a clear infrastructure need that is being reinvented – a maintainer decision could unblock multiple dependent PRs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-11

## 1. Today's Overview
Development activity remains steady with **16 pull requests updated in the last 24 hours**, including one merged fix for a WhatsApp WebSocket timeout issue. The single issue updated during this period was the same bug report, now closed. While no new releases were cut, the project shows healthy ongoing work: several dependency bumps, security hardening patches, performance improvements, and a new channel type (Simplex) are in the pipeline. A few stale PRs continue to linger, suggesting that maintainer bandwidth is stretched.

## 2. Releases
No new releases were published today. The latest available version remains v0.2.9 (as referenced in the closed bug report).

## 3. Project Progress
- **Merged/closed PRs today:**  
  - **[PR #3179](https://github.com/sipeed/picoclaw/pull/3179) [merged]** — *fix(whatsapp): reconnect after websocket drops*  
    Implements automatic reconnection, configurable read deadlines, ping/pong keepalive, and asynchronous message dispatch for the WhatsApp bridge. This directly resolves the timeout issue reported in [#3178](https://github.com/sipeed/picoclaw/issues/3178) (closed today).

- **Other notable PRs updated (still open) that advanced functionality:**  
  - **[PR #3205](https://github.com/sipeed/picoclaw/pull/3205)** — Adds Linux ARMv7 build target and fixes 9router gateway response parsing (enables Raspberry Pi 3B+ support).  
  - **[PR #3246](https://github.com/sipeed/picoclaw/pull/3246)** — Security & robustness hardening: defaults MQTT to verify TLS certificates, enforces OAuth timeouts, and bounds iterator reads on search memory.  
  - **[PR #3247](https://github.com/sipeed/picoclaw/pull/3247)** — Adds Czech translations for code-wrap UI options (i18n improvement).  
  - **[PR #3248](https://github.com/sipeed/picoclaw/pull/3248)** — Bumps Go toolchain to 1.25.12 to fix two standard library vulnerabilities.

## 4. Community Hot Topics
The most active discussion this period was around the WhatsApp WebSocket timeout (Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178), 2 comments). The reporter was using Docker with `launchpad` and the DeepSeek-v4-pro model. The fix was quickly merged, demonstrating responsive maintenance.

While no other issues or PRs attracted multiple comments or reactions, the breadth of PR descriptions (e.g., [#3205](https://github.com/sipeed/picoclaw/pull/3205) — real hardware testing, [#3246](https://github.com/sipeed/picoclaw/pull/3246) — security audit) indicates engaged contributors providing detailed rationale. The underlying community need is for a stable, production-grade agent that works across diverse environments (Raspberry Pi, 9router gateways, Docker).

## 5. Bugs & Stability
**High severity (fix available):**
- **WhatsApp WebSocket timeout** — Issue [#3178](https://github.com/sipeed/picoclaw/issues/3178) reported a timeout when connecting via WebSocket on v0.2.9. The root cause (dead connection retries) was fixed in merged PR [#3179](https://github.com/sipeed/picoclaw/pull/3179).

**Medium severity (open PR):**
- **MQTT TLS certificate validation disabled** — PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) (open) hardens MQTT channel by removing `InsecureSkipVerify: true`, which exposed all broker connections to man-in-the-middle attacks. Also addresses unbounded search reads and missing OAuth context timeouts.
- **Go stdlib vulnerabilities** — PR [#3248](https://github.com/sipeed/picoclaw/pull/3248) (open) fixes two `govulncheck` findings in `crypto/tls` and `os` by bumping Go from 1.25.11 to 1.25.12.

No new regressions or crashes were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
- **Agent Collaboration** ([#2937](https://github.com/sipeed/picoclaw/pull/2937), open since May 24) — A first-class internal agent collaboration bus with per-agent mailboxes and permission awareness. Despite being stale, this is a significant architectural addition that likely appears on the roadmap.
- **Configurable Fallback Chain** ([#3200](https://github.com/sipeed/picoclaw/pull/3200)) — Allows users to set a default model and fallback order in the Web UI, persisted via API. Likely to be included in the next minor release.
- **Simplex Channel** ([#3193](https://github.com/sipeed/picoclaw/pull/3193)) — New channel type for simplex communication (still open, no merge yet).
- **Raspberry Pi / ARMv7 Support** ([#3205](https://github.com/sipeed/picoclaw/pull/3205)) — Explicit community demand for edge-device deployment.
- **i18n expansions** ([#3247](https://github.com/sipeed/picoclaw/pull/3247)) — Czech translations; signals growing international user base.

Prediction: The next version (v0.3.x) could include the fallback chain feature, ARM builds, and the security hardening patches if merged quickly.

## 7. User Feedback Summary
- **Real pain points:**  
  - WhatsApp WebSocket instability (Docker user, DeepSeek model) — resolved in PR #3179.  
  - Lack of ARMv7 binaries for Raspberry Pi 3B+ — contributor `sarwonous` worked around this by adding the build target, also fixing 9router gateway parsing discrepancies.  
  - Security concerns: MQTT TLS misconfiguration (found by contributor `corporatepiyush` during audit).  
- **Use cases:** Running PicoClaw on low-power hardware (Raspberry Pi) with alternative OpenAI-compatible gateways (9router).  
- **Satisfaction/dissatisfaction:** No explicit feedback in issues, but the quick turnaround on the WhatsApp bug (2 days from report to merged fix) suggests responsive maintainers.

## 8. Backlog Watch
Several important PRs and issues remain unmerged or uncommented by maintainers:

- **[PR #2937](https://github.com/sipeed/picoclaw/pull/2937)** — Agent collaboration (stale, since May 24). No maintainer activity. Potential major feature that could block other work.
- **[PR #3200](https://github.com/sipeed/picoclaw/pull/3200)** — Fallback chain feature (stale, since July 1). Needs review to avoid bit-rot.
- **[PR #3165](https://github.com/sipeed/picoclaw/pull/3165)** — Fix for Seed XML tool calls in openai_compat provider (stale, since June 24). Affects Volcengine Doubao users.
- **[PR #1951](https://github.com/sipeed/picoclaw/pull/1951)** — Move installation scripts from docs repo (stale, since March 24). Low complexity but important for new users.
- **[PR #3208](https://github.com/sipeed/picoclaw/pull/3208)** — `maunium/go/mautrix` dependency bump (stale, since July 2). Affects Matrix channel reliability.
- **[PR #3211](https://github.com/sipeed/picoclaw/pull/3211)** — `eslint` bump in frontend (stale, since July 2). Security/maintenance.

These items would benefit from maintainer triage or comments to avoid accumulation of stale contributions.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-11

## 1. Today’s Overview
NanoClaw saw high activity today with **20 Pull Requests updated** in the last 24 hours, of which **9 were merged or closed** — a strong sign of a focused sprint. No new releases were published, but the volume of merged fixes and features indicates the team is consolidating recent work. One new bug was filed (#3001, open) concerning a stale-skill-copy regression from a refactor two months ago. Overall project health is healthy: critical timestamp-related fixes and several cross-branch improvements landed, while long-running feature branches (unified iMessage, persistent memory) continue to advance.

## 2. Releases
*No releases were created on this day.*
Omit.

## 3. Project Progress — Merged/Closed PRs Today (9)
Several important fixes and features were merged, representing progress across multiple subsystems:

- **#3015** `fix: preserve phase context in live progress` (closed) — Fixes a real-end-to-end bug where Claude’s first tool event could arrive before the phase description, causing a false “completed reading” card. Includes regression tests. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3015)

- **#3011** `feat(channels): ChannelDefaults declarations for all adapters + WhatsApp shared-number fix` (closed) — Part of the adapter-declared channel defaults refactor; every adapter now declares its wiring-time defaults. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3011)

- **#3010** `feat: adapter-declared channel defaults (engage mode, threading, sender policy)` (closed) — Refactors per-channel judgments (engage mode, threading, sender policy) out of core heuristics into adapter-declared configuration. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3010)

- **#3009** `Move channel formatting skills (whatsapp, slack) from trunk to the channels branch` (closed) — Moves channel-specific formatting skills out of trunk to avoid shipping unused guidance to all installs. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3009)

- **#3007** `fix: exchange archives stamp local time` (closed) — Codex/OpenCode exchange archives now stamp timestamps in install timezone instead of raw UTC ISO. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3007)

- **#3006** `fix: ISO storage + local-time display for all timestamps` (closed) — Enforces a repo-wide convention: storage in ISO-Z UTC, display in local time. Addresses a three-workflow audit of every timestamp site. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3006)

- **#3005** `fix: stamp task rows with ISO timestamps` (closed) — Fixes a timestamp discrepancy where task rows used naive UTC that the container formatter parsed as local time. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3005)

- **#3004** `Context preview tool: render the exact agent context per scenario` (closed) — Adds a new developer tool (`scripts/context-preview.ts`) that simulates various interaction scenarios and prints the exact agent context (CLAUDE.md, system prompt, MCP tools, mounts). [GitHub](https://github.com/nanocoai/nanoclaw/pull/3004)

- **#3003** `docs(agent-browser): require bounded waits for custom conditions` (closed) — Documents a safety fix: agents using the `agent-browser` skill must use bounded wait loops to avoid unbounded blocking. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3003)

**Summary:** The team closed a significant batch of timestamp-consistency patches, advanced the channel defaults architecture, added a vital developer debug tool, and improved documentation for safe agent scripting.

## 4. Community Hot Topics
No Issues or PRs on this day received any comments or reactions (all show 0). The only active bug (#3001) has 0 comments as well. This suggests the community is either quiet or discussion is happening on other channels (e.g., Discord). The PRs with the highest potential interest are those tagged `[core-team]` (e.g., #3012, #3013 for persistent memory) and the long-running Telegram rich rendering PR (#2877) — though none have engagement metrics to report.

## 5. Bugs & Stability
One new bug was reported today:

- **#3001** `[bug] Groups created before the shared-skills refactor keep stale skill copies that silently block the managed symlinks` — **High severity.** Groups created before April 21 still use old skill content; updates to `container/skills/` never reach them, and no log message alerts users. [GitHub](https://github.com/nanocoai/nanoclaw/issues/3001)

A related fix PR is already open:

- **#3002** `fix(container): warn when a real entry blocks a shared skill symlink` (open) — Addresses the same underlying issue by emitting a warning when a real file/directory prevents a symlink from being created. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3002)

Other bug-fix PRs still open:

- **#3014** `fix(agent-runner): bound hasIdenticalSend to the turn in flight` (open) — Prevents false dedup matches across turns. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3014)
- **#3008** `fix(whatsapp): remove cachedGroupMetadata that breaks SKDM in LID groups` (open) — Fixes a WhatsApp sender-key distribution issue in LID-mode groups. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3008)
- **#2996** `fix(delivery): route missing-adapter messages into the retry path` (open) — Ensures messages for missing adapters are not silently dropped. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2996)

**Severity ranking:** #3001 (silent data loss for pre-refactor groups) > #3008 (WhatsApp sending may fail in certain groups) > #3014 (potential message duplication) > #2996 (message drops).

## 6. Feature Requests & Roadmap Signals
From open PRs and the single issue, the following feature directions are visible:

- **Unified iMessage channel** (#2999) — Merges local and hosted backends into a single skill. Expected in next release after review. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2999)
- **Provider-agnostic persistent memory** (#3012, #3013) — Adds a shared memory tree and Codex counterpart for session start. These are core-team features likely targeting a major release. [GitHub](https://github.com/nanocoai/nanoclaw/pull/3012)
- **Scheduled tasks: one-door delivery** (#2988) — Part 3/5 of the scheduled-tasks train; enforces explicit destination for all messages. Likely to be included in the next minor version. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2988)
- **Telegram native rich rendering** (#2877) — Long-open feature using Bot API 10.1 `sendRichMessage`. Still awaiting review after three weeks. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2877)

**Prediction:** The next version will likely include the timestamp consistency fixes (already merged), channel defaults architecture, and potentially the unified iMessage channel and persistent memory (depending on further review).

## 7. User Feedback Summary
While no direct user comments are recorded in the GitHub data, the following pain points are evident from the issue and PR descriptions:

- **Stale skill copies after refactor** (#3001) — Users with groups created before April 21 face silent denial of skill updates. This is a significant frustration for anyone deploying multi-agent groups.
- **Unbounded wait loops in agent-browser** (fixed in #3003 docs) — Agents could block forever if a condition never becomes true; the documentation fix addresses a real user safety concern.
- **Timestamp confusion** (fixed by multiple PRs #3005–#3007) — Tasks and archives displayed times that mismatched adjacent chat timestamps. Users likely noticed discrepancies in logs and transcripts.
- **WhatsApp group issues** (#3008) — LID-mode groups could experience message delivery failures due to incorrect metadata caching.

Satisfaction signals: The high merge rate and quick turnaround on timestamp fixes indicate responsive maintainers.

## 8. Backlog Watch
Several PRs remain open for extended periods and may need maintainer attention:

- **#2877** `feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage` — Open since 2026-06-28 (13 days). No updates since July 10. A feature with significant user value, potentially blocked on review bandwidth. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2877)
- **#2966** `fix(agent-runner): log when an errored batch is acked completed` — Open since 2026-07-06 (5 days). Has core-team label. A logging improvement that could help debugging. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2966)
- **#2998** `fix(self-mod): render full MCP server payload on the approval card` — Open since July 9, with no comments. May be awaiting review. [GitHub](https://github.com/nanocoai/nanoclaw/pull/2998)
- **#2996** (mentioned above) — Also open since July 9.

No Issues are long-open (the only open issue is #3001, filed today). The backlog is manageable, but review attention should be directed to #2877 to avoid feature stagnation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-11

## 🧭 Today's Overview
Project activity is **low** for 2026-07-11: no pull requests were updated, no releases were published, and only three issues were updated in the last 24 hours (all still open). The community remains engaged through bug reports and feature requests, but a lack of merged PRs suggests maintainers may be focused elsewhere or awaiting triage. The most significant development is a newly filed feature request for a grok‑CLI provider and a security‑related bug disclosure involving the A2A route.

## 📦 Releases
**None.** No new versions published.

## 🚀 Project Progress
**No PRs were merged or closed today.** No code changes advanced.

## 🔥 Community Hot Topics
The most active issue today, based on comments and timeline:

- **[#972 – [bug] telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)**  
  *Author: i11010520 | Created: 2026-06-30 | Updated: 2026-07-10 | Comments: 2*  
  The Telegram integration appears to silently stop responding after an idle period (e.g., overnight), while the backend agent continues to work. The two comments (likely from the author and possibly a maintainer or other user) indicate this is a reproducible and annoying pain point. Underlying need: **reliable long‑running channel connectivity and automatic reconnection logic**.

- **[#974 – [BUG] NullClaw shared bearer A2A route allows cross‑caller task and context reuse](https://github.com/nullclaw/nullclaw/issues/974)**  
  *Author: N0zoM1z0 | Created: 2026-07-10 | Updated: 2026-07-10 | Comments: 0*  
  Though low on comments, the security implications are serious. The issue describes a scenario where a shared bearer token enables cross‑user access to task history and context reuse. This has drawn attention as a high‑severity design flaw.

- **[#975 – Add grok‑cli provider (run Grok via the grok CLI's login session, unmetered)](https://github.com/nullclaw/nullclaw/issues/975)**  
  *Author: yanggf8 | Created: 2026-07-11 | Comments: 0*  
  A feature request that matches the existing pattern of CLI providers (`claude-cli`, `codex-cli`, `gemini-cli`). The user points to `src/provider_probe.zig:43` as the implementation target. This has high alignment with the project’s direction and likely low implementation risk.

## 🐛 Bugs & Stability
Two bugs reported/updated in the last 24h, ranked by severity:

1. **High – Security / Authorization: [#974](https://github.com/nullclaw/nullclaw/issues/974)**  
   *Cross‑caller task and context reuse via shared bearer token in A2A route.* This could allow unauthorised access to task history and downstream resources. No fix PR exists yet.

2. **Medium – Reliability / Connectivity: [#972](https://github.com/nullclaw/nullclaw/issues/972)**  
   *Telegram channel stops responding after idle time.* The backend remains functional, so this is a transport‑layer issue. The bug affects users who rely on long‑running Telegram sessions; no fix linked.

No new crashes or regressions were reported beyond these two.

## 💡 Feature Requests & Roadmap Signals
The most notable feature request is **#975 (grok‑cli provider)**. Given that NullClaw already supports several CLI‑based providers (Claude, Codex, Gemini), adding Grok would fill an obvious gap. This feature is low‑effort (follows an established pattern) and likely to appear in the next release if maintainers accept it.

Also worth noting: the Telegram bot reliability issue (#972) may lead to an internal feature request for **automatic reconnection / keep‑alive** mechanisms, even if not filed as a separate feature.

## 💬 User Feedback Summary
- **Pain point #1:** Telegram integration unreliable after idle periods — users must restart the channel manually (implied by #972).
- **Pain point #2:** Security design of shared bearer tokens for A2A route undermines trust in multi‑user setups (#974).
- **Desire:** Access to Grok via CLI provider, echoing the success of existing CLI integrations (#975).
- **Satisfaction:** No positive sentiment expressed in today’s issues; community is primarily reporting problems or requesting capabilities.

## ⏳ Backlog Watch
The following open issue has been unanswered for over a week with no maintainer response or associated PR:

- **[#972 – Telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)**  
  *Created 2026-06-30, last updated 2026-07-10, 2 comments.*  
  This is a reproducible bug affecting a supported channel (Telegram). It remains open without a fix or workaround, suggesting it may need a maintainer’s attention to either diagnose or prioritise.

No stale PRs are present.


</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-11

## 1. Today's Overview

IronClaw is in an extremely active development phase, with **23 issues updated** (15 open, 8 closed) and **50 pull requests** (35 open, 15 merged/closed) in the last 24 hours. A bug-bash effort is underway, producing a flood of high-severity bug reports (P1–P3) across Slack DM delivery, run execution errors, UI inconsistencies, and extension lifecycle. The core team is responding with large, stacked PRs addressing `Reborn` loop resilience, budget approval gates, queued message steering, and CI stability. No new releases were tagged today, but the rapid pace of fixes and feature splits suggests a significant release is being prepared.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs (today):**  
- [#5984](https://github.com/nearai/ironclaw/pull/5984) — Fix scheduled Reborn QA CI shards (canary).  
- [#5980](https://github.com/nearai/ironclaw/pull/5980) — Forward-port queued-message steering + budget approval gate from #5279 onto current `main`.  
- [#5964](https://github.com/nearai/ironclaw/pull/5964) — Reborn budget approval-as-blocked-gate + usage settings (split 3/3).  
- [#5963](https://github.com/nearai/ironclaw/pull/5963) — Reborn queued-message steering into busy threads (split 2/3).  

**Closed Issues (today):**  
- [#5747](https://github.com/nearai/ironclaw/issues/5747) — Slack unpairing added (fix for missing disconnect UI).  
- [#5838](https://github.com/nearai/ironclaw/issues/5838) — Context compaction error after successful tool execution fixed.  
- [#4640](https://github.com/nearai/ironclaw/issues/4640) — Google Calendar `list_events` now returns correctly ordered events.  
- [#5966](https://github.com/nearai/ironclaw/issues/5966) — Boot crash-loop caused by stale manifest resolved.  
- [#5835](https://github.com/nearai/ironclaw/issues/5835), [#5828](https://github.com/nearai/ironclaw/issues/5828), [#5837](https://github.com/nearai/ironclaw/issues/5837), [#5708](https://github.com/nearai/ironclaw/issues/5708) — UI fixes: “Jump to latest” positioning, legacy test references cleanup, clickable run action buttons, inline error banners.

These merges advance the Reborn runtime as the default path, improve Slack integration lifecycle, and fix several long-standing UI and run failure issues.

## 4. Community Hot Topics

- **#5948** — [Open] *Assistant incorrectly reports GitHub extension as activated when it is only installed*  
  (5 comments) [Issue](https://github.com/nearai/ironclaw/issues/5948)  
  *Underlying need:* Users need accurate, real-time status of extension activation to trust the assistant’s self-description. The false positive breaks user confidence and could lead to erroneous commands.

- **#5747** — [Closed] *No way to unpair Slack on built-in host-beta mount*  
  (3 comments) [Issue](https://github.com/nearai/ironclaw/issues/5747)  
  *Underlying need:* Slack users require a clear self-service disconnect mechanism; the previous dead-end (`/pair` refusal, no UI) created frustration. The closure today satisfies this need.

- **#5968** — [Open] *HTTP tool fails with errors when connecting to third-party services without MCP support (Attio)*  
  [Issue](https://github.com/nearai/ironclaw/issues/5968)  
  *Underlying need:* Users need a generic HTTP tool that handles authentication and error reporting for arbitrary APIs. The current tool is too narrow.

- **#5943 / #5944** — [Open] *Slack DM delivery problems* (P1: posts to channel instead of DM; P2: silent failure)  
  [Issue #5943](https://github.com/nearai/ironclaw/issues/5943) | [Issue #5944](https://github.com/nearai/ironclaw/issues/5944)  
  *Underlying need:* Direct messaging is a core Slack integration use case; the double failure (wrong destination + no error feedback) directly impacts user workflows.

## 5. Bugs & Stability

**Severity P1 (critical impact):**  
- **#5943** — Slack DM action posts to current channel, not user’s DM. No fix PR yet.  
- **#5944** — Slack DM silently fails but run reports success. No fix PR yet.  
- **#5945** — Run fails with generic “model provider was unavailable” after 34+ tool calls. Associated fix PRs: #5932, #5965.  
- **#5883** — Generic “model output could not be used” after successful tool execution. Fix in progress via #5932.  
- **#5955** — Multistep workflow with sub-agents/missions stops progressing. No dedicated fix PR yet.

**Severity P2 (moderate impact):**  
- **#5946** — Assistant mutates Google Sheet before checking trigger availability.  
- **#5947** — Thread deletion requires page refresh to reflect in UI. Addressed by PR #5929 (open).  
- **#5968** — HTTP tool fails on third-party APIs without MCP support. No fix PR.  
- **#5969** — GLM-5.2 not in opencode default model list.  
- **#5953** — Channel disconnect on extension removal broken for generic ExternalChannel (non-Slack). Addressed by PR #5957.  
- **#5958** — Reborn loop executor store I/O has no wall-clock bound (long‑running compaction).  
- **#5418** — Conversation messages appear in wrong order after tool activity. Addressed by PR #5930.

**Severity P3 (low impact / cosmetic):**  
- **#5948** — False activation report for GitHub extension.  
- **#5947** (partially UI) — Thread deletion refresh issue.  
- **#5835** — “Jump to latest” button position (closed today).  
- **#5708** — Error banners outside chat stream (closed today).

Multiple open fix PRs target the most serious bugs: #5932 (model output errors), #5957 (Slack/extension removal), #5975 (prompt-cache break detection), #5959 (deep availability retries), and #5965 (recoverable error propagation).

## 6. Feature Requests & Roadmap Signals

- **#5935** — [Open] *Retire v1 runtime and remove legacy src/ code.*  
  Signals the project is fully committing to Reborn as the only runtime, likely in the next major release.

- **#5938** — [Open] *Unify Reborn dropdown styling with shared SelectMenu component.*  
  Consistent UI polish aligns with the v1 removal push.

- **#5969** — [Open] *GLM-5.2 not available in opencode default model list.*  
  User request to expand default model support, likely to be addressed by adding the model in configuration defaults.

- **PR #5985** — [Open] *Route caller-requested model on OpenAI-compatible API (Phase 2).*  
  Enables dynamic model selection via API, a major feature for API consumers.

- **PR #5982 / #5981** — [Open] *Budget approval gate + usage settings* and *Queued-message steering.*  
  These are core improvements for long-running agent workflows and resource governance, split from the large #5279. High probability of inclusion in the next minor release.

**Prediction:** Next release will likely include v1 deprecation, unified dropdowns, budget/queue features, and fixes for the top P1/P2 bugs.

## 7. User Feedback Summary

**Pain Points (real user experiences):**  
- Slack DM delivery is fundamentally broken — users either receive nothing or see messages in the wrong channel.  
- Long-running workflows fail with opaque errors after many tool calls, wasting time and trust.  
- Extension activation status is misleading (GitHub extension appears active but isn’t).  
- Google Calendar returns old events instead of upcoming ones (fixed today).  
- Thread deletion and error banners require manual page refreshes, breaking UX flow.  
- HTTP tool cannot connect to popular third-party APIs (e.g., Attio), limiting integration possibilities.  

**Satisfaction trends:**  
- The bug-bash feedback shows the team is responsive (many fixes in same day).  
- Slack unpairing (closed today) resolves a long-standing complaint.  
- Users appreciate the move toward a single Reborn runtime, but demand consistency and reliability first.

## 8. Backlog Watch

- **#5418** — [Open] *Conversation messages appear in wrong order after tool activity.*  
  Created 2026-06-29, still open. A fix is in PR #5930, but not yet merged. Needs maintainer review to land.

- **#5598** — [Open] *Release automation PR* (created 2026-07-03).  
  This PR bundles multiple crate version bumps with breaking changes (`ironclaw_common` 0.4.2→0.5.0, `ironclaw_skills` 0.3.0→0.4.0). It is blocked on CI or review. A decision on its release timing is needed to unblock downstream updates.

- **#5876** — [Open] *Fix main branch CI failures* (created 2026-07-09).  
  Large CI stabilization PR. Still open despite being critical for release health. Its merge should be prioritized.

These long-standing items deserve maintainer attention to avoid compounding technical debt and to keep the release pipeline green.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-11

## 1. Today's Overview
Project activity is moderate, with the team shipping a new patch release (2026.7.10) and closing three pull requests. A critical bug report (#2293) regarding multi-agent USER.md overwriting surfaced and is being actively discussed, indicating a regression in the latest build. Three older stale issues remain untouched, suggesting potential areas where maintainer bandwidth is stretched. Overall, the project is moving forward on features (delegated collaboration, UX improvements) while stable health requires attention to reported regressions and long‑standing feature requests.

## 2. Releases
**New version: [LobsterAI 2026.7.10](https://github.com/netease-youdao/LobsterAI/releases)** (released 2026-07-10)
- **feat(agents):** Supports delegated sub-agent collaboration (PR #2285)
- **feat(cowork):** Adds minimizable permission prompts (PR #2296)
- **feat(cowork):** *(description truncated – likely additional cowork improvement)*
- No breaking changes or migration notes were provided in the release description.

## 3. Project Progress
Three pull requests were merged/closed today:
- **#2317** ([closed](https://github.com/netease-youdao/LobsterAI/pull/2317)) – Release/2026.7.8 build integration across all areas (renderer, build, docs, main, openclaw, cowork, im, artifacts).
- **#2316** ([closed](https://github.com/netease-youdao/LobsterAI/pull/2316)) – `fix(renderer):` Prevents Windows title bar logo compression when sidebar is collapsed with an update badge; preserves expanded alignment and macOS behavior.
- **#2315** ([closed](https://github.com/netease-youdao/LobsterAI/pull/2315)) – `fix(cowork):` Connects queued follow‑up coordinator, enabling processing of follow‑ups across sessions and while the app is minimized.

## 4. Community Hot Topics
- [#2293 “[BUG] 重启后，多个agent下的USER.md被覆盖替换”](https://github.com/netease-youdao/LobsterAI/issues/2293) (3 comments, updated 2026-07-10) – This is the most active issue today. User reports that modifying `USER.md` for one agent overwrites all agents after restart, with a specific test showing that **only the main agent’s USER.md survives**. The community wants separate per‑agent configuration persistence.
- [#1326 “[Enhancement] ToolUse 工具调用块批量展开/折叠”](https://github.com/netease-youdao/LobsterAI/issues/1326) (1 comment, updated today) – Persistent request for a “collapse/expand all” button in cowork when multiple tool calls exist. A corresponding PR #1327 exists but remains open since April.

## 5. Bugs & Stability
| Issue | Severity | Description | Fix PR exists? |
|-------|----------|-------------|----------------|
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | **High** | Multi‑agent USER.md overwriting after restart | No fix PR yet – under discussion |
| [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | Medium | New scheduled task notification channel has no options (“no notification” only) | No fix PR |
| [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | Low‑Medium | Missing error‑state red dot in cowork session list for erroneous conversations | No fix PR |

The USER.md regression (#2293) is the most impactful, blocking users who rely on distinct agent configurations. No immediate fix PR is linked.

## 6. Feature Requests & Roadmap Signals
- **Batch tool‑call collapse/expand** ([#1326](https://github.com/netease-youdao/LobsterAI/issues/1326), PR [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327)) – A well‑defined, community‑sourced feature with an open implementation PR from April. Likely to be merged once stale status is resolved.
- **Session error‑state red badge** ([#1330](https://github.com/netease-youdao/LobsterAI/issues/1330)) – Low implementation complexity; could appear in a future dot‑release soon.
- **Persistent multi‑agent USER.md isolation** – Implicitly required by bug #2293. This may drive a design change for workspace management in the next version.

🔮 **Prediction for next version (2026.7.x):** Fix for #2293 (blocker), merge of batch tool‑toggle (#1327), and error‑state indicators (#1330).

## 7. User Feedback Summary
- **Pain point:** The multi‑agent USER.md bug (#2293) is causing real workflow disruption, preventing users from maintaining separate personalities/knowledge bases for different agents. User comments confirm the issue is reproducible with a clean test.
- **Satisfaction:** Several feature requests (batch expand, error badge) have remained open for >3 months, indicating some frustration with response time. However, the quick patch release (2026.7.10) for permission prompts and follow‑up coordinator shows responsiveness to UX issues.
- **Use case:** Power users are increasingly relying on multiple specialized agents; configuration persistence is now a hard requirement.

## 8. Backlog Watch
| Issue/PR | Age | Last Update | Status | Why it matters |
|----------|-----|-------------|--------|----------------|
| [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) + [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | 3 months | Today | Open, stale | Clean enhancement with PR waiting; low risk, high UX value |
| [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | 3 months | Today | Open, stale | Simple UX bug – scheduled task notifications broken |
| [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | 3 months | Today | Open, stale | Session debugging visibility gap |
| [#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) + [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275) | 3 months | 2026-07-10 | Open, stale | Dependabot PRs for CI actions (first‑interaction, stale); may block further CI automation updates |

**Recommendation:** Maintainers should prioritise #1327 and #2293 for the next release, and review the stale dependency PRs to keep CI healthy.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-11

## 1. Today’s Overview
Moltis experienced minimal activity over the past 24 hours. No new issues were opened or updated, and no releases were published. The sole piece of project motion is an open pull request (#1146) that adds support for GPT-5.6 models. With no merged PRs, no closed issues, and no releases, the project appears to be in a low-activity phase, likely waiting for review and consolidation around the pending feature addition.

## 2. Releases
*None.* No new releases have been published. The latest available release remains unchanged.

## 3. Project Progress
**Merged/Closed PRs today:** 0  
**Open PRs updated in last 24h:** 1  
- **#1146 (Open)** – *Add GPT-5.6 model support* by @PeterDaveHello  
  Registers GPT-5.6 Sol, Terra, and Luna in the OpenAI and OpenAI Codex fallback catalogs, applies the documented OpenAI API 1.05M context window and the ChatGPT/Codex backend 372K limit, and replaces superseded model references in configuration examples and documentation.  
  *Status:* Open, awaiting review/merge.

No other features or fixes advanced today.

## 4. Community Hot Topics
No issues or PRs have received comments or reactions in the last 24 hours beyond the single open PR #1146 (0 comments, 0 👍). The PR itself represents a straightforward model-support addition; the underlying need is to keep Moltis compatible with the latest GPT variant, ensuring users can access the newer models without manual configuration. Low engagement suggests either the community is small or the change is uncontroversial.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project currently has no open issues, indicating a stable baseline.

## 6. Feature Requests & Roadmap Signals
The only feature signal is **PR #1146** (GPT-5.6 support), which is a direct response to OpenAI model updates. This suggests that the next minor version will likely include GPT-5.6 compatibility. No unsolicited feature requests were filed, so no further roadmap predictions can be made.

## 7. User Feedback Summary
No user feedback (comments, reactions, or issue discussions) was recorded in the last 24 hours. The absence of issues may imply general satisfaction or low usage; however, the lack of any inbound feedback makes it impossible to draw conclusions about pain points or use cases.

## 8. Backlog Watch
**Long-unanswered important Issues/PRs:** None.  
The only open PR (#1146) was created two days ago and is still pending maintainer review, but this does not yet constitute a backlog item. No other items require maintainer attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-07-11

## 1. Today's Overview
CoPaw has seen exceptionally high activity in the past 24 hours, driven by the **stable release of v2.0.0** (the first GA version based on AgentScope 2.0). 38 issues were updated (22 open, 16 closed) and 25 PRs were touched (16 open, 9 merged/closed). Three new releases landed: v2.0.0, v2.0.0-beta.7, and v2.0.0-beta.6, marking a major architectural milestone. The community is actively testing the new version, reporting a wave of real-world bugs (especially around memory, MCP access control, context compaction, and sandbox stability). Maintainer response appears rapid, with several fix PRs already opened alongside the release.

## 2. Releases
Three releases were published on 2026-07-10:

- **[v2.0.0 (Stable)](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0)** – **Major breaking change**: full migration from AgentScope 1.x to AgentScope 2.0, introducing **Runtime 2.0** (refactored kernel). This release includes changes from PRs [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078), [#4846](https://github.com/agentscope-ai/QwenPaw/pull/4846), [#5018](https://github.com/agentscope-ai/QwenPaw/pull/5018), and more. Users upgrading from v1.x should expect backward-incompatible changes in message formats, tool result structures, and internal APIs. A dedicated upgrade guide has been requested ([#5948](https://github.com/agentscope-ai/CoPaw/issues/5948)).

- **[v2.0.0-beta.7](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.7)** – Updated homepage copy/visuals for 2.0 ([#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940)) and fixed `session_id` propagation in ReMe summarize tasks ([#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)).

- **[v2.0.0-beta.6](https://github.com/agentscope-ai/CoPaw/releases/tag/v2.0.0-beta.6)** – Added unit tests for channels module, bumped version, and fixed envelope passthrough of tool result error states.

**Migration Notes:** Users on v1.x must carefully review changes to message schemas, tool call structures, and permission policies. Memory archives created in v1.x may not be directly compatible; the new ReMe v0.4 memory system may require re-indexing.

## 3. Project Progress
Nine PRs were **merged or closed** in the last 24 hours:

- **[#5942](https://github.com/agentscope-ai/CoPaw/pull/5942)**: Bumped version to v2.0.0 (release trigger).
- **[#5938](https://github.com/agentscope-ai/CoPaw/pull/5938)**: Fixed missing `session_id` propagation in `add_summarize_task` (memory attribution bug).
- **[#5940](https://github.com/agentscope-ai/CoPaw/pull/5940)**: Updated homepage copy/visuals for QwenPaw 2.0 (marketing/website).
- **[#5932](https://github.com/agentscope-ai/CoPaw/pull/5932)**: Updated documentation for v2.0.0.
- **[#5937](https://github.com/agentscope-ai/CoPaw/pull/5937)**: Refined news format in docs.
- **[#5936](https://github.com/agentscope-ai/CoPaw/pull/5936)**: Reverted per-message current-time injection (original change was #5923) due to ugly display, keeping time in system context.
- **[#5923](https://github.com/agentscope-ai/CoPaw/pull/5923)** (implied by revert): Per-message time feature was removed.
- Plus several closed PRs for release chores and minor fixes.

Key feature advances: **Reranker support for memory search** ([#5692](https://github.com/agentscope-ai/CoPaw/pull/5692)) and **vision fallback for text-only models** ([#5726](https://github.com/agentscope-ai/CoPaw/pull/5726)) are still under review but show clear momentum.

## 4. Community Hot Topics
The most active discussions center on the **v2.0.0 migration and blocker bugs**:

- **[#4727](https://github.com/agentscope-ai/CoPaw/issues/4727)** (12 comments, closed) – Tracking of backend migration from AgentScope 1.x to 2.0. This was the foundational change for v2.0.0.
- **[#5273](https://github.com/agentscope-ai/CoPaw/issues/5273)** (11 comments, closed) – Central v2.0.0 pre-release bug tracker. Now resolved with GA.
- **[#3549](https://github.com/agentscope-ai/CoPaw/issues/3549)** (7 comments, closed) – `ValidationError` for `FunctionCallOutput.call_id` on ARM Linux. Closed as part of v2.0.0 cleanup.
- **[#3437](https://github.com/agentscope-ai/CoPaw/issues/3437)** (6 comments, closed) – Request for Kimi Code API support; remains unanswered in terms of integration.
- **[#5951](https://github.com/agentscope-ai/CoPaw/issues/5951)** (5 comments, open) – **Critical**: Desktop shell sandbox causes pwsh infinite recursion and 20GB memory consumption; users demand rollback to v1.1.12.post3.
- **[#5947](https://github.com/agentscope-ai/CoPaw/issues/5947)** (4 comments, open) – MCP tool allow/deny policies not applied after configuration.
- **[#5455](https://github.com/agentscope-ai/CoPaw/issues/5455)** (4 comments, closed) – Query about time injection strategy; resolved via revert (#5936).

**Underlying needs**: Users are torn between wanting the new architecture and suffering from regressions. The most acute pain is the desktop sandbox, which makes the tool unusable on Windows for some users.

## 5. Bugs & Stability
Multiple critical and high-severity bugs were reported today. Ranked by impact:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#5951](https://github.com/agentscope-ai/CoPaw/issues/5951) | Desktop shell sandbox: `icacls` timeout triggers infinite pwsh recursion, 20GB memory usage, no way to disable. | None yet |
| **Critical** | [#5947](https://github.com/agentscope-ai/CoPaw/issues/5947) | MCP access policy (allow/deny) not applied – agent can call rejected sub-tools. | [#5949](https://github.com/agentscope-ai/CoPaw/pull/5949) (open) |
| **High** | [#5950](https://github.com/agentscope-ai/CoPaw/issues/5950) | Chinese memory files cause embedding 400 error – truncation uses character count instead of token count. | None yet |
| **High** | [#5856](https://github.com/agentscope-ai/CoPaw/issues/5856) | `tool_call` structure lost during context compaction, leading to 400 errors / message count mismatch. | None yet |
| **High** | [#5952](https://github.com/agentscope-ai/CoPaw/issues/5952) | Auto-memory fails on Windows desktop with `No module named 'agentscope.tool._builtin._scripts'`. | None yet |
| **Medium** | [#5946](https://github.com/agentscope-ai/CoPaw/issues/5946) | Agent falsely calls `recall_history` for content still in context. | [#5953](https://github.com/agentscope-ai/CoPaw/pull/5953) (open) |
| **Medium** | [#5960](https://github.com/agentscope-ai/CoPaw/issues/5960) | Context compression splits `tool_call`/`tool_result` pairs across compress/reserve boundaries → API 400. | None yet |
| **Medium** | [#5961](https://github.com/agentscope-ai/CoPaw/issues/5961) | Loop execution with qwen3.7-plus: agent repeatedly writes/deletes content, never completes. | None yet |
| **Medium** | [#5956](https://github.com/agentscope-ai/CoPaw/issues/5956) | DingTalk sessions with legacy file tool results fail to load in v2.0.0 (Pydantic `ValidationError`). | None yet |

Several critical bugs have fix PRs in review, indicating active triage. However, #5951 (sandbox explosion) has no fix yet and may require immediate attention.

## 6. Feature Requests & Roadmap Signals
The following user-requested features received traction today:

- **[#5903](https://github.com/agentscope-ai/CoPaw/issues/5903) (2 comments)**: Session grouping + import/export. A design proposal was opened ([#5943](https://github.com/agentscope-ai/CoPaw/issues/5943)) indicating strong likelihood for next minor release (v2.1).
- **[#5954](https://github.com/agentscope-ai/CoPaw/issues/5954) (1 comment)**: Suggestion for tool whitelist mode ("execute once" or "always allow") to replace the new permission system that requires excessive approvals.
- **[#5948](https://github.com/agentscope-ai/CoPaw/issues/5948) (1 comment)**: Request for a comprehensive upgrade guide from v1.x to v2.0.0.
- **[#5958](https://github.com/agentscope-ai/CoPaw/issues/5958) (1 comment)**: Question about using AgentScope's permission system in CoPaw – signals interest in better permission integration.
- **[#3623](https://github.com/agentscope-ai/CoPaw/issues/3623) (closed)**: Multi-agent conversation handoff with feedback. Closed but still a desired capability.

**Likely candidates for v2.1**: Session grouping/import-export (#5903), sandbox improvements (especially Windows), MCP access policy fixes, and a proper upgrade guide (#5948). The permission system redesign (#5954) may also be prioritized based on user backlash.

## 7. User Feedback Summary
**Satisfaction drivers:**
- The stable v2.0.0 release is generally welcomed – users express excitement in [#5945](https://github.com/agentscope-ai/CoPaw/issues/5945) ("终于发布了!☀").
- The website refresh and new TUI are positive visual/capability improvements.

**Pain points (dissatisfaction):**
- **Windows sandbox disaster** (#5951): Users forced to rollback to v1.1.12.post3. “沙箱无法关闭”“pwsh 窗口递归爆炸” – indicates severe regression.
- **New permission mode** is disliked: “感觉不好用，用起来很麻烦” (#5954). The "smart mode" requires approval for every read, making workflow tedious.
- **MCP allow/deny not working** (#5947): undermines the core security model.
- **DingTalk legacy session loading failure** (#5956): breaks continuity for enterprise users upgrading.
- **Chinese embedding errors** (#5950): language-dependent issue affecting a significant user base.
- **General stability**: context compaction issues, auto-memory missing module, loop execution not terminating – users report “反反复复的写入、删除、写入、删除，很长时间也不能完成一个简单任务” (#5961).

**Overall**: The community is active and engaged, but the v2.0.0 transition has introduced several show-stopper bugs that erode trust for production users. Quick releases of patches (v2.0.1) are expected.

## 8. Backlog Watch
The following open issues and PRs may need maintainer attention due to age or complexity:

- **[#3437](https://github.com/agentscope-ai/CoPaw/issues/3437) (closed, Apr 15)**: Kimi Code API support – closed without resolution. If still desired, should be reopened with updated spec.
- **[#3432](https://github.com/agentscope-ai/CoPaw/issues/3432) (closed, Apr 15)**: Feishu (Lark) integration issues – closed but user reports unresolved permissions problems.
- **[#3623](https://github.com/agentscope-ai/CoPaw/issues/3623) (closed, Apr 20)**: Multi-agent handoff feature – likely will resurface as a roadmap item.
- **[#5856](https://github.com/agentscope-ai/CoPaw/issues/5856) (Jul 8)**: Context compaction loss of `tool_call` structure – no fix PR yet; marked as high-severity.
- **[#5951](https://github.com/agentscope-ai/CoPaw/issues/5951) (Jul 10)**: Desktop sandbox explosion – **most urgent open issue**, no assigned fix yet.
- **[#5949](https://github.com/agentscope-ai/CoPaw/pull/5949) (Jul 10)**: MCP policy fix – under review, needs merge.

The project health is strong in terms of activity but fragile in terms of stability. Maintainers have shown responsiveness (#5938 fixed same day as report, #5949 opened same day as #5947). The next priority should be a v2.0.1 patch release addressing the sandbox, MCP, and memory embedding bugs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-11

---

## 1. Today's Overview

The ZeroClaw project remains highly active with **19 issues updated** (15 open, 4 closed) and **50 pull requests updated** (44 open, 6 merged/closed) in the last 24 hours. No new releases were cut today. The high PR velocity signals a strong development push, particularly around channel integrations (Slack, Telegram, WeChat), runtime stability, and a large Standard Operating Procedure (SOP) authoring feature that was merged. At the same time, several new bugs surfaced – notably a silent WeChat delivery failure and test flakiness – indicating that quality assurance and edge-case handling are receiving due attention. The community is engaged, with issue reporters providing detailed reproduction steps and maintainers responding promptly with fix PRs.

---

## 2. Releases

*None today.* The last release was v0.8.2 (not shown in this digest). No migration notes or breaking changes to report.

---

## 3. Project Progress

**Merged/closed PRs today** (6 of 50 updated PRs were merged/closed):

- **[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)** – **feat(sop): web visual authoring (experimental)** – A large feature introducing Standard Operating Procedure (SOP) visual authoring in the web UI, with channel fan-in, selectable agent, and a unified `git_forge` tool. This is a major capability expansion for deterministic, auditable workflows.
- **[#8799](https://github.com/zeroclaw-labs/zeroclaw/pull/8799)** – **docs(channels): add git forge setup guides** – Adds onboarding documentation for GitHub Apps and Gitea/Forgejo/Codeberg channel integration.
- **[#8941](https://github.com/zeroclaw-labs/zeroclaw/pull/8941)** – **fix(log): remove unused `write_lock` field from WriterState / WorkerState** – Code cleanup that removes dead-code annotations flagged in issue [#8453](https://github.com/zeroclaw-labs/zeroclaw/issues/8453).
- Other closed PRs (not in top 20) likely include minor fixes and refactors.

**Closed issues (4):**
- [#8453](https://github.com/zeroclaw-labs/zeroclaw/issues/8453) – Dead code cleanup (write_lock field) – resolved by PR #8941.
- [#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397) – Feature: Expose `uses_memory` flag in CLI and `cron_add`/`cron_update` tools – now implemented.
- [#8956](https://github.com/zeroclaw-labs/zeroclaw/issues/8956) – Refactor: localize pre-existing `skills install` error paths through Fluent – consistency improvement.
- [#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677) – Feature: Add `uses_memory` check box to web gateway UI – delivered alongside the SOP feature.

**Key advances:** The SOP authoring feature, Slack thread hydration (PR #8969 still open but in review), Telegram command cap fix (PR #8963), and WeChat error propagation (PR #8968) are all moving toward master.

---

## 4. Community Hot Topics

Most discussed issues and PRs (by comment count, reactions negligible):

1. **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** – `[Bug]: Agent request appends each subsequent image in each request when sending two or more images on Telegram.` (6 comments). Users report that multi-image Telegram messages cause duplicate agent responses. The bug is accepted and tagged `no-stale`, but has been open since April – it remains a pain point.

2. **[#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)** – `[Feature]: Slack: hydrate thread context from conversations.replies on first mention` (4 comments). The community wants prior thread history backfilled automatically when the bot is first mentioned. A fix PR (#8969) is now open.

3. **[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)** – `[Bug]: skill-review fork panics (out-of-range slice at skills/review.rs:159) → daemon SIGSEGV after tool-heavy turn` (3 comments). A critical crash that brings down the agent process. Marked `risk:high`, `priority:p1`, and in-progress – likely a top priority for maintainers.

4. **[#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)** – `RFC: Consolidate /ws/chat and /acp onto a single wire protocol` (2 comments). A design discussion about unifying two WebSocket channels. No strong community consensus yet, but the RFC is noted.

**Underlying needs:** The community is pushing for better multi-modal handling (Telegram images), richer thread context (Slack), and elimination of fatal crashes. Users also want simpler protocol surface for external clients.

---

## 5. Bugs & Stability

**New bugs reported today (2026-07-11):**

| Issue | Description | Severity | Fix PR Exists? |
|-------|-------------|----------|----------------|
| [#8967](https://github.com/zeroclaw-labs/zeroclaw/issues/8967) | **WeChat sendmessage ignores in-body ret/errcode** – failed deliveries silently reported as success | **High** (silent message loss) | Yes – [#8968](https://github.com/zeroclaw-labs/zeroclaw/pull/8968) |
| [#8962](https://github.com/zeroclaw-labs/zeroclaw/issues/8962) | **zeroclaw-runtime tests flake under parallel execution** – intermittent failures in model_switch / turn_streamed cluster | **Medium** (CI instability) | Not yet |
| [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | **Telegram setMyCommands rejected with BOT_COMMANDS_TOO_MUCH** – command menu never registers when tools > 100 | **Medium** (degraded UX) | Yes – [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) |
| [#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945) | **ZeroCode input box blocks macOS text replacements** | **Medium** (degraded macOS usability) | Not yet |
| [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944) | **ZeroCode transcript mouse copy blocks word-level text selection** | **Medium** (UI annoyance) | Not yet |

**Existing critical bugs still active:**
- [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) – skill-review panics (SIGSEGV) – `priority:p1, in-progress`.
- [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) – Telegram image duplicate requests – open since April.
- [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) – Telegram documentation incorrect – `in-progress`.

**Other recent fixes in progress:**
- [#8913](https://github.com/zeroclaw-labs/zeroclaw/pull/8913) / [#8959](https://github.com/zeroclaw-labs/zeroclaw/pull/8959) – Annotate max-iteration stop with visible reason (prevents silent turn stopping).
- [#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) – Sanitize outbound tool-call arguments to prevent 400 errors on OpenRouter-routed providers.
- [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) – Remove unconditional strip_think_tags for compatible providers (MiniMax reasoning models).
- [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) / [#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827) – SSRF protections for `image_gen` download URLs (layers 2 and 3).
- [#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) – Fix `LocalWhisperConfig::default` reusing serde defaults (zero values).

**Overall stability assessment:** The project has a few high-severity bugs in the runtime (crash, silent failures), but fixes are being actively developed. CI flakiness and ZeroCode UI bugs are lower priority but have maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

**New feature proposals today:**
- [#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) – **ACP agent selection via `?agent=` query param** – Enables multi-agent endpoints for third-party clients (e.g., Thunderbird Thunderbolt). Likely low-hanging fruit for next release.
- [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) – **Declarative skill auto-activation with provider switch and image-turn tool blocking** – Allows skills to trigger on channel messages by keywords or image sentinel, switch providers, and block tool calls on image turns. A significant power-user feature.
- [#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952) – **Streamed pre-tool narration duplicated when turn text has leading/trailing whitespace** – While a bug report, it also implies a desire for smoother streaming.

**Ongoing feature trackers for v0.8.3:**
- [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) – v0.8.3 observability, CI, docs, dependencies, and release support.
- [#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) – v0.8.3 config-driven runtime policy, routing, and tool access.

**Predictions for next version (v0.8.3):**
- Slack thread hydration (PR #8969) is likely to land.
- Telegram command cap fix (PR #8963) and WeChat error propagation (PR #8968) will be included.
- Skill auto-activation (PR #8965) is ambitious and may be experimental in v0.8.3.
- The ACP agent selection (`?agent=`) issue is small and could be added quickly.
- The SOP visual authoring (already merged) will be part of the release.

---

## 7. User Feedback Summary

**Pain points voiced by users:**
- *(Telegram)* Multi-image messages cause duplicate responses – reported by *aq-uua* in [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514). No reaction, but consistent frustration.
- *(WeChat)* Messages silently fail – *tonsiasy* reported in [#8967](https://github.com/zeroclaw-labs/zeroclaw/issues/8967) that deliveries are reported as success even when the API returns an error code.
- *(Telegram)* Command limit exceeded – *nikita-rulenko* in [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) warns that heavy tool setups break the bot command menu entirely.
- *(ZeroCode)* macOS text replacement and text selection issues – *Audacity88* reports degraded UX in [#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945) and [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944).
- *(Documentation)* Telegram example is wrong – *cr3a7ure* in [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) criticizes inaccuracies, though the tone is harsh.

**Positive signals:**
- Users *DengHaoke*, *JordanTheJet*, *metalmon*, *NiuBlibing* are actively suggesting features and submitting detailed bug reports.
- The community is testing the SOP authoring feature (PR #8590 was tagged “Calling Beta Testers”).
- No complaints about performance or core agent intelligence; most concerns are about channel integration edge cases.

**Overall user sentiment:** Frustrated by channel-specific bugs but appreciative of rapid fix cycles. Power users are eager for advanced features like skill auto-activation and RFC consolidation.

---

## 8. Backlog Watch

Issues or PRs that have been unanswered for an extended period or need maintainer attention:

- **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** – Telegram image bug (created Apr 8, last update Jul 10). Still open with no assigned fix PR. Despite being `no-stale`, it affects a core channel. Needs prioritization.
- **[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)** – ComfyUI as shared media provider (created May 10, last update Jul 10, 2 comments). A feature request that has seen no PR traction. Users may be waiting for a champion.
- **[#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)** – RFC on consolidating WebSocket protocols (created Jul 7, 2 comments). No maintainer decision or follow-up comment. Risk of stalling if not addressed.
- **[#8962](https://github.com/zeroclaw-labs/zeroclaw/issues/8962)** – Test flakiness (created today, zero comments). No PR or assignment; should be investigated soon to avoid CI noise.

**No significant PRs are stuck** – all open PRs have been updated recently (within last 24h) and maintainers are actively reviewing.

---

*Generated from GitHub data at zeroclaw-labs/zeroclaw on 2026-07-11.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/D3a-th/agents-radar).*