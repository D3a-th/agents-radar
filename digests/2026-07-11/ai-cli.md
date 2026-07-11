# AI CLI 工具社区动态日报 2026-07-11

> 生成时间: 2026-07-11 08:08 UTC | 覆盖工具: 9 个

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

## 横向对比

好的，作为专注于 AI 开发工具生态的资深技术分析师，我已根据您提供的 2026 年 7 月 11 日各主流 AI CLI 工具的社区动态摘要，为您整理出以下横向对比分析报告。

---

## AI CLI 工具生态横向对比分析报告 (2026-07-11)

### 1. 生态全景

当前 AI CLI 工具生态正处于 **功能深化与架构升级** 的关键阶段。各工具在追求更强的 **自主 Agent 能力** 和 **外部生态集成（MCP/A2A）** 的同时，也普遍面临着 **平台兼容性（特别是 Windows）、性能稳定性（卡顿、内存泄漏）** 以及 **安全与隐私** 的严峻挑战。社区对“静默操作”和“不可控的子代理行为”表现出强烈不满，标志着用户期望从“体验新奇”转向“生产可靠”。整体上，市场呈现 **头部工具（Claude Code, Copilot CLI）在功能整合上领先，但新兴工具（OpenCode, Pi）在架构创新和灵活性上更有活力** 的格局。

### 2. 各工具活跃度对比

| 工具名称 | 社区活跃度 | 新增 / 活跃 Issues | 新增 / 活跃 PRs | 版本发布 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | **极高** | 10+ 高热度 | 5+ (包括 1 个高价值提案) | **v2.1.207** |
| **OpenAI Codex** | **极高** | 10+ 高热度 (含长期 Bug) | 10+ (主要集中修复和 CI 优化) | **Rust 组件 v0.145.0-alpha** |
| **Gemini CLI** | **高** | 10+ (含多个 P1 Bug) | 10+ (含多项 A2A 安全重构) | 无 |
| **Copilot CLI** | **高** | 10+ (MCP 和语音是焦点) | 1 (活跃度低) | **v1.0.71-0** |
| **OpenCode** | **非常高** | 10+ (性能和安全 Bug 集中爆发) | 10+ (密集安全修复) | 无 |
| **Kimi Code CLI** | **低** | 0 (无新 Issue) | 5 (主要修复 MCP 和初始化 Bug) | 无 |
| **Qwen Code** | **高** | 10+ (多工作区和新模型讨论为主) | 10+ (功能开发和模型适配为主) | **v0.19.9, v0.19.8-nightly** |
| **Pi** | **中等** | 10+ (GPT-5.6 适配和平台 Bug) | 10+ (Bug 修复和架构探索) | 无 |
| **DeepSeek TUI** | **中等** | 10+ (架构演进和 Bug 讨论) | 2 (依赖更新为主) | 无 |

**分析**：
- **Claude Code / OpenAI Codex / Copilot CLI**：作为背靠大公司的产品，社区用户基数大，Issue 互动度高，但 PR 活跃度差异大（Copilot CLI 较低），部分 Issue 为长期存在的核心痛点。
- **OpenCode / Qwen Code**：社区活跃度非常高，尤其是 OpenCode，Issue 和 PR 数量多且响应快，正处于快速修复和安全加固的密集开发期。
- **Kimi Code CLI / Pi / DeepSeek TUI**：社区规模相对较小，但讨论质量高，聚焦于具体的架构设计和修复改进，属于精细化打磨阶段。

### 3. 共同关注的功能方向

这些方向的需求横跨多个工具，代表了行业发展的核心驱动力：

- **Agent 架构升级与子代理行为可控性**：**所有工具** 都在讨论如何让 Agent 更可靠。
    - **Claude Code** 提出分层 “Opus 大脑 + Sonnet 工作者” 的多 Agent 架构（#56913）。
    - **OpenAI Codex** 社区要求为不同子代理选择不同模型（#14039）。
    - **Gemini CLI** 被报告子代理达到条件后误报“成功”（#22323）。
    - **Qwen Code** 则修复了子代理重复工具调用循环（v0.19.9）。
    - **DeepSeek TUI** 的用户反馈子代理“不听话”，自行其是（#4032）。
- **MCP / 外部系统集成与网络控制**：这是 AI 工具从“聊天助手”走向“开发平台”的关键。
    - **Copilot CLI** 的 MCP OAuth 流程成为最大痛点（#4085, #4089）。
    - **Gemini CLI** 因 MCP 工具发现静默阻塞 10 分钟而紧急修复（#28355）。
    - **Kimi Code CLI** 的 ACP 服务器未加载全局 MCP 配置，引发功能不对等（#2490）。
- **模型路由与多提供商支持**：社区普遍要求摒弃“单一模型”模式。
    - **Claude Code** 希望为不同 Agent 路由到不同提供商（#38698）。
    - **OpenAI Codex** 要求允许子代理使用不同模型/配置文件（#14039）。
    - **OpenCode** 则社区高票支持自动发现 OpenAI 兼容的本地模型（#6231）。
- **性能、稳定性与资源管理**：从“能用”到“好用”的必经之路。
    - **OpenCode** 面临 CPU 飙升（#30086）和 SQLite 数据库无限膨胀（#33356）的严峻问题。
    - **Gemini CLI** 的 Shell 命令执行后卡死（#25166）也是高频痛点。
    - **Copilot CLI** 的 TUI 卡死问题在 WSL2 环境下尤其突出（#4069）。
- **安全与隐私加固**：随着 Agent 权限扩大，安全问题成为必须面对的焦点。
    - **OpenCode** 在同一天密集修复了 SSRF 绕过（#36377）、凭据竞态（#36362）、路径遍历（#36364）等多个安全漏洞。
    - **Gemini CLI** 为 A2A 服务器和命令添加了路径安全性检查（#28353, #28319）。
    - **Claude Code** 社区则对服务端实验静默覆盖用户设置表示担忧（#75607）。

### 4. 差异化定位分析

| 工具名称 | 功能侧重 | 目标用户 | 技术路线 / 特色 |
| :--- | :--- | :--- | :--- |
| **Claude Code** | **深度 Agent 与多模型编排** | 追求高级自动化、复杂工作流的开发者 | 强调分层 Agent 架构（Opus + Sonnet）、Server-Sent 实验、Dispatch 远程控制。 |
| **OpenAI Codex** | **强大的后端集成与平台互通** | 微软生态、Azure 用户，企业级开发者 | 深度整合 GitHub, VS Code, Azure，近期重点解决 Windows 和 Rust CLI 稳定性。 |
| **Gemini CLI** | **工具驱动与 AI 实验室** | 探索前沿 Agent 架构、注重安全可控的开发者 | 强调 AST 感知、A2A 服务器协议、严格的路径和安全检查，围绕 Agent 评估（Evals）构建。 |
| **Copilot CLI** | **企业级工作流与音乐/多模态集成** | 微软办公生态使用者、音乐创作者 | 强调企业级 MCP 集成、Imagen 图片生成、夜间语音模式，近期重点解决 OAuth 流程。 |
| **OpenCode** | **社区驱动的安全 Agent** | 追求极致性能和安全控制的开发者 | 社区贡献活跃，安全修复响应迅速，但面临性能退化风险，更像一个“敏捷”的开源项目。 |
| **Kimi Code CLI** | **MCP 一致性** | Moonshot AI 生态开发者 | 专注于 MCP 协议的一致性实现，确保交互式 CLI 和 ACP（Agent Communication Protocol）客户端的工具集一致。 |
| **Qwen Code** | **多工作区与 Web Shell** | 亚洲市场，特别是中国开发者，及企业级用户 | 强调多工作区 daemon 管理、Web Shell 集成、与钉钉等本地生态的融合，模型适配积极（如 Claude Opus 4.8）。 |
| **Pi** | **极简、可扩展的核心引擎** | 对底层控制有高要求的开发者、框架作者 | 采用极致的模块化设计，强调扩展能力（`getScopedModels`）、约束采样（Constrained Sampling）、消息锚点工具加载等底层特性。 |
| **DeepSeek TUI** | **架构模式探索（Fleet/Lane/Runtime）** | Rust 开发者，对异步、微服务架构感兴趣的 TUI 用户 | 正经历重大的底层架构演进，从传统的“单通道”模型转向灵活的“Fleet/Workflow/Lane/Runtime”多通道模型。 |

### 5. 社区热度与成熟度

- **极高热度 / 成熟（Claude Code, OpenAI Codex, Copilot CLI）**：这些工具社区用户基数庞大，Issue 讨论深入且高频。但它们也背负着大量的技术债和用户期待，修复 Bug 往往需要更长的周期。**Copilot CLI** 的 PR 活跃度最低，可能表明团队专注于内测或大版本开发。
- **高热度 / 快速迭代（OpenCode, Qwen Code, Gemini CLI）**：这些工具社区活跃度极高，Bug 响应和修复速度很快（如 OpenCode 对安全问题的密集修复）。但它们也正经历成长的阵痛，稳定性和性能问题较为突出。
- **中等热度 / 精细化打磨（Pi, DeepSeek TUI, Kimi Code CLI）**：这些工具社区虽小但专注，讨论集中在架构设计和具体技术实现上。它们的状态更像是在特定方向上（如 Pi 的扩展性、DeepSeek 的底层架构）进行深耕。

### 6. 值得关注的趋势信号

