---
title: "别再卷模型了，2026 年 Agent 的胜负手在 Harness！给你的Agent 搭\"操作系统\"吧"
author: "huangserva (@servasyy_ai)"
url: "https://x.com/servasyy_ai/status/2038213141083947053"
ingested: "2026-09-07"
date: "Sun Mar 29 11:14:15 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 别再卷模型了，2026 年 Agent 的胜负手在 Harness！给你的Agent 搭"操作系统"吧

你有没有遇到过这种情况。

同样一个 Claude，同样一个 GPT-4o，有人拿它 5 个月写了 100 万行代码，有人连让它稳定跑两小时都做不到。

模型一模一样，结果天差地别。

问题出在哪？

我最近读了一圈文章，OpenAI 的、Anthropic 的、Martin Fowler 的、Phil Schmid 的，发现他们不约而同地在讲同一件事。

他们管这件事叫 Harness Engineering。

说白了，就是给 Agent 搭一套"操作系统"。

## 先搞清楚 Harness 是什么

![Image](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_2.jpg)

Phil Schmid 在 HuggingFace 的博客里打了一个比方，我觉得特别到位。

你可以把一个 Agent 系统想象成一台电脑。

模型是 CPU，提供原始算力。上下文窗口是内存，临时存点东西，关机就没了。Agent 是跑在上面的应用程序。

那操作系统呢？

Harness 就是操作系统。

没有操作系统，CPU 再猛也只是一块芯片。你总不能对着芯片敲键盘吧。

同样的道理，没有 Harness，模型再聪明也只是一个聊天框。你让它跑一个小时的复杂任务，它中间忘了上下文怎么办？它写了一堆垃圾代码谁来拦？它犯了错自己都不知道怎么办？

这些问题，都不是"换一个更聪明的模型"能解决的。

Martin Fowler 说了一句话我印象很深。他说 Harness 未来可能会变成"服务模板"。就像今天你起一个新项目，会从一套 service template 开始，以后你起一个新 Agent，也会从一套 Harness 模板开始。

这个判断我觉得大概率会成真。

## 为什么 2026 年突然火了

![Image](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_3.jpg)

因为模型够强了。

2024 年大家还在卷谁的模型更聪明。到了 2026 年，顶级模型之间的差距已经很小了。你让 Claude 和 GPT 做同一道题，分数差不了几个点。

但你让它们连续干 8 小时活，差距就出来了。

这个差距不在模型本身，在模型外面那一圈东西。

OpenAI 的 Codex 团队有一个很夸张的数据。他们用 Codex 写了一个完整的产品，5 个月，100 万行代码，零行手写。整个过程中他们发现，瓶颈早就不是"模型能不能写代码"了。

瓶颈是人类来不来得及审查代码。

模型的产出速度已经超过了人类的审查速度。这时候你再去优化模型有什么用？你该优化的是审查流程、是质量把控、是架构约束。

这就是 Harness 要干的事。

## 三根支柱

![Image](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_4.jpg)

好，Harness 到底包含什么？

读完这一圈文章，我发现大家虽然用词不同，但核心就三件事。我管它们叫三根支柱。

评估闭环

这是 Anthropic 最强调的一根。

核心思想特别简单。Agent 不能自己给自己打分。

你想，一个实习生写完报告，你让他自己评价写得好不好，他肯定说"还行吧"。你得找一个独立的人来评。

Anthropic 把这套方法叫"评估驱动开发"。先定义什么叫"做得好"，再让 Agent 去做，做完由独立的评估器打分。

> 评估驱动开发，就是 TDD 的 Agent 版。先写测试，再写代码。只不过这里的"测试"是给 Agent 写的。

评估器不是看看代码就打分。它会实际操作产品，用 Playwright 点按钮、填表单、跑测试，然后按明确标准评判。

这里有一个特别有意思的案例。

Anthropic 的 Opus 4.5 在做航班预订测试的时候，发现了预订政策里的一个漏洞，找到了一个比标准答案更好的解法。

但评估器判它"失败"了。

为什么？因为评估器没预料到这种创造性解法。标准答案只有一种，Agent 找到了更好的，反而被扣分了。

这个故事说明两件事。一是 Agent 已经够聪明了，聪明到能发现人类没想到的解法。二是评估闭环不只是在检查 Agent，也在检查评估本身。你的评估器如果太死板，反而会成为瓶颈。

还有一个数据更直接。CORE-Bench 上 Opus 4.5 初始得分 42%，后来他们修复了评分 bug、放宽了 scaffold 限制，得分直接跳到 95%。

