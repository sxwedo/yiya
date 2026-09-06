---
type: Entity
title: "mena"
description: "sxwedo 的 local-first CLI：启动编码代理、浏览本地会话、巡检 Skills / MCP / memory，无守护进程与远程账号。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T06:45:00Z }
related:
  - mcp
  - omarchy
  - multi-harness-control-plane
  - pi
  - oh-my-pi
  - grok-bot
  - coding-agent-workflow
sources:
  - /references/sxwedo-mena-github.md
---

# Summary

**mena** 是本机优先的编码代理运维 CLI（Rust，MIT）：不依赖守护进程、账号或远程数据仓。用来在当前目录启动/恢复各家 agent（Claude Code、Codex、Cursor、Pi、oh-my-pi、Grok 等），浏览原生会话、Skills、MCP 注册与 memory 文件。

定位对照：Pi / oh-my-pi / Grok Bot 是「代理本体」；mena 是跨产品的**本机启动与巡检壳**。仓库：https://github.com/sxwedo/mena

## Related

- [Model Context Protocol (MCP)](./mcp.md)
- [Omarchy](./omarchy.md)
- [Multi-Harness Control Plane](../concepts/multi-harness-control-plane.md)
- [sxwedo/mena（GitHub）](../references/sxwedo-mena-github.md)
- [Pi](./pi.md)
- [oh-my-pi](./oh-my-pi.md)
- [Grok Bot](./grok-bot.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
