---
title: "Anthropic 的 Agentic Analytics 实践：语义层 + Skills 让查数准确率达 95%"
author: "Kinpoe Ray"
url: "https://mp.weixin.qq.com/s/K2p1qNVaPoFbjMYl1eV2pw"
ingested: "2026-11-05"
date: "2026-10-04 14:49:03"
---

# 📰 Anthropic 的 Agentic Analytics 实践：语义层 + Skills 让查数准确率达 95%

QUOTE

企业里最危险的 AI 幻觉，常常是一个看起来很精确的数字。  

它有 SQL、表格和小数点，解释也像资深分析师写的。业务同学拿到后，很容易直接贴进周报、会议纪要或管理层汇报。直到熟悉数据口径的人指出：表选错了，指标含义也对不上。

Anthropic 最近公开了内部自助数据分析的方法：95% 的业务分析查询已经由 Claude 自动化，整体准确率约 95%。这个成绩背后是一套完整的分析系统。它把标准数据集、语义层、业务上下文、Skills、评测和人工纠偏串成工作流，让 Claude 按公司的数据操作规程执行。

要理解这套系统，可以跟着一个问题走一遍：“上周活跃用户是多少？”

Claude 会写 SQL，但它首先要弄清楚“活跃”指登录、发消息、付费，还是完成某个核心动作；“上周”指完整自然周还是过去 7 天；是否排除作弊用户；回答将用于日常排查还是管理层汇报。任一选择出错，都可能得到一个语法正确、业务错误的数字。

所以 Anthropic 的判断是：AI 查数不准，本质是上下文和验证问题，不是 SQL 生成问题。只要能把问题映射到正确、最新的数据实体，SQL 本身就很简单。

![](https://mmbiz.qpic.cn/mmbiz_png/eic87k024Xz7UcJGeC1eywabFZKIeenBoT4ThVP20urTmtPdhJDCBOIa9eMIL37EE4eN6HHF9QagEnJE6cVCslPhwwshNFZVSfJRlwcxkxug/640?wx_fmt=png)

© Anthropic 对比数据分析与软件开发的差异

*图：数据分析通常只有一个正确口径，却缺少编译器和测试这样的确定性反馈。来源：Anthropic。*

本文看点

01

防歧义②：用语义层固定业务含义

02

防检索失败：用 Skills 写下分析师的工作路线

03

防过期②：上线前设门槛，上线后收集纠错

01

ANALYSIS

### 自助分析的旧问题，被 AI 放大了 ###

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eic87k024Xz5CnTWlFZiaibMBFdo7Q7M0ZUh5symy4fDyQj8BwdQxxlvnVANfBum2XPVQ3fXCXXIaKAWhO5IcNicrY2w2Mbc78ay11qrYRuUQicM/640?wx_fmt=jpeg)

© 企业 AI 自助数据分析的旧问题被放大

过去公司做自助分析，通常有两条路。

一条路是准备宽表和看板，让业务团队点选答案。规模扩大后，同一个 revenue 会在增长、财务和产品团队里长出多个版本。另一条路是圈定数据环境，只开放少量字段、模板和 dashboard。它更安全，却覆盖不了长尾问题，复杂需求仍要排队找数据团队。

LLM 能读自然语言、写 SQL、解释图表，也能快速生成一份完整报告。底层治理缺位时，它会把旧问题包装成更漂亮的错误输出。

Anthropic 把大多数错误归为三类：

• 概念到实体的歧义：模型无法确定 active users 应该映射到哪个字段、动作和时间窗口。

• 数据过期：业务定义、schema、表血缘和字段含义持续变化，文档与历史 SQL 很快失效。

• 检索失败：正确答案已经存在于 dashboard、notebook 或参考文档中，模型却没有找到。

SQL 能运行，只能证明语法成立。企业分析还要证明它选对了业务定义和数据来源。

