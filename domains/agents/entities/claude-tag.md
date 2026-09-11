---
type: Entity
title: "Claude Tag"
description: "Anthropic 的频道侧 Agent 产品：Slack 等协作面常驻记忆与指令、接 MCP 工具与日程，用作值班/事件第一响应的骨干。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T00:10:00Z }
related:
  - agent-oncall
  - claude
  - mcp
sources:
  - ../../../raw/articles/Sachin Malhotra/Claude on call: How Claude Tag serves as Anthropic’s first responder for CI／CD failures.md
---

# Summary

**Claude Tag** 是 Anthropic 在协作频道里常驻的 Agent 产品面：承载跨轮记忆、按轮指令、自然语言日程，以及管理员一次性接好的服务账号与 MCP 连接器。Anthropic CI 用它做 CI/CD on-call 第一响应的骨干；配套有公开 [oncall-kit](https://github.com/anthropics/oncall-kit)。

产品页：<https://claude.com/product/tag>

与 [Claude](./claude.md) 产品线、[Agent On-call](../concepts/agent-oncall.md) 模式、[MCP](./mcp.md) 工具面互补：本页记产品本身，不展开值班流程细节。

## Related

- [Agent On-call](../concepts/agent-oncall.md)
- [Claude](./claude.md)
- [MCP](./mcp.md)
