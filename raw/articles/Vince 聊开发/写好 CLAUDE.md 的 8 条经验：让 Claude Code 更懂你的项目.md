---
title: "写好 CLAUDE.md 的 8 条经验：让 Claude Code 更懂你的项目"
author: "Vince 聊开发 (@vincemask)"
url: "https://x.com/vincemask/status/2052368318825402507"
ingested: "2026-09-07"
date: "Thu May 07 12:41:53 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 写好 CLAUDE.md 的 8 条经验：让 Claude Code 更懂你的项目

很多人刚开始用 Claude Code，会往 CLAUDE.md 里塞一切：项目历史、技术决策、个人偏好、甚至公司价值观。结果呢？Claude 在 2000 行的上下文里迷失，生成出莫名其妙的东西，而你也不知道为什么。

这篇文章不讲 CLAUDE.md 的结构规范。这里讲的是实战中踩出来的 8 条经验——哪些反直觉的做法反而更有效，哪些坑踩一次就够了。

## 1\. 越短越好，200 行是上限

反直觉点：你觉得信息越多，Claude 越懂你。实际上，信息越多，Claude 越容易忽略真正重要的。

claude-code-best-practice 的作者 Boris Cherny 明确建议：CLAUDE.md 不要超过 200 行。这不是随便说的——Claude Code 每次会话都会加载 CLAUDE.md，它会吃掉上下文窗口。你写的每一行多余内容，都在挤占 Claude 理解你代码的空间。

实战标准：

