---
type: Entity
title: "Model Context Protocol (MCP)"
description: "连接 AI 应用与外部系统（数据源、工具、工作流）的开放标准；客户端/服务端生态广泛。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T00:00:00Z }
related:
  - fastmcp
  - gitmcp
  - mena
  - coding-agent-workflow
sources:
  - ../references/mcp-site.md
---

# Summary

**Model Context Protocol（MCP）**（https://modelcontextprotocol.io/）是把 AI 应用接到外部系统的开放标准：暴露/消费数据源、工具与工作流，降低各家 agent 重复集成成本。生态侧常见 Claude / ChatGPT / Cursor / VS Code 等客户端与大量 MCP server。

定位：协议与接口层，不是某一款 coding agent；本机巡检 MCP 注册见 [mena](./mena.md)，工作流里「定制环境」见 [Coding Agent Workflow](../concepts/coding-agent-workflow.md)。

## Related

- [FastMCP](./fastmcp.md)
- [GitMCP](./gitmcp.md)
- [MCP（站点书签）](../references/mcp-site.md)
- [mena](./mena.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