Anthropic 的整套架构，就是针对这三类错误逐一设防：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eic87k024Xz6RLwvaL5ZFTrBdkQOWlyr0Se0vWhycib8KI9iahWV6Bw8ctsnn4rAKXJkgTbRWxfz8iaZSHD3DUl5ibddmmocVRVHdhDnWz6FibDc4/640?wx_fmt=png)

还有一个变化让这些问题更尖锐：数据模型的使用者，从数据专家变成了替非专家干活的 Agent。提问的人往往无法自己判断结果对不对，准确性只能由系统保证。

下面按这三道防线展开。

02

ANALYSIS

### 防歧义①：数据地基，让可信数据容易被找到 ###

Anthropic 先建设 data foundations，包括数据模型、转换代码、测试、表和元数据。这里解决的是：哪些数据值得用。

核心做法是建设 canonical datasets：保留少量经过治理、有人负责、容易发现的标准数据集，并逐步淘汰近似副本。这样 Claude 搜索“活跃用户”时，会优先找到一个可信入口，搜索空间也从几十张相似表缩到少数候选。

如果公司内部同时存在 gross revenue、net revenue、recognized revenue、booked revenue 和 refund-adjusted revenue，模型每次选择都像抽签。它越擅长写 SQL，越可能把错误口径实现得完整而漂亮。

Anthropic 将数据模型、转换代码、语义层、参考文档和核心 dashboard 定义尽量放在同一个 repo。模型变更一旦影响下游看板或指标文档，CI 会在同一个 PR 中提示。表粒度、字段含义、有效值范围、血缘、owner 和指标定义，也被当成工程资产维护。

标准还要靠强制执行：工具层面让 Agent 结构性地先路由到标准模型；CI 拦下绕开标准的变更；组织层面要求下游团队基于受治理层建设，否则要说明理由。没有强制，治理很快会退回“多个候选”的老问题。

其中，lineage 和 transformation graph 提供了第二条可信路径。语义层暂时覆盖不了某个问题时，Agent 可以沿血缘找到上游模型，识别已废弃表，判断哪些表共享相同粒度。

TechTarget 指出了这次变化的关键：过去有人类分析师用组织记忆兜底，知道“客户数”该使用公开披露、内部账户还是活跃账户口径。Agent 只能依赖明确交付给它的定义。随着 Agent 跨 BI 工具和数据平台工作，语义定义还需要开放、可移植，避免每个系统重新维护一套口径。

03

ANALYSIS

### 防歧义②：用语义层固定业务含义 ###

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/eic87k024Xz6Rgryqs0OgtldDkvomPe7rfBY5ql2HKsNymZJ95flmtsyo2HTFj0xa53HasP1Zx5jG4mjIwVAPqbsjL1wmdzDZVVnl9Dhiax1A/640?wx_fmt=jpeg)

© 语义层连接 Agent 与可信数据

数据地基决定哪些数据可信，Agent 还需要一组参考面来导航。Anthropic 把这些可信来源按可信度排序：语义层 › 血缘与转换图 › 历史查询库 › 业务语境。排在第一的 semantic layer，负责解释数据的业务含义。

它把指标、维度、过滤条件、join path、权限和业务规则编译成机器可调用的标准定义。“上周活跃用户是多少”会被转换为对 certified metric 的结构化请求，而不是每次临时重写计算逻辑。

Cube 将这个区别概括为：Text-to-SQL 提供数据访问，semantic layer 提供业务理解。缺少语义层时，模型会反复推导 join、grain 和 metric logic，同一个问题换一种说法就可能得到不同数字。

Anthropic 还做过一次失败实验：让 LLM 根据原始表和历史查询自动生成指标定义。生成结果看起来合理，却把原有歧义一起写进语义层，评测效果低于规模更小、由人维护的版本。Claude 可以协助起草文档，指标含义仍需明确的人工 owner。

04

ANALYSIS

### 防歧义③：补上问题发生时的业务语境 ###

语义层解释 active users 的标准定义，business context 进一步判断用户此刻为什么问它。这是大多数团队会跳过的一层，Anthropic 也承认自己低估它最久。

