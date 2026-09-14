---
type: Concept
title: "LLM 训练与推理优化"
description: "面试级总览：用 FlashAttention / GQA、激活重算、KV cache、量化与多种并行，在现有硬件上训、推更大的模型。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T03:30:32Z }
sources:
  - ../../../raw/articles/Gauri Gupta/LLM Optimization Interview Notes: Training and Inference.md
related: []
---

# Definition

**LLM 训练与推理优化**（Gauri Gupta 面试笔记口径）：参数到数十亿后，朴素实现先在显存和算力上崩。笔记按四块记业界常用手法，不是逐篇论文精读。

1. **显存**：FlashAttention 用 tiling + 重算把注意力从存整表改成块算；MQA/GQA 共享或分组 KV；activation checkpointing 只留少量激活再重算。
2. **算力**：sequence packing 去掉 padding；长序列用稀疏/局部注意力（BigBird、Longformer）或低秩近似。
3. **推理**：KV cache / 有状态 cache；speculative decoding；量化（训练后或量化感知）。
4. **并行**：混合精度；数据 / 流水线 / 张量 / 上下文并行；MoE 的 expert parallelism（top-1 / top-k）以及负载均衡。

稳定对象是这套优化菜单，不是某一框架。NeMo、CS224n、Lilian Weng 推理优化文是延伸入口，不在本页展开。

## Related

- [打开 raw](<../../../raw/articles/Gauri Gupta/LLM Optimization Interview Notes: Training and Inference.md>)
