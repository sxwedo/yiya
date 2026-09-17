---
type: Entity
title: "TLS AgentLoop"
description: "火山引擎日志服务上的 Agent 观测：Session/Trace/Span 里原位看图。媒体进 TOS，Trace 只留引用，不把 Base64 塞进日志。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-17T12:25:00Z }
related:
  - agentloop
  - agent-otel-probe
  - agent-telemetry-ingress
  - deepseek-harness
sources:
  - ../../../raw/articles/字节跳动技术团队/日志服务 TLS AgentLoop：让多模态调用清晰可见.md
---

# Identity

**TLS AgentLoop**（火山引擎日志服务）：多模态任务里，调用链成功、Token 正常，仍可能不知道模型**看见了什么**。附件 ID 或 Base64 帮不上忙——超长会截断，当通用字段索引也贵。

做法：图片回到 Session / Trace / Span 同一条上下文，和提示词、输出、工具结果一起看。列表有媒体标识；详情原位预览。文以 [DeepSeek Harness](./deepseek-harness.md) 截图采集为例。

## Mechanism

插件读本地附件 → 上传 TOS → Trace **只写引用**（位置、类型、大小、摘要），不写 Base64。已有私有 TOS 则上报对象引用，前端用临时地址预览，不存长期签名。也认 OpenTelemetry GenAI 多模态 `parts`（公开 URI）。

排查：先核对输入（图对不对、清不清、提示词是否说清）再看执行。某条记录没图 ≠ 模型没收到图（采集开关、权限、网络）。

## Boundaries

不是阿里云 [AgentLoop](./agentloop.md)（Trace→经验库、不改权重）。不是 OTel 探针本身，见 [Agent OTel 探针](../concepts/agent-otel-probe.md)。本页不是 TLS 价目表。

## Related

- [AgentLoop](./agentloop.md)
- [Agent OTel 探针](../concepts/agent-otel-probe.md)
- [Agent 遥测接入形态](../concepts/agent-telemetry-ingress.md)
- [DeepSeek Harness](./deepseek-harness.md)
