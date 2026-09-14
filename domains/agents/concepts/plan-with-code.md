---
type: Concept
title: "用代码做计划"
description: "监督比你聪明的执行器：先让它用自己的话复述问题，用 /how /why /teach 和并行原型收集证据，满意后再拆必须跑过代码的小 PR。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - pstack
  - evidence-gate
  - coding-agent-workflow
  - plan-mode-multiagent
sources:
  - ../../../raw/articles/lauren/The Complete Guide to pstack Pt. 2.md
---

# Definition

**用代码做计划**（pstack Pt.2，lauren）：验证能跑之后，下一个问题是怎么决定建什么。多数 harness 的 Plan Mode **过度指定实现细节、对其余欠指定**。抽象长计划制造进度幻觉，还容易让模型发明用不到的边角风险。

前提来自 Pt.1：agent 不能验证自己的工作，人就永远是瓶颈。Pt.2 的场景是监督比你聪明的人，在你自己也装不进脑子的代码库上干活。前沿模型仍有两种失败：意图欠指定；上下文不够做对。两者都靠把高质量上下文灌进窗口，而不是靠更长的计划文档。

做法：

1. **间接提问。** Slack 工单先 `/poteto-mode` 让它用自己的话、用白话复述底层问题，再写代码。压缩噪声、立刻抓住红鲱鱼，且不把你可能错误的假设写进第一枪。
2. **补上下文，不要每次从零建模。** `/recall` 历史会话。`/how` 追运行时机制，跨目录时派并行 explorer（快模型如 Grok）。`/why` 追动机：git/PR 评论、票、设计文档、Slack、监控、错误、血缘、数仓事件。`/teach` 底层调用 how/why，让它讲清为什么这样实现、权衡是什么——对人是信任，对 agent 是强迫它读代码而不是自信空谈。
3. **从调用方往回推。** 共享库先写 README/教程（Diátaxis 四类文档拆开），再倒推 API 与架构。
4. **并行原型。** 不要收下第一稿。throwaway 草图 + 验证技能（截图、计时、开关对比）拿经验证据。
5. **`/architect`。** 接地气 → 多模型并行类型草图 → 别的模型交叉评审 → 按草图实现。跨调用点的 workaround、`any`、强转，当经验证明架构错了，推倒重来。
6. **战术计划靠后。** 设计满意后再拆 multi-phase；每项必须**跑过代码**，单测不够。大计划可临时进仓，做完删掉。

与得物 [Plan 模式与主子 Agent](./plan-mode-multiagent.md) 不是同一对象：那边把 Plan 做成可持久化运行对象，解决企业编排与断点；这边反对抽象计划，主张用代码回答开放问题。证据门见 [Evidence Gate](./evidence-gate.md)。

## Related

- [pstack](../entities/pstack.md)
- [Evidence Gate](./evidence-gate.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
