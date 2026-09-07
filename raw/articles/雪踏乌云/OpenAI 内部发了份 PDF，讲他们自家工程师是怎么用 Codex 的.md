---
title: "OpenAI 内部发了份 PDF，讲他们自家工程师是怎么用 Codex 的"
author: "雪踏乌云 (@Pluvio9yte)"
url: "https://x.com/Pluvio9yte/status/2057496853214851447"
ingested: "2026-09-07"
date: "Thu May 21 16:20:50 +0000 2026"
content_type: "note_tweet"
subtypes: []
type: "NoteTweet"
---

OpenAI 内部发了份 PDF，讲他们自家工程师是怎么用 Codex 的

他们的安全、infra、前端、API 团队天天都在用：

• 快速搞懂完全陌生的代码库
• 跨几十个文件的重构
• 生成 devs 容易漏掉的 edge case 测试
• 快速 scaffold boilerplate
• 日历被会议塞满还能保持 flow

PDF 在这：[openai.com/business/guide…](https://openai.com/business/guides-and-resources/how-openai-uses-codex/)

## 💬 Replies

### 1 @yizhou_md (奕舟 MD)

*Fri May 22 00:02:24 +0000 2026*

@Pluvio9yte 感觉 OpenAI 的这篇文章更像是软文，都是很简略的 case，缺少深度

### 2 @onlyhuman028 (清风徐来028)

*Fri May 22 12:14:00 +0000 2026*

@Pluvio9yte 。很早以前发过，看一下更新了没有。

### 3 @codedbygene (Gene)

*Fri May 22 05:04:45 +0000 2026*

@Pluvio9yte cool，我在vibecoding的时候 我现在工作流可能不是最佳实践

### 4 @35m_ai (Lili@35m.ai)

*Fri May 22 00:49:24 +0000 2026*

@Pluvio9yte 最有价值的是这些 case 都不是“生成代码”，而是理解陌生代码库、补 edge case 测试、跨文件重构这类高上下文任务。真正的门槛会变成：团队怎么把环境、权限、上下文稳定地交给 agent。

### 5 @AmberChenuzjt (香菜XIANG|AI 工具实测)

*Wed May 27 15:07:35 +0000 2026*

这份 PDF 我看完最大的收获不是用法清单——是它揭示的"用 AI 的频率"。

OpenAI 安全/前端/API/infra 团队"天天都在用"——不是周报里写的"我们正在探索 AI"，是每天每个任务都过一道 AI。

进阶用户和小白的差距，不在工具新旧，在"调用频率"上。
你每天问 Claude 100 次的同事，半年后就和你不在一个 league。

