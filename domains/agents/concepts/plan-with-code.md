---
type: Concept
title: "用代码做计划"
description: "不靠抽象 Plan Mode：先间接复述问题，再用教程/类型草图/并行原型和验证收集证据，最后才拆可验证的小 PR。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T02:54:39Z }
related:
  - pstack
  - evidence-gate
  - coding-agent-workflow
  - plan-mode-multiagent
sources:
  - ../../../raw/articles/lauren/The Complete Guide to pstack Pt. 2.md
---

# Definition

**用代码做计划**（pstack Pt.2）：多数 harness 的 Plan Mode **过度指定实现细节、对其余欠指定**。抽象长计划制造进度幻觉，还容易让模型发明用不到的边角风险。

做法：

1. **间接提问**：先让 agent 用自己的话复述问题（压缩噪声、暴露误解）。
2. **补上下文**：`/recall` 历史会话；`/how` `/why` 读现有实现，而不是每次新对话从零建模。
3. **从调用方往回推**：共享库先写 README/教程（Diátaxis 四类文档拆开），再倒推 API 与架构。
4. **并行原型**：不要收下第一稿；用 throwaway 草图 + 验证技能（截图、计时、开关对比）拿经验证据。
5. **`/architect`**：接地气 → 多模型并行类型草图 → 别的模型交叉评审 → 按草图实现。出现跨调用点的 workaround、`any`、强转，就当经验证明架构错了，推倒重来。
6. **战术计划靠后**：设计满意后再拆 multi-phase plan；每项必须**跑过代码**，单测不够。大计划可临时进仓，做完删掉。

这与得物 [Plan 模式与主子 Agent](./plan-mode-multiagent.md) 不是同一对象：那边把 Plan 做成可持久化运行对象；这边反对抽象计划、主张用代码回答开放问题。

## Related

- [pstack](../entities/pstack.md)
- [Evidence Gate](./evidence-gate.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [打开 raw](<../../../raw/articles/lauren/The Complete Guide to pstack Pt. 2.md>)
