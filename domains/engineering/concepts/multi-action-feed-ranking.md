---
type: Concept
title: "Multi-action Feed Ranking"
description: "信息流不只预测会不会点开，而是并行估计赞/评/转/停留/负反馈等，再合成排名；安全与多样性在规则层，高分仍可能被挡。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - x-algorithm
  - llm-semantic-ranking-embedding
sources:
  - ../references/bright-ospo-x-algorithm.md
---

# Definition

**Multi-action Feed Ranking**（x-algorithm 开源解读）：预测的不只是「会不会点开」，还包括看完之后会做什么。单一点击率会把标题党推上去；多任务才能区分高点开低质量 与 长读低负反馈。

公开链路（代码仍缺训练数据/完整权重）：

1. 候选召回
2. 当前用户状态
3. **Phoenix** 多任务行为预测（赞、回复、转发、停留、关注、负反馈、举报等并行）
4. **RankingScorer** 合成排序分
5. 安全 / 可见性过滤
6. 作者多样性
7. 导出与推理优化（recon / StableHLO）

模型管偏好预测；安全、可见性、作者多样性由规则层把关——高分帖仍可能被挡。排序和安全分工，避免把「不该出现」训进偏好模型。

与 [LLM 排序语义表征](./llm-semantic-ranking-embedding.md) 对照：后者是搜索精排里 Query–供给语义向量；本页是 Feed 多行为目标与生产链路。开源实体：[x-algorithm](../entities/x-algorithm.md)。

## Related

- [x-algorithm](../entities/x-algorithm.md)
- [LLM 排序语义表征](./llm-semantic-ranking-embedding.md)
