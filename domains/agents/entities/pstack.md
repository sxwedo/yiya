---
type: Entity
title: "pstack"
description: "poteto 的 Cursor 技能包：验证闭环（control-app CLI）当基础设施；计划用原型和 /architect 用代码做，不信抽象 Plan Mode。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T14:10:00Z }
related:
  - plan-with-code
  - grok-bot
  - agent-skills
  - evidence-gate
sources:
  - ../../../raw/articles/lauren/The Complete Guide to pstack Pt. 1.md
  - ../../../raw/articles/lauren/The Complete Guide to pstack Pt. 2.md
---

# Identity

**pstack** 是 lauren (@poteto) 的个人工程技能包，作 Cursor plugin 分发（[cursor/plugins pstack](https://github.com/cursor/plugins/blob/main/pstack/README.md)，入口 [x.ai/bot/plugin/9717366](https://x.ai/bot/plugin/9717366)）。作者用它维护 [Grok Bot](./grok-bot.md) 代码质量（自称高置信月级大量 PR）；pstack **不是** Grok Bot 产品。入口 `/poteto-mode`：按任务条件加载 playbook（文称 0.15.0 约 23 份），不是独立 skill，为省 token。

## Mechanism

**Pt.1 验证是基础设施。** Agent 能自己验收，人才能不当瓶颈。`/create-verification-skill` 是 meta-skill，给自家 App 生成验证技能。原则 "Build the Lever"：给工具不给纯 Markdown。典型是小 CLI（文中 `/control-app`）：doctor、snapshot、screenshot、按键、feature-flag、wait-settle；destructive 要 `--dry-run`，输出机器可读。栈难调试就会难用 agent——作者甚至说愿为验证换技术栈。Feature Map 用 markdown 索引功能怎么从用户视角走到。并行不要本机 worktree 堆满；走 Cursor Cloud Agents + snapshot。

**Pt.2 计划用代码。** 多数 Plan Mode 过度指定实现、欠指定意图。失败两种：意图欠指定；上下文不够。先间接提问：让 agent 用自己的话复述 Slack 线程再写代码。`/how` 追运行时（跨服务就派探索子代理）；`/why` 并行查 git/PR、票、文档、监控；`/teach` 调二者，逼它证明取舍；`/recall` 从历史会话补上下文。文档用 `/technical-writing`（Diátaxis 四态）+ `/unslop`。原型 playbook 用 throwaway / 开关变体 + control-app 截图计时。`/architect`：ground → 多模型并行画类型签名 → 交叉评判 → 按草图实现 → 类型要 `any` 就整份作废。真要文档计划，用 multi-phase playbook：**每条任务必须跑过代码**，测试单独不算验证；大计划可暂存仓内，做完删。

作者明确写：**不相信抽象 planning skill**。概念页见 [用代码做计划](../concepts/plan-with-code.md)。证据门见 [Evidence Gate](../concepts/evidence-gate.md)。技能格式对照 [Agent Skills](./agent-skills.md)。

## Boundaries

- 当 Grok Bot 说明书。
- 当「先写万字 Plan 再动手」的安慰剂。
- 本页只到 Pt.2；Pt.3 未灌库。

## Related

- [用代码做计划](../concepts/plan-with-code.md)
- [Grok Bot](./grok-bot.md)
- [Agent Skills](./agent-skills.md)
- [Evidence Gate](../concepts/evidence-gate.md)
