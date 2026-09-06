---
type: Concept
title: "Minimal Agent Harness"
description: "极简代理框架哲学：核心只保留原语（Primitives, not features），高级能力由扩展/技能按需组装，以降低上下文税并保持可控。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:22:00Z }
related:
  - coding-agent-workflow
  - advisor
  - delivery-harness
  - evidence-gate
  - harness-self-improvement
  - ttsr
sources:
  - /references/pi-vs-oh-my-pi.md
---

# Definition

**Minimal Agent Harness** 主张：框架层保持极小——最小系统提示、不内置大量「成品功能」——把子代理、计划模式、权限弹窗、后台任务等留给用户用扩展与技能自行构建。

收益：低上下文税、行为边界清晰、可无限扩展。代价：开箱能力弱，团队需投入扩展开发与维护。

对照面是 **Batteries Included**：原生装好 LSP/DAP/评审/协作等，换取上手速度与一致性，但核心更重、定制路径不同。选型应看「要不要自己造轮子」而非价格（两者常同为开源自备模型）。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Pi](../entities/pi.md)

- [oh-my-pi](../entities/oh-my-pi.md)

- [Advisor](./advisor.md)
- [Delivery Harness](./delivery-harness.md)
- [Evidence Gate](./evidence-gate.md)
- [Harness 自改进](./harness-self-improvement.md)
- [TTSR](./ttsr.md)
