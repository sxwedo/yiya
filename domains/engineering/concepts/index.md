# concepts

* [业务 Ontology](./business-ontology.md) — 把分散系统中的数据、规则与能力组织成可理解、可计算、可执行的企业语义：Fact · Logic · Action。
* [数据工程瓶颈上移](./de-bottleneck-upshift.md) — 人力瓶颈从物理搬运与清洗，上移到业务语义、合规与 AI 体系管控；确定性重复工作交给 AI，判断与责任留给人。
* [数仓分层](./warehouse-layering.md) — ODS→DWD→DWS→ADS 把从源系统到应用的加工链路拆开；AI 时代四层仍是地基，ADS 不再是唯一终点，其上要补语义与受控 Serving。
* [表征难负样本](./embedding-hard-negatives.md) — Embedding 质量的天花板往往在负例质量：Batch 内易负不够；需构造难负并处理假负，让模型学会细粒度区分。
* [评测驱动开发](./eval-driven-development.md) — 用有纪律的评测与错误分析循环导航 AI 系统迭代：决定测什么、怎么测、何时让 LLM/人当裁判，并让评测本身随项目进化。
* [LLM 排序语义表征](./llm-semantic-ranking-embedding.md) — 用 LLM 为 Query/供给生成语义向量，以相似度信号注入精排，弥补词面匹配在长尾与非标供给上的语义 Gap。
* [Multi-action Feed Ranking](./multi-action-feed-ranking.md) — 信息流排序不只预测点击，而是多任务预测多种后续行为（赞/评/转/停留/负反馈等），再合成排名并叠加规则过滤。
* [组织摩擦](./organizational-friction.md) — 需求在协作流转中产生的、不直接创造业务价值的等待与消耗；AI 编码提速后常成为端到端交付的新主矛盾。
* [PM 效率治理](./pm-efficiency-governance.md) — AI 时代项目管理从保障节点不失控，扩展为持续发现并消除组织摩擦；AI 感知曝光，人推动治理。
* [语义工程师](./semantic-engineer.md) — 面向 AI Agent 消费方建设术语库、指标中台与实体模型，把业务口语变成机器可读口径并管理变更连锁影响。
* [语义层](./semantic-layer.md) — 把指标、维度、粒度与筛选规则从人脑/文档搬进机器可读结构，横在物理表与 AI/BI 之间做确定性口径翻译。
* [Semantic Service](./semantic-service.md) — 把 Ontology 定义封装为可查询、可计算、可执行、可审计的运行时服务，供 Agent/工作流/BI 共享同一套契约。
* [Text2Semantic2SQL](./text2semantic2sql.md) — 自然语言先映射到受约束的语义口径选择，再由语义引擎确定性生成 SQL；把幻觉从生成层压到有限选择层。
* [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md) — AI 组件输出不可预测是常态；工程价值在于熟练决定下一步，把不可靠部件组织成可靠软件系统。
* [X 自媒体增长](./x-self-media-growth.md) — 主页锚定、一致性、困境命中式价值（Roland.W）
* [Looped Transformer](./looped-transformer.md) — 把 Transformer 块循环套用（recurrent depth）换深度：与「隐藏 CoT」不是一回事；评测还受主 harness 绑定影响。
