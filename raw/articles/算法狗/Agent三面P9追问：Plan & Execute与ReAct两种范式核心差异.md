---
title: "Agent三面P9追问：Plan & Execute与ReAct两种范式核心差异，分别适配什么业务场景，你都不熟悉吗？我说：用的多但是没往深度想…"
author: "算法狗"
url: "https://mp.weixin.qq.com/s/2Oxvm6PjeFXtbAxPCeYIlA"
ingested: "2026-10-26"
date: "2026-10-21 09:31:00"
---

# 📰 Agent三面P9追问：Plan & Execute与ReAct两种范式核心差异，分别适配什么业务场景，你都不熟悉吗？我说：用的多但是没往深度想…

上周，一个读者朋友给我发消息，说自己面了一家做Agent方向的公司，栽在了一道看似基础的问题上。

面试官问他："你了解Plan & Execute和ReAct这两种Agent范式吗？能说说它们的核心区别，以及各自适合什么业务场景吗？"

他当场愣了一下。这两个词他都见过，论文也扫过，demo也跑过，但真要他讲清楚区别，讲清楚什么时候该用哪个，脑子里却只有一团模糊的印象——"好像都是让大模型自己规划任务、调用工具"。他支支吾吾说了几句"ReAct就是一边想一边做，Plan & Execute是先规划再执行"，面试官追问"那具体到业务场景里，你会怎么选"，他就彻底答不上来了。

面试结束，他心里很不是滋味。回去之后花了两个晚上，把相关论文重新读了一遍，自己又写了几个小实验去对比这两种范式的实际表现，才算把这道题真正吃透。他把这段复盘发给我，我觉得很值得写出来分享给大家——因为这道题看似是八股，实际上背后藏着做Agent工程时最容易被忽略的设计取舍。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLgBlLjnxqYwsKUBuknUaYSnDfvURarGsJhLGP8rXbByCEXXoDiahn1CiciaoRiakIZqP0x9ia19tKbtOg8j4oViavqel42XgD7gWSCxs/640?wx_fmt=png&from=appmsg)面试场景

## 先搞清楚：这两种范式到底在解决什么问题

无论是ReAct还是Plan & Execute，本质上都是在回答同一个问题：当一个任务需要多个步骤、可能需要调用外部工具才能完成时，Agent应该如何组织"思考"和"行动"？

区别就在于，思考和行动之间的关系是怎样安排的。

### ReAct：边想边做，走一步看一步 ###

ReAct（Reasoning + Acting）的核心思路是把"推理"和"行动"交织在一个循环里：

```

Thought → Action → Observation → Thought → Action → Observation → ... → Final Answer

```

Agent每走一步，都会先"想一下"（Thought），基于当前的上下文和已经拿到的观察结果，决定下一步该做什么（Action），执行之后拿到新的反馈（Observation），再进入下一轮思考。

