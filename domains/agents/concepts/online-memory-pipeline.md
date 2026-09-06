---
type: Concept
title: "在线记忆流水线"
description: "会话可靠进入提取→写成可独立理解的事实→补结构与关联→混合检索取回当前相关记忆，与离线长期整理分工。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:08:00Z }
related:
  - async-memory-precipitation
  - four-layer-agent-memory
  - history-vs-memory
sources:
  - /references/huolala-llm-memory-online.md
---

# Definition

**在线记忆流水线**把「消息 → 可用记忆」拆成职责不同的阶段：

1. **任务调度** — 完整会话进提取，兼顾可靠性与吞吐，避免拖垮热路径。
2. **记忆提取** — 产出脱离原文仍可理解的候选事实。
3. **记忆管理** — 实体链接、画像、关联与标签，使事实可维护。
4. **混合检索** — 粗排缩小范围，精排判断真正相关，并按需附带关联/画像等。

与「请求前并行加载 + 会话后异步沉淀」互补：此处强调提取单元与召回质量；彼处强调生命周期分层与写路径解耦。

## Related

- [异步记忆沉淀](/concepts/async-memory-precipitation.md)
- [四层 Agent 记忆](/concepts/four-layer-agent-memory.md)
- [历史不等于记忆](/concepts/history-vs-memory.md)