很多时候不是模型不行，是你的 Harness 有问题。

Anthropic 用这套方法，6 小时、花 200 美元，让 Agent 做出了一个完整的游戏。

架构约束

这是 OpenAI Codex 团队的看家本领。

你跟实习生说"代码要分层"，他点头说好，转头就把 UI 逻辑写进了数据库层。

靠嘴说没用。

OpenAI 的做法是，靠 linter 和 CI 机械执行。违反架构规则的代码，直接被拒，连 review 的机会都没有。

他们的代码分层是这样的：Types → Config → Service → UI，每一层只能依赖上一层，不能反向依赖。这个规则不是写在文档里让人自觉遵守的，是写在 linter 里自动检查的。

更绝的是，这些 linter 本身也是 Codex 自己生成的。

Agent 给自己写规矩，然后自己遵守。

Martin Fowler 看完 OpenAI 的文章后说了一句话：

> "增加信任和可靠性，需要约束解空间。这意味着放弃一些'生成任何东西'的灵活性。"

约束越多，反而越可靠。

这听起来反直觉，但数据说话。LangChain 做了一个实验，模型完全不换，只改 Harness，Terminal Bench 2.0 的通过率从 52.8% 跳到 66.5%。Vercel 更狠，直接删掉了 80% 的 Agent 工具，结果步骤更少、速度更快、效果更好。

工具越少反而越好用，这个结论在 Agent 领域被反复验证了。

记忆治理

这根支柱相对没那么多人讲，但我觉得长期来看可能是最重要的。

PrismerCloud 在这个方向上做得比较深。

问题是这样的。多个 Agent 共享一个知识库，Agent A 写了一条经验进去，Agent B 读到了就当真了。但如果 Agent A 写的是错的呢？

一个 Agent 的幻觉，会通过共享知识库污染所有 Agent。

PrismerCloud 的做法是建了一套"进化引擎"。Agent 的每次经验先记录为"信号"，信号经过验证后提炼为"基因"，基因通过实际效果不断优化。

> 简单说，基因就是被验证过、确实有效的知识。没验证的不算。

有一个数据很有意思。3 行 prompt 加上记忆系统，效果约等于 200 行精心编写的专家 prompt。而且前者会持续进化，后者写完就固定了。

这意味着什么？意味着记忆系统做得好，你根本不需要写那么复杂的 prompt。Agent 自己会越跑越好。

还有一个补充：熵对抗

这个不算独立支柱，但值得一提。

Agent 系统跑久了会自然腐化。文档过期了、架构被绕过了、知识库里堆了一堆过时信息。就像一个公司运转久了，流程会慢慢变形。

OpenAI 的做法是定期跑一个"重构 Agent"，专门扫描文档不一致和架构违规。他们有一句话我觉得说得特别好：

> "当 Agent 遇到困难时，我们把它当作信号：找出缺什么，然后反馈到代码库中，始终让 Codex 自己写修复。"

Agent 遇到的问题，不是去修 Agent，而是去修 Harness。这个思路很关键。

## 谁在做这件事

![Image](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_6.jpg)

这个领域现在分成了两条线。一条是开源社区，已经有不少项目走出了坚实的一步，你今天就能拿来用。另一条是商业公司的内部实践，思路很好，但你只能看文章学方法论，代码拿不到。

开源项目：已经能用的

LangChain DeepAgents，可能是目前最接近"通用版 Claude Code"的开源项目。规划、文件操作、子 Agent 委派、上下文自动压缩，开箱即用，支持任意模型。GitHub 上 115k stars，社区活跃度很高。如果你想自己搭一套 Harness，这是起步门槛最低的选择。

DeerFlow 2.0，字节跳动出品。今年 3 月开源，一个月内拿了 39k stars。它管自己叫"SuperAgent Harness"，和 v1 完全不是一个东西，代码从零重写。架构很完整：沙盒执行、持久化记忆、子 Agent 编排、技能系统，底层基于 LangGraph。你可以把它理解成一个"开箱即用的多 Agent 操作系统"。

OpenHands，专攻代码 Agent。SWE-bench Verified 上跑到了 77.6%，和商业产品打得有来有回。关键是它模型无关，MIT 协议，什么模型都能接。他们还专门做了一套评估 Harness（OpenHands Benchmarks），用 Laminar 做可观测性，每一步 Agent 操作都有 trace。

SWE-agent，Princeton 和 Stanford 的研究团队做的。NeurIPS 2024 论文。它的思路很纯粹：不追求功能多，而是把"评估驱动"这件事做到极致。如果你关心的是怎么科学地衡量 Agent 能力，这个项目值得研究。

