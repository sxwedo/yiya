---
type: Concept
title: "Agent 遥测接入形态"
description: "按 Agent 形态与改造意愿选成本最低的接入：一键、框架 SDK、注解埋点、或 eBPF 无侵入。Service Name 圈定归属，License Key 鉴权。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T18:00:00Z }
related:
  - agent-otel-probe
  - agentloop
sources:
  - ../references/agentloop-data-ingress.md
---

# Definition

**Agent 遥测接入形态**（AgentLoop）不是单一 SDK。一套方式通吃会在「开箱产品 / 框架 / 自研 / 闭源」上同时失败。四种方式**可并存**，按形态和改造意愿走成本最低的一条。协议底座仍是 [Agent OTel 探针](./agent-otel-probe.md)。

| 形态 | 怎么接 | 何时 |
| --- | --- | --- |
| **通用 Agent 一键** | 平台对常见开箱 Agent 做了专业化埋点 | 零开发；用的就是那类产品 |
| **框架 SDK** | 埋点跟框架走。框架知道模型/工具调用发生在哪，SDK 在那些位点自动采 | 如 AgentScope；开发者几乎无感 |
| **高代码注解** | 引依赖，在要观测的逻辑上加注解 | 自研或 AI-coding Agent；控制权在开发者。现在加几行埋点成本低 |
| **eBPF 无侵入** | 内核级监控，不改应用代码 | 存量、闭源、或先看数据再决定埋点。能看到与模型网关的交互、执行工具时的指令 |

前三种是探针覆盖；eBPF 是无侵入兜底。不是互斥单选题。

接入之后，所有数据落在同一个 AgentSpace（workspace）下，必须能回答「哪来的、谁有权报」：

- **Service Name**：归属标识。同一空间里区分应用、区分哪一种 Agent。后续观测和评估按它圈定范围。
- **License Key**：通行证。上报鉴权；没有它数据报不上来。

Claude Code / Claude Agent SDK 有两条路：探针，或 **webhook → LoongSuite Pilot → 云端**。演示走更原生的 webhook。安装命令在机器上部署旁路 Pilot；hooks 写进 Claude Code **默认** `settings.json`。踩坑点：必须拷到**自己 Agent 的安装目录**并重启，忘拷或忘重启就不报。验证看观测页链路明细——要能看到大模型处理步骤，才说明模型调用也被串进 trace，不只是工具。

接入打通只解决飞轮的数据供给。本页不写「跑得怎么样」（黄金指标 / Rubric）。产品见 [AgentLoop](../entities/agentloop.md)。

## Related

- [Agent OTel 探针](./agent-otel-probe.md)
- [AgentLoop](../entities/agentloop.md)
