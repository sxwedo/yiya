---
type: Entity
title: "Claude Tag"
description: "Anthropic 频道侧 Agent：跨轮记忆、自然语言日程、工作区身份与 MCP。CI on-call 用它当第一响应，不是代某个用户行事。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - agent-oncall
  - claude
  - mcp
  - claude-academy
  - playbook-feedback-loop
sources:
  - ../../../raw/articles/Sachin Malhotra/Claude on call: How Claude Tag serves as Anthropic’s first responder for CI／CD failures.md
  - ../../../raw/articles/Claude/Agent identity in Claude Tag： a new access model for autonomous, team-wide AI.md
---

# Summary

**Claude Tag**（<https://claude.com/product/tag>）是 Anthropic 在协作频道里常驻的 Agent 产品面。Sachin Malhotra 写 CI on-call：需要 **memory**（跨轮记得做过什么）、**connections**（调查和行动）、**schedules**（自然语言例行，如周一 9:00 交接）、**instructions**（每轮指令 + Git 里的 skills / lessons）。管理员一次性接服务账号和 MCP（Datadog、Grafana 等）。文称近几个月每次有 SITREP 的事故，Claude 都写了第一份分析，**通常 15 分钟内**。配套 [oncall-kit](https://github.com/anthropics/oncall-kit)：把历史事故编成分诊 playbook，频道里只读诊断、升级、学习。要 Team / Enterprise。值班流程见 [Agent On-call](../concepts/agent-oncall.md)；失误写回默认见 [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)。

**Agent identity** 解决「代用户行事」在多玩家频道会坏：任务在提问者下线后继续；频道里多人同时指挥，没法选「用谁的权限」。Claude 在各系统有**自己的**账号（Slack 应用、GitHub App、数仓服务账号），共享频道不能成为进私人文档的侧门。工作区基线身份，频道可覆盖；私密频道各有身份，记忆不串。DM 仍走个人账号。问的是「这个 Agent 在这个隔间能做什么」，不是「这个用户能做什么」——因此没仓库权限的成员，只要频道档案授了 Claude，也可以让它读仓。撤销身份即全断。凭证在网络边界注入。

产品线见 [Claude](./claude.md)。教学入口见 [Claude Academy](./claude-academy.md)（员工 onboarding 也用 Tag）。工具面见 [MCP](./mcp.md)。本页记产品与身份模型，不把整份 on-call runbook 抄进来。

## Related

- [Agent On-call](../concepts/agent-oncall.md)
- [Playbook 反馈闭环](../concepts/playbook-feedback-loop.md)
- [Claude](./claude.md)
- [Claude Academy](./claude-academy.md)
- [MCP](./mcp.md)
