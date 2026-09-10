---
title: "Training a 3.8B LLM to 0.384 CORE for $998"
author: "Hugo Vergnes"
url: "https://hugovergnes.github.io/little-lm-3-8b/"
date: "2026-09-04"
ingested: "2026-09-10"
content_type: "article"
---

# Training a 3.8B LLM to 0.384 CORE for $998

Hugo Vergnes, 2026-09-04。原文：<https://hugovergnes.github.io/little-lm-3-8b/>

要点（据抓取）：

- 受 Karpathy nanochat 启发，一人从随机权重训 3.8B，65B tokens / 43h / **$998**，CORE **0.384**（nanochat d32 约 0.310 / ~$1000）。
- 配置驱动的 little-lm：YAML 决定模型/数据/优化器；强调可互换组件。
- 架构：Llama 风，RMSNorm、RoPE、GQA、relu²、QK-norm 等；value embeddings 约占参数 19%。
- 早期失败：858M + cosine 衰减到 0，后 30% 算力几乎没涨；改线性 cooldown、更猛 peak LR、Muon。

CORE 分数是这条训练线的方向盘，挂 [评测驱动开发](../../../domains/engineering/concepts/eval-driven-development.md)。
