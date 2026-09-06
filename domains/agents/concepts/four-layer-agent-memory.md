---
type: Concept
title: "四层 Agent 记忆"
description: "按生命周期拆分 Working / Session / User / Agent Memory：当前步、会话史、跨 Agent 用户事实、单 Agent 经验与约定。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:20:00Z }
related:
  - async-memory-precipitation
  - eval-driven-development
  - history-vs-memory
  - online-memory-pipeline
sources:
  - /references/dewu-multiagent-memory.md
---

# Definition

**四层 Agent 记忆**用生命周期与作用域组织记忆，而不是把全部历史塞进 Prompt：

1. **Working Memory** — 仅服务当前一步推理。
2. **Session Memory** — 会话内消息历史（指代消解、多轮延续）。
3. **User Memory** — 跨 Agent 共享的偏好与稳定事实。
4. **Agent Memory** — 某个 Agent 的任务经验与协作约定。

内容形态（文本/偏好/技能/工具记忆等）是另一分类维度，不与四层一一对应。会话结束后，新增信息经判断与去重，从 Session 沉淀到 User 或 Agent 层。

## Related

- [异步记忆沉淀](./async-memory-precipitation.md)
- [历史不等于记忆](./history-vs-memory.md)
- [在线记忆流水线](./online-memory-pipeline.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
