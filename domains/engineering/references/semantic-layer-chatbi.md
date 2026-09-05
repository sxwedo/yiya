---
type: Reference
title: "AI写SQL总在胡编？因为你的数仓没有语义层"
description: "听挽风讲大数据：ChatBI 幻觉根因是口径不在语料；语义层把指标/维度工程化，走 Text2Semantic2SQL。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-05T16:25:00Z }
resource: /raw/library/2026/09/semantic-layer-chatbi/AI写SQL总在胡编？因为你的数仓没有语义层.md
sources: []
---

# Notes

- 案例：同问「华东高价值用户 GMV 环比」，AI 与财务口径相反——非模型大小问题。
- 幻觉必然：公司口径不在训练语料；在无答案处找答案只能编。
- 范式：Text2SQL → Text2Semantic2SQL；AI 选口径，引擎确定性翻 SQL。
- RAG 喂文档仍要「理解再翻译」，关不住幻觉空间；语义层是结构化约束。
- 治理第三站：文档 → 指标库 → 可执行语义模型；原子口径公共层唯一；三问（消费方/owner/可原子化）。
