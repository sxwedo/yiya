---
type: Entity
title: "FastMCP"
description: "Prefect 维护的 MCP 应用框架：用 Python 建 server/client/交互 Apps，管 schema、校验、传输与认证。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T00:00:00Z }
related:
  - mcp
  - prefect
sources:
  - ../references/fastmcp-site.md
  - ../references/prefecthq-fastmcp-github.md
---

# Identity

**FastMCP**（<https://gofastmcp.com/）是面向> Model Context Protocol 的全栈框架：把普通 Python 函数暴露为 MCP tools/resources/prompts，并覆盖 client 连接与交互式 Apps。框架负责 schema 生成、校验、传输与认证；早期高层 Python API 曾进入官方 MCP SDK。另有 TypeScript 对口实现；企业侧可衔接 Prefect Horizon 网关。

定位：MCP 之上的开发框架，协议本体见 [Model Context Protocol (MCP)](./mcp.md)。

## Boundaries

本页无成文 raw，不编未灌实现。细节以仓或站点为准。

## Related

- [Model Context Protocol (MCP)](./mcp.md)
- [Prefect](../../engineering/entities/prefect.md)
