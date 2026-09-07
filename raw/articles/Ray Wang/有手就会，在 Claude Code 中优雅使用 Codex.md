---
title: "有手就会，在 Claude Code 中优雅使用 Codex"
author: "Ray Wang (@wangray)"
url: "https://x.com/wangray/status/2038912916741873836"
ingested: "2026-09-07"
date: "Tue Mar 31 09:34:55 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 有手就会，在 Claude Code 中优雅使用 Codex

OpenAI 昨天发布了 Claude Code 的官方 Codex 插件

[Embedded Tweet: https://x.com/i/status/2038670509768839458]

现在你可以直接在 Claude 中唤起 Codex 执行常规的代码审查、对抗性的深度审查，以及让不同的 Agent 视角来检查项目。

以下是配置方法

## 部署

环境要求：

- Node.js 18.18.0 以上

- ChatGPT 账号/API，支持 Free 账户

\`\`\`bash
#添加 marketplace 来源
/plugin marketplace add openai/codex-plugin-cc

#安装插件
/plugin install codex@openai-codex

#重新载入插件
/reload-plugins

#初始化
/codex:setup
\`\`\`

如果 Codex 在本地还没安装

\`\`\`bash
npm install -g @openai/codex
\`\`\`

如果 Codex 已安装但是还没认证登录

\`\`\`bash
!codex login
\`\`\`

插件成功安装后会自动读取已经存在的配置温江 \~/.codex/config.toml 或者 .codex/config.toml，如果你已经在用 Codex 了就无需额外配置

## 6种指令方式

## /codex:review

标准 read-only 代码审查，跟直接在 Codex 内运行 /review 的一样  

## /codex:adversarial-review

执行更严格的评审，如果你希望 Codex 有更多的质疑时使用

## /codex:rescue

直接把任务交给 Codex 去干，作为 subagent 在后台运行

你可以直接说：“让 Codex 去重构这个接口的实现”

注意：

- 如果你没有设置 --model 或者 --effort，Codex 会以默认设置运行

- spark 自动匹配 gpt-5.3-codex-spark

- 任务开始前，他会从上个 session 中检查可继续的 thread

- 使用 --wait 来解决小的请求，用 --background 来执行多步骤的任务

## /codex:status

检查当前的运行的任务

## /codex:result

查询所有完成任务的结果

## /codex:cancel

取消任意在活跃的任务

## 建议的使用姿势

1. /codex:review 大部分情况通用

1. /codex:adversarial-review 用于少数高价值的任务

1.  /codex:rescue 如果你想让 Codex 来干这个活

## 运行原理

插件通过本地 Codex CLI 和 Codex 应用服务器进行委派。所以，它使用跟本地 Codex 相同的本地身份验证、配置、环境和MCP设置。它就是 Codex，只是从 Claude Code 内部调用。

## 审查把关（可选）

你可以启用一个审查把关

\`\`\`bash
/codex:setup --enable-review-gate
\`\`\`

它可以在 Claude 每次任务运行过程中，执行审查，如果 Codex 发现了问题，他会让 Claude 继续先修复问题，直到没有问题后才允许任务结束。

[⚠️](https://abs-0.twimg.com/emoji/v2/svg/26a0.svg) 谨慎开启，因为可能带来过长的任务执行，可能很快就把你的用量烧完

### 🖼️ Attached Media

![Image 1](../_media/x-2038912916741873836/wangray_2038912916741873836_1.jpg)

## 💬 Replies

### 1 @MenglinZhao3 (Lin.)

*Sat Apr 04 17:44:53 +0000 2026*

@wangray 不懂就问，这是把原来codex的模型token费用换claude里再花一遍吗？

### 2 @wangray (Ray Wang) (Author)

*Sat Apr 04 18:11:24 +0000 2026*

@MenglinZhao3 就是官方的插件 本地有codex的话 无缝接入Claude code工作

### 3 @sgh_716 (tom)

*Sun Apr 05 03:32:11 +0000 2026*

@wangray 这种方式审查的时候，会带入claude的上下文么？会导致审查偏向么？

### 4 @alanhe421 (Alan H)

*Sun Apr 05 05:06:57 +0000 2026*

@wangray 直接cc里用codex coding就更好了，插件只是辅助

### 5 @fH47ijDERsJiQMu (HeroFu)

*Sun Apr 05 14:53:42 +0000 2026*

@wangray 目前有人用了吗？不知道GPT的APi Token贵不贵？

