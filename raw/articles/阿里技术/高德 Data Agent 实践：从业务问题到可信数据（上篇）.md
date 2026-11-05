---
title: "高德 Data Agent 实践：从业务问题到可信数据（上篇）"
author: "阿里技术"
url: "https://mp.weixin.qq.com/s/FAGAjEXd-dggWfBR-A0LLg"
ingested: "2026-11-05"
date: "2026-11-04 10:04:56"
---

# 📰 高德 Data Agent 实践：从业务问题到可信数据（上篇）

![](https://mmbiz.qpic.cn/mmbiz_png/kN3t5R6pdz5BDSHNE4D6f7FPoZk4rzZtDj8zRonKathu8AOibHjm6UKN6w58Rn1Rq66A7z1HHTTVF9SkFb8q9DicDn6QukdicQbP57z4pFrru4/640?wx_fmt=png&from=appmsg)

## 这是2026年的第 74 篇文章

（ 本文阅读时间：约 20 分钟 ）

>
>
> 分析师 / Agent，就是坐在真实世界与数字世界之间的翻译。
>
>

本文希望通过实践，产出完整的Data agent实践脉络，尽量没有技术语言，轻松有趣真实，让大家想看且看懂。

全文一万五千字，分为上下两篇。集团队半年以来的实践历程，欢迎在评论区留言讨论。

01  

开头：智能的差距

「我们业务当前表现怎么样，今年目标完成有风险吗？」

把这个问题分别交给一个熟练的分析师和 Agent + 数仓的系统，我们会看到两种截然不同的第一秒反应：

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6TS8uWPxGCibzjfGCGkl7CFDbHvPdvxdrwepgKw1M8ibPaib6aia545p2Js3eLTlpVUia4e0Dljz3JWMNJEsjtYqvsia1OhT8KvgtcI/640?wx_fmt=other&from=appmsg)

这一秒钟的差距，就是**智能的差距**，也是这篇文章想讲的全部。

做了这么久的 AI，我每天都在感叹：女娲造人，是一项多么精妙的工程。

02  

现状：人人都在做 DataAgent

AI 时代下，每一个数据、BI 团队都在做同一件事：把自家数仓接上大模型，做 DataAgent，宣传口径都差不多：数据人人可用、人人都是分析师、你身边的 AI 分析搭子、让分析师从取数中解放出来。

大家有一个共识：BI 的下一个时代来了。毕竟自从 2003 年 Tableau、Power BI 等第四代工具确立了分析范式之后，这个领域已经差不多二十年没有太大的变化。

海量数据一直堆在仓库里，无法快速流动、无法产生业务效果，无法成为有业务价值的资产，能看见的只有一张张高昂的成本账单。这也逼得大多数数据工作者，只能以成本、效率、故障率来衡量自己存在的价值。

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6uqN0H1TBsFsic5ZEVHOjkwRQDJ2WqlBUzBjNDAibqgzNpcv5A17Q4cR4zvtDYsXOtYyDGFNsicBjJKJvqML38SHrfkEVNAOK6cA/640?wx_fmt=other&from=appmsg)

那么， BI 分析范式的变革现在到底走到哪了？

一个略显尴尬的事实是：能跑通 SQL 取数的很多，能跑准的也不少（L2 阶段），但能真正回答业务问题、给出靠谱判断的很少。为什么呢？难点在哪里？如何解决？