“Q2 launch 后留存怎么样”里的 launch，可能指产品功能，也可能指市场活动。“客户数下降了吗”可能服务于董事会材料，也可能用于排查某个渠道。不同场景会改变时间范围、分组维度、置信要求和审核等级。

Anthropic 为 Agent 提供由公司文档、产品路线图、决策记录和组织结构组成的知识图谱。回到“上周活跃用户”这个问题，Agent 应主动确认：

• 使用自然周还是过去 7 天；

• 分析哪个产品和用户群；

• 是否排除测试与作弊账号；

• 结果用于日常探索还是高风险决策。

这一步让歧义在查询前暴露，避免它悄悄进入最终数字。

05

ANALYSIS

### 防检索失败：用 Skills 写下分析师的工作路线 ###

Anthropic 的评测显示，没有 Skills 时，Claude 的分析准确率不超过 21%；加入后整体稳定超过 95%，部分领域接近 99%。

Skill 是写成 markdown 的程序性知识，规定 Agent 应该按什么顺序工作：

• 优先查询语义层；

• 语义层没有覆盖时，沿血缘和领域参考文档寻找可信模型；

• 遇到 active users、retention、revenue 等高歧义词时先澄清；

• 使用标准的漏斗、留存和 rate decomposition 模板；

• 输出来源、新鲜度、owner、审核状态与可信等级。

Anthropic 使用一对配合的 Skills。knowledge skill 负责路由，把问题导向正确领域、指标和参考文件；runbook skill 编码分析流程，依次完成澄清、找数据、执行查询、对抗审查和结果交付。

Anthropic 公开的 Skill 骨架里还有几条硬规则：语义层是强制第一步；提前驳回 Agent 绕开语义层的常见借口（Don’t bail early），比如“需要自定义日期”“需要 join”；时间口径在查询前定好，“上周”默认指上一个完整自然周，而非过去 7 天。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eic87k024Xz5KuTbgIEPx81b4dlFI0Y6ddicYKwslMyX4kD2YDU0oYs0DbTooKePYb2jO7NWnSPWDVoQEkmSpmuNrj0c4qg3Clc7tC2zPa7I0/640?wx_fmt=png)

Anthropic 还验证过“给更多资料”是否有效。他们让 Agent 直接 grep 数千份 dashboard、transform 和 notebook SQL，并确认模型读到了相关内容。准确率变化不到 1 个百分点；在答错的问题中，约 80% 的正确答案其实已经存在。

瓶颈由此变得清楚：资料数量已经足够，Agent 需要可靠的路由、结构和判断顺序。

所以历史 SQL 只能当素材，不能当可信来源让 Agent 直接读。有效做法是把它提炼成按领域整理的参考文档：写清表粒度、范围与排除项、易错点，以及明确的路由触发条件，例如“IF 问实验提升……DO NOT 用原始事件数”。

同一套 Skill 还要在 Slack、IDE、dashboard 工具和独立 Agent 中保持一致。Anthropic 将数据 repo 设为唯一来源，合并后自动同步到插件、云存储和 MCP，减少不同入口产生不同答案的风险。

06

ANALYSIS

### 防过期①：把知识更新放进同一条变更链路 ###

