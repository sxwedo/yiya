---
type: Concept
title: "Delivery Harness"
description: "包裹在模型之外的交付控制系统：合同锁事实、边界限半径、证据控跃迁、修复写回默认规则。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T14:52:00Z }
related:
  - coding-agent-workflow
  - grok-bot
  - agent-self-evolution-flywheel
  - evidence-gate
  - harness-self-improvement
  - minimal-agent-harness
  - playbook-feedback-loop
sources:
  - /references/dewu-delivery-harness.md
---

# Definition

**Delivery Harness** 不替代工程判断，而是把判断的时机、输入与结果留在可复查链路上。模型负责生成与推理；Harness 接管：读哪份事实、可改多大范围、结果如何被证明、何时必须停止。

四个可复用组件：

1. **Version Contract** — 锁定本轮事实源与交付范围；临时推断不得自动升格为长期事实。
2. **Execution Boundary** — 限制仓库、分支、环境与外部写入权限（如 worktree：一需求 × 一仓库 = 一现场）。
3. **Evidence Gate** — 状态跃迁必须匹配可复查证据；“代码完成”≠ 验证通过 ≠ 产品验收 ≠ 生产发布。
4. **Repair Loop** — 真实反馈落入 Repair Case；只有改变下一次默认行为（测试 / 门禁 / 合同）才算被系统吸收。

适用场景：单人（或少量人）用 Agent 并行推进多运行时交付，需要可追溯、可停机、可升级的质量秩序。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Grok Bot](../entities/grok-bot.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Evidence Gate](./evidence-gate.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