![](https://mmbiz.qpic.cn/sz_mmbiz_png/kN3t5R6pdz4uwSGzLpLOu5ykTqjIh0sQrf4dFMY20f8DTLnlicUoAh8yXp4oqicnBcZt8a3rkUsInmzTcbIKCtpAdSA1vwakwZBSCLd8BJ69I/640?wx_fmt=png&from=appmsg)

以下是高德商业智能中心团队一系列的实践总结与汇总，本篇只是序章，介绍整体框架与实践经验概要。这套东西已经在我们团队日常跑着，WAU 450 人左右，L2 智能问数准确率稳定在 85%+；离好用还有距离，正在努力往 L3、L4 迈进。

03  

定义：一次分析，是两段往返翻译

为了把话讲清楚，本文会用一个贯穿全文的例子：

>
>
> 「美食行业最近表现怎么样，这个月的目标有没有风险？」
>
>

这样看似简单、最日常不过的问题，可能发生在电梯里、走廊上、早会中。如果我们把人脑处理这个任务全过程拆开，本质上是**两段翻译**：

**降维过程**把业务语言一层层翻译成机器能执行的查询语言。

**升维过程**把跑出来的数字一层层回译成带结论、带判断的业务语言。

这里「维」是抽象层级。业务语言一句「美食行业最近怎么样」，里面的目标、口径、时间、跟谁比，全靠默认共识省略着。反过来，把一堆数字重新装配成一句能拍板的结论，就是升维。去程装问题，回程装答案，进行翻译与加工，好让两个世界可以准确传递信息。

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6Gag0QBZ8fdjNZcShSJhKkCiaDXz77kqNLHzMcBEF5dmyf2KXsZSN5L47icO5glzwS35Zy7ujsg4numTBaHTsyGhlNpFRiad734A/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_gif/QFeBlaCibgvqNlj6RMAmBEyPCEox6R9icIJEf98pTLloib96bYBxKJapz83PetDDibu5hqtLrkegXuDQLicopR7ibOwUtJicWYOZnsRnKPq3TQCNhE/640?wx_fmt=gif&from=appmsg#imgIndex=4)

可以感受到，分析是一条长链路的活，在真实世界也不是一个人做完的。于是组织里长出了数据运营、数据分析师、数据产品经理、数据开发工程师这些角色，靠精细分工弥合各环节的鸿沟，推动数据流动。本质上是在弥补人类无法直接理解、应用原始数据这个根本限制，每一层都在翻译，成为下一个环节人脑能处理的形态。这是典型的工业时代设计逻辑，把每个环节高度专业化，以换取规模化。

![](https://mmbiz.qpic.cn/sz_mmbiz/kN3t5R6pdz5wPyTKtbFFXbqenLNYj3eY9aSLPLZmSXEicuHaibiaZFJvoXXwO317NFlAZ3RCGQvic29RlK9dIiajr5y75nia9fDeBufNdRdnGvdMs/640?wx_fmt=other&from=appmsg)

AI 会变革这个范式，但不会太快，我估计 2～3 年吧，也可能更久，或许是一代人。原因不是技术不成熟，而是范式的变革里，技术只是器物层面最早期的变化，也是最简单的一层。感兴趣可以读 Notion 联合创始人 Ivan Zhao 的[《蒸汽、钢铁与无限心智》](https://mp.weixin.qq.com/s?__biz=MzA4ODM2NzcxMQ==&mid=2651691539&idx=2&sn=63c739cbb05d83638ebd3bd7d37af54e&chksm=8ad17b24263b847966168945497c626cb2468ff8731824b8db88215314231ebb0e88d66dafb7&scene=21#wechat_redirect)。

接下来，看技术关键难点，所有工程学科都绕不开的著名难题，真正的拦路虎：**可靠性会沿链路连乘**。

六步只是骨架，每一步里还藏着大量步骤与推理。即便每步都做到 99% 准确，累计起来也会迅速衰减：10 步后只剩 90.44%，50 步后跌到约 60%，100 步后仅存三成多。

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6EiagUchDMHrQO91oZvXuK1LJ4EMC0RzKaoALvxjjmJe6ibvrOoGH375e21MAmFW8oku9v9KianZWoLzkPb2oVw8aDshicuhxTATI/640?wx_fmt=other&from=appmsg)

这在数据分析上是灾难。生文、生图、生视频这些 AIGC 场景里，用户 10 次里 1 次超预期，就像中彩票一样满意；但数据分析你连续对 10 次，第 11 次错了，用户对 Agent 的信心就会瞬间崩塌。所以我们必须细看每一次翻译到底该做到、做好，还要做稳。

04  

方案：Data Agent 的设计原则

>
>
> 「以下是实践方案与技术落地环节，会开始说一些天书用语，我尽量说得简单易懂。」
>
>

要让每一步翻译都做得准、做得稳，得给 Agent 补齐四样东西。

补知识（Context）：脑子里有货，知道业务在说什么、口径该怎么算。

补能力（Function）：手上有活，会取数、会算、会验。

卡校验（Harness）：心里有尺，做完先自查，过不去不许出门。

留兜底（Loop）：事后有账，人在关键处接手，做过的事有记录、有回收。

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6B3xJO5BLfxhF2UKxdvY6UwxocBQsGPCRcTzOIwJ9KmEY7hhaTbfqq1PPfW3qyiaXYCWFwVXRIXoXPldic5UdRKd0o40WVwFVEc/640?wx_fmt=other&from=appmsg)

这也正是一个熟练分析师之所以靠谱的四件事：脑子里有货、手上有活、心里有尺、事后有账。

前两样决定能不能做，后两样决定敢不敢信。有的步骤难在知识，有的步骤难在校验。

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6wtAHjWZhJvMjbhXD7Kt7icKxqRbrX5qFFTg55XL48obXpLU4eH868GzJBZbpUCKUx1ibFWfJ8C9icKeGFkp93RrSc8FHhmQ3LoY/640?wx_fmt=other&from=appmsg)

