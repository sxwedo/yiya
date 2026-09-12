---
type: Concept
title: "Plan 模式与主子 Agent"
description: "企业级 MultiAgent：Plan-and-Execute 把计划做成可持久化运行对象；主 Agent 规划汇总、子 Agent 专责；可叠加 A2A 跨服务协作。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-09T12:45:00Z }
related:
  - multi-agent-architecture-selection
  - multi-agent-collaboration-patterns
  - multi-agent-governance
  - graph-engineering
  - delivery-harness
  - four-layer-agent-memory
  - loop-engineering
sources:
  - ../../../raw/articles/得物技术/企业级 MultiAgent 落地：Plan 模式与主子 Agent 协作｜得物技术.md
---

# Definition

**Plan 模式与主子 Agent**（得物 AgentScope Java 平台实践）：复杂任务不靠纯 ReAct 硬推，而把「要做什么」做成有状态的 **Plan**，再交给主/子 Agent 执行。

要点：

1. **Plan 生命周期**：工具化创建/激活/完成；每轮 **Hint 注入**（软约束）+ 框架硬约束；独立持久化与幂等断点恢复；**SSE** 推 CHAT/PROCESSING/ERROR 使过程可见。  
2. **主/子协作**：子 Agent 声明式配置（职责、工具、模型），包装成主 Agent 可调工具；独立记忆与权限；短任务同步、长任务异步可查可取消；追踪与中断向子层传播。  
3. **A2A**：跨服务发现 Agent Card → JSON-RPC/SSE 调用 → 共享 Plan/工具/推流；`contextId` 与租户身份必须绑定，防会话串读。  
4. **企业能力**：ORM 强制多租户、双模认证 + API Key、多层调用树追踪、异常四道防线、向量+全文双引擎（文中展开）。

与 [Graph Engineering](./graph-engineering.md)（依赖图并行）、[多智能体治理](./multi-agent-governance.md)、[Delivery Harness](./delivery-harness.md) 互补：本页偏「计划对象 + 主子编排」落地。

## Related

- [多 Agent 架构选型](./multi-agent-architecture-selection.md)
- [多 Agent 协作模式](./multi-agent-collaboration-patterns.md)
- [多智能体治理](./multi-agent-governance.md)
- [Graph Engineering](./graph-engineering.md)
- [Delivery Harness](./delivery-harness.md)
- [四层 Agent 记忆](./four-layer-agent-memory.md)
- [Loop Engineering](./loop-engineering.md)
- [打开 raw](<../../../raw/articles/得物技术/企业级 MultiAgent 落地：Plan 模式与主子 Agent 协作｜得物技术.md>)
