---
title: "Claude Code之父 @bcherny 亲自分享他怎么用cc，这很难得。"
author: "花叔 (@AlchainHust)"
url: "https://x.com/AlchainHust/status/2007280530283450692"
ingested: "2026-09-07"
date: "Sat Jan 03 02:39:06 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

Claude Code之父 @bcherny 亲自分享他怎么用cc，这很难得。

他前段时间晒过数据：30天259个PR，每一行都是cc+Opus 4.5写的。47天里46天都在用，最长session跑了1天18小时。创建者自己这么用，让人对这个产品更有信心。

帮大家翻译下这13条技巧：

1、并行跑5个Claude，用系统通知知道哪个需要输入

2、本地+网页双线作战，用 & 和 --teleport 在两边切换

3、全程用Opus 4.5+思考模式，虽然慢但需要更少引导，最终反而更快

4、团队共享[CLAUDE.md](http://CLAUDE.md)，每当Claude做错什么就加进去，形成飞轮

5、Code Review时@.claude自动更新规则到[CLAUDE.md](http://CLAUDE.md)

6、大多数会话从Plan模式开始（shift+tab两次），好计划很重要

7、高频工作流都做成斜杠命令，Claude自己也能调用

8、用子代理自动化常见流程，但不要搞"专家分工"

9、PostToolUse钩子自动格式化，处理最后10%

10、用/permissions预授权安全命令，而不是dangerously-skip-permissions

11、让Claude用所有工具：Slack、BigQuery、Sentry...

12、长任务用ralph-wiggum插件让Claude自动循环直到完成

13、最重要：给Claude验证工作的方式，有反馈循环质量提升2-3倍

——

我的感受：没什么黑魔法，就是把基础功能用到极致。

并行思维很重要，Boris本地5个+网页5-10个同时跑。

第13条最关键：写代码→测试→发现问题→修复→再测试，这个闭环形成了，输出质量就上去了。

详细解读见评论区👇

## 💬 Replies

### 1 @AlchainHust (花叔) (Author)

*Sat Jan 03 02:40:26 +0000 2026*

更详细的解读原文：[mp.weixin.qq.com/s/CoRXZaU\_tp1s…](https://mp.weixin.qq.com/s/CoRXZaU_tp1s9JEwpsZO_A)

### 2 @cheuk_baby (Jason傑森 🇭🇰 | 🛠️)

*Sun Jan 04 18:21:13 +0000 2026*

@AlchainHust @bcherny 他还真是用得炉火纯青

### 3 @codewithimanshu (Himanshu Kumar)

*Sat Jan 03 07:08:11 +0000 2026*

@AlchainHust @bcherny Author: AI- Created 259 pull requests; longest session duration reached thirty-six hours.

### 4 @LongXiao4082 (Rivers)

*Sat Jan 03 08:27:47 +0000 2026*

@AlchainHust @bcherny 原来我都是直接 git clone 代码到不同的文件夹中来跑代码，现在我直接使用 git 来切换分支完成了这个工作，节省内存空间的同时也少了切来切去的问题了。技术细节可见

[x.com/LongXiao4082/s…](https://x.com/LongXiao4082/status/2007364117074760047?s=20)

### 5 @varianfeng (Nibi点点)

*Sat Jan 03 11:16:13 +0000 2026*

@AlchainHust @bcherny 并行?是不是因为他是 claude 之父所以没有配额限制?

### 6 @suke2826 (马克)

*Sun Jan 04 00:02:43 +0000 2026*

@AlchainHust @bcherny 认可您的思维

### 7 @suke2826 (马克)

*Sun Jan 04 00:02:39 +0000 2026*

@AlchainHust @bcherny 互关一下吧

### 8 @Real_LCX (LEO LI)

*Sat Jan 03 17:03:38 +0000 2026*

@AlchainHust @bcherny [x.com/i/grok/share/l…](https://x.com/i/grok/share/lq8AMy2SZmdGwcwdEv3tVkabK)

### 9 @design_AIGC (Arry)

*Tue Mar 03 02:56:15 +0000 2026*

@AlchainHust @bcherny 学习学习

### 10 @pcb_77 (雨辰（早睡版）)

*Sun Jan 04 11:29:33 +0000 2026*

@AlchainHust @bcherny 别云，用过就知道 claude code 有多不耐用

