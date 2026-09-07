---
title: "Harness Engineering：AI 工程师的下一个战场！"
author: "烟花老师 (@teach_fireworks)"
url: "https://x.com/teach_fireworks/status/2035515316848242689"
ingested: "2026-09-07"
date: "Sun Mar 22 00:34:04 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

Harness Engineering：AI 工程师的下一个战场！

AI Agent = 模型 + Harness。如果你不是模型，你就是 Harness。

OpenAI 用 5 个月、零手写代码，构建了 100 万行生产代码。核心是三层 Harness：上下文工程、架构约束、定期清理 AI 熵增的「垃圾回收」代理。

这个模式不新鲜——诺伯特·维纳 1948 年就命名了它：控制论。

1784 年瓦特的离心调速器，工人从转阀门变成设计反馈机制。2014 年 Kubernetes，工程师从重启服务变成写声明式规格。2026 年 Harness Engineering，工程师从写代码变成设计环境、反馈循环和约束系统。每次都是同一个模式：闭合控制回路。

为什么你的 Agent 总是失败？不是模型能力不足，是 Harness 没给它正确信息。「好的代码是什么样的」、「架构奖励哪些模式」——这些判断锁在你脑子里，没有被外部化。Agent 不会通过渗透作用学习，你不写下来，它第 100 次犯的错和第 1 次一样。

Anthropic 给出的长时 Agent 配方：文件系统 + Git 持久化状态、沙盒安全执行、上下文压缩防止 Context Rot、Ralph Loop 强制完成目标、自我验证循环（写代码→测试→检查日志→修复）。

工程师的角色正在根本转变：从「写代码解决问题」到「设计系统让 Agent 解决问题」。你的判断力——外部化为文档、Linter、测试——才是新时代的核心竞争力。

模型包含智能，Harness 使这种智能变得有用。设计瓦特调速器的工人没有回去转阀门，不是因为不能，而是因为不再有意义。

必读文章：
• OpenAI: [openai.com/index/harness-…](https://openai.com/index/harness-engineering/)

• Martin Fowler: [martinfowler.com/articles/explo…](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)

• George @odysseus0z: [x.com/odysseus0z/sta…](https://x.com/odysseus0z/status/2030416758138634583)

• Viv @Vtrivedy10: [x.com/Vtrivedy10/sta…](https://x.com/Vtrivedy10/status/2031408954517971368)

• LangChain Docs: [docs.langchain.com/oss/python/dee…](https://docs.langchain.com/oss/python/deepagents/harness)

## 💬 Replies

### 1 @teach_fireworks (烟花老师) (Author)

*Sun Mar 22 11:25:35 +0000 2026*

长文完整内容：[note.mowen.cn/detail/dV-FVaF…](https://note.mowen.cn/detail/dV-FVaFvkhEVmSX4mc-n8?code=KBnDeq9HK8AVr34m)

### 2 @JokieKeOnX (Jokie Ke)

*Sun Mar 22 13:52:59 +0000 2026*

@brad\_zhang2024 程序員的工作已經從自己動手寫程序變為引導AI寫程序了。

感覺資深程序員的價值正在提升，他們比起初階程序員，更懂得軟體工程的核心價值。

### 3 @teach_fireworks (烟花老师) (Author)

*Sun Mar 22 13:59:43 +0000 2026*

@JokieKeOnX 非常同意，资深程序员的价值越来越大，他们跟着 AI 的进化一起成长，能力从深度和广度上都在不停的进步

### 4 @alexhyzhang (AlexHYZhang)

*Mon Mar 23 08:03:25 +0000 2026*

@brad\_zhang2024 从小龙虾的架构起，一路摸过来，发现原来是Harness Engineering, 这东西绝对又是一个已经初具雏形的划时代产物

### 5 @teach_fireworks (烟花老师) (Author)

*Mon Mar 23 08:04:31 +0000 2026*

@alexhyzhang 哈哈哈，是的，搞起！

### 6 @sam6886 (Sam_Seah)

*Mon Mar 23 02:35:28 +0000 2026*

@brad\_zhang2024 很多团队现在已经接受“prompt 不是全部”，但还没接受“运行环境也是代码”的事实。

上下文治理、失败恢复、权限边界这些东西不补齐，agent 再聪明也会越跑越偏。

### 7 @teach_fireworks (烟花老师) (Author)

*Mon Mar 23 14:22:30 +0000 2026*

@sam6886 对的

### 8 @trendsdotfun (Trends)

*Sun Mar 22 16:09:52 +0000 2026*

@brad\_zhang2024 烟花老师分享的Agent知识真的打破我的信息茧房了，我们最近有举办相关的Agent黑客松比赛，其中有个赛道只需要分享干货（无需编程）即可参加，想邀请老师来～

[x.com/trendsdotfun/s…](https://x.com/trendsdotfun/status/2031732992255967656?s=20)

### 9 @aidenspeed01 (Aiden)

*Sun Mar 22 15:45:08 +0000 2026*

@brad\_zhang2024 这将是会使用 AI 和不会使用 AI 的人拉开差距的地方

### 10 @DnJiavc (Dn.Jia)

*Sun Mar 22 03:16:42 +0000 2026*

@brad\_zhang2024 从预训练，到后训练，再到Agent，现在是Harness，未来的路径正在徐徐展开。12-18个月内，从算力到框架已经齐备，AI海啸正在路上，对旧生产关系的破坏马上到来。

### 11 @LifefindsawayMD (Foreveryoung)

*Mon Mar 23 03:18:36 +0000 2026*

说到实际体验，我现在的工作流就是三层Harness：Opus做上下文工程（分析需求、拆任务），Codex在架构约束内写代码，Gemini Flash负责验证循环（跑测试+生成报告）。

"如果你不是模型，你就是Harness"——这句话太狠了，但确实是现在的现实。程序员的核心能力已经从写代码变成了设计Agent之间的协作流程和约束条件。

### 12 @Csgpt2023Garciq (CSGPT)

*Tue Mar 24 00:48:30 +0000 2026*

@brad\_zhang2024 三天不学习赶不上Harness

### 13 @Life4GPT (LifeGPT)

*Sun Mar 22 13:46:14 +0000 2026*

@brad\_zhang2024 终于开始火起来了

