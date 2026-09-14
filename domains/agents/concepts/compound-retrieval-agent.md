---
type: Concept
title: "复合检索 Agent"
description: "Agent 自主决定多源并行检索、评估补搜与精读，再按来源权威性交织生成回答；不是单次向量召回。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T12:00:00Z }
related:
  - llm-semantic-ranking-embedding
  - retrieval-quality-pipeline
sources:
  - ../references/dewu-compound-retrieval-agent.md
---

# Definition

**复合检索 Agent**（得物知识问答）把检索做成 ReAct 闭环：搜索 → 评估 →（必要时）精读/再搜 → 整合。传统 RAG 是单向的：提问 → 向量 → 拼接 → 生成，Agent 被动吃检索结果。这里 Agent 决定用哪些工具、搜几次、要不要拉全文、何时停止；用户不必说「去查飞书」。

运行时用 AgentScope 2.0 **HarnessAgent**，生产向能力里本产品只用三块：ReAct 循环、Middleware、并行工具调用（`Toolkit.parallel(true)` + Java 21 虚拟线程，工具是 HTTP I/O）。没有改框架循环代码。

产品两条线同一轮可并行：

- **知识库**：产品文档、流程、FAQ，按领域/部门由管理员维护，权威、结构化。
- **个人飞书**：用户勾选的消息 / 文档 / 妙记，权限跟飞书 openId 走。

问「SSO 接入流程」时，可能知识库拿官方文档、技术群拿最新讨论、周会妙记拿决策。知识库给基座，个人数据给实时补全——这是产品差异，不是「多搜几个源拼起来」。

权限两层：知识库按可访问列表；飞书 API 用当前用户身份。同一问题，不同人看到的不同。

评估三维：相关（是否直接回答，还是词像意思不对）、完整（步骤/申请/测试是否齐）、时效（是否有更新版）。不足时三种挖：`get_document_content` 精读高价值残篇；换数据源补搜；冲突则按权威性排序（企业知识库 > 飞书文档 > 消息/妙记）并在回答里标明采信谁。`SourceCollector` 按 `sourceId` 跨工具去重，关键句标 `[src:sourceId]`。

决策依据是结构化提示词（做什么、为什么，不是逐步指令）+ Middleware 兜底。提示词给优先级；最终组合由模型在框架内选。质量过滤挂 `onActing`，对 Agent 透明——它只看见筛过的结果。关注点分离：提示词定策略，中间件定质量，循环定执行。筛的细节见 [检索质量 Pipeline](./retrieval-quality-pipeline.md)。

生产还要多模态截图提问（自动切视觉模型）和多实例 SSE 断点续传、模型容灾——那些是可靠性，不是检索策略本身。

## Related

- [检索质量 Pipeline](./retrieval-quality-pipeline.md)
- [LLM 排序语义表征](../../engineering/concepts/llm-semantic-ranking-embedding.md)
