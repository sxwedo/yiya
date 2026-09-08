---
type: Concept
title: "用不可靠组件造可靠系统"
description: "AI 组件输出不可预测是常态；工程价值在于熟练决定下一步，把不可靠部件组织成可靠软件系统。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-08T10:45:00Z }
related:
  - eval-driven-development
  - coding-agent-workflow
sources:
  - ../references/ng-evals-watershed.md
  - ../../../raw/articles/Andrew Ng/The AI Engineering Skills Map.md
---

# Definition

**用不可靠组件造可靠系统**是 AI 应用工程的核心手艺：模型与工具调用的结果不可预先钉死（Unpredictable outputs 是 AI 软件与传统可预测软件的根本差异），因此开发必须比传统软件更迭代——反复构建、看中间结果、再决定下一步试什么。

瀑布式「预画清流程」的前提在此失效。熟练工程师的天花板，不在消除不可靠，而在组织不可靠：边界、回退、评测与运营把局部失败关在系统可承受范围内。

在 Andrew Ng 提出的 **AI 工程技能地图（The AI Engineering Skills Map）** 中，把不可靠组件组织成可靠系统依赖四大工程支柱：

1. **构建与部署 AI 应用（Building & Deploying）**：理解 LLM、上下文工程、RAG、Agent 闭环等构件，核心是用严格统计学视角建立**有纪律的 Evals 与误差分析循环**，让随机系统行为具备可度量与可治理的确定性；
2. **软件工程基本功（Software Engineering Fundamentals）**：在成本、扩展性、可靠性、速度与安全间做权衡；用精确的系统设计与架构语言约束并引导 Coding Agent，避免盲目 Vibe Coding 引入不可控债务；
3. **Coding Agent 驾驭（Using Coding Agents）**：建立智能体心智模型，掌握干预与放手的自主度边界，通过验证器（Verifiers）辅助 Agent 闭环，避免破坏生产环境；
4. **定义与塑造构建（Shaping the Build）**：工程重心从单纯实现固定设计，上移到具备产品感知与业务目标，主动定义 Spec 与承担端到端交付所有权。

## Related

- [评测驱动开发](./eval-driven-development.md)
- [Coding Agent Workflow](../../agents/concepts/coding-agent-workflow.md)
