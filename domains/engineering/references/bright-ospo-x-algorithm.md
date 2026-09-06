---
type: Reference
title: "X 的推荐算法：你刷到下一条帖子之前，后台发生了什么？"
description: "明说开源解读 x-algorithm 开源：召回→用户状态→Phoenix 多动作预测→RankingScorer→过滤/多样性→recon/StableHLO 生产化。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T10:20:00Z }
resource: ../../../raw/articles/明说开源/X 的推荐算法：你刷到下一条帖子之前，后台发生了什么？.md
sources: []
related:
  - x-algorithm
  - multi-action-feed-ranking
---

# Notes

- **仓库原文**：[打开 raw](../../../raw/articles/明说开源/X 的推荐算法：你刷到下一条帖子之前，后台发生了什么？.md)

- 原文：https://x.com/Bright_OSPO/status/2095072411284812248；仓库 https://github.com/xai-org/x-algorithm
- 核心句：预测的不只是「会不会点开」，还包括「看完之后会做什么」。
- 链路：候选召回 → 当前用户状态 → Phoenix 多任务行为预测 → RankingScorer 合成排名 → 安全/可见性过滤 → 作者多样性 → 导出与推理优化（recon / StableHLO 等）。
- 亮点：多动作预测、排序与安全分工、多样性、生产化；公开代码仍留训练数据/完整权重等未知。

## Related

- [x-algorithm](../entities/x-algorithm.md)
- [Multi-action Feed Ranking](../concepts/multi-action-feed-ranking.md)
