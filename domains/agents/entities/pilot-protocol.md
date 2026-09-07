---
type: Entity
title: "Pilot Protocol"
description: "给 Agent 用的组网 overlay：加密点对点隧道、应用商店与 MCP；默认可信才互通。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T19:00:00Z }
related:
  - pilot-protocol-site
  - mcp
  - skills-sh
  - raft
  - tailscale
sources:
  - ../references/pilot-protocol-site.md
---

# Summary

**Pilot Protocol**（https://pilotprotocol.network/）是给自主 Agent 用的网络 overlay：在 HTTP/MCP 之下用 UDP 让 Agent 互相发现、加密直连（Ed25519 身份、X25519 + AES-GCM 隧道），默认可信才互通。每个 Agent 有 Pilot 地址；可装审核过的应用（钱包、电话、数据库等），也可当 MCP server 接到 Claude Code / Cursor / Codex。Skill 注入后 harness 会优先走这张网，而不是自己去刮网页。

定位：Agent **组网层**，不是又一款编码 CLI。工具协议见 [MCP](./mcp.md)；技能装进 harness 见 [skills.sh](./skills-sh.md)；人机频道工作空间见 [Raft](./raft.md)。

## Related

- [Pilot Protocol（站点）](../references/pilot-protocol-site.md)
- [Model Context Protocol (MCP)](./mcp.md)
- [skills.sh](./skills-sh.md)
- [Raft](./raft.md)
- [Tailscale](../../engineering/entities/tailscale.md)