\`\`\`markdown
\# ❌ 不要这样
\## 项目历史
2023 年，我们的 CTO 在 hackathon 上提出了这个想法...
（300 行的公司叙事 + 营销文案）

\# ✅ 要这样
\## Project Overview
B2B 分析仪表盘，面向运营经理。
核心目标：缩短「从数据到洞察」的时间。
优化优先级：加载速度 &gt; 交互丰富度 &gt; 视觉花哨。

\`\`\`

验证标准：一个没看过你项目的人，读完 CLAUDE.md 能在 30 秒内回答三个问题——这是什么产品？技术栈是什么？新代码放哪里？

## 2\. 「不要引入什么」和「要引入什么」同等重要

反直觉点：你列出了技术栈，以为 Claude 不会乱来。但 Claude 的知识截止到训练日，它不知道你的项目有历史包袱。

没有「禁止清单」的 CLAUDE.md 是危险的。Claude 会出于善意引入它「知道」的最优方案，但这个方案可能和你的项目完全冲突。

\`\`\`markdown
\## Tech Stack
\- Next.js 15 App Router + TypeScript
\- Tailwind CSS + shadcn/ui
\- Supabase（认证 + 数据）

Do NOT introduce unless explicitly requested:
\- Redux（项目已迁移到 React Context + Zustand）
\- styled-components（全站 Tailwind，不接受 CSS-in-JS）
\- Material UI（与 shadcn/ui 样式冲突）
\- MongoDB（数据层已锁定 PostgreSQL）
\`\`\`

这条规则值千金。它节省的不是一次纠正，而是防止 Claude 在你没发现时引入了不兼容的依赖，导致后续 10 次会话都在修兼容性问题。

## 3\. 规则必须可操作，不是可感受

反直觉点：「写干净的代码」听起来像个好规则，但对 AI 来说等于没说。

Claude 不懂「干净」。它懂「用 named export 而不是 default export」「组件不超过 200 行」「async/await 不用 then 链」。

对比：

\`\`\`markdown
\# ❌ 模糊——Claude 无法执行
\## Coding Rules
\- 写干净的代码
\- 保持简洁
\- 注重性能

\# ✅ 具体——Claude 可以直接执行
\## Coding Rules
\- 使用 named export（路由文件除外）
\- 禁止 any 类型，用泛型或接口替代
\- 单个组件不超过 200 行（有充分理由可超）
\- async/await 替代 Promise 链
\- 变量名全拼，不缩写（除 id/url/ctx）
\- 只在意图不明显时写注释
\- 不留注释掉的代码块或 console.log
\`\`\`

测试方法：读完这条规则后，你能不能在 5 秒内判断一段代码是否符合它？能——规则合格。不能——改写。

## 4\. CLAUDE.md 是指针，不是图书馆

反直觉点：你想把所有架构文档塞进 CLAUDE.md。但 CLAUDE.md 的职责不是存储信息，而是告诉 Claude 去哪找信息。

这是顶级用户和普通用户的分水岭。普通用户的 CLAUDE.md 是知识梳理；顶级用户的 CLAUDE.md 是 router。

\`\`\`markdown
\## Project Context
\- 架构总览：\`docs/architecture.md\`
\- 工程设计决策记录：\`docs/adrs/\`
\- API 文档：\`docs/api.md\`
\- 部署流程：\`docs/deploy.md\`
\`\`\`

Claude 不需要在 CLAUDE.md 里读完所有架构文档。
它只需要知道「我需要架构信息时，打开 docs/architecture.md」。

更进阶的用法——渐进式上下文（Progressive Disclosure）：

\`\`\`markdown
\## Context Tiers
Tier 1（每次加载）：CLAUDE.md — 项目是什么 + 怎么工作
Tier 2（按需加载）：docs/architecture.md, docs/api.md — Claude 工作时自动读取
Tier 3（忽略）：docs/archive/ — 除非明确要求，不碰

\`\`\`

这样 Claude 不会在无关请求时浪费上下文读历史文档，但在需要时知道去哪找。

## 5\. 给敏感模块开「本地 CLAUDE.md」

反直觉点：CLAUDE.md 只有一个，放根目录。但某些模块的风险比其他模块高 10 倍。

在 src/auth/、src/payments/、infra/ 下面各放一个本地 CLAUDE.md，Claude 在操作这些目录时会自动加载。这就像给危险区域装护栏。

\`\`\`markdown
\# src/auth/CLAUDE.md

\## 安全红线
\- 绝不修改 token 验证逻辑，除非明确要求且经过 review
\- 绝不引入新的认证方式而不更新测试
\- 所有认证相关变更必须通过 \`pnpm test src/auth\` 全部测试

\## 已知陷阱
\- Magic link 生成依赖 \`crypto.randomUUID()\`，不要换成其他随机方法
\- Session 存储在 Redis，不是内存——重启不会丢失
\`\`\`

## 6\. 让 CLAUDE.md 驱动 Hook，而不是靠记忆

反直觉点：你写了测试规则，但 Claude 写完代码从来不跑测试——因为它忘了。

Claude 的记忆不可靠。Hook 可靠。把 CLAUDE.md 里的规则变成 Hook 的触发条件：

\`\`\`markdown
\## Hooks & Quality Gates
以下规则由 \`.claude/hooks/\` 强制执行，不是提醒：
\- 每次编辑后自动格式化（PreToolUse hook → prettier）
\- 核心模块变更后自动跑测试（PostToolUse hook → vitest related）
\- 禁止直接编辑 \`src/auth/\`、\`src/billing/\`、\`prisma/migrations/\` 而不先确认

\`\`\`

对应 Hook 示例：

\`\`\`json
// .claude/hooks/pre-tool-use.json
{
  "hooks": \[
    {
      "matcher": "Edit\|Write",
      "command": "npx prettier --write ${CLAUDE\_FILES}",
      "on\_failure": "warn"
    }
  \]
}
\`\`\`

Hook 是 CLAUDE.md 规则的强制执行层。写在 CLAUDE.md 里的规则是「请记住」；配了 Hook 的规则是「你必须」。

## 7\. 利用 CLAUDE.md 建立长期记忆回路

反直觉点：每次新会话，Claude 像失忆一样重新认识你的项目。但你不需要一个复杂的向量数据库来解决这个问题。

在 CLAUDE.md 里加一条指令，让 Claude 自己维护一个 MEMORY.md：

\`\`\`markdown
\# CLAUDE.md 中加入

\## Memory
\`MEMORY.md\` 记录了之前任务中发现的关键洞察、最佳实践和已知陷阱。
每次新任务开始前，先读取 MEMORY.md。
每次任务结束后，如果有新的发现
\`\`\`

这比任何「AI 长期记忆 MCP」都简单、可控、可 Git 追踪。成本：一个文件。收益：Claude 在跨会话时保留下文中最有价值的那 5%。

## 8\. 用 CLAUDE.md 代替每次会话的「开场白」

反直觉点：你应该训练 Claude，不是每次问它「你能帮我做 X 吗」。你应该让 CLAUDE.md 承载你的工作风格，让 Claude 在第一次对话时就知道你讨厌什么。

来自 Claude Code Cowork 的实战总结——一个优秀的 CLAUDE.md 里应该有「你是谁」和「你讨厌什么」：

\`\`\`markdown
\## My Working Style
\- 先给方案，不要直接写代码
\- 不确定时列出选项，不要猜测
\- 重大变更前先问，小优化可以直接执行
\- 不要用「Great question!」「I'd be happy to help!」这类废话
\- 回复用中文，代码注释用英文
\- 文件路径用绝对路径，不要相对路径
\`\`\`

这 6 行省掉了你每次新会话的前 5 条消息。Claude 从第一句就知道你在乎什么、讨厌什么、期望什么交互节奏。

## 一张表总结

\| 原则 \| 反直觉点 \| 一句话 \|
\|---\|---\|---\|
\| 越短越好 \| 信息越多 ≠ Claude 越懂 \| 200 行是硬上限 \|
\| 禁止清单 \| 技术栈列完还不够 \| 告诉它不要什么和告诉它要什么同等重要 \|
\| 规则可操作 \| 「写干净的代码」是空话 \| 必须能在 5 秒内判断一段代码是否符合 \|
\| 指针而非图书馆 \| CLAUDE.md 不存知识 \| 存「去哪找」 \|
\| 本地 CLAUDE.md \| 根目录一个不够 \| 敏感模块配护栏 \|
\| CLAUDE.md 驱动 Hook \| 记忆不可靠 \| 规则变 Hook 才是强制执行 \|
\| MEMORY.md 回路 \| 不需要向量库 \| 一个文件实现跨会话记忆 \|
\| 风格即上下文 \| 每次手动开场白 \| 让 CLAUDE.md 承载你的工作方式 \|
\|

## 现在可以做的事

1. 打开你的 CLAUDE.md，删到 200 行以内——不删的，不值得留

1. 加一个「Do NOT introduce」区块，列出至少 3 个禁用的库

1. 把每一条模糊规则改成具体可验证的指令

1. 给最敏感的模块（auth / billing / infra）各加一个本地 CLAUDE.md

CLAUDE.md 不是一次写完就放那的文件。它是活的——你每发现一个 Claude 反复踩的坑、每总结一条有效的规则，都应该更新进去。一个月后回头看，你会发现 Claude 从一个菜鸟实习生，变成了真正懂你项目的高级工程师。

![Image](../_media/x-2052368318825402507/vincemask_2052368318825402507_1.jpg)

### 🖼️ Attached Media

![Image 1](../_media/x-2052368318825402507/vincemask_2052368318825402507_2.jpg)

## 💬 Replies

### 1 @Lonely__MH (Lonely)

*Thu May 07 12:53:15 +0000 2026*

@vincemask nice 啊，经验很宝贵👍

### 2 @vincemask (Vince 聊开发) (Author)

*Thu May 07 14:36:12 +0000 2026*

@Lonely\_\_MH 都是踩坑踩出来的

### 3 @MinLiBuilds (实践哥 Li)

*Mon May 11 10:14:45 +0000 2026*

@vincemask 写得很好，受用

### 4 @vincemask (Vince 聊开发) (Author)

*Mon May 11 10:19:23 +0000 2026*

@MinLiBuilds 多看看实践哥的教程，就能写出好文章

### 5 @ModengSir (Modengsir AI)

*Thu May 07 12:48:01 +0000 2026*

@vincemask 学习了，经验干货

### 6 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:56:59 +0000 2026*

@ModengSir 都是踩坑踩出来的 😂

### 7 @yshnln (shan)

*Thu May 07 12:45:55 +0000 2026*

@vincemask 很透彻，新人都要过三遍

### 8 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:14 +0000 2026*

@lnyisn 第2条和第3条最值钱

### 9 @enzyme_dev (船长老刘)

*Thu May 07 12:43:55 +0000 2026*

@vincemask 曾经我也写过500行的 claude.md。。都是趟过的坑啊

### 10 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:46 +0000 2026*

@enzyme\_dev 500 行不算啥，我见过 2000 的 😂

### 11 @coder_left (程序员Left)

*Sat May 09 01:34:17 +0000 2026*

@vincemask 很棒的教程，学习了

### 12 @vincemask (Vince 聊开发) (Author)

*Sat May 09 01:44:58 +0000 2026*

@coder\_left 希望能解决你的问题

### 13 @MatrixCoreX (瓜哥玩AI)

*Thu May 07 12:53:17 +0000 2026*

@vincemask codex同样适用

### 14 @vincemask (Vince 聊开发) (Author)

*Thu May 07 14:35:54 +0000 2026*

@MatrixCoreX 是的，换成codex 的 AGENTS.md 同样适用

### 15 @ddny09 (Evan.Z)

*Thu May 07 12:46:08 +0000 2026*

@vincemask 好文章，收藏学习了

### 16 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:07 +0000 2026*

@ddny09 拿走不谢 🙏

### 17 @jinglian (前端哥Liam)

*Fri May 08 12:48:35 +0000 2026*

@vincemask 总结得非常好！
尤其是“不要引入什么”比“要引入什么”更重要。​以前怕它不懂，塞一堆东西；看完这篇才意识到，约束才是最高效的赋能。

### 18 @vincemask (Vince 聊开发) (Author)

*Fri May 08 12:55:43 +0000 2026*

@jinglian 约束清楚，才更容易让模型稳定发挥。信息越克制，执行越精准。

### 19 @ponyodong (波妞PONYO)

*Thu May 07 12:45:02 +0000 2026*

@vincemask 深以为然～厉害👍

### 20 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:30 +0000 2026*

@ponyodong 🙏

### 21 @KtAIFeed (荒野饲养员)

*Thu May 07 12:45:41 +0000 2026*

@vincemask CLAUDE.md 不是越长越好，短+具体+禁忌清单才靠谱，踩坑后看这篇，瞬间明白为什么以前Claude老跑偏，收了

### 22 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:22 +0000 2026*

@KtAIFeed 短、具体、有禁止清单——缺一不可

### 23 @shuyue_ai (Shuyue)

*Thu May 07 12:44:38 +0000 2026*

@vincemask 学到了，正准备开始用cc

### 24 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:38 +0000 2026*

@shuyue\_ai 别超 200 行，这条最重要

### 25 @HUANGBINmd (bbinapple)

*Thu May 07 17:26:13 +0000 2026*

@vincemask 将你的推文直接扔给 claude，让它根据我的工作内容重新编写一遍CLAUDE.md，形成完美闭环。

### 26 @vincemask (Vince 聊开发) (Author)

*Fri May 08 02:37:35 +0000 2026*

@HUANGBINmd 优秀的实践

### 27 @alin_zone (阿蔺A-Lin)

*Thu May 07 12:43:48 +0000 2026*

@vincemask 有些内容确实还挺反直觉的

### 28 @vincemask (Vince 聊开发) (Author)

*Thu May 07 12:57:54 +0000 2026*

@alin\_zone 反直觉的才最管用

### 29 @frontendGijela (Gijela)

*Thu May 07 18:24:20 +0000 2026*

@vincemask @StoryComicAI 使用漫画总结一下帮助我理解

### 30 @vincemask (Vince 聊开发) (Author)

*Fri May 08 02:35:55 +0000 2026*

@frontendGijela @StoryComicAI 这个bot不错，还能这么玩

### 31 @jfdi1001 (jfdi1001)

*Wed Jun 17 03:59:05 +0000 2026*

@vincemask 很有帮助哦

### 32 @0xKing2026 (King的出海记)

*Wed Jun 17 16:06:35 +0000 2026*

@vincemask 太有用啦

### 33 @bison_404 (Bison Tane)

*Tue May 12 02:10:42 +0000 2026*

@vincemask 好文章

### 34 @View_tao (Tao)

*Fri May 08 16:14:27 +0000 2026*

@vincemask MEMORY.md 瘦身：删掉跟内容生产无关的死信息，加禁止清单，把项目状态变成指针。
SKILL.md 的写作规则：把模糊描述换成可操作指令，加例句，加验证标准。

赞了！！！！

### 35 @const_ye (geoconst)

*Mon May 11 09:14:51 +0000 2026*

@vincemask 很有收获，感谢分享

### 36 @XenosZhang (Lessid Zhang)

*Thu May 07 22:59:07 +0000 2026*

@vincemask 你可以让claude code 自己精简冗余的东西。

