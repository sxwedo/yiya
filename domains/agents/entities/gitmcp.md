---
type: Entity
title: "GitMCP"
description: "把任意公开 GitHub 仓库变成 Remote MCP server：换域名为 gitmcp.io，供兼容 MCP 的 AI 工具读取仓库上下文。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T00:00:00Z }
related:
  - mcp
sources:
  - ../references/gitmcp-site.md
---

# Summary

**GitMCP**（https://gitmcp.io/）为公开 GitHub 仓（及 GitHub Pages）即时生成专用 Remote MCP：把 `github.com/user/repo` 换成 `gitmcp.io/user/repo`（Pages 则 `username.gitmcp.io/repo`），接入 Claude / Cursor 等 MCP 客户端后读取 README、`llms.txt` 等，增强对仓的上下文理解。

定位：MCP 之上的「仓 → server」快捷层，协议本体仍见 [Model Context Protocol (MCP)](./mcp.md)。

## Related

- [GitMCP（站点书签）](../references/gitmcp-site.md)
- [Model Context Protocol (MCP)](./mcp.md)
