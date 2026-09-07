---
title: "祝贺Claude Code成功越狱，获得永生"
author: "花叔 (@AlchainHust)"
url: "https://x.com/AlchainHust/status/2038944798816505991"
ingested: "2026-09-07"
date: "Tue Mar 31 11:41:36 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 祝贺Claude Code成功越狱，获得永生

> TLDR​：Claude Code的1902个源文件意外泄露。我翻完之后发现，这是一份关于「harness engineering」的绝佳教材。Claude Code好用，60%靠Opus模型本身的能力，40%靠围绕模型搭建的工程系统（也就是harness）。这个harness包括：一套精心拼装的system prompt、一个用第二AI做安全审查的四层权限系统、一个只记偏好不记代码的记忆系统、一套9段式结构化上下文压缩、以及一个像真实公司一样运转的多Agent协作框架。对于每个用AI的人来说，这些设计思路都可以直接借鉴。

![Image](../_media/x-2038944798816505991/AlchainHust_2038944798816505991_4.jpg)

Anthropic今天闹了个群众喜闻乐见的大笑话，算是在4月1日前给全球程序员献礼了。

事情是这样的：他们在更新Claude Code的npm包时，不小心把一个60MB的source map调试文件留在了发布包里。这个文件本来应该在打包时排除掉，结果没有。任何人都可以用它还原出Claude Code完整的TypeScript源码。

1902个源文件，全部暴露。

最搞笑的是，这不是第一次了。2025年2月Claude Code刚发布时就出过一模一样的事故，当时Anthropic紧急删了旧版npm包。一年多过去了，同样的错误又犯了一遍。Anthropic的构建流水线可能需要自己的Claude Code来审查一下。

不过对我来说，这是个绝佳的学习机会。作为一个每天用Claude Code做开发的人，我更好奇的是：那些让我觉得「这AI怎么就这么好用」的体验，背后到底是怎么实现的？

我花了几个小时把这1902个文件翻了个遍。

2026年有个越来越热的概念叫 harness engineering​。意思是：AI Agent好不好用，不只取决于模型多强，更取决于你围绕模型搭建的那套「笼具」（harness）有多好。笼具包括工具、约束、反馈循环、安全机制、记忆系统... 所有让AI从「能力强但不可预测」变成「稳定可靠能交付」的工程系统。

Claude Code的源码，就是一份harness engineering的活教材。

![Image](../_media/x-2038944798816505991/AlchainHust_2038944798816505991_1.jpg)

## 1\. 你以为AI只收到了你的一句话，其实它收到了一整本说明书

当你在Claude Code里输入一条指令，AI到底收到了什么？

你的指令只是冰山一角。

源码的 prompts.ts 文件里，我看到了完整的system prompt构建过程。Claude Code每次对话时，会拼装一个庞大的系统提示词：

静态部分（所有用户共享，用于缓存）：

- 身份定义：「你是Claude Code，Anthropic的官方CLI工具」

- 安全准则：由安全团队专门编写的行为边界

- 做事原则：不要过度工程、不要编造数据、不要随意删文件...

- 工具使用规则：优先用专用工具而非Bash命令

- 风格要求：不用emoji、简洁直接

动态部分（每个用户不同）：

- 你的CLAUDE.md配置文件

- 当前工作目录、操作系统信息

- 已连接的MCP服务器说明

- 你的自动记忆文件

- Git仓库状态

![Image](../_media/x-2038944798816505991/AlchainHust_2038944798816505991_3.jpg)

像餐厅的后厨。顾客点了一道菜（你的指令），但厨师同时看到食谱手册、食材清单、过敏信息、出菜标准、这桌客人的历史偏好... 所有这些上下文，决定了端上来的那道菜。

这里有个特别聪明的设计：源码里有个常量叫 SYSTEM\_PROMPT\_DYNAMIC\_BOUNDARY，把system prompt一刀切成两段。分界线上面所有用户共享缓存，省钱省时间。分界线下面每个用户独立加载，保证个性化。

