---
type: Concept
title: "Software Factory Cost Equation"
description: "Uber 式软件工厂：把 agent 用量拆成四层与成本等式，用基准选模、压缩/缓存、MCP→CLI/code-mode、上下文图与可见性杠杆压低每会话成本。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:30:00Z }
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

**Software Factory Cost Equation**（软件工厂成本等式）来自 Uber Engineering 在规模化实践中的提炼：当 AI 嵌入全研发流程（SDLC）、70%+ 的 PR 由本地或云端智能体发起时，会话数暴涨。要稳住总算力支出，必须把 Agent 会话成本解耦计量、逐层优化。

## 1. 智能体用量的四层金字塔

越往上层，工程团队对提示词、上下文、模型路由和成本/质量权衡的控制力越强：

1. **专用托管智能体（Managed Specialized Agents）**：高控制度。针对固定闭环任务（如 uReview 代码评审、CI 失败自愈、On-call 告警自动分诊），高度结构化。
2. **端到端交付智能体（E2E Task Agents）**：完成带视觉验证与集成的复杂 PR。
3. **后台协作智能体（Background Assistant Agents）**：开发者驱动的人在回路委派任务。
4. **通用交互 Harness（Interactive Harness）**：低控制度。终端或 IDE 中的自由结对对话（如 Claude Code / Pi）。

## 2. 成本分解等式

$$\text{Total Cost} = \text{Sessions} \times \frac{\text{Turns}}{\text{Session}} \times \frac{\text{Requests}}{\text{Turn}} \times \frac{\text{Tokens}}{\text{Request}} \times \frac{\text{Price}}{\text{Token}}$$

- **前两项（Sessions、Turns/Session）**：代表业务采用度与渗透率，鼓励持续增长；
- **后三项（Requests、Tokens、Price）**：代表工程优化主战场，目标是把每一项独立压低：
  - **压低单价（Price/Token）**：基准驱动的 Pareto 选模。基于实际业务 PR 构建基准（如标定难度的真实验收集），在质量达标的前提下将子任务路由到更轻量的开源或高性价比模型。
  - **压低请求数（Requests/Turn）**：去 MCP 上下文膨胀。改用 Code-Mode 或精简 CLI 代替多轮工具轮询，把工具参数解析从大模型上下文中剥离。
  - **压低单次 Token（Tokens/Request）**：Prompt 缓存（延长 Cache TTL）；自动会话压缩（Compaction）；利用代码语义图（AI Context Graph）提供精准上下文，杜绝无脑全局检索。

与本域 [MCP](../entities/mcp.md)、[Multi-Harness Control Plane](./multi-harness-control-plane.md)、[Delivery Harness](./delivery-harness.md)、[Loop Engineering](./loop-engineering.md) 互补：本页专精于「规模化软件工厂的度量与经济学工程」。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Delivery Harness](./delivery-harness.md)
- [Loop Engineering](./loop-engineering.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
