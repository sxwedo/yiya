---
type: Concept
title: "Agent OTel 探针"
description: "以 OpenTelemetry 探针采集 Agent 运行轨迹：用 Trace ID 串联模型与工具调用，形成可观测拓扑。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:20:00Z }
sources:
  - /references/agentloop-data-ingress.md
---

# Definition

**Agent OTel 探针**把 Agent 内部的模型调用、工具调用以 Trace ID 串联，并保留上下文依赖，组装成完整思考与执行轨迹。

为何用 OTel：可观测性事实标准，接入不锁定、数据可互通；探针可在少侵入业务逻辑的前提下串联采集点。目标是：今天接入的数据，未来任何 OTel 生态都能消费。

旁路采集（如独立 Pilot 进程）是常见配套：采集开销与故障不进入 Agent 执行关键路径——数据发不出去时，Agent 仍可继续工作。
