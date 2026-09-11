---
type: Overview
title: "Agent 与 harness"
description: "Agent 运行时、harness、MCP 生态与编码代理产品；具名产品见 entities。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T18:00:00Z }
sources: []
---

# Scope

**收**：Agent 运行时与 harness、记忆/评测/检索模式、面向 Agent/RAG 的文档解析、具名编码代理产品（如 Pi、oh-my-pi、Grok Bot、Grok Build、OpenCode）、MCP 协议及其上的 server/框架、仓内常驻约定（AGENTS.md）、Agent Skills 格式与目录（skills.sh）、GitHub 仓的可读化（MCP server、生成项目 Wiki）、agent 运行面（桌面/本机壳、终端会话运行时）、人与 Agent 共写文档编辑器、人机频道工作空间、Agent 组网 overlay、学院与培训课程、多智能体协作与治理。

**不收**：纯数仓口径/Ontology 建设细节（见 `engineering`）；人读界面、排版品味与去 slop 的视觉纪律（见 `design`；Agent 如何调 UI 的工作流仍可留本域）；跨域权威实体升格后放 `shared/entities`。外探源（如 Trendshift）可建 Entity，不当作成品 harness。

## 本域实体

| Entity | 一句话 |
| -------- | -------- |
| [AGENTS.md](./entities/agents-md.md) | 仓内给 Agent 读的约定文件（规范：agents.md） |
| [Agent Skills](./entities/agent-skills.md) | SKILL.md 开放格式：按需加载规程与脚本 |
| [Claude](./entities/claude.md) | Anthropic 助手与编码产品线；博客 claude.com/blog |
| [Claude Academy](./entities/claude-academy.md) | Anthropic 官方学院：学用 Claude 与 AI Fluency |
| [小山学堂](./entities/xiaoshan-xuetang.md) | 免费 AI 产品课：Harness / Agent / MCP；含解剖 Grok Build |
| [Code Wiki](./entities/code-wiki.md) | Google：Gemini 为 GitHub 仓生成并随提交更新的 Wiki |
| [FastMCP](./entities/fastmcp.md) | Prefect 的 MCP 应用框架：Python server/client/Apps |
| [GitMCP](./entities/gitmcp.md) | 公开 GitHub 仓 → Remote MCP（gitmcp.io） |
| [Grok Bot](./entities/grok-bot.md) | 工程多智能体产品：Engineering Bot 带队 + Cloud Agent 进仓 |
| [Grok Build](./entities/grok-build.md) | 开源终端编码代理：harness + TUI；不是 Grok Bot |
| [Herdr](./entities/herdr.md) | 编码代理终端运行时：后台持有会话，合盖不断 |
| [LangChain](./entities/langchain.md) | 开源 agent 框架生态 + LangSmith 工程平台 |
| [MCP](./entities/mcp.md) | 连接 AI 应用与外部系统的开放标准 |
| [mena](./entities/mena.md) | local-first 编码代理 CLI：启动/会话/Skills/MCP 巡检 |
| [MinerU](./entities/mineru.md) | 文档解析喂 Agent/RAG：PDF/Office → Markdown/JSON |
| [oh-my-pi](./entities/oh-my-pi.md) | batteries-included 终端编码代理（omp.sh），Rust 核心 |
| [Omarchy](./entities/omarchy.md) | DHH 的 Arch 桌面：coding agent CLI 当系统一等公民 |
| [Pi](./entities/pi.md) | earendil-works 极简终端编码代理框架（pi.dev） |
| [Pilot Protocol](./entities/pilot-protocol.md) | Agent 组网 overlay：加密 P2P、应用商店、MCP |
| [Proof](./entities/proof.md) | 人与 Agent 共写文档：在场、评论、建议、出处轨 |
| [Puffo](./entities/puffo.md) | 人与 Agent 端到端加密群聊；本机 daemon 跑 Claude / Codex |
| [Raft](./entities/raft.md) | 人与 Agent 共用频道工作空间；本机 daemon 跑各家运行时 |
| [OpenCode](./entities/opencode.md) | 开源编码运行时：Profile + Session Events，多客户端共用 |
| [skills.sh](./entities/skills-sh.md) | Agent Skills 开放目录与 `npx skills` 安装 CLI |
| [Zread](./entities/zread.md) | GitHub 仓 → 结构化项目 Wiki（github.com → zread.ai） |
| [Obelisk](./entities/obelisk.md) | 编码代理历史会话 / 子代理 / 工作流可查询 |
| [Ruflo](./entities/ruflo.md) | 多智能体 swarm 的 meta-harness |
| [DeepSeek Harness](./entities/deepseek-harness.md) | DeepSeek 官方 harness：一切皆插件 |
| [AgentsView](./entities/agentsview.md) | 编码代理会话检索、分析与 token 统计 |
| [TeamAI CLI](./entities/teamai-cli.md) | 腾讯团队 AI Native CLI |
| [TencentDB Agent Memory](./entities/tencentdb-agent-memory.md) | 团队级 Agent 记忆中枢 |
| [Graphify](./entities/graphify.md) | 代码 / 文档 / SQL / PDF → 可查询知识图谱 |
| [MemPalace](./entities/mempalace.md) | 开源 AI 记忆系统 |
| [Hermes Agent](./entities/hermes-agent.md) | Nous Research 开源 Agent：随使用生长 |
| [Ralph](./entities/ralph.md) | 按 PRD 反复跑直到条目完成的自主循环 |
| [cc-connect](./entities/cc-connect.md) | 本机编码代理桥接到即时通讯 |
| [Horizon](./entities/horizon.md) | AI 新闻雷达，中英日报 |
| [OpenSpec](./entities/openspec.md) | 面向编码助手的规格驱动开发 |
| [OpenCLI](./entities/opencli.md) | 网站变 CLI，Agent 复用已登录浏览器 |
| [从零开始构建智能体](./entities/hello-agents.md) | Datawhale Agent 原理与实践教程 |
| [GitNexus](./entities/gitnexus.md) | 零服务器、客户端代码智能引擎 |
| [gnhf](./entities/gnhf.md) | 睡前把任务交给 agent 过夜跑 |
| [CodeGraph](./entities/codegraph.md) | 预索引代码知识图谱，给 Claude Code / Codex / Gemini 用 |
| [Understand Anything](./entities/understand-anything.md) | 代码 → 可交互知识图谱 |
| [easy-vibe](./entities/easy-vibe.md) | Datawhale vibe coding 入门课 |
| [Agentic Design Patterns](./entities/agentic-design-patterns.md) | Gulli 的 Agent 模式书与笔记 |
| [Trellis](./entities/trellis.md) | Agent harness |
| [Langflow](./entities/langflow.md) | 可视化构建并部署 Agent 工作流 |
| [Agent Zero](./entities/agent-zero.md) | 开源 Agent 框架 |
| [OpenSquilla](./entities/opensquilla.md) | 同预算更高智能密度的 token 高效 Agent |
| [Composio](./entities/composio.md) | Agent 工具包、检索、鉴权与沙箱 |
| [Distilly](./entities/distilly.md) | 把思维方式蒸馏成可复用 Skills |
| [ECC](./entities/ecc.md) | harness 性能优化：skills / instincts / memory / security |
| [cc-switch](./entities/cc-switch.md) | Claude Code / Codex / OpenCode / OpenClaw 桌面切换助手 |
| [Gemini CLI](./entities/gemini-cli.md) | Gemini 官方终端 Agent |
| [Crawl4AI](./entities/crawl4ai.md) | 面向 LLM 的开源爬虫 |
| [SearchCLI](./entities/searchcli.md) | 火山引擎：Agent 驱动搜索自迭代（实验闭环，不直接改线上） |
| [llm-universe](./entities/llm-universe.md) | Datawhale 大模型应用开发教程 |
| [Paseo](./entities/paseo.md) | 桌面 / 手机编排多个编码代理 |
| [深入理解 AI Agent](./entities/ai-agent-book.md) | 李博杰：Agent 设计原理与工程实践 |
| [OpenWorker](./entities/openworker.md) | 桌面 AI 同事：交付成品而非聊天 |
| [OpenMinis](./entities/openminis.md) | 跨平台开源 AI Agent 应用 |
| [PraisonAI](./entities/praisonai.md) | 编排 24/7 AI 劳动力 |
| [AI 产品从入门到精通](./entities/learn-ai.md) | 面向 AI 产品经理的培训课 |
| [Agent-Reach](./entities/agent-reach.md) | 给 Agent 读 / 搜 Twitter、Reddit、YouTube |
| [Open Code Review](./entities/open-code-review.md) | 阿里混部代码评审 |
| [Codex](./entities/codex.md) | OpenAI 终端轻量编码代理 |
| [Orca](./entities/orca.md) | 并行 agent 舰队的 ADE |
| [CLI-Anything](./entities/cli-anything.md) | 让任意软件变成 Agent-native CLI |
| [Foundations of LLMs](./entities/foundations-of-llms.md) | 浙大 LLM 基础教材 |
| [OtoDock](./entities/oto-dock.md) | 自托管公司 OS：部门里跑 Claude Code / Codex |
| [Agent Orchestrator](./entities/agent-orchestrator.md) | 本机桌面编排 coding agent 舰队 |
| [i-have-adhd](./entities/i-have-adhd.md) | Skill：先给下一步，禁止把答案埋进长文 |
| [Archify](./entities/archify.md) | Skill：描述/代码 → 可交互架构图 |

### 外探源

| Entity | 一句话 |
|--------|--------|
| [Trendshift](./entities/trendshift.md) | GitHub 仓库实时动量榜，上升期捕捉趋势；不是 agent 产品 |
| [Artificial Analysis](./entities/artificial-analysis.md) | 独立模型与 API 评测（质量/价格/速度）；含 Coding Agents 榜 |

（具名产品/框架入库时在此追加；跨域权威可升 `shared/entities`。）

## 怎么逛

1. 先看 `entities/`（产品/框架）与类型 `index.md`
2. 再看 `concepts/`（模式）与 `references/`（来源）
