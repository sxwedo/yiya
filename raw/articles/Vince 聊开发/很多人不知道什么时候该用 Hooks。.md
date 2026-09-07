---
title: "很多人不知道什么时候该用 Hooks。"
author: "Vince 聊开发 (@vincemask)"
url: "https://x.com/vincemask/status/2057788920327520305"
ingested: "2026-09-07"
date: "Fri May 22 11:41:25 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

很多人不知道什么时候该用 Hooks。
我的判断很简单：凡是你需要反复提醒 Claude 的事，都应该考虑从 prompt 里拿出来，交给 Hook。

比如：

1、每次改完代码都要格式化
2、每次提交前都要跑 lint / test
3、禁止修改某些目录或配置文件
4、生成代码后自动检查类型错误
5、操作高风险文件前先拦截确认
6、会话开始时自动注入项目上下文
7、任务结束时自动记录变更摘要

Prompt 适合表达意图，Hook 适合固化规则。越是稳定、重复、容易忘的流程，越应该交给环境默认执行。

## 💬 Replies

### 1 @CatChen (Cat Chen, @catchen@mastodon.world)

*Sat May 23 02:13:17 +0000 2026*

@vincemask 反复提醒的事情可以先写在 CLAUDE.md 里面，如果执行起来还是不够可靠，可以改为 hooks。

### 2 @vincemask (Vince 聊开发) (Author)

*Sat May 23 03:32:02 +0000 2026*

@CatChen 平常都是这样做的，先写 CLAUDE.md，还不稳就上 hooks。

### 3 @Hamburgerai (蛋黄堡)

*Fri May 22 23:34:19 +0000 2026*

@vincemask 我的判断比较简单
工程里面应该智能化的用subagent
应该自动化的用hook
自动智能应该就是hook再调用subagent

### 4 @vincemask (Vince 聊开发) (Author)

*Sat May 23 01:36:48 +0000 2026*

@Hamburgerai 对，subagent 负责智能判断，Hook 负责自动触发

### 5 @ideos2652922 (wesley)

*Sat May 23 09:25:46 +0000 2026*

@vincemask 奇怪啊、反复提醒的不是skill吗？二者啥区别？

### 6 @vincemask (Vince 聊开发) (Author)

*Sat May 23 09:50:44 +0000 2026*

@ideos2652922 Hook 是强制自动执行，更可靠；Skill 本质上还是 prompt 的延伸，靠模型理解和调用。

打个比方：Skill 像口头命令，告诉它应该怎么做；Hook 像门禁，到了关键节点不符合规则就直接拦。

### 7 @kennyhungsam (Kenny Hung)

*Sat May 23 18:01:10 +0000 2026*

@vincemask 感謝，一句話清楚說明了hook

### 8 @benny123tw (Benny Yen)

*Sun May 24 03:21:15 +0000 2026*

@vincemask 那和写在 CLAUDE.md 以及 Git Hooks 跑 lint/format 的区别是什么？

