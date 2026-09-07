---
title: "4 个工作 Skill + 2 个运维 Skill，装完 Claude 直接变工作搭档"
author: "铁锤人 (@lxfater)"
url: "https://x.com/lxfater/status/2044781079660482801"
ingested: "2026-09-07"
date: "Thu Apr 16 14:12:54 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 4 个工作 Skill + 2 个运维 Skill，装完 Claude 直接变工作搭档

必装 Skill 推荐，你刷过多少篇了？

装了几个，打开 Claude 还是不知道该用哪个

装了跟没装，感觉差不太多

其实不是 skill 的问题

6 个没有分工的 Skill，跟 6 个陌生人塞进同一间办公室没区别，没人知道自己管什么，人多了反而更乱

根本原因只有一个：你有工具，但没有工作流框架

你每天的工作就 4 步：收集 → 消化 → 产出 → 汇报

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_1.jpg)

不信自己想一下，是不是这样？

你每天打开电脑在干嘛

搜东西，找资料、翻帖子、看别人怎么说，这是收集

搜回来一堆，得读、得整理、得变成自己能用的，消化

然后写点什么，文章、方案、报告

写完发出去，推到公众号、交给老板、丢到群里

收集、消化、产出、汇报，你每天就是在这 4 步里转，对不对？

所以今天我们讲的就是这 4 个 解决这些问题Skill 加 2 个运维工具

今天你看完将学会的是一套工作流框架，而不是又一篇垃圾推荐帖

## 第一步：收集

收集这一步，你让 AI 帮你搜东西，它搜回来的全是公开网页

但你真正想看的讨论在哪？小红书笔记、公众号文章、B站评论区，全在要登录才能看的地方

AI 进不去，因为它没有你的登录态

这不是提示词的问题，是所有 AI 工具的硬伤

Web Access 这个 Skill 做了一件事：通过 CDP 直连你本地的 Chrome

地址：https://github.com/eze-is/web-access

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_7.jpg)

你 Chrome 里登录了什么，它就能进什么

安装一条命令：

