# concepts

* [业务 Ontology](./business-ontology.md) — 把分散系统中的数据、规则与能力组织成可理解、可计算、可执行的企业语义：Fact · Logic · Action。
* [数据工程瓶颈上移](./de-bottleneck-upshift.md) — 人力从物理搬运与清洗，上移到业务语义、合规与 AI 体系管控。确定性重复交给 AI；口径、法律责任、长期架构留给人。
* [数仓分层](./warehouse-layering.md) — ODS→DWD→DWS→ADS 把从源系统到应用的加工链路拆开；AI 时代四层仍是地基，ADS 不再是唯一终点，其上要补语义与受控 Serving。
* [表征难负样本](./embedding-hard-negatives.md) — Embedding 质量的天花板在负例：in-batch 易负不够。同请求、同商家曝光未点的难负，逼模型学细粒度选择；假负要从分母拿掉。
* [评测驱动开发](./eval-driven-development.md) — 用有纪律的评测与错误分析循环导航 AI 系统迭代：决定测什么、怎么测、何时让 LLM/人当裁判，并让评测本身随项目进化。
* [LLM 排序语义表征](./llm-semantic-ranking-embedding.md) — 用 LLM 为 Query / 商家 / 商品产语义向量，cosine 注入精排，补词面匹配在长尾非标供给上的语义 Gap。三期：验证 → 对比学习 → 跨模块复用。
* [LLM 训练与推理优化](./llm-training-inference-opt.md) — 面试级菜单：FlashAttention / GQA、激活重算、KV cache、量化与多种并行。在现有硬件上训、推更大的模型；不是某一框架的手册。
* [Multi-action Feed Ranking](./multi-action-feed-ranking.md) — 信息流不只预测会不会点开，而是并行估计赞/评/转/停留/负反馈等，再合成排名；安全与多样性在规则层，高分仍可能被挡。
* [组织摩擦](./organizational-friction.md) — 需求流转中不直接创造业务价值的等待与消耗。AI 压缩编码后，摩擦占比被放大：个体提效不等于组织提效。
* [PM 效率治理](./pm-efficiency-governance.md) — 节点不失控仍是基础；AI 做态势感知与曝光，PM 用省下的事务时间消除组织摩擦。腾讯健康文中中位交付 19→9 天。
* [语义工程师](./semantic-engineer.md) — 面向 Agent 消费方建设术语库、指标中台与实体模型：把业务口语变成机器可读口径，并评估变更对下游的连锁影响。
* [语义层](./semantic-layer.md) — 把指标、维度、粒度与筛选规则从人脑/文档搬进机器可读结构，横在物理表与 AI/BI 之间做确定性口径翻译。
* [Semantic Service](./semantic-service.md) — 把 Ontology 封装成可查询、可计算、可执行、可审计的运行时：Agent 面向契约编排，不把业务逻辑塞进提示词。
* [Text2Semantic2SQL](./text2semantic2sql.md) — 自然语言先映射到受约束的语义口径选择，再由语义引擎确定性生成 SQL；把幻觉从生成层压到有限选择层。
* [用不可靠组件造可靠系统](./unreliable-components-reliable-systems.md) — AI 组件输出不可预测是常态；工程价值在于熟练决定下一步，把不可靠部件组织成可靠软件系统。
* [X 自媒体增长](./x-self-media-growth.md) — 被看见：主页 3 秒锚定差异化；主题/立场/语气/节奏一致；价值命中具体困境；再叠情感与第一波传播。忌 AI 自动发推。
* [自动化交易系统](./automated-trading-system.md) — 量化不是猜牛股，是把决定写成可重复规则。真实系统=数据→信号→风控→OMS→券商 API→成交→日志报警。AI 可帮开发，不可绕过风控下单。
* [Looped Transformer](./looped-transformer.md) — 同一组 Transformer 块在深度上循环套用，用时间换参数。不是隐藏 CoT；评测还受主 harness 绑定影响。
