# AI 开源趋势日报 2026-07-11

> 数据来源: GitHub Trending + GitHub Search API | 生成时间: 2026-07-11 08:08 UTC

---

# AI 开源趋势日报（2026-07-11）

## 今日速览
- **Agent Skill 生态爆发**：`addyosmani/agent-skills`、`mattpocock/skills`、`obra/superpowers` 等多款“AI Agent 技能库”项目单日获得超千星，标准化 Agent 技能文件成为新浪潮。
- **Office/桌面操作 Agent 工具集中发布**：`OfficeCLI` 专为 AI Agent 设计 Office 读写能力，`DesktopCommanderMCP` 提供终端控制 MCP 服务，`TencentDB-Agent-Memory` 实现本地长期记忆，Agent 工具链日趋完善。
- **前沿 LLM 推理与 Agent 框架持续升温**：`vllm`、`ollama` 等推理引擎热度不减，`affaan-m/ECC`（Agent 性能调优）和 `TauricResearch/TradingAgents`（金融多智能体）刷新高 star 记录，社区追求更高性能和专业化应用。

---

## 各维度热门项目

### 🔧 AI 基础工具（框架、SDK、推理引擎、开发工具、CLI）
- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐85,948  
  高吞吐、内存高效的 LLM 推理与 serving 引擎，支撑大规模模型部署。
- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐175,901  
  一键运行多种开源大模型的本地推理工具，今日已支持 Kimi、GLM、DeepSeek 等最新模型。
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐104,178  
  让 AI Agent 能像人一样操控浏览器的自动化工具，Web 任务执行利器。
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐149,057  
  大规模网页抓取与交互 API，为 LLM 提供实时数据和搜索能力。
