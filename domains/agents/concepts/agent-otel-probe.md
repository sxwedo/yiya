---
type: Concept
title: "Agent OTel 探针"
description: "用 OpenTelemetry 探针采集 Agent 轨迹：Trace ID 串联模型与工具调用及上下文依赖，组装思考与执行拓扑；旁路故障不进热路径。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T18:00:00Z }
related:
  - agent-telemetry-ingress
  - agentloop
  - tls-agentloop
sources:
  - ../references/agentloop-data-ingress.md
---

# Definition

**Agent OTel 探针**（AgentLoop）把「数据飞轮的起点」钉在标准协议上：没有高质量运行轨迹，观测、评估、实验都无从谈起。Agent 不是一种微服务调用形态——通用产品、框架自研、高代码、闭源存量会同时存在——所以采集必须能在少改业务的前提下，把角落里的调用串成一张图。

探针做三件事：

1. 在调模型、调工具的位点打点。
2. 用 **Trace ID** 把这些点连成一条 trace，并保留上下文依赖（谁因谁而起）。
3. 在拓扑上组装出完整的思考与执行轨迹——不只是工具列表，模型处理步骤也要在链路明细里看得见。

选 OTel 不是跟风。它是可观测性事实标准：接入不锁定，今天进库的数据，未来任何 OTel 生态都能消费。探针本身是打磨了十多年的采集形态，竞争力是**不侵入业务逻辑仍能串联**，而不是再发明一套私有 span。

**旁路是配套约束，不是实现细节。** AgentLoop 接 Claude Code 时，用 webhook 把事件打到 **LoongSuite Pilot** 旁路进程，再上报云端。Pilot 不在 Agent 执行路径上：采集开销和故障都不进关键路径；数据发不出去，Agent 照常工作。这和把 SDK 焊进 Loop 热路径是两种可靠性模型。

探针覆盖通用 Agent、框架、高代码三类；完全不想改代码时用内核级观测兜底。怎么选路见 [Agent 遥测接入形态](./agent-telemetry-ingress.md)。产品落点见 [AgentLoop](../entities/agentloop.md)。

本页不写评估器、黄金指标、Rubric——那是飞轮的下一齿。本页只保证：**轨迹按标准协议进来，并且坏了采集也不坏 Agent。**

## Related

- [Agent 遥测接入形态](./agent-telemetry-ingress.md)
- [AgentLoop](../entities/agentloop.md)
