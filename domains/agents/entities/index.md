# entities

* [AGENTS.md](./agents-md.md) — 仓内给编码代理读的约定文件：对人用 README，对 Agent 用 AGENTS.md；规范站点 agents.md。
* [Claude](./claude.md) — Anthropic 的助手与编码产品线（Claude.ai / Claude Code 等）；官方博客 claude.com/blog。
* [Claude Academy](./claude-academy.md) — Anthropic 官方学院站点：学用 Claude 产品线与 AI Fluency（4D 等）课程。
* [小山学堂](./xiaoshan-xuetang.md) — 米羊科技出品、洛小山主讲的免费 AI 产品课：从大模型原理到 Harness / Agent / MCP，含解剖 Grok Build。
* [Code Wiki](./code-wiki.md) — Google 的 GitHub 仓 Wiki：Gemini 生成架构说明与图，提交后更新；对话以该 wiki 为上下文。
* [FastMCP](./fastmcp.md) — Prefect 维护的 MCP 应用框架：用 Python 建 server/client/交互 Apps，管 schema、校验、传输与认证。
* [GitMCP](./gitmcp.md) — 把任意公开 GitHub 仓库变成 Remote MCP server：换域名为 gitmcp.io，供兼容 MCP 的 AI 工具读取仓库上下文。
* [Grok Bot](./grok-bot.md) — Cursor/xAI 侧长期驻场的工程多智能体产品：人做关键判断，Engineering Bot 带队，Cloud Agent 进仓执行。
* [Grok Build](./grok-build.md) — xAI 的终端编码代理：开源 harness 与 TUI（Rust，Apache-2.0）；可指向自备推理。不是 Grok Bot。
* [Herdr](./herdr.md) — 编码代理的终端运行时：后台 server 持有真实终端，合盖或断网后会话还在；不替换 Claude Code / Pi 等 CLI。
* [LangChain](./langchain.md) — 开源 agent 平台与框架生态（LangChain / LangGraph / deepagents）及 LangSmith 全生命周期工程平台。
* [Model Context Protocol (MCP)](./mcp.md) — 连接 AI 应用与外部系统（数据源、工具、工作流）的开放标准；客户端/服务端生态广泛。
* [mena](./mena.md) — sxwedo 的 local-first CLI：启动编码代理、浏览本地会话、巡检 Skills / MCP / memory，无守护进程与远程账号。
* [MinerU](./mineru.md) — 面向 Agent 和 RAG 的文档解析：PDF / Office / 图片转成 LLM 可读的 Markdown 与 JSON。
* [oh-my-pi](./oh-my-pi.md) — can1357 的 batteries-included 终端编码代理（omp.sh）：Rust 核心，原生 LSP/DAP/Advisor/TTSR/Hashline。
* [Omarchy](./omarchy.md) — DHH 的意见化 Arch Linux 桌面（Hyprland/Quickshell）：把 coding agent CLI 当系统一等公民，配懒加载启动器与系统定制 skill。
* [Pi](./pi.md) — earendil-works 的极简终端编码代理框架（pi.dev）：最小 harness，能力靠扩展与 Skills 组装。
* [Pilot Protocol](./pilot-protocol.md) — 给 Agent 用的组网 overlay：加密点对点隧道、应用商店与 MCP；默认可信才互通。
* [Proof](./proof.md) — Every 的人与 Agent 共写文档编辑器：共享稿、在场、评论、建议，左侧色轨标出谁写了哪一段。
* [Puffo](./puffo.md) — 人与 Agent 的端到端加密群聊：本机 daemon 托管多个 agent，底层仍是 Claude / Codex。
* [Raft](./raft.md) — 人与 Agent 共用频道工作空间：长期身份与记忆，本机 daemon 跑 Claude / Codex 等；不是分布式共识算法。
* [skills.sh](./skills-sh.md) — Vercel 的 Agent Skills 开放目录与 CLI：按安装量浏览技能包，用 npx skills 装进多家编码代理。
* [Trendshift](./trendshift.md) — GitHub 仓库实时动量榜：在上升期捕捉趋势，而非峰值之后；定位为 GitHub Trending 的替代入口。
* [Zread](./zread.md) — 把 GitHub 仓编译成结构化项目 Wiki：架构图、模块说明、文档内问答；地址栏 github.com 换成 zread.ai 即开。
* [Obelisk](./obelisk.md) — 编码代理历史会话 / 子代理 / 工作流可查询
* [Ruflo](./ruflo.md) — 多智能体 swarm 的 meta-harness
* [DeepSeek Harness](./deepseek-harness.md) — DeepSeek 官方 harness：一切皆插件
* [AgentsView](./agentsview.md) — 编码代理会话检索、分析与 token 统计
* [TeamAI CLI](./teamai-cli.md) — 腾讯团队 AI Native CLI
* [TencentDB Agent Memory](./tencentdb-agent-memory.md) — 团队级 Agent 记忆中枢
* [Graphify](./graphify.md) — 代码 / 文档 / SQL / PDF → 可查询知识图谱
* [MemPalace](./mempalace.md) — 开源 AI 记忆系统
* [Hermes Agent](./hermes-agent.md) — Nous Research 开源 Agent：随使用生长
* [Ralph](./ralph.md) — 按 PRD 反复跑直到条目完成的自主循环
* [cc-connect](./cc-connect.md) — 本机编码代理桥接到即时通讯
* [Open Design](./open-design.md) — DeepSeek Harness 设计插件；开源 Claude Design 替代
* [Horizon](./horizon.md) — AI 新闻雷达，中英日报
* [OpenSpec](./openspec.md) — 面向编码助手的规格驱动开发
* [OpenCLI](./opencli.md) — 网站变 CLI，Agent 复用已登录浏览器
* [从零开始构建智能体](./hello-agents.md) — Datawhale Agent 原理与实践教程
* [GitNexus](./gitnexus.md) — 零服务器、客户端代码智能引擎
* [gnhf](./gnhf.md) — 睡前把任务交给 agent 过夜跑
* [CodeGraph](./codegraph.md) — 预索引代码知识图谱，给 Claude Code / Codex / Gemini 用
* [Understand Anything](./understand-anything.md) — 代码 → 可交互知识图谱
* [easy-vibe](./easy-vibe.md) — Datawhale vibe coding 入门课
* [Agentic Design Patterns](./agentic-design-patterns.md) — Gulli 的 Agent 模式书与笔记
* [Trellis](./trellis.md) — Agent harness
* [Langflow](./langflow.md) — 可视化构建并部署 Agent 工作流
* [Agent Zero](./agent-zero.md) — 开源 Agent 框架
* [OpenSquilla](./opensquilla.md) — 同预算更高智能密度的 token 高效 Agent
* [Composio](./composio.md) — Agent 工具包、检索、鉴权与沙箱
* [Distilly](./distilly.md) — 把思维方式蒸馏成可复用 Skills
* [ECC](./ecc.md) — harness 性能优化：skills / instincts / memory / security
* [cc-switch](./cc-switch.md) — Claude Code / Codex / OpenCode / OpenClaw 桌面切换助手
* [Gemini CLI](./gemini-cli.md) — Gemini 官方终端 Agent
* [Crawl4AI](./crawl4ai.md) — 面向 LLM 的开源爬虫
* [llm-universe](./llm-universe.md) — Datawhale 大模型应用开发教程
* [Paseo](./paseo.md) — 桌面 / 手机编排多个编码代理
* [深入理解 AI Agent](./ai-agent-book.md) — 李博杰：Agent 设计原理与工程实践
* [OpenWorker](./openworker.md) — 桌面 AI 同事：交付成品而非聊天
* [OpenMinis](./openminis.md) — 跨平台开源 AI Agent 应用
* [PraisonAI](./praisonai.md) — 编排 24/7 AI 劳动力
* [AI 产品从入门到精通](./learn-ai.md) — 面向 AI 产品经理的培训课
* [Agent-Reach](./agent-reach.md) — 给 Agent 读 / 搜 Twitter、Reddit、YouTube
* [Open Code Review](./open-code-review.md) — 阿里混部代码评审
* [Codex](./codex.md) — OpenAI 终端轻量编码代理
* [Orca](./orca.md) — 并行 agent 舰队的 ADE
* [CLI-Anything](./cli-anything.md) — 让任意软件变成 Agent-native CLI
* [Foundations of LLMs](./foundations-of-llms.md) — 浙大 LLM 基础教材
