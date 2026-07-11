# OpenClaw 生态日报 2026-07-11

> Issues: 449 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-11 08:08 UTC

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

## OpenClaw 项目深度报告

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 OpenClaw 项目 2026-07-11 的 GitHub 数据生成的日报。

---

# OpenClaw 项目动态日报 | 2026-07-11

## 今日速览

今日 OpenClaw 社区活跃度极高。过去24小时内，项目 Issues 与 PR 更新总数接近1000条，显示出一个大型、活跃的开源社区的典型特征。具体来看，社区在解决 Bug、推进功能方面投入巨大，共关闭了172个问题，并合并/关闭了151个 PR。尽管有大量功能需求被提出，但项目当前重心明显侧重于**稳定性修复**，尤其是 P0/P1 级别的内存泄漏、会话状态丢失和关键连接中断问题。新发布的 PR 中，针对各个渠道（Discord、Telegram、MS Teams）的超时控制和错误处理改进占据了显著地位，表明项目正在大规模提升其基础设施的稳健性。

## 版本发布

今日无新版本发布。

## 项目进展

今日有 151 个 PR 被合并或关闭，项目在多个方面取得了实质性进展：

- **会话与状态管理增强**：PR #97103 修复了 `sessions cleanup` 命令的干运行模式，使其能够正确预览和清理存档文件，提升了运维效率。PR #103390 解决了网关崩溃后遗留的孤儿工作树（orphaned worktrees）问题，增强了系统的自愈能力。PR #95996 正在审查中，旨在通过统一父级会话生命周期分类器，修复在子代理未完全就绪时父会话被错误推迟的问题。

- **多平台集成稳定性提升**：多个 PR 专注于为不同渠道添加请求超时机制，以防止无限期挂起。这包括 PR #104288 (MS Teams SharePoint)、#104290 (Discord 目录查询)、#104289 (Telegram getChat 查询)。PR #102082 试图抑制 Slack 中由 Chrome 发送的进度条信息，并将其转换为反应或静默处理，以减少聊天噪音。

- **安全性修复**：PR #103492 将配置字段查找从 `in` 操作符（会遍历原型链）改为 `own-property` 检查，修复了一个潜在的安全风险，防止了通过 `Object.create` 注入恶意默认值。

- **开发工具与依赖维护**：PR #104239 是一次大规模的代码库清理，旨在统一格式化标准并更新 TypeScript 工具链。PR #104027 由 Dependabot 发起，更新了多个 GitHub Actions 依赖。

## 社区热点

今日社区讨论的热点集中在**代理与环境的感知割裂**以及**配置持久化与安全**上。

1.  **代理无法读取工具输出**：Issue #99241（20条评论）是今日讨论最多的议题。用户报告在长时间或含有 ANSI 控制字符的工作流中，工具的输出结果会变成一张图片附件，代理看到的是“（见附件图片）”的占位符，从而无法读取关键的 stdout/stderr 文本。这严重影响了基于文本证据的代理决策过程。

2.  **提示缓存边界中断**：Issue #102175（16条评论）揭示了嵌入会话中的提示缓存会在跨越 `room_event`、策略更改、队列重建等边界时丢失连续性。这对于需要长周期、多轮对话的应用场景是致命缺陷。

3.  **对权限和安全性的持续关注**：Issue #10659（15条评论，4个👍）关于“掩码秘密”功能的讨论热度不减，社区强烈希望代理能“使用”而非“看到”API密钥。Issue #7722（11条评论，4个👍）关于文件系统沙盒的请求也获得了共鸣，用户希望精细控制代理可以访问的文件路径。

-   **最热 Issue**: #99241 - [Tool outputs sometimes render as image attachments and become unreadable to the agent] (https://github.com/openclaw/openclaw/issues/99241)
-   **最热 Issue**: #102175 - [[Bug]: embedded prompt cache breaks across room-event, policy, and Responses boundaries] (https://github.com/openclaw/openclaw/issues/102175)
-   **最热 Issue**: #10659 - [Feature Request: Masked Secrets] (https://github.com/openclaw/openclaw/issues/10659)

## Bug 与稳定性

今日报告的 Bug 数量庞大且影响严重，核心问题集中在内存、会话和数据丢失上。

| 严重程度 | Issues Key | 摘要 | 状态 |
| :--- | :--- | :--- | :--- |
| **P0** | #91588 | **致命：网关内存泄漏，RSS 从350MB增长至15.5GB**，导致持续 OOM 崩溃和重启循环。 | OPEN，无直接 fix PR |
| **P0** | #101763 | **主机版 Molty 模型选择器不持久**，导致 API 请求始终使用错误的模型ID（`claude-opus-4.8` vs `claude-opus-4-8`），所有代理回复均失败。 | OPEN，需更多信息 |
| **P1** | #83959 | **Codex 应用服务器启动重试会在替代服务器就绪前耗尽**，导致定时任务失败。 | OPEN，有关联 PR 未合并 |
| **P1** | #87109 | **macOS 网关堆内存空闲时增长至1073MB+**，导致 cron job 在内存压力下静默失败。 | OPEN，无 fix PR |
| **P1** | #92405 | **子代理生成时持久化原始 provider 而非 CLI 运行时**，导致深度为2的冷启动子代理静默死亡。 | OPEN，无 fix PR |

### 总结
P0 级别的内存泄漏和模型ID错误是当前最紧急的问题，它们分别导致了服务整体崩溃和核心功能（回复）瘫痪。多个 P1 问题涉及网关在时序和资源竞争下的不稳定行为。这些 Bug 揭示了项目在资源管理、进程生命周期和提供商适配器方面存在系统性缺陷。

## 功能请求与路线图信号

今日用户提交的功能请求数量众多，主要方向包括：

- **安全与权限精细化**：`#10659` (掩码秘密)、`#7722` (文件系统沙盒)、`#6615` (执行批准黑名单支持，获得7个👍，社区呼声最高)。
- **渠道能力增强**：`#12602` (Slack Block Kit 支持，已关闭)、`#7476` (WhatsApp 贴纸发送)、`#8355` (语音通话流式TTS)。
- **用户体验改进**：`#8299` (禁用子代理发布公告的配置项)、`#9409` (改进上下文溢出错误信息)、`#9637` (TUI 禁用 emoji 的辅助功能选项)。
- **系统扩展性**：`#11665` (Webhook 会话复用，支持多轮对话)、`#9865` (后台任务批量API支持，节省50%成本)。

结合已有的 PR 分析，**安全和配置精细控制**（如 `#6615` 的黑名单）最有可能被纳入下一版本的核心特性。同时，**多轮对话和多渠道复杂交互**（`#11665`, `#12602`）也是社区强烈期望的方向。

## 用户反馈摘要

从今日的 Issues 评论中，可以提炼出以下用户痛点：

