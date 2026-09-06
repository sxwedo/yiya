---
type: Concept
title: "Coding Agent Workflow"
description: "用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T06:40:00Z }
related:
  - mcp
  - multi-harness-control-plane
  - claude-academy
  - mena
  - pi
  - minimal-agent-harness
  - delivery-harness
sources:
  - /references/ng-coding-agents-skills.md
---

# Definition

**Coding Agent Workflow** 把「会用 coding agent」落成可重复的三阶段循环，而不是单次聊天写代码：

1. **Planning** — 研究/摸清现有仓 + 写清需求与技术设计，再生成可执行计划；必要时审查安全、过度工程与关键假设。
2. **Execution** — 在自主度与人机监督之间校准：让 agent 构建，并用自动/人工检查验收。
3. **Deployment & monitoring** — 经 CI/CD 或人工门禁部署；用 agent 看日志、提问题、推动改进。

要在各阶段有效，还需五块能力：**引导工作流**（速度/成本/风险/人力权衡）、**赋能自主度**（交互 vs 委派、上下文与并行）、**评审产出**（行为/功能验证、agentic review）、**定制 agent 与环境**（Skills/MCP/hooks、`AGENTS.md` 等常驻上下文）、**coding agent 基础**（检索、上下文、子代理、harness 包模型）。

与「长跑烧大量 token」叙事相对：多数有效用法是**高迭代 + 高判断力介入**。可与本域 [Minimal Agent Harness](./minimal-agent-harness.md)、[Delivery Harness](./delivery-harness.md) 对照——前者偏原语，后者偏交付控制面，本概念偏「人如何驾驭 agent 做软件」。

## Related

- [Model Context Protocol (MCP)](../entities/mcp.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Claude Academy](../entities/claude-academy.md)
- [mena](../entities/mena.md)
- [Pi](../entities/pi.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [AI Engineering Skills Map: Using coding agents](../references/ng-coding-agents-skills.md)
