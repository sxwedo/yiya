---
type: Concept
title: "Multi-action Feed Ranking"
description: "信息流排序不只预测点击，而是多任务预测多种后续行为（赞/评/转/停留/负反馈等），再合成排名并叠加规则过滤。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T10:20:00Z }
related:
  - x-algorithm
  - llm-semantic-ranking-embedding
sources:
  - /references/bright-ospo-x-algorithm.md
---

# Definition

**Multi-action Feed Ranking**（多动作信息流排序）把「你会不会点开」扩展成一张行为预测表：点赞、回复、转发、停留、关注、负反馈、举报等并行估计，再由打分器合成排序分。模型管偏好预测；安全、可见性、作者多样性等由规则层把关——高分帖仍可能被挡。

与单一点击率目标相比，能区分「标题党高点开」与「长读低负反馈」等差异。可与本域 [LLM 排序语义表征](./llm-semantic-ranking-embedding.md)（搜索精排语义向量）对照：后者偏 Query–供给语义匹配，本概念偏 Feed 多行为目标与生产链路。

开源实例：[x-algorithm](../entities/x-algorithm.md)。

## Related

- [x-algorithm](../entities/x-algorithm.md)
- [LLM 排序语义表征](./llm-semantic-ranking-embedding.md)
- [X 的推荐算法：你刷到下一条帖子之前，后台发生了什么？](../references/bright-ospo-x-algorithm.md)
