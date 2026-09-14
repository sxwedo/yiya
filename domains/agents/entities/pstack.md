---
type: Entity
title: "pstack"
description: "poteto 的 Cursor 技能包：用验证、recall、原型和 architect 做可重复工程，而不是抽象 Plan Mode。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T02:54:39Z }
related:
  - plan-with-code
  - grok-bot
  - agent-skills
  - evidence-gate
sources:
  - ../../../raw/articles/lauren/The Complete Guide to pstack Pt. 1.md
  - ../../../raw/articles/lauren/The Complete Guide to pstack Pt. 2.md
---

# Summary

**pstack** 是 lauren (@poteto) 的个人工程技能包，作为 Cursor plugin 分发（[cursor/plugins pstack](https://github.com/cursor/plugins/blob/main/pstack/README.md)，入口 [x.ai/bot/plugin/9717366](https://x.ai/bot/plugin/9717366)）。用来在 agent 上做高置信交付，而不是堆 PR 数量。

入口命令是 `/poteto-mode`：按任务条件加载 playbook（不是独立 skill，为省 token）。技能与玩法包括 `/recall`（从历史会话补上下文）、`/how` `/why` `/teach`、`/technical-writing`（Diátaxis）+ `/unslop`、prototyping playbook、`/architect`、以及 Pt.1 的验证技能（如 `/control-app`）。作者明确写：**不相信抽象 planning skill**，计划通过代码、原型和验证完成。

作者用它维护 [Grok Bot](./grok-bot.md) 代码质量；pstack 不是 Grok Bot 产品本身。

## Related

- [用代码做计划](../concepts/plan-with-code.md)
- [Grok Bot](./grok-bot.md)
- [Agent Skills](./agent-skills.md)
- [Evidence Gate](../concepts/evidence-gate.md)
- [打开 raw Pt.2](<../../../raw/articles/lauren/The Complete Guide to pstack Pt. 2.md>)
- [打开 raw Pt.1](<../../../raw/articles/lauren/The Complete Guide to pstack Pt. 1.md>)
