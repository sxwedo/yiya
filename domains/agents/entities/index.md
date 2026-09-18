# entities

* [Amp](./amp.md) — 前沿 coding agent + 远程 Orb：合盖续跑、门户预览、多端审阅
* [AGENTS.md](./agents-md.md) — 仓内给编码代理读的约定：对人 README，对 Agent AGENTS.md。常驻、宜短；规程进 Skills，硬约束进 hooks/rules。
* [AgentLoop](./agentloop.md) — 阿里云 Agent 可观测与经验自进化：Trace→Trajectory→经验库，运行时召回。不改模型权重；单位是成功任务成本。
* [Artificial Analysis](./artificial-analysis.md) — 独立模型与 API 评测：质量、价格、速度、延迟；含 Coding Agents 榜。外探源，不是 harness。
* [agent-device](./agent-device.md) — 给编码代理的真机反馈环：CLI / MCP / Node API；读无障碍树验证 App，不靠截图硬猜。
* [Agent Skills](./agent-skills.md) — 开放标准：用 SKILL.md 文件夹把规程、脚本与资源按需加载给 Agent；Anthropic 提出，跨多家 harness。
* [Claude Tag](./claude-tag.md) — Anthropic 频道侧 Agent：跨轮记忆、自然语言日程、工作区身份与 MCP。CI on-call 用它当第一响应，不是代某个用户行事。
* [Claude](./claude.md) — Anthropic 的助手与编码产品线（Claude.ai / Claude Code 等）；官方博客 claude.com/blog。
* [Claude Academy](./claude-academy.md) — Anthropic 官方学院：按问题学用 AI，不按功能清单。4D 流畅度、可迁移心态；免费开放，产品本体仍是 Claude。
* [小山学堂](./xiaoshan-xuetang.md) — 米羊科技出品、洛小山主讲的免费 AI 产品课：从大模型原理到 Harness / Agent / MCP，含解剖 Grok Build。
* [Code Wiki](./code-wiki.md) — Google 的 GitHub 仓 Wiki：Gemini 生成架构说明与图，提交后更新；对话以该 wiki 为上下文。
* [FastMCP](./fastmcp.md) — Prefect 维护的 MCP 应用框架：用 Python 建 server/client/交互 Apps，管 schema、校验、传输与认证。
* [GitMCP](./gitmcp.md) — 把任意公开 GitHub 仓库变成 Remote MCP server：换域名为 gitmcp.io，供兼容 MCP 的 AI 工具读取仓库上下文。
* [Grok Bot](./grok-bot.md) — Cursor/xAI 侧长期驻场的工程多智能体产品：人做关键判断，Engineering Bot 带队，Cloud Agent 进仓执行。
* [Grok Build](./grok-build.md) — xAI 终端编码代理：开源的是 harness 与 TUI（Rust，Apache-2.0），不是对话模型权重。可自备推理。不是 Grok Bot。
* [Herdr](./herdr.md) — 编码代理的终端运行时：后台 server 持有真实终端，合盖或断网后会话还在；不替换 Claude Code / Pi 等 CLI。
* [LangChain](./langchain.md) — 开源 agent 平台与框架生态（LangChain / LangGraph / deepagents）及 LangSmith 全生命周期工程平台。
* [Model Context Protocol (MCP)](./mcp.md) — 连接 AI 应用与外部系统（数据源、工具、工作流）的开放标准；客户端/服务端生态广泛。
* [mena](./mena.md) — sxwedo 的 local-first CLI：启动编码代理、浏览本地会话、巡检 Skills / MCP / memory，无守护进程与远程账号。
* [MinerU](./mineru.md) — 面向 Agent 和 RAG 的文档解析：PDF / Office / 图片转成 LLM 可读的 Markdown 与 JSON。
* [oh-my-pi](./oh-my-pi.md) — can1357 的 batteries-included 终端编码代理（omp.sh）：Rust 核心，原生 LSP/DAP/Advisor/TTSR/Hashline。要极简请用 Pi。
* [Omarchy](./omarchy.md) — DHH 的意见化 Arch Linux 桌面（Hyprland/Quickshell）：把 coding agent CLI 当系统一等公民，配懒加载启动器与系统定制 skill。
* [Pi](./pi.md) — earendil-works 的极简终端编码代理框架（pi.dev）：最小 harness，能力靠扩展与 Skills 组装。
* [pi-crew](./pi-crew.md) — Pi 扩展：非阻塞并行子代理；worktree 隔离，作者声明非 hardened。
* [pstack](./pstack.md) — poteto 的 Cursor 技能包：验证闭环（control-app CLI）当基础设施；计划用原型和 /architect 用代码做，不信抽象 Plan Mode。
* [Pilot Protocol](./pilot-protocol.md) — 给 Agent 用的组网 overlay：加密点对点隧道、应用商店与 MCP；默认可信才互通。
* [Proof](./proof.md) — Every 的人与 Agent 共写文档编辑器：共享稿、在场、评论、建议，左侧色轨标出谁写了哪一段。
* [Puffo](./puffo.md) — 人与 Agent 的端到端加密群聊：本机 daemon 托管多个 agent，底层仍是 Claude / Codex。
* [Raft](./raft.md) — 人与 Agent 共用频道工作空间：长期身份与记忆，本机 daemon 跑 Claude / Codex 等；不是分布式共识算法。
* [OpenViking](./openviking.md) — 字节开源 Agent 上下文库。经验记忆：Session→Trajectory→Experience；做过≠会做。
* [OpenViking](./openviking.md) — 字节开源 Agent 上下文库。经验记忆：Session→Trajectory→Experience；做过≠会做。
* [OpenCode](./opencode.md) — 开源编码 Agent 运行时：Agent Profile 装身份，Session Events 留可重建轨迹；多客户端共用同一服务。状态工程更重。
* [skills.sh](./skills-sh.md) — Vercel 的 Agent Skills 开放目录与 CLI：按安装量浏览技能包，用 npx skills 装进多家编码代理。
* [TLS AgentLoop](./tls-agentloop.md) — 火山引擎 TLS：Session/Trace 里原位看图；媒体进 TOS，Trace 只留引用。不是阿里云 AgentLoop。
* [Awesome Jev](./awesome-jev.md) — 已有 Key 的 Jev 学习站：四句判断。库里只有入口。
* [Jev](./jev.md) — TypeSafe 旗舰 System One：state + Choice/Score/Noul → 结构化决定，不生成长文。
* [Jev Ultrafast](./jev-ultrafast.md) — Browser Use × TypeSafe：动态动作空间；Jev 选操作和元素。库里只有入口。
* [TypeSafe AI](./typesafe-ai.md) — AI lab：软件内决策基建；首页点名 Jev。库里只有入口。
* [Trendshift](./trendshift.md) — GitHub 仓库实时动量榜：在上升期捕捉趋势，而非峰值之后；定位为 GitHub Trending 的替代入口。
* [Zread](./zread.md) — 把 GitHub 仓编译成结构化项目 Wiki：架构图、模块说明、文档内问答；地址栏 github.com 换成 zread.ai 即开。
* [Obelisk](./obelisk.md) — 编码代理历史会话 / 子代理 / 工作流可查询
* [Ruflo](./ruflo.md) — 多智能体 swarm 的 meta-harness
* [DataFlow-Harness](./dataflow-harness.md) — 北大 OpenDCAI：给 DataFlow 加 Harness。Agent 用 MCP 改 DAG（Request-Validate-Commit），Skills 管算子怎么连；输出可编辑的平台原生 Pipeline。
* [DeepSeek Harness](./deepseek-harness.md) — DeepSeek 开源 Agent 组装框架：Agent = Model + Harness；Everything is a Plugin。Developer Preview，会破兼容。
* [AgentsView](./agentsview.md) — 编码代理会话检索、分析与 token 统计
* [TeamAI CLI](./teamai-cli.md) — 腾讯团队 AI Native CLI
* [TencentDB Agent Memory](./tencentdb-agent-memory.md) — 团队级 Agent 记忆中枢
* [Graphify](./graphify.md) — 代码 / 文档 / SQL / PDF → 可查询知识图谱
* [MemPalace](./mempalace.md) — 开源 AI 记忆系统
* [Hermes Agent](./hermes-agent.md) — Nous Research 开源 Agent：前台做完这次，后台把经历收成 Memory 与 Skills；问第二次少走弯路，不是把聊天当记忆。
* [Ralph](./ralph.md) — 按 PRD 反复跑直到条目完成的自主循环
* [cc-connect](./cc-connect.md) — 本机编码代理桥接到即时通讯
* [Horizon](./horizon.md) — AI 新闻雷达，中英日报
* [OpenSpec](./openspec.md) — 面向编码助手的规格驱动开发
* [OpenCLI](./opencli.md) — 网站变 CLI，Agent 复用已登录浏览器
* [从零开始构建智能体](./hello-agents.md) — Datawhale Agent 原理与实践教程
* [GitNexus](./gitnexus.md) — 零服务器、客户端代码智能引擎
* [gnhf](./gnhf.md) — 睡前把任务交给 agent 过夜跑
* [CodeGraph](./codegraph.md) — 预索引代码知识图谱，给 Claude Code / Codex / Gemini 用
* [Understand Anything](./understand-anything.md) — 代码 → 可交互知识图谱
* [easy-vibe](./easy-vibe.md) — Datawhale vibe coding 入门课
* [Agentic Design Patterns](./agentic-design-patterns.md) — Antonio Gullí（Google）Agent 模式书：21 种模式，Level 0 不是 Agent。本库有笔记仓书签 + 一篇读书笔记，未灌全书。
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
* [SearchCLI](./searchcli.md) — 火山引擎开源：Agent 驱动搜索自迭代。Skills 出策略，CLI 跑可复现实验，SPA 分配评测预算；人不让它直接改线上。
* [llm-universe](./llm-universe.md) — Datawhale 大模型应用开发教程
* [Paseo](./paseo.md) — 桌面 / 手机编排多个编码代理
* [深入理解 AI Agent](./ai-agent-book.md) — 李博杰开源书：Agent 设计原理与工程实践。本库只收书站/仓书签，未灌全书。
* [深入理解 AI Infra](./ai-infra-book.md) — 李博杰：量化 AI Infra 与系统设计；ai-agent-book 姊妹篇
* [OpenWorker](./openworker.md) — 桌面 AI 同事：交付成品而非聊天
* [OpenMinis](./openminis.md) — 跨平台开源 AI Agent 应用
* [PraisonAI](./praisonai.md) — 编排 24/7 AI 劳动力
* [AI 产品从入门到精通](./learn-ai.md) — 面向 AI 产品经理的培训课
* [Agent-Reach](./agent-reach.md) — 给 Agent 读 / 搜 Twitter、Reddit、YouTube
* [Open Code Review](./open-code-review.md) — 阿里混部代码评审
* [Codex](./codex.md) — OpenAI 编码 Agent：Approval + Sandbox 两道边界；Thread/Turn/Item + Thread Manager 管长任务。选可监督可恢复，不选最轻 Loop。
* [Orca](./orca.md) — 并行 agent 舰队的 ADE
* [CLI-Anything](./cli-anything.md) — 让任意软件变成 Agent-native CLI
* [Foundations of LLMs](./foundations-of-llms.md) — 浙大 LLM 基础教材
* [Termany](./termany.md) — Agent-native 终端工作区
* [OtoDock](./oto-dock.md) — 自托管公司 OS：部门里跑 Claude Code / Codex，多人共用同一批 agent。
* [AI Coding Dictionary](./ai-coding-dictionary.md) — AI 编程行话白话词典；词条不拆库内页
* [AI Hero](./ai-hero.md) — Matt Pocock：AI 工程课程与教程站；词典见 AI Coding Dictionary
* [AI Job Search](./ai-job-search.md) — 本机 Claude Code 求职框架：评岗、改 CV、求职信与面试准备
* [Agent Orchestrator](./agent-orchestrator.md) — 本机桌面编排 coding agent 舰队：一任务一 worker、独立 worktree，看板跟 CI / PR / 评审。
* [i-have-adhd](./i-have-adhd.md) — Coding agent Skill：先给下一步、步骤编号，禁止把答案埋进长文。
* [Archify](./archify.md) — Agent Skill：代码或系统描述 → 类型化 JSON IR，再确定性编译成可交互架构图。