\`\`\`javascript
npx skills add eze-is/web-access
\`\`\`

配置一步：Chrome 地址栏打开 chrome://inspect/#remote-debugging，勾上允许远程调试

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_5.jpg)

配置完了

你给地址让他去抓公众号，稳稳的，具体如下图：

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_3.jpg)

可以看到，它真的进去了，拿到全文，不被反爬拦截

它还有更多的抓取方法，而且每次试错成功后都会记住，下一次再也不会犯错。

你平时能登录的地方，它都能替你进，收集这一步从此不用自己动手翻

## 第二步：消化

收集搞定了，但搜回来一堆东西，然后呢？

正常流程，我们得整理，得做笔记，得把有用的东西记下来，不然过两天就忘了

但你也知道，笔记这个事，做着做着就不做了

为了更好得学习，有些人会更认真：

搭知识库、搞第二大脑，Notion、Obsidian 都用过，建了一堆文件夹，整理了两三个月，最后还是不打开了

不管是做笔记还是搞第二大脑，死法都一样：维护成本全压在你身上，一忙就断

但Karpathy 的方法反过来：你只管扔素材进去，Claude 负责读、摘要、建页面、打双向链接

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_4.jpg)

维护成本从你的时间变成一条指令

知识库从你维护变成它自己长，每次录入都是在积累，不是在还债

完整教程我在这篇文章里写透了：《Obsidian + Claude Code：用 AI 大神 Karpathy 的方法搭一个真正可用的第二大脑》

[Embedded Tweet: https://x.com/i/status/2042848343949480173]

想直接用现成 Skill 的，社区已经有三个版本：

1\. AgriciDaniel/claude-obsidian，带 /wiki /save /autoresearch

地址：https://github.com/AgriciDaniel/claude-obsidian

2\. ekadetov/llm-wiki，Claude Code 插件

地址：https://github.com/ekadetov/llm-wiki

3. vanillaflava/llm-wiki-claude-skills，GUI 安装，不用开终端

地址：https://github.com/vanillaflava/llm-wiki-claude-skills

消化这一步，从此不靠你自己硬扛理解输入

## 第三步：产出

到产出了，你用 Claude 写了一段东西，内容没问题

但你敢直接发吗？

现在人人都跟 AI 聊过天，AI 写的东西什么样大家心里有数

动不动就深入探讨、结尾必来一段升华、每句话都工工整整的，这些特征读者一眼就认出来

你发出去，对方心里第一反应：这是 AI 写的吧

你的内容、你的专业度，全被 AI 腔毁了

下面提供两个Skill：

humanize（https://github.com/blader/humanizer)

中文版：(https://github.com/op7418/Humanizer-zh，推友做的）

这个命令做的事很具体：它扫的是 Wikipedia 上整理出来的 AI 写作特征清单，逐一对照、逐一清除

这个不是通用润色Skill，是专门针对 AI 写作指纹的Skill

举个图片例子：

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_6.jpg)

改之前：

值得注意的是，这一工具不仅能够显著提升工作效率，更重要的是，它从根本上改变了我们的工作方式

改之后：

这工具好用在哪？干活快了，方式也变了

改完发出去，读者以为是你写的

这才算真正能用的内容！！

## 第四步：汇报

最后一步，汇报

内容写完了，但写完不等于能发

你面前还有两道坎

第一道是格式，你写的是 Markdown，交给别人要 Word，做汇报要 PPT，发公众号要排版，每次都是单独的体力活。

解决方法是按照是 Anthropic 官方出的 四个Skill，四条命令装完：

\`\`\`javascript
npx skills add https://github.com/anthropics/skills --skill docx
npx skills add https://github.com/anthropics/skills --skill pptx
npx skills add https://github.com/anthropics/skills --skill xlsx
npx skills add https://github.com/anthropics/skills --skill pdf
\`\`\`

装完直接跟 Claude 说要什么格式，它输出带格式的专业文档，对方打开就能用

第二道是发送，格式好了还得手动推到该去的地方

md2wechat 一条命令，自动排版推到公众号草稿箱，进去改个标题封面直接发

安装步骤：

\`\`\`javascript
brew install geekjourneyx/tap/md2wechat
npx skills add https://github.com/geekjourneyx/md2wechat-skill --skill md2wechat
\`\`\`

完整教程我之前写过相关教程：

[Embedded Tweet: https://x.com/i/status/2037047059384328315]

写完到发出去不超过 5 分钟，最后一公里从此消失

## 还差两个运维工具

收集、消化、产出、汇报，四步到位了

但任何系统都需要运维

出了问题要能找到根因，不是靠猜，用顺了要能把好流程固化下来，不是每次重来

这套系统配了两个运维工具：

第一个解决的是：AI 出问题时来回改、来回转圈，你也不知道它到底卡在哪

Superpowers（https://github.com/obra/superpowers）是 Claude 生态里最火的 Skill 套件，GitHub 15 万 Star，35 万次安装

里面的 /systematic-debug，强制按隔离、观察、诊断、修复、验证的顺序走，找到根因之前，禁止提任何修复方案，不靠运气靠流程，最终找到真正原因

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_2.jpg)

如何安装呢？

安装：

\`\`\`javascript
npx skills add obra/superpowers
\`\`\`

第二个解决的是：生产Skill的问题

第二个解决的是：生产Skill的问题

这 6 个 Skill 覆盖了主要环节，但你的工作肯定不止这些，

但你有自己的流程、自己的习惯，这些没有现成 Skill 能替你做

使用下面这个Skill👇

Skill-Creator（https://github.com/anthropics/skills，skills/skill-creator/）是 Anthropic 官方出的 Skill

如何安装呢？

安装：

\`\`\`
npx skills add https://github.com/anthropics/skills --skill skill-creator
\`\`\`

/skill-creator 进入，描述你的流程，它帮你生成完整的 SKILL.md

你自己的工作方式，也能变成 Skill！！

这套系统从拿来用，变成越用越是你自己的，加上这两个，才算真正完整。

我承认文章有点长了，所以下面解决你记不住的问题！！

## 怕记不住？

6 个 Skill，按收集、消化、产出、汇报排好位，加问题修复和 Skill 生成打底，这就是你的工作流框架。

存好这张图：

![Image](../_media/x-2044781079660482801/lxfater_2044781079660482801_8.jpg)

从第一个开始装，一次一个，装完试一下再装下一个

觉得有用？转给一个你觉得也该试试的朋友，关注我吧！！

### 🖼️ Attached Media

![Image 1](../_media/x-2044781079660482801/lxfater_2044781079660482801_9.jpg)

## 💬 Replies

### 1 @sontjer (Ryan Sontjer)

*Fri Apr 17 15:11:48 +0000 2026*

@lxfater 锤哥推荐都是实打实的好东西

### 2 @lxfater (铁锤人) (Author)

*Fri Apr 17 15:21:41 +0000 2026*

@sontjer 嘿嘿，那还不引用评论

### 3 @Poison_2_ (Poison)

*Fri Apr 17 02:59:55 +0000 2026*

@lxfater 锤哥出品，必属精品！深入浅出，良心之选❤️👍🏻

### 4 @lxfater (铁锤人) (Author)

*Fri Apr 17 03:01:39 +0000 2026*

@Poison\_2\_ 哈哈哈，但感觉质量越高，越不容易火

### 5 @seven_cuz (aha七表哥)

*Fri Apr 17 04:32:01 +0000 2026*

@lxfater 内置cdp是需要用户同意的

### 6 @lxfater (铁锤人) (Author)

*Fri Apr 17 04:32:33 +0000 2026*

@seven\_cuz skill里面就说明白了

### 7 @MingFire520 (Ming Hao)

*Fri Apr 17 03:14:13 +0000 2026*

@lxfater 让AI来帮助AI去除AI味

真的可以吗？

### 8 @lxfater (铁锤人) (Author)

*Fri Apr 17 03:16:24 +0000 2026*

@MingFire520 真的可以

### 9 @yyz81681981 (鱼小圈 YuLoop)

*Fri Apr 17 03:13:34 +0000 2026*

@lxfater 框架清晰：收集→消化→产出→汇报。

但最有用的是这个洞察——"6个没分工的 Skill，跟6个陌生人塞进同一间办公室没区别"。

工具堆砌不是系统，有框架的堆砌才是。

### 10 @lxfater (铁锤人) (Author)

*Fri Apr 17 03:16:47 +0000 2026*

@yyz81681981 谢谢你的ai评论

### 11 @xunsr1 (xunsr)

*Thu Apr 16 16:21:57 +0000 2026*

@lxfater 试试

### 12 @lxfater (铁锤人) (Author)

*Thu Apr 16 16:30:14 +0000 2026*

@xunsr1 试试就试试，哈哈哈

### 13 @Bill719398260 (Bill)

*Fri Apr 17 10:03:53 +0000 2026*

@lxfater 我就想知道这个图是咋做的，一个耗时多久哇

### 14 @lxfater (铁锤人) (Author)

*Fri Apr 17 15:22:11 +0000 2026*

@Bill719398260 三分钟

### 15 @qianlongweb3 (我是你哥 Kora 🌊)

*Thu Apr 16 23:46:42 +0000 2026*

@lxfater 这个太专业了，我还不会

### 16 @isnail (蜗牛King 👑)

*Fri Apr 17 05:12:43 +0000 2026*

@lxfater 锤哥出品，值得信赖，看来我的skill需要精简了，装了一大堆没用的

### 17 @Yangtze07 (Yangtze阳子江)

*Fri Apr 17 01:07:49 +0000 2026*

@lxfater 锤哥，这是全流程，清晰明了，中间各个环境我再根据自己的习惯调整，相当完美

### 18 @KSWang0703 (KSWang)

*Sat Apr 18 11:33:02 +0000 2026*

@lxfater 哥都講明白了 我們在老闆面前怎麼吹 😂

### 19 @myzwilpan (zwil Pan)

*Sat Apr 18 16:14:39 +0000 2026*

@lxfater 太实用了吧  有几个天天在用

### 20 @Zerspace (雨果)

*Wed Apr 22 04:34:09 +0000 2026*

@lxfater 第二大脑推荐哪个方案？

### 21 @jinzheio (Jin Zhe)

*Sun Apr 19 13:00:52 +0000 2026*

@lxfater 厉害

### 22 @leap93293 (Leap)

*Fri Apr 17 02:18:39 +0000 2026*

@lxfater 虽然我还没试，但看上去很专业的样子，收藏先，哈哈 

![Image](../_media/x-2044781079660482801/leap93293_2044963721735504289_1.jpg)

### 23 @everything4ai (Ai 妈呀)

*Sat Apr 18 13:46:57 +0000 2026*

@lxfater 装了，但是不知道该用哪个

### 24 @Junhui86 (Junhui)

*Sat Apr 18 05:25:26 +0000 2026*

@lxfater mark，精进一下

### 25 @ChinaExplored (China Unfiltered)

*Fri Apr 17 14:34:03 +0000 2026*

@lxfater 很有用，收下先，谢谢！

### 26 @diowang13 (WangLe)

*Fri Apr 17 05:13:34 +0000 2026*

@lxfater @readwise save

### 27 @8btc6 (美股币圈聚合群+交易所高返佣注册)

*Fri Apr 17 01:03:32 +0000 2026*

@lxfater 专业

### 28 @fenderespn4 (huhuzu)

*Sat Apr 18 09:42:52 +0000 2026*

@lxfater @ThreadReaderApp unroll

### 29 @daiweiya521 (David)

*Fri Apr 17 23:26:30 +0000 2026*

@lxfater Superpowers我看里面一堆的skills，agents，插件等，需要都安装吗？

### 30 @zhojnwi1734813 (Gavin的AI落地笔记)

*Fri Apr 17 10:16:11 +0000 2026*

@lxfater 图的风格不错啊，咋做的？nano-banana ?

### 31 @XieMr23503 (罗罗亚老罗)

*Fri Apr 17 02:45:15 +0000 2026*

@lxfater 既然是锤哥的作品，那必须是精品