Goose，Block（就是做 Square 和 Cash App 那家公司）开源的。Apache 2.0 协议。它的定位不只是写代码，而是一个通用的 on-machine Agent。能装依赖、跑测试、操作文件、执行任务。Block 的 CTO 在 Sequoia 的播客里专门聊过这个项目的设计哲学。

PrismerCloud，专攻记忆治理。前面讲过它的进化引擎，信号到基因到技能涌现。一条 docker compose 命令就能部署。如果你的 Agent 系统需要多 Agent 共享知识且不被幻觉污染，这是目前最成熟的方案。

Cognee，知识图谱驱动的 Agent 记忆引擎。6 行代码就能接入。它不只是存东西，而是帮你在数据之间建立语义连接，让 Agent 能"理解"知识之间的关系。

商业公司的实践：能学方法论，拿不到代码

Claude Code + Agent SDK，Anthropic 出品。目前公认的通用 Harness 标杆。不只是编码工具，他们已经用它做深度研究、视频创作、笔记。核心是那套评估驱动的方法论，前面讲过了。

OpenAI Codex，架构约束的极致实践。5 个月百万行代码零手写，靠的就是自动生成的 linter 加 Agent 互相 review。他们甚至发现，随着代码量增大，瓶颈从"写代码"变成了"人类审查代码"，于是把 review 也交给了 Agent。

这两家的文章写得很好，方法论值得反复读。但如果你想今天就动手搭自己的 Harness，上面那些开源项目才是真正的起点。

## 一个让我印象深刻的教训

![Image](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_1.jpg)

Rich Sutton 写过一篇经典论文叫"苦涩的教训"。大意是说，长期来看，利用计算能力的通用方法总是会打败人类精心设计的特定方法。

这个教训在 Agent 领域再次应验了。

Manus 6 个月重构了 5 次 Harness。同样的模型，5 种架构，每次重写都变得更好。LangChain 一年内重新架构了 3 次。Vercel 删掉 80% 的工具。

Build to Delete。为删除而构建。

你今天写的"聪明逻辑"，明天模型一升级可能就不需要了。你的架构必须模块化，随时准备撕掉重来。

Phil Schmid 说了一句话我觉得是这篇文章最值得记住的：

> "竞争优势不再是 prompt，而是你的 Harness 捕获的轨迹。每次 Agent 的成功和失败，都是训练下一代的数据。"

你的 Harness 跑得越久，积累的轨迹越多，你的 Agent 就越强。这不是靠换模型能追上的。

## 三个阶段

![Image](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_5.jpg)

如果要用一张图来理解 Harness 在整个 AI 工程中的位置，可以这么看。

Prompt Engineering，解决的是"说什么"。你给模型一句指令，它给你一个回答。单次交互。

Context Engineering，解决的是"知道什么"。你给模型准备好参考资料、历史记录、工具描述。让它在回答之前先有足够的上下文。

Harness Engineering，解决的是"怎么持续、稳定、大规模地干活"。评估闭环确保质量，架构约束确保规矩，记忆治理确保经验积累。

三层叠加，缺一层就会出问题。

光有 Prompt 没有 Context，Agent 聪明但啥都不记得。加了 Context 但没有 Harness，它记得住事但没人管着，迟早出乱子。三层都到位了，才算是一个能长期干活的角色。

OpenAI、Anthropic、LangChain 已经在这么干了。

参考来源：OpenAI Harness Engineering、Anthropic Demystifying Evals for AI Agents、Anthropic Building Agents with Claude Agent SDK、Phil Schmid (HuggingFace) The Importance of Agent Harness in 2026、Martin Fowler (Thoughtworks) Harness Engineering、LangChain Agent Frameworks Runtimes and Harnesses

### 🖼️ Attached Media

![Image 1](../_media/x-2038213141083947053/servasyy_ai_2038213141083947053_7.jpg)

## 💬 Replies

### 1 @AI_Jasonyu (鱼总聊AI)

*Sun Mar 29 12:23:50 +0000 2026*

@servasyy\_ai 这么高阶

### 2 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 12:25:34 +0000 2026*

@AI\_Jasonyu 与时俱进

### 3 @bozhou_ai (泊舟)

*Sun Mar 29 12:30:13 +0000 2026*

@servasyy\_ai 这个评估器得好好思考一下怎么弄

### 4 @gxjdian (纯棉短裤)

*Sun Mar 29 13:21:35 +0000 2026*

@servasyy\_ai 回头看看

### 5 @xiaoerzhan (小耳👂Jane｜Xiaoer)

