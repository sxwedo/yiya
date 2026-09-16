---
type: Entity
title: "agent-device"
description: "给编码代理的真机反馈环：CLI / MCP / Node API，在模拟器或真机上检查、操作、验证 App。读无障碍树，不靠截图硬猜。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-16T10:45:00Z }
related:
  - mcp
  - coding-agent-workflow
sources:
  - ../../../raw/bookmarks/github.md
---

# Identity

**agent-device**（[callstack/agent-device](https://github.com/callstack/agent-device)，站 [agent-device.dev](https://agent-device.dev)）：让编码代理在**跑着的 App**里验证改动。CLI、内置 MCP（`agent-device mcp`）、typed Node API。平台：iOS / Android / HarmonyOS（模拟器、仿真器、真机），以及 TV、web、macOS、Linux。无障碍快照给 ref，截图当证据。也管并行 worktree 抢设备和远程设备云。

Callstack 开源。README 声称 Claude Code / Codex / Cursor 等能跑 CLI 或 MCP 的都能接。本页无成文，不编工作流细节。

## Boundaries

不是编码代理本体，不是 Appium 教程。库里只有 GitHub 入口。协议见 [MCP](./mcp.md)。

## Related

- [MCP](./mcp.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