![](https://mmbiz.qpic.cn/mmbiz_png/icZ2yltr3sLiaAPD84uicY9ZLWAh7Nc7aEsFaRaHrReL9KAqPB6ZwNJj4NOdjAbWs9NHenPtWvkVSqvqibrjkspDtOypibfnLPjqUDTN092SHwnw/640?wx_fmt=png&from=appmsg)ReAct循环机制

这种模式的关键特征是：任务的下一步是"现算的"，没有提前定死的整体计划。走到哪一步，才根据当前情况决定下一步走向哪。

### Plan & Execute：先定蓝图，再按图施工 ###

Plan & Execute则是把"规划"和"执行"拆成两个相对独立的阶段：

```

Planner：先生成一份完整的任务分解计划（Step 1, Step 2, Step 3...）Executor：按照这份计划，逐步调用工具、执行子任务（可选）Replanner：执行中如发现计划不合理，触发重新规划

```

![](https://mmbiz.qpic.cn/mmbiz_png/icZ2yltr3sLgwrKtBIXTicO3Myk2vThQISXuw8tbtItZMcrU8iawXM0N6DcyDIFt5xiciaOwCCgvCjFnHXLd9SqJYs5pbxR8NehXFz2fEYD5ibZ8E/640?wx_fmt=png&from=appmsg)Plan & Execute流程

这里的关键是：在开始真正执行之前，Agent就已经对整个任务有了一个全局的分解方案。执行阶段更多是在"照单抓药"，除非中途遇到意外才会触发重新规划。

## 核心差异到底在哪里

读者复盘之后，总结了几个真正决定选型的差异点，我觉得比单纯背定义更有价值。

## 1. 1.决策粒度不同

ReAct是"步步为营"，每一步的决策都基于最新的反馈，天然具备很强的适应性——环境一变，下一步马上能调整。但代价是，每一步都要重新调用一次大模型进行推理，Token消耗和延迟会随着步骤数线性增长。

Plan & Execute是"运筹帷幄"，一次性把整体思路想清楚，后续执行阶段可以并行处理、复用计划，大幅减少了大模型的调用次数，效率更高，也更容易做成本控制。但如果计划本身有偏差，或者执行过程中环境发生了计划外的变化，纠错成本会比ReAct高——需要触发额外的重新规划环节。

![](https://mmbiz.qpic.cn/mmbiz_png/icZ2yltr3sLhUbDmyme9qaHSlEiaQbn7mRaBkfCVL3CtQNZNrbvSdsbYtGiaaJcvMxMGCYTV2LCG0uQxSHmp7ZXJK5anoBmAYeXAZeVgN0Oiabk/640?wx_fmt=png&from=appmsg)决策粒度对比

## 1. 2.对不确定性的容忍度不同

如果任务本身具有很强的探索性、每一步的结果都可能改变后续路径（比如一边搜索一边根据搜索结果决定下一步搜什么），ReAct的边走边看会更稳妥，因为它不需要在开局就把所有分支都想清楚。

而如果任务的结构相对确定、步骤之间的依赖关系清晰（比如"先查数据，再做清洗，再生成报表"），提前规划反而能避免ReAct那种"走一步退半步"的低效摸索。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLgv10ClzPic3NUEEIRDwSn18wV5F8Q88NIx7hLUU5jvPuq0Bpwxv8IaalB8OpyqTYZ97iaF08icPggKQNicUEcbTj0GrmXDM14icfEY/640?wx_fmt=png&from=appmsg)不确定性容忍度对比

## 1. 3.可解释性与可控性不同

Plan & Execute生成的计划是显式的、可以被人工审查的——业务方在执行前就能看到"Agent打算怎么做"，这对于一些需要人工审核、需要可控性的企业级场景（比如涉及资金操作、对外发送邮件）非常重要。

ReAct的思考过程虽然也会输出Thought，但它是动态生成、逐步展开的，很难在执行前完整预览"Agent到底会走哪几步"，可控性相对弱一些。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLgcHGUJvD7DiaItGBTxRrgaD4nwyMlX4PiadFfdc3bosRWo1icWsuOzdZSpGoVlSibO2UJ3vX7VeHR1j8F8kR9zmwZK4ZEveQeumRY/640?wx_fmt=png&from=appmsg)可解释性与可控性对比

## 1. 4.对工具调用失败的鲁棒性不同

ReAct因为每一步都会重新观察反馈，如果某个工具调用失败或者返回异常结果，下一轮思考天然就能感知到，并调整策略。

Plan & Execute如果没有配套的Replanner机制，执行阶段发现某一步走不通时，可能会顺着错误的计划继续往下走，直到最后才发现整体失败，纠错更滞后。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLjJeVYNMKj6dgMcam0vB9Gnic3n2s2x8DUXkVZZPukhViaRQdnOjiaC9H65SxeqRzjTb5EKBtDxsn9CzERhJhticbYSwic3e0m0jVCs/640?wx_fmt=png&from=appmsg)工具调用失败鲁棒性对比

## 分别适合什么业务场景

结合读者的实验和一些实际落地案例，我把两种范式的适用场景大致归纳如下。

ReAct更适合：

开放式问答与研究型任务：比如需要多轮搜索、根据搜索结果决定下一步查什么的资料调研类Agent，路径无法提前预知； 客服与对话式助手：用户的下一句话往往决定了Agent下一步该做什么，天然是边聊边决策的场景； 需要频繁与环境交互、反馈驱动决策的任务：比如网页自动化操作，点击后页面会变化，下一步必须基于最新页面状态决定。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLjZiaDhs3xczAWZYy7DPxDXic69iaRlrUMIjVtOuVz1ebN9voPcyBabp9osBibSp9Ft2zYwhVJ7SwzYpwML1LtXQOt0wOLADWv4yVk/640?wx_fmt=png&from=appmsg)ReAct适用场景

Plan & Execute更适合：

结构清晰、步骤确定的复杂任务：比如数据处理流水线、多步骤的报告生成、代码重构类任务，任务边界和依赖关系提前就能理清； 对成本和延迟敏感的场景：因为规划阶段一次性想清楚,后续执行可以减少大模型调用次数，整体效率更高； 需要人工审核或强可控性的企业场景：先出计划、再执行，方便业务方在执行前review整体方案，出问题也更容易定位是哪一步的计划有误。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLhslFibNpiaVnoG240MNlBrPPsHZSuoiaIIVOt6pnrkay8EvuHMcNIwUSuGc0laG62rbUwfPnDyaX0APHd51xLBrRHPxdMs6aPQ1M/640?wx_fmt=png&from=appmsg)Plan & Execute适用场景

在实际的复杂系统里，这两种范式其实并不互斥。很多成熟的Agent架构会把二者结合——用Plan & Execute做顶层任务分解，再在每个子任务内部用ReAct的方式动态执行，兼顾整体可控性和局部灵活性。

![](https://mmbiz.qpic.cn/sz_mmbiz_png/icZ2yltr3sLjic59z03UCMN9PdER0wn2MzRvLtAeAHj41xGr8dMgVdWJkz0rXsnjD26bYGv9vdSH9ruEic4qjMHLTYG5ichicrDmTm7nDqp6BkJc/640?wx_fmt=png&from=appmsg)两种范式结合使用

## 写在最后

这件事让我更确信一点：面试中答错一道题不可怕，可怕的是答错之后不去深挖"为什么没答上来"。ReAct和Plan & Execute这道题看似是背概念，但真正的区分度在于——你是否能讲清楚它们在实际业务里，各自的成本、风险和适用边界在哪。这才是能不能把Agent真正用在生产环境里的分水岭。

如果你也在准备Agent方向的面试，或者正在做相关的技术选型，希望这篇复盘对你有帮助。

