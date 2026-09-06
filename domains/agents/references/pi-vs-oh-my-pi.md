---
type: Reference
title: "主流 Agent 之「Pi」与「oh-my-pi」介绍"
description: "猿小猴子：Pi（极简 harness）与 oh-my-pi（batteries included）对照——哲学、能力、选型场景。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:22:00Z }
resource: /raw/articles/猿小猴子/主流 Agent 之「Pi」与「oh-my-pi」介绍.md
sources: []
---

# Notes

- 两者均为 MIT 开源终端编码代理 + 用户自备模型，非封闭 SaaS。
- Pi：Minimal Harness / Primitives not features；TS/Node；扩展/Skills 自建能力。
- oh-my-pi：Batteries included；Rust 核心；原生 LSP/DAP/子代理/Advisor/TTSR/Hashline。
- 选型：要极简可控与自建扩展 → Pi；要开箱 IDE 级工具链 → oh-my-pi；大组织可混合。
- 可与已有 [oh-my-pi-setup](./oh-my-pi-setup.md)、[Advisor](../concepts/advisor.md)、[TTSR](../concepts/ttsr.md) 互链。
