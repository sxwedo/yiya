---
type: Entity
title: "AgentLoop"
description: "阿里云 Agent 可观测与经验自进化：Trace→Trajectory→经验库，运行时召回。不改模型权重；单位是成功任务成本。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
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

**AgentLoop**（[agentloop.console.aliyun.com](https://agentloop.console.aliyun.com)）是阿里云给 Agent 用的可观测与持续优化平台。企业问的不是「能不能做出 Agent」，而是上线后准不准、问题怎么定位、优化怎么验证、成本能不能接受。Agent 不确定：同样问题可走不同工具路径；一次评测过不代表下次过。

产品把高噪音 Trace 洗成 Trajectory，从成败轨迹里挖有效路径、失败模式、工具约束、参数规则、恢复策略，写成结构化经验。再次面对相似任务时，Recall Skill / CLI 按当前目标、对象、工具、进度、错误状态召回**少量**适用经验，注入运行时。不改模型权重；经验可下线、可按库隔离。模型推理、工具执行、知识库给事实，经验库判断优先做什么、哪条路易失败、如何恢复。

衡量的是**单位成功任务成本**（Token、时间、工具、人工介入），不是单次最低 Token。上线前评测集覆盖不了真实新表达；人工看 Trace 会先成为瓶颈。

接入见 [Agent OTel 探针](../concepts/agent-otel-probe.md)、[Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md)（一键 / 框架 SDK / 注解 / eBPF；Claude Code 走 webhook → LoongSuite Pilot 旁路）。闭环对照 [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)：观测 → 评估 → 经验落地 → 再验证。改配套系统见 [Harness 自改进](../concepts/harness-self-improvement.md)。评测当方向盘见 [评测驱动开发](../../engineering/concepts/eval-driven-development.md)。

## Related

- [Agent 自进化飞轮](../concepts/agent-self-evolution-flywheel.md)
- [Agent OTel 探针](../concepts/agent-otel-probe.md)
- [Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md)
- [Harness 自改进](../concepts/harness-self-improvement.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
