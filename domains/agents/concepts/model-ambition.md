---
type: Concept
title: "模型野心四型"
description: "用模型别停在加速同一件事。海拔要结果、深度要专家工具、广度要别的学科方法。角色扮演不算。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-17T16:00:00Z }
related:
  - coding-agent-workflow
  - loop-engineering
  - plan-with-code
  - llm-as-judge-runtime
  - claude
sources:
  - ../../../raw/articles/Felix Rieseberg/How to be more ambitious: A tutorial for humans with models.md
---

# Definition

**模型野心四型**（Felix Rieseberg，2026-10-13）：口号「我们还不够野心」没法执行。他把野心拆成 Speed / Altitude / Depth / Range。Speed 是同一件事更快，经济价值已经成立，本文跳过。后三型才是教程。模型能力不均匀：有的方向惊人，有的不够用。飞起来的人在开惊人那一侧；多数人还停在改邮件语气。

对照：[Loop Engineering](./loop-engineering.md) 设计能自己找活的环；本页管你把任务抬到哪一层。[用代码做计划](./plan-with-code.md) 是先取证再拆 PR；深度那一型会要求专家仪器，不只是原型。[LLM-as-Judge Runtime](./llm-as-judge-runtime.md) 是运行时裁判；本文明确：不要让模型自评，要能跑的外部校验。

## Mechanism

1. **Altitude。** 任务是你对结果的猜测。问下一层：修崩溃 → 让应用保持无崩溃。QBR 填模板数字 → 发生了什么、为什么、该做什么 → 最急的三个决策 → 比季度 PPT 更能早发现问题的办法，并用历史证明、并行跑一季。适合有终极结果、后面要开会的事；不太适合纯创作。「去赚钱」2026 年多数还飞不起来。抬海拔通常要改工作流：崩溃报告、版本对 commit、能复现的机器，模型才能自己验。
2. **Depth。** 装专家口吻会换词不换方法。坚持行业最好的那套仪器（别停在 markdown 表）。把目标写得不合理并当它合理（5s 改 200ms）。把生数据交给它对抗你的假设。已经进数据里就让它找盲区。外面的裁判：工具跑出来的对错，不是模型说自己对。
3. **Range。** 名词换成动词：deck →「让忙人在 30 分钟里相信因果并在不确定下做决定」。组队是为了找方法和材料，不是让它「像空头一样写」。角色扮演只会让对话变怪。
4. **前提。** 要有能装软件的电脑，以及相关数据。自我效能源于具体难目标、看见别人做成、允许失败；能力几周一跳时，这些技巧比以前更值钱。

## Boundaries

不是 [Claude](../entities/claude.md) 产品卡。不是 [Human 3.0](../../../shared/entities/human-3-0.md) 人生四象限。不是「Claude, go make money」。不是把多 Agent 角色扮演当成果。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Loop Engineering](./loop-engineering.md)
- [用代码做计划](./plan-with-code.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
- [Claude](../entities/claude.md)
