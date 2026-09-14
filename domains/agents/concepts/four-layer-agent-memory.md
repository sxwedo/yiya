---
type: Concept
title: "四层 Agent 记忆"
description: "按生命周期拆 Working / Session / User / Agent Memory：当前步、会话史、跨 Agent 用户事实、单 Agent 经验。内容形态（文本/偏好/技能）是另一轴。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T12:00:00Z }
related:
  - plan-mode-multiagent
  - async-memory-precipitation
  - eval-driven-development
  - history-vs-memory
  - online-memory-pipeline
sources:
  - ../references/dewu-multiagent-memory.md
  - ../references/huolala-llm-memory-online.md
  - ../../../raw/articles/Claude/Managing context on the Claude Developer Platform.md
---

# Definition

**四层 Agent 记忆**（得物）按**生命周期与作用域**组织记忆，禁止把全部历史塞进 Prompt。一次请求可能经过模型、MCP/A2A、RAG、Workflow、Sandbox；记忆是执行链路的一段，不是外挂。

| 层 | 活多久 | 干什么 | 得物落点 |
| --- | --- | --- | --- |
| **Working** | 当前一步 | 本步推理的临时材料 | 不跨请求 |
| **Session** | 本会话 | 消息历史：指代消解、多轮延续 | Redis List + MySQL；滑动窗口 |
| **User** | 跨会话、跨 Agent | 共享偏好与稳定事实 | MemOS `user_profile` |
| **Agent** | 跨会话、绑这个 Agent | 任务经验与协作约定 | MemOS `agent_{agentId}` |

会话结束后，新增消息经判断与去重，从 Session **沉淀**到 User 或 Agent。默认新建 Agent 配 `longMemoryProvider=MEMOS`，但 `openLongMemory` 默认关——长期层是显式打开的能力，不是静默全开。

**两套分类不要焊死。** 四层说的是谁能看见、活多久；MemOS 的 `text_mem` / `pref_mem` / `skill_mem` / `tool_mem` 说的是内容形态。User 层里可以有偏好也可以有文本事实；Agent 层里可以有技能也可以有工具记忆。选型 MemOS 时内部评测 74.33%（1540 问 / 10 用户）只作参考，不是 SLA。Provider 未配或异常时走 MySQL；MemOS 查询失败返回空，**不会**自动切 MySQL。

实现边界：`ConversationMemory` 管会话历史与窗口；AgentScope Harness 的 state store 管会话状态（有 Sandbox 用共享工作区文件，否则内存）。`ModelInvoker` 构造 Harness 消息时以本轮 `userMsg` 为入口——**不要**理解成 Redis/MySQL 历史会无条件拼进每一次 AgentScope Prompt。

货拉拉强调「历史≠记忆」和在线提取/召回，见 [历史不等于记忆](./history-vs-memory.md)、[在线记忆流水线](./online-memory-pipeline.md)。分层是作用域，流水线是怎么写进去，异步沉淀是热路径怎么卸，见 [异步记忆沉淀](./async-memory-precipitation.md)。

Anthropic 平台侧同一问题的两种扳手：context editing 在接近窗口上限时清掉过期工具结果（Working / Session 减负）；memory tool 把该留的写到会话外文件（User / Agent 由你的存储扛）。窗口有限，工作无限。

## Related

- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [异步记忆沉淀](./async-memory-precipitation.md)
- [历史不等于记忆](./history-vs-memory.md)
- [在线记忆流水线](./online-memory-pipeline.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
