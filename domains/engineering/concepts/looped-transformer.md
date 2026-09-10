---
type: Concept
title: "Looped Transformer"
description: "把 Transformer 块循环套用（recurrent depth）换深度：与「隐藏 CoT」不是一回事；评测还受主 harness 绑定影响。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-10T16:00:00Z }
related:
  - eval-driven-development
  - unreliable-components-reliable-systems
sources:
  - ../../../raw/articles/Sebastian Raschka/GPT-6 Astra, looped transformers, and hidden reasoning.md
---

# Definition

**Looped Transformer**（循环 Transformer / recurrent depth）：同一组（或少数几组）Transformer 块在深度方向上**循环套用**，用时间换参数，而不是把层数线性堆高。Raschka 借 GPT-6 Astra 的公开讨论区分三件事：

1. **循环深度**是架构选择，不是把思维链藏起来。
2. **隐藏 CoT**（不展示推理痕迹）是产品/训练策略，不能直接等同于 looped blocks。
3. **评测 harness**：独立共享 harness 更可比；模型常按主 harness 训练，换 harness 可能低估。冗长 `AGENTS.md` / `SKILL.md` 对新模型有时是约束。

不是 agents 域的 [Loop Engineering](../../agents/concepts/loop-engineering.md)（找活/分派/验收闭环）。

## Related

- [评测驱动开发](./eval-driven-development.md)
- [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md)
