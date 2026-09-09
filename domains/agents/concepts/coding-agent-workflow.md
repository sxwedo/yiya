---
type: Concept
title: "Coding Agent Workflow"
description: "用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:00:00Z }
related:
  - termany
  - graph-engineering
  - software-factory-cost
  - loop-engineering
  - minimal-agent-harness
  - delivery-harness
  - multi-harness-control-plane
  - mcp
  - agents-md
  - pi
  - mena
  - skills-sh
sources:
  - ../references/ng-coding-agents-skills.md
  - ../../../raw/articles/Lingxi Li/Grok Bot for Engineering.md
  - ../../../raw/articles/Hanako/You check every step your agents take. Not because you want to, but because nothing else.md
  - ../../../raw/articles/dunik/259 pull requests in 30 days, and a human typed exactly zero of them.md
  - ../../../raw/articles/DataDan｜AI Consultant + Builder/我们一直以为 AI 只会写代码，判断力还在人手里，这次不一样了.md
  - ../../../raw/articles/Tw93/想从产品工程师视角和大伙聊聊，在代码全部由AI生成的时代，如何保证产品的代码可以持续迭代、好维护、不腐化。.md
  - ../../../raw/articles/实践哥 Li/Workflow 有 6 种形式。.md
  - ../../../raw/articles/h100envy/Deep mechanics plus working code. Stateless iteration, idempotent checks, isolation.md
  - ../../../raw/articles/Matt Pocock/Steps to become a senior programmer－.md
  - ../../../raw/articles/yan5xu/给关注了半年的agent team 交份作业。.md
---

# Definition

**Coding Agent Workflow** 把「会用 coding agent」落成可重复的三阶段循环，而不是单次聊天写代码：

1. **Planning** — 研究/摸清现有仓 + 写清需求与技术设计，再生成可执行计划；必要时审查安全、过度工程与关键假设。
2. **Execution** — 在自主度与人机监督之间校准：让 agent 构建，并用自动/人工检查验收。
3. **Deployment & monitoring** — 经 CI/CD 或人工门禁部署；用 agent 看日志、提问题、推动改进。

要在各阶段有效，还需五块能力：

- **引导工作流**（速度/成本/风险/人力权衡）；
- **赋能自主度**（交互 vs 委派、上下文与并行）；
- **评审产出**（行为/功能验证、agentic review）；
- **定制 agent 与环境**（Skills/MCP/hooks、[`AGENTS.md`](../entities/agents-md.md) 等常驻上下文）；
- **coding agent 基础**（检索、上下文、子代理、harness 包模型）。

与「长跑烧大量 token」叙事相对：多数有效用法是**高迭代 + 高判断力介入**。可与本域 [Minimal Agent Harness](./minimal-agent-harness.md)、[Delivery Harness](./delivery-harness.md) 对照——前者偏原语，后者偏交付控制面，本概念偏「人如何驾驭 agent 做软件」。

## Related

- [Termany](../entities/termany.md)
- [Graph Engineering](./graph-engineering.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Loop Engineering](./loop-engineering.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Model Context Protocol (MCP)](../entities/mcp.md)
- [AGENTS.md](../entities/agents-md.md)
- [Pi](../entities/pi.md)
- [mena](../entities/mena.md)
- [skills.sh](../entities/skills-sh.md)
- [ng-coding-agents-skills](../references/ng-coding-agents-skills.md)
