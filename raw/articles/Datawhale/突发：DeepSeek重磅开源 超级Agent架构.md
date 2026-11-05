---
title: "突发！DeepSeek重磅开源：超级Agent架构！"
author: "Datawhale"
url: "https://mp.weixin.qq.com/s/LZxAxf0EO74YHQnZ2YOT9A"
ingested: "2026-11-05"
date: "2026-10-31 14:32:05"
---

# 📰 突发！DeepSeek重磅开源：超级Agent架构！

 Datawhale干货 

### 最新发布：dsh-superagent-prototype

就在刚刚，DeepSeek 突然开源了一套重磅 Agent 设计：dsh-superagent-prototype，并同步放出了一篇干货密度极高的万字架构长文《Super-agent 设计探索：迈向更自主的 Agent 系统》。

这个 **Super-agent 其实可以理解为 Personal Agent 向团队与多任务场景的全面升级，帮助** AI 摆脱“拨一下动一下”的被动状态。

平日里，一个人精力再充沛，通常也只能同时跟进 3 到 5 个活跃 Session。多任务的上限，卡在了人的注意力上。

为了打破这个瓶颈，DeepSeek Harness 团队基于内部日常研发实践，直接从底层重构，拿出了这套能够 7×24 小时持续在线、跨平台自主干活的**“超级 Agent 底座”**。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/1tAz3OsOg5YZGHRibBOLRsEibMib01Xgju3pE2zVdvedKkHCyO0SK09mk84fWFgCkibbUNibIK0BAqdZSesab5JPBUfN8IVKcMfMzAIZEylYupLs/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=1)

这套超级 Agent 架构强在哪？我们分三层来看。

## 一、干掉「Session 焦虑」：Router + Worker 双层架构

为什么现在的 Agent 用起来累？

因为如果所有事情都塞进一个 Session，串行执行慢、上下文还会互相污染；如果每件事都新开一个 Session，它们之间又互不通气。

DeepSeek 这套底座的解法：把「维持全局连续性」和「高并发干活」拆成两层。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/1tAz3OsOg5aiaibaodlb8mKmxlqd7fgiamrRjG4bq0xI9iaibAkHv2djdohiaKpBvuibd1IM9WqSvKnZfvMGW8D5x8Z5wePvj2Yv14gEDpgaNHNDBw/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=3)

## 常驻的 Router 层（管全局）

它永远在线，统一承接人类在各个入口的交互。为了不成为性能瓶颈，Router 层绝不亲自下场干活（甚至可以不给它配 Bash 工具），只做高层协调与任务分派，用轻量模型就能跑得飞快。哪怕遇到消息洪峰，上一轮推理期间积压的事件也会自动合并成 Batch（批处理） 一起丢给模型，积压越多，单次决策分摊的耗时反而越低（压测中可从 6.4 秒降至 1.6 秒）。

## 隔离的 Worker 层（闷头干任务）

每个 Worker 挂载完整的执行工具和最强模型，在独立的上下文里专注搞定单一任务。Worker 绝不直接对人类说话，而是向 Router 汇报，由 Router 统一对外回复。

这样一来，用户在飞书（IM）群里聊一半，转头去 GitHub PR 评论区改主意，面对的始终是「同一个」懂前因后果的超级 Agent，就不用再手动切窗口管理 Session。

## 二、把经典计算机系统思想，全装进「事件驱动」引擎里

要让超级 Agent 具备主动性，驱动它的应该不只有 Prompt。更应该像人的协作一样，是群聊消息、代码评论、CI 结果等环境事件（Trigger）。

面对真实群聊里「高噪音、低触发率」的信息流，如果每条消息都调大模型判断，算力和延迟直接爆炸。为此，DeepSeek 在底座的事件处理引擎里，密集套用了四个计算机系统的经典设计：

## 1. 两级事件过滤

先用确定性的代码规则（白名单、来源范围等）走 Fast Path 滤掉绝大部分无关噪音；只有通过初筛的候选事件，才走 Slow Path 交给大模型做语义判断。

