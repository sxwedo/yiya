---
type: Entity
title: "REA"
description: "本机逆向 MCP：无源码时给 Agent 查二进制、JS/Electron、.NET 和网站。库里只有入口。"
kind: product
status: draft
domain: agents
aliases: [rea-agents, Reverse Engineer Anything]
generated: { by: agent:yiya-librarian, at: 2026-10-11T01:54:00Z }
related:
  - mcp
  - skills-sh
  - grok-build
sources:
  - ../../../raw/bookmarks/github.md
  - ../../../raw/bookmarks/sites.md
  - ../../../raw/bookmarks/docs.md
---

# Identity

**REA**（Reverse Engineer Anything，<https://rea.tools/>，仓 [morluto/rea](https://github.com/morluto/rea)）：给编码代理的本机 MCP，用来在没有源码时查看目标怎么工作，并带回证据和局限。站点还挂 CLI。npm：`rea-agents`。MIT。原生分析可接已有 Hopper / Ghidra / IDA；静态 JS 不需要这些引擎。setup 宣称能注册到 Claude Code、Codex、Cursor、Gemini CLI、Grok Build 等。

定位：MCP 上的**分析桥**，不是又一款 coding agent。协议见 [MCP](./mcp.md)。技能目录入口见 [skills.sh](./skills-sh.md)。

## Boundaries

库里只有入口。不写安装、不写逆向步骤、不写绕过保护。不是 Hopper / Ghidra / IDA 手册。分析在本机，细节以仓和站点为准。

## Related

- [Model Context Protocol (MCP)](./mcp.md)
- [skills.sh](./skills-sh.md)
- [Grok Build](./grok-build.md)