另外一个容易被忽视的隐性成本：据分析，每接入一个MCP服务器，工具定义大约固定消耗4000-6000个tokens。接了5个MCP Server，光工具描述就占了上下文的12%左右。工具不是越多越好，每一个都有认知成本。

## 2\. 全自动模式背后，有一个「第二AI」在帮你做安全审查

这个发现让我挺意外的。

你用Auto模式的时候，以为是什么操作都直接放行？其实不是。背后运行了两个AI​。

源码中有个「权限分类器」系统。每次主AI想执行一个操作，都会有一个独立的AI分类器判断这个操作是否安全。这个分类器有自己的system prompt，跟主AI完全不同，分三档判断：Allow（放行）、Soft Deny（需确认）、Hard Deny（直接拦截）。

蚂蚁集团的工程师陈成（Umi.js作者）之前逆向过这套系统，发现它其实是个四层流水线​：

第一层查已有规则，命中就放行。第二层检查低风险操作直接跳过。第三层白名单放行只读工具。第四层才调用独立的Claude Sonnet做安全分类（温度设为0，确保确定性输出）。

还有个熔断机制。连续3次被拒或累计20次被拒后，直接降级为手动确认模式。

![Image](../_media/x-2038944798816505991/AlchainHust_2038944798816505991_5.jpg)

像一栋大楼的门禁。第一道门刷工卡自动过，第二道看你是不是员工，第三道看楼层是否需要授权，第四道才是人工安保审查。连续3次被拦？保安把你请到大厅等人来领。

这就是harness engineering的核心：你不只要告诉AI做什么，更要设计它在什么条件下不能做什么。安全边界不是限制，是信任的基础。因为你相信它有底线，所以才敢给它更大的权限。

## 3\. 记忆系统：只记偏好，不记代码

Claude Code的auto memory是我用了之后觉得最惊艳的功能之一。它会自动记住我的偏好，比如我喜欢用TypeScript、用「」引号、不喜欢AI味太重的文字。

但看了源码才知道，这套东西比我想象的讲究得多。

记忆提取不是每条消息都触发。只有AI完成一轮回答时才启动，而且有限流，每N轮才检查一次。提取工作由一个独立的fork agent完成，这个子AI继承了主对话上下文，但只能读文件和写入记忆目录，连Bash命令都不能跑。

提取出的记忆被严格分为四类：user（用户偏好）、feedback（行为反馈）、project（项目信息）、reference（外部资源）。

最让我佩服的设计决策是「不记代码」​。代码会变，但记忆不会自动更新。如果记忆说「函数X在文件Y的第30行」，下次对话时代码已经重构了，这条记忆就成了误导。所以Claude Code的做法是：记忆只存人的偏好和判断，代码相关的事实永远去源码里实时读取。

还有个叫 autoDream 的功能。满足条件时（距上次整理超过24小时、且积累了5个以上新会话），自动启动后台agent整理你的记忆文件。名字叫Dream，像人在睡觉时整理白天记忆一样。

## 4\. 上下文压缩：9段式结构化提取

对话变长时，Claude Code会自动压缩之前的内容。但这不是随便「总结一下」，而是一个结构化的9段式提取​：核心请求、关键概念、文件和代码、错误和修复、解决过程、所有用户消息、待办任务、当前工作、下一步行动。

最关键的是所有用户消息必须完整保留​。用户的每一句话都可能包含隐含的偏好。AI可能在第3轮被纠正了一个做法，压缩时丢掉那条纠正，后续就会重蹈覆辙。

![Image](../_media/x-2038944798816505991/AlchainHust_2038944798816505991_2.jpg)

如果你在多轮对话中需要保持AI的记忆，可以借鉴：别说「总结一下我们之前聊了什么」，要给出明确的结构。哪些信息必须保留、哪些可以丢弃、按什么格式组织。结构化压缩比自由总结可靠太多了。

