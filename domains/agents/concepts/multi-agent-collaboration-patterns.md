---
type: Concept
title: "多 Agent 协作模式"
description: "先过三道闸（瓶颈可拆、交付可定义、交接划算）再选协作形：顺序交接、主管分工、专家路由、并行协作；拆分后系统还要管任务、上下文权限、进度回传与失败变更。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T01:00:00Z }
related:
  - multi-agent-governance
  - multi-agent-failure-modes
  - plan-mode-multiagent
  - role-first-agent
  - graph-driven-agent-workflow
  - graph-engineering
  - llm-as-judge-runtime
sources:
  - ../../../raw/articles/叶小钗/一文讲透多Agent协作：4种模式、3个判断标准、4大工程落地陷阱.md
  - ../../../raw/articles/Claude/Common workflow patterns for AI agents—and when to use them.md
  - ../../../raw/articles/Claude/Building multi-agent systems: When and how to use them.md
  - ../../../raw/articles/Claude/Introducing dynamic workflows in Claude Code.md
  - ../../../raw/articles/Claude/Multi-agent coordination patterns： Five approaches and when to use them.md
---

# Definition

**多 Agent 协作模式**回答「什么时候拆、怎么合作、拆完系统还要干什么」，而不是默认越多 Agent 越好。叶小钗以写公众号为例，把判断标准与四种合作形写清楚。

## 先过闸，再拆人

1. **瓶颈可拆**：真正卡在「可独立推进且持续判断」的工作段，而不是单次工具并发就能解决的搜索。
2. **交付可定义**：每人负责什么、交回什么、结果怎么被下一环使用——否则分头查完对不上。
3. **交接划算**：每多一个 Agent 都要交代背景、准备上下文、验收结果并付调用成本；省下的等待与上下文干扰，要盖过汇总与返工。

单 Agent 稳定工作仍需系统提示词、上下文管理、工具管理、权限与安全边界（边界靠程序执行，不靠提示词口头约束）。

## 四种合作形（可组合）

| 模式 | 要点 | 适用 |
| --- | --- | --- |
| **顺序交接** | 前环达标才开后环；可回流补查 | 步骤稳定的流水（调研→写作→审查）；程序预置步骤叫工作流，Agent 在允许范围内自判下一步 |
| **主管分工** | 协调 Agent 动态委派执行 Agent 并汇总；可多层但要限层数与任务数 | 一开始列不全步骤、随进展改安排 |
| **专家路由** | 按请求类型分给已定责 Agent | 类别清晰、工具/权限差异大 |
| **并行协作** | 无交叉的工作同时做；勿同时改同一工件，先交意见再统一合并 | 事实核查 ∥ 表达检查这类正交任务 |

顺序交接的隐患：摘要一路漏关键条件——后环要能回到原始资料核对。

## 拆分后系统还要做的四件事

把多 Agent 当项目组：程序（不一定是独立 PM 软件）提供能力——

1. **创建与管理任务**：编号、状态、配额、超时、取消与关联子任务
2. **准备上下文 + 限制工具权限**：执行 Agent 看不到协调侧全对话；权限在启动时由程序落地
3. **记录进度并交回结果**：查询或完成通知；汇总方要裁决冲突意见，不能盲合并
4. **处理需求变化与失败**：改/取消任务；结果带原请求快照以免用过期结论；失败分可重试 vs 缺料；保留工具轨迹可回查

Anthropic 把「工作流」与「完全自主 Agent」分开：工作流给整体路径与检查点，步内仍可推理与用工具。生产里三种块盖大多数：**顺序**（有依赖）、**并行**（独立子任务 fan-out/fan-in）、**evaluator-optimizer**（生成与评判分开迭代，要有可测量停止条件）。先用单 Agent、再加最简工作流；三种可嵌套。evaluator-optimizer 见 [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)。

协调形再拆五条（从简到复杂）：**generator-verifier**（质量可显式判据）、**orchestrator-subagent**（可拆且子任务有界，默认起点）、**agent teams**（并行、独立、长跑，工人跨任务保上下文）、**message bus**（事件驱动、生态会涨）、**shared-state**（发现要实时互见，无中心路由）。子任务短用主管分工；要长记忆用 teams；流程随事件变用总线；发现要互喂用共享状态。Dynamic workflows 是并行子代理 + 独立核验的产品形。

与 [多智能体治理](./multi-agent-governance.md)（社会基础设施）、[多智能体失效模式](./multi-agent-failure-modes.md)、[Plan 模式与主子 Agent](./plan-mode-multiagent.md)（主子编排落地）、[Role-first Agent](./role-first-agent.md)、[Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md) 互补：本页专精「何时拆 + 四种形 + 运行时任务面」。

## Related

- [多智能体治理](./multi-agent-governance.md)
- [多智能体失效模式](./multi-agent-failure-modes.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Role-first Agent](./role-first-agent.md)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [Graph Engineering](./graph-engineering.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
