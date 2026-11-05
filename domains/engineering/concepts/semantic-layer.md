---
type: Concept
title: "语义层"
description: "把指标、维度、粒度与筛选从人脑搬进机器可读结构，横在物理表与 AI/BI 之间做确定性口径翻译。同问「华东高价值用户 GMV」对不上，多半是没有这一层。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - business-ontology
  - semantic-engineer
  - semantic-service
  - text2semantic2sql
  - wikiskill-architecture
  - warehouse-layering
  - data-agent-landing
sources:
  - ../references/semantic-layer-chatbi.md
  - ../../../raw/articles/本体与AI/本体驱动问数：国内外技术方案深度研究.md
  - ../../../raw/articles/数据集成与治理/ODS、DWD、DWS、ADS已经不够用了？AI时代的数仓该怎么分层.md
  - ../../../raw/articles/大胖说数据智能/【大胖智能】Data Agent 的本质不是 Agent，而是 Data Engineering.md
  - ../../../raw/articles/AI数据奇点/Data Agent二篇：查数Agent 你们的是否可信？.md
  - ../../../raw/articles/智透圈/OpenAI 如何构建内部数据智能体（Data Agent）.md
  - ../../../raw/articles/得物技术/指标平台：从语义底座到智能消费的实践路径｜得物技术.md
  - ../../../raw/articles/大淘宝技术/AI时代的数据研发-Semantic（语义层）实践总结.md
  - ../../../raw/articles/走向AI时代/AI时代，数仓架构和语义层应该怎么搭建.md
  - ../../../raw/articles/AI数据奇点/大数据和AI面试：语义层 × 智能问数面试通关指南.md
  - ../../../raw/articles/Kinpoe Ray/Anthropic 的 Agentic Analytics 实践：语义层 + Skills 让查数准确率达 95.md
---

# Definition

**语义层**把口径从人脑和文档搬进机器可执行的结构：逻辑层定义指标与维度关系，物理层映射表字段，中间是确定翻译规则（常配血缘）。不是又一份自然语言说明书。

听挽风的例子：同一句「华东高价值用户 GMV 环比」，AI 和财务口径相反。这不是模型太小。公司口径不在预训练语料里，无答案处找答案只能编。RAG 喂口径文档仍要「理解再翻译」，幻觉空间关不上。治理第三站才是可执行语义模型：文档 → 指标库 → 语义层。原子口径挂公共层唯一权威；各业务线各建一套，只是把表冲突上移成模型冲突。三问：谁消费、谁 owner、能否原子化。

AI/BI 消费时优先**选口径**，再由引擎翻 SQL，见 [Text2Semantic2SQL](./text2semantic2sql.md)。国内主流是指标语义层（度量 / 维度 / 口径 / 权限前置）；国际还有操作型本体，把数据、逻辑、动作收进同一层，见 [业务 Ontology](./business-ontology.md) 与 [Semantic Service](./semantic-service.md)。

数仓 [ODS–ADS](./warehouse-layering.md) 仍是地基。Agent 成为使用者后，ADS 不是唯一终点：语义层解释「收入」指哪一口径，再交给受控查询，而不是让模型直连库。标准化在向中立语义互换收敛（如 Apache Ossie），把含义做成可移植资产。OpenAI 内部 Data Agent 的判断是 vanilla agent、rich foundation：难的是找对表与语义，不是写 SQL。

大淘宝实践（2026-08）：面向 SQL 的开发改成面向 AI Semantic。人不再是把需求译成 SQL 的唯一载体。Agent 成为主要消费者后，ODS→ADS 对业务透明，变成性能实现细节；消费双轨——Agent 走语义层，人仍走 BI/报表。Agent 也维护语义资产。知识从散落 SQL/文档/口口相传，迁进可复用语义模型。角色从 SQL Developer 变成 Semantic Architect：定义口径、设计给 AI 消费的模型、治一致性。非标数仓用 CTE 适配：一段 SELECT 把临时表/外部源/窗口逻辑投影成语义契约，脏留在 statement 里，下游只看规范字段；同一口径一处改、多 metric 跟新。逻辑表插在物理表与指标/维度之间，换表改名只动 LT-PT 绑定。CTE 是权宜，标准化物理仓仍是天花板。

