---
type: Entity
title: "SearchCLI"
description: "火山引擎开源：Agent 驱动搜索自迭代。Skills 出策略，CLI 跑可复现实验，SPA 分配评测预算；人不让它直接改线上。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T13:50:00Z }
related:
  - retrieval-quality-pipeline
  - eval-driven-development
  - agent-skills
  - llm-as-judge-runtime
sources:
  - ../../../raw/articles/字节跳动技术团队/火山引擎开源 Agent 驱动的搜索自迭代技术.md
---

# Summary

**SearchCLI**（[volcengine/SearchCLI](https://github.com/volcengine/SearchCLI)，Apache-2.0，Node 20+）把「搜索不好时怎么改」做成 Agent 可跑的实验闭环，不是又一个召回引擎。会调用搜索只是第一步；更难的是：结果差时提出假设、花预算验证、交出可审阅的候选配置。

分工：**Agent 决定做什么；Skills 沉淀搜索专家规程；CLI 保证长任务可复现地做完。** 生产切换仍要人确认。开源入口是 `vs search tune`。

闭环固定为 `query-generate → validate → plan → run → report → compare → apply`。真实 Query 日志优先；没有时才合成 Query，且必须先给人看类型分布。`validate` 查格式/重复/类型倾斜；`plan` **不**调搜索和 LLM，只编译策略数、请求数、最大标注量。`run` 批量搜索：先 Source-item 银标筛方向，或直接 LLM Judge；算 NDCG / MRR / Precision、零结果率、延迟。`apply` 先 dry-run，确认后**只建候选 Scene**，不改默认入口。

服饰 / 综合商品 / 图片三套离线集：自动策略相对默认，NDCG@20 升 11.66%～13.50%，Precision@10 最高升 21.17%。文内写明：模型和数据不变时，只重配召回模式与权重也能挤出空间；线上仍取决于 Query 代表性与标签质量。

## SPA：预算花在值得测的策略上

调搜索参数不是普通数值优化：标注成本约 `strategy_count × query_count × topK`，反馈有噪声，还要可解释、能落地。SPA（Strategy Population Annealing）把策略编成带领域语义的 Genome（召回模式、dense/text 权重须归一、匹配门槛、候选规模），用专家先验初始化，而不是随机撒点。首版只做 **similarity-only**，不同时动 Rerank / 个性化 / 运营规则，才能把涨跌归因到文本相关性。

多保真：源 Item 都召不回，就别为 Top20 付 LLM 标。多视角 Elite（全局最好、分 Query 类型、稳、低延迟、低零结果、能打过 baseline、够多样）防止只卷平均 NDCG。进化是交叉 / 局部变异 / 向 Elite 移动，不是乱拼 JSON。鲁棒分还扣零结果、延迟、类型方差和置信区间宽度。

CLI 工程四件：Plan 先编译成本；有界并发（单失败不丢同批）；标签缓存 Key 含数据集+Query+Item+Judge 配置；Checkpoint/Resume 用原 Run ID 续跑。

## 何时不用

- 当召回/排序引擎本身：它调的是已有搜索应用的策略，不替换索引。
- 让 Agent 直接改线上：边界就是 dry-run + 人审 Scene。
- 当 [检索质量 Pipeline](../concepts/retrieval-quality-pipeline.md)：那条是召回之后 FastPass / Rerank / LLM 精评；SearchCLI 是**换策略再跑实验**。可共用 LLM Judge，见 [LLM-as-Judge Runtime](../concepts/llm-as-judge-runtime.md)。
- 当编码 [Harness 运行时层](../concepts/harness-runtime-layer.md)：Harness 管一步在什么约束下发生；这里 CLI 是搜索实验的执行层。

对照 [评测驱动开发](../../engineering/concepts/eval-driven-development.md)：假设 → 预算 → 证据。[Agent Skills](./agent-skills.md) 管规程怎么按需加载。

## Related

- [检索质量 Pipeline](../concepts/retrieval-quality-pipeline.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [Agent Skills](./agent-skills.md)
- [LLM-as-Judge Runtime](../concepts/llm-as-judge-runtime.md)
- [Harness 运行时层](../concepts/harness-runtime-layer.md)
