---
title: "大数据和AI面试：语义层 × 智能问数面试通关指南"
author: "AI数据奇点"
url: "https://mp.weixin.qq.com/s/noSc2T3Tdg4vbBNSR3S0zA"
ingested: "2026-10-26"
date: "2026-10-20"
---

# 📰 大数据和AI面试：语义层 × 智能问数面试通关指南

![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSw6AA6ZwaibLzLbUHZxTCQYYJzZaRxcLCZTfk92MjoHlfn3pTDFthC8DNFe5jH0MAV5Xp6758wRuFT5WzCDCribeMJHeeTibjLOS8/640?wx_fmt=png&from=appmsg)

## 一、大厂怎么考

问数面试不是考 Prompt 写得花不花，而是证明你懂：类型系统、权限、对账、幻觉分类。

![](https://mmbiz.qpic.cn/mmbiz_png/d3ugTmuhCSxSJG4eE74RPbqYuNzy7ibHGtSVOn8mxdW7Jda6CXgpBtsc3QEmVoeIEhtnMBHTYoeJ0nicVlxKqPTibhhRk4e64IPdXibiaqIUBYeE/640?wx_fmt=png&from=appmsg)

---

## 二、答题总框架

```

## 1. 澄清：指标问数、文档问答，还是预测？
## 2. 结论：先路由；指标必须走语义层。
## 3. 画链路：意图 → 语义绑定 → 校验 → SQL → 对账 → 展示
## 4. 说原理：Schema Linking 是有限类型匹配，不是搜全库
## 5. 说 trade-off：覆盖不足就拒绝/澄清，不要硬编
## 6. 说生产：权限、审计日志、口径版本、Eval 集
## 7. 补一个坑：SUM 毛利率 / 用下单当 GMV

```

==========

## 万能开场

>
>
> 「我先确认问题类型。GMV、趋势走语义层生成受控 SQL；制度文档走 RAG。LLM 只做意图和 Schema Linking，不定义口径，也不直接扫明细。上线看三件事：路由对不对、SQL 过不过校验、结果能不能和预计算指标对上。成功率是目标加评测，不承诺百分之百。」
>
>

---

## 三、术语共识

![](https://mmbiz.qpic.cn/mmbiz_png/d3ugTmuhCSyU6sTjsFq8tdp9sY7X1N3x8ZxHiaRwo1X3BzEyNJfyOIa11LefV6sT8oibGm0xtXVygC6PgH8wt7xW1UMSwxZhJUaQ7SdXEIX50/640?wx_fmt=png&from=appmsg)

---

## 四、核心架构与图解

### 4.1 意图路由 ###

## ![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSyVGZicw5AicPsnNaicJCZHLt8vibcfjicvmfS3JbYicqpjCACJUVMCeo9NVJfHzA9rmRLumCZHCJKhuMunOrEnaZAMMaph5In4RmmGQ/640?wx_fmt=png&from=appmsg)

----------

![](https://mmbiz.qpic.cn/mmbiz_png/d3ugTmuhCSwdTwxiakdsJeYwd7sIAFaoVuRDGcTFyPeHv2zcYmiaaNCOVe33TjbGS2a94tkkY1N8lictbHZlWThz7LfNbicK9SwEK7KicTKF3bicA/640?wx_fmt=png&from=appmsg)

核心要点：只有 RAG 是减分；混合问题（「为什么 GMV 跌了」）= SQL 取数 + 可选文档解释。

### 4.2 Schema Linking ###

![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSzk9sT1ibbnextziag8L4Ta7WcxPF1ic3uct0Csibp61LFN5MpicNxiaNAH4O1ux19dCgCV8CNXUxVotTOJGZOGScNH53LGL0PZibDqAc/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSwGBP27AucRXl2OYjQgmgauQ4knXGZ8VgUwgA7jhyYrlibNNKI1KFp2Ltr4ibgia84XYsPuj1um9icX0yNCPx225jfopia1HFVNN0uo/640?wx_fmt=png&from=appmsg)

核心要点：模型是消费者，不是口径定义者。

### 4.3 Trust 三层 ###

![](https://mmbiz.qpic.cn/mmbiz_png/d3ugTmuhCSyrbonA7BpDZ3xH3CTaN5ibdQc8JWqO0eUcM7jSCiaEzibmvu9ToYLI3zNQpWE4PA4svI1INGfMw4MjpOakXcI8wCM9iaqeAX1GhNs/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSwo1IIiaeicTQ0tX3rFWWQY6TRD8wY8yIvWibsvDBlGvPkt8ZK7rg0ia2GP8ADTyxE234MnKA673ntxE2jTDVNrlzJ0mtEFDaqy8Ac/640?wx_fmt=png&from=appmsg)

真实边界：问数成功率 =语义覆盖 + 路由正确 + 对账通过，不是「模型越大越准」。

### 4.4 幻觉四类（要分开治） ###

![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSy6X0BFRlx1l9LacX5M2uia0ajEEjU8974FMZxfeSrpI5Zs90zeYd1S95yhwg2Fiagmx0W5uYpKTlzP4zvjrtm3ibCT3ViaplDbfM0/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/d3ugTmuhCSxy2ib9JQtcl3AJeibTUIyuhxhtNhG2UwdLWsoE14J8w2LbjH6DSW2APXl4y52hnH4iaobk1fib7lBbytNyiaVV5hMxwFbCyAMy3rYg/640?wx_fmt=png&from=appmsg)

![](https://mmbiz.qpic.cn/mmbiz_png/d3ugTmuhCSyndoeDNRwgvfNw6u8vNB1SktWlmknwvzKpyLR2hYnhWeWewzbcsFFOn3bJvJM0aawd8jdsq2rJkkU8iargs5wSBsrUzWv1d5T4/640?wx_fmt=png&from=appmsg)

---

==========

## 五、高频题 + 标准答法

## Q1【美团/携程】智能问数和 RAG 怎么分流？

参考答法：数值、趋势、同比走语义层 SQL；制度、流程、非结构化走 RAG；「为什么跌了」先 SQL 再可选 RAG。不要一个向量库答所有。

减分回答：ChatBI 就是让 LLM 查全库。

---

## Q2【字节/阿里】为什么必须有语义层？宽表不够吗？

参考答法：宽表解决加速，不解决同义指标、可加性、权限下推、口径版本。Schema Linking 需要有限、稳定的类型系统。宽表可以当物化，不能当契约。

---

## Q3【字节/阿里】Schema Linking 怎么做才不像搜表？

参考答法：问法先归一到指标/维度 ID（同义词表 + 可选向量只做候选召回），再按语义层 Join 图生成 SQL。禁止直接把 200 张 Bronze 表塞进 Prompt。

常见追问：召回错了怎么办？——置信低则澄清「你说的 GMV 是支付成功还是下单？」

---

## Q4【数仓交叉】用户说「用户数」，系统怎么选指标？

参考答法：「用户数」是口头词，不是指标。应澄清：UV、注册用户、活跃用户。语义层为每个指标配置别名与示例问法；冲突必须澄清，不能默默挑一个。

---

## Q5【阿里】Text2SQL 幻觉有哪些类型？如何分别治理？

参考答法：见 §4.4 四类。治理在架构：白名单、粒度、可加性、ACL；评测集按类型分开统计，不要只报一个「准确率」。

---

## Q6【安全】行级权限放 Prompt 行不行？

参考答法：不行。权限在语义层定义，执行前写入 SQL 谓词或视图。生成后再让模型「不要泄露」不可靠。审计日志记录谁问了什么、命中哪些指标。

---

## Q7【产品×架构】覆盖不到的问题怎么处理？

参考答法：拒绝或澄清优于胡编。同时把 miss 日志入湖，驱动指标字典补全。覆盖率是运营指标，不是上线当天的 100%。

---

## Q8【评测】问数效果怎么评？和数据湖关系？

参考答法：

![](https://mmbiz.qpic.cn/sz_mmbiz_png/d3ugTmuhCSwSw5a6kWGez4vFlC24zIXukzz52zoQkvvBPI9ZV17ryRODLqVoJpNHMMteCXW61sCCoCB57hUTDXvKUDnjFYBLfGk71R6I51I/640?wx_fmt=png&from=appmsg)

query、生成 SQL、命中指标 ID、对账结果应回流入湖，形成 Eval 集。

减分回答：「我们看用户点赞。」

---

## Q9【高阶】多轮对话「再按城市拆」怎么保持语义？

参考答法：会话状态保存已绑定的指标、时间、过滤；追加维度必须仍在该指标允许维度内。越界（把订单粒度指标拆到点击）应拒绝。不要每轮从零猜全库。

---

## Q10【架构师综合】设计企业问数，湖和语义层在哪？

参考答法：

```

问法 → 路由
  ├ 文档 → RAG（湖上 chunk + 向量索引）
  └ 指标 → 语义层（口径/维度/权限）
           → 受控 SQL → OLAP 或湖 Gold
日志/Eval/对账 → 回湖

```

主动说：覆盖不足就澄清；Trust 三层展示给用户；模型不拥有口径。

---

## 六、二面/三面开放题

1. **问数把毛利率 SUM 了，产品要不要显示数字？** 期望：拦截或改写，并解释不可加。

2. **业务说「先上线再补字典」？** 期望：最小可用语义包（核心 20 指标）才能上，否则幻觉不可控。

3. **同一问题两个口径版本？** 期望：绑定生效日/版本，回答里露出口径脚注。

4. **Agent 能否自由写 SQL？** 期望：只能调受控 Tool（query\_metrics），评 tool call accuracy。

5. **用户满意度高但对数对不上？** 期望：满意度 ≠ 正确；要以对账为底线。

---

==========

---

---

---

---

---

---

