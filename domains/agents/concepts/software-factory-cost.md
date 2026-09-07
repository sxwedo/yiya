---
type: Concept
title: "Software Factory Cost Equation"
description: "Uber 式软件工厂：把 agent 用量拆成四层与成本等式，用基准选模、压缩/缓存、MCP→CLI/code-mode、上下文图与可见性杠杆压低每会话成本。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T00:00:00Z }
related:
  - mcp
  - multi-harness-control-plane
  - delivery-harness
  - loop-engineering
  - coding-agent-workflow
sources:
  - ../../../raw/articles/Uber Engineering/Running a Software Factory Efficiently at Uber Scale.md
---

# Definition

**Software Factory Cost Equation**（软件工厂成本等式）来自 Uber Engineering：AI 已嵌入全 SDLC，大量会话由托管 agent 发起；要在用量暴涨时稳住总支出，须把成本拆开量、再逐项优化。

要点：

1. **四层用量**（越上层越可控成本/质量/选模）：从专用托管 agent 到通用交互 harness。
2. **成本等式**：会话数 × 每会话回合 × 每回合请求 × 每请求 token × 单价；前两项偏增长，后三项是优化主战场。
3. **杠杆**：真实工作基准选 Pareto 模型（子代理默认弱模）；自动 compaction / reasoning 默认；prompt cache TTL；**MCP schema 不出场**（CLI 解析 + tool search + code-mode 把轮询移出上下文）；AI Context Graph 减盲目搜索；status line / 花费档位 / session 反模式看板。

与本域 [MCP](../entities/mcp.md)、[Multi-Harness Control Plane](./multi-harness-control-plane.md)、[Delivery Harness](./delivery-harness.md)、[Loop Engineering](./loop-engineering.md) 互补：本页偏「规模化工厂的计量与成本工程」。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Delivery Harness](./delivery-harness.md)
- [Loop Engineering](./loop-engineering.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [打开 raw](../../../raw/articles/Uber Engineering/Running a Software Factory Efficiently at Uber Scale.md)
