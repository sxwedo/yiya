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
  - opencode
  - history-vs-memory
  - auto-mode
  - dataflow-harness
sources:
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
  - ../../../raw/articles/得物技术/实战从零开始构建一个Coding Agent：Violin ｜得物技术.md
  - ../../../raw/articles/Claude/Agent Harness Design： 3 Patterns for Harnessing Claude's Intelligence.md
  - ../../../raw/articles/Claude/Lessons from building Claude Code： Prompt caching is everything.md
  - ../../../raw/articles/Claude/Seeing like an agent： how we design tools in Claude Code.md
  - ../../../raw/articles/Claude/The new rules of context engineering for Claude 5 generation models.md
  - ../../../raw/articles/Claude/A harness for every task： dynamic workflows in Claude Code.md
  - ../../../raw/articles/Datawhale/AI 数据最难搞的 Harness 工程，被北大开源了！.md
  - ../../../raw/articles/智透圈/OpenAI 如何构建内部数据智能体（Data Agent）.md
---

# Definition

**Harness 运行时层**（腾讯技术工程）：模型只会 predict next token。每当它越过一次调用的边界，工程就必须在模型外面补一层——上下文、工具、循环、记忆、权限、子 Agent。这些补丁凝结成独立运行时，就是 Harness。

分工一句话：**Agent 决定下一步做什么；Harness 决定这一步在什么上下文、权限、生命周期与持久化规则下发生。**

演化不是一次设计出来的：LLM → 上下文装配（Q&A Bot）→ ReAct 循环 → 结构化 Tool Calling → 长期记忆 → 会话 / 沙箱 / 事件 / 扩展。真实副作用一出现，Loop 就必须被包进更大的运行时。

同一套 Loop + Tool + Context，四条设计空间（腾讯文对照）：

- **[Pi](../entities/pi.md)**：默认四工具、显式 Resource Loader，压低每轮上下文；不内置权限，高风险环境要外补沙箱。见 [Minimal Agent Harness](./minimal-agent-harness.md)。
- **[OpenCode](../entities/opencode.md)**：Agent Profile 装载身份，Session Events 留下可重建轨迹；多客户端消费同一运行时，代价是状态工程更重。
- **[Codex](../entities/codex.md)**：Approval 与 Sandbox 两道边界；Thread / Turn / Item 加 Thread Manager，长任务可监督、中断、恢复、派生子 Thread。
- **[Hermes Agent](../entities/hermes-agent.md)**：前台 Loop 做当前任务，Background Review 把经历写入 Memory / Skills；问的是第二次少走弯路。见 [Harness 自改进](./harness-self-improvement.md)。

模型越能行动，外面的运行时越不能含糊。与 [Delivery Harness](./delivery-harness.md)（交付合同与证据门）、[Multi-Harness Control Plane](./multi-harness-control-plane.md)（多套 Harness 之上的控制面）互补：本页专精「Loop 外面为什么必须有一层运行时」。

得物 Violin 把这句话写成可跑的分层：Agent Loop 只做「问模型 / 执行工具」；模型适配层拍平供应商；产品层管会话、压缩、资源注入；EventBus 把进度交给插件与客户端。Loop 不难，难的是循环之外。实现上用 Zig 引擎 + Python Client（TCP JSON-lines），蓝本是 [Pi](../entities/pi.md) 的三层分离，不另开产品 Entity。

Anthropic 把 Harness 定义成 loop + tools + context + guardrails，并强调**假设会过期**：模型变强后，脚手架里「模型自己做不到」的补丁要拆掉。三条：用模型已经会的通用工具（bash / 编辑器），Skills / 程序化工具调用 / memory 都是它们的组合；编排、上下文装配与持久化尽量交给模型（code execution 过滤工具结果、Skills 渐进披露、compaction / memory folder）；边界仍由 harness 设——权限、预算、停止条件。瘦身方向见 [Minimal Agent Harness](./minimal-agent-harness.md)。

长任务 harness 还被 **prompt cache** 绑住：缓存是前缀匹配，静态系统提示与工具定义必须固定在前，动态内容放后；会话中途改模型或增删工具会整段 miss。状态变化用消息 / 工具调用表达（如 Plan Mode 用 Enter/Exit 工具而不是换工具集）；compaction 必须复用父会话同一前缀，不能另开「请摘要」system prompt。

工具设计要「看见 Agent」：专用工具只在模型会稳定调用、且比 bash/代码执行更低摩擦时才加。AskUserQuestion 三次迭代才落到独立工具；TodoWrite 在模型变强后变成约束，换成 Task 让子代理共享进度。新能力优先渐进披露（文档 / Skill / 子代理）而不是再加第 21 个工具。

Claude 5 代模型上，Claude Code 砍掉 80%+ 系统提示仍不掉编码评测：冲突指令（「写文档」vs「别加注释」）会逼模型多想一轮。过期约束该删；记忆/产物/Skills 已能按需加载，不必全焊进 system prompt。

## Related

- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Delivery Harness](./delivery-harness.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Pi](../entities/pi.md)
- [Codex](../entities/codex.md)
- [OpenCode](../entities/opencode.md)
- [Hermes Agent](../entities/hermes-agent.md)
- [历史不等于记忆](./history-vs-memory.md)
- [Auto Mode](./auto-mode.md)
- [DataFlow-Harness](../entities/dataflow-harness.md)