![](https://mmbiz.qpic.cn/mmbiz_jpg/eic87k024Xz7yp4OQdonsndy7xoy63Fiao37Wd59twEPEcJibVytF4rmjQAblicn7DUYcOB81ZxBEzNYwYibl5miaqH9wXv7QA5SrvokHib4MCrDfM/640?wx_fmt=jpeg)

© 维护和验证闭环让 AI 分析长期可信

Skill 描述的是每天变化的数据模型。Anthropic 的离线准确率曾从上线时约 95% 漂到一个月后的 65%，团队随后把 Skill 维护纳入工程流程。

现在，大约 90% 的数据模型 PR 会同时包含 Skill 变更。代码审查 hook 会标记修改 reporting model 却没有更新 Skill 的提交。指标、数据模型、参考文档和 Skill 在同一条变更链路中发布。模型能力提升后，旧的失败模式不再出现，对应的 Skill 脚手架也要定期删减。

这能解释许多内部 Agent 的共同轨迹：第一周惊艳，第二周推广，随后数字开始对不上。模型能力未必下降，更常见的原因是业务口径和数据系统已经移动，Agent 使用的知识仍停在旧版本。

07

ANALYSIS

### 防过期②：上线前设门槛，上线后收集纠错 ###

Anthropic 使用两类离线 eval：一类来自常用 dashboard 问题，由 Claude 自动生成、人工校验；另一类覆盖业务长尾，把路线图和表文档交给 Claude，让它生成合理的问题。每个问题锚定快照日期或稳定事实表，或者直接评判 Agent 写的查询而非数字，避免答案随实时数据漂移。评测接入 CI，改动依赖的 PR 会自动重跑相关题目。题量不必贪多：每个主题几十道之后，收益就开始递减。

每次运行都会记录 skill version、git SHA、model ID、token、耗时和断言结果。团队还能固定评测集，每次只替换一个组件，通过 ablation 判断某个 Skill、子 Agent 或参考文档到底有没有提升效果。每次有意义的 Skill 修改，都在 PR 里附上前后对比。

团队还专门记录失败清单：参考文档连续三轮精修反而变差，文档只是变长了；把对抗审查换成更便宜的模型，准确率收益基本丢失，速度也没快多少。

评测也承担上线门禁。领域 owner 要先让对应评测达到阈值（Anthropic 最初用约 90%），才能向业务方推广。离线评测的目标应接近 100%，并检查正确答案是否经过语义层，而非碰巧从原始表算对。

在线阶段，Anthropic 使用五类机制：

• Adversarial review：主动挑战查询假设，评测准确率提升 6%，代价是多 32% token 和 72% 延迟；

• Provenance footer：标明来源层级、数据新鲜度、模型 owner 和审核状态；

• 数据质量检查：字段用对了，数据本身也可能有误，需要检查新鲜度、完整性和异常；

• 主动监控：跟踪经过语义层的查询比例，以及“表选错了”“漏了过滤条件”等纠错语言；

• Correction harvesting：定时 Agent 扫描相关频道，把业务方纠正整理成参考文档修改和新 eval，再提交给领域 owner 审核。

最难发现的是 silent failure：答案有误，却足够合理，没人提出异议。Anthropic 的缓解方式包括关键场景人工签字，以及每天将核心 KPI 与 blessed dashboard 对照。他们也承认，目前还没有彻底解决这一问题。

08

ANALYSIS

### 一条问题如何穿过整套系统 ###

![](https://mmbiz.qpic.cn/sz_mmbiz_png/eic87k024Xz6WMtxjtUuH1KA03YqTVo2NUFCXmINL5OHgVCIH8ibnfPZhP9fxBl8b8iaicVCCVH3kqgGN2AicibVGF0hiarBwt8Ep1pYIUGa0piaYDg/640?wx_fmt=png)

这条链路的重点很明确：问题先匹配可信定义，再进入执行；最终结果经过验证，真实纠错继续改进系统。

![](https://mmbiz.qpic.cn/mmbiz_png/eic87k024Xz7MDgQgvGnofzVXicIvseWMXQr0knrBVBIbeXWp0ibdQibrFcxSt9D7UGSGxw47Foq7Jg4v3a6OaxtxeJpcZM4w5LQLfHsZczhI0Y/640?wx_fmt=png)

© Anthropic 的 agentic analytics stack

*图：Anthropic 的 agentic analytics stack。来源：Anthropic。*

09

ANALYSIS

### 先判断：要不要做这么重 ###

Anthropic 也提醒，不是每个团队都需要整套方案。动手前先回答五个问题：

1

今天就要答对，还是可以等？模型进步很快，为当前短板搭的大量基础设施，可能在下一代模型上变得多余。

2

业务会变多复杂？数据量小、使用者少、数据模型简单时，很多流程属于过度建设。

3

读者懂不懂数据？面向数据科学家时可以容忍更多错误；面向不熟悉数据模型的人，要求更高。

4

愿意为准确率花多少？对抗审查这类手段有效，但成本和延迟都更高。

5

权限放多宽？上下文越多 Agent 越准，但宽权限与数据治理相冲突。这决定你做一个 Agent，还是多个按范围拆分的 Agent。

10

ANALYSIS

### 普通团队的最小落地版本 ###

Anthropic 的建议是：几份标准数据集、几十道离线评测、一个薄的 knowledge skill，就能拿到大部分收益。具体可以分四步：

1

选择 5–10 个高价值指标。 优先处理最常被问、最容易出错、会影响重要决策的口径。

2

建立机器可读的唯一定义。 写清表、字段、过滤条件、时间窗口、权限、owner 和已知问题。例如收入是否含税、是否扣退款、按下单还是确认时间统计。

3

写一个薄 Skill。 固定查询顺序、澄清问题、停止条件和输出格式。标准定义缺失时，Agent 应暂停并追问。

4

准备 20–30 个离线问题。 固定日期和预期答案，将评测接入数据模型、指标定义和 Skill 的变更流程。

业界延伸（非 Anthropic 原文方案）：使用 MCP 的团队还应避免直接暴露裸仓库。Agent 更适合通过 MCP 调用受治理的指标、语义模型或语义执行层。

按 Colrows 的思路，Agent 通过 MCP 发送结构化意图，语义执行层解析概念、证明 join path、应用权限、生成 SQL，再返回定义版本、身份上下文与执行结果。确定性来自这个编译过程：相同身份和范围下，同一问题应得到相同答案。

权限也要在查询编译时生效。行级权限、角色权限、租户隔离和字段限制被写进生成的 SQL，Agent 无法通过换一种写法绕过规则。Salesforce 的方向与此类似：让人、Agent、应用和 dashboard 共同使用一套可治理、可推理的业务语义模型。

Salesforce、Cube、Colrows、Snowflake 等厂商都在推动语义定义脱离单一 BI 工具，成为 Agent、应用和 dashboard 共同访问的开放层。未来真正耐用的资产，是一套由人和 Agent 共同理解、调用和审计的业务语义模型。

∞

THE END

### 最后 ###

许多企业 AI 项目卡在同一个地方：公司没有把“什么叫正确答案”工程化。

AI 可以接走大量重复分析请求，让数据团队把时间投入 causal modeling、forecasting 和机器学习等更具战略性的工作。组织需要先把隐性知识整理成可执行结构：哪些数据可信，哪些指标唯一，哪些问题必须澄清，哪些答案需要复核，哪些变更会使旧定义失效。

语义层、Skills、eval、provenance 和 correction harvesting 共同完成这件事：让机器继承组织已经验证过的判断，同时保留追溯、维护和纠错能力。

回到开头的问题：“上周活跃用户是多少？”在这套系统里，“上周”已经写成上一个完整自然周，“活跃”由语义层里的标准指标定义，结果附带来源、新鲜度和 owner。Agent 不必再猜，提问的人也知道这个数字能信几分。

Anthropic 的样板给出了一个朴素结论。要让 Claude 处理 95% 的分析请求，先要建立一套值得信任的数据系统。

信息来源：

• How Anthropic enables self-service data analytics with Claude | Claude

• Semantic Layer for AI Agents (2026) | Cube

• Why enterprise AI depends on the semantic layer | TechTarget

• Build Trusted Semantic Layers for AI Agents with Data 360 | Salesforce

• MCP Meets the Semantic Layer | Colrows

END  

我是 kinpoe，AI产品经理，前建筑师。关注AI落地，赚钱机会，社交媒体。欢迎订阅，一起学AI。

如果你觉得今天这篇有收获，欢迎**点赞、在看、转发**三连，我们下篇见。

