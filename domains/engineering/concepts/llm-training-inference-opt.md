---
type: Concept
title: "LLM 训练与推理优化"
description: "面试级菜单：FlashAttention / GQA、激活重算、KV cache、量化与多种并行。在现有硬件上训、推更大的模型；不是某一框架的手册。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related: []
sources:
  - ../../../raw/articles/Gauri Gupta/LLM Optimization Interview Notes: Training and Inference.md
---

# Definition

**LLM 训练与推理优化**（Gauri Gupta 面试笔记）：参数到数十亿后，朴素实现先在显存和算力上崩。笔记按四块记反复出现的手法，**不是逐篇论文精读**，也不是某一训练框架的操作手册。

1. **显存。** 注意力对序列长度二次。FlashAttention 用 tiling（按 shared memory 切块算 softmax）+ 重算（存线性的归一化因子，不存二次的整表）把 I/O 从 HBM 挪开。MQA 跨头共享 KV；GQA 分组，在质量和显存之间折中。Activation checkpointing：只留少量激活，反传时重算，换算力省显存。
2. **算力。** Sequence packing 把多条样本拼成一条，去掉 padding。长序列：BigBird（局部+随机+全局 → O(n)）、Longformer（滑窗+全局）、低秩近似 KV、LongNet（下层小 dilation、上层增大，O(Nd)）。
3. **推理。** KV cache / 有状态 cache；speculative decoding；量化（训练后或量化感知）。
4. **并行。** 混合精度；数据 / 流水线 / 张量 / 上下文并行；MoE 的 expert parallelism（top-1 / top-k）以及负载均衡——专家不均会把加速吃掉。

稳定对象是这套菜单。NeMo、CS224n、Lilian Weng 推理优化文是延伸入口，不在本页展开。把不可靠大模型塞进可靠系统，见 [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md)。


## Boundaries

面试级手法菜单，不是某一训练框架手册，不展开 NeMo/CS224n 全文。

## Related

- [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md)
