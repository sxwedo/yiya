---
type: Concept
title: "Multi-Harness Control Plane"
description: "在多个 Coding Agent Harness 之上建统一控制面：任务与项目上下文与 Harness 无关，适配器封装差异，权限与状态放在执行器之外。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-06T14:55:00Z }
related:
  - delivery-harness
  - minimal-agent-harness
  - coding-agent-workflow
  - mena
sources:
  - ../../../raw/articles/Smartpig/如何统一管理 Codex、Claude、DeepSeek 等不同的 AI Harness，让切换像换编译器一样简单.md
---

# Definition

**Multi-Harness Control Plane**（多 Harness 控制面）解决「同时用 Codex / Claude / DeepSeek 等却被某一套锁死」：不造万能 Agent，而在各 Harness 之上统一。

要点：

1. **先统一任务**：goal / constraints / acceptance / permissions 与具体模型无关  
2. **一份项目事实源**（如 `.agent/`），再生成各平台的 `AGENTS.md` / `CLAUDE.md`  
3. **Adapter** 做任务转换、上下文注入、工具映射、结果归一  
4. **能力注册表**：必需能力缺失则拒跑或改路由，不假装完全等价  
5. **权限与状态在 Harness 外**：会话可迁移，输出格式统一才便于比较与切换  

与本域 [Delivery Harness](./delivery-harness.md)（交付门禁）、[Minimal Agent Harness](./minimal-agent-harness.md)（单产品原语）、[mena](../entities/mena.md)（本机多产品启动壳）互补：本概念偏「团队级多执行器编排」。

## Related

- [Delivery Harness](./delivery-harness.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [mena](../entities/mena.md)
- [打开 raw](../../../raw/articles/Smartpig/如何统一管理 Codex、Claude、DeepSeek 等不同的 AI Harness，让切换像换编译器一样简单.md)
