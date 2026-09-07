---
title: "使用 Hermes Agent 打造私人专属工作流： 自动定时监控 X/Twitter 大佬推文的完整方案。"
author: "AI少年 (@aehyok)"
url: "https://x.com/aehyok/status/2052568264438624766"
ingested: "2026-09-07"
date: "Fri May 08 01:56:23 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

使用 Hermes Agent 打造私人专属工作流： 自动定时监控 X/Twitter 大佬推文的完整方案。

160个KOL账号 → RSS抓取 → Hermes AI 筛选判断 → 文案生成 → Discord推送

其中所使用的几个技术点如下：

1、BestBlogs：一个开源项目提供X平台上 160 个 AI 圈中英文大佬的 OPML 账号列表，作为信息源入口层（但是BestBlogs每天从600+ 订阅源自动抓取文章、播客、视频与推文，所以不仅仅只是针对X平台的）

2、[xgo.ing](http://xgo.ing)：免费的 Twitter → RSS 转换服务，不能抓取转发和引用

3、TikHub：付费 API 服务（约 ¥0.001/请求），可抓取转发和引用

4、作者开源了x-intel-monitor提供了一个模板工作流，只需要根据自己的需要进行修改即可

最后不滑锅也强调了：你需要做的，就是不断的调教 Hermes。采集管道是杠杆，写作标准是方向。方向错了，杠杆越强，伤害越大。

## 💬 Replies

### 1 @adelbucetta (Adel Bucetta)

*Fri May 08 15:45:09 +0000 2026*

@aehyok hermes agent's automation potential is actually a symptom of a bigger trend: ai-facilitated customization for the masses, not just enterpris

### 2 @aehyok (AI少年) (Author)

*Fri May 08 15:53:26 +0000 2026*

@adelbucetta Yes, your insight is very forward-looking. You see the bigger picture ahead.

### 3 @MingFire520 (Ming Hao)

*Fri May 08 02:23:02 +0000 2026*

@aehyok 信息太多了，最好再跑一个打分模型，排个优先级

### 4 @aehyok (AI少年) (Author)

*Fri May 08 02:23:57 +0000 2026*

@MingFire520 提示词里 就可以进行筛选了

### 5 @brucelu13590428 (bruce lu)

*Fri May 08 04:28:39 +0000 2026*

@aehyok 牛逼

### 6 @aehyok (AI少年) (Author)

*Fri May 08 05:42:43 +0000 2026*

@brucelu13590428 可以玩玩耍耍

