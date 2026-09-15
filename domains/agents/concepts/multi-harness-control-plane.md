---
type: Concept
title: "Multi-Harness Control Plane"
description: "多套 Coding Agent Harness 之上的控制面：任务与项目事实与执行器无关，适配器封装差异，权限和状态放在 Harness 外。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - amp
  - software-factory-cost
  - delivery-harness
  - minimal-agent-harness
  - coding-agent-workflow
  - mena
  - herdr
  - agent-orchestrator
  - agents-md
sources:
  - ../../../raw/articles/Smartpig/如何统一管理 Codex、Claude、DeepSeek 等不同的 AI Harness，让切换像换编译器一样简单.md
  - ../../../raw/articles/轩见AI/大厂开始合并 Agent：企业不需要 100 个孤岛 AI 员工，而需要一个统一工作台.md
---

# Definition

**Multi-Harness Control Plane** 解决的不是「哪个模型最好」，而是工作流被某一套执行环境锁死。Harness 不只是模型，是模型外面整套：提示词加载、文件访问、Shell、工具、权限、上下文、任务状态、日志。直接并用 Codex / Claude / DeepSeek 会遇到：配置格式各一套、同一规则复制到多个文件、权限行为不一致、会话无法迁移、切换时要重新解释整个项目、结果难以复现。

办法不是再造万能 Agent，而是在各 Harness 之上建控制面，切换像换编译器。

1. **先统一任务，不统一模型。** 不要把一句自然语言直接丢给某个 Agent。任务定义成与 Harness 无关的结构：goal / workspace / constraints / acceptance / permissions（例：不改公开 API、网络 deny）。切换时变的是执行者，不是问题。
2. **一份项目事实源**（如 `.agent/`），再生成各平台的 [`AGENTS.md`](../entities/agents-md.md) / `CLAUDE.md`。规则只维护一处。
3. **Adapter** 做任务转换、上下文注入、工具映射、结果归一。
4. **能力注册表**：必需能力缺失则拒跑或改路由，不假装 Codex 和 DeepSeek 完全等价。
5. **权限与状态在 Harness 外**：会话可迁移；输出格式统一才便于比较。

企业侧同一逻辑（轩见 AI）：一个任务入口 + 多个专业 Agent + 共享底座，而不是 100 个孤岛聊天窗，也不是一个万能超级员工。

与 [Delivery Harness](./delivery-harness.md)（交付合同与证据）、[Minimal Agent Harness](./minimal-agent-harness.md)（单产品原语）、[mena](../entities/mena.md)（本机多产品启动壳）互补：本页是团队级多执行器编排。


## Boundaries

多套 Harness 之上的控制面，不是单产品原语，不是本机启动壳 mena，不是 Delivery 合同。不要 100 个孤岛聊天窗。

## Related

- [Amp](../entities/amp.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Delivery Harness](./delivery-harness.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [AGENTS.md](../entities/agents-md.md)
- [mena](../entities/mena.md)
- [Herdr](../entities/herdr.md)
- [Agent Orchestrator](../entities/agent-orchestrator.md)
