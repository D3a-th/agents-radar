# AI Open Source Trends 2026-07-11

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-11 08:08 UTC

---

# AI Open Source Trends Report
**Date**: 2026-07-11  
**Data Sources**: GitHub Trending (19 repos) + AI Topic Search (80 repos, deduplicated)

---

## 1. Today's Highlights

The open-source AI ecosystem is experiencing a decisive pivot from model-centric development to **agent skill orchestration**. The trending list is dominated by "Agent Skills" frameworks (`addyosmani/agent-skills`, `mattpocock/skills`, `obra/superpowers`) that standardize how coding agents like Claude Code, Gemini CLI, and Cursor interact with tools and toolchains. Simultaneously, the **MCP (Model Context Protocol)** server ecosystem is exploding, with projects like `wonderwhy-er/DesktopCommanderMCP` giving agents direct terminal control. A third major signal is the emergence of **AI-native office automation**, with `iOfficeAI/OfficeCLI` surging to +1,224 stars today as the first open-source Office suite built exclusively for AI agents. The topic search reveals that agent frameworks (e.g., `NousResearch/hermes-agent`, `CherryHQ/cherry-studio`) and memory/context layers (`claude-mem`, `mem0`) are the fastest-growing categories by total stars.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure (Frameworks, SDKs, Inference, CLI Tools)

