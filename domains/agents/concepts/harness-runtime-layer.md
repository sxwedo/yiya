---
type: Concept
title: "Harness 运行时层"
description: "Agent Loop 之外的运行时：装配上下文、管会话与权限沙箱、持久化事件、调度子 Agent。Agent 决定下一步，Harness 决定这一步在什么约束下发生。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T07:30:00Z }
related:
  - minimal-agent-harness
  - delivery-harness
  - harness-self-improvement
  - multi-harness-control-plane
  - pi
  - codex
  - hermes-agent
  - history-vs-memory
sources:
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
  - ../../../raw/articles/得物技术/实战从零开始构建一个Coding Agent：Violin ｜得物技术.md
---

# Definition

**Harness 运行时层**（腾讯技术工程）：模型只会 predict next token。每当它越过一次调用的边界，工程就必须在模型外面补一层——上下文、工具、循环、记忆、权限、子 Agent。这些补丁凝结成独立运行时，就是 Harness。

分工一句话：**Agent 决定下一步做什么；Harness 决定这一步在什么上下文、权限、生命周期与持久化规则下发生。**

演化不是一次设计出来的：LLM → 上下文装配（Q&A Bot）→ ReAct 循环 → 结构化 Tool Calling → 长期记忆 → 会话 / 沙箱 / 事件 / 扩展。真实副作用一出现，Loop 就必须被包进更大的运行时。

同一套 Loop + Tool + Context，四条设计空间（腾讯文对照）：

- **[Pi](../entities/pi.md)**：默认四工具、显式 Resource Loader，压低每轮上下文；不内置权限，高风险环境要外补沙箱。见 [Minimal Agent Harness](./minimal-agent-harness.md)。
- **OpenCode**：Agent Profile 装载身份，Session Events 留下可重建轨迹；多客户端消费同一运行时，代价是状态工程更重。库内暂无专属 Entity。
- **[Codex](../entities/codex.md)**：Approval 与 Sandbox 两道边界；Thread / Turn / Item 加 Thread Manager，长任务可监督、中断、恢复、派生子 Thread。
- **[Hermes Agent](../entities/hermes-agent.md)**：前台 Loop 做当前任务，Background Review 把经历写入 Memory / Skills；问的是第二次少走弯路。见 [Harness 自改进](./harness-self-improvement.md)。

模型越能行动，外面的运行时越不能含糊。与 [Delivery Harness](./delivery-harness.md)（交付合同与证据门）、[Multi-Harness Control Plane](./multi-harness-control-plane.md)（多套 Harness 之上的控制面）互补：本页专精「Loop 外面为什么必须有一层运行时」。

得物 Violin 把这句话写成可跑的分层：Agent Loop 只做「问模型 / 执行工具」；模型适配层拍平供应商；产品层管会话、压缩、资源注入；EventBus 把进度交给插件与客户端。Loop 不难，难的是循环之外。实现上用 Zig 引擎 + Python Client（TCP JSON-lines），蓝本是 [Pi](../entities/pi.md) 的三层分离，不另开产品 Entity。

## Related

- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Pi](../entities/pi.md)
- [Codex](../entities/codex.md)
- [Hermes Agent](../entities/hermes-agent.md)
- [历史不等于记忆](./history-vs-memory.md)
- [打开 raw](<../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md>)
