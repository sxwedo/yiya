---
type: Entity
title: "Model Context Protocol (MCP)"
description: "连接 AI 应用与外部系统（数据源、工具、工作流）的开放标准；客户端/服务端生态广泛。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:25:00Z }
related:
  - claude-tag
  - software-factory-cost
  - fastmcp
  - gitmcp
  - langchain
  - mineru
  - proof
  - pilot-protocol
  - mena
  - pi
  - oh-my-pi
  - coding-agent-workflow
  - punkpeye-awesome-mcp-servers-github
sources:
  - ../references/mcp-site.md
  - ../references/punkpeye-awesome-mcp-servers-github.md
  - ../../../raw/articles/ClaudeDevs/MCP 2026-07-28 is live and it's the largest update to the protocol since launch.md
  - ../../../raw/articles/Developers/Announcing the hosted X MCP.md
  - ../../../raw/articles/Smartpig/为什么 AI Agent 正在逐步“去 MCP 化”，重新拥抱 CLI？.md
  - ../../../raw/articles/Geek Lite/把公司文档自动整理成知识 Wiki，通过 MCP 让每个员工的 AI 客户端拿到对口的上下文，不用再手动粘贴。.md
  - ../../../raw/articles/Suryansh Tiwari/Claude Code feels completely different once you install this.md
  - ../../../raw/articles/Claude/Building agents that reach production systems with MCP.md
  - ../../../raw/articles/Claude/Remote MCP support in Claude Code.md
  - ../../../raw/articles/Claude/New in Claude Managed Agents: self-hosted sandboxes and MCP tunnels.md
  - ../../../raw/articles/Claude/Centrally manage authorization for MCP connectors.md
  - ../../../raw/articles/Claude/Extending Claude’s capabilities with skills and MCP servers.md
  - ../../../raw/articles/Claude/Bringing MCP 2026-07-28 to Claude.md
---

# Summary

**Model Context Protocol（MCP）**（<https://modelcontextprotocol.io/）是把> AI 应用接到外部系统的开放标准：暴露/消费数据源、工具与工作流，降低各家 agent 重复集成成本。生态侧常见 Claude / ChatGPT / Cursor / VS Code 等客户端与大量 MCP server。

定位：协议与接口层，不是某一款 coding agent；本机巡检 MCP 注册见 [mena](./mena.md)，工作流里「定制环境」见 [Coding Agent Workflow](../concepts/coding-agent-workflow.md)。

生产接入：远程 MCP（OAuth）让 Claude Code 连上已托管的工具；Managed Agents 的 MCP tunnel 用单一出站连接达到私网 server，不暴露公网端点。企业侧可将 MCP 授权收进 IdP（Enterprise-Managed Authorization 扩展）：管理员配一次，用户按组继承，吊销跟身份走。

与 Skills 分工：MCP 负责连上外部系统，Skills 负责怎么用这些连接（查哪、按什么顺序、何谓完成）。连接器目录与消费级插件公告不在本页堆。

## Related

- [Claude Tag](./claude-tag.md)
- [Software Factory Cost Equation](../concepts/software-factory-cost.md)
- [FastMCP](./fastmcp.md)
- [GitMCP](./gitmcp.md)
- [LangChain](./langchain.md)
- [MinerU](./mineru.md)
- [Proof](./proof.md)
- [Pilot Protocol](./pilot-protocol.md)
- [MCP（站点书签）](../references/mcp-site.md)
- [mena](./mena.md)
- [Pi](./pi.md)
- [oh-my-pi](./oh-my-pi.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [punkpeye/awesome-mcp-servers（GitHub）](../references/punkpeye-awesome-mcp-servers-github.md)
