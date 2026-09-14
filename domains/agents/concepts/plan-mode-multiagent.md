---
type: Concept
title: "Plan 模式与主子 Agent"
description: "企业级 MultiAgent：把「要做什么」做成可持久化运行对象；主 Agent 规划汇总，子 Agent 专责；A2A 跨服务时 contextId 必须绑租户。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - multi-agent-architecture-selection
  - multi-agent-collaboration-patterns
  - multi-agent-governance
  - graph-engineering
  - delivery-harness
  - four-layer-agent-memory
  - loop-engineering
  - plan-with-code
sources:
  - ../../../raw/articles/得物技术/企业级 MultiAgent 落地：Plan 模式与主子 Agent 协作｜得物技术.md
---

# Definition

**Plan 模式与主子 Agent**（得物 AgentScope Java 平台）：「分析数据、检索、出报告、给建议」这种互相依赖的任务，只靠 ReAct 会在后面才发现前置不完整，过程藏在 Prompt 里执行前无法审计，Token 难估，工具失败没有稳定恢复。Plan-and-Execute 把「要做什么」和「怎么做」拆开：先生成结构化计划，再逐项执行。计划不是备注，是**有状态、可持久化、能被前端观察的运行对象**。

生命周期：

1. **创建** — 计划操作注册成工具，模型按任务动态创建和调整。
2. **Hint 注入** — 每轮软约束提醒当前步；框架另有硬约束，不靠模型自觉。
3. **持久化与幂等断点恢复** — 挂了能从计划对象接着，而不是重讲一遍 Prompt。
4. **SSE** — CHAT / PROCESSING / ERROR，过程可见。

主/子：子 Agent 声明式配置（职责、工具、模型），包装成主 Agent 可调工具。独立记忆与权限。短任务同步；长任务异步，可查可取消。追踪与中断向子层传播，避免主已停、子还在烧。

**A2A**：跨服务发现 Agent Card → JSON-RPC/SSE 调用 → 共享 Plan/工具/推流。`contextId` 必须与租户身份绑定，防会话串读。企业能力：ORM 强制多租户、双模认证 + API Key、多层调用树、异常四道防线、向量+全文双引擎。

这是编排运行时，不是「先写一篇设计再动手」。与 [用代码做计划](./plan-with-code.md) 对立互补：开放问题用代码回答；企业长任务用计划对象扛状态。依赖怎么铺见 [Graph Engineering](./graph-engineering.md)。记忆作用域见 [四层 Agent 记忆](./four-layer-agent-memory.md)。

## Related

- [多 Agent 架构选型](./multi-agent-architecture-selection.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [多智能体治理](./multi-agent-governance.md)
- [Graph Engineering](./graph-engineering.md)
- [Delivery Harness](./delivery-harness.md)
- [四层 Agent 记忆](./four-layer-agent-memory.md)
- [Loop Engineering](./loop-engineering.md)
- [用代码做计划](./plan-with-code.md)
