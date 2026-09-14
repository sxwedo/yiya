---
type: Concept
title: "Text2Semantic2SQL"
description: "自然语言先映射到受约束的语义口径选择，再由语义引擎确定性生成 SQL；把幻觉从生成层压到有限选择层。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T14:10:00Z }
related:
  - business-ontology
  - semantic-engineer
  - semantic-layer
  - semantic-service
  - warehouse-layering
  - de-bottleneck-upshift
sources:
  - ../references/semantic-layer-chatbi.md
  - ../../../raw/articles/本体与AI/本体驱动问数：国内外技术方案深度研究.md
  - ../../../raw/articles/AI数据奇点/Data Agent二篇：查数Agent 你们的是否可信？.md
  - ../../../raw/articles/智透圈/OpenAI 如何构建内部数据智能体（Data Agent）.md
---

# Definition

**Text2Semantic2SQL** 相对直接 Text2SQL：模型不再在千表中猜字段与聚合，而是在语义模型定义的指标/维度/筛选空间里做选择；选不到则应承认没有。SQL 由引擎按规则生成。

挽风的 ChatBI 例：同一句「华东高价值用户 GMV 环比」，模型答涨 12%，财务口径跌 3%。不是模型太小——公司口径不在训练语料里，在无答案处找答案只能编。换更大模型也一样。RAG 喂口径文档仍要「理解再翻译」，幻觉空间没关；语义层是结构化约束。

效果：幻觉从开放生成收缩为受锁死的选择；口径改一处可全链路生效。治理三站：文档（靠人读，注定退化）→ 指标库（可校验）→ 可执行语义模型。原子口径只能有一份、挂公共层，否则「三张 GMV 表」会搬到语义层更隐蔽。建设三问：会被 AI/BI 直接消费吗？有明确 owner 吗？能原子化吗？

企业级问数有「准确率悬崖」：零样本直接 Text-to-SQL 在复杂 schema / KPI 上会掉到接近不可用（data.world 自研基准：GPT-4 全量 16.7%，高复杂度 0%；数字宜当方向而非行业通值）。破崖路径是先映射到本体或指标语义再编译（NL2Semantics / NL2Metrics），并用规则做确定性校验（OBQC 类：错了就修或拒答，优于静默错数）。国内厂商多走「先建模、后问数」；国际则 Palantir OAG 与云厂商语义层两条主线。

可信不只是 SQL 跑通。查数 Agent 上，业务/数开/算法各自觉得没问题、用户仍不敢开会用。复用键应是结构化意图签名（指标 + 时间窗 + 粒度），不是字面少两字就重跑。产品承诺拆成可用 / 可复核 / 可采信，发布前对账；置信度是飞轮输入，不是装饰。

OpenAI 内部 Data Agent（文称 1.5EB、约 9 万表、2 人 3 个月、哲学「vanilla agent, rich foundation」）：难的是找对表与语义，不是写 SQL；上下文层比路由器/微调更值钱。

人把口语变成口径，见 [语义工程师](./semantic-engineer.md)；人力为何从搬运上移，见 [数据工程瓶颈上移](./de-bottleneck-upshift.md)。

## Related

- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [语义层](./semantic-layer.md)
- [Semantic Service](./semantic-service.md)
- [数仓分层](./warehouse-layering.md)
- [数据工程瓶颈上移](./de-bottleneck-upshift.md)
