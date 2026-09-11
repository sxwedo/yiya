---
type: Concept
title: "Agent On-call"
description: "把 Agent 做成 CI/CD 值班第一响应：Slack 常驻记忆与指令、MCP 连观测与代码仓、Skill/lessons 沉淀复盘，编排子 Agent 并行取证并出 SITREP。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T00:10:00Z }
related:
  - playbook-feedback-loop
  - loop-engineering
  - harness-self-improvement
  - software-factory-cost
  - delivery-harness
  - claude-tag
  - claude
sources:
  - ../../../raw/articles/Sachin Malhotra/Claude on call: How Claude Tag serves as Anthropic’s first responder for CI／CD failures.md
---

# Definition

**Agent On-call** 把值班第一响应交给常驻 Agent，而不是等人半夜开电脑。Anthropic CI 团队用 Claude Tag 做 CI/CD 事件第一响应：中位约 14 分钟出首份证据型分析，并开源 [oncall-kit](https://github.com/anthropics/oncall-kit) 可复用。

四件套（缺一不可）：

1. **记忆**：值班频道里跨轮上下文，知道已做过什么
2. **连接与权限**：MCP 接到 Grafana / 日志 / PagerDuty / GitHub / K8s / Slack；独立服务账号
3. **日程**：自然语言例行（周一切班、日报天气）
4. **指令**：Git 里的 Skill / `oncall.md` / `lessons.md`，可评审、可迭代

运行路径大致是 **Detection → Triage → Resolution → Verification / Handoff**：

- 告警规则可偏确定性；是否叫醒人可走确定性 + 智能体双路径
- 编排 Agent 拉起多个 executor 并行查依赖与事实源，合成 SITREP
- 调查 Skill 按 bug 类写细步骤；`lessons.md` 每次结案自写，够频则升格进 Skill（与 Playbook 反馈闭环同族）
- 修复常走 feature flag / canary、缓解指令或给人审的 PR；验证复用同一套观测连接器
- 对外可用「天气」类汇总 Agent（如 ci-weather）降低「CI 怎么了」的人肉答疑

与 [Playbook 反馈闭环](./playbook-feedback-loop.md)、[Loop Engineering](./loop-engineering.md)、[Harness 自改进](./harness-self-improvement.md)、[Software Factory Cost](./software-factory-cost.md)（CI 自愈 / On-call 分诊）互补：本页专精「值班第一响应」形态。

## Related

- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [Loop Engineering](./loop-engineering.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Delivery Harness](./delivery-harness.md)
- [Claude Tag](../entities/claude-tag.md)
- [Claude](../entities/claude.md)
