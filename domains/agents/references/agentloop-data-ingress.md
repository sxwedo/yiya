---
type: Reference
title: "数据飞轮的起点：四种方式把 Agent 连进 AgentLoop丨AgentLoop 数据飞轮实践（二）"
description: "阿里云云原生：AgentLoop 以 OTel + 探针做数据接入；四种形态（一键/框架 SDK/注解/eBPF）与 Claude Code 实操。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:20:00Z }
resource: /raw/library/2026/09/agentloop-data-ingress/数据飞轮的起点：四种方式把 Agent 连进 AgentLoop丨AgentLoop 数据飞轮实践（二）.md
sources: []
---

# Notes

- 底座：OpenTelemetry + 探针；Trace ID 串联模型调用与工具调用，还原执行拓扑。
- 四种接入：通用 Agent 一键；框架 SDK（如 AgentScope）；高代码注解；eBPF 无侵入兜底。
- 关键字段：Service Name（归属）与 License Key（鉴权）。
- Claude Code 实操：webhook → LoongSuite Pilot 旁路进程 → 云端；拷贝 settings hooks 并重启。
- 入库价值：数据飞轮的起点——无高质量运行轨迹，观测/评估/实验无从谈起。
