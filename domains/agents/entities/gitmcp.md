---
type: Entity
title: "GitMCP"
description: "把任意公开 GitHub 仓库变成 Remote MCP server：换域名为 gitmcp.io，供兼容 MCP 的 AI 工具读取仓库上下文。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T00:00:00Z }
related:
  - mcp
  - zread
  - code-wiki
sources:
  - ../references/gitmcp-site.md
---

# Identity

**GitMCP**（https://gitmcp.io/）为公开 GitHub 仓（及 GitHub Pages）即时生成专用 Remote MCP：把 `github.com/user/repo` 换成 `gitmcp.io/user/repo`（Pages 则 `username.gitmcp.io/repo`），接入 Claude / Cursor 等 MCP 客户端后读取 README、`llms.txt` 等，增强对仓的上下文理解。

定位：MCP 之上的「仓 → server」快捷层，协议本体仍见 [Model Context Protocol (MCP)](./mcp.md)。仓 → 给人读的项目 Wiki 见 [Zread](./zread.md)、[Code Wiki](./code-wiki.md)，对象都是 GitHub 仓，出口不同。

## Boundaries

本页无成文 raw，不编未灌实现。细节以仓或站点为准。

## Related

- [Model Context Protocol (MCP)](./mcp.md)
- [Zread](./zread.md)
- [Code Wiki](./code-wiki.md)
