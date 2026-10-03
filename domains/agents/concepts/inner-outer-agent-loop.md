---
type: Concept
title: "内外两层循环"
description: "内层改代码并自己验证；外层收仓外反馈再交给协调 Agent。人不当 DevTools 传话筒。2500 PR 是吞吐，不是功能数。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-04T00:00:00Z }
related:
  - pstack
  - agent-skills
  - loop-engineering
  - playbook-feedback-loop
  - coding-agent-workflow
  - evidence-gate
  - plan-with-code
sources:
  - ../../../raw/articles/Michael Guo/两个 AI Skills 王者之间的对话：一个月 2,500 个 PR，是怎么做到的.md
---

# Definition

**内外两层循环**（Michael Guo 记 Poteto × Matt Pocock 访谈，2026-10-03）：月合 2,500 个 PR 容易被读成产量神话。访谈里的工作法是两层接上——**内层**按目标改代码、运行、看真实结果再改；**外层**从 Slack / Linear / X 收新信息，交给协调 Agent 关联问题、分派执行。人抽查产出、改工具和规则，不当 Agent 和 Chrome DevTools 之间的传话人。

数字是自述，含大量维护；不能当成 2,500 个新功能，也没有足够信息比较每个 PR 的大小。

## Mechanism

1. **Skills 从反复纠正开始。** 每天盯着 Agent 时，真正重复的是教它按你的方式写、判、推进。把步骤和通过条件写清楚，比「认真检查一下」可调用。领域判断（问题在哪、什么算好）仍是瓶颈。
2. **放手取决于自验证。** 人去跑、看火焰图、再把结果口述回去，Agent 做不完一轮。补上运行、操作界面、读 traces / snapshots 之后，它才能自己定位、再改。测试通过不够；界面有没有打开、卡顿有没有降、有没有新回归，都要碰到运行中的应用。访谈说即使不用 pstack、不用 Matt 的 Skills，验证也最该先补。
3. **机械步骤进 CLI。** 每个 Agent 自己写验证脚本会重复、会分叉。确定的迁移和检查收成小工具；Skill 正文只写何时用、顺序、怎样判断。
4. **反复犯错写成仓约束。** 巨大文件、乱堆目录这类，聊天里提醒只管这一次。改成 lint、目录边界，后续 Agent 和新同事都少记隐含约定。
5. **外层避免人做收件箱。** 多条卡顿反馈若立刻各开一个执行 Agent，会重复调查、错过共同原因。协调层先并问题再分工。
6. **发现先记，不立刻修。** 持续扫不良模式时先追加到文档，隔几天再看；一堆局部补丁往往该改成一条规则或一个抽象。即时清任务会挡住共同原因。
7. **人审环境，不审每一单。** 规模上来后抽查坏习惯，回头改 Skills / lint / 类型 / 工具。验证 Agent 可以跑到可合入，早上再看提交、必要时回滚。严格验证耗 token；难用程序确认的领域，自动合入会卡住。
8. **流程可混用。** Skills 是流程的表达，可拆可接。聊天记录里反复纠正、反复重讲的背景，就是下一份 Skill 的原料。

## Boundaries

不是 [pstack](../entities/pstack.md) 安装说明，不是 [Agent Skills](../entities/agent-skills.md) 格式页。不是「装了技能包就能隔夜合入」。[Loop Engineering](./loop-engineering.md) 讲怎么设计能自己找活的环；本页是内层验证 + 外层收件 + 协调这一具体接法。[Playbook 反馈闭环](./playbook-feedback-loop.md) 管一次失误写成下次默认；本页还管吞吐从哪来、为什么先不修。[Coding Agent Workflow](./coding-agent-workflow.md) 是规划→执行→部署的驾驭面，不收这套内外分工。无法验证或不可逆修改，不要推到自动合入。

## Related

- [pstack](../entities/pstack.md)
- [Agent Skills](../entities/agent-skills.md)
- [Loop Engineering](./loop-engineering.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Evidence Gate](./evidence-gate.md)
- [用代码做计划](./plan-with-code.md)
