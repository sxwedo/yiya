---
type: Entity
title: "AgentLoop"
description: "阿里云 Agent 可观测与经验自进化：Trace→Trajectory→经验库，运行时召回，不改模型权重。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T18:00:00Z }
related:
  - agent-self-evolution-flywheel
  - agent-otel-probe
  - agent-telemetry-ingress
  - harness-self-improvement
  - eval-driven-development
sources:
  - ../references/agentloop-data-ingress.md
  - ../../../raw/articles/阿里云云原生/让 Agent 越用越准、成本越来越低：AgentLoop 的 Agent 经验自进化闭环.md
---

# Summary

**AgentLoop**（控制台 [agentloop.console.aliyun.com](https://agentloop.console.aliyun.com)）是阿里云给 Agent 用的可观测与持续优化平台：采集模型/工具调用，把高噪音 Trace 洗成 Trajectory，挖掘可复用经验，再用 Recall Skill / CLI 在运行时注入。不改模型权重；经验可下线、可按库隔离。

接入形态见已有 [Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md) 与 [Agent OTel 探针](../concepts/agent-otel-probe.md)。闭环对照 [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)：观测 → 评估 → 经验落地 → 再验证。衡量单位成功成本，不是单次最低 Token。

## Related

- [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)
- [Agent OTel 探针](../concepts/agent-otel-probe.md)
- [Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md)
- [Harness 自改进](../concepts/harness-self-improvement.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
