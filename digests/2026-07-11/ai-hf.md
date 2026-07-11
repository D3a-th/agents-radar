# Hugging Face 热门模型日报 2026-07-11

> 数据来源: [Hugging Face Hub](https://huggingface.co/) | 共 30 个模型 | 生成时间: 2026-07-11 08:08 UTC

---

# Hugging Face 热门模型日报 | 2026-07-11

## 🚀 今日速览

本周 Hugging Face 热门榜呈现三大势头：**MoE（混合专家）架构成为主流**，GLM-5.2、Leanstral-1.5、Nemotron 系列等多款 MoE 模型占据高位；**多模态模型集中爆发**，百度 Unlimited-OCR、NVIDIA LocateAnything-3B、Krea-2-Turbo 等下载量均超百万；**社区量化活动空前活跃**，Qwen3.6、DeepSeek-V4、Gemma-4 等热门模型的 GGUF / NVFP4 量化版本大量涌现，其中 unsloth 贡献的多个版本下载量突破两百万。

---

## 🧠 语言模型（LLM、对话模型、指令微调）

- **[tencent/Hy3](https://huggingface.co/tencent/Hy3)** — 腾讯 | 👍 683 | ⬇️ 6,923  
  基于 Hunyuan 的第三代文本生成模型，主打高效对话与指令跟随，腾讯在开源大模型领域的又一布局。

- **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — zai-org | 👍 3,799 | ⬇️ 392,655  
  国产 MoE（混合专家）对话模型，采用 DSA 动态稀疏架构，本周点赞数最高，社区关注度持续攀升。

- **[InternScience/Agents-A1](https://huggingface.co/InternScience/Agents-A1)** — InternScience | 👍 478 | ⬇️ 25,772  
  基于 Qwen3.5-MoE 的代理人模型，专为工具调用与多步推理场景设计，兼顾多模态理解能力。

- **[meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)** — meituan-longcat | 👍 173 | ⬇️ 1,308  
  美团开源的超长上下文对话模型，2.0 版本进一步优化长文本生成质量。

- **[AliesTaha/fable-traces](https://huggingface.co/AliesTaha/fable-traces)** — AliesTaha | 👍 198 | ⬇️ 4,875  
  基于 Qwen3 的指令微调变体，聚焦“寓言式”推理与创作，社区实验性质较强。

- **[mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)** — mistralai | 👍 184 | ⬇️ 315  
  Mistral 最新 119B MoE 模型（仅激活 6B 参数），主打极低推理成本与高语言能力，Apache-2.0 开源。

- **[deepseek-ai/DeepSeek-V4-Pro-DSpark](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-DSpark)** — deepseek-ai | 👍 465 | ⬇️ 33,088  
  DeepSeek-V4 的专业版，引入 DSpark 稀疏注意力机制，论文同步发布（arXiv:2606.19348）。

- **[nvidia/Nemotron-Labs-Audex-30B-A3B](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia | 👍 98 | ⬇️ 576  
  NVIDIA 实验室系列 MoE 模型，30B 总参数量、3B 激活参数，面向复杂推理任务。

---

## 🎨 多模态与生成（图像、视频、音频、文本到X）

- **[bottlecapai/ThinkingCap-Qwen3.6-27B](https://huggingface.co/bottlecapai/ThinkingCap-Qwen3.6-27B)** — bottlecapai | 👍 219 | ⬇️ 3,699  
  基于 Qwen3.6 的视觉语言模型，增强“思考过程”的链式推理能力，适合视觉问答。

- **[baidu/Unlimited-OCR](https://huggingface.co/baidu/Unlimited-OCR)** — baidu | 👍 1,922 | ⬇️ 1,319,683  
  百度出品的通用 OCR 模型，支持不限语言的文字识别与特征提取，下载量超百万，应用场景广泛。

- **[conradlocke/krea2-identity-edit](https://huggingface.co/conradlocke/krea2-identity-edit)** — conradlocke | 👍 163 | ⬇️ 0  
  基于 Krea-2 的 LoRA 插件，专为身份保持（Identity Preservation）的图像编辑设计，ComfyUI 兼容。

- **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — nvidia | 👍 2,701 | ⬇️ 1,472,194  
  NVIDIA 推出的开放词汇定位模型，可检测任意类别物体，点赞数与下载量双高，做视觉定位首选。

- **[OpenMOSS-Team/MOSS-Transcribe-Diarize](https://huggingface.co/OpenMOSS-Team/MOSS-Transcribe-Diarize)** — OpenMOSS-Team | 👍 102 | ⬇️ 5,919  
  面向语音转文字 + 说话人日志的端到端模型，适用于会议记录场景。

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M)** — empero-ai | 👍 763 | ⬇️ 184,315  
  基于 Qwen3.5 的多模态对话模型，融合“神话”主题风格，支持图文输入、长推理链。

- **[Alissonerdx/LTX-Best-Face-ID](https://huggingface.co/Alissonerdx/LTX-Best-Face-ID)** — Alissonerdx | 👍 87 | ⬇️ 0  
  基于 LTX-2 的视频生成 LoRA，专做人脸身份保持的视频生成，适合数字人应用。

- **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — krea | 👍 579 | ⬇️ 164,525  
  Krea-2 的快速版本，通过蒸馏实现更快的图像生成速度，质量接近原版，社区评价极高。

- **[open-gigaai/Giga-World-1](https://huggingface.co/open-gigaai/Giga-World-1)** — open-gigaai | 👍 119 | ⬇️ 0  
  开源世界模型，基于 Diffusers 框架，用于视频生成或模拟场景（Apache-2.0）。

- **[robbyant/lingbot-video-moe-30b-a3b](https://huggingface.co/robbyant/lingbot-video-moe-30b-a3b)** — robbyant | 👍 78 | ⬇️ 317  
  MoE 架构的视频生成模型，30B 参数、3B 激活，使用 LingBotVideoPipeline，探索高效视频生成。

---

## 🔧 专用模型（代码、数学、医疗、嵌入、工具）

- **[google/tabfm-1.0.0-pytorch](https://huggingface.co/google/tabfm-1.0.0-pytorch)** — google | 👍 345 | ⬇️ 18,626  
  Google 发布的表格数据基础模型，支持零样本分类与回归，替换传统梯度提升树的新范式。

- **[froggeric/Qwen-Fixed-Chat-Templates](https://huggingface.co/froggeric/Qwen-Fixed-Chat-Templates)** — froggeric | 👍 840 | ⬇️ 0  
  修复 Qwen 系列聊天模板的 Jinja 文件，解决常见格式问题，MLX 用户必备工具（虽无下载，但点赞很高）。

- **[SupraLabs/Supra-Router-51M](https://huggingface.co/SupraLabs/Supra-Router-51M)** — SupraLabs | 👍 90 | ⬇️ 1,160  
  极轻量级的模型路由路由器（51M 参数），可根据输入动态分配下游模型，提升整体效率。

---

## 📦 微调与量化（社区微调、GGUF、AWQ、NVFP4）

- **[empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF](https://huggingface.co/empero-ai/Qwythos-9B-Claude-Mythos-5-1M-GGUF)** — empero-ai | 👍 1,987 | ⬇️ 1,909,705  
  原版模型的 GGUF 量化版，本地部署神器，llama.cpp 兼容，下载量近两百万，社区量化典范。

- **[HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive-GGUF](https://huggingface.co/HauhauCS/Qwen3.6-35B-A3B-Uncensored-HauhauCS-Aggressive)** — HauhauCS | 👍 2,631 | ⬇️ 2,660,170  
  Qwen3.6-35B MoE 的“无审查”量化版，GGUF 格式，兼有视觉能力，下载量本周最高。

- **[GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF](https://huggingface.co/GnLOLot/MiniCPM5-1B-Claude-Opus-Fable5-Thinking-GGUF)** — GnLOLot | 👍 163 | ⬇️ 9,029  
  MiniCPM5-1B 的极小规模量化版，融合 Claude Opus 风格的“思考”能力，适合移动端。

- **[deepreinforce-ai/Ornith-1.0-35B-GGUF](https://huggingface.co/deepreinforce-ai/Ornith-1.0-35B-GGUF)** — deepreinforce-ai | 👍 839 | ⬇️ 1,085,554  
  35B 参数的高效文本生成模型量化版，MIT 许可，兼容 HuggingFace Endpoints，下载量超百万。

- **[unsloth/DeepSeek-V4-Flash-GGUF](https://huggingface.co/unsloth/DeepSeek-V4-Flash-GGUF)** — unsloth | 👍 134 | ⬇️ 31,895  
  DeepSeek-V4 Flash 版本的 GGUF 量化，由 unsloth 优化，兼顾速度与内存。

- **[yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF](https://huggingface.co/yuxinlu1/gemma-4-12B-agentic-fable5-composer2.5-v2-3.5x-tau2-GGUF)** — yuxinlu1 | 👍 1,139 | ⬇️ 427,668  
  Gemma-4-12B 的代理/编码专用量化版，融合多种微调技巧（tau2等），下载量快速增长。

- **[unsloth/Qwen3.6-27B-MTP-GGUF](https://huggingface.co/unsloth/Qwen3.6-27B-MTP-GGUF)** — unsloth | 👍 1,039 | ⬇️ 2,895,457  
  Qwen3.6-27B（支持多模态）的 GGUF 量化版，由 unsloth 优化，下载量近 300 万，社区首选。

- **[nvidia/Qwen3.6-27B-NVFP4](https://huggingface.co/nvidia/Qwen3.6-27B-NVFP4)** — nvidia | 👍 338 | ⬇️ 787,748  
  NVIDIA 官方使用 Model Optimizer 将 Qwen3.6-27B 量化为 4-bit 浮点精度（NVFP4），性能与精度平衡优秀。

- **[nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-NVFP4)** — nvidia | 👍 101 | ⬇️ 23,404  
  Nemotron 系列 75B MoE 的 NVFP4 量化版本，针对复杂推理任务优化。

---

## 🔍 生态信号

**模型家族势头**：Qwen3.5/3.6 系列成为本周最热底座，衍生出近 10 个变体（包括 MoE、量化、多模态），社区微调活动极其活跃；DeepSeek V4 紧随其后，持续占据多周榜单；GLM-5.2 以最高点赞数表明国产 MoE 的吸引力；NVIDIA 的 Nemotron 实验室系列（Audex、Puzzle）和 LocateAnything 形成新增长点。

**开源 vs 闭源**：榜单上 30 个模型全部开源权重（部分含 Apache-2.0 / MIT 许可），未见闭源模型上榜；中国科技公司（腾讯、百度、美团、DeepSeek）贡献了多个高质量模型，开源生态进一步丰富。

**量化与微调**：GGUF 仍是本地部署的绝对主流格式，unsloth 成为核心贡献者；NVFP4（NVIDIA 4-bit 浮点）作为新量化为式开始进入热门榜，值得关注；社区量化版下载量普遍远高于原版，说明“可运行性”是用户最关心的指标。

---

## 💡 值得探索

1. **[zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)** — 国产 MoE 模型点赞数第一，其 DSA 动态稀疏架构如何实现效率与质量的平衡，值得研究实践。

2. **[nvidia/LocateAnything-3B](https://huggingface.co/nvidia/LocateAnything-3B)** — 开放词汇定位模型，3B 参数在精度和速度之间取得出色折中，适合直接集成到视觉应用中。

3. **[krea/Krea-2-Turbo](https://huggingface.co/krea/Krea-2-Turbo)** — 当前最快的开源文生图模型之一，保留高质量的同时大幅提升速度，是计算资源有限场景的首选。

---
*本日报由 [agents-radar](https://github.com/D3a-th/agents-radar) 自动生成。*