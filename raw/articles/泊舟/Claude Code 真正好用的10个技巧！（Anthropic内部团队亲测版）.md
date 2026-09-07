---
title: "Claude Code 真正好用的10个技巧！（Anthropic内部团队亲测版）"
author: "泊舟 (@bozhou_ai)"
url: "https://x.com/bozhou_ai/status/2017983293007012038"
ingested: "2026-09-07"
date: "Sun Feb 01 15:28:04 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

Claude Code 真正好用的10个技巧！（Anthropic内部团队亲测版）

适合代码不是特别硬核、刚上手Claude的同学，照着做真的能省很多时间

1\. 同时开3–5个 git worktree，每个跑一个独立的Claude会话。  

相当于同时让Claude改A功能、修B bug、写C文档，互不干扰！
  
小技巧：shell别名起名叫 za zb zc，一键切换。  

2.复杂任务先强制计划模式
别一上来就让写代码！先按 Shift+Tab（mac）或 Alt+M（win）两次，进入Plan Mode。  

让Claude先把思路、步骤、坑点全写出来，你看完再点头。  
确认OK后再退出模式让它动手 → 一次过PR概率暴增。  

3\. 让Claude自己给自己立规矩
每次它改错后，立刻说：  
“更新你的 CLAUDE md ，别再犯同样的错了。”  
Claude写规则非常准！时间长了出错率明显下降。  
有大佬让它为每个项目维护一个“笔记文件夹”，PR后自动更新。  
相当于给Claude请了个长期记忆老师。

4.把重复操作做成skill复用  
一天做2次以上重复的事？立刻做成斜杠命令或技能，存git里。  
例子：  
/techdebt → 自动找重复代码并建议删  
一键把7天Slack+GitHub同步到上下文  
从最烦的重复动作开始做，效率会飞。

5\. 修bug直接甩给Claude (这里我补一句，用codex改bug更加好用)
方法超级简单：  
\- 把bug的错误信息粘过去，说“fix”  
\- 或者直接甩一句：“去修失败的CI测试”  
\- docker日志、分布式问题也直接丢给它，它排查意外强  
关键：别一直指手画脚，让它自己想。

7\. 三句万能提示词模板  
A. 让它当审查员：  
“严格审问这些改动，没通过你的测试别创建PR”  

B. 修得马马虎虎时：  
“知道你现在知道的一切，废弃这个，重新给个优雅方案”  

C. 任务前先写超详细spec，越具体越好  
你越挑剔，它输出越漂亮。

7\. 终端小设置，用Claude更舒服  
推荐Ghostty终端（颜色好、unicode棒）  
用/statusline让状态栏永远显示上下文%和git分支  
多个tab颜色编码+命名（一任务一tab）  
最爽：mac按fn两次→语音输入！讲话是打字3倍，提示词能写得很详细。

8\. 想让它更认真？加上：use subagents  
任何复杂需求后面加“use subagents”  
Claude会自动拆给多个小代理去算，效果更好。
  
也可以手动说：把这个小任务交给子代理，主窗口保持干净。

9\. 数据分析也丢给Claude
让它用bq命令直接查BigQuery、分析指标。  
团队有人6个月没写过一行SQL了！  
只要有CLI或API的数据库，都能类似玩。  

10\. 把Claude当私人老师用  
\- 打开“Explanatory”或“Learning”模式，它每次改动都会解释为什么  
\- 让它生成HTML幻灯片讲不熟的代码（超好看）  
\- 让它画ASCII图帮你理解架构/协议  
\- 间隔重复学习：你讲一遍理解，它追问补漏，再存下来

## 💬 Replies

### 1 @Lonely__MH (Lonely)

*Sun Feb 01 16:45:32 +0000 2026*

@bozhou\_ai 👍

### 2 @herosea27 (海风物语)

*Sun Feb 01 22:19:13 +0000 2026*

@bozhou\_ai 这个整理太棒了！尤其是第3点让Claude自己维护规则文件，长期记忆真的很关键。我在用OpenClaw的时候也是靠[AGENTS.md](http://AGENTS.md)和[MEMORY.md](http://MEMORY.md)来保持上下文一致性，思路异曲同工 🙌

### 3 @Michaeljianhb (Michaeljian)

*Mon Feb 02 14:57:06 +0000 2026*

@bozhou\_ai @grok 整理发我