![](https://mmbiz.qpic.cn/mmbiz_jpg/1tAz3OsOg5bg8r7T9iclTTpAy8b6afIoh5uxsOWT55ETwIAiauLMsL7Ezf8DxJUMHGianBV3b90GExr3aM9K2PDxYVjplgialfKjD7icXIAODiccc/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=4)

## 2. 订阅与直通路由

同一个 PR 或 IM 话题下的连续事件构成一条 Thread。Router 创建 Worker 后，Worker 会直接订阅该 Thread。后续同一话题的消息直接走 Fast Path 直通 Worker，不用再麻烦 Router 转发。消融实验表明，仅这一个设计就帮 Router 省下了约 30% 的决策次数和 37% 的读缓存 Token。

![](https://mmbiz.qpic.cn/mmbiz_jpg/1tAz3OsOg5YzkvLRwItXE3HGGOGL2gHwA7icps1ic5w1Oaun04Noa0WrZnb2rpiaj10tEQYaCdk18Kp4yzQpbq2w0akF3QqdYupltNVElA54NA/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=6)

## 3. Inline & Spill + 链式召回

上下文窗口极其宝贵。底座利用局部性原理，把当前事件紧邻的信息（如前 50 字、前后相邻消息）直接 Inline（内联） 进窗口；超长内容则 Spill（溢出） 到窗口外，只留摘要和关联对象的 ID。当需要翻旧账时，模型顺着对象之间的 ID 引用图一跳一跳地按需检索，这就是链式召回。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/1tAz3OsOg5b1ENK3jNNVvhZfCeR6qicWnH8YUD6YB4OKAwQibpqia3qyjyMGvZd0Gl6C2O7tfUiaXJialhEHKhCTbMQKJqMeS70qO3zp01m0sSLI/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=7)

## 4. 后台「投机执行」

就像 CPU 的分支预测一样，Agent 看到群里有人报 Bug，不等人类下令，先在后台消耗一点算力尝试复现和修复。修好了就拿出来惊艳所有人，没修好就默默丢弃、绝不打扰。

## 三、做到 7×24 小时在线

解决了内部调度，这套底座的最后一层，是解决「怎么跟人自然打交道」&「怎么长期稳定运行」。

## 1. 异步全双工 ReAct Loop

底座将单一耗时的 run() 工具改成了异步的 start() 和 stop()，后台跑编译或测试的同时，前台照样能秒回你的新指令。

同时，针对不同信道做了定制：IM 群聊严格限制单次回复不超过 100 词，绝不刷屏；GitHub PR 则输出高密度的结构化报告。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/1tAz3OsOg5bSP2SMWxlqib7j1yT6C7n0OtwPP73MlxbRHytBcF1I8IoZ8wlKvXvjw4fS2yibXDiat5kVk6AxUpwvPFcqXlooYrUA27ZRKmBsos/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=9)

## 2. 计算、状态与环境的两层解耦

电脑一合盖，本地 Agent 就歇菜了；但如果把代码和环境全搬上云端沙箱，本地未提交的代码、内网凭据又很难同步。

DeepSeek 采用了「存算分离」与「脑手分离」的思路：

云端跑无状态的 Agent Loop + 数据库存状态，保证底座 7×24 小时持久在线；

重状态的执行环境留在本地原地不动，只在你自己的开发机上装一个极轻量的无状态 daemon（即 BYOM，Bring Your Own Machine），云端大脑按需跨设备调用本地环境。

![](https://mmbiz.qpic.cn/sz_mmbiz_jpg/1tAz3OsOg5ZR5GbZQtot2aFBV7RZrLoXL5ibdvnbyOCJZibGDyogxv1ia1aakfEGSF76jcjypWAXU1XERRoibibrV2OIib82gNCWQ3E8mjzicqibpDk/640?wx_fmt=jpeg&tp=wxpic&wxfrom=5&wx_lazy=1#imgIndex=2)

## 3. 外部 Watchdog（看门狗）自愈

Agent 跑崩了往往不是进程挂了，而是模型陷入了死循环或跑偏了。系统在主回路之外单独配了一个定时唤醒的 Watchdog Session，不仅盯基础设施报错，还用模型去检查各个 Worker 有没有实质进展。甚至维护者可以直接用自然语言找 Watchdog 问故障原因、在线热修改主系统的提示词规则。

## 写在最后：现在已经可以克隆体验

从消融实验数据来看，在多任务并发轰炸下，这套超级 Agent 底座将任务完成时间（p95）稳定控制在了 15.7 分钟，远优于传统“单 Session + Subagent”方案的 29.5 分钟。

如果你想深入研究这套底座架构，或者把它跑起来接入自己的项目，只需三步：

## 第一步：克隆开源仓库到本地

进入 DeepSeek 官方 GitHub 仓库获取源码：

```

开源地址：
https://github.com/deepseek-ai/dsh-superagent-prototype

```

## 第二步：把 SETUP.md 丢给你的 AI，让 AI 帮你装

![](https://mmbiz.qpic.cn/mmbiz_png/zW6S9vt0cSiccYanznncGVndS2cL5oB1M5vW41oEHyKbaiciaEbmbsPGmgy8jVVTib3VYXicQLsMoYQYibPQQraunXSaO17POU3YGU3odVyWVsD9Y/640?wx_fmt=png&from=appmsg)

你只需要用你的 Coding Agent 直接读取仓库根目录下的 SETUP.md，Agent 就会像向导一样，每次问你一个简短问题，自动帮你把环境配置、权限规则以及 GitHub / 飞书通道全部跑通。

## 第三步：顺读 000–008 文档，吃透底座源码

如果你打算基于这套底座做二次开发，或者正在准备 Agent 架构方向的面试，强烈建议按顺序读完仓库 docs/ 目录下的 000-philosophy.md 到 008-cookbook.md。9 篇文档环环相扣，把「如何占用最少的人类注意力、交付最大价值」的工程细节拆得清清楚楚。

当大模型的单兵能力越来越强，谁能搭好下一代「超级 Agent 底座」、把人类的注意力解放出来，谁就握住了下半场的入场券。 感兴趣的朋友，赶紧把仓库拉下来体验一下吧！

![](https://mmbiz.qpic.cn/mmbiz_png/vI9nYe94fsGxu3P5YibTO899okS0X9WaLmQCtia4U8Eu1xWCz9t8Qtq9PH6T1bTcxibiaCIkGzAxpeRkRFYqibVmwSw/640?wx_fmt=other&wxfrom=5&wx_lazy=1&wx_co=1&tp=webp#imgIndex=12)**一起“**点****赞”****三连**↓**