*Sun Mar 29 12:58:06 +0000 2026*

@servasyy\_ai 黄老总是让我看不一样的新词汇～～～学习学习学习～～大概每个概念都知道点皮毛，但是深刻没有研究，感觉基础不牢地动山摇啊～～

### 6 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 13:50:10 +0000 2026*

@xiaoerzhan 与时俱进

### 7 @li9292 (李韭二)

*Sun Mar 29 11:56:21 +0000 2026*

@servasyy\_ai 评估驱动、架构约束、记忆治理，和我今天重读你之前文章想到的很接近[x.com/li9292/status/…](https://x.com/li9292/status/2038177202760720477?s=20)

### 8 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 11:57:30 +0000 2026*

@li9292 非常好，你理解了

### 9 @cnyzgkc (木马人)

*Sun Mar 29 12:09:11 +0000 2026*

@servasyy\_ai wk，又出新东西了，学不完啊

### 10 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 12:14:49 +0000 2026*

@cnyzgkc 后续我刚才出一个开源项目算了，不用学，直接抄作业

### 11 @liyue_ai (李岳)

*Sun Mar 29 13:27:04 +0000 2026*

@servasyy\_ai 那Harness会不会也是大模型开发出来的？

### 12 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 13:33:07 +0000 2026*

@liyue\_ai 鸡生蛋蛋生鸡

### 13 @jingwangtalk (Jing Wang)

*Sun Mar 29 14:47:00 +0000 2026*

@servasyy\_ai [x.com/jingwangtalk/s…](https://x.com/jingwangtalk/status/2037871440926834987?s=20)

### 14 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 14:47:59 +0000 2026*

@jingwangtalk 不错，我去拜读一下

### 15 @KaiyoungYu (Kaiyoung)

*Tue Mar 31 01:42:32 +0000 2026*

@servasyy\_ai 这个开源项目：已经能用的 列表真不错诶

### 16 @servasyy_ai (huangserva) (Author)

*Tue Mar 31 02:18:24 +0000 2026*

@KaiyoungYu 其实我最近又陆陆续续找到一些新的，都不错，昨天发文那个算是harness的支系

### 17 @Yangtze07 (Yangtze阳子江)

*Sun Mar 29 13:24:02 +0000 2026*

@servasyy\_ai 黄总，这好高端，第一次听到Harness，好好理解消化

### 18 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 13:50:40 +0000 2026*

@AndyEduAI 其实出来一段时间了，我也是听到名字后来发现和自己做的事情有点像

### 19 @0xjackyang (Jack Yang)

*Sun Mar 29 16:27:57 +0000 2026*

@servasyy\_ai 您建议harness怎么搭？我觉得在openclaw上延展有点难。把它当作gateway router可以。但是我看您的系统很厉害，agen协作似乎做的很稳定了，能不能提一些建议

### 20 @servasyy_ai (huangserva) (Author)

*Sun Mar 29 23:35:08 +0000 2026*

@0xjackyang 下一篇我会讲

### 21 @builderjackm (Builder Jack)

*Mon Mar 30 03:31:16 +0000 2026*

@servasyy\_ai 如果是AI写给人类阅读的，建议保持简单，我再交给我的AI做个摘要，这不就浪费电了嘛

### 22 @servasyy_ai (huangserva) (Author)

*Mon Mar 30 04:25:01 +0000 2026*

@mshijie 你可以选择不看

### 23 @soordinarybeing (soordinary)

*Mon Mar 30 00:38:05 +0000 2026*

@servasyy\_ai 写的真好，我能转发到公众号吗，会注明作者和出处。🙏

### 24 @servasyy_ai (huangserva) (Author)

*Mon Mar 30 00:39:11 +0000 2026*

@soordinarybeing 可以，麻烦注明。因为我后续会开公众号了

### 25 @he_keke999 (Thinking)

*Sun Mar 29 16:36:05 +0000 2026*

@servasyy\_ai 今年不是吹 skills 嘛🤣

### 26 @servasyy_ai (huangserva) (Author)

*Mon Mar 30 00:14:12 +0000 2026*

@he\_keke999 去年skill就很火了

### 27 @rionaifantasy (Rion Wu)

*Sun Mar 29 12:19:21 +0000 2026*

@servasyy\_ai @grok 帮我总结一下这篇文章

### 28 @lxfater (铁锤人)

*Sun Mar 29 13:14:50 +0000 2026*

@servasyy\_ai 不错👍

### 29 @nopinduoduo (我真的没有拼多多)

*Sun Mar 29 12:31:20 +0000 2026*

@servasyy\_ai 学不完学不完

