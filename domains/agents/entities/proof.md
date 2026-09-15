---
type: Entity
title: "Proof"
description: "Every 的人与 Agent 共写文档编辑器：共享稿、在场、评论、建议，左侧色轨标出谁写了哪一段。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T17:40:00Z }
related:
  - skills-sh
  - mcp
  - obsidian
  - raft
sources:
  - ../references/proof-site.md
---

# Identity

**Proof**（https://proofeditor.ai/）是 Every（Dan Shipper）做的人机共写文档编辑器：给 PRD、实现计划、调研简报这类稿子一块共享画布，而不是各写一份 `.md`。Agent 与人同一套操作：实时在场、评论、建议（类修订），左侧色轨标出处（绿=人，紫=AI）。接到 OpenClaw / Claude Code / Codex：贴一段安装提示或放 `proof.SKILL.md`；也提供 MCP（`/mcp`）。托管产品走 Every 账号；开源参考：[EveryInc/proof-sdk](https://github.com/EveryInc/proof-sdk)（滞后于线上）。

定位：人与 Agent 的**共写文档面**，不是 harness，也不是本地知识库。技能安装见 [skills.sh](./skills-sh.md)；协议见 [MCP](./mcp.md)；本地 Markdown vault 见 [Obsidian](../../../shared/entities/obsidian.md)。

## Boundaries

本页无成文 raw，不编未灌实现。细节以仓或站点为准。

## Related

- [skills.sh](./skills-sh.md)
- [Model Context Protocol (MCP)](./mcp.md)
- [Obsidian](../../../shared/entities/obsidian.md)
- [Raft](./raft.md)
