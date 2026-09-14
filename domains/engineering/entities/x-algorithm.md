---
type: Entity
title: "x-algorithm"
description: "xAI 开源的 X 推荐生产栈：Phoenix 多动作预测 + RankingScorer + 安全/多样性规则。公开代码缺训练数据与完整权重。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - multi-action-feed-ranking
  - llm-semantic-ranking-embedding
sources:
  - ../references/bright-ospo-x-algorithm.md
  - ../references/x-algorithm-github.md
---

# Summary

**x-algorithm**（[xai-org/x-algorithm](https://github.com/xai-org/x-algorithm)）是 X 信息流推荐的开源实现侧。明说开源解读的核心句：预测的不只是「会不会点开」，还包括看完之后会做什么。

生产链路：候选召回 → 当前用户状态 → **Phoenix** 多任务行为预测（赞/评/转/停留/关注/负反馈/举报等）→ **RankingScorer** 合成排名 → 安全与可见性过滤 → 作者多样性 → recon / StableHLO 等导出与推理优化。模型管偏好；安全、可见性、多样性在规则层——高分帖仍可能被挡。

机制页见 [Multi-action Feed Ranking](../concepts/multi-action-feed-ranking.md)。与搜索精排的 Query–供给向量不是同一条路，见 [LLM 排序语义表征](../concepts/llm-semantic-ranking-embedding.md)。

公开代码仍缺训练数据和完整权重。把它当「可复现的全套推荐系统」会高估；当「生产栈怎么切分预测与规则」的标本则够用。

## Related

- [Multi-action Feed Ranking](../concepts/multi-action-feed-ranking.md)
- [LLM 排序语义表征](../concepts/llm-semantic-ranking-embedding.md)