六步 × CFHL 总览：每一步各要补什么知识、做什么动作、卡什么校验、谁来兜底。

下面正文着重讲述重点的那一两样，完整对照见上图。

05  

解析：六步逐一看，落地实践

以下每一步都会涉及很多能力点的组合，无法一次讲透，我会以链接的形式关联对应的实践文章，方便各位按需取用、细读。

每个环节我都用五点来拆解：🤔 难点是什么？🙋‍♀️ 人是怎么做到的？🤖 Agent 该怎么做？⚙️ Agent 需要建设什么？🎯 产出目标。这样大家能从场景目的到落地方案有个大致了解；而每一环更详细的落地细节，会以链接的方式，另开专题讲解。

**第一步：【A 业务需求 → B 分析需求】厘清需求，产出分析目标与方法**

### 1.1 难点是什么 ###

一句「美食行业最近怎么样，这个月的目标有没有风险？」

听着简单，但绝大多数 Agent 是接不住的：它不知道「最近」是多久、「表现」该看哪几件事、美食是看整体还是拆子类，更不知道你要的是看风险还是找增量？就宛如新入职的同事，即便爱因斯坦来了，缺少信息也理解不了这问题。

需求理解错了，口径再准、SQL 再对，也只是一个错问题的正确答案。所以第一步的目标就是把一句模糊、口语、没边界的话，厘清成一份能干活的需求。

### 1.2 人怎么做到厘清需求？ ###

这不是天赋，是人类脑子里装着一套先验知识体系，有四样东西在同时工作：

## 1. 知道你是谁 ：是老板还是同事，所以他知道你要的是看进度、有没有风险，还是找哪还能做增量。

动态画像感知：（靠的是记人记事的情景记忆）海马体透过情景记忆将特定的人物身份与过往的交互事件存储，并产生连结，当遇到不同受众时你会见人下菜。

## 2. 知道「最近」 对你意味着什么 ：知道你在做季度 review，那最近就是本季度，还得顺手带上环比上季度、同比去年。

时空对齐与标记：（靠的是给每段记忆打时间戳的能力）海马体给情景记忆标上时间，能回顾过去、知道现在，维持自我的时间连续性，让人具备时间节奏感。

## 3. 懂美食这门生意 ： 靠什么赚钱、现在处在什么阶段、和谁在竞争，要分析这个问题，并知道这些事物相互有关联。

领域本体认知：（脑子里那本行业百科+各种知识文档）颞叶新皮层存的是关于世界的一般知识、概念和规则，能把大量情景经验抽象成规律，所以懂美食这门生意的门道。Agent 这边对应的是知识图谱与业务本体。

## 4. 手里有一套用熟了的分析框架 ： 知道分析框架按供需连拆解，并且干了三年攒下手感，有基础的判断，能快速做出初判。

程序性记忆与模式提取：（练出来的肌肉记忆+方法论）基底神经节把常年练过的零散经验和复杂判断固化成自动通路，变成专家手感。Agent 这边对应的是从经验中学习与自我反思——把跑过的分析沉淀成可复用的框架。

以上可以总结为，从人类智能到 Agentic 架构的发展，真的很像一个新同事的 Landing 过程。

别小看这些灵长类🐒的能力，家里的小猫小狗🐱🐶可一样都没有的，连时间都没有概念。但人能秒懂，靠的就是这套先验，而所谓做 Agent，第一步就是把这套先验补给机器。

但到目前为止，AI 与人脑的运作并非是一致的发展路线，只是在参考人脑的运作。所以人类会被机器人统治吗？我理解不会，如果人类能造出有以上能力的物种，那估计是被人造人统治……

### 1.3 Agent 该怎么做？ ###