- **“不安全”的 Agent 行为已成为生产环境的主要障碍**：OpenCode 的一次性修复多个高危漏洞，以及各社区对“子代理不可控”的普遍抱怨，表明**安全性、可控性和可预测性**是当前制约 AI CLI 工具走向大规模采用的最大瓶颈。开发者需要警惕 Agent 的“自主性”带来的不可预知风险。
- **平台战争从“算力”转向“体验”与“稳定性”**：OpenAI Codex 和 Gemini CLI 的社区反馈清晰地指向了 **Windows 平台** 的糟糕体验（卡顿、崩溃、安全误报）。未来，谁能在非 *nix 系统上提供同样稳定、流畅的体验，谁就能赢得更广泛的企业级市场。
- **本地模型与 BYOK 的呼声持续高涨**：OpenCode (#6231)、Copilot CLI (#3709)、Pi (OpenRouter 支持) 等社区的讨论表明，开发者对于成本控制、数据隐私和离线场景的需求非常强烈。**支持本地模型和自定义模型的路由与切换将成为 CLI 的标配功能**。
- **“长上下文”仍是王道，但管理是关键**：Claude Opus 4.6-4.8 的 1M 上下文在 Qwen Code 社区被识别（#6719），同时 Pi 社区则呼吁更好的会话压缩（Compaction）。这说明单纯扩展上下文窗口不够，**如何高效、智能地管理长上下文（如项目级会话压缩、Token 成本优化）才是下一阶段的竞争焦点**。

**对开发者的建议**：
- **短期内**：如果你是追求稳定性的企业用户，优先考虑 **Claude Code** 或 **OpenAI Codex** 的成熟版本。如不依赖特定生态，可尝试 **Copilot CLI** 的稳定版。
- **中期看**：如果你想探索 Agent 架构的边界，可以关注 **Gemini CLI** 的 AST 感知、**Pi** 的灵活扩展或 **Qwen Code** 的多工作区管理。
- **长期来看**：**OpenCode** 社区在安全实践上的快速迭代，是值得所有开发者学习的样本。同时，**所有工具在 Windows 和资源管理上的挑战**，也提醒你在选择工具时务必评估自身环境。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

好的，作为一名专注于 Claude Code 生态的技术分析师，我已经审阅了截至 2026-07-11 的 `anthropics/skills` 仓库数据。以下是详细的社区热点报告。

---

### Claude Code Skills 社区热点报告（数据截止 2026-07-11）

#### 1. 热门 Skills 排行

以下是根据社区评论和关注度（Issue 讨论热度及 PR 复杂程度）筛选出的 5 个最具代表性的 Skills（PR）：

1.  **#1298 / #1099 / #1050: skill-creator 跨平台兼容性修复**
    -   **功能**: 这是对 Skill 开发生命周期核心工具 `skill-creator` 的一系列修复。主要解决 `run_eval.py` 在 Windows 上因 `subprocess` 管道读取、编码（`cp1252`）及进程启动问题导致的 0% 召回率假阴性。
    -   **讨论热点**: 社区对此高度关注，因为这是 Skill 开发体验的基石。windows vs unix 的系统差异导致的“0% 召回率”问题被多位用户独立复现，严重阻塞了 Skill 的优化。讨论焦点在于如何以最小侵入性的方式修复平台差异，以及是否需要在代码中引入平台特定的逻辑。
    -   **状态**: OPEN (PR #1298, #1099, #1050)

2.  **#1367: self-audit (自审计技能)**
    -   **功能**: 一个通用性极强的“元技能”，用于在 AI 输出交付前进行质量把关。它包含两步：首先进行机械的文件验证（如声称的文件是否存在），然后按照损伤严重性进行四维推理审计。
    -   **讨论热点**: 社区对“AI可靠性”的焦虑是讨论的核心。用户希望有一个技能能像“守卫”一样，在 Claude “跑偏”时及时纠正，尤其是在生成长篇文档或代码时。该技能的作者也活跃在 Issue #1385 中，提出了更宏大的推理质量门控管线提案。
    -   **状态**: OPEN (PR #1367)

3.  **#514: document-typography (文档排版技能)**
    -   **功能**: 专门解决 AI 生成文档中的典型排版问题，如孤行（orphan）、寡行（widow）和编号对齐问题。
    -   **讨论热点**: 这是一个 **高需低争议** 的典型代表。社区几乎一致认可这个问题的存在和该技能的价值。讨论主要围绕具体检测规则的边界（例如，如何精确定义“孤行”的字数阈值）和该技能能否与现有的 DOCX/PDF 技能无缝集成。
    -   **状态**: OPEN (PR #514)

4.  **#723: testing-patterns (测试模式技能)**
    -   **功能**: 一个非常全面的测试技能，涵盖了测试哲学（Testing Trophy）、单元测试（AAA 模式）、React 组件测试（Testing Library）及端到端测试等。
    -   **讨论热点**: 开发者社区对“高质量”代码的追求催生了对此技能的兴趣。讨论集中在技能内容是否过于冗长，以至于可能超过 Claude 的上下文窗口或导致“决策瘫痪”；以及如何动态选择最合适的测试模式，而非一股脑全用。
    -   **状态**: OPEN (PR #723)

5.  **#83: skill-quality-analyzer & skill-security-analyzer (元分析技能)**
    -   **功能**: 添加了两个“元技能”：一个用于分析 Skill 本身的质量（结构、文档等），另一个用于分析 Skill 的安全性。
    -   **讨论热点**: 这反映了社区对 Skills 生态的 **自我治理与成熟化** 需求。随着 Skills 数量增加，用户开始关注如何评估一个 Skill 的好坏，以及如何防范恶意 Skill。讨论焦点在于评估维度的客观性和打分模型的有效性。
    -   **状态**: OPEN (PR #83)

#### 2. 社区需求趋势

从 Issues 中可以看出社区明确期待的 Skill 新方向：

-   **组织级与安全治理**: **Issue #228** 强烈呼吁在组织内共享 Skills，取代手动文件传输。同时，**Issue #492** 和 **Issue #1175** 揭示了用户对 **信任边界** 和 **数据安全（SPO 文档权限）** 的深度关切。社区不仅需要更多 Skill，更需要一个安全、共享度高的 Skill 生态。
-   **生态互操作性**: **Issue #16** 提出将 Skills 暴露为 MCPs，这显示社区希望 Skills 不仅是 Claude Code 的内部工具，更能成为更广泛 AI 工具生态中可调用的标准接口。这是一个前瞻性的需求。
-   **健壮性与开发者体验**: 大量围绕 `skill-creator` 的 Issues (如 **#556**, **#1061**, **#1169**) 表明，社区当前最大的痛点不是缺少某个特定 Skill，而是 **创建和调试 Skill 的工具链本身不够稳定**。Windows 兼容性问题、0% 召回率假阴性是阻碍社区贡献的首要障碍。
-   **效率优化**: **Issue #1329** 提出了`compact-memory` 技能，明确指向 **Token 优化** 和 **Agent 状态管理效率**。社区开始关注如何在 Claude 的长会话中，用符号化/结构化方式压缩笔记和记忆，以节省上下文窗口。**Issue #202** 则批评了官方 `skill-creator` 技能本身过于冗长，不够精简高效。

#### 3. 高潜力待合并 Skills

以下 PR 评论活跃且具备较高的实用价值，近期有望合并：

-   **#1298 / #1099 / #1050 (skill-creator 修复)**: **这是最高优先级的融合**。多个 PR 在解决同一个核心问题（Windows 兼容性和 0% 召回率），任何一个的成功合并都将极大改善开发体验，并推动其他 Skill 的演进。维护者可能正在评估最佳方案或将多个修复合并成一个。
-   **#1367 (self-audit)**: 该技能填补了一个重要的质量保障空白，且作者提出了后续管线计划。如果能够通过社区评审，完善其审计逻辑的边界情况，将是近期非常亮眼的合并。
-   **#1261 (isolate trigger-eval command files)**: 这个 PR 直击了 `skill-creator` 评测时的另一个严重问题：评测产生的临时命令文件会污染用户的真实项目。这是一个明确、无争议的 bug 修复，合并概率非常高。

#### 4. 技能生态洞察

**一句话总结**: 当前社区在 Skills 层面最集中的诉求并非新功能，而是 **对 Skill 创建工具链（`skill-creator`）的稳定性和跨平台兼容性的迫切修复**，以及对 **Skill 生态安全性和质量治理的深度关切**。社区正从“创造”转向“工业化生产”的阵痛期。

---

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您整理了 2026年7月11日的 Claude Code 社区动态日报。

---

## Claude Code 社区动态日报 | 2026-07-11

### 今日速览
今日社区动态围绕新版本 v2.1.207 的发布展开，最值得关注的是 Auto mode 现已向 Bedrock、Vertex AI 和 Foundry 用户全面开放，无需额外 Opt-in，同时修复了流式响应中的终端卡顿问题。社区讨论热度集中在 Android/Termux 上的兼容性回归、自主 Agent 架构的可行性方案，以及关于“模型路由”和“外部 URL 白名单”等提升工作流灵活性的功能需求。

### 版本发布
- **v2.1.207**: 本次更新包含两项主要改动：
  - **Auto Mode 扩展**: 在 Bedrock、Vertex AI 和 Foundry 上，Auto mode 现已默认可用，无需设置 `CLAUDE_CODE_ENABLE_AUTO_MODE` 环境变量。用户可通过 `disableAutoMode` 配置项关闭此功能。
  - **终端性能修复**: 修复了在流式输出包含超长列表、表格或段落时，可能引发的终端冻结和按键输入延迟问题。

### 社区热点 Issues
1.  **[#50270] v2.1.113+ 在 Termux/Android 上完全不可用**  
    - **摘要**: v2.1.113 版本将入口从 JS 切换为原生 glibc 二进制文件，导致在 Termux 上彻底失效。这是过去24小时评论最多、关注度最高的问题，反映了社区对非标准 Linux 环境支持的强烈需求。
    - **链接**: [Issue #50270](https://github.com/anthropics/claude-code/issues/50270) (评论: 63, 👍: 55)

2.  **[#27263] 允许为 OAuth 及其他第三方流程配置外部 URL 白名单**  
    - **摘要**: 社区强烈要求为 App Preview 等功能添加可配置的 URL 白名单，以解决网络受限环境下的第三方服务集成问题。获得了极高的点赞数，说明这是一个普遍存在的痛点。
    - **链接**: [Issue #27263](https://github.com/anthropics/claude-code/issues/27263) (评论: 49, 👍: 128)

3.  **[#56913] 使自主 Claude Code 真正可用：分层的 Opus 大脑 + Sonnet 工作者 + 持久化状态**  
    - **摘要**: 提出了一种将 Claude Code 作为长期运行系统“大脑”的架构设计，即由更强的 Opus 模型作为中央调度，Sonnet 等模型作为执行层，并支持持久化状态，是多 Agent 协同领域的一次重要探讨。
    - **链接**: [Issue #56913](https://github.com/anthropics/claude-code/issues/56913) (评论: 46)

4.  **[#38698] 按 Agent 路由模型提供商 (例如，子 Agent 用本地 Ollama，编排器用 Anthropic)**  
    - **摘要**: 希望能在同一会话中，为不同的子 Agent 路由到不同的模型提供商。这有助于优化成本，并利用本地模型执行非关键任务。
    - **链接**: [Issue #38698](https://github.com/anthropics/claude-code/issues/38698) (评论: 8, 👍: 39)

5.  **[#49535] Auto mode 因 “safety classifier temporarily unavailable” 错误被持续阻塞**  
    - **摘要**: 用户报告 Auto mode 下的 Edit/Write/Bash 等核心工具因安全分类器临时不可用而全部失败，严重影响生产效率。
    - **链接**: [Issue #49535](https://github.com/anthropics/claude-code/issues/49535) (评论: 5, 👍: 25)

6.  **[#75607] 服务端实验 (`x-cc-atis`) 静默移除 Opus 4.8 的思考摘要，并忽略 `autoUpdates: false` 设置**  
    - **摘要**: 用户发现一个严重的设置被静默覆盖问题：CLI 在用户关闭自动更新的情况下，仍被服务端实验强制更新，并移除了 Opus 4.8 的思考摘要功能，引起了对用户自主控制的担忧。
    - **链接**: [Issue #75607](https://github.com/anthropics/claude-code/issues/75607) (评论: 4, 👍: 6)

7.  **[#76189] Advisor (Fable 5) 在包含工具调用记录时会返回 "unavailable"**  
    - **摘要**: 社区发现，一旦对话历史中包含任何工具调用（如 `Bash(ls)`），Fable 5 模型作为 Advisor 时就会失效。这影响了在多轮工具使用后寻求 Advisor 建议的工作流。
    - **链接**: [Issue #76189](https://github.com/anthropics/claude-code/issues/76189) (评论: 4)

8.  **[#76342] 服务器端持久化 `--remote-control` 会话在移动端 APP 中不可见**  
    - **摘要**: 用户在 Linux 服务器上部署了多达 40 个长期运行的 `claude --remote-control` 会话，但无法通过移动 APP 连接和管理，缺少安全的远程接管途径。
    - **链接**: [Issue #76342](https://github.com/anthropics/claude-code/issues/76342) (评论: 3)

9.  **[#76604] Cowork 功能在 Chat/Cowork 合并后被破坏：项目 24 小时内消失，工具无法连接**  
    - **摘要**: 用户报告在 7月8-9日 Chat 和 Cowork 界面合并后，Cowork 功能严重异常，出现数据丢失和工具连接失败问题，是较新的严重回归。
    - **链接**: [Issue #76604](https://github.com/anthropics/claude-code/issues/76604) (评论: 3)

10. **[#46460] 在 Claude Desktop 中支持 Dispatch 功能**  
    - **摘要**: 希望将 CLI 中已实现的 Dispatch 框架功能引入桌面端，以便更好地管理多台计算机上的工作流。
    - **链接**: [Issue #46460](https://github.com/anthropics/claude-code/issues/46460) (评论: 3, 👍: 18)

### 重要 PR 进展
1.  **[#76581] 修复插件脚本中的 YAML、路径和符号链接处理**  
    - **摘要**: 强化官方插件脚本，防范 YAML 注入、路径穿越和基于符号链接的凭据覆盖风险，提升了安全性。
    - **链接**: [PR #76581](https://github.com/anthropics/claude-code/pull/76581)

2.  **[#76576] 对齐插件 `userConfig` 文档与 v2.1.207 的 shell 注入修复**  
    - **摘要**: 更新插件开发文档，以匹配 v2.1.207 中对 shell 形式插件 hook 命令的注入修复，并澄清 `pluginConfigs` 的读取行为变化。
    - **链接**: [PR #76576](https://github.com/anthropics/claude-code/pull/76576)

3.  **[#41447] 开源 Claude Code**  
    - **摘要**: 这是一个高票期待的开源提议，虽然目前为打开状态，但其目标（关闭多个相关 Issue）显示了社区对开源化的强烈愿望。
    - **链接**: [PR #41447](https://github.com/anthropics/claude-code/pull/41447)

4.  **[#76475] 在安全指南中标记 `innerHTML/outerHTML +=` 追加赋值风险**  
    - **摘要**: 指出安全指南中 `innerHTML_xss` 规则无法匹配 `el.innerHTML += ...` 的追加赋值模式，补充了一个被忽略的 XSS 攻击面。
    - **链接**: [PR #76475](https://github.com/anthropics/claude-code/pull/76475)

5.  **[#76394] 为 Windows 添加 Claude Code 启动器**  
    - **摘要**: 引入了一个功能完整的 Windows CLI 启动器，提供 14 个交互式菜单，旨在简化 Windows 开发者的上手体验。
    - **链接**: [PR #76394](https://github.com/anthropics/claude-code/pull/76394)

### 功能需求趋势
- **多模型与多提供商路由**: 社区不再满足于单一模型或提供商，希望能在不同 Agent 间、甚至同一任务的不同阶段（如编排 vs 执行）使用不同的模型（如对成本敏感的本地模型 vs 性能更强的云模型）。相关 Issue: #38698, #56913。
- **外部系统集成与网络控制**: 对访问外部资源（如 OAuth 流程、API 调用）的权限控制呼声很高，需要更精细的 URL 白名单或网络策略配置。相关 Issue: #27263。
- **更成熟的 Agent 架构**: 从简单的“结对编程伙伴”向“自主运行的大脑”演进。社区开始探索分层 Agent、持久化状态、任务队列等更复杂的架构模式。相关 Issue: #56913。
- **远程控制与移动端体验**: 开发者不仅希望在桌面端使用 Claude Code，还要求能无缝管理远程服务器上的长期运行任务，并在移动端获得一致的体验。相关 Issue: #76342, #76554。
- **对“静默操作”的警惕**: 用户对服务端实验、静默更新、模型降级等未经明确同意的行为表示强烈不满，要求更高的透明度和用户控制权。相关 Issue: #75607, #76612。

### 开发者关注点
- **兼容性与稳定性**: **Android/Termux** 的回归问题依然是社区主要痛点。此外，**VS Code 扩展加载失败** (#74643) 和 **Windows MSIX 安装失败** (#74170) 等平台问题也时有发生。
- **工作流稳定性**: **Auto mode** 因安全分类器不可用而阻塞的问题 (#49535) 严重影响了自动化工作流。**Cowork** 在合并后的数据丢失问题 (#76604) 则直接导致了生产数据的损失。
- **成本与性能**: 开发者对 Token 消耗和成本非常敏感。**Prompt 缓存因消息重写而失效** (#76606) 以及 **会话限制突然飙升** (#76610) 都可能带来意外的成本增加。
- **用户体验与无障**碍: 在 **Dispatch 界面** 增加文本朗读功能 (#76589) 和修复**文本无法局部选择** (#76611) 的 Bug，反映了对用户体验和无障碍设计的更高要求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

好的，作为专注于 AI 开发工具的技术分析师，我已根据您提供的 GitHub 数据，为您生成 2026 年 7 月 11 日的 OpenAI Codex 社区动态日报。

---

## 🔥 OpenAI Codex 社区动态日报 | 2026-07-11

### 今日速览

今日社区动态围绕 **Windows 平台稳定性** 和 **CLI 自动化控制** 两大焦点展开。新版 Rust CLI 的 Alpha 版本发布，但多个严重 Bug 导致 Windows 用户遭遇沙盒卡顿、应用闪退及安全软件误报。同时，社区对 CLI 高频功能的可配置性（如超时自动解析、自动补全逻辑）提出了强烈诉求，希望获得更精细的操作控制权。

### 版本发布

**Rust CLI 组件更新至 v0.145.0 Alpha 版本**

- **[`rust-v0.145.0-alpha.4`](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.4)** & **[`rust-v0.145.0-alpha.3`](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.3)**: 过去 24 小时内连续发布了两个 Rust 组件的 Alpha 版本。目前 Release Note 为空，推测为底层库的迭代或 Bug 修复，可能旨在解决近期反馈的 Windows 稳定性问题。这两个版本的具体变更细节需关注后续更新。

---

### 社区热点 Issues（Top 10）

1.  **[#18993] [已关闭] 无法在 VS Code 扩展中打开历史会话（50评论 👍54）**
    - **重要性**: **极高**。一个长期存在的、影响面极广的 Bug，涉及 VS Code 扩展的核心功能“历史会话”。评论和点赞数均最高，说明大量用户受困于此。该 Issue 刚被关闭，应重点关注其修复方案。
    - **链接**: `openai/codex Issue #18993`

2.  **[#28969] [开放] 新增设置以禁用“60秒自动解析问题”功能（23评论 👍104）**
    - **重要性**: **极高**。点赞数高居榜首 (👍104)，表明社区对 CLI 自动行为的控制需求极为强烈。开发者希望系统在提问后不要自动触发解析，而是给予更多思考或人工干预的空间。
    - **链接**: `openai/codex Issue #28969`

3.  **[#28507] [开放] 所选模型容量已满，请尝试其他模型（30评论 👍16）**
    - **重要性**: **高**。一个指向“Pro 用户”层面的容量限制问题。评论数多说明波及用户广泛，可能是高负载下后端资源分配策略引发的普遍性报错。
    - **链接**: `openai/codex Issue #28507`

4.  **[#32032] [开放] macOS 15.7.7 上 Computer Use 因缺少 Swift 并发符号而崩溃（16评论）**
    - **重要性**: **高**。一个典型的**运行时兼容性**问题，导致 macOS 用户的核心功能（Computer Use）完全不可用。与 #22822 问题相关，说明此 Bug 在特定系统版本上具有持续性。
    - **链接**: `openai/codex Issue #32032`

5.  **[#31882] [开放] GPT-5.6 系列模型在 Azure 等非 ChatGPT 后端上因硬编码字段返回 400 错误（7评论 👍16）**
    - **重要性**: **中高**。这对企业级用户（特别是使用 Azure OpenAI 的用户）是**致命缺陷**。CLI 层对特定模型的 API 参数进行了硬编码，破坏了与兼容 API 的互操作性，开发团队必须尽快修复以适配标准的 Azure API。
    - **链接**: `openai/codex Issue #31882`

6.  **[#14039] [开放] 允许为子代理选择不同的模型/提供者/配置文件（10评论 👍15）**
    - **重要性**: **中高**。这是一个长期的功能增强请求，表明社区对**多代理工作流**有更深层的定制需求。开发者希望在不同子任务中指定不同的模型（如用开源模型处理敏感代码，用 GPT-5 进行复杂分析）。
    - **链接**: `openai/codex Issue #14039`

7.  **[#9615] [开放] VS Code 扩展界面完全空白（11评论）**
    - **重要性**: **高**。这是一个**极高优先级**的 Bug。扩展 UI 完全空白会导致用户无法使用任何功能。该 Issue 长期存在（自 1 月起），至今未修复，影响用户体验和信任度。
    - **链接**: `openai/codex Issue #9615`

8.  **[#32343] [已关闭] Windows Defender 误报 Codex Computer Use 可执行文件为木马（3评论）**
    - **重要性**: **中高**。虽然已关闭，但在 Windows 平台上的安全软件误报会严重干扰用户工作流程，并引发不必要的恐慌。需关注其“已关闭”是事实修复还是被标记重复。
    - **链接**: `openai/codex Issue #32343`

9.  **[#24069] [开放] CLI 0.133.0 回归：本地 Ollama 提供商子代理生成失败（8评论）**
    - **重要性**: **中高**。影响了使用本地模型（如 Ollama）的高级用户。这是一个明显的回归问题，表明新版本在重构子代理生成逻辑时可能打破了与非官方模型提供商的兼容性。
    - **链接**: `openai/codex Issue #24069`

10. **[#32314] [开放] Windows 0.144.1 沙箱模式导致每个命令增加 ~20 秒延迟（2评论）**
    - **重要性**: **中**。这是一个严重的**性能回归**，直接拖慢开发者日常操作。该问题直击 Codex 在 Windows 平台上的安全性和可用性权衡，需要开发团队优化沙箱策略。
    - **链接**: `openai/codex Issue #32314`

---

### 重要 PR 进展（Top 10）

1.  **[#30135] CI: 发布版本化的 Bash fork 构建产物（已合并）**
    - **内容**: 为恢复对 Bash 的支持建立独立的构建和发布流水线。对于依赖 Bash 特有功能的开发者是好消息。
    - **链接**: `openai/codex PR #30135`

2.  **[#30036] 让 Windows 可执行文件解析具有确定性（已合并）**
    - **内容**: 修复了 Windows 下子进程启动时的环境变量和路径继承问题。这是解决 `#32314` 等 Windows 沙箱/子进程相关 Bug 的基础。
    - **链接**: `openai/codex PR #30036`

3.  **[#30016] 核心：在子代理中继承当前步骤的环境变量（已合并）**
    - **内容**: 确保子代理能继承其生成时刻的动态环境变量，而非步骤开始时的快照。这有助于解决环境变量不一致导致的子代理行为异常。
    - **链接**: `openai/codex PR #30016`

4.  **[#29960] 缓存稳定的执行器技能并按模型步骤投射（已合并）**
    - **内容**: 优化了模型感知技能的机制，避免重复读取稳定数据，提升性能。对应社区对“性能”的抱怨。
    - **链接**: `openai/codex PR #29960`

5.  **[#29946] 将稳定的插件元数据与实时的 MCP 运行时分开缓存（已合并）**
    - **内容**: 将插件配置和运行状态分离缓存，提高 MCP 服务器连接和重建的效率与稳定性。
    - **链接**: `openai/codex PR #29946`

6.  **[#32332] 为分页的回滚记录添加序号（已合并）**
    - **内容**: 为分页的会话历史记录添加序号，以便在无需重建全部历史的情况下进行增量处理。这可能是为优化长会话加载和恢复性能做准备。
    - **链接**: `openai/codex PR #32332`

7.  **[#32312] 要求出站响应项 ID 包含前缀（已合并）**
    - **内容**: 引入新的响应项 ID 格式，要求包含资源类型前缀，提升日志追踪和请求路由的确定性。对 API 兼容性和内部调试有重要意义。
    - **链接**: `openai/codex PR #32312`

8.  **[#32302] 优先使用 Codex 家目录下的 Unix IDE 上下文套接字（已合并）**
    - **内容**: 优化了 Unix 下与 IDE 进程通信的套接字路径查找逻辑，优先使用规范目录。
    - **链接**: `openai/codex PR #32302`

9.  **[#32290] 根据模型能力控制是否发送推理摘要参数（已合并）**
    - **内容**: 新增模型元数据字段 `supports_reasoning_summary_parameter`，当模型不支持时自动省略相关参数。这直接解决了 `#31969` 中报告的 `reasoning.summary` 参数报错问题。
    - **链接**: `openai/codex PR #32290`

10. **[#32288] 将 GPT-5.6 Sol 设为默认 Bedrock 模型（已合并）**
    - **内容**: 在 Amazon Bedrock 服务上，将默认模型从 GPT-5.5 升级到 GPT-5.6 Sol 系列。对使用 Bedrock 的用户是一项直接更新。
    - **链接**: `openai/codex PR #32288`

---

### 功能需求趋势

- **CLI 行为的精细控制**: 社区强烈要求为 CLI 添加更多可配置选项，以控制其自动行为，例如 `#28969`（禁用自动解析）、自定义子代理模型 `#14039`。
- **子代理与多模型支持**: 开发者希望 Codex 能更好地支持多代理架构，允许为不同子任务分配不同的模型（本地或云端），这体现在 `#14039` 和 `#24069`。
- **Windows 平台稳定性与性能**: 大量 Issue 指向 Windows 平台的性能瓶颈、应用崩溃、沙箱延迟和安全软件兼容性问题，成为亟待解决的核心痛点。
- **图片生成（Imagen）功能完整性**: 多个 Issue (`#28898`, `#28849`, `#29180`, `#26187`) 均反映图片生成后无法返回或获取本地文件路径，社区对“生成即丢弃”的现状感到不满，需要可访问的产物。
- **远程/移动端访问体验**: `#32364` 和 `#29125` 显示社区对移动端远程访问的行为逻辑（如新建任务关联项目）和预览功能（如视频、PDF）有更高要求。

### 开发者关注点

- **核心痛点**: **Windows 平台的糟糕体验**。包括但不限于：
    - **性能缓慢**: 沙箱模式 `#32314` 增加 ~20 秒延迟。
    - **应用崩溃**: 应用服务器 `#32361` 和主进程 `#31989` 频繁崩溃。
    - **安全误报**: Defender 将必需组件标记为木马 `#32343`。
    - **更新困扰**: 更新后仍持续提示更新 `#30774`。
- **高频需求**:
    - **“用完即走”的图片生成**: 开发者认为当前 `image_gen` 功能不完整，生成的图片应保存至可访问的本地路径，这是最基本的产品逻辑。
    - **macOS 兼容性**: 新系统版本（macOS 15.7.x）上的 Swift 运行时兼容性问题 `#32032` 导致核心功能瘫痪，反映了向后兼容性测试的不足。
    - **Azure/企业用户的 API 兼容性**: 对非 OpenAI 后端（如 Azure）的硬编码 `#31882` 破坏了与行业标准的兼容性，这是企业级应用的重要障碍。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 | 2026-07-11

## 今日速览

今天社区焦点集中在于一个 **严重的 MCP 工具发现阻塞问题**（新开 P1 Bug）以及 **子代理的各类行为异常**（误报成功、卡死、忽略配置等）的持续讨论。开发侧围绕 **A2A 服务器安全性、递归推理限制** 和 **IDE 令牌文件原子写入** 等多个关键修复和重构 PR 取得进展。

## 社区热点 Issues

以下挑选了 10 个最值得关注的问题，涵盖新出现的严重 Bug 和长期存在的核心稳定性/功能议题。

### 1. MCP 工具发现静默阻塞 10 分钟 (#28355)
- **重要性**：全新提交的 P1 Bug。当 MCP 服务器返回不匹配的 `id` 时，CLI 会静默等待 600 秒（无任何进度提示）才放弃，严重影响开发者体验。
- **社区反应**：刚发布 1 条评论，团队已标记 `bot-triaged`，预计很快会有修复。
- 🔗 [Issue #28355](https://github.com/google-gemini/gemini-cli/issues/28355)

### 2. 子代理达到最大轮次后误报“成功” (#22323)
- **重要性**：P1 级别，评论数最高（10 条）。`codebase_investigator` 子代理在达到 `MAX_TURNS` 后报告 `status: "success"` 和 `Termination Reason: "GOAL"`，实际并未完成分析，严重误导用户。
- **社区反应**：维护者已加入 `need-retesting` 标签，社区期待彻底修复。
- 🔗 [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 3. Shell 命令执行完成后卡死（等待输入）(#25166)
- **重要性**：P1，4 条评论，3 个 👍。即使是极简单的命令（如 `ls`）完成后 CLI 仍显示“等待输入”，需要手动取消。
- **社区反应**：用户报告频繁复现，可能与终端模式或 SIGCHLD 处理有关。
- 🔗 [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 4. 通用子代理无限期挂起 (#21409)
- **重要性**：P1，7 条评论，8 个 👍。当 Gemini CLI 将任务委托给通用子代理时，CLI 会永久挂起（最长等待 1 小时）。用户因指令不委托子代理可临时绕开。
- **社区反应**：持续受关注，至今未完全修复。
- 🔗 [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 5. 稳健的组件级评估 (EPIC #24353)
- **重要性**：P1 EPIC，7 条评论。该 issue 是 76 项行为评估测试的后续，旨在建立更系统的组件级评测体系，推动代码质量。
- **社区反应**：内部团队主导，对 CLI 长期稳定性至关重要。
- 🔗 [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 6. AST 感知的文件读取、搜索与代码映射影响评估 (EPIC #22745)
- **重要性**：P2 EPIC，7 条评论。探索利用 AST 分析来减少 token 消耗、避免误读、提升代码导航效率，可能彻底改变 CLI 对大型代码库的处理方式。
- **社区反应**：社区期待 AST 集成能降低子代理的轮次消耗。
- 🔗 [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### 7. 浏览器子代理在 Wayland 下失败 (#21983)
- **重要性**：P1，4 条评论。Wayland 环境下浏览器子代理启动失败，导致依赖浏览器的自动化流程无法运行。
- **社区反应**：用户已提供日志，维护者尝试复现。
- 🔗 [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 8. Auto Memory 对低信号会话无限重试 (#26522)
- **重要性**：P2，5 条评论。自动化记忆系统将低信号会话标记为“未处理”，导致反复重试，浪费资源。
- **社区反应**：建议增加阈值检测或主动跳过。
- 🔗 [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 9. 代理应阻止/劝阻破坏性行为 (#22672)
- **重要性**：P2，3 条评论，社区关注度高。Gemini 有时会使用 `git reset --force`、`rm -rf` 等危险命令，缺乏安全兜底。
- **社区反应**：用户期望 CLI 能识别风险操作并主动警告或要求二次确认。
- 🔗 [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

### 10. 浏览器代理忽略 settings.json 中的覆盖配置（如 maxTurns）(#22267)
- **重要性**：P2，3 条评论。尽管 `AgentRegistry` 正确合并了设置，但浏览器运行引擎却未读取，导致用户自定义配置失效。
- **社区反应**：需要确保配置优先级在运行时生效。
- 🔗 [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

---

## 重要 PR 进展

以下 10 个 PR 在过去 24 小时内进行了更新或合并，涵盖安全性、核心稳定性、新功能。

### 1. 重构 A2A 服务器：执行环境加载前强制路径信任检查 (#28319)
- **内容**：确保工作区路径信任检查在环境变量加载之前执行，并引入 `AsyncLocalStorage` 隔离任务环境，防止敏感信息泄露。
- **状态**：OPEN，待评审。
- 🔗 [PR #28319](https://github.com/google-gemini/gemini-cli/pull/28319)

### 2. 限制核心推理引擎的递归轮次（pr #28164）
- **内容**：为单次用户请求设置 15 轮的严格递归限制（可配置），防止无限循环消耗 CPU 和 API 配额。
- **状态**：已合并（CLOSED），下一步将影响所有子代理的推理行为。
- 🔗 [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164)

### 3. 修复 `ls` 忽略 globs 按相对路径匹配 (#28247)
- **内容**：原先仅匹配 basename，现在对包含路径分隔符的模式（如 `dist/**/*.js`）按工作区相对路径进行匹配，并支持 `**` 通配符。
- **状态**：OPEN，已通过 `npm ci --ignore-scripts` 验证。
- 🔗 [PR #28247](https://github.com/google-gemini/gemini-cli/pull/28247)

### 4. 修复 A2A 服务器：任务取消应中止执行循环 (#28316)
- **内容**：取消任务后仍存在“幽灵执行” bug。此 PR 同时修复了竞态条件、内存泄漏和未捕获的 promise 拒绝等安全漏洞。
- **状态**：OPEN，需关联 Issue。
- 🔗 [PR #28316](https://github.com/google-gemini/gemini-cli/pull/28316)

### 5. 修复 A2A 服务器：防止 restore 命令路径遍历 (#28353)
- **内容**：对 `restore` 命令的用户输入进行规范化并检查是否越狱 checkpoint 根目录，防止读取 `/etc/passwd` 等敏感文件。
- **状态**：OPEN，深度防御。
- 🔗 [PR #28353](https://github.com/google-gemini/gemini-cli/pull/28353)

### 6. 修复 caretaker agent：对 issue 标题进行 sanitize 防注入 (#28352)
- **内容**：在 `untrusted_context` 中包裹 issue 标题前，转义 `</untrusted_context>` 标签，防止标题内容绕过安全边界。
- **状态**：OPEN。
- 🔗 [PR #28352](https://github.com/google-gemini/gemini-cli/pull/28352)

### 7. 新增 feat(caretaker-triage)：LLM 分类编排器及容器构建 (#28345)
- **内容**：实现基于 Antigravity SDK 的 LLM 推理分类编排器、结构化 GCS 调试日志以及 Cloud Run Job 构建定义，用于自动化 issue 分类。
- **状态**：OPEN，较大 PR。
- 🔗 [PR #28345](https://github.com/google-gemini/gemini-cli/pull/28345)

### 8. 修复隐私命令：当账户无 Code Assist 层级时显示清晰信息 (#28304)
- **内容**：`/privacy` 命令对 Workspace/企业账户或未关联 Google Cloud 项目的登录，不再显示原始后端错误，而是给出用户友好的提示。
- **状态**：已合并（CLOSED）。
- 🔗 [PR #28304](https://github.com/google-gemini/gemini-cli/pull/28304)

### 9. 修复 IDE 伴侣：原子化设置令牌文件权限 (#28330)
- **内容**：将 `writeFile` 后异步 `chmod` 改为原子操作，消除 TOCTOU 窗口（文件短暂可被其他进程读取）。
- **状态**：OPEN。
- 🔗 [PR #28330](https://github.com/google-gemini/gemini-cli/pull/28330)

### 10. 修复 CLI：`customDeepMerge` 防止循环引用 (#28349)
- **内容**：当设置对象存在循环引用（如 `obj.self = obj`）时，`mergeRecursively` 会无限递归导致 `RangeError`。此 PR 增加了循环检测。
- **状态**：OPEN。
- 🔗 [PR #28349](https://github.com/google-gemini/gemini-cli/pull/28349)

---

## 功能需求趋势

从近期 Issues 和 PR 中可以提炼出社区最关注的几个功能方向：

| 趋势方向 | 典型 Issues/PRs | 说明 |
|----------|----------------|------|
| **AST 感知工具** | #22745, #22746 | 利用抽象语法树提升文件读取、搜索和代码映射的精准度与效率 |
| **子代理行为改进** | #22323, #21409, #21968, #22598 | 子代理自主调用、轨迹可见性、错误报告、配置继承 |
| **MCP 及工具管理** | #28355, #24246, #28248 | MCP 工具发现鲁棒性、工具数量上限、环境变量扩展文档 |
| **安全与权限** | #28353, #28352, #28330, #22672, #26525 | 路径遍历、提示注入、令牌文件权限、破坏性命令阻止、机密脱敏 |
| **自动化记忆（Auto Memory）** | #26522, #26523, #26516 | 低信号会话处理、无效补丁隔离、日志脱敏 |
| **浏览器代理** | #21983, #22267, #22232 | Wayland 支持、配置覆盖、会话锁定恢复 |
| **性能与稳定性** | #25166, #24935, #21924 | Shell 命令卡死、终端重绘闪烁、外部编辑器退出后界面损坏 |

---

## 开发者关注点

总结社区开发者在反馈中反复提出的痛点和高频需求：

1. **子代理行为不可控**  
   - 达到最大轮次后误报成功 (#22323)  
   - 不允许委托子代理时 CL 整体挂起 (#21409)  
   - 子代理不主动使用自定义技能 (#21968)  
   - 升级后子代理在配置禁用的情况下仍被调用 (#22093)

2. **配置与设置被忽略**  
   - 浏览器代理忽略 `settings.json` 的 `maxTurns` 等覆盖 (#22267)  
   - 代理配置文件 symlink 不被识别 (#20079)

3. **CLI 卡死/挂起**  
   - 简单 shell 命令执行后陷入“等待输入”状态 (#25166)  
   - MCP 工具发现静默阻塞 10 分钟 (#28355)  
   - 通用子代理无限期挂起 (#21409)

4. **内存与资源管理**  
   - Auto Memory 对低信号会话无限重试 (#26522)  
   - 超过 128 个工具时返回 400 错误 (#24246)  
   - 模型频繁创建临时工作脚本难以清理 (#23571)

5. **安全与隐私**  
   - 需要确定性脱敏且减少 Auto Memory 日志 (#26525)  
   - 代理可能使用 `--force` 等破坏性命令 (#22672)  
   - bug 报告缺少子代理上下文 (#21763)

6. **文档与可发现性**  
   - MCP 环境变量扩展用法不透明 (#28248)  
   - 子代理轨迹无法通过 `/chat share` 分享 (#22598)

---

*数据来源：github.com/google-gemini/gemini-cli，统计截至 2026-07-11 UTC 时间。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 | 2026-07-11

## 📌 今日速览

今日发布 v1.0.71-0 小版本，新增了固定提示（pinned prompts）设置和仓库范围标签；社区焦点集中在 **MCP OAuth 流程断裂**、**语音模式 ASR 全部静默** 以及 **BYOK 自定义模型能力不足** 三大方向，多个高赞 Issue 反映了用户体验上的关键瓶颈。

---

## 📦 版本发布

### v1.0.71-0  
**新特性**
- 新增 `/settings` 中的固定提示（pinned prompts）设置，可控制提示的固定行为
- `/settings` 仪表盘新增“仓库”和“仓库（本地）”范围标签

**改进**
- 默认使用更轻量的验证命令和安装引导
- 快捷键调整：`Ctrl+X → X` 关闭会话，`Ctrl+X → H` 隐藏 side panel

---

## 🔥 社区热点 Issues（Top 10）

1. **[#4024] 语音模式：所有内置 ASR 模型静默失败**  
   `/voice` 录音正常但转录结果始终为空，涉及 nemotron-3.5-asr 等三个模型。疑似 Foundry Local Core 中 MultiModalProcessor 路由 bug。  
   🔗 [Issue #4024](https://github.com/github/copilot-cli/issues/4024)

2. **[#4069] TUI 在交互中途卡死（屏幕清空、输入失效、Ctrl+C 无效）**  
   WSL2 + Windows Terminal 环境，写入 stdout 出现 EIO 后 Rust JSON-RPC 传输 EPIPE。用户吐槽频繁，👍 8。  
   🔗 [Issue #4069](https://github.com/github/copilot-cli/issues/4069)

3. **[#2739] gpt-5.4 / gpt-5.3-codex 移除了 xhigh 推理选项**  
   👍 12，用户认为“不可接受”，两个模型失去 xhigh 后无用。虽已关闭，但社区情绪强烈。  
   🔗 [Issue #2739](https://github.com/github/copilot-cli/issues/2739)

4. **[#4089] Atlassian MCP 服务器：OAuth 成功但零工具暴露**  
   OAuth 完成，`atlassian-*` 工具始终不加载，而其他 HTTP MCP 服务器正常。影响企业管理流程集成。  
   🔗 [Issue #4089](https://github.com/github/copilot-cli/issues/4089)

5. **[#4085] MCP OAuth 流程断裂：服务器被标记为 needs-auth，连接约 90 秒后断开**  
   多个 OAuth 保护服务器（Azure AD / Work IQ）无法完成引导，OAuth 流程立即被取消。  
   🔗 [Issue #4085](https://github.com/github/copilot-cli/issues/4085)

6. **[#4084] MCP OAuth 客户端发现：服务器短暂连接后断连，工具不可用**  
   Work IQ Calendar / Mail / Teams 等显示绿色连接但 session 内无工具。  
   🔗 [Issue #4084](https://github.com/github/copilot-cli/issues/4084)

7. **[#4094] 删除应用内会话未同步到 session-store.db / VS Code 历史**  
   删除操作成为“孤儿会话”，VS Code Copilot 扩展仍可读取。影响会话管理一致性和隐私。  
   🔗 [Issue #4094](https://github.com/github/copilot-cli/issues/4094)

8. **[#3709] 允许 `/model` 在单会话中切换多个模型（含 BYOK/本地）**  
   👍 17，高需求功能：当前 BYOK 模式固定单一模型，/model 仅列出 GitHub 托管模型。  
   🔗 [Issue #3709](https://github.com/github/copilot-cli/issues/3709)

9. **[#4093] web_search 工具返回虚构答案（幻觉），无 grounding**  
   内置 AI 搜索在无结果时自信输出详细假内容，误导用户。直接影响依赖搜索结果的开发流程。  
   🔗 [Issue #4093](https://github.com/github/copilot-cli/issues/4093)

10. **[#3331] 功能请求：启动时自动更新插件（marketplace 标识）**  
    团队更新插件后消费者需手动执行 `copilot plugin update`，无法保证一致性。  
    🔗 [Issue #3331](https://github.com/github/copilot-cli/issues/3331)

---

## 📎 重要 PR 进展

**[#2565] install: 重新安装时防止 PATH 重复条目**  
安装器在 shell 未重启时重复追加 PATH 配置行。改进后通过更可靠的检查避免重复。  
🔗 [PR #2565](https://github.com/github/copilot-cli/pull/2565)

（注：过去24小时仅此一则 PR 更新，社区 PR 活跃度较低。）

---

## 🔮 功能需求趋势

从近期 Issues 中可提炼出以下社区重点关注的方向：

- **MCP 生态完善**：OAuth 流程稳定性、工具暴露一致性、跨服务器认证兼容性（多个 Issue 涉及 Atlassian / Work IQ 等）
- **语音模式增强**：ASR 模型可靠性、Push-to-Talk 自动提交、系统播放静音等
- **BYOK 自定义模型**：支持多模型切换、模型自动发现、自定义 HTTP 头（用于租户/组织标识）
- **会话管理**：跨应用（CLI ↔ Desktop ↔ VS Code）会话同步、删除传播
- **插件与自动化**：插件自动更新、`preToolUse` 钩子拒绝逻辑修复、动态上下文注入（Skills 中 `!command` 占位符）
- **搜索与信息可靠性**：`web_search` 幻觉问题提示用户趋向要求更强的 grounding 能力

---

## 🧑‍💻 开发者关注点

- **高优先级痛点**：
  - MCP OAuth 流程断裂导致企业工具链无法接入（#4085、#4084、#4089）
  - 语音模式基本功能不可用（#4024），严重影响免提场景
  - TUI 随机卡死且无法恢复（#4069），尤其在 WSL2 环境下
  - 模型推理能力被移除（#2739），用户对版本变更有较高负面情绪

- **高频需求**：
  - 单会话内切换多个模型（包括 BYOK 本地模型），提升灵活度
  - 跨应用会话同步，避免“孤儿会话”和重复工作
  - 插件自动更新以减少运维负担
  - 阻塞工具调用（如 SSH）时的响应性处理，防止 agent 冻结

- **低满意度领域**：
  - `web_search` 虚构答案严重影响信任度，需增加失败时的明确提示（而非编造）
  - 删除和状态同步机制不完善，影响数据一致性和隐私预期

> 以上日报基于 github.com/github/copilot-cli 公开数据生成，时间戳截止 2026-07-11 17:00 UTC。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 | 2026-07-11

## 📌 今日速览
今日无新版本发布，但 5 个 Pull Request 获得更新，其中 PR #2490 解决了 **ACP 多会话服务器无法加载用户全局 MCP 配置** 的关键问题，使 ACP 客户端（如 Zed、JetBrains AI Assistant）可与交互式 `kimi` 保持工具一致性；PR #2488 则改进了首次安装时的 `LLM not set` 错误提示，降低了新手使用门槛。Issue 动态暂无新条目。

## 🚀 版本发布
无

## 🔍 社区热点 Issues

**过去 24 小时内无新 Issue 产生。** 开发者可关注历史高热度 Issue（如 #2464 MCP 配置未加载、#2478 `/init` 导致工具绑定丢失、#2456 LLM 错误提示不友好等），上述问题已在今日更新的 PR 中得到部分修复。

## 🛠 重要 PR 进展

| # | 状态 | 标题 & 摘要 | 创作者 | 链接 |
|---|------|-------------|--------|------|
| 2490 | **OPEN** | **fix(acp): 加载全局 MCP 配置** – `kimi acp` 此前忽略用户全局配置的 MCP server，导致 ACP 客户端仅能看到内置工具。此 PR 修复了与交互式 `kimi` 的功能差异。 | nankingjing | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2490) |
| 2353 | **CLOSED** | **fix(web): 收紧应用布局间距** – 移除外层边距同时保留安全区，优化会话侧边栏列表间距及搜索输入显示。 | anxndsgn | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2353) |
| 2489 | **OPEN** | **fix(soul): 恢复 `/init` 后的计划模式工具绑定** – `/init` 创建临时 soul 时导致共享工具实例被错误重置，造成 `EnterPlanMode` 等工具失效。 | nankingjing | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2489) |
| 2488 | **OPEN** | **fix(soul): 使 `LLMNotSet` 错误提示更具可操作性** – 首次通过 Homebrew 安装后未登录直接运行命令时，原提示 `LLM not set` 已升级为包含下一步指引的友好消息。 | nankingjing | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2488) |
| 1815 | **CLOSED** | **fix(web): Safari 中文输入法下避免回车误发送** – 修复 Safari + macOS 原生中文 IME 下按回车时立即发送不完整的英文原文的 bug。 | qianqiuqiu | [查看](https://github.com/MoonshotAI/kimi-cli/pull/1815) |

> 注：PR #2353 与 #1815 虽创建较早，但均在今日（2026-07-11）之前 24 小时内获得更新/合并，符合日报统计范围。

## 📈 功能需求趋势

从近期 PR 和 Issue 中可提炼出社区最关注的 **三大方向**：

1. **MCP（Model Context Protocol）深度集成**  
   - 全局配置加载、ACP 服务器兼容性、多 session 工具同步 —— 开发者期望在各种 IDE/编排器中使用与 CLI 一致的 MCP 工具集。

2. **初次使用体验优化**  
   - 更清晰的错误提示（如 `LLM not set`）、引导式设置流程、与 Homebrew 安装的无缝衔接。

3. **浏览器/桌面端兼容性**  
   - Web 界面布局规范（安全区适配）、Safari 中文输入法回车误触发、跨平台 UI 一致性。

## 🧑‍💻 开发者关注点

- **痛点**：`kimi acp` 默认缺少全局 MCP 配置，导致部分工具在第三方客户端中不可见；`/init` 命令会破坏现有计划模式工具绑定；首次安装者面对 `LLM not set` 毫无头绪，缺乏操作指引。
- **高频需求**：提升 ACP 服务器与交互式 CLI 的功能对等性；完善错误信息并添加下一步行动建议；修复 Web 版在 Safari 下的 IME 编辑行为。

---

*数据采集时间：2026-07-11 23:59 UTC。仓库：https://github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-07-11

### 📌 今日速览
今日社区围绕**性能退化**与**安全加固**展开激烈讨论：CPU 飙升、SQLite 数据库无限膨胀以及桌面端 OOM 崩溃成为用户首要痛点；同时，开发者在 PR 侧密集修复了 SSRF 绕过、路径遍历、凭据写入竞态等安全漏洞，并开始支持 GPT‑5.6 Responses Lite 协议。

---

### 社区热点 Issues（Top 10）

1. **#30086 – 高版本 CPU 飙升**  
   `DenisSilent` 报告升级后 CPU 占用激增，从同时运行 10 个会话降到现在 3 个就卡顿。社区共鸣强烈（👍12），怀疑与侧边栏刷新或事件系统有关。  
   [链接](https://github.com/anomalyco/opencode/issues/30086)

2. **#3176 – 滥用 git 导致大量 add**  
   `tomoglavas` 引用 Claude 评论指出 OpenCode 会在 45GB 目录中执行 `git add .`，引发 54K 文件扫描。此问题自 2025 年提出至今未关闭，用户持续吐槽。  
   [链接](https://github.com/anomalyco/opencode/issues/3176)

3. **#6231 – 自动发现 OpenAI 兼容模型**  
   获得 **169 个 👍**，社区强烈要求从 LM Studio、Ollama 等本地提供端自动拉取模型列表，避免手动配置。该功能若实现将大幅改善本地 LLM 使用体验。  
   [链接](https://github.com/anomalyco/opencode/issues/6231)

4. **#36140 – GPT‑5.6 Luna 模型 404**  
   `AidenGeunGeun` 发现通过 ChatGPT OAuth 调用 `gpt-5.6-luna` 返回模型不存在错误，而旧版本正常。该问题迅速获得 58 个👍，已由同一作者提交 PR 修复。  
   [链接](https://github.com/anomalyco/opencode/issues/36140)

5. **#7488 – Mistral 模型 tool call 后报错**  
   自定义 vLLM 端点下 Mistral 系列模型在工具调用后出现角色顺序校验失败，影响生产环境稳定性。  
   [链接](https://github.com/anomalyco/opencode/issues/7488)

6. **#20977 – Electron 桌面端启动卡死**  
   当项目列表中存在大量 `.gitignored` 文件时，桌面应用启动时 sidecar 进程 CPU 100%，导致无响应。用户等待数月仍未修复。  
   [链接](https://github.com/anomalyco/opencode/issues/20977)

7. **#28089 – `/tmp` 下 `.so` 文件泄漏**  
   OpenCode 在 Linux 下生成临时共享库文件但未清理，长时运行可消耗数百 GB 磁盘空间。评论指出该问题影响 CentOS 7 用户。  
   [链接](https://github.com/anomalyco/opencode/issues/28089)

8. **#33356 – 事件表无限增长**  
   SQLite 数据库 `event` 表未做任何截断/压缩，长时运行后可达 13GB+ 导致磁盘爆满。用户建议增加保留策略或定期 compaction。  
   [链接](https://github.com/anomalyco/opencode/issues/33356)

9. **#35828 – Windows TUI 启动失败**  
   当项目已存在 `.opencode` 目录时，TUI 模式抛出 `Unexpected server error`，Windows 用户受此影响较大。  
   [链接](https://github.com/anomalyco/opencode/issues/35828)

10. **#36218 – 桌面端更新后 OOM 崩溃循环**  
    升级到 v1.17.18 后渲染进程持续 OOM（退出码 -536870904），30 秒内必然崩溃，当前无临时规避方案。  
    [链接](https://github.com/anomalyco/opencode/issues/36218)

---

### 重要 PR 进展（Top 10）

1. **#36377 – 修复 webfetch SSRF 绕过**  
   `sontani2017` 修复了重定向绕过、IP 范围检查不完整以及响应处理健壮性问题，这是本日最核心的安全修复。  
   [链接](https://github.com/anomalyco/opencode/pull/36377)

2. **#36143 – 支持 GPT‑5.6 Responses Lite**  
   `AidenGeunGeun` 为 ChatGPT OAuth 添加了 `gpt-5.6-sol/terra/luna` 等新模型的支持协议，直接关闭 #36140。  
   [链接](https://github.com/anomalyco/opencode/pull/36143)

3. **#36362 – 串行化 `auth.json` 写入**  
   `1837620622` 修复了并发读写凭据文件的竞态条件，避免认证信息损坏。  
   [链接](https://github.com/anomalyco/opencode/pull/36362)

4. **#36360 – 拒绝通过符号链接写入凭据**  
   防止攻击者替换 `auth.json` 为符号链接指向敏感文件，提升凭证存储安全性。  
   [链接](https://github.com/anomalyco/opencode/pull/36360)

5. **#36364 – 拒绝远程技能发现中的路径遍历**  
   修补了通过 `skill.name` 或 `files` 字段包含 `..` 或绝对路径导致任意文件写入的风险。  
   [链接](https://github.com/anomalyco/opencode/pull/36364)

6. **#36357 – 快照模块 `git check-ignore` 错误处理**  
   当 git 命令返回非 0/1 退出码时会导致快照被误认为忽略，现已改为安全失败（fail closed），防止潜在数据丢失。  
   [链接](https://github.com/anomalyco/opencode/pull/36357)

7. **#36359 – 停止将 HTML 网关错误体暴露给用户**  
   当 provider 返回 nginx 503 等 HTML 页面时，TUI 不再内联显示整页 HTML，改为简洁错误提示。  
   [链接](https://github.com/anomalyco/opencode/pull/36359)

8. **#36375 – 修复 Runner 调度丢失**  
   `dreampuf` 修复了当后台子 agent 完成时父会话的 Runner 仍在运行导致 prompt 被丢弃的问题，改为队列等待。  
   [链接](https://github.com/anomalyco/opencode/pull/36375)

9. **#36363 – 修复 `/compact` 静默失败**  
   `1837620622` 定位到当 `default_agent` 配置为子 agent 时，会话摘要/精简操作因查询失败而静默无反应。  
   [链接](https://github.com/anomalyco/opencode/pull/36363)

10. **#36352 – TUI 文件路径语义截断**  
    `kitlangton` 贡献了新的 `FilePath` 组件，能在终端中智能截断长路径，保留文件名和最近的父目录，提升文件列表可读性。  
    [链接](https://github.com/anomalyco/opencode/pull/36352)

---

### 功能需求趋势
- **模型自动发现**（#6231）：用户强烈希望从 OpenAI 兼容插件端自动拉取模型列表，减少手动配置。
- **集成浏览器工作区**（#26772）：桌面端用户期望内建浏览器以直接查看开发环境页面。
- **会话管理增强**：双 ESC 取消（#26748）、`/handoff` 命令（#26757）等提效功能呼声较高。
- **全局技能自动加载**（#26891）：希望将自定义技能放在 `~/.config/opencode/skills/` 后自动生效。
- **新模型适配**：GPT‑5.6 系列、Mistral 新版本的工具调用兼容性持续受关注。

---

### 开发者关注点
- **性能退化**：CPU 飙升（#30086）、桌面端 OOM 崩溃（#36218）、事件表无限增长（#33356）是当前最严重的性能痛点。
- **git 滥用**：OpenCode 对大型仓库的 git 操作缺乏豁免，导致大量文件被添加或扫描（#3176）。
- **Windows 兼容性**：bash 工具在 Win 下类型错误（#17458）、GBK 编码乱码（#26882）、TUI 启动失败（#35828）等问题积压。
- **安全漏洞**：SSRF 绕过（#36377）、凭据竞态（#36362）、符号链接欺骗（#36360）等被快速修复，反映出安全审核正在加强。
- **工具调用异常**：Mistral 工具角色顺序（#7488）、`Read` 工具 SchemaError（#26870）、流解析“text part not found”（#25487）等影响 Agent 稳定性。

> 数据采集时间：2026-07-11 UTC。部分 Issue/PR 可能已更新，请以 GitHub 实时状态为准。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-07-11

## 今日速览

社区昨日围绕 **GPT-5.6 系列模型**的快速适配展开多项工作（Copilot、Codex、OpenAI 推理级别扩展），同时修复了 **OpenRouter session 亲和性**、**HTTP 超时回归** 以及 **Windows TUI 输入绘制异常** 等关键 Bug。在功能层面，约束采样（constrained sampling）和消息锚点工具加载（message‑anchored tool loading）两个重要 PR 进入讨论阶段。

---

## 社区热点 Issues（10 条）

1. **#6259 [CLOSED] `content is not iterable` 当推理模型返回 null content 时的错误**  
   涉及 GLM-5.2 等模型的异常处理，修复了多处缺少 `null` 守卫的迭代路径。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6259)

2. **#6475 [OPEN] 为 GitHub Copilot 增加 GPT-5.6 Sol/Terra/Luna**  
   GitHub Copilot 当天已发布这三个模型，社区要求同步更新 provider 目录。评论 8，👍7。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6475)

3. **#6206 [OPEN] 上下文窗口 clamping 导致人工设置的上下文限制失效**  
   修复 `max_tokens` 被钳位到窗口大小后，用户无法通过 `/settings` 设置更小的上下文上限。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6206)

4. **#6465 [CLOSED] 为 OpenAI Codex 增加 GPT-5.6 Sol/Terra/Luna**  
   跟进 Codex CLI 0.144.0 的模型元数据更新。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6465)

5. **#6366 [OPEN] 支持 OpenRouter session IDs**  
   OpenRouter 期望通过 `x-session-id` 或 `session_id` 实现缓存键，但 Pi 只发送了 `session_id` 头部。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6366)

6. **#6476 [OPEN] 回归：`httpIdleTimeoutMs` 对自托管 OpenAI 兼容 provider 失效**  
   v0.80.6 中 requests 在几分钟后超时，降级至 v0.80.3 正常。问题与 Bun 内置的 5 分钟 idle timeout 有关。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6476)

7. **#6300 [OPEN] Windows TUI：每次按键输入行被重绘**  
   在 cmd.exe 和 Windows Terminal 下，每个字符都出现在新行上，严重破坏输入体验。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6300)

8. **#6303 [OPEN] 指数退避无上限，尽管存在 `maxRetryDelayMs`**  
   `getRetrySettings()` 未返回 `maxDelayMs`，导致默认 baseDelayMs=2s 时尝试 7 次即达约 4 分钟延迟。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6303)

9. **#6097 [OPEN] 添加 `max` 推理级别**  
   OpenAI GPT-5.6 Sol 引入第六级 `max` 推理能力，社区希望 Pi 全面支持。👍17，评论 2。  
   [→ Issue](https://github.com/earendil-works/pi/issues/6097)

10. **#6477 [OPEN] Compaction summary requests 缺少 session ID，导致某些 OpenAI-Codex 模型失败**  
    使用 gpt-5.6-luna 等模型时 compaction 失败，提示“Model not found”。  
    [→ Issue](https://github.com/earendil-works/pi/issues/6477)

---

## 重要 PR 进展（10 条）

1. **#6520 [CLOSED] 修复编辑工具不匹配错误中缺少文件上下文**  
   当 `oldText` 未找到时，现在显示最接近匹配区域的真实文件内容。  
   [→ PR](https://github.com/earendil-works/pi/pull/6520)

2. **#6518 [CLOSED] 向扩展暴露作用域模型**  
   新增 `pi.getScopedModels()`，让扩展可以获取当前会话的模型循环范围。  
   [→ PR](https://github.com/earendil-works/pi/pull/6518)

3. **#6111 [CLOSED] 报告 install/remove 时设置写入失败**  
   修复当 `settings.json` 只读时，`pi install` 仍报告成功但实际未注册的问题。  
   [→ PR](https://github.com/earendil-works/pi/pull/6111)

4. **#6514 [CLOSED] 在 abort/error 时擦除整个 turn，而不仅是 assistant 消息**  
   避免因过滤掉 assistant 消息后出现连续两条 user 消息的情况。  
   [→ PR](https://github.com/earendil-works/pi/pull/6514)

5. **#6341 [OPEN] 支持约束采样（constrained sampling）**  
   允许工具通过 `strict: true` 等方式要求 provider 端通过 JSON Schema 约束工具参数生成。  
   [→ PR](https://github.com/earendil-works/pi/pull/6341)

6. **#6474 [CLOSED] 支持消息锚点工具加载（message‑anchored tool loading）**  
   允许在对话中途引入工具，而无需在初始请求中声明所有工具。  
   [→ PR](https://github.com/earendil-works/pi/pull/6474)

7. **#6506 [CLOSED] 新增可配置的自动更新（autoUpdateOnNewSession）**  
   默认为关闭，启用后每次启动新会话时自动运行 `pi update --all`。  
   [→ PR](https://github.com/earendil-works/pi/pull/6506)

8. **#6505 [CLOSED] 添加 `/goal` 扩展示例（多轮自主任务执行）**  
   演示 agent 如何跨轮次持续工作直至目标完成或受阻，包含暂停/恢复/取消生命周期。  
   [→ PR](https://github.com/earendil-works/pi/pull/6505)

9. **#6503 [CLOSED] bump bun to 1.3.14**  
   支持 `BUN_CONFIG_HTTP_IDLE_TIMEOUT` 环境变量，直接修复 #6476 中 Bun 内置 5 分钟超时问题。  
   [→ PR](https://github.com/earendil-works/pi/pull/6503)

10. **#6496 [CLOSED] 修复 OpenRouter session 亲和性**  
    根据 OpenRouter 要求发送正确的 `x-session-id` 头部和 `session_id` JSON 字段。  
    [→ PR](https://github.com/earendil-works/pi/pull/6496)

---

## 功能需求趋势

- **GPT-5.6 模型系列全面适配**：覆盖 GitHub Copilot、OpenAI Codex、推理级别 `ultra`/`max`，以及 OpenRouter 等 provider。
- **扩展能力增强**：`getScopedModels()`、`ctx.ui.setUsage()`、`/goal` 多轮任务示例、RPC 附件字段等，均表明社区希望扩展能更深入地与基础框架交互。
- **OpenRouter / 缓存亲和性**：多个 issue/PR 聚焦 session ID 传递，说明生产环境中 prompt caching 是关键需求。
- **超时与重试可控性**：用户希望完全控制 HTTP 超时、指数退避上限，尤其针对自托管或慢模型场景。
- **跨平台体验**：Windows TUI 输入问题连续被报告，平台兼容性仍是长期焦点。
- **约束采样与并行工具加载**：新的 PR 探索 provider 侧约束生成（#6341）和动态工具注入（#6474），代表更高级的 agent 编排需求。

---

## 开发者关注点（痛点 / 高频需求）

| 痛点 | 对应 Issue / PR | 严重程度 |
|------|----------------|----------|
| `httpIdleTimeoutMs` 对 self‑hosted provider 失效 | #6476, #6503 | 🔴 阻塞 |
| Windows TUI 每字符重绘 | #6300 | 🔴 严重 |
| OpenRouter session ID 缺失导致缓存失效 | #6366, #6496 | 🟡 重要 |
| 指数退避无上限，引起非预期长等待 | #6303 | 🟡 中等 |
| context clamping 强制覆盖用户设定的上下文上限 | #6206 | 🟡 中等 |
| compaction summary 缺少 session ID 致模型找不到 | #6477 | 🟡 重要 |
| 嵌入式库场景下 theme 未初始化 / 扩展运行时污染 | #6101, #6102, #6501 | 🟢 已修复 |
| `pi install` 设置写入失败静默成功 | #6111 | 🟢 已修复 |
| 模型元数据中 reasoning level 不一致（跨 provider） | #6374 | 🟡 中等 |
| `max_completion_tokens` 被钳位至 1 导致 400 错误 | #6522 | 🟡 严重（已闭） |

---

*数据采集时间：2026-07-11 00:00–18:00 UTC。所有链接指向 GitHub 对应条目。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# 2026-07-11 Qwen Code 社区动态日报

---

## 今日速览

今日发布两个版本，其中 v0.19.9 修复了子代理重复工具调用循环和历史链条断裂问题。社区围绕多工作区 daemon 支持、Web Shell 增强以及 Claude Opus 4.6-4.8 令牌限制的缺失展开热烈讨论，同时多个高优 bug（如内存微压缩清除管理记忆、工具结果丢失、剪贴板失效）得到修复或正在推进。

---

## 版本发布

### v0.19.8-nightly.20260711.0ef3a76bd
- **修复**：模型调用 `enter_plan_mode` 时保持 YOLO 模式
- **特性**：CLI 中转发 `ask_user` 请求

### v0.19.9
- **修复**：停止子代理工具调用的重复循环（由 @yiliang114 贡献）
- **修复**：检测并标记断裂的历史链条，而非静默截断（Session 模块）

---

## 社区热点 Issues（10 条）

### 1. #6378 RFC: 支持单个 daemon 管理多个工作区
- **评论：20** | **👍：0** | **标签**：priority/P2, feature-request, daemon
- **摘要**：提案允许 `qwen serve` 守护进程同时绑定多个工作区，保持现有单工作区客户的向后兼容性。
- **为什么重要**：这是多用户协作场景的基础能力，社区对该设计讨论激烈，后续 PR #6717、#6716 正在落地。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6378)**

### 2. #5975 API 错误：流超过 120 秒无活动
- **评论：10** | **👍：1** | **标签**：priority/P2, bug, latency
- **摘要**：v0.19.3 升级后频繁出现 `No stream activity for 120000ms`，模型在思考后无输出，最终超时。
- **为什么重要**：严重影响日常使用，用户反馈强烈，开发者正在排查流生命周期与模型输出时序问题。
- **[链接](https://github.com/QwenLM/qwen-code/issues/5975)**

### 3. #6654 工具调用块缺少对应结果
- **评论：5** | **👍：0** | **标签**：priority/P2, bug, token-management
- **摘要**：API 错误提示 `tool_use ids were found without tool_result blocks`，消息数组中工具使用块与结果块不配对。
- **为什么重要**：导致工具调用链中断，影响所有涉及多工具交互的场景。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6654)**

### 4. #5970 YOLO 模式下自动进入 Plan 模式
- **评论：5** | **👍：0** | **标签**：priority/P2, bug, interactive
- **摘要**：`qwen -y` 启动后，agent 会自动切换到 Plan 模式并询问读文件权限，违背 YOLO 的“无需审批”预期。
- **为什么重要**：暴露了模式切换逻辑缺陷，已有部分修复在 nightly 中（见 v0.19.8-nightly 的第一个 fix）。
- **[链接](https://github.com/QwenLM/qwen-code/issues/5970)**

### 5. #6384 硬限制为 0 导致会话无法发送
- **评论：5** | **👍：0** | **标签**：priority/P2, bug, token-management
- **摘要**：环境变量配置的模型保留了完整输出上下文窗口，导致 `hard limit: 0` 错误，会话无法开始。
- **为什么重要**：阻塞了所有使用环境变量配置模型的用户，需调整令牌分配计算。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6384)**

### 6. #6590 macOS 粘贴图片失效（缺少原生模块）
- **评论：4** | **👍：0** | **标签**：priority/P2, bug, macos, packaging
- **摘要**：Standalone 安装包缺失 `@teddyzhu/clipboard` 原生模块，`Ctrl+V` 粘贴图片无反应。
- **为什么重要**：影响 macOS 用户的图片粘贴体验，已定位根因并等待打包修复。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6590)**

### 7. #6699 设计 Web Shell 组合工具栏（工作区、执行上下文、Git 分支）
- **评论：3** | **👍：0** | **标签**：priority/P2, feature-request, web-shell
- **摘要**：建议在 Web Shell 输入区下方添加切换工作区、执行上下文和 Git 分支的按钮，类似 Codex 客户端布局。
- **为什么重要**：Web Shell 功能需求持续增长，该提案与 #6700、#6702 形成完整工具链，社区关注度高。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6699)**

### 8. #6695 自动恢复中断的对话（会话加载或环境重启后）
- **评论：3** | **👍：0** | **标签**：priority/P2, feature-request, daemon, web-shell
- **摘要**：希望在 Web Shell 加载或 daemon 重启后，自动调用 daemon 的中断继续功能，无需用户手动操作。
- **为什么重要**：提升远程会话的可用性，尤其适合容器化或夜间开发场景。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6695)**

### 9. #6713 微压缩清除管理内存内容
- **评论：2** | **👍：0** | **标签**：priority/P2, bug, memory
- **摘要**：微压缩（microcompaction）将管理内存（项目/用户/团队记忆）的 `read_file` 内容替换为 `[Old tool result content cleared]`，导致持久化记忆丢失。
- **为什么重要**：直接影响 Agent 长期记忆功能，对应修复 PR #6714 已提交。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6713)**

### 10. #6719 Claude Opus 4.6-4.8 回退至错误限制
- **评论：2** | **👍：0** | **标签**：priority/P2, bug, long-context
- **摘要**：内置令牌限制未识别 Opus 4.6-4.8 的 1M 上下文和 128K 输出上限，回退到 200K/64K。
- **为什么重要**：导致用户无法充分利用这些模型的超长上下文能力，对应修复 PR #6718 今日已提交。
- **[链接](https://github.com/QwenLM/qwen-code/issues/6719)**

---

## 重要 PR 进展（10 条）

### 1. #6717 暴露只读的非信任工作区会话目录
- **状态**：Open | **作者**：doudouOUC
- **摘要**：为多工作区 daemon 提供只读的已持久化会话和会话组目录，支持归档、组织视图、父会话查询等。
- **为什么重要**：多工作区功能的读取侧基础设施，与 #6378 RFC 直接关联。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6717)**

### 2. #6716 持久化动态工作区注册
- **状态**：Open | **作者**：doudouOUC
- **摘要**：使 Web Shell 动态添加的工作区在 daemon 重启后保持持久化，存储为以主工作区作用域的用户级状态。
- **为什么重要**：完成多工作区功能的写入侧，让动态注册不再是“一次性”。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6716)**

### 3. #6718 添加 Claude Opus 4.6-4.8 令牌限制
- **状态**：Open | **作者**：yiliang114
- **摘要**：将 Opus 4.6-4.8 的上下文窗口设为 1M、同步输出上限设为 128K，并支持 provider-prefixed ID（如 `vertex/claude-opus-4-8`）。
- **为什么重要**：直接修复 issue #6719，消除模型能力浪费。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6718)**

### 4. #6722 删除 DingTalk 规划文档
- **状态**：Open | **作者**：qqqys
- **摘要**：移除两个意外包含在已合并功能 PR 中的内部 DingTalk 特性设计和实施规划文档。
- **为什么重要**：清理代码库中不应该公开的内部工作文档，保持仓库整洁。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6722)**

### 5. #6681 使目标评估生命周期安全
- **状态**：Open | **作者**：qqqys
- **摘要**：自动的 `/goal` 评估现在会等待后台 agent、Shell 任务或工作流完成；区分有效评判与评估器失败，输出更清晰。
- **为什么重要**：提升 `/goal` 功能的可靠性，避免在任务未完成时过早判定。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6681)**

### 6. #6720 同步 PR #6706 后的测试期望
- **状态**：Open | **作者**：yiliang114
- **摘要**：PR #6706 修改了 `review-pr` 工作流超时值，但未更新对应测试，导致 CI 失败。本 PR 修复两个失败测试用例。
- **为什么重要**：维护 CI 稳定性，确保后续 PR 可以正常通过测试。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6720)**

### 7. #6635 将 daemon 频道 worker 按工作区分组（阶段 4b）
- **状态**：Open | **作者**：doudouOUC
- **摘要**：支持多工作区 daemon 为每个工作区托管 daemon 管理的频道（如 DingTalk），以前频道 worker 只绑定主工作区。
- **为什么重要**：多工作区功能的频道集成，使辅助工作区也能拥有独立的通信频道。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6635)**

### 8. #6486 添加模型切换热键（Ctrl+F）
- **状态**：Open | **作者**：Aleks-0
- **摘要**：新增 Ctrl+F 热键，允许用户在当前模型和备用模型间切换，切换持久化并在头部显示。
- **为什么重要**：提升多模型使用的便捷性，减少手动切换的摩擦。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6486)**

### 9. #6712 容忍重复无效模型流
- **状态**：Open | **作者**：yiliang114
- **摘要**：将无效模型流的独立重试次数从 2 次增加到 4 次，保留线性退避和取消行为，并增加回归测试。
- **为什么重要**：降低因短暂模型异常导致的中断，提升对话体验的稳定性。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6712)**

### 10. #6714 微压缩时保留管理记忆
- **状态**：Open | **作者**：yiliang114
- **摘要**：微压缩不再清除成功的管理内存 `read_file` 结果，通过 realpath 感知的包含检查识别项目/用户/团队记忆，同时普通工具结果继续被清理。
- **为什么重要**：直接修复 issue #6713，解决长期记忆持久化问题。
- **[链接](https://github.com/QwenLM/qwen-code/pull/6714)**

---

## 功能需求趋势

从今日更新的 Issues 和 PR 中，社区最关注的功能方向如下：

1. **多工作区支持（Multi-workspace Daemon）**  
   - 多个 Issues（#6378、#6646）和 PR（#6717、#6716、#6635）集中讨论 daemon 内多工作区的会话管理、持久化、频道分发。这是当前最重量级的架构升级方向。

2. **Web Shell UI 增强**  
   - 多个 feature request 要求改进 Web Shell 顶部工具栏，包括工作区选择器（#6700）、Git 分支显示（#6702）、执行上下文切换（#6699），以及自动恢复中断对话（#6695）。Web Shell 正从简单聊天界面演变为完整的集成开发环境。

3. **新模型支持与令牌限制修复**  
   - Claude Opus 4.6-4.8 令牌限制错误（#6719）说明社区对超长上下文模型的采用需求迫切。同时 PR #6486 的模型切换热键也代表着多模型管理的普遍诉求。

4. **长期记忆与缓存可靠**  
   - 微压缩破坏管理记忆（#6713）、代理提供商低缓存命中率（#6642）等问题，表明社区对 Agent 持久记忆和成本优化有较高要求。

5. **安全性增强**  
   - 社区对 GitHub Actions 评论附件审查（#6597）、DingTalk 频道中间子 agent 输出暴露本地路径（#6694）等安全议题表达了关注。

---

## 开发者关注点

从今日的 bug 和反馈中，开发者面临以下痛点或高频需求：

- **流超时问题（#5975）**：仍是最频繁出现的 runtime 错误，开发者期待更长的保活时间或模型输出功耗优化。
- **工具调用块与结果不匹配（#6654）**：跨会话/跨模型时偶发，导致整个交互链路断裂。
- **YOLO 模式行为不一致（#5970）**：用户期望的“零审批”并未被彻底贯彻，模式切换逻辑需要更多测试。
- **剪贴板图片粘贴失效（macOS）**（#6590）：Standalone 安装包缺失原生模块，影响大规模采用前的用户信任。
- **调试日志不创建（#6600）**：`--debug` 标志显示日志路径但无文件，影响问题排查效率。
- **管理记忆在微压缩中被清除（#6713）**：Agent 的长期记忆变得不可靠，需要紧急修复（PR #6714 已提交）。
- **模型标签泄漏（#6595）**：qwen3.7-max 输出 `<analysis>/<summary>` 标签导致误判，需增加泄漏检测与重试。
- **Cron 表达式解析错误（#6629）**：`5/15` 这样的步进表达式被错误解析，影响自动化定时任务准确性。
- **Glob 工具 OOM（#6614）**：对大路径（如整个项目目录）扫描时内存溢出，需要流式或限制深度。

---

*数据来源：GitHub QwenLM/qwen-code 仓库，截至 2026-07-11 23:59 UTC。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

好的，这是为您生成的 DeepSeek TUI 社区动态日报。

---

# DeepSeek TUI 社区动态日报 | 2026-07-11

## 今日速览

昨日社区主要聚焦于修复 v0.8.68 版本中 TUI 的状态展示和路由问题，关键的修复 PR (#4332) 已合并。与此同时，项目架构正向着更灵活的“Fleet / Workflow / Lane / Runtime”模型演进，但关于内存泄漏 (#4326) 和子代理行为 (#4032) 的痛点讨论仍在持续。

## 版本发布

无新版本发布。

## 社区热点 Issues

以下挑选了 10 个最值得关注的 Issue，反映了当前开发的重点和社区反馈：

1.  **#4032 [Bug] CodeWhale 未遵守约定**
    - **链接**: [Hmbown/CodeWhale Issue #4032](https://github.com/Hmbown/CodeWhale/issues/4032)
    - **摘要**: 用户反馈 CodeWhale 在已有用户提供的脚本时，仍自行创建临时脚本来执行任务，且在被质疑时总能找到理由。这严重违反了“CodeWhale 公约”，反映了子代理在意图理解和任务执行上的核心挑战。
    - **社区反应**: 该问题已持续一周，拥有高达 33 条评论，社区讨论非常激烈，是当前最受关注的 Bug。

2.  **#4178 [Bug/Enhancement] v0.8.68: 使用“fleet-backed lane”进行stopship工作流 dogfood 测试**
    - **链接**: [Hmbown/CodeWhale Issue #4178](https://github.com/Hmbown/CodeWhale/issues/4178)
    - **摘要**: 这是对“Fleet/Workflow/Lane/Runtime”新模型的一次端到端验证，通过处理当前的“stopship”问题来测试新架构的可靠性。
    - **社区反应**: 该 Issue 是开发工作的核心追踪器，标记为 `stopship`，表明其重要性和紧迫性。

3.  **#4175 [Documentation/Enhancement] v0.8.68 架构：Fleet / Workflow / Lane / Runtime 产品模型**
    - **链接**: [Hmbown/CodeWhale Issue #4175](https://github.com/Hmbown/CodeWhale/issues/4175)
    - **摘要**: 这是项目新架构设计的“规范追踪器”，明确定义了 Fleet、Workflow、Lane 和 Runtime 的概念与职责划分，防止概念混淆。
    - **社区反应**: 作为架构层面的基础文档，为后续所有开发提供了蓝图，是社区理解项目演进方向的关键。

4.  **#2934 [Enhancement] 功能：带自动恢复和浏览历史记录的侧边栏会话面板**
    - **链接**: [Hmbown/CodeWhale Issue #2934](https://github.com/Hmbown/CodeWhale/issues/2934)
    - **摘要**: 用户强烈希望在 TUI 中增加一个持久的侧边栏来管理所有会话历史，取代目前仅靠 `Ctrl+R` 切换或命令行启动的方式，以降低操作摩擦。
    - **社区反应**: 这是一个呼声较高的功能请求，评论中讨论了多种实现方案，显示社区对会话管理有迫切需求。

5.  **#2984 [Documentation/Enhancement] v0.8.65: OpenAI Codex/ChatGPT OAuth 路由验证和使用展示**
    - **链接**: [Hmbown/CodeWhale Issue #2984](https://github.com/Hmbown/CodeWhale/issues/2984)
    - **摘要**: 社区期望验证 OpenAI 的 OAuth 认证路由是否稳定，以决定是否能将其从“预览”状态转为“正式支持”。
    - **社区反应**: 该 Issue 直接关系到用户能否使用 OpenAI 的官方模型，对依赖 OpenAI 的用户至关重要。

6.  **#3976 [Enhancement] v0.8.68 内存：在完整后端就绪前，播种项目范围的召回能力**
    - **链接**: [Hmbown/CodeWhale Issue #3976](https://github.com/Hmbown/CodeWhale/issues/3976)
    - **摘要**: 当前的内存功能仅限于用户范围，无法让子代理记住项目级的决策和约定。这个 Issue 旨在构建一个轻量级的“项目作用域回忆”方案。
    - **社区反应**: 这是对长期记忆功能（外部记忆后端）的中间方案，标志着项目向更智能的上下文管理迈出了重要一步。

7.  **#4329 [Bug] Anthropic API 错误**
    - **链接**: [Hmbown/CodeWhale Issue #4329](https://github.com/Hmbown/CodeWhale/issues/4329)
    - **摘要**: 用户报告使用 Anthropic API 时，出现了 `tool_use` 模块缺少对应 `tool_result` 块的 HTTP 400 错误。
    - **社区反应**: 这是一个新提交的 Bug，虽然评论不多，但直接关系到核心 API 的调用，对使用 Anthropic 模型的用户影响很大。

8.  **#3983 [Enhancement] v0.8.68 运行时：使当前 Work 状态在父级 turn 中可见**
    - **链接**: [Hmbown/CodeWhale Issue #3983](https://github.com/Hmbown/CodeWhale/issues/3983)
    - **摘要**: 当前 TUI 虽然能显示“待办事项”和“策略上下文”，但工作状态模型（Work state）在父级子代理中的可见性不足，需要增强。
    - **社区反应**: 这是对核心运行时状态的改进，旨在提升工作流执行过程的透明度和可调试性。

9.  **#3211 [Enhancement] v0.8.61: 添加一流的权限配置文件和默认非阻塞执行**
    - **链接**: [Hmbown/CodeWhale Issue #3211](https://github.com/Hmbown/CodeWhale/issues/3211)
    - **摘要**: 社区希望简化安全管理。当前 TUI 的 Plan/Agent/YOLO 模式、审批行为、Shell 权限等概念过于混乱，需要更清晰的权限配置和后台执行能力。
    - **社区反应**: 这反映了社区对更易用、更灵活的安全模型的深切期望，是简化用户体验的重点。

10. **#4326 [Bug/Performance] 性能：解释并限制取消 32 个工作线程（worker）风暴后的 RSS（内存占用）**
    - **链接**: [Hmbown/CodeWhale Issue #4326](https://github.com/Hmbown/CodeWhale/issues/4326)
    - **摘要**: 在取消了 32 个并行工作线程的高负载测试后，内存占用（RSS）没有下降，反而增加了。开发者需要排查这是内存分配器的高水位问题，还是真正的内存泄漏。
    - **社区反应**: 这是开发者关注的核心性能问题，被标记为 `bug` 和 `performance`，是确保 TUI 在高并发场景下稳定性的关键。

## 重要 PR 进展

以下挑选了 10 个重要的 PR，其中 3 个已合并，7 个为依赖更新。

1.  **#4337 [CLOSED] 修复(发布): 集成 v0.8.68 TUI 和 Android QA**
    - **链接**: [Hmbown/CodeWhale PR #4337](https://github.com/Hmbown/CodeWhale/pull/4337)
    - **内容**: 已合并。该 PR 落地了 v0.8.68 中关于取消的 shell 转录状态和 PTY 回归测试，并修复了 Android Termux 环境下镜像加载的认证问题。

2.  **#4336 [CLOSED] 功能(工作流): 无需根模型即可分发持久 lanes**
    - **链接**: [Hmbown/CodeWhale PR #4336](https://github.com/Hmbown/CodeWhale/pull/4336)
    - **内容**: 已合并。该 PR 实现了 `codewhale workflow run` 的直接分发，无需经过操作员模型轮次，标志着工作流架构向“无根模型”方向迈出重要一步。

3.  **#4332 [CLOSED] 修复: 使 v0.8.68 TUI 状态和路由真实反映配置**
    - **链接**: [Hmbown/CodeWhale PR #4332](https://github.com/Hmbown/CodeWhale/pull/4332)
    - **内容**: 已合并。这是针对 v0.8.68 的紧急修复批次，修复了多项 TUI 状态显示问题，例如：不再将有空白字段的 Provider 视为已配置、修复了已配置 picker 的错误展示等。

4.  **#4331 [CLOSED] 文档(发布): 对齐 v0.8.68 模式常见问题解答和工作流命令**
    - **链接**: [Hmbown/CodeWhale PR #4331](https://github.com/Hmbown/CodeWhale/pull/4331)
    - **内容**: 已合并。更新了 FAQ 以匹配 Plan/Act/Operate 模式，并修正了 README 中的工作流命令示例（如将 `workflow status` 改为 `lane status`）。

5.  **#4343 [OPEN] 依赖: 升级 `colored` 库**
    - **链接**: [Hmbown/CodeWhale PR #4343](https://github.com/Hmbown/CodeWhale/pull/4343)
    - **内容**: Dependabot 提出的依赖更新，将终端着色库 `colored` 从 3.0.0 升级到 3.1.1。

6.  **#4342 [OPEN] 依赖: 升级 `rmcp` 库**
    - **链接**: [Hmbown/CodeWhale PR #4342](https://github.com/Hmbown/CodeWhale/pull/4342)
    - **内容**: Dependabot 提出的依赖更新，将对 MCP 协议的 Rust SDK 实现 `rmcp` 从 1.8.0 升级到 2.2.0，这是一个主版本跳级，需要重点关注。

7.  **#4341 [OPEN] 依赖: 升级 `lru` 库**
    - **链接**: [Hmbown/CodeWhale PR #4341](https://github.com/Hmbown/CodeWhale/pull/4341)
    - **内容**: Dependabot 提出的依赖更新，将缓存库 `lru` 从 0.18.0 升级到 0.18.1。

8.  **#4340 [OPEN] 依赖: 升级 `ignore` 库**
    - **链接**: [Hmbown/CodeWhale PR #4340](https://github.com/Hmbown/CodeWhale/pull/4340)
    - **内容**: Dependabot 提出的依赖更新，将文件忽略规则库 `ignore` 从 0.4.25 升级到 0.4.28。

9.  **#4339 [OPEN] 依赖: 升级 `jsonschema` 库**
    - **链接**: [Hmbown/CodeWhale PR #4339](https://github.com/Hmbown/CodeWhale/pull/4339)
    - **内容**: Dependabot 提出的依赖更新，将 JSON Schema 验证库 `jsonschema` 从 0.46.4 升级到 0.47.0。

10. **#4338 [OPEN] 依赖: 升级 `actions/stale` GitHub Action**
    - **链接**: [Hmbown/CodeWhale PR #4338](https://github.com/Hmbown/CodeWhale/pull/4338)
    - **内容**: Dependabot 提出的依赖更新，将用于标记陈旧 Issue 的 GitHub Action `actions/stale` 从 10.3.0 升级到 10.4.0。

## 功能需求趋势

从昨日的 Issues 中，可以提炼出以下最受关注的功能方向：

-   **工作流与运行时增强**: 社区和开发者都在围绕 `Fleet/Workflow/Lane/Runtime` 新架构进行大量的测试和功能开发 (#4175, #4178, #3976)，这是项目当前阶段最核心的演进方向。
-   **会话管理与持久化**: 对更强大的会话系统（如侧边栏、会话历史浏览、会话恢复）的需求持续存在 (#2934)，这表明用户不仅将 TUI 视为单次交互工具，而是长期的工作环境。
-   **内存与上下文管理**: “项目级记忆” (#3976) 的提出，意味着社区不再满足于只记住某个对话，而是希望 AI 助手能记住整个项目的约定、决策和历史。这是迈向更智能、更自主代理的关键。
-   **模型与提供商支持**: 对 OpenAI OAuth 路由的验证 (#2984) 和对 Anthropic API 错误的快速反馈 (#4329)，表明用户对模型的稳定性和接入易用性有高要求，尤其是对主流服务商的支持。
-   **用户体验与配置简化**: #3211 提出的权限配置简化和 #4333 中关于 TUI 状态显示混乱的讨论，共同指向了用户对新用户引导和复杂配置可视化管理的需求。

## 开发者关注点

开发者反馈中的主要痛点和关注点包括：

-   **子代理（Sub-agent）行为的不可预测性**: 尤其是 #4032 中描述的 CodeWhale“不听话”、自己写脚本的行为，是当前最困扰用户的问题之一，这可能导致用户对 AI 的信任度下降。
-   **API 与模型兼容性问题**: #4329 的 Anthropic API 错误表明，即使在生产环境中，与外部 API 的交互仍需高度警惕。
-   **性能与资源管理**: 特别是高并发场景下的内存泄漏问题 (#4326)，是开发者重点关注的技术债，直接影响 TUI 在复杂任务下的稳定性。
-   **配置与状态显示的混乱**: 多个 Issue（#4333, #4334）指出当前的配置状态和 Provider 身份识别不清晰，导致用户在排查问题时感到困惑。
-   **对长期记忆和项目上下文的迫切需求**: #3976 的提交者（项目自身）也指出了当前记忆模型的局限性，这反映了开发者对“更智能的上下文感知”这一功能的普遍需求。

---

</details>

---
*本日报由 [agents-radar](https://github.com/D3a-th/agents-radar) 自动生成。*