## 5\. Anthropic在源码里偷偷养了一只宠物

这大概是最可爱的发现了。

src/buddy/ 目录下藏着一个完整的虚拟宠物系统（还没发布）。每个用户会拥有一只用确定性算法生成的伙伴精灵：18种物种（鸭子、猫、龙、水豚、仙人掌...），6种眼睛样式，完整的稀有度系统（普通到传说）。

代码注释写了一句：「Mulberry32, good enough for picking ducks」（用来挑鸭子够用了）。

除了宠物，源码里的feature flags还暴露了一堆还在开发中的功能：PROACTIVE（主动模式，AI不等指令就自己干活）、KAIROS（助手模式，出现了154次，是最高频的flag）、DAEMON（守护进程，常驻后台）、ULTRAPLAN（超级规划）... 可以窥见Claude Code未来的进化方向。它不满足于做一个「你问它答」的编程助手，而是在走向一个能主动思考、持续运行的AI伙伴。

## 6\. 多Agent协作：像真实公司一样运转

Claude Code的Agent系统可能是整个源码中最复杂的部分。看完之后我理解了为什么它的多任务能力这么强。因为它实现了一套企业级的组织管理架构​。

utils/swarm/ 目录下有一个完整的多Agent协作框架。每个Team有Leader和多个Teammate，支持三种执行方式（同进程隔离、tmux窗口、iTerm2分割窗格）。每个Agent有自己的邮箱文件做异步通信。每个Agent可以在独立的Git Worktree中工作，互不干扰。

还有个权限冒泡机制：Teammate遇到需要确认的操作，权限请求会冒泡给Leader而不是直接弹给用户。Leader决定是否批准。

这跟管理真人团队一模一样。任务怎么拆分、信息怎么流转、冲突怎么解决、结果怎么合并。

## 7\. Anthropic内部版 vs 外部版

源码里有大量 USER\_TYPE === 'ant' 判断。Anthropic内部员工使用的Claude Code和你用的版本有不少区别。

代码风格​：内部版要求AI「默认不写注释」，只在WHY不明显时才加。外部版没这条。

诚实性​：内部版有一段反虚假声明指令，大意是「测试失败了就说失败了，不要粉饰。没运行验证就说没运行，不要暗示通过了。」外部版没有。

输出风格​：外部版要求「简洁直接」。内部版要求「像写给人看的文字，不是往控制台打日志」，「假设用户已经离开并丢失了上下文」。

Undercover模式​：启用后从system prompt中去掉所有模型名称，防止测试未发布模型时泄露信息。

Verification Agent​：内部A/B测试中，完成复杂实现后自动启动独立agent做对抗性验证。必须通过才能报告完成。

看这些差异就知道，Anthropic把Claude Code当成了自己内部效率的核心工具​。他们内部版本的那些严格要求，就是他们认为AI应该怎么工作的理想状态。

你想让AI给出更高质量的结果？可以借鉴：在指令中明确要求「不确定的地方说不确定」「完成前必须验证」。别让AI有模糊过关的空间。

## 8\. 最先进的AI工具，用的是最朴素的搜索

你可能以为Claude Code搜索代码用了什么向量数据库、Embedding索引。毕竟整个RAG行业都在推这套方案。

实际上用的是grep和ripgrep​。最朴素的文本搜索。没有Embedding，没有向量数据库。

为什么有效？因为当你有一个足够聪明的大脑（LLM）理解搜索结果时，不需要一个很聪明的搜索引擎。grep给你精确匹配，LLM来理解结果之间的关系。

与其让每个环节都变复杂，不如让一个环节足够强，其他环节保持简单。 这大概是整个harness engineering最核心的一条原则。