说白了，就是把人脑那套动作拆成一条能跑的流水线：先翻记忆，认出你是谁、爱看哪个口径；再用意图识别，把「最近 / 表现」这些模糊词追问成具体的时间和指标；最后按一套框架，把大问题不重不漏地拆成收入 / 曝光 / 转化 / 供给四块。本质就是一次翻译：把模糊问题，翻成一套**结构化、可取数、可执行**的分析体系。

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz5HfZCtXW24kA7q20tzULjPwJr9QSeXbsJxXg8OxMkds9KnnBXhNbw1sEiaprCoVpO4icoEGj0XjZAkyA3MSic8b5JQtAVj2KPeVw/640?wx_fmt=other&from=appmsg)

### 1.4 Agent 需要建设什么？ ###

### 补知识****（Context · 脑子里有货）

* **业务领域知识（美食靠什么赚钱、商业模式是怎么样的）**

* **分析方法论（漏斗、供需连、对目标看、认异常）**

* **决策场景模板（是什么场景目标）**

* **提问人画像（知道这话是谁在问）**

### 补能力****（Function · 手上有活）

说穿了，就是把「美食最近怎么样」这句人话，拆成要达成什么目标 + 用什么方法 + 到哪为止。四件东西在配合：

* 一副好记性：记得你是谁、你上次问过什么、你是什么角色。（记忆系统）

* 一本行业知识库：懂美食这门生意的门道。（知识库 / 知识图谱）

* 一双会追问的耳朵：把「最近」翻译成本季度，把「表现」翻译成具体指标。（意图识别与澄清）

* 一个会拆活的脑子：把大问题拆分为分析、查询、验证、归因总结等多步骤。（任务规划）

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6fGfO5TC7WSpt52bGu4rn6WSDtwibibaCHVzF6sORibz7WBuVeLVpGS58wCDBCIppBAjr4Yr2CfP6FF52QXqP1Q2zJCrLUjTucOw/640?wx_fmt=other&from=appmsg)

这套架构确保了 Agent 不仅仅是「查数据」，而是能像拥有 5 年经验的专家一样，具备情境感知与逻辑深度。

### 1.5 产出目标 ###

一份写清了目标、边界、方法的《详细分析需求》给后面五步，画好一张能照着施工的图纸。当有了清晰的交付目标，用 Agent 的执行就不会过于发散与偏离，这是产出用户满意结果的起点。  

**第二步：【B 分析需求 → C 数据需求】确定数据口径查询逻辑，产出查询语句**

### 2.1 难点是什么 ###

需求清楚了，真正磨人的问题才刚冒头：到底怎么算？

一个「收入」躺着三个口径：应付 GMV、实付 GMV、核销 GMV，退单算不算？……全是坑。

这是一个没有 AI 时就存在的难题，只是在 AI 时代被放大了数倍：

同时，AI 是很难承认错误的。为了满足主人的愿望，它会开始说一些善意的谎言。更离谱的是，它还能把编出来的数解释一通，真假难辨。

### 2.2 人怎么做到的？ ###

为什么分析师能「确定」数据应该怎么算？这不是天生就知道的，也不靠背下数据表与口径。

是数据工程一直在建设的重点：指标字典、数仓分层、数据治理等，加上自身经验与记忆，知道哪有坑、有特殊用法、需要怎么处理。同时也会求助同事，用哪个表问小王、口径问阿明。团队中总会有几个表哥表姐，作为人形双足数据字典😂（愿世界上没有人在吃这个苦）。

### 2.3 Agent 该怎么做？ ###

主线（NL2Metric2SQL）：列出查数目标 → 官方指标词典召回候选（实在没有就诚实说没有）→ 对应具体的表和字段 → SQL 构建 → 门禁校验。

支线（NL2SQL）：没有指标定义 → 寻找可解数据表 → 命中数据表 → 理解元数据信息 → SQL 构建 → 门禁校验。

