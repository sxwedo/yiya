---
type: Concept
title: "Agent 遥测接入形态"
description: "按 Agent 形态与改造意愿选择成本最低的数据接入路径：一键、框架 SDK、注解埋点、或无侵入内核观测。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:20:00Z }
sources:
  - /references/agentloop-data-ingress.md
---

# Definition

**Agent 遥测接入形态**不是单一方案，而是按形态选路：

1. **通用 Agent 一键对接** — 开箱工具已专业化埋点，几乎零开发。
2. **框架 SDK 集成** — 埋点跟框架走（模型/工具调用位点已知），开发者无感。
3. **高代码注解埋点** — 开发者显式标注观测点；AI-coding 下加埋点成本低。
4. **无侵入（如 eBPF）** — 不改代码，适存量/闭源/先看数据再决定埋点。

四种方式可并存，按改造意愿选成本最低的一条。接入后还需应用级标识（如 Service Name）与鉴权凭证，才能在 workspace 内区分来源并做后续评估圈定。