- **[esengine/DeepSeek-Reasonix](https://github.com/esengine/DeepSeek-Reasonix)** ⭐26,646  
  基于 DeepSeek 的终端 AI 编码 Agent，强调前缀缓存稳定性。
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** ⭐35,916  
  面向 Agent 和生成式 UI 的前端框架，支持 React/Angular/Mobile 等多端。

### 🤖 AI 智能体/工作流（Agent 框架、自动化、多智能体）
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐185,462  
  经典自主 Agent 框架，持续引领通用 AI Agent 开发范式。
- **[OpenHands/OpenHands](https://github.com/OpenHands/OpenHands)** ⭐80,421  
  AI 驱动的软件开发助手，支持代码生成、调试、部署等全流程自动化。
- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** ⭐+328 today  
  为 Claude 提供终端控制、文件搜索与编辑能力的 MCP 服务器，今日新星。
- **[mattpocock/skills](https://github.com/mattpocock/skills)** ⭐+1712 today  
  从 Claude 技能目录中提取的“真实工程师”Agent 技能集合，今日暴增。
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐+1116 today  
  生产级 AI 编码 Agent 技能库，标准化技能文件格式。
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐+1013 today  
  一个代理式技能框架与软件开发方法论，今日大热。
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐92,264  
  多智能体金融交易框架，基于 LLM 的量化决策系统。

### 📦 AI 应用（具体应用产品、垂直场景解决方案）
- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** ⭐+1224 today  
  首个专为 AI Agent 打造的 Office 套件 CLI，支持读写 Word/Excel/PPT，无需 Office 安装。
- **[TencentCloud/TencentDB-Agent-Memory](https://github.com/TencentCloud/TencentDB-Agent-Memory)** ⭐+123 today  
  本地化长期记忆管道，四层渐进式架构，零外部 API，适合 Agent 上下文管理。
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐48,430  
  AI 生产力工作室：智能聊天、自主 Agent、300+ 助手，统一接入前沿 LLM。
- **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** ⭐45,917  
  开源超级 AI 助手 + Agent 框架，支持任务规划、工具调用、记忆与知识演进。
- **[santifer/career-ops](https://github.com/santifer/career-ops)** ⭐59,592  
  AI 求职助手：扫描职位、打分、定制简历、跟踪申请，完全本地运行。
- **[ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis)** ⭐56,567  
  LLM 驱动的多市场股票智能分析系统，支持零成本定时运行。

### 🧠 大模型/训练（模型权重、训练框架、微调工具）
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐212,930  
  伴随用户成长的 Agent 项目，背后强大模型支撑（Hermes 系列），当前最受欢迎 Agent 之一。
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** ⭐196,291  
  经典 ML 框架，持续更新支持最新模型与硬件加速。
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐101,730  
  动态神经网络框架，深度学习研发的主流选择。
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐162,476  
  SOTA 模型定义与训练框架，支持文本/视觉/语音/多模态。
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,184  
  LLM 评测平台，支持 100+ 数据集、主流模型评测。
- **[starpig1129/DATAGEN](https://github.com/starpig1129/DATAGEN)** ⭐1,768  
  AI 多智能体研究助手，自动生成假设、分析数据、撰写报告。

### 🔍 RAG/知识库（向量数据库、检索增强、知识管理）
- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐148,470  
  生产级 Agent 工作流开发平台，内置 RAG 能力。
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐145,021  
  用户友好的 AI 界面，支持 Ollama、OpenAI，集成 RAG 与知识库。
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐84,790  
  领先的开源 RAG 引擎，融合 Agent 能力，为 LLM 提供上下文层。
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐60,592  
  通用 AI Agent 记忆层，支持长期记忆存储与检索。
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐45,178  
  高性能云原生向量数据库，大规模向量 ANN 搜索核心组件。
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐33,138  
  高可扩展向量搜索引擎，支持 AI 驱动的语义搜索。
- **[siyuan-note/siyuan](https://github.com/siyuan-note/siyuan)** ⭐45,040  
  隐私优先、自托管的个人知识管理软件，内置 AI 辅助功能。

---

## 趋势信号分析
今日 GitHub 开源社区最显著的趋势是 **Agent Skill 生态的标准化与工具链爆发**。`agent-skills`、`skills`、`superpowers` 三个项目单日新增 star 合计超过 3800，它们均围绕一个共同理念：将 AI 编码 Agent 的能力封装为可复用、可共享的“技能文件”，类似 VS Code 插件生态。这标志着 Agent 开发从“写提示词”向“组件化工程”演进。

另一个重要信号是**专门化 Agent 工具涌现**：`OfficeCLI` 专攻办公文档操作，`DesktopCommanderMCP` 专攻终端控制，`TencentDB-Agent-Memory` 专攻长期记忆——Agent 能力正被拆解为细颗粒度的 MCP 服务器或 CLI 工具，形成“Agent 即操作系统”的集成模式。

同时，**金融与求职等垂直场景的 LLM 应用**（如 `TradingAgents`、`career-ops`）star 数持续走高，说明社区不再满足于通用聊天，而是聚焦解决具体业务问题。**向量数据库赛道**（Milvus、Qdrant、Weaviate）保持稳定热度，RAG 基础设施仍是刚需。

与近期行业事件关联：Anthropic 发布的 Claude Code 生态刺激了 MCP 和技能标准的发展；DeepSeek 新模型推动 `DeepSeek-Reasonix` 这类专用 Agent 的出现；国产大模型（DeepSeek、GLM、Qwen）的广泛接入（如 ollama 更新）正在重塑开源社区的工具栈选择。

---

## 社区关注热点
- **Agent Skill 标准文件格式**：关注 `addyosmani/agent-skills` 和 `google-labs-code/stitch-skills`，它们正在定义跨平台（Claude Code、Gemini CLI、Codex 等）的技能互操作规范，可能成为 Agent 开发的“npm”。
- **OfficeCLI：AI 办公自动化新范式**：`iOfficeAI/OfficeCLI` 是首个专为 Agent 设计的 Office 读写 CLI，无需图形界面即可操作文档，有望成为办公 Agent 的标配工具。
- **本地长期记忆解决方案**：`TencentDB-Agent-Memory` 和 `mem0ai/mem0` 分别从数据库和通用记忆层角度解决 Agent 上下文持久化问题，是构建稳定 Agent 产品的关键组件。
- **多智能体金融交易框架**：`TauricResearch/TradingAgents` 展示了 LLM 在量化领域的复杂协调能力，star 数快速攀升，值得研究其架构设计。
- **RAG 与向量数据库融合**：`infiniflow/ragflow` 和 `Graphify-Labs/graphify` 将知识图谱与 RAG 结合，后者还能将代码、数据库 schema 纳入图结构，为 Agent 提供更智能的上下文。

---
*本日报由 [agents-radar](https://github.com/D3a-th/agents-radar) 自动生成。*