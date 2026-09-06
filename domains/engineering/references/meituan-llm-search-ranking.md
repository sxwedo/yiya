---
type: Reference
title: "美团搜索3.0：LLM 语义表征在排序模型的探索与应用"
description: "美团技术：服务零售精排三期实践——LLM 语义向量 + cosine 注入排序；从验证到 Query-POI-Deal 三元体系再到跨场景复用。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-06T00:05:00Z }
resource: /raw/articles/美团搜索3.0：LLM 语义表征在排序模型的探索与应用.md
sources: []
---

# Notes

- 动机：词面匹配遇语义 Gap（如「宠物 SPA+洗澡」↔「萌宠清洁护理套餐」）。
- 一期：特殊 Token 聚合 + 64 维 cosine 分桶；验证可行，长尾体验提升明显。
- 二期：对比学习（InfoNCE+Triplet）、LoRA、三元表征；精简 Prompt 优于复杂指令。
- 三期：表征迁移下挂精排 + 覆盖率与统计特征协同。
- Checklist：负例质量定上限；覆盖率是迁移第一步；语义与统计特征协同非二选一。
