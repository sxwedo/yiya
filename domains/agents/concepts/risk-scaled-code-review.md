---
type: Concept
title: "风险分层代码评审"
description: "Agent 产量下，评审连续跑、人只看风险层。目标是人时最少且 revert 不升。机器人批准不能顶人。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-17T12:00:00Z }
related:
  - coding-agent-workflow
  - evidence-gate
  - playbook-feedback-loop
  - auto-mode
  - claude
  - llm-as-judge-runtime
sources:
  - ../../../raw/articles/Claude/How the Claude Code team does code review.md
---

# Definition

**风险分层代码评审**（Claude Code 团队，2026-10-15）：Agent 把改动量抬到人手读不过来之后，「有没有人读过」不再是好代理指标。该问的是：这处会出什么错，该由哪一层检查抓住。目标是**人时最少、revert 和事故不升**。他们写：6–9 月合入 PR 翻倍，被 revert 的比例降了四成以上。没取消评审，是把大部分阅读交给机器，并投资快速撤销。

对照：[Coding Agent Workflow](./coding-agent-workflow.md) 是规划→执行→部署的驾驭面；本页是合入路径上的分层检查。[Evidence Gate](./evidence-gate.md) 管交付状态要证据才能跃迁；这里低风险可以无人批，高风险路径必须人在。[Auto Mode](./auto-mode.md) 是工具调用批不批；本页是 PR 批不批。

## Mechanism

1. **评审像拼写检查，不是终点闸门。** 开 PR 前：能跑的测试/构建/截图，第二 agent 用新上下文看 diff。CLAUDE.md 短、当索引；REVIEW.md 由 owner 写「失败长什么样」，限制 nit，要文件行号当证据。
2. **每层漏一些，叠起来漏得少。** 开 PR 前自验 → 必过 CI → 并行找 bug 再投票 → 安全审查（未关 finding 不能合）→ 按风险要 0/1/2 个人 → merge queue 在最新 main 上重跑 → 旗标、内部先用、分通道发布 → 快关旗标/回滚。
3. **人批按变更风险，不按作者头衔。** 文档/旗标后的加法可以无人；普通产品一人；敏感路径和列出的文件两人。Agent 的批准永不顶人。谁 prompt 谁负责，等同自己手写。批准钉死某一 commit，新 commit 要重批。
4. **噪声在 Agent 作者身上更贵。** 人可以挥掉 nit；Agent 会改，再开一轮。要收敛：限制轮次，后几轮只看新 diff。事故做成每日 eval；改 reviewer 的 prompt/工具/模型，用全套旧事故打分，分没升就丢掉。
5. **合入的人拥有。** 变更要小、可逆、爆炸半径定检查强度。方向不对趁早在频道里改，别等成品 PR 上拦。共享上下文靠公开频道，不是每行都设人闸。

产品侧 Code Review 对外仍是 findings 不是 approvals；他们自己的仓在低风险上可以走到自动检查合入，这条线还在动。

## Boundaries

不是 [Claude](../entities/claude.md) 产品卡，不是 Code Review 功能发布稿（那是另一条 raw：`claude.com/blog/code-review`）。不是安全审查 Action 的安装说明。Revert 升了就不是省人时，只是把时间挪到救火。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Evidence Gate](./evidence-gate.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [Auto Mode](./auto-mode.md)
- [Claude](../entities/claude.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