- **[vllm-project/vllm](https://github.com/vllm-project/vllm)** ⭐85,948 — High-throughput LLM inference engine; the de facto standard for serving large models in production.
- **[langchain-ai/langchain](https://github.com/langchain-ai/langchain)** ⭐141,493 — The agent engineering platform; the most widely-used framework for building LLM-powered chains and agents.
- **[firecrawl/firecrawl](https://github.com/firecrawl/firecrawl)** ⭐149,057 — The API for web scraping and interaction at scale, now a critical tool for agentic data retrieval.
- **[huggingface/transformers](https://github.com/huggingface/transformers)** ⭐162,476 — The model-definition framework for state-of-the-art ML models across all modalities.
- **[open-webui/open-webui](https://github.com/open-webui/open-webui)** ⭐145,021 — User-friendly AI interface supporting Ollama and OpenAI APIs; the leading self-hosted chat UI.
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐48,430 — AI productivity studio with smart chat, autonomous agents, and 300+ built-in assistants.

### 🤖 AI Agents / Workflows (Agent Frameworks, Automation, Multi-Agent)

- **[wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP)** ⭐0 (+328 today) — MCP server giving Claude terminal control plus file system search and diff editing; trending rapidly today.
- **[addyosmani/agent-skills](https://github.com/addyosmani/agent-skills)** ⭐0 (+1,116 today) — Production-grade engineering skills for AI coding agents; the most-starred trending repo today.
- **[mattpocock/skills](https://github.com/mattpocock/skills)** ⭐0 (+1,712 today) — Curated skills from the author's `.claude` directory; explosive growth signals demand for agent recipes.
- **[obra/superpowers](https://github.com/obra/superpowers)** ⭐0 (+1,013 today) — An agentic skills framework and software development methodology; defines how agents should structure work.
- **[Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT)** ⭐185,462 — The original autonomous agent framework; remains the highest-starred agent project.
- **[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)** ⭐212,930 — "The agent that grows with you"; the highest-starred agent-specific project on GitHub.
- **[CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio)** ⭐48,430 — AI productivity studio integrating smart chat, agents, and 300+ assistants. A unified agent workbench.
- **[CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit)** ⭐35,916 — The frontend stack for agents and generative UI, supporting React, Angular, and Slack.

### 📦 AI Applications (Specific Apps, Vertical Solutions)

- **[iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI)** ⭐0 (+1,224 today) — First Office suite purpose-built for AI agents; reads, edits, and automates Word/Excel/PowerPoint. Single binary, no Office required.
- **[browser-use/browser-use](https://github.com/browser-use/browser-use)** ⭐104,178 — Makes websites accessible for AI agents for automated online task execution.
- **[TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents)** ⭐92,264 — Multi-agent LLM framework for financial trading; popular for automated quantitative analysis.
- **[zhayujie/CowAgent](https://github.com/zhayujie/CowAgent)** ⭐45,917 — Open-source super AI assistant and agent harness that plans tasks, runs tools, and self-evolves.
- **[hugohe3/ppt-master](https://github.com/hugohe3/ppt-master)** ⭐38,317 — AI generates editable PowerPoint presentations from any document with native shapes and animations.
- **[santifer/career-ops](https://github.com/santifer/career-ops)** ⭐59,592 — Open-source AI job search agent that scans portals, scores listings, and tailors CVs.
- **[activepieces/activepieces](https://github.com/activepieces/activepieces)** ⭐23,210 — AI workflow automation platform with ~400 MCP servers for agents; bridges no-code and agentic automation.

### 🧠 LLMs / Training (Model Weights, Training Frameworks, Fine-Tuning)

- **[ollama/ollama](https://github.com/ollama/ollama)** ⭐175,901 — Run local LLMs (Kimi-K2.6, GLM-5.1, DeepSeek, Qwen, Gemma, and more) with one command.
- **[pytorch/pytorch](https://github.com/pytorch/pytorch)** ⭐101,730 — Tensors and dynamic neural networks; the foundational training framework for most LLMs and multimodal models.
- **[tensorflow/tensorflow](https://github.com/tensorflow/tensorflow)** ⭐196,291 — Open-source ML framework with broad deployment across research and production.
- **[ultralytics/ultralytics](https://github.com/ultralytics/ultralytics)** ⭐59,343 — YOLO26/YOLO11/YOLOv8 for object detection, segmentation, classification, and pose estimation.
- **[open-compass/opencompass](https://github.com/open-compass/opencompass)** ⭐7,184 — LLM evaluation platform supporting 100+ datasets and models (Llama3, Mistral, GPT-4, Qwen, Claude).
- **[Eigenwise/atomic-agents](https://github.com/Eigenwise/atomic-agents)** ⭐6,034 — Building AI agents atomically; a composable approach to agent construction.

### 🔍 RAG / Knowledge (Vector Databases, Retrieval-Augmented Generation, Knowledge Management)

- **[langgenius/dify](https://github.com/langgenius/dify)** ⭐148,470 — Production-ready platform for agentic workflow development; the leading RAG + agent platform.
- **[infiniflow/ragflow](https://github.com/infiniflow/ragflow)** ⭐84,790 — RAG engine fusing retrieval-augmented generation with agent capabilities for a superior context layer.
- **[mem0ai/mem0](https://github.com/mem0ai/mem0)** ⭐60,592 — Universal memory layer for AI agents; persistent context across sessions.
- **[Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm)** ⭐63,097 — Local-first agent experience with full RAG capabilities; "stop renting your intelligence."
- **[milvus-io/milvus](https://github.com/milvus-io/milvus)** ⭐45,178 — High-performance, cloud-native vector database for scalable ANN search.
- **[qdrant/qdrant](https://github.com/qdrant/qdrant)** ⭐33,138 — High-performance vector database with cloud offering; a key infrastructure piece for RAG.
- **[Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)** ⭐82,082 — AI coding assistant skill turning code, SQL schemas, docs, and images into queryable knowledge graphs.
- **[thedotmack/claude-mem](https://github.com/thedotmack/claude-mem)** ⭐86,801 — Persistent context across sessions for every agent; compresses and injects relevant context automatically.

---

## 3. Trend Signal Analysis

The most explosive community attention today centers on **Agent Skills — standardized, sharable capabilities for AI coding agents**. Three of the top five trending repos (`addyosmani/agent-skills`, `mattpocock/skills`, `obra/superpowers`) are dedicated to packaging engineering knowledge into agent-consumable skill files. This signals a fundamental shift: developers no longer build agents from scratch; they **compose agents from pre-built skills**. The concurrent rise of `wonderwhy-er/DesktopCommanderMCP` (a MCP server for terminal control) and `google-labs-code/stitch-skills` (a library of skills for the Stitch MCP server) confirms that the **MCP protocol is becoming the universal standard for agent-tool communication**.

A second major signal is the **emergence of "agent memory" as a first-class infrastructure category**. `TencentCloud/TencentDB-Agent-Memory` (+123 stars today) delivers fully local long-term memory via a 4-tier progressive pipeline, while `mem0` (60k+ stars) and `thedotmack/claude-mem` (86k+ stars) provide universal memory layers. The topic search reveals `cognee`, `memvid`, and `headroom` as new entrants in this space, suggesting the market is fragmenting into specialized memory solutions.

A third notable trend is the **AI-native office automation wave**. `iOfficeAI/OfficeCLI` (+1,224 stars) is the first binary built exclusively for AI agents to manipulate Office documents, while `hugohe3/ppt-master` (38k+ stars) generates editable PowerPoints. This addresses a critical gap: agents can now produce real, editable business documents, not just markdown.

Finally, **vectorless RAG** is emerging as a new direction. `VectifyAI/PageIndex` (33k+ stars) offers "vectorless, reasoning-based RAG," while `Graphify-Labs/graphify` (82k+ stars) builds knowledge graphs from code and documents. These projects challenge the assumption that dense vector embeddings are necessary for retrieval, pointing toward more structured, interpretable memory approaches.

The data also shows strong connections to recent LLM releases: `ollama` now supports Kimi-K2.6, GLM-5.1, and MiniMax, reflecting the rapid pace of model diversity. The presence of `system_prompts_leaks` (55k+ stars) extracting prompts from Claude, GPT-5.x, and Gemini 3.x indicates the community's insatiable appetite for understanding how frontier models are instructed.

---

## 4. Community Hot Spots

- **`addyosmani/agent-skills`** — The highest-trending repo today (+1,116 stars). This defines "production-grade engineering skills" for coding agents. Any developer building agent workflows should study its skill structure and methodology. Likely to become a canonical reference for agent skill architecture.

- **`iOfficeAI/OfficeCLI`** — Surged +1,224 stars today as the first AI-native Office suite. Agents can now manipulate Word, Excel, and PowerPoint programmatically without requiring Office installation. This fills a massive gap in agentic automation for business workflows.

- **`TencentCloud/TencentDB-Agent-Memory`** — A 4-tier progressive memory pipeline with zero external API dependencies. Represents a new design pattern for agent memory that balances cost, latency, and recall accuracy. Worth watching as enterprise-grade memory infrastructure.

- **`obra/superpowers`** — An agentic skills framework that also defines a software development methodology. The combination of a skill format + a process for how agents should use them is unique. Could become the "Agile for AI development."

- **`CherryHQ/cherry-studio`** — 48k+ stars with 300+ built-in assistants. This is the closest thing to an "agent operating system" — a unified interface for multiple LLMs, agents, and workflows. Its rapid growth suggests demand for a single dashboard to manage all AI interactions.

---
*This digest is auto-generated by [agents-radar](https://github.com/D3a-th/agents-radar).*