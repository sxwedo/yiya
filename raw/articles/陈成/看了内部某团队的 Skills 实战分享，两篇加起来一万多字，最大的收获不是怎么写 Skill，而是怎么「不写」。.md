---
title: "看了内部某团队的 Skills 实战分享，两篇加起来一万多字，最大的收获不是怎么写 Skill，而是怎么「不写」。"
author: "陈成 (@chenchengpro)"
url: "https://x.com/chenchengpro/status/2039707154371018930"
ingested: "2026-09-07"
date: "Thu Apr 02 14:10:56 +0000 2026"
content_type: "note_tweet"
subtypes: []
type: "NoteTweet"
---

看了内部某团队的 Skills 实战分享，两篇加起来一万多字，最大的收获不是怎么写 Skill，而是怎么「不写」。

几个反直觉的工程判断：

1/ Skill 的核心价值不是让模型"知道更多"，而是让模型在明确边界里知道该按什么顺序做、什么结果必须停下来。Skill ≠ 长 Prompt，它是业务团队在 AI 时代的一种新交付形态——过去交付页面和接口，现在交付"让 Agent 稳定完成某件事的方法论包"。

2/ 架构设计的第一优先级：把确定性逻辑从 Agent 手里拿回来。签名计算、渠道映射、错误分类、重试策略、跨能力数据格式——全部下沉到脚本。让 Agent 负责"理解用户想做什么"就够了，让它再负责拼接确定性流程，就是问题开始的地方。

3/ SKILL.md 不是技术文档，是 Agent 的操作指南。写给 Agent 看和写给人看完全是两回事——description 要写触发场景而不是功能简介，主文档做轻索引而非百科全书，细节下沉到 references/ 按需加载。"文档写出来了，不等于 Agent 学会了。"

4/ 多人协作写 Skill，最先统一的不是代码风格，而是边界。新增一个能力的最小交付必须四件齐套：可执行入口、业务逻辑、能力文档、总入口注册。少任何一个都不完整。

5/ 安全是门，不是分。存在硬编码凭证的 Skill，其他维度全满分也直接归零——安全不参与加权，它是准入门槛。

6/ 测试时执行体绝不能提前知道预期结果。他们早期把 expected outcome 传给了子 Agent，pass rate 虚高——模型在"迎合评测"而不是在执行 Skill。后来做了严格的 executor/grader 分离才解决。

7/ pass@k ≠ pass^k。单次成功率 75%，跑 3 次全部成功的概率只有 42%。"有能力但不稳定"是一种需要被识别的状态——你不敢在生产环境托付的那种。

8/ 最容易被忽视的假象：在强模型上拿高分。强模型会替写得不好的 Skill 兜底，真正的质量应该看中等模型上还能不能稳定工作。如果只有最强模型才能跑通，这个高分是借来的，不是 Skill 自己挣的。

一句话总结：不要再把 Skill 写成长 Prompt。真正好的 Skill，应该让 Agent 少猜一点，让系统多保证一点，让团队经验能留下来一点。

## 💬 Replies

### 1 @cheuk_baby (Jason傑森 🇭🇰 | 🛠️)

*Thu Apr 02 19:56:42 +0000 2026*

@chenchengpro 看下来有点意识到技能并非全赖繁复而是适度收敛了

### 2 @sonic0828 (Sonic的奇思妙想)

*Thu Apr 02 14:25:42 +0000 2026*

@chenchengpro 我认为Skill的理想形态，应该是从Memory中定期结晶出来，而不是人为去创建的，当然互相分享的渠道（Skills市场）还是需要的。

### 3 @LanternCX (LanternCX)

*Thu Apr 02 16:52:57 +0000 2026*

@chenchengpro AI 味好浓，其实并不介意你直接把 prompt 发出来，人没那么傻🥲

### 4 @AjMa697292 (AJ)

*Sun Apr 05 08:03:24 +0000 2026*

@chenchengpro Skill的核心不是让模型知道更多 而是给它一个明确的执行边界 这跟管理团队的逻辑一模一样 你不是告诉员工所有知识 而是告诉他什么时候该停下来汇报 Agent management = people management

### 5 @AjMa697292 (AJ)

*Sat Apr 04 18:47:23 +0000 2026*

@chenchengpro 完全同意Skill不是长Prompt这个判断 本质上是把业务边界和验收标准编码进工具链 让agent知道什么时候该停比知道怎么做更重要

### 6 @frank_mupt (Frank)

*Fri Apr 03 01:43:56 +0000 2026*

@chenchengpro 7 可能是导致 1的主要原因，想要稳定交付但是没有高置信的路径

### 7 @akiranovel9 (Akira)

*Thu Apr 02 16:09:36 +0000 2026*

@chenchengpro 理想情况是不同模型的对应skill应该不一样

### 8 @lanmiaoai (Lazycat)

*Thu Apr 02 23:50:48 +0000 2026*

@chenchengpro 第六条最有意思。把expected outcome传给executor，pass rate虚高，发现的时候应该挺沉默的。

### 9 @haife123 (捡到一只月亮)

*Thu Apr 02 16:38:35 +0000 2026*

@chenchengpro 很精辟，skill就是该沉淀一些系统中确定性的东西

### 10 @ASPHALT_jp (ASUFARUTO)

*Fri Apr 03 17:35:43 +0000 2026*

@chenchengpro 说的很好，我直接把这个方法论的方法论：一切skill的母skill，写出来了。

### 11 @CXiaoYiYi (好奇的小逸)

*Thu Apr 02 16:28:19 +0000 2026*

@chenchengpro 禁止🚫不要如何，会让模型依然保持探索多条路径的能力，非常认同确定的东西需要固定流程，再强大的模型也会犯错…

### 12 @chenzhouhua_SNC (陳先森～)

*Sat Apr 04 01:44:11 +0000 2026*

@chenchengpro 好的skill的示例呢

### 13 @Congci911 (Alex)

*Thu Apr 02 19:56:00 +0000 2026*

@chenchengpro 这种把流程写进skill的做法就像在html里面写jsp

### 14 @imjszhang (JS)

*Fri Apr 03 12:47:55 +0000 2026*

@chenchengpro You give the model everything, it learns nothing. You give it the edge cases where it MUST stop, it learns judgment. Boundaries breed intelligence, not data.

### 15 @itou_ng (itou ng)

*Fri Apr 03 09:28:49 +0000 2026*

@chenchengpro 1，2，8 好赞同

