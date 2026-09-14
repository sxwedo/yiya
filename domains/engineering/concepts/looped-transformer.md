---
type: Concept
title: "Looped Transformer"
description: "同一组 Transformer 块在深度上循环套用，用时间换参数。不是隐藏 CoT；评测还受主 harness 绑定影响。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T14:10:00Z }
related:
  - eval-driven-development
  - unreliable-components-reliable-systems
  - agents-md
sources:
  - ../../../raw/articles/Sebastian Raschka/GPT-6 Astra, looped transformers, and hidden reasoning.md
---

# Definition

**Looped Transformer**（循环 Transformer / recurrent depth）：同一组（或少数几组）Transformer 块在深度方向上循环套用，用时间换参数，而不是把层数线性堆高。本库对 Raschka 文只灌了抓取要点，**没有**全文论文推导；下面三件事按要点拆开——混为一谈会把产品策略当成架构突破：

1. **循环深度**是架构选择：块复用，推理时可多转几圈换能力。
2. **隐藏 CoT**（不展示推理痕迹）是产品/训练策略，不能直接等同于 looped blocks。
3. **评测 harness**：独立共享 harness 更可比。模型常按主 harness 训练，换一套可能低估。要点里 Astra 在 Artificial Analysis 上处于前沿，coding-agent 指数并非碾压——可能是 harness 绑定，不是「不会写代码」。旁注：新模型更会读题，旧的冗长 `AGENTS.md` / `SKILL.md` 有时变成约束，见 [AGENTS.md](../../agents/entities/agents-md.md)。

## 何时不用

不是 agents 域的 [Loop Engineering](../../agents/concepts/loop-engineering.md)（找活/分派/验收闭环）。不要把「隐藏推理」写成 looped 的定义。评测怎么当方向盘，见 [评测驱动开发](./eval-driven-development.md)。要对齐论文细节，先把原文成文灌全，再 rewrite。

## Related

- [评测驱动开发](./eval-driven-development.md)
- [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md)
- [AGENTS.md](../../agents/entities/agents-md.md)