得物指标平台（沈卢）：下一站不是再叠本体理论，而是让 AI 拿得到对的数。业务侧用「沉淀—观察—转正」收隐性指标，密度看高频使用而不是全量收录。数仓侧把散射依赖收敛到域可控宽表（先摸命名分层、血缘核查再重构、按依赖分批、跨域只 JOIN 不复制字段）。产品侧把上架做成表单+校验+一键发布；同一指标可挂离线/实时多种物理实现。质量：提报时做同名口径冲突预警；覆盖率分母锁在已认证精品资产；上线强制分布/空值/主键三件套。消费考卷两条线共用这一底座——Text2SQL 的事实层是指标字典（文称系统测评从 85%+ 随标注密度到 95%+，错误集中在「字段该怎么被查询」的元数据，不在模型）；AI Coding 的一次通过率也取决于能否查到已有指标与宽表字段。下一步是消费热度反哺治理，而不是先上因果推理。人设从写 SQL 转向「业务语言和机器语言的翻译者」。

走向AI时代（2026-09）把这套架构收成一句话：语义层 = 统一指标与业务语义 + 面向应用的语义数据集 + 统一权限，对应三问「是什么→怎么取→谁能看」。职责沿栈排开：MDM 管对象是谁，[数仓](./warehouse-layering.md)管发生了什么，语义层管业务含义，业务侧指标平台让业务参与定义，BI/AI 只做消费。落地从盘点业务在用的指标起步，走「业务指标 → 指标工程化 → 语义数据集 → 权限 → BI/AI」链路：原子指标 + 修饰词 + 时间周期拼成派生指标，几百个指标背后是一套可复用积木，不是几百段独立 SQL；语义数据集围绕稳定的业务主题建，不围绕报表页面建，否则退回 ADS 一报一表的老路。What 与 How 分家：指标平台管业务定义（owner、口径、变更讨论），数仓管工程实现；变更走「业务确认→数据评估→开发测试→发布」，用 Metric ID、版本与血缘把定义映射到实现，业务不直改生产数仓。语义权限不等于物理权限：语义层定义「谁能看什么」，还须与计算引擎、数据服务/API 的实际权限打通成闭环。作者守的三个「一」：业务定义只有一个源头，技术实现只有一个源头，BI 和 AI 只有一个正式语义取数入口。AI 是治理放大器——口径藏在人脑、SQL 和报表里时，混乱只波及几十个数据开发；几百个业务人员都能生成查询后，语义不治理，AI 能力越强口径乱得越快。

AI数据奇点把同一套考点收成面试口径（2026-10）：**宽表解决加速，不解决口径**——同义指标、可加性、权限下推、口径版本它都不管；宽表可以当物化，不能当契约（这正是 Schema Linking 需要有限、稳定类型系统的原因）。「用户数」是口头词不是指标：语义层为每个指标配别名与示例问法，冲突必须澄清，不能默默挑一个。行级权限不放 Prompt：在语义层定义、执行前写入 SQL 谓词或视图，事后叮嘱模型「别泄露」不可靠。口径带版本/生效日，回答露口径脚注；没建好字典就想上线？最小可用语义包（核心 20 指标）才能上，否则幻觉不可控。

Anthropic 内部 Agentic Analytics（Kinpoe Ray 转述，2026-10）给这套方法背了书：95% 的业务分析查询由 Claude 自动化，整体准确率约 95%。配方一致但更完整——标准数据集 + 语义层（固定业务含义）+ 业务上下文 + Skills（把分析师的工作路线写成技能：什么问题该查什么、怎么验证）+ 评测与人工纠偏回流。他们的判断一句话：**AI 查数不准是上下文与验证问题，不是 SQL 生成问题**——只要能把问题映射到正确、最新的数据实体，SQL 本身很简单。与软件开发的关键差异：数据分析通常只有一个正确口径，却缺少编译器和测试那样的确定性反馈，所以验证要靠语义层与评测集补。

## Boundaries

不是 RAG 喂口径文档，不是让模型直连库写 SQL（那是 Text2SQL）。不是再堆一层各业务线私有口径。问数编译见 [Text2Semantic2SQL](./text2semantic2sql.md)；表分层见 [数仓分层](./warehouse-layering.md)。

## Related

- [业务 Ontology](./business-ontology.md)
- [语义工程师](./semantic-engineer.md)
- [Semantic Service](./semantic-service.md)
- [Text2Semantic2SQL](./text2semantic2sql.md)
- [WikiSkill 三层架构](../../agents/concepts/wikiskill-architecture.md)
- [数仓分层](./warehouse-layering.md)
- [Data Agent 落地](./data-agent-landing.md)
