---
type: Concept
title: "Dynamic Workflow 长程 SOP"
description: "步骤固定、要追踪复核的长任务：用脚本编排节点和 state，不靠主 Agent 上下文硬扛。判断写进流程，校验与执行分开。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-26T05:40:00Z }
related:
  - graph-engineering
  - evidence-gate
  - plan-mode-multiagent
  - data-agent-landing
  - eval-driven-development
sources:
  - ../../../raw/articles/货拉拉技术/货拉拉 DataAgent 实践：策略复盘的智能化探索.md
---

# Definition

**Dynamic Workflow 长程 SOP**（货拉拉 DataAgent / DID 策略复盘）：前后观察指标涨跌不能当因果。DID 要处理组、对照组、平行趋势。人工 SOP 跨工具、周期长、靠个人。单 Agent「硬扛」长链不行。

三种坑：① 规划——该做的检验被 Agent 自行判定「没必要」跳过；② 记忆——稳健性/warnings 没传到报告；③ 执行——各节点各选方法，pre/post 标反了，都有返回却不是同一套口径。根因：计划、状态、校验都堆在主 Agent 上下文。

Skills 沉淀规范但不调度；SubAgent 拆活但口径要主 Agent 拼；Agent teams 适合开放讨论。步骤相对固定、过程要追踪、结果要复核 → **Workflow 脚本**定节点、顺序、并行、state 传递、独立校验。货拉拉 HClaw 上：方法选择+取数 → 效果/稳健性/归因并行 → 按规则出报告 → **对抗验证**（验证者与执行者分离）。脚本本身不能乱访文件系统；具体活放进 Agent 节点。

## Boundaries

不是 NL2SQL 语义层（见 [Data Agent 落地](./data-agent-landing.md)）。不是开放项目用 teams 扯皮。本页不是 DID 教材，也不是投资建议。

## Related

- [Graph Engineering](../../agents/concepts/graph-engineering.md)
- [Evidence Gate](../../agents/concepts/evidence-gate.md)
- [Plan 模式与主子 Agent](../../agents/concepts/plan-mode-multiagent.md)
- [Data Agent 落地](./data-agent-landing.md)
- [评测驱动开发](./eval-driven-development.md)
