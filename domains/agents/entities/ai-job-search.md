---
type: Entity
title: "AI Job Search"
description: "本机求职申请框架（Claude Code）：评估 JD、改写 CV、生成求职信与面试准备；可 fork 自用，门户检索技能默认定丹麦市场。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-13T06:35:00Z }
related:
  - claude
  - coding-agent-workflow
  - role-first-agent
sources:
  - ../references/madslorentzen-ai-job-search-github.md
---

# Identity

**AI Job Search**（仓 [MadsLorentzen/ai-job-search](https://github.com/MadsLorentzen/ai-job-search)，MIT）是跑在本机的求职申请工作流：建立在 [Claude Code](./claude.md) 上，用 `/setup` → `/scrape` → `/apply` 等技能做个人画像、搜岗、匹配打分，再经起草–评审流水线产出定制 CV / 求职信（LaTeX）与面试准备。作者声明非 Anthropic 官方项目；无附属代币或付费赞助计划。

核心评估与起草流程自称语言/国家无关；门户搜索技能默认对接丹麦招聘站，可换成本地板。也可用其他编码代理（见仓内 `AGENTS.md` 与社区 fork）。

定位：面向求职的 **Agent 工作流仓库**，不是招聘平台，也不是又一款通用 harness。对照：[Coding Agent Workflow](../concepts/coding-agent-workflow.md) 是通用编码工作流；本页是同一类「技能化流水线」落在求职域。

## Boundaries

本页无成文 raw，不编未灌实现。细节以仓或站点为准。

## Related

- [Claude](./claude.md)
- [Coding Agent Workflow](../concepts/coding-agent-workflow.md)
- [Role-first Agent](../concepts/role-first-agent.md)
