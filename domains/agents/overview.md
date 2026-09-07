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

**收**：Agent 运行时与 harness、记忆/评测/检索模式、面向 Agent/RAG 的文档解析、具名编码代理产品（如 Pi、oh-my-pi、Grok Bot、Grok Build）、MCP 协议及其上的 server/框架、仓内常驻约定（AGENTS.md）、Agent Skills 目录与安装 CLI（skills.sh）、GitHub 仓的可读化（MCP server、生成项目 Wiki）、agent 运行面（桌面/本机壳、终端会话运行时）、人与 Agent 共写文档编辑器、人机频道工作空间、Agent 组网 overlay、官方学院、多智能体协作与治理。

**不收**：纯数仓口径/Ontology 建设细节（见 `engineering`）；跨域权威实体升格后放 `shared/entities`。外探源（如 Trendshift）可建 Entity，不当作成品 harness。

## 本域实体

| Entity | 一句话 |
|--------|--------|
| [AGENTS.md](./entities/agents-md.md) | 仓内给 Agent 读的约定文件（规范：agents.md） |
| [Claude](./entities/claude.md) | Anthropic 助手与编码产品线；博客 claude.com/blog |
| [Claude Academy](./entities/claude-academy.md) | Anthropic 官方学院：学用 Claude 与 AI Fluency |
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
| [Raft](./entities/raft.md) | 人与 Agent 共用频道工作空间；本机 daemon 跑各家运行时 |
| [skills.sh](./entities/skills-sh.md) | Agent Skills 开放目录与 `npx skills` 安装 CLI |
| [Zread](./entities/zread.md) | GitHub 仓 → 结构化项目 Wiki（github.com → zread.ai） |

### 外探源

| Entity | 一句话 |
|--------|--------|
| [Trendshift](./entities/trendshift.md) | GitHub 仓库实时动量榜，上升期捕捉趋势；不是 agent 产品 |

（具名产品/框架入库时在此追加；跨域权威可升 `shared/entities`。）

## 怎么逛

1. 先看 `entities/`（产品/框架）与类型 `index.md`
2. 再看 `concepts/`（模式）与 `references/`（来源）
