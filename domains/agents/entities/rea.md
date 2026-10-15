---
type: Entity
title: "REA"
description: "本机逆向 MCP：不自研引擎，把 Hopper/Ghidra/IDA 接成统一工具。发现必须带证据和局限。"
kind: product
status: draft
domain: agents
aliases: [rea-agents, Reverse Engineer Anything]
generated: { by: agent:yiya-librarian, at: 2026-10-11T01:54:00Z }
related:
  - mcp
  - skills-sh
  - grok-build
  - evidence-gate
sources:
  - ../../../raw/bookmarks/github.md
  - ../../../raw/bookmarks/sites.md
  - ../../../raw/bookmarks/docs.md
  - ../../../raw/articles/腾讯技术工程/把逆向工程交给 Agent：一文拆解爆火的 REA 技术原理.md
---

# Identity

**REA**（Reverse Engineer Anything，<https://rea.tools/>，仓 [morluto/rea](https://github.com/morluto/rea)）：给编码代理的本机 MCP，用来在没有源码时查看目标怎么工作，并带回证据和局限。站点还挂 CLI。npm：`rea-agents`。MIT。原生分析可接已有 Hopper / Ghidra / IDA；静态 JS 不需要这些引擎。setup 宣称能注册到 Claude Code、Codex、Cursor、Gemini CLI、Grok Build 等。

定位：MCP 上的**分析桥**，不是又一款 coding agent。协议见 [MCP](./mcp.md)。技能目录入口见 [skills.sh](./skills-sh.md)。

## Mechanism

腾讯技术工程（stevenzuo）：逆向卡在编排，不在算力。人用 GUI 工具时，每一步怎么走都在脑子里——工具接不上 Agent、过程没留痕、经验带不走。REA 不自研反编译器，把已有引擎包成 MCP 工具；调查方法论写成安装时注入的 skill。Agent 问功能怎么实现，拿到的是带证据的发现，再解释或重建。

四层设计：

1. **桥接即扩展。** `bridge/` 把各家 API 收成同一套工具接口，换引擎是加桥接，不改上层。
2. **静态与运行时分开。** JS / .NET 直接读文件；原生二进制才走 Hopper / Ghidra / IDA。运行时捕获是另一层。
3. **证据即可信。** 每条发现带地址、调用关系、伪代码和置信边界，不是一句结论。对照 [Evidence Gate](../concepts/evidence-gate.md)：结论要能回放。
4. **提问即编排。** 调查链固化进 skill，工程师负责提问和核实，不负责记 GUI 快捷键。

不做引擎、只做桥接；用 MCP 而不是自建协议。官方声明用于合法研究、互操作、软件保存，分析你拥有或被授权检查的软件。

## Boundaries

不写安装命令、不写调查步骤、不写绕过保护或 DRM。不是 Hopper / Ghidra / IDA 手册。复杂混淆、内核驱动、破商业加固：文称既做不了，也不该做。社区个案不在本页展开。分析在本机。

## Related

- [Model Context Protocol (MCP)](./mcp.md)
- [skills.sh](./skills-sh.md)
- [Grok Build](./grok-build.md)
- [Evidence Gate](../concepts/evidence-gate.md)