![](https://mmbiz.qpic.cn/sz_mmbiz/kN3t5R6pdz4Hj0VowX2uHOoic43crY6tQOPeNupOYJ6SpCxb8dKS5XezrUwv9hDfOqDoiciaSuGavU60KxPXpATmiaSicnMZUlOlLglcibe3q1iaA8/640?wx_fmt=other&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz4Ou7W45b2fDBkX126OD1vOvJVIakcIpOPIibldnOJ690KNCFo4y9NdFyYG4vmlK6ibEAWLexP6U4JDtzQxxqqAnDflMsx1A50yM/640?wx_fmt=other&from=appmsg)

### 2.4 Agent 需要建设什么？ ###

### 补知识****（Context · 脑子里有货）

* **指标字典**：包含指标定义、可用状态、指标口径、应用场景等。但要维护统一、高质量、常态化更新的指标字典，其实很难。业务本身在变化，部门之间的协同也有障碍，都会拖累指标的稳定更新。现实是，团队里指标口径根本形不成稳定共识，要么散落在各处的数据集和代码里，要么只存在少数几个人的脑子里。高德经历了长达一年的指标统一与治理，一共 2000+ 指标，这个工作仍然在进行中。AI 智能分析，这是一个重要基石。

* **数据说明书****：**包含表、字段、数据血缘等。进入 AI 时代后，数仓建设冒出一个新词，叫 AI Friendly（对机器友好）的数据组织方式，正在从面向人类可读转向面向机器推理。但绝大多数团队还深陷在疲于应付业务需求的陈年屎坑里，根本腾不出手来调整。趁着这一波 AI，我们清理了 1000+ 的待下线表，并把各种重复加工与孤儿表理了出来，对数仓整体做了一次体检。

### 补能力****（Function · 手上有活）

光说有了指标字典、元数据字典还不够。真正干活的时候，Agent 需要的是一种能查得到的能力，像走进图书馆，能把这次任务要用的那份资料准确地翻出来。因为光靠记忆、光靠大模型自己的理解，是不可能回答正确的，也不可能覆盖这么大体量内容的。关于 RAG 和检索的做法，市面上的实践已经很多，这里就不展开了。

![](https://mmbiz.qpic.cn/mmbiz_gif/kN3t5R6pdz54DlQKfibAbg6kVn43MNuSvV4xyyfyqWycz7WfdSUP1of2c0Ld137iabY2VD368icicsjU4E8km7ibmUWaBciafibFRno5RAtodkkEsY/640?wx_fmt=gif&from=appmsg)

### 卡校验****（Harness · 心里有尺）

* **SQL 逻辑错误门禁****：**

数据模型和查询场景越复杂，LLM 写出来的 SQL 就越不能信。人有一杆秤，碰到复杂任务会本能地多方交叉验证，但 AI 没有这根弦。

典型的高风险场景包括：Cube 多维模型、不可聚合字段、比率、半可加 / 不可加指标、N 天留存计算、多层级维度的上卷下钻级联、维度枚举与筛选、去重口径、收入双算、多表 Join。这些场景对粒度、口径和聚合顺序高度敏感，一旦处理不当就会产生错误结果。

* **可得性核对****（防幻觉的关键）：**

查询前先过一道「有没有」的校验：这张表在不在、这个字段有没有、这个粒度支不支持、目标值 / 对比基准 / 去年同期到底在不在库里。凡是要用却拿不到的，一律不许编，只能老老实实报错：这项缺失 / 这个维度拆不了 / 没有去年同期，把缺口如实告诉用户。

这是防住 LLM 幻觉最关键的一道闸。大模型有个致命的讨好型天性：你要什么，它就给你什么，哪怕这东西根本不存在。你问这个月目标多少，没有目标，它会一本正经编数，并且看起来很合理；你说按门店拆一下，表里没门店字段，它会凭空虚构一列。

所以一定要做校验机制。到目前为止，我们线上运营时还是有 1%～3% 的任务里，LLM 会幻想出不存在的表和字段。

>
>
> 很多人以为 Agent 取数的难点是会不会写 SQL。其实真正的坑是口径和幻觉。写得出来不难，写得对、以及拿不到时肯承认没有，才难。
>
>

### 2.5 产出目标 ###

这一步交出的，是一段**口径正确、可复核、可溯源**的 SQL。背后每一个口径都被锁定过、每一个数据都确认拿得到，而不是一段看起来能跑的 SQL。  

**第三步：【C 数据需求 → D 数字结果】执行查询语句，产出正确数据结果**

### 3.1 难点是什么 ###

跑过数的人都知道，一次就对，是不可能滴。别说 AI，就算是人，在茫茫数据里捞数，错误率也不低；更别提数据本身质量就参差，跑出来的结果随时可能踩坑。

但一个老练的分析师拿到数，不会闷头就用，而是先扫一眼对不对：量级合不合理、有没有混进脏数据、口径有没有跑偏。确认这数可信了，才敢往下用，而 AI 恰恰没有这种一眼看出不对的直觉。

### 3.2 人怎么做到的？ ###

为什么分析师能火眼金睛看出不对？

老练分析师拿到数，第一反应不是拿去用，而是扫一眼对不对。神奇的是，他往往真能一眼看出蹊跷，靠的不是玄学，是四种攒了很多年的老师傅经验：

* 量级感：脑子里存着每个数的合理身材，美食一天的 GMV 不可能只有几千，也不可能一夜翻十倍。

* 逻辑关系：数和数之间有天然的勾稽关系，实付不可能大于应付、转化数不可能大于点击数、各项拆分加起来得等于总数。

* 常识边界：比率一定落在 0～100% 之间、点击率不可能到 40%、分母不能是零。

* 记忆对照：跟昨天、上周、去年同期一比，要是突然多出一个数量级，那准有鬼。

这四种直觉，其实就是心理学说的知晓感（Feeling of Knowing）那杆秤给出的读数，一种「我觉得这数对 / 不对」的直觉体验。正是它，触发了要不要再验证一遍这个开关。而要让 Agent 把这一步做稳，说白了就是把这种直觉翻译成机器能自动跑的检查规则。

### 3.3 Agent 该怎么做？ ###

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz6yuuKgBO9Hiant9wyaDmohtGXkuxkzAbor9u3etryjHiaPnySIkKyTKWSYvXj4e0xBQ2JDeE9kFbA5sWle1GAx5fDRr7ndJd6Nc/640?wx_fmt=other&from=appmsg)

第三步是「**跑完先体检**」—— 把分析师「扫一眼」的功夫，做成强制门禁。

### 3.4 Agent 需要建设什么？ ###

![](https://mmbiz.qpic.cn/mmbiz/kN3t5R6pdz47icZlt6omPkMvbibg5tkbUZU0DhTMIVRSc33PHicvaD5ibUibyc24PddX1qGSuqTJax18S1myXWb8eRLdL3nE1ia81Fq8moZs5vbUU/640?wx_fmt=other&from=appmsg)

验证这一步可轻可重，需要在效率和准确之间权衡。校验越多，耗时越长。AI 不是人脑，人脑中「好像不太对」的感觉是可以毫秒运算的，有一个错误监控信号模块在运作。人一旦做错，大脑会在你还没意识到之前的几十毫秒就冒出一个负波，相当于内置了警报器。但每多校验一条，就多耗时与 Token 消耗，所以要按重要性和风险，决定这次到底跑到哪一档。

最早我们把校验全打开，跑完数都要过一遍。数确实稳了，但一次问数从 30 秒变成 600 秒。用户的问题从「这数对吗」变成了「怎么这么慢」。后来按风险分档，日常问取数只留正性校验，例行汇报的才全量。

![](https://mmbiz.qpic.cn/sz_mmbiz/kN3t5R6pdz77ia7DyakQdMKr6b9bqqhpiaMWnMYjz0916IZqODmibMFibr6KdHHp4m6q3PUMB9kGUPuCQ3ukygUdb4fXQTPibiaX7llVfDlIsQEN4/640?wx_fmt=other&from=appmsg)

### 3.5 产出目标 ###

这一步交出的，是一组经过体检、可信的数字。到这里，降维三步走完，一句模糊的业务问题，被翻译成了一组值得信任的数据。

注意，第三步的门禁不是锦上添花。前面口径再对，只要跑出来的数带病，后面所有解读和判断都建在流沙上。先体检，再解读，这是分析师的老规矩。

![](https://mmbiz.qpic.cn/mmbiz_gif/OmCbZ5JK30GbpbpADRYqgC6MMvNfRPY8cGySPF2f9miavJibvCOiaUelcS2LX6uSMGEic1ztD9ECCvN2rcupEseySg/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)

![](https://mmbiz.qpic.cn/mmbiz_gif/OmCbZ5JK30GMpsz1kdxGBRiclB5yjhBh5iamZLYrF2BOK4YNhXbjibibx63B6o5ubgOvYGRyUa0DK6gpI9YibkKUUCQ/640?wx_fmt=gif&wxfrom=5&wx_lazy=1&tp=webp)

欢迎点赞、在看、转发三连