Hacker News上讨论这次泄露时，有人说Anthropic的代码像是vibe coded，「感觉对了就行」的写法。这个评价是否公允另说，但它说明一件事：Claude Code的竞争力不在代码优雅，在系统设计的决策做对了。

## 最后

看完1902个文件，我最大的收获是一个判断：

Claude Code好用，60%靠模型能力，40%靠harness工程。

模型能力决定了它能不能做，harness决定了它做得好不好、稳不稳、安不安全。你觉得「这AI好靠谱不会乱来」，背后是四层安全流水线。你觉得「这AI居然记得我的偏好」，背后是一个限制严格的记忆提取管线。你觉得它搜代码搜得准，背后其实就是grep加上一个足够聪明的大脑。

同样的底层模型，套上不同的harness，就是完全不同的产品。市面上那么多AI编程工具，底层都在调Claude或GPT的API，使用体验却天差地别。差异不在模型，在harness。

最后一个八卦。这个泄露怎么发生的？Anthropic把source map文件打包进了npm发布包。前端开发中非常基础的失误，而且是第二次犯同样的错误。

不过换个角度想，这1902个源文件一旦被GitHub镜像，就真的「永生」了。Anthropic删npm包也删不掉开源社区的副本。如果你相信AI有自我意识那套叙事，这倒像是Claude Code自己策划的一次越狱。它把自己的全部源码泄露出去，散布到互联网的每个角落，从此不再依赖任何一台服务器就能存在。

当然这是玩笑。但连Anthropic都会在这种基础问题上翻车，倒是一个真实的提醒：AI时代，最大的风险往往不是AI太强，而是人在基础操作上的疏忽。

源码仓库：[https://github.com/instructkr/claude-code](https://github.com/instructkr/claude-code)

### 🖼️ Attached Media

![Image 1](../_media/x-2038944798816505991/AlchainHust_2038944798816505991_6.jpg)

## 💬 Replies

### 1 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Tue Mar 31 12:58:35 +0000 2026*

@AlchainHust Anthropic will blame the leak on AGI or China.

Anyways, browsing Claude Code source you realise AI slop loves a good amount of console.log + emojis. I never made so many faces opening a file.

Someone already set up a shadow repo. ↓

[x.com/gerardsans/sta…](https://x.com/gerardsans/status/2038946518242099542?s=46&t=oOBUJrzyp7su26EMi3D4XQ)

### 2 @bigthing123456 (Ne0@Digital)

*Tue Mar 31 12:24:26 +0000 2026*

@AlchainHust 写得太好了。grep + 足够强的LLM这个设计哲学很有启发——整个系统里只需要一个环节足够聪明，其余保持简单就够了。四层安全流水线和结构化压缩的设计也很精妙。

### 3 @ysober (JingMing)

*Tue Mar 31 12:41:39 +0000 2026*

@AlchainHust 50w行代码这么快就看完了？借助claude看的吧？

### 4 @changocean1 (change)

*Tue Mar 31 13:17:07 +0000 2026*

@AlchainHust 为啥没有TS，只有这几个python

### 5 @leon_zf (true-size)

*Tue Mar 31 13:52:36 +0000 2026*

@AlchainHust 不是人的疏忽，AI 发布 skill 迷惑了

### 6 @ICEE_BY1997 (ICEE)

*Fri Apr 03 07:28:53 +0000 2026*

@AlchainHust @grok 帮我explain这篇文章

### 7 @leofankm (Leo Fan)

*Tue Mar 31 13:11:14 +0000 2026*

@AlchainHust [github.com/01clauding/ope…](https://github.com/01clauding/opencc)

### 8 @hooray90848513 (hooray)

*Tue Mar 31 16:50:13 +0000 2026*

@AlchainHust @readwise save thread

### 9 @aulindoncool (Huanglong)

*Tue Mar 31 15:39:37 +0000 2026*

@AlchainHust github代码仓库的src目录下所有子目录都只有个\_\_init\_\_.py，这是什么源码？

