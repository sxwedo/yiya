---
type: Concept
title: "历史不等于记忆"
description: "原始会话只保留当时说过什么；记忆是可更新、可遗忘、可按需召回的状态。长窗口提高一次能读多少，不替代状态维护。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T12:00:00Z }
related:
  - async-memory-precipitation
  - four-layer-agent-memory
  - online-memory-pipeline
  - production-vertical-agent
  - openviking
sources:
  - ../references/huolala-llm-memory-online.md
  - ../references/dewu-multiagent-memory.md
---

# Definition

**历史不等于记忆。** 货拉拉把这句话写成工程选择题：不带历史会失忆；每次带上全部历史会把 token 和等待堆到无穷，而且模型仍要当场判断新旧关系。专门记忆系统交出的是**当前相关的偏好、事件和任务状态**，单次输入基本稳定。

长上下文只提高「一次调用能读多少材料」，没有改变历史仍是一堆按时间排列的原始消息。历史保留「当时说过什么」；记忆要把其中的信息整理成可复用的事实、关系和任务进展，并在新信息出现时判断它是**补充、修正还是覆盖**旧状态。司机上次拒绝的原因、常跑区域、车型计划都会变；把每条消息当同等重要的历史，等于拒绝生命力。

货拉拉的对照表把三种策略钉死：

| | 不带历史 | 全量历史 | 记忆系统 |
| --- | --- | --- | --- |
| 模型拿到什么 | 当前请求 | 累积原始会话 | 当前相关的状态 |
| Token / 成本 | 低 | 持续增长 | 低且基本稳定 |
| 状态变化 | 无法延续 | 有记录，要临时判新旧 | 可持续更新 |
| 跨会话连续性 | 低 | 中 | 高 |

维护投入从「几乎为零」变成「要提炼、更新、召回」——这是记忆系统存在的理由，不是长窗口的失败。

得物从执行链路再钉一颗钉：记忆不是外挂拼 Prompt。平台要同时接住三件事——会话延续（指代、多轮任务）、跨会话复用（偏好与稳定事实）、上下文关联（新消息挂上已有状态）。四层生命周期（Working / Session / User / Agent）是**作用域**；货拉拉在线四步是**怎么把历史写成可维护对象**。两页互补，见 [四层 Agent 记忆](./four-layer-agent-memory.md)、[在线记忆流水线](./online-memory-pipeline.md)。

写记忆时不要把 AI 的建议误写成用户事实；读记忆时不要把「语义相似」当成「当下该用」。遗忘与合并是功能，不是缺陷。

## Related

- [异步记忆沉淀](./async-memory-precipitation.md)
- [四层 Agent 记忆](./four-layer-agent-memory.md)
- [在线记忆流水线](./online-memory-pipeline.md)
- [生产级垂类 Agent](./production-vertical-agent.md)
- [OpenViking](../entities/openviking.md)
