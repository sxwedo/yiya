---
type: Reference
title: "oh-my-pi 装完就不管了？这几步配完才真叫好用"
description: "AI智闻说：把 oh-my-pi 从默认能用调到好用——Advisor、扩展、沙箱、Hashline、TTSR、/review。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:11:00Z }
resource: /raw/articles/oh-my-pi 装完就不管了？这几步配完才真叫好用.md
sources: []
---

# Notes

- oh-my-pi（omp）= Pi 的 batteries-included fork：LSP/DAP、Advisor、Hashline、TTSR、/review、Skills 兼容。
- 调优要点：`WATCHDOG.yml` 开 Advisor（1 coder + 1 reviewer）；装 pi-crew / pi-hermes-memory / pi-guardrails；挂沙箱（推荐 Gondolin）。
- Hashline：内容哈希锚点编辑，省输出 token、防错位 patch。
- TTSR：规则休眠，匹配偏离才注入；与每轮塞满 system prompt 相反。
- `/review` 事后结构化审查（P0–P3），与 Advisor 实时旁听互补。
- 入库价值：补「旁听纠偏 + 按需规则注入」机制，可对照 Evidence Gate / Playbook 闭环。
