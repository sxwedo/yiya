---
title: "打开Codex，设定目标或直接对话，提示词如下："
author: "向阳乔木 (@vista8)"
url: "https://x.com/vista8/status/2059473425857720768"
ingested: "2026-09-07"
date: "Wed May 27 03:15:02 +0000 2026"
content_type: "note_tweet"
subtypes: ["replied_to"]
type: "NoteTweet"
---

打开Codex，设定目标或直接对话，提示词如下：

阅读并检索我们所有的 Codex 对话记录与执行日志，进行系统性复盘，提炼出可复用的经验文档。

文档需要涵盖以下内容：
一、执行经验总结：记录哪些做法导致了问题、最终正确的执行方式是什么，以及从中得出的教训。

二、我的偏好与理念提炼：从对话中识别并归纳我的 UI 设计偏好、产品设计理念、交互原则等，形成结构化的个人风格档案。

三、可复用规则清单：将上述内容整理为 Codex 未来可直接遵循的行为准则。

完成文档后，将其保存为独立文件，并在 .agent 配置中以地址引用的方式加载该文档，使后续所有 Codex 会话默认继承这些经验，无需重复说明。

## 💬 Replies

### 1 @vista8 (向阳乔木) (Author)

*Wed May 27 03:19:01 +0000 2026*

如果不会用Codex开启Goals（目标）功能，按下面步骤

1\. 更新Codex App到最新版本   
2\. 打开命令行执行：  
codex features enable goals 

如果手动改的话，配置文件在 \~/.codex/config.toml  
用sublime或VS code或vi打开

确保能看到这样一行
\[features\] 
goals = true

3\. 重启Codex app，在对话中输入 /goal，如果你界面是中文，就输入 /目标  

输入上面的提示词就可以

### 2 @Tomyu_2034 (Tom)

*Wed May 27 05:45:32 +0000 2026*

@vista8 这个方法很好啊，那是不是可以形成一个 skill 啊？然后让agent 设置一个 Cron 任务，每周用这个 skill 执行一次。

### 3 @ai_daoyu (daoyuly)

*Thu May 28 05:33:08 +0000 2026*

@vista8 修改一下，可以放在任何的ai工具中

### 4 @yonoell (钱一桢)

*Thu May 28 00:48:22 +0000 2026*

@vista8 第一次可以跑全量，后面要逐步迭代吧。
其次文档还是需要人审核的

### 5 @kngkng983321249 (康康)

*Wed May 27 14:56:51 +0000 2026*

@vista8 然后这个skills是每隔一段时间更新一下吗？