- **稳定性是最大的痛点**：“每天都要重启网关好多次，因为内存泄漏。” （#91588 相关评论） “Discord 断连后根本不会自动重连，必须重启整个网关。” (#99681 相关评论)
- **提示词/上下文丢失**：“我的子代理经常忘记它刚刚在做什么，感觉上下文被打断了。” (#102175 相关评论) “父会话等待子代理完成后，返回的消息要么丢失，要么变成子代理的摘要，而不是父会话的回复。” (#90944 相关评论)
- **工具与配置脱节**：“我配置了文件沙盒，但代理还是能访问到不该访问的目录。” (#7722 相关评论) “Webhook 文档说支持多轮对话，实际上每次都创建新会话，根本没用。” (#11665 相关评论)
- **成本与效率**：“如果能用 OpenRouter 或批处理 API，成本能降低一半。” (#9865, #9016 相关评论)

## 待处理积压

以下是一些长期未解决或状态受阻的重要 Issue 和 PR，需要维护者特别关注：

1.  **Issue #91588 [P0]** - 网关内存泄漏的根本原因和修复方案长期悬而未决，是影响整个项目稳定性的头号公敌。需从架构层面重新审视内存管理。
2.  **Issue #10687 [P2]** - 模型动态发现功能讨论了数月，涉及多个标签，但进展缓慢。随着 LLM 模型更新加速，静态模型列表已成为制约用户灵活性的瓶颈。
3.  **PR #90741 [P2]** - 一项旨在优化 `models-config` 性能的大规模 PR，已提交一个多月，且涉及多个高风险区域（兼容性、认证、可用性），需要维护者投入精力进行深度审查。

---

## 横向生态对比

# 个人 AI 智能体开源生态横向对比分析报告（2026-07-11）

## 1. 生态全景

2026年7月11日，个人 AI 智能体/自主智能体开源生态呈现出 **“基建冲刺与版本阵痛并存”** 的态势。头部项目（如 OpenClaw、Hermes Agent、ZeroClaw）日均代码变更量超 50 条，社区贡献活跃，但普遍面临大规模迭代后的稳定性挑战——内存泄漏、会话状态丢失、渠道集成断裂成为高频 Bug 关键词。与此同时，中腰部项目（如 NanoBot、PicoClaw、CoPaw）正经历架构重构或重大版本发布，社区对新功能接受度与对回归问题的容忍度形成鲜明对比。整体生态正从“功能堆叠”阶段转向 **“可靠性优先”** 阶段，安全和配置精细化管理成为跨项目的共同焦点。

## 2. 各项目活跃度对比

| 项目名称 | 今日Issues更新 | 今日PR更新 | 版本发布 | 健康度评估 |
|---------|--------------|-----------|---------|-----------|
| **OpenClaw** | ~1000条 | ~151个合并/关闭 | 无 | ⚠️ 极高活跃，但P0/P1 Bug积压严重（内存泄漏、会话丢失），处于“边修边建”状态 |
| **NanoBot** | 15条 | 45条（26待合并） | 无 | ✅ 高活跃，MCP稳定性获关键突破，但合并流程承压，安全性漏洞紧急修复中 |
| **Hermes Agent** | 50条 | 50条（9个合并） | 无 | ⚠️ 高度活跃但回归问题多，平台兼容性（Windows）及配置一致性是短板 |
| **PicoClaw** | 0条 | 16条（0合并） | 无 | ✅ 高产日，安全加固与性能优化突出，无新Issue表明技术债务清理中 |
| **NanoClaw** | 1条 | 20条（9合并） | 无 | ✅ 高活跃，基础设施重构（时间戳、通道配置）推进顺利，社区问题快速响应 |
| **NullClaw** | 3条 | 0条 | 无 | 🔴 低活跃，安全漏洞（A2A权限）和Telegram断连问题无进展，需关注 |
| **IronClaw** | 10条 | 50条（15合并） | 无 | ✅ 极高活跃，Reborn运行时韧性提升，Slack集成修复中，Bug Bash发现多点P2问题 |
| **LobsterAI** | 5条 | 5条（3合并） | v2026.7.10 | ✅ 中等活跃，新版本发布后出现多Agent配置覆盖回归Bug，需快速修复 |
| **CoPaw** | 38条 | 25条 | v2.0.0 Stable + 2个beta | ⚠️ 高活跃但“阵痛期”，v2.0.0引发Windows沙箱爆炸、上下文压缩破坏等严重问题 |
| **Moltis** | 0条 | 1条 | 无 | 🟢 低活跃，仅有GPT-5.6模型支持PR待合并，整体平稳 |
| **TinyClaw** | 无活动 | 无活动 | — | 🟢 静默 |
| **ZeptoClaw** | 无活动 | 无活动 | — | 🟢 静默 |
| **ZeroClaw** | 19条 | 50条（6合并） | 无 | ✅ 高活跃，SOP可视化编辑器等重大特性落地，Slack/Telegram渠道bug密集修复 |

## 3. OpenClaw 在生态中的定位

**核心参照地位稳固**：OpenClaw 以日均近百条 Issue/PR 的活动量稳居生态第一梯队，社区规模远超其他项目。其技术路线强调 **“原生多通道聚合 + 深度记忆管理”**，并提供丰富的运维工具（如 sessions cleanup、网关可观测性）。与同类对比：
- **优势**：通道覆盖面最广（Discord, Telegram, MS Teams, Slack等），会话状态管理模块最为成熟；社区贡献者分布广，Bug 修复响应速度快。
- **劣势**：**内存泄漏（P0 #91588）和模型ID错误（P0 #101763）** 长期未解，严重威胁生产部署稳定性；配置系统复杂（用户反馈“配置脱节”）。
- **差异**：相比 NanoBot 的极致性能优化（Rust/Go 后端），OpenClaw 更侧重生态兼容性；相比 Hermes Agent 的 Windows 支持薄弱，OpenClaw 在跨平台一致性上表现更好，但内存管理是共同痛点。

## 4. 共同关注的技术方向

多个项目在同一周内集中反映了以下需求/问题：

### 4.1 模型灵活性与 Provider 兼容性
- **涉及项目**：OpenClaw (#10659 掩码秘密)、NanoBot (#4253 对话级模型覆盖)、Hermes Agent (#17199 DeepSeek 配置破碎)、Moltis (#1146 GPT-5.6 支持)
- **具体诉求**：用户希望在任务/会话/子代理级别选择不同模型，要求 Provider 的模型名称、base_url 可完全自定义；同时需要“使用而非看到”API 密钥的安全能力。
- **趋势意义**：LLM 模型迭代加速，静态模型列表已无法满足需求，未来项目需提供 **“声明式模型路由”** 和 **“动态 Provider 发现”**。

### 4.2 会话状态持久化与上下文连续性
- **涉及项目**：OpenClaw (#102175 提示缓存边界中断)、NanoBot (#4872 Dream 空提交)、IronClaw (#5945 长任务后返回泛型错误)、CoPaw (#5960 上下文压缩破坏 tool_call 结构)
- **具体诉求**：长时间会话、多轮工具调用后，上下文压缩或缓存机制导致信息丢失、Agent 遗忘、返回无意义错误。
- **趋势意义**：上下文管理是智能体长期运行的瓶颈，社区急需 **“无损压缩”** 和 **“感知到上下文已丢失”** 的机制。

### 4.3 安全与权限精细化
- **涉及项目**：OpenClaw (#10659 掩码秘密, #7722 文件沙盒)、NanoBot (#4776 /restart DoS 漏洞)、NullClaw (#974 A2A bearer 跨用户复用)、ZeroClaw (#8826 SSRF 防护)
- **具体诉求**：API 密钥可被使用但不可见；文件系统路径沙盒；工具调用黑/白名单；多租户上下文隔离。
- **趋势意义**：当 Agent 成为基础设施，**零信任权限模型** 和 **细粒度资源隔离** 成为刚需。

### 4.4 渠道集成稳定性
- **涉及项目**：OpenClaw (Discord/Telegram 超时)、NanoBot (MCP 重连崩溃)、Hermes (Windows 路径问题)、ZeroClaw (Slack 线程上下文、Telegram 图片重复)
- **具体诉求**：不同渠道（IM、邮件、Webhook）在超时、重连、消息格式适配上的表现参差不齐，用户期望**一致的可靠性**。
- **趋势意义**：渠道抽象层需要标准化的重试/心跳/错误报告接口，而非逐渠道打补丁。

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw |
|------|---------|--------|-------------|---------|-------|
| **功能侧重** | 多通道聚合 + 会话管理 | 高性能轻量 Agent（Rust/Go） | 技能生态 + 多平台适配 | 工作流编排（SOP）+ 可视化 | Agent协作 + 企业级集成 |
| **目标用户** | 个人开发者和企业运维 | 对性能敏感的高级用户 | 跨平台（Windows/桌面）用户 | 自动化工作流打造者 | 中文用户、企业团队协作 |
| **技术架构** | Node.js (TypeScript) | Go + Rust 混合 | Python + TypeScript | Rust（高性能） | Python (AgentScope) |
| **社区规模** | 最大（日均千级事件） | 中等（活跃贡献者约30人） | 大（45条PR/日） | 大（50条PR/日） | 中等（25条PR/日） |
| **当前阶段** | 稳定性修复为主 | 功能迭代 + 安全加固 | 质量巩固 + 平台适配 | 架构升级（SOP落地） | 重大版本过渡阵痛期 |

**关键差异**：NanoBot 主打**极简与性能**（Go/Rust 后端），适合资源受限或高并发场景；ZeroClaw 以**工作流可视化编排**（SOP编辑器）独树一帜，适合复杂自动化需求；CoPaw 深耕**中文企业场景**（飞书、钉钉集成），但 v2.0.0 迁移风险高。

## 6. 社区热度与成熟度

### 快速迭代阶段（日PR > 30，但稳定性波动较大）
- **OpenClaw, Hermes Agent, ZeroClaw**：这三者社区规模大、贡献密度高，但伴随大量回归问题。需警惕“功能膨胀”破坏核心系统可靠性，建议设置**稳定性冻结期**。
- **IronClaw**：今日合并15个PR，Bug Bash发现多点P2问题，但开发者响应迅速，健康度高于前三者。

### 质量巩固阶段（日PR 10-30，Bug修复占比高）
- **NanoBot, PicoClaw, NanoClaw**：这些项目今日以安全修复、性能优化和基础设施重构为主，无明显严重 Bug 报告，属于稳健发展型。
- **CoPaw**：虽 PR 数多，但因 v2.0.0 发布导致大量回归，暂时落在“阵痛期”，需快速稳定。

### 静默/低活动阶段（日PR < 5）
- **NullClaw, Moltis, TinyClaw, ZeptoClaw**：此类项目活动稀少，可能处于维护模式或重大重构间隙。其中 NullClaw 的安全漏洞（#974）若不及时处理，可能影响信誉。

## 7. 值得关注的趋势信号

### 7.1 “Agent 即基础设施”催生安全基线与合规需求
- 用户不再满足于“能工作”，而是要求**可审计、可隔离、可回滚**（如掩码秘密、文件沙盒、多租户隔离）。这预示着下一阶段开源智能体将出现类似 Kubernetes RBAC 的权限模型。

### 7.2 上下文压缩技术成为性能瓶颈关键
- 多个项目同时出现上下文压缩破坏 tool_call 结构（CoPaw #5960）或内存泄漏（OpenClaw #91588），表明现有基于滑动窗口/摘要的压缩策略存在根本缺陷。**流式上下文窗口** 或 **结构化上下文压缩** 可能成为下一个技术热点。

### 7.3 渠道一致性比渠道数量更重要
- 当前每个渠道独立开发超时、重试、错误报告逻辑，导致维护成本高昂。社区开始呼吁 **“渠道抽象层标准化”**（如 OpenClaw 为其添加的超时 PR、ZeroClaw 的 Telegram 命令注册修复）。未来可能出现统一的通道 SDK 或网关标准。

### 7.4 多 Agent 协作普及但仍脆弱
- OpenClaw（子代理生成失败 #92405）、NanoBot（子代理模型覆盖 #4623）、CoPaw（任务移交 #3623）都在尝试多 Agent 协作，但常出现上下文丢失、会话状态错乱、父/子会话权限混淆等问题。**“协作基座”**（如 Agent Collaboration Bus）将成为差异化竞争点。

### 7.5 开源社区对“配置复杂性”的容忍度下降
- 多个项目（Hermes #47714、OpenClaw #99241、CoPaw #5948）的用户反馈明确指向“配置难以理解/调试”。文档错误、不一致的前端行为、升级后配置失效，正在消耗社区信任。**“零配置”或“声明式配置”** 将是赢得大众用户的敲门砖。

---

*报告基于 2026-07-11 各项目公开数据自动生成，仅供技术决策参考。建议重点关注 OpenClaw 的内存泄漏修复、NanoBot 的 MCP 稳定性与 CoPaw 的 v2.0.0 迁移指南进度。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，以下是根据 NanoBot (github.com/HKUDS/nanobot) 2026年7月11日数据生成的日报。

---

## NanoBot 项目动态日报 | 2026-07-11

### 1. 今日速览

今日项目处于 **高活跃度** 状态。核心开发团队在稳定性和安全性方面投入巨大，有多项针对 MCP (Model Context Protocol) 连接安全和进程崩溃的重磅修复被合并。同时，社区对模型灵活性的需求持续高涨，多个相关的功能请求和 PR 正在推进。值得注意的是，**PR 数量高达 45 条**，显示出非常密集的代码贡献活动；然而，待合并 PR 也达到了 26 条，反映出合并流程可能面临一定压力。安全问题受到高度重视，一个关于 `/restart` 命令的严重缺陷已被报告，并有对应的安全 PR 正在审查。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日项目在**核心稳定性**和**安全性**方面取得了关键进展，合并了多项重要修复。

- **MCP 连接与崩溃修复**：多个 PR 协同解决了 MCP 网关崩溃的顽固问题。
    - **[PR #4764]** (已合并) `fix(mcp): isolate reconnect cancel scopes to prevent gateway crash`：由 `tjc0726` 提交，旨在隔离 MCP 重新连接的取消作用域，防止因会话超时导致的网关崩溃。此修复直接关联已关闭的 [Issue #4302]。
    - **[PR #4843]** (已合并) `fix(mcp): keep transport cleanup in owner tasks`：由 `flyzstu` 提交，通过确保传输清理在拥有它的任务中执行，进一步巩固了 MCP 连接的稳定性。
    - **影响**：这两项合并的修复标志着长时间困扰开发者和用户的 MCP 连接稳定性问题取得了实质性突破，项目后端健壮性显著提升。

- **Dream (记忆学习) 功能优化**：
    - **[PR #4873]** (已合并) `fix(dream): skip no-op periodic commit attempts`：由 `alekwo` 提交，解决了 Dream 功能每次运行时无论是否有实质性变更都会创建 git 提交的问题，避免了大量的空提交污染仓库历史。此 PR 直接解决了 [Issue #4872]。

- **功能落地**：
    - **[PR #4623]** (已合并) `feat(subagent): allow spawn model override`：由 `yu-xin-c` 提交，为 `spawn` 工具增加了 `model` 参数，允许用户为子代理指定不同的模型。这直接回应了社区对模型灵活性的核心诉求。
    - **[PR #4622]** (已合并) `feat(cron): support job model presets`：由 `yu-xin-c` 提交，为定时任务 (cron) 增加了 `model_preset` 支持，允许不同任务使用不同的模型预设。解决了 [Issue #4378]。

### 4. 社区热点

今日社区讨论的核心矛盾集中在 **“模型灵活性”** 与 **“安全/稳定性”** 之间。

- **[Issue #4253]** `[enhancement, feature request] support overriding model per conversation` (6条评论): 该需求获得了最多的社区讨论。用户 `rombert` 提出了一个典型的多场景使用痛点：需要在快速的开源模型和私密的本地模型间按需切换。这表明 **“每次对话/任务级别选择模型”** 是社区当前最渴望的功能之一。
- **[PR #4875]** `refactor: extract MCP tool provider lifecycle`: 虽然评论数未明确标注，但其描述长度和修改范围暗示这是一个关注度极高的重构 PR。它尝试将 MCP 动态工具的生命周期管理中提取出来，是解决 MCP 稳定性问题的根本性方案，社区显然在密切关注其进展。

### 5. Bug 与稳定性

今日报告了多个 Bug，严重程度不一，但 **安全漏洞** 成为最高风险点。

- **严重 - 安全漏洞**：**[Issue #4776]** `Security: /restart command has zero authorization — any paired user can DoS the process`。任何已配对用户都可执行 `/restart` 命令，导致整个机器进程崩溃，属于拒绝服务 (DoS) 漏洞。**有对应的修复 PR**：[PR #4880] 正在审查中，建议优先合并。
- **中 - 功能缺陷**：**[Issue #4302]** (已关闭) `nanobot gataway crashes after mcp reconnect`: MCP 网关在重连后崩溃。此 Bug 已被今日合并的 [PR #4764] 和 [PR #4843] 修复，属于已解决的问题。
- **中 - 功能缺陷**：**[Issue #4835]** (已关闭) `Bug: WebUI landing message can be sent to an unrelated existing chat`: WebUI 首次消息可能被发送到无关的聊天中。此问题已由并行的 [PR #4836] 修复并关闭。
- **轻微 - 体验缺陷**：**[Issue #4860]** (已关闭) `no such command "onboard" or "webui"`: 新用户安装后，找不到文档中提到的命令。这属于文档与代码不同步的问题，虽已关闭，但提示项目需加强新用户引导的文档维护。

### 6. 功能请求与路线图信号

用户对新功能的需求集中在 **“精细化模型控制”** 上，并且这些信号很可能被迅速纳入下一版本。

- **对话/子代理模型覆盖**：**[Issue #4253]** 和 **[Issue #4231]** 都提出了为不同场景（对话、子代理）指定不同模型的需求。**目前已有一致的 PR 支持**：[PR #4623]（子代理模型覆盖）已合并；[Issue #4253] 相关的实现预计也将在后续版本中跟进。
- **定时任务模型预设**：**[Issue #4378]** 已经被新合并的 [PR #4622] 完美解决，该功能已落地。
- **安全增强**：**[Issue #4776]** 暴露的 `/restart` 权限漏洞，直接促使 **[PR #4880]** `fix(security): default restrict_to_workspace to True` 的提出。这表明项目在追求新功能的同时，也开始严肃对待安全基线问题，默认提升安全配置是一个强烈的正向信号。

### 7. 用户反馈摘要

- **模型灵活性是首要痛点**：用户 `rombert` 在 [Issue #4253] 中详细描述了其工作流程（快速开源 vs. 私密本地），清晰地表达了“任务级别模型选择”的重要性。社区对此的积极响应（6条评论）印证了这是一个普遍需求。
- **新用户入门有摩擦**：用户 `justTravis` 在 [Issue #4860] 中提到，按其官方文档安装后，关键的 `onboard` 和 `webui` 命令不存在。这表明文档与实际发布版本存在脱节，影响了新用户的首次体验和信任感。
- **开发环境的稳定性有所提升**：用户 `tjc0726` 报告的 MCP 网关崩溃问题 ([Issue #4302]) 得到修复并被关闭，对使用 MCP 服务器的用户是利好。用户 `alekwo` 提出的 Dream 功能空提交问题 ([Issue #4872]) 也很快被修复，说明对核心功能的负面反馈能得到快速响应。

### 8. 待处理积压

- **[PR #4021]** `fix(codex): dedup reasoning items before send`：此 PR 解决 OpenAI Codex 提供商的 “Duplicate item” 错误，自2026年5月27日开始创建，至今已 **超过一个半月**。尽管标签为 `[AI-assisted]`，但持续未合并可能阻塞了某些用户的多轮对话体验，维护者需评估其状态并决策。
- **[Issue #4776]** `Security: /restart command has zero authorization`：此安全缺陷虽然已有 [PR #4880] 对应，但考虑到其严重性（DoS），应被列为最高优先级处理。维护者需要尽快审查并合并 [PR #4880] 的分支，并考虑发布一个安全修复版本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

好的，以下是根据您提供的 Hermes Agent 项目数据生成的日报。

---

## Hermes Agent 项目动态日报 | 2026-07-11

### 1. 今日速览

今日 Hermes Agent 项目保持 **高度活跃** 状态，社区提交和反馈量巨大。过去24小时内，GitHub 上共有 50 条 Issue 和 50 个 PR 获得更新，显示出密集的开发与用户互动。尽管没有新版本发布，但社区在 **稳定性修复** 和 **平台兼容性**（特别是 Windows）方面投入了大量精力，同时涌现出多个关于 **技能管理** 和 **用户体验** 的功能请求。值得注意的是，大量重复的 PR 和 Issue 表明，对于某些特定问题（如 MiniMax 模型超时、Windows 路径问题），社区正在积极讨论并提出多种解决方案。

### 3. 项目进展

今日共有 **9 个 PR** 被合并或关闭，同时有 **41 个新的或待处理的 PR** 等待审查，项目正处在快速迭代的前夜。

**主要合并/关闭的 PR：**
- **[#62522] feat(browser): add Helium browser support on Linux**：已合并。为 Linux 平台添加了轻量级 Chromium 内核浏览器 Helium 的支持，解决了 Helium 在特定启动参数下崩溃的问题。
- **[#62497] fix: add MiniMax M2.x to reasoning stale-stream timeout floor (#62353)**：已合并。修复了 MiniMax M2.x 推理模型因超时设置不当导致流式输出中断的问题。

**其他值得关注的进展（待审查/合并）：**
- **稳定性修复**：超过 10 个 PR 直接针对 Bug 修复，覆盖了 MCP 看门狗误杀进程、Windows 下的路径分隔符与权限、静默模式工具调用、会话状态错乱等关键问题。
- **平台适配**：多个 PR 正在改进 **Windows** 平台的支持，包括任务计划程序对 Gateway 的守护、UAC 提权后环境变量继承等，表明项目正积极解决跨平台部署痛点。
- **新功能预制**：`[#62520] feat(skills): add NIS2 GRC compliance skill` 和 `[#62518] feat(api-server): add split runtime tool channel` 等 PR 正在引入新的功能和架构基座。

**小结**：项目在 **72 小时内（7/9-7/11）** 解决了超过 20 个 Issue，当前代码库的健康度正在快速修复中，尤其是在稳定性、平台兼容性和特定 Provider 支持方面。

### 4. 社区热点

今日讨论热度最高的议题围绕 **配置复杂性与 Provider 兼容性**。

1.  **[#47714] Desktop/TUI sessions fall back to OpenRouter when using named custom provider** (评论: 9)
    - **链接**: [Issue #47714](https://github.com/NousResearch/hermes-agent/issues/47714)
    - **诉求**: 用户发现 Desktop/TUI 在创建新会话时会忽略用户配置的“自定义 Provider”，转而回退到 OpenRouter。而相同的配置在 CLI 或其他 Gateway 工作正常。这暴露出不同前端（TUI/Desktop/CLI）在配置解析上存在不一致性，是用户体验的核心痛点。

2.  **[#17199] deepseek provider: model normalization and base_url override break custom endpoints** (评论: 7)
    - **链接**: [Issue #17199](https://github.com/NousResearch/hermes-agent/issues/17199)
    - **诉求**: 用户在使用 `deepseek` provider 连接兼容 OpenAI API 的自定义端点（如火山引擎 ARK）时，遇到模型名称被“霸凌式”标准化和 `base_url` 被覆盖两个 Bug，导致配置不可用。这反映了特定 Provider 模块的硬编码逻辑与用户灵活配置需求之间的冲突。

**分析**：这两个热点背后表现出用户对于 **配置灵活性和一致性** 的强烈需求。用户希望以一种统一、可预测的方式配置各类第三方服务，而当前不同前端和 Provider 的实现差异正在造成实际困扰。

### 5. Bug 与稳定性

今日报告的 Bug 数量众多，覆盖了从核心 Agent 到具体平台的多个层面。以下是按严重程度排列的关键 Bug：

**P2 级别（高优先级）Bug：**
- **[#62505] MCP stdio watchdog kills live servers when psutil create_time changes**：MCP 服务器看门狗因为 `create_time` 的浮点精度问题，误杀仍在运行的父进程。这是一个严重的回归问题，破坏了 MCP 功能的可靠性。**（已有修复 PR #62530）**
- **[#62494] `hermes chat --model <alias>` ignores model_aliases**：命令行指定模型别名时被忽略，直接使用默认 Provider。破坏了配置系统中“别名”这个核心功能。
- **[#62481] new-chat first Enter requires a second press**：一个已关闭 Issue (#54527) 的回归，新聊天框首次按下回车键无法发送消息，需要按两次。严重影响基础交互体验。
- **[#62480] chat -Q (quiet mode) deterministically returns empty final content on tool-using turns**：静默模式在涉及工具调用的会话中返回空内容，破坏了自动化脚本的可用性。**（已有修复 PR #62524）**
- **[#61265] Hermes sends extremely large prompts to local OpenAI-compatible models**：Agent会构造并发送异常巨大的 Prompt 到本地模型，导致长达数分钟的停滞，影响所有本地模型的大小。严重影响本地推理体验。
- **[#62175] Dashboard leaks CLOSE_WAIT sockets**：Dashboard 持续泄漏 TCP 连接，大约5天内会导致 `EMFILE` 错误（打开文件数过多），导致服务崩溃。
- **[#62514] Windows: .sh/.bash cron jobs fail with exit 127**：cron 任务在 Windows 上因路径分隔符问题（反斜杠 vs. 正斜杠）而无法执行脚本文件。
- **[#57143] Dashboard model switcher falls back to openrouter for custom_providers**：与 #47714 类似的问题，Dashboard 的模型切换器在每次开关后会回退到 OpenRouter，UI 操作不可靠。

**P3 级别（中等优先级）Bug：**
- **[#51931] Nested tool hooks(on_pre_tool_call and on_post_tool_call) can't get session_id**：嵌套工具调用中，Hook 函数无法获取当前的 `session_id`，限制了高级定制能力。
- **[#62462] Hermes Desktop crashes on Linux because node-pty pty.node is missing**：Linux 下 Desktop 版本因缺失原生模块而崩溃，可能影响 Linux 用户的桌面端体验。

**小结**：今日的 Bug 报告揭示了 **“配置鲁棒性”** 和 **“跨平台/跨模式的一致性”** 是当前项目稳定性的两个最大短板。好消息是，许多关键的 Bug 已经由社区贡献者在同一天内提交了修复 PR，展现了强大的自愈能力。

### 6. 功能请求与路线图信号

今日涌现了多个功能请求，结合已有 PR 可以预见项目未来的发展方向：

1.  **技能生态增强**:
    - **[#10036] Will he use Gemini CLI? / Is there a convenient way to install skills?**：用户对技能安装的便捷性提出疑问，希望有更简单的方式。
    - **[#62475] Agent misses relevant skills in flat 69-skill list**：用户有 69 个技能，但 Agent 会忽略相关技能。这提出了一个“技能检索”的需求。
    - **[#62384] Add reviewed local-to-shared skill promotion workflow**：提出了本地技能到共享技能的审核工作流，以及对共享技能编辑的管控。
    - **[#62520] feat(skills): add NIS2 GRC compliance skill**：自动导入了一个新的 GRC 合规技能，展示了技能库的扩展潜力。
    - **信号分析**：项目正在从“技能可用”向“技能可用且易用”过渡。未来的路线图很可能包含 **技能自动检索/匹配**、**技能市场/安装机制** 和 **技能生命周期管理**。

2.  **会话管理改进**:
    - **[#43008] Feature: graceful session resume / reset-awareness**：用户希望当会话因空闲而重置时，Agent 能感知到并告知用户，避免上下文丢失后的困惑。
    - **[#51058] TUI/Desktop session mix-up after context compression**：上下文压缩后，会话可能会错乱。这与会话管理的稳健性相关。
    - **信号分析**：现有的会话模型在长时间、多任务场景下存在状态混淆的风险。未来可能引入更“有状态”的会话管理机制，或是对用户透明的“上下文已丢失”感知。

3.  **用户体验与交互优化**:
    - **[#51250] Feature Request: GUI pop-up for memory approval**：用户希望内存写入的审批也能像工具调用一样，在桌面端使用弹出窗口，而不是通过CLI命令。
    - **[#38975] Desktop UI: add full custom OpenAI-compatible provider setup**：用户希望在 Desktop UI 中直接完成自定义 Provider 的配置，而不需要手动编辑配置文件。
    - **信号分析**：用户对 GUI 的期望越来越高，希望所有操作（配置、审批、管理）都能在图形界面中完成。这是 Hermes 从“CLI 友好”向“全栈 GUI”过渡的必然要求。

### 7. 用户反馈摘要

从今日的 Issues 评论和描述中，可以提炼出以下真实用户反馈：

- **满意点：**
    - MCP 集成和技能自动化功能受到关注（如 NIS2 合规技能），用户乐于贡献和扩展生态系统（如 #62520， #62384）。
    - 项目社区响应迅速，重要的 Bug 在几小时内就有对应的修复 PR 提交（如 #62505、 #62480、 #62530），显示出社区的活力和开发者的专注。

- **痛点与不满意：**
    - **配置复杂性是最大痛点**：多个 Bug (#47714, #17199, #57143, #62494) 都指向配置系统。用户花费大量时间配置（特别是自定义 Provider 和模型别名），但不同前端和组件的表现不一致，导致大量“IT 必须工作”的挫败感。
    - **本地模型与自定义端点支持的脆弱性**：Bug #61265（超大Prompt）和 #17199（DeepSeek 配置破碎）表明，对非主流或本地部署的提供商支持不够健壮。对于依赖本地或私有云模型的用户来说，这可能是采用 Hermes 的主要障碍。
    - **Windows 用户体验不佳**：多个 Bug (#62514, #62462, #62504) 专门针对 Windows 平台，涉及路径、权限、原生模块缺失等基础问题。这暗示了测试覆盖或 Win32 开发的投入不足。
    - **回归问题较多**：像 #62481（新聊天首次回车需按两次）这样的回归问题表明，在快速迭代中，测试回归的覆盖面可能不足，影响了用户的稳定预期。

### 8. 待处理积压

以下为长期存在、评论较多但状态未有更新的关键 Issue，提醒维护者关注：

- **[#17199] deepseek provider: model normalization and base_url override break custom endpoints**：创建于 2026-04-29，已存在2个多月，有7条评论。此问题直接影响了特定提供商（火山引擎ARK）用户的部署，且是社区热点问题的根源之一。尽管已有一些修复 PR，但主 Issue 状态仍是 OPEN。
    - **链接**: [Issue #17199](https://github.com/NousResearch/hermes-agent/issues/17199)
    
- **[#23359] tracking: provider/model inventory has no scriptable surface**：创建于 2026-05-10，这是一个基础架构问题，即没有脚本化的 API 来查询和管理 Provder/Model 清单。这导致多个 PR 重复造轮子，并阻塞了四个其他 Issue。此问题的解决将极大改善跨组件的配置一致性和可拓展性。
    - **链接**: [Issue #23359](https://github.com/NousResearch/hermes-agent/issues/23359)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

好的，这是根据您提供的 PicoClaw 项目数据生成的 2026-07-11 项目动态日报。

---

# PicoClaw 项目动态日报 | 2026-07-11

## 今日速览

今日 PicoClaw 项目保持着极高的活跃度，24小时内涌现了16个Pull Requests，主要集中在安全修复、性能优化和代码重构三个方向。虽然新Issues数量归零，但大量的PR提交和关闭表明社区和核心团队正在集中精力消化技术债务并加固系统稳定性。项目整体健康度优秀，呈现“高产”状态。

## 项目进展

今日没有PR被合并，但多个重要PR的提交和更新，标志着项目在多个关键路径上取得了实质性进展。

- **安全加固**
    - **[#3248] fix: bump Go to 1.25.12 to remediate stdlib vulnerabilities**: 一个关键的修复，将Go工具链从1.25.11升级到1.25.12，用于修复CI中发现的 `GO-2026-5856` (crypto/tls) 和 `GO-2026-4970` (os) 两个高危标准库漏洞。
    - **[#3246] fix: security and robustness hardening (MQTT TLS, OAuth timeouts, bounded search reads)**: 由 `corporatepiyush` 提交的多个安全修复，包括默认启用MQTT的TLS证书验证、修复OAuth超时问题和限制搜索读取范围，项目安全性显著提升。

- **性能优化与代码质量**
    - **[#3245] refactor(skills): single-pass escapeXML, drop no-op Sprintf**: 优化了skills模块的XML转义逻辑，将三次字符串替换减少为一次，减少内存分配。
    - **[#3244] refactor(seahorse): cut allocations in summary XML assembly**: 同样优化了seahorse模块的XML组装器，减少内存分配次数。
    - **[#3243] refactor(seahorse): use strings.Builder in compaction string helpers**: 将字符串拼接操作从O(n²)复杂度优化为线性，大幅提升性能。这三个PR表明项目正持续向更高效、更健壮的代码库演进。

- **功能修复与扩展**
    - **[#3205] fix: support 9router gateway responses and add Linux ARMv7 build target**: 修复了兼容OpenAI接口的第三方网关“9router”的响应解析问题，并新增了对树莓派等ARMv7设备的构建支持，扩展了硬件兼容性。
    - **[#3179] [CLOSED] fix(whatsapp): reconnect after websocket drops**: 解决了WhatsApp桥接因WebSocket断开导致永久掉线的问题，并引入了异步消息处理机制，这对依赖WhatsApp的用户来说是一个重要的稳定性修复。

## 社区热点

今日社区主要的讨论焦点集中在 **自主代理协作** 和 **树莓派兼容性** 两个主题上。

- **Agent Collaboration Bus (PR #2937)**: 这个历史悠久的PR（创建于5月24日）今日仍有更新。它旨在为PicoClaw引入一个内部的AI Agent协作总线，实现多Agent间的持久化通信。这是一个前瞻性的功能，代表了社区对构建更复杂、互联的AI工作流的强烈需求。
- **9router网关与树莓派支持 (PR #3205)**: 该PR来自一位尝试在树莓派3B+上运行PicoClaw并搭配“9router”网关的用户。其针对特定硬件和第三方服务的修复解决了社区中“小设备”和“非主流提供商”用户的真实痛点，讨论度较高。

## Bug 与稳定性

今日修复的Bug主要集中在连接稳定性和安全性方面，均为高优先级问题。

- **（高）标准库安全漏洞**: `GO-2026-5856` 和 `GO-2026-4970`。已通过PR #3248（将Go版本升级至1.25.12）修复。
- **（高）默认关闭TLS证书校验**: MQTT通道的 `InsecureSkipVerify: true` 配置会暴露于中间人攻击风险。已在PR #3246中修复。
- **（中）WhatsApp Websocket掉线后不重连**: 导致WhatsApp桥接永久性失效。已在PR #3179中修复并关闭。
- **（中）9router网关响应解析失败**: 导致使用特定非官方OpenAI代理的用户无法使用。已在PR #3205中修复。

## 功能请求与路线图信号

- **Agent协作 (PR #2937)**: 该功能若被合并，将代表PicoClaw从“单智能体AI助手”向“多智能体协作平台”迈出关键一步。这很可能是一个重大的路线图里程碑。
- **可配置默认模型备用链 (PR #3200)**: 用户可以通过Web UI设置模型备用链（fallback chain），提升服务高可用性。这是一个高价值的用户需求，已被纳入PR，很有希望进入下一版本。
- **Simplex通道 (PR #3193)**: 新增一种去中心化即时通讯协议 `Simplex` 作为通道，显示项目正在积极拓展其通信生态版图。
- **Dashboard安装脚本迁移 (PR #1951)**: 长期未决，但这是提升开发者体验的关键步骤，未来被纳入的可能性很高。

## 用户反馈摘要

- **WhatsApp连接稳定性**: 用户 `Jh123x` 报告的WebSocket超时问题（#3178）已在PR #3179中修复，体现了社区对该渠道稳定性的高度关注。
- **特定硬件与网关支持**: 用户 `sarwonous` 在使用“树莓派3B+”和“9router”网关时遇到问题，并自行提PR解决（#3205）。这表明用户群体技术能力很强，且对在多种硬件和私有/小众AI服务提供商上运行PicoClaw有强烈的需求。

## 待处理积压

以下PR/Issue长期未得到响应或被标记为“stale”，建议维护者关注：

- **[PR #2937] feat: agent collaboration**：创建于05-24，持续更新中，是核心功能模块，需要投入资源审查。
- **[PR #1951] chore: move installation scripts**：创建于03-24，关系到新手入门体验，积压已久。
- **[PR #3165] fix(openai_compat): recover Seed XML tool calls**：创建于06-24，标记为`stale`，针对特定AI服务商的兼容性修复，影响部分用户。
- **[Issue #3178] [BUG] WhatsApp Websocket Timeout**：虽已关闭，但其反映的WhatsApp连接问题值得长期关注。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域的开源项目分析师，以下是基于提供的 NanoClaw 数据生成的 2026-07-11 项目动态日报。

---

### NanoClaw 项目动态日报 | 2026-07-11

### 1. 今日速览

今日项目活跃度极高，主要由来自核心团队（`core-team`）的批量 PR 合并驱动。过去 24 小时内，共有 **20 个 PR** 被更新，其中 **9 个已合并/关闭**，主要集中在**时间戳处理标准化**、**通道默认值架构**以及**任务系统交付逻辑**的优化上。这些合并表明项目正经历一次重要的基础设施重构期，旨在提升内部一致性和系统健壮性。与此同时，社区报告了一个关于**共享技能重构后遗留的 bug**，该问题很严重但已被迅速定位并有关联修复 PR，显示了良好的响应速度。

- **活跃度评估**：🚀 **高** (核心开发活跃，大量基础设施优化合并，社区问题快速响应)

### 2. 版本发布

无

### 3. 项目进展

今日项目在基础设施和代码一致性方面取得了显著进展，核心团队通过一系列 PR 的合并，解决了多个跨模块的隐形问题。

- **时间戳处理大统一**：核心团队（`gavrielc`）合并了一个三件套修复，解决了全局时间戳混乱的问题。
    - **[#3005]** 修复了 `insertTaskRow` 写入的时间戳格式，使其与聊天记录保持一致的 ISO 标准。
    - **[#3006]** 强制执行全仓库规范：存储使用 ISO-Z UTC 格式，展示使用本地时间，影响了 `messages_out`、`conversations` 等多个模块。
    - **[#3007]** 修复了 Codex/OpenCode 的交换归档文件（`Archived:` 行和文件名），使其也遵循本地时间规范，避免跨时区用户困惑。
- **通道配置声明式化**：核心团队（`gavrielc`）合并了通道配置重构的基础部分。
    - **[#3010]** 核心架构变更：将原本硬编码或启发式的通道行为（如启动模式、回复策略、发送者策略）改为由各通道适配器**自主声明**。
    - **[#3011]** 跟随核心变更，为所有适配器添加了 `ChannelDefaults` 声明，并修复了 WhatsApp 的共享号码问题。
    - **[#3009]** 将仅适用于特定通道的格式化技能（WhatsApp、Slack）从主干移至各自的通道分支，避免了无关技能被部署到所有安装实例。
- **任务系统交付逻辑**：作为“定时任务”系列（`scheduled-tasks train`）的一部分，**[#2988]** 被提出，强制要求所有 `send_message` 和 `send_file` 操作必须指定明确的 `to` 目标，这消除了任务会话中回复的歧义，是实现任务单门交付（one-door delivery）的关键一步。
- **开发者体验增强**：**[#3004]** 合并了 `context-preview` 工具，允许开发者模拟不同场景（如首次消息、唤醒、子代理）来精确预览 Agent 将看到的上下文，大大降低了调试和技能开发的难度。

**总结**：项目向前迈进了一大步，解决了长期存在的**时间处理不一致**、**通道配置混乱**等架构债问题，同时在任务系统和开发者工具方面进行了重要的功能迭代。

### 4. 社区热点

- **`#2877` feat(telegram): native rich rendering via Bot API 10.1 sendRichMessage**
  - **热度分析**：作为一个已开放 13 天的 PR，持续被更新，关注度很高。这反映了社区对 Telegram 通道**原生富文本消息**（如图文混排、按钮等）能力的强烈需求。该 PR 旨在利用 Telegram Bot API 10.1 的新特性，直接提升 Agent 在 Telegram 上的视觉表现和交互能力。

- **`#2988` Tasks: one-door delivery**
  - **热度分析**：作为任务系统重大变革的一部分，持续被讨论和更新。该 PR 改变了任务会话中的消息流向逻辑，对现有技能开发者和使用任务功能的用户影响较大，是社区理解新版任务架构的核心入口。

- **`#2999` feat(channels): unify iMessage into a single `imessage` channel**
  - **热度分析**：一个非常实用的功能，旨在将原本可能分散的本地和托管 iMessage 后端整合为统一的通道。这降低了用户的配置复杂度，是提升用户体验的重要举措。

### 5. Bug 与稳定性

今日报告了一个高严重性的 Bug，已有关联修复 PR。

- **Bug #3001** (❗ **高**): 共享技能重构后的遗留问题。
  - **问题**：在共享技能重构（2026-04-21）之前创建的群组，其本地副本（`stale skill copies`）会静默地阻止更新后的技能软链接（`managed symlinks`）。这意味着这些群组的技能内容永不过期，管理员和家长应用的根本更新无法生效，且没有任何日志提示。
  - **状态**：**已关联修复 PR**。
  - **关联修复 PR #3002**: `fix(container): warn when a real entry blocks a shared skill symlink`。该 PR 旨在当真实文件卡住软链接时发出警告，解决了 `bug #3001` 的核心问题。
- **其他技术与稳定性修复**：
  - **PR #2998**: 修复了在审批卡片上 `self-mod` 操作的 MCP 服务器负载渲染不完整的问题。
  - **PR #2996**: 修复了当消息没有适配器时，会直接丢失而不是进入重试路径的问题，增强了消息投递的鲁棒性。
  - **PR #2966**: 修复了 Agent Runner 未记录“已确认完成”的出错批次的问题，增强了可观测性。
  - **PR #3008**: 修复了在 `LID` 群组中，错误的 `cachedGroupMetadata` 会导致 SKDM (Sender Key Distribution Message) 损坏的问题，这是一个影响 WhatsApp 通道稳定性的技术性 bug。

### 6. 功能请求与路线图信号

- **[路线图信号] 时间与配置标准化**：今日合并的 `#3005`、`#3006`、`#3007`、`#3010`、`#3011` 清晰地表明了项目正在经历一次**深度基础设施重构**。这表明路线图正从“功能添加”阶段转向 **“稳定性和可维护性”** 阶段，旨在为未来的功能迭代打下更坚实的基础。
- **[路线图信号] 任务系统变革**：`#2988` 的合并是“定时任务”系列 PR 的关键一步，强烈暗示**任务系统正在进行根本性的重新设计**，目标是让任务的创建、调度和消息传递更加清晰和可预测。
- **新功能需求**：
    - **[#3012 & #3013]**：核心成员 `amit-shafnir` 提出了**提供者无关的持久化内存**系统，并为其引入了 Codex 的对应实现。这表明项目正在规划一种更高级、跨会话、跨提供者的记忆机制，这是通往更智能 AI Agent 的关键功能，很可能成为下一个版本的重点。
    - **[#2999] iMessage通道统一**：这是一个社区提出的实用功能，将两个后端整合为一个通道，降低了运维复杂度。
    - **[#2877] Telegram 原生富文本**：这是一个社区推动的功能，旨在利用最新的 Telegram API 特性，提供更好的用户体验。

### 7. 用户反馈摘要

- **来自 Issue #3001**：用户 `glifocat` 报告了一个影响用户体验的痛点：**技能更新静默失败**。这暴露了在共享技能重构后，旧部署的群组会遇到更新不透明的问题。用户期望的是，当更新无法生效时，**系统应当有明确的警告**，而不是默默忽略。修复 PR #3002 正是为了解决这个“静默”问题，增加警告日志。
- **来自 PR #3008**：贡献者 `gfnord` 在修复 WhatsApp 通道的一个技术 bug 时，揭示了在特定组模式（`LID`）下，组元数据处理的细微依赖关系。这体现了 WhatsApp 集成涉及的复杂性和对底层协议的深刻理解需求。

### 8. 待处理积压

- **PR #2877**: `feat(telegram): native rich rendering via Bot API 10.1` (创建于 2026-06-28，已开放 13 天)
  - **状态**：这是一项用户期待值较高的功能，但仍在等待核心团队的评审和合并。随着 Telegram 新 API 的发布，此功能已成为提升该通道竞争力的关键，建议维护者重点关注。
- **PR #2988**: `Tasks: one-door delivery` (创建于 2026-07-09，已开放 2 天)
  - **状态**：作为任务系统革命性变化的核心 PR，需要长时间和细致的评审，以确保向后兼容性或提供清晰的迁移路径。它是理解整个任务系统未来方向的关键。
- **PR #2966**: `fix(agent-runner): log when an errored batch is acked completed` (创建于 2026-07-06，已开放 5 天)
  - **状态**：一个提升系统可观测性的重要小修复，能帮助运维人员快速定位问题。阻塞时间较长，建议推动其合并。
- **Issue #3001** 与 **PR #3002**: `bug: Groups created before...` & `fix: warn when a real entry...`
  - **建议**：Issue #3001 是一个已确认的严重 Bug，关联的修复 PR #3002 应被优先合并，并建议在后续版本中考虑自动清理这些陈旧的副本，以彻底解决该问题。
- **PR #2998 & #2996**: MCP 服务器负载渲染与缺失适配器消息重试。
  - **状态**：两个与 `self-mod` 和 `delivery` 相关的修复，阻塞时间 2 天，建议尽快合并以修复这些影响稳定性的问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 — 2026-07-11

## 1. 今日速览

过去 24 小时内，NullClaw 项目收到 **3 条 Issue 更新**（其中 1 条新开，2 条活跃），**0 个 PR 被提交或合并**，**0 个新版本发布**。项目活跃度整体偏低，社区关注点集中在两部分：一是 **Telegram 集成稳定性问题**（#972 闲置后无响应），二是 **安全相关漏洞**（#974 共享 bearer token 导致上下文跨调用者复用）。另有一个新功能请求（#975）提议增加 `grok-cli` Provider。无代码合并进展，表明维护者可能正在处理积压问题或处于低活动期。

---

## 2. 版本发布

无（过去 24 小时内无新版本发布）。

---

## 3. 项目进展

**无 PR 合并或关闭。** 项目主干在过去 24 小时内未向前推进代码层面的更新。

---

## 4. 社区热点

| Issue | 标题 | 评论数 | 热度分析 |
|-------|------|--------|---------|
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | `[bug] telegram channel stop respond after some idle time` | **2** | 讨论最活跃的 Issue。用户报告 Telegram 频道在夜间闲置后无声无息，但后端 `nullclaw agent` 仍能正常响应。评论区可能涉及排查思路或临时工作区。该问题已存在 11 天（6 月 30 日创建），至今未关闭，说明是社区较关心的稳定性痛点。 |
| [#974](https://github.com/nullclaw/nullclaw/issues/974) | `[BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse` | 0 | 安全相关，虽暂无评论，但标题明确指出了一个严重的权限泄漏场景。 |
| [#975](https://github.com/nullclaw/nullclaw/issues/975) | `Add grok-cli provider` | 0 | 功能请求，基于现有 CLI provider 模式提出，方向明确。 |

**社区诉求分析**：用户对 **稳定性和安全性** 的反馈最为突出。Telegram 集成是许多实际部署的入口，其闲置断连影响可用性；而 A2A 路由的 bearer 共享漏洞则直接威胁多用户环境的数据隔离。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 标题 | 状态 | 是否有 Fix PR |
|----------|-------|------|------|---------------|
| 🔴 **严重** | [#974](https://github.com/nullclaw/nullclaw/issues/974) | `[BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse` | 待确认 | 无 |
| 🟠 **中等** | [#972](https://github.com/nullclaw/nullclaw/issues/972) | `[bug] telegram channel stop respond after some idle time` | 待修复 | 无 |
| 🟢 **轻微** | 无其他 Bug 报告 | | | |

- **#974**：A2A 路由仅校验 bearer token，但后续任务/会话 ID 由调用方提供，导致共享 token 的用户可读取/复用他人的上下文。属于 **权限设计缺陷**，易造成数据泄露。
- **#972**：Telegram channel 在长时间空闲后停止响应，但后台 Agent 正常。可能涉及连接保持、心跳或 Channel 轮询逻辑的 BUG。

> 两项 Bug 均尚未关联 Fix PR，维护者需优先关注 #974 的安全影响。

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 分析 |
|-------|----------|------|
| [#975](https://github.com/nullclaw/nullclaw/issues/975) | **Add `grok-cli` provider** – 通过本地 `grok` CLI 登录会话运行 Grok，复用已有的 `claude-cli` / `codex-cli` / `gemini-cli` 子进程模式 | 该请求符合 NullClaw 已有的 **CLI Provider 架构**（`src/provider_probe.zig:43`），实现成本较低。若维护者认可，很可能作为 `v0.x` 的增量功能并入下一版本。这反映了社区对 **多模型 Provider 扩展** 的持续需求。 |

另外，没有其他指向路线图的大功能信号。

---

## 7. 用户反馈摘要

从现有 Issue 描述中提取的用户声音：

- **Telegram 闲置断连**（#972）：  
  > “Telegram channel die away at next morning after idle for a night or more time. But it seems nullclaw work well at backend”  
  → 用户确认后端本身健康，问题锁定在 Telegram 集成层。这是一个 **可用性痛点**，可能影响夜间或低频使用场景。

- **安全漏洞**（#974）：  
  > “Bob and Alice share a valid bearer. Bob reads and lists Alice task history, then reuses Alice context to receive prior downstream...”  
  → 用户复现了跨调用者任务窃取与上下文复用，清晰展示了 **多租户场景下的权限隔离失效**。这是信任模型的关键缺陷。

- **功能请求**（#975）：  
  > 用户指出 “the same subprocess pattern nullclaw already uses for `claude-cli`, `codex-cli`, and `gemini-cli`”  
  → 说明社区对 **复现现有模式扩展新 Provider** 有明确期望，且追求“无计量”使用方式。

---

## 8. 待处理积压

| 类型 | Issue / PR | 创建时间 | 最后更新 | 备注 |
|------|------------|----------|----------|------|
| 🐛 Bug | [#972](https://github.com/nullclaw/nullclaw/issues/972) Telegram 闲置无响应 | 2026-06-30 | 2026-07-10 | 11 天未关闭，有 2 条评论，可能维护者正在调查但未给出明确方案 |
| 🐛 Bug | [#974](https://github.com/nullclaw/nullclaw/issues/974) A2A 权限漏洞 | 2026-07-10 | 2026-07-10 | 安全相关，尚无维护者回复，建议尽快评估并分配 |
| 💡 功能 | [#975](https://github.com/nullclaw/nullclaw/issues/975) grok-cli provider | 2026-07-11 | 2026-07-11 | 新提出，暂无讨论，但复现已有模式，实施难度小 |

> **提醒维护者**：#974 的安全漏洞可能影响线上部署实例，建议优先响应； #972 的积压时间较长，用户可能期待至少一个临时 workaround。

---

*本日报由 AI 自动生成，数据来源于 NullClaw GitHub 仓库的公开事件。报告日期：2026-07-11。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

好的，这是基于 IronClaw 项目数据生成的 2026-07-11 日项目动态日报。

---

## IronClaw 项目日报 — 2026-07-11

### 1. 今日速览

今日 IronClaw 项目延续了极高的开发活跃度，核心团队聚焦于 **Reborn 运行时的稳定性、错误恢复机制**以及 **用户界面的精细打磨**。PR 活动量激增（50条），其中包含多项大型（XL-size）的重构与功能增强，如“排队消息转向”和“预算审批门控”功能正在被合并到主分支。社区反馈（Bug Bash）整体呈积极态势，但暴露了一系列与 **Slack 集成、长时间运行任务可靠性**相关的 P1/P2 级 Bug，表明系统在边缘场景下仍需打磨。整体项目健康度良好，处于快速迭代和功能完善阶段。

### 2. 版本发布

无新版本发布。

### 3. 项目进展

今日共有 **15 个 PR 被合并或关闭**，标志着一系列重要修复和功能落地，项目向前迈出了关键几步。

- **核心稳定性提升**：`#5959` [Reborn 循环韧性] 合并，引入了深度可用性重试、迭代截止机制和模型可见的工具失败原因，是解决 `claw-swe-bench` 中“运行时丢弃工作”问题的关键补丁。同时，`#5965` 确保了可恢复错误能正确传递给模型，避免因信息缺失导致模型盲目重试。
- **Slack 交互修复**：`#5957` 合并，专门修复了 Slack 集成中的移除、OAuth 激活和过期工具恢复问题，这是对近期 Slack 相关 Bug 的系统性回应。
- **新功能推进**：
    - **排队消息转向** (`#5963`)：允许用户在繁忙线程中发送消息，该消息会被排队并作为“转向”输入，无需等待当前运行完成即可指导 Agent。
    - **预算审批门控** (`#5964`)：当 Agent 调用需要消耗预算的计算资源时，用户操作将被阻塞并显示一个“审批”界面，增强了资源控制能力。
- **CI 与发布流程修复**：`#5876` 和 `#5984` 分别修复了主分支 CI 的失败问题和定时 QA 任务，确保了开发管道的稳定性。

### 4. 社区热点

- **最受关注 Issue**: `#5948` [ASSISTANT INCORRECTLY REPORTS GITHUB EXTENSION AS ACTIVATED WHEN IT IS ONLY INSTALLED] (5条评论)
    - **链接**: [Issue #5948](https://github.com/nearai/ironclaw/issues/5948)
    - **分析**: 这是一个来自 Bug Bash 的 P3 级别 Bug，但获得了最多的评论。这表明社区，尤其是测试人员，对用户体验的细节非常敏感。核心诉求是 **状态反馈的一致性**：扩展仅“已安装”而非“已激活/已配置”时，Assistant 不应提供错误的能力预览。未来任何涉及扩展状态报告的功能都需要严格遵循“真实来源”。

- **最复杂 PR 讨论**: `#5598` [CHORE: RELEASE] (持续7天更新)
    - **链接**: [PR #5598](https://github.com/nearai/ironclaw/pull/5598)
    - **分析**: 这个由 CI 机器人发起的版本发布 PR 虽然打开已久，但仍在持续更新，表明项目在版本发布流程上正经历复杂的依赖管理和版本号协调。其包含的 `ironclaw_common` 和 `ironclaw_skills` 的 API 破坏性变更，可能会影响下游依赖者，是社区高度关注后续动态的信号。

### 5. Bug 与稳定性

今日报告了多个 Bug，按严重程度排列如下：

- **P1 (严重)**:
    - `#5943` [Slack DM action posts to current channel instead of user's direct messages]：核心路径错误，Slack DM 功能基本失效。
        - **链接**: [Issue #5943](https://github.com/nearai/ironclaw/issues/5943)
    - **已有修复 PR**: `#5957` 已合并，预计将修复此问题。

- **P2 (高)**:
    - `#5944` [Slack DM delivery silently fails but run reports success]：虚假的成功状态导致用户难以排查问题。
        - **链接**: [Issue #5944](https://github.com/nearai/ironclaw/issues/5944)
    - `#5945` [Run fails with generic “model provider was unavailable” after long multi-tool execution]：长时间运行的可靠性问题，用户体验差。
        - **链接**: [Issue #5945](https://github.com/nearai/ironclaw/issues/5945)
        - **已有修复 PR**: `#5959` 和 `#5975` 的合并有望从根本上缓解此类问题。
    - `#5946` [Assistant mutates Google Sheet before discovering requested trigger is unavailable]：工作流执行顺序混乱，应“先检查，后执行”。
        - **链接**: [Issue #5946](https://github.com/nearai/ironclaw/issues/5946)
    - `#5838` (已关闭) [Run fails with context compaction error]：合并的修复方案 (`#5499` 等) 已被验证有效，该 Issue 关闭。
    - `#5968` [HTTP tool fails with errors when connecting to third-party services without MCP support]：限制了通用性。
        - **链接**: [Issue #5968](https://github.com/nearai/ironclaw/issues/5968)
    - `#5969` [GLM-5.2 not available in opencode default model list]：影响特定用户群体的开箱即用体验。
        - **链接**: [Issue #5969](https://github.com/nearai/ironclaw/issues/5969)

- **P3 (低/体验)**: 包含 `#5947` (线程删除UI不更新)、`#5418` (消息顺序错乱) 等。这些Bug虽不致命，但长期存在会影响用户对项目的专业感评价。

### 6. 功能请求与路线图信号

- **退役 v1 运行时** (`#5935`)：社区成员 `italic-jinxin` 提出移除遗留的 v1 `ironclaw` 运行时，这是 Reborn 成为默认路径后的必然步骤，预示着项目将彻底抛弃旧架构。已有多个 PR（如 `#5828`）在清理相关引用，该议题很可能被纳入下一版本的核心任务。
- **UI 统一化** (`#5938`)：提议将所有原生 `<select>` 下拉控件统一为共享的 `SelectMenu` 组件。相应的 PR (`#5940`) 已于今日提交并在进行中，这表明 **项目正致力于提升前端 UI 的一致性和用户体验**，是进入成熟稳定期的标志。

### 7. 用户反馈摘要

- **对 Slack 集成的不满**: `#5943`、`#5944`、`#5747` 等多个 Issue 反映出 Slack 集成是当前用户抱怨最集中的领域，问题涵盖消息发送失败、发送到错误位置、以及无法解绑账号。虽然已有 PR 修复 (`#5957`)，但这显示了在 Slack 这种复杂平台上的集成测试尚不充分。
- **对长时间任务可靠性的失望**: `#5945`、`#5883`、`#5955` 等 Issue 指出，在多步骤、多工具调用的工作流中，Agent 经常在成功执行大部分步骤后崩溃，并返回无意义的泛化错误。用户 **“浪费了大量时间在成功的任务上，却在最后一步失败”** 的感受非常强烈。
- **正面反馈与未来期望**: Reborn 运行时的增强 PR (`#5965`、`#5959`) 获得了核心成员的大量关注和讨论，暗示社区内部对底层架构的重构和韧性提升是充满期待的。功能请求如退役 v1 也反映了用户对统一、清晰代码库的渴望。

### 8. 待处理积压

- **长期未关闭的 P2 Bug**：
    - `#5883` [Generic “model output could not be used” error after successful tool execution]
        - **链接**: [Issue #5883](https://github.com/nearai/ironclaw/issues/5883)
        - **状态**: 7月9日创建，至今未有关闭或明显进展。它与 `#5945` 等 Issue 同属一类问题，但随着 `#5932` PR 的提交（已合并），该问题有望得到解决。建议维护者更新状态或验证修复。
    - `#5418` [Conversation messages appear in wrong order after tool activity]
        - **链接**: [Issue #5418](https://github.com/nearai/ironclaw/issues/5418)
        - **状态**: 自6月29日提出以来未更新。虽为 P3，但这是影响用户对对话流程理解的基础体验问题。建议尽快评估并排期。

- **停滞的大型 PR**：
    - `#5598` [Chore: release] 和 `#5876` [fix(ci): resolve main branch CI failures] 均为阻塞项目发布流程的关键 PR。它们的长期停滞会拖慢功能交付节奏，需要核心团队优先处理。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，这是为您生成的 LobsterAI 项目动态日报。

---

# LobsterAI 项目动态日报 (2026-07-11)

## 1. 今日速览

项目今日活跃度较高，核心体现在**bug 修复与版本迭代**上。过去 24 小时内完成了 3 个重要 PR 的合并与关闭，并发布了 `2026.7.10` 新版本，包含了子代理协作、权限提示等新功能。社区方面，一个关于“多 agent 配置互相覆盖”的 bug 成为了讨论热点，用户反馈强烈，需重点关注。同时，项目存在一定量的长期未响应 Issues 和 PR，维护者需考虑清理或跟进。

**活跃度评估：8/10**

## 2. 版本发布

**新版本：LobsterAI 2026.7.10**

- **发布时间**：2026-07-10
- **主要更新内容 (What's Changed)**：
  - **特性(agents)**: 支持委派子代理协作 (`#2285`)
  - **特性(cowork)**: 新增可最小化的权限提示 (`#2296`)
  - 以及更多未在摘要中列出的改动。

- **破坏性变更**：从当前 Release Note 中未发现明确的破坏性变更描述。
- **迁移注意事项**：鉴于有用户报告 `USER.md` 文件被覆盖的 bug (`#2293`)，**强烈建议用户在更新版本前，备份所有自己创建的 `USER.md` 文件**。特别是，请留意新版本是否解决了此问题或引入了相关变动。

## 3. 项目进展

今日关闭的 3 个 PR 主要聚焦于 UI 修复和稳定性优化。

- **版本发布**: PR `#2317` (`Release/2026.7.8`) 的合并标志着新版本的顺利发布。
- **UI 修复**: PR `#2316` (`fix(renderer): prevent Windows title bar logo compression`) 修复了在 Windows 系统下，当侧边栏收起并显示更新标记时，标题栏 Logo 被压缩的问题。
- **稳定性修复**: PR `#2315` (`fix(cowork): connect queued follow-up coordinator`) 修复了跨会话及应用最小化状态下，队列的后续处理逻辑问题，提升了 Cowork 功能的稳定性。

项目整体向前迈进了一个小版本，在核心的 agent 协作功能和 UI 细节上均有优化。

## 4. 社区热点

今日最受关注的问题是 Issue `#2293`，由用户 `yepcn` 报告。

- **链接**: [Issue #2293: 重启后，多个agent下的USER.md被覆盖替换的BUG](https://github.com/netease-youdao/LobsterAI/issues/2293)
- **讨论热度**: 3 条评论，该 Issue 虽创建于 7 月 7 日，但在 7 月 10 日仍有更新，是过去 24 小时内讨论最活跃的议题。
- **核心诉求**: 用户期望能够为不同的 Agent 维护独立的 `USER.md` 配置文件。但当前无论通过 UI 修改还是直接编辑文件，在重启后，所有 Agent 的配置都会被主 Agent 的配置覆盖。这严重影响了用户对不同 Agent 进行个性化定制的能力，尤其是在最近一次更新后出现该问题，用户怀疑是回归 bug。

## 5. Bug 与稳定性

今日报告的 Bug 主要集中在由用户 `yepcn` 报告的 Issue `#2293`。虽然没有其他新 bug 报告，但该问题的严重性较高。

| 严重程度 | Issue/PR 链接 | 问题描述 | 关联修复 PR |
| :--- | :--- | :--- | :--- |
| **严重** | [#2293 (OPEN)](https://github.com/netease-youdao/LobsterAI/issues/2293) | 重启后，多个 agent 下的 `USER.md` 文件会被 main agent 的内容覆盖替换，导致无法为不同 agent 配置不同需求。疑似为最近更新引入的回归 bug。 | 无 |
| **中等** | [#1326 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/issues/1326) | [stale] 功能增强：ToolUse 工具调用块批量展开/折叠。社区已有 PR `#1327` 实现，但尚未合并。 | 讨论中 |
| **中等** | [#1329 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/issues/1329) | [stale] 新建的定时任务通知渠道没有选项，只能选不通知。 | 无 |
| **中等** | [#1330 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/issues/1330) | [stale] 功能增强：会话列表错误状态红点徽标。请求在侧边栏为报错会话增加可视化提示。 | 无 |

## 6. 功能请求与路线图信号

今日社区提出的功能请求主要来自标记为 `[stale]` 的旧 Issue，但它们在今日仍有更新，表明用户持续关注。

- **增强协作体验**：
  - **批量操作**：用户 `MaoQianTu` 提出的 `#1326` 功能增强（[链接](https://github.com/netease-youdao/LobsterAI/issues/1326)），希望在包含多个工具调用的 AI 回合中，增加“展开/折叠全部”按钮。该功能已有对应 PR `#1327` 提出实现方案，但尚未合并。这表明提升多人协作会话的操作效率是社区明确的需求信号，值得在下一版本中优先考虑。
  - **错误可视化**：同一用户提出的 `#1330`（[链接](https://github.com/netease-youdao/LobsterAI/issues/1330)），要求在侧边栏为报错会话增加红色圆点提示。这是一个能显著提升用户体验的细节优化。

- **功能可用性**：
  - **定时任务**：`#1329`（[链接](https://github.com/netease-youdao/LobsterAI/issues/1329)）报告了定时任务通知渠道的 UI bug，使其功能形同虚设。这个问题若长期不解决，会影响该功能的声誉。

## 7. 用户反馈摘要

- **正面反馈**：新版本发布的 PR `#2317` 获得合并，表明项目保持活跃迭代，用户在期待新的协作功能。
- **负面/痛点反馈**：
  - **配置冲突是最大痛点**：`#2293` 的用户 `yepcn` 详细描述了多 Agent 配置被覆盖的复现步骤和困扰。他明确表示，“这样就没法对不同agent建立不同的需求”，这直接反映了高级用户对 Agent 个性化配置的刚性需求。
  - **历史遗留问题仍待解决**：标记为 `[stale]` 的多个 Issue 在今日仍有更新，说明用户对批量操作、错误提示等功能有持续需求，而项目对这些需求的进度反馈不足。

## 8. 待处理积压

以下为标记为 `[stale]` 或长期未有回应的关键 Issue 与 PR，提醒维护团队关注：

- **Issues (长期未响应)**：
  - [#1326 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/issues/1326): 功能增强：ToolUse 工具调用块批量展开/折叠 (创建于 2026-04-02)
  - [#1329 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/issues/1329): 定时任务通知渠道选项缺失 (创建于 2026-04-02)
  - [#1330 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/issues/1330): 功能增强：会话列表错误状态红点徽标 (创建于 2026-04-02)

- **Pull Requests (长时间未合并或回应)**：
  - [#1327 (OPEN, stale)](https://github.com/netease-youdao/LobsterAI/pull/1327): 对应 Issue #1326 的修复 PR，但长时间未被合并 (创建于 2026-04-02)
  - [#1276 (OPEN)](https://github.com/netease-youdao/LobsterAI/pull/1276): CI 依赖 `actions/first-interaction` 版本更新 (创建于 2026-04-02)
  - [#1275 (OPEN)](https://github.com/netease-youdao/LobsterAI/pull/1275): CI 依赖 `actions/stale` 版本更新 (创建于 2026-04-02)

**建议**：对于积压的 `[stale]` 核心功能请求（如 #1326），可考虑在下一个里程碑中评估并合并对应的 PR；对于提升开发体验的 CI 依赖更新 PR，建议尽快合并以避免潜在的安全或兼容性问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 | 2026-07-11

## 1. 今日速览
- 项目过去24小时活跃度较低，无新Issue或版本发布，仅有一条Pull Request处于待合并状态。
- 社区关注点集中在**PR #1146**（添加GPT-5.6模型支持），该PR已完成代码变更，但尚未进入合并阶段。
- 整体项目健康度平稳，进展表现为对前沿模型能力的跟进，未出现阻塞性问题或社区争议。

---

## 2. 版本发布
（无）

---

## 3. 项目进展
- **无PR被合并或关闭**，今日无实质性代码合入主线。  
- 唯一活跃的 **PR #1146** 仍在开放中，其目标为：  
  - 在OpenAI及OpenAI Codex fallback目录中注册 GPT-5.6 Sol、Terra、Luna 三个模型。  
  - 应用文档中的1.05M上下文窗口及ChatGPT/Codex后端的372K限制。  
  - 更新配置示例和provider选择文档，替换已过时的OpenAI模型引用。  
  → 该PR一旦合并，将提升Moltis对最新模型的支持能力，并消除文档中的过时信息。

---

## 4. 社区热点
- **[PR #1146] Add GPT-5.6 model support**  
  - 作者：PeterDaveHello  
  - 创建时间：2026-07-09，最后更新：2026-07-10  
  - 链接：https://github.com/moltis-org/moltis/pull/1146  
  - 摘要：该PR是目前唯一活跃的讨论点，虽评论数未显示，但因其涉及**GPT-5.6系列模型**（Sol、Terra、Luna）的接入，且更新了关键的上下文窗口参数，反映了社区对**最新模型生态适配**的强烈需求。背后诉求是保持Moltis与OpenAI快速迭代的同步性，避免用户因模型版本落后而无法使用最新特性。

---

## 5. Bug 与稳定性
- 过去24小时内**未报告新的Bug、崩溃或回归问题**。  
- 项目整体稳定性未见异常波动。

---

## 6. 功能请求与路线图信号
- 无新功能请求提出。  
- **PR #1146** 本身即为功能增强：添加GPT-5.6模型支持。结合该PR已进入待合并阶段，可判断“支持最新模型”是下一版本的重要候选内容。

---

## 7. 用户反馈摘要
- 过去24小时内无新Issue或评论，因此无具体用户反馈可提取。  
- 从近期历史看，用户对**模型支持及时性**和**文档准确性**较为关注（PR #1146的文档更新部分即为佐证）。

---

## 8. 待处理积压
- **[PR #1146] Add GPT-5.6 model support**  
  - 虽非“长期未响应”，但作为当前唯一待合并的PR，建议维护者尽快进行代码审查并决定是否合并。  
  - 该PR自创建已有2天，若无争议，可考虑将其纳入下一个计划里程碑。  
  - 链接：https://github.com/moltis-org/moltis/pull/1146

---

**总结**：Moltis 项目今日处于微活跃状态，主要产出为一次针对前沿模型的支持更新。社区更新节奏平稳，无明显负面信号。下一步建议关注 PR #1146 的评审进度，并持续监控模型兼容性相关的潜在Bug。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

好的，作为 AI 智能体与个人 AI 助手领域开源项目分析师，我已根据您提供的 CoPaw 项目数据，为您生成 2026 年 7 月 11 日的项目动态日报。

---

## CoPaw (github.com/agentscope-ai/CoPaw) 项目动态日报 | 2026-07-11

### 1. 今日速览

CoPaw 项目在 v2.0.0 正式版发布后，社区反馈与代码迭代进入了一个**高活跃的震荡期**。过去 24 小时内，项目共产生 38 条 Issue 和 25 条 PR，社区讨论热度极高。尽管 v2.0.0 带来了架构性的重大升级，但随之而来的是大量关于稳定性、兼容性和回归问题的反馈，导致 Bug 报告激增。核心开发者团队响应迅速，已经创建了多个关键的修复 PR，表现出较强的项目维护能力和对社区诉求的重视。**项目健康度总体良好，但当前首要任务是快速消化和解决 v2.0.0 的稳定性问题，以确保升级用户的平滑过渡。**

### 2. 版本发布

项目在今日发布了 **3 个新版本**，其中最重要的为 v2.0.0 正式版。

- **v2.0.0 (Stable)**
  - **核心更新**: 基于 AgentScope 2.0 重构了运行时内核（Runtime 2.0），标志着项目架构的重大升级。
  - **破坏性变更**: 该版本是一个**Breaking Change** 发布，从 AgentScope 1.x 迁移而来。这意味着：
    - **后端依赖**：`agentscope` 和 `agentscope-runtime` 依赖版本将发生重大变更。
    - **API 与配置**: 新架构可能引入不兼容的 API、配置项和数据格式。
  - **迁移注意事项**: 社区用户（如 `#5948`）强烈希望官方提供详细的升级指南。目前从多个 Bug 报告来看，用户普遍关心：
    - **历史数据的兼容性**：历史会话、记忆、日志是否能无缝迁移。
    - **第三方集成**：如钉钉、飞书、企业微信等渠道的配置是否需要调整。
    - **插件的兼容性**：自定义 Skill、MCP 工具等是否需要迁移适配。
  - **风险提示**: 团队需尽快发布一份详细的 **v1.x 到 v2.0.0 迁移指南**，以帮助用户平稳升级。

- **v2.0.0-beta.7 & v2.0.0-beta.6**: 这两个预发布版本主要包含了一些错误修复和文档/网站更新，为正式版的发布做了最后的准备。

### 3. 项目进展

过去的 24 小时，项目在修复 v2.0.0 问题的同时，持续推进新的功能开发。

- **已合并/关闭的重要 PR**:
  - **[#5942 Bump the version to v2.0.0](https://github.com/agentscope-ai/QwenPaw/pull/5942)**: 正式发布 v2.0.0 版本。
  - **[#5936 Revert per-message current time injection](https://github.com/agentscope-ai/QwenPaw/pull/5936)**: 因显示效果不佳，回退了“每条用户消息注入当前时间”的功能。这体现了团队对用户体验的快速决策。
  - **[#5932 Update docs for QwenPaw 2.0](https://github.com/agentscope-ai/QwenPaw/pull/5932)**: 更新了 2.0 的相关文档。
  - **[#5940 Update homepage copy and visuals for QwenPaw 2.0](https://github.com/agentscope-ai/QwenPaw/pull/5940)**: 刷新了官方网站，突显 2.0 新特性。
- **正在进行中的关键 PR**:
  - **[#5953 fix: use standard truncation hint for scroll-capped tool results](https://github.com/agentscope-ai/QwenPaw/pull/5953)**: 针对 `#5946` 中 agent 错误调用 `recall_history` 的问题，提供了标准化的工具结果截断方案。
  - **[#5949 fix(mcp): apply access policy updates immediately](https://github.com/agentscope-ai/QwenPaw/pull/5949)**: 直接修复了 MCP 工具的允许/拒绝白名单策略不能即时生效的 Bug。

**项目整体向前迈进了一大步，发布了重大版本更新，面对密集的社区反馈也在快速投入修复工作中。**

### 4. 社区热点

今日社区讨论的焦点集中在 **v2.0.0 版本升级后遇到的严重 Bug** 和**对全新权限/设计模式的看法**。

- **最热的 Bug 报告**: **[[Bug] Desktop shell sandbox: icacls timeout ... 20GB memory](https://github.com/agentscope-ai/QwenPaw/issues/5951)** (5 条评论)
  - **诉求**: 用户报告在 Windows 上升级 v2.0.0 后，桌面 Shell 沙箱出现严重问题（pwsh 递归爆炸、内存占满 20GB），且无法关闭或回滚，导致工具完全不可用。用户情绪较为强烈，直接要求回滚到旧版本。这是目前社区反馈中最亟待解决的稳定性问题。
- **对 MCP 权限控制的质疑**: **[[Bug] V2.0.0版本 MCP中禁用了某些子工具的访问,但是agent还是可以调用](https://github.com/agentscope-ai/QwenPaw/issues/5947)** (4 条评论)
  - **诉求**: 用户发现新版本 MCP 工具的白名单/黑名单功能无效，Agent 仍然可以调用用户明确拒绝的子工具。这直接关系到 Agent 的安全可控性，如果属实，将是严重的安全缺陷。
- **对 UI 与权限设计的讨论**: **[[Bug] V2.0.0版本webUI智能体技能界面显示问题](https://github.com/agentscope-ai/QwenPaw/issues/5955)** (2 条评论)
  - **诉求**: 用户抱怨 Web UI 智能体技能界面显示不全（最多20个），新增的权限控制模式（关闭、自动、智能）操作繁琐，建议引入“一次信任/永久信任”的工具白名单机制。这反映了用户对新功能在易用性上的真实感受。

### 5. Bug 与稳定性 (★★★★★ 高风险)

今日报告了多处与 v2.0.0 升级相关的严重 Bug，项目稳定性面临挑战。

- **极高风险：Windows 沙箱引起内存耗尽** ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951))
  - **描述**: 升级后，执行任意 `execute_shell_command` 均导致 pwsh 进程无限递归，内存飙升至 20GB，工具完全不可用。
  - **当前状态**: 未有直接修复 PR，但有 **PR [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)**（feat: add restricted token based windows sandbox）可能会对 Windows 沙箱进行优化，需关注。
- **高风险：上下文压缩破坏 Tool Call 结构** ([#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960), [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856))
  - **描述**: `_split_context_for_compression` 在进行上下文压缩时，会将配对的 `tool_call` 和 `tool_result` 拆散到不同区域，导致后续 API 请求返回 400 错误。这是一个典型的回归问题，会严重影响长时间会话的稳定性。
  - **当前状态**: 未有关联修复 PR。
- **中等风险：中文内容引发 Embedding 400 错误** ([#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950))
  - **描述**: 当记忆文件中包含较多中文时，重建索引因按字符数而非 token 数截断导致失败。这会严重影响使用本地 Embedding 模型的中文用户。
  - **当前状态**: 未有关联修复 PR。
- **中等风险：自动记忆功能模块缺失** ([#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952))
  - **描述**: Windows 桌面版中，自动记忆后台任务报错 `No module named 'agentscope.tool._builtin._scripts'`，导致记忆摘要功能对所有 Agent 失效。
  - **当前状态**: 未有关联修复 PR。
- **中等风险：1.x 版本会话升级后会话无法加载** ([#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956))
  - **描述**: 包含旧版文件工具结果的钉钉会话，在升级到 v2.0.0 后因 Pydantic 验证错误而无法加载。
  - **当前状态**: 未有关联修复 PR。

### 6. 功能请求与路线图信号

从社区反馈和 PR 来看，以下功能点可能成为下个迭代的规划方向：

- **会话管理增强**: **[[Feature] 希望增加一个会话分组及导入导出的功能](https://github.com/agentscope-ai/QwenPaw/issues/5903)** 获得了较高的关注和设计提案 **[#5943 Design Proposal: Session grouping + import/export](https://github.com/agentscope-ai/QwenPaw/pull/5943)**。这表明会话管理是用户的长期痛点，有望被优先纳入开发计划。
- **内容感知的权限控制**: 从 `#5955` 的讨论来看，用户希望有更精细、更人性化的工具权限控制模式，如“白名单模式”和“一次性允许/永久信任”机制，而非现有的“关闭/自动/智能”模式。这为权限系统设计提供了有价值的用户视角。
- **任务移交与会话间反馈**: 老特性请求 **[[Feature]: 任务移交，双方会话记录](https://github.com/agentscope-ai/QwenPaw/issues/3623)** 在今日仍有评论，表明多智能体协作中的上下游沟通机制是一个长期存在的用户需求。
- **文档与升级指南**: **[[Question]: 希望提供升级指南](https://github.com/agentscope-ai/QwenPaw/issues/5948)** 是 v2.0.0 发布后最基础、最迫切的需求。虽然团队已经更新了文档，但一份专门的迁移指南能极大减少用户的困惑和故障报告。

### 7. 用户反馈摘要

- **对 v2.0.0 的矛盾情感**: 社区对 v2.0.0 的重大升级抱有期待，但被密集的 Bug 和稳定性问题所困扰。用户 **[@wjt0321](https://github.com/wjt0321)** 的直接反应是“必须回滚到 v1.1.12.post3”，而 **[@vipcys001-bot](https://github.com/vipcys001-bot)** 则反馈新版本白名单功能失效和权限模式难用。
- **对 UI 设计的批评**: 用户 **[@anye3508](https://github.com/anye3508)** 和 **[@i-iooi-i](https://github.com/i-iooi-i)** 对 WebUI 的界面设计和功能提出了批评，包括技能显示不完整、顶栏占据空间过大等，体现了用户对“干净清爽”UI 的追求。
- **对复杂场景下的困难**: 用户 **[@manjieqi](https://github.com/manjieqi)** 描述了长工具输出导致 Agent 误判并调用不必要 `recall_history` 的场景，这是一个典型的上下文管理导致的行为异常。
- **对细节的追求**: 用户 **[@howyoungchen](https://github.com/howyoungchen)** 对消息时间戳的精确注入位置提出了疑问，并给出了自己的方案，体现了高级用户对技术细节的关注。

### 8. 待处理积压

- **长期未响应的重要 Issue**:
  - **[[Bug]: Tool_call structure lost during context compaction](https://github.com/agentscope-ai/QwenPaw/issues/5856)**: 该问题与 `#5960` 高度相关，是上下文压缩的核心缺陷，已存在 3 天，需要官方确认和修复。
  - **[[Bug]: 上下文压缩跨消息边界拆散 tool_call/tool_result 配对导致 400](https://github.com/agentscope-ai/QwenPaw/issues/5960)**: 新报告，但影响同样严重，需要纳入优先处理队列。
- **待关注的开放 PR**:
  - **[[WIP] feat(agents): implement vision fallback for text-only models](https://github.com/agentscope-ai/QwenPaw/pull/5726)**: 一个重要的实用功能，允许文本模型调用视觉模型处理图片。自 7月2日 起已标记为 `ready-for-human-review`，但尚未合并。
  - **[$PROJECT/PR/5869]**: `feat(console, tui): expose system commands in slash autocomplete`，自 7月8日 起处于 `Under Review` 状态，该 PR 能显著提升用户通过 CLI/TUI 操作的效率，建议尽快审阅。

以上为今日的 CoPaw 项目动态日报。总体来看，项目在经历重大版本发布后，正处于一个关键的“阵痛期”，快速响应用户反馈并稳定版本是当前的最高优先级。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

好的，收到。以下是为您生成的 ZeroClaw 开源项目动态日报。

---

# ZeroClaw 开源项目动态日报 - 2026-07-11

## 1. 今日速览

ZeroClaw 项目今日开发活动维持在高水平，尤其在 Bug 修复与渠道集成方面投入了大量精力。过去24小时内共有 **19 条 Issue 更新** 和 **50 条 PR 更新**，尽管无新版本发布，但项目正通过密集的补丁和功能请求为下一个版本（v0.8.3）做准备。社区围绕 Slack 线程上下文、Telegram 命令注册等问题展开了热烈讨论，同时多名贡献者提交了针对稳定性与安全性的关键修复。整体项目健康度良好，社区贡献活跃。

## 2. 版本发布

无。

## 3. 项目进展

今日项目合并/关闭了 **6 项 PR**，推进了以下关键工作：

- **代码清理与维护**：
    - **PR #8941** (@tzy-17) 已合并：移除了 `zeroclaw-log` 模块中未使用的 `write_lock` 字段和 `#[allow(dead_code)]` 注释，减少了技术债务。
    - **PR #8799** (@singlerider) 已合并：在官方文档中增加了关于 GitHub App 以及 Gitea/Forgejo/Codeberg 等 Git 渠道的设置指南，降低了用户集成门槛。
- **重大问题解决**：
    - **PR #8968** (@tonsiasy) 已关闭：修复了 WeChat 渠道中消息发送失败被静默隐藏的严重 Bug。现在会正确解析 iLink API 返回的错误码并向上层报告，防止用户误以为消息已成功送达。
- **重大特性落地**：
    - **PR #8590** (@singlerider) 已关闭（里程碑性质）：这是一个 **XL 规模** 的合并，引入了实验性的 **SOP（标准操作流程）Web 可视化编辑器**、**Channel Fan-in** 以及 **统一 Git Forge 工具集**。这标志着 ZeroClaw 在可编排、可视化的自动化工作流方面迈出了巨大一步，是 v0.8.3 版本的核心特性。

## 4. 社区热点

今日社区讨论热度集中在处理用户交互体验和集成复杂性的问题上。

- **Slack 线程上下文**：**Issue #6055** 和 **PR #8969** 是今日焦点。用户 @DengHaoke 提出的需求（在首次提及时回填线程历史）获得了积极响应，并由 @abhinavmathur-atlan 迅速提交了 PR。这表明社区对渠道间上下文感知的体验非常重视，尤其是在协作工具中。
    - **链接**: [Issue #6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)， [PR #8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969)
- **SOP 功能的讨论**：虽然 **PR #8590** 已合并，但其庞大的变更集 (`size:XL`) 引发了广泛讨论。围绕 SOP 的定义、配置、触发以及与现有技能系统的交互，社区成员在 Issue 和讨论中进行了深入探讨。
    - **链接**: [PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)

## 5. Bug 与稳定性

今日报告的 Bug 涉及从严重崩溃到用户界面体验的多个层面，影响范围广泛。

| 严重程度 | Bug 标题 (Issue) | 摘要 | 修复状态 |
| :--- | :--- | :--- | :--- |
| **高** | [【SIGSEGV】skill-review fork 在工具调用密集轮次后导致进程崩溃](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | #8654: 后台技能审查分支因切片越界导致 Agent 进程 SIGSEGV 崩溃。这是严重的稳定性问题，影响 Agent 的长期运行。 | 待处理，标记为 `in-progress` (P1) |
| **中** | [【测试闪退】zeroclaw-runtime 并行测试不稳定](https://github.com/zeroclaw-labs/zeroclaw/issues/8962) | #8962: 运行 `cargo test -p zeroclaw-runtime` 时，`model_switch` 和 `turn_streamed` 相关测试间歇性失败，影响开发信心。 | 待处理，尚无明确修复 PR |
| **中** | [【SSRF】image_gen 工具存在 SSRF 攻击面](https://github.com/zeroclaw-labs/zeroclaw/issues/8826, 8827) | #8826, 8827: 两个 PR 针对 `image_gen` 工具中服务器返回的 URL 进行多层 SSRF 防护（DNS 解析检查 + 域名校验）。这是一个潜在的安全漏洞，已提议修复。 | 有 **待合并 PR** #8826, #8827 |
| **中** | [【Telegram】图片发送请求数等于图片数](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | #5514: 用户报告在 Telegram 发送多张图片时，Agent 会将每张图片作为独立请求处理，导致输出多条重复消息。 | 待处理，标记为 `status:accepted` (P2) |
| **低** | [【Telegram】Bot 命令注册失败](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | #8950: 当 Agent 的技能和工具过多时，Telegram 的 `setMyCommands` 接口报错 `BOT_COMMANDS_TOO_MUCH`。 | 有 **待合并 PR** #8963 |
| **低** | [【文档】Telegram 文档示例错误](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | #8810: 用户指出官方文档中的 Telegram 示例存在错误，导致用户配置失效。 | 待处理，标记为 `in-progress` (P2) |
| **中** | [【ZeroCode】macOS文本替换及鼠标复制功能异常](https://github.com/zeroclaw-labs/zeroclaw/issues/8945, 8944) | #8945, #8944: 用户反馈 ZeroCode TUI 界面中，macOS 系统级文本替换失效，且鼠标选择文本进行复制操作被 UI 逻辑拦截。 | 待处理 (P2) |

## 6. 功能请求与路线图信号

今日提出的新功能请求清晰地指向了 **v0.8.3 版本**的收敛方向，尤其是在运行策略、多 Agent 集成和渠道体验优化上。

- **核心功能请求**：
    - **Issue #8958** (@metalmon): 提出 ACP 端点应支持 `?agent=` 查询参数，允许外部客户端（如 Mozilla Thunderbird）直接选择与特定 Agent 交互。这指向了项目在“多 Agent 对外暴露”能力上的扩展。
        - **链接**: [Issue #8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958)
    - **PR #8965** (@ATECHPCS) (待合并): 引入声明式技能自动激活（`triggers`），允许技能在检测到特定关键词或图片时自动触发，并支持在执行前切换 Provider。这将把 Agent 从被动响应用户提问推向主动、上下文感知的工作流。`size:L` 表明这是一个重要的新特性。
        - **链接**: [PR #8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965)
- **路线图信号**：
    - **Issue #8073** 和 **Issue #8363** 是 v0.8.3 的两个关键跟踪器（Tracker），分别关注“可观测性、CI、文档”和“配置驱动运行时策略、路由与工具访问”。今日大量 PR 和 Issue 都在为这两个目标服务，表明项目正按计划向 v0.8.3 目标迈进。

## 7. 用户反馈摘要

从今日的 Issue 和 PR 评论中，可以提炼出用户的核心痛点：

- **“Agent 从 Slack 线程开始就忽略上下文”**：用户 @DengHaoke 提出的 Issue #6055 准确地描述了在开启 `strict_mention_in_thread` 后，Agent 无法感知之前的聊天内容，需要每次 @提及才能获得上下文。这是一个典型的企业协作场景痛点，已被社区开发者 @abhinavmathur-atlan 实现并提交 PR。
- **“文档是错的，让我困惑”**：用户 @cr3a7ure 对 Telegram 文档的错误提出了严厉批评，称其为“slop”，并指出正确的配置方法。这提醒项目方文档质量不容忽视，错误的文档会严重损害用户体验和社区声誉。
- **“我发送了图片，但 Agent 回答了两倍”**：用户 @aq-uua 描述的 Issue #5514 暴露了 Telegram 渠道在处理多图请求时的逻辑缺陷，导致 Agent 的输出冗余。这是一个直接的可用性问题，影响了核心聊天体验。

## 8. 待处理积压

以下为长期未响应或未能解决的关键工作项，需引起维护者注意：

- **Issue #5514** (Bug): Telegram 渠道多图片发送导致重复请求。虽然创建于 2026-04-08 并标记为 `help wanted`，至今无明确修复方案。
    - **链接**: [Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)
- **Issue #6563** (Enhancement): 集成 ComfyUI 作为媒体生成提供商的请求。这是一个用户提出的强大扩展，但已有一个多月无进一步讨论。
    - **链接**: [Issue #6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)
- **PR #8905** (待合并): 一个中等大小的 PR，为 Web 仪表盘增加了实时 Agent 请求计数器。该 PR 缺少维护者 review，标记为 `needs-author-action` 但最后讨论在两天前。
    - **链接**: [PR #8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905)

</details>

---
*本日报由 [agents-radar](https://github.com/D3a-th/agents-radar) 自动生成。*