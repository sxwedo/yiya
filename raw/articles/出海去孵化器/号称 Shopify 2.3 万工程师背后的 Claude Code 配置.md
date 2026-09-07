---
title: "号称 Shopify 2.3 万工程师背后的 Claude Code 配置"
author: "出海去孵化器 (@chuhaiqu)"
url: "https://x.com/chuhaiqu/status/2057287519809745360"
ingested: "2026-09-07"
date: "Thu May 21 02:29:01 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

号称 Shopify 2.3 万工程师背后的 Claude Code 配置

1\. 先统一 AI 入口

Shopify 没把团队绑死在一个工具上，而是先做一层 LLM proxy。Claude Code、Copilot、Cursor 都从同一个 gateway 走，再接 OpenAI、Anthropic、Google

这样能统一看用量、控成本、做模型路由。以后换模型，工程师的工作流不用跟着重搭。

2\. 大任务开 parallel agents

别把 Claude Code 当单个聊天框用。大任务拆成几块，开 2-3 个终端同时跑

一个 agent 改 auth，一个写 payment flow 测试，一个更新 API 文档。人负责看 diff、丢掉不靠谱的输出、合并能用的部分。

3\. 架构问题用 critique loop

写代码可以并行，架构决策更适合让一个 agent 多轮自我审查

prompt 可以这样写：先给方案，再批判哪里会在 scale 时出问题，然后基于批判修订，再批判修订版，最后给每个决策的置信度

别急着拿第一版答案，让 Claude 先把自己的漏洞挑出来。

4\. 让 Claude 访问真实系统

Shopify 开源了 shopify-dev-mcp，让 Claude Code 直接查最新文档、验证 GraphQL schema、跑 Shopify CLI，还能处理产品、metafields、themes、bulk operations

其他团队就接自己每天用的 MCP：GitHub、Slack、数据库、内部文档。

5\. CLAUDE.md 提交到 git

把 CLAUDE.md 当团队共享上下文提交到 repo，让所有 agent 看到同一套项目规则

内容控制在 60 行以内，只放 stack、常用命令、目录结构、硬规则。原文特别提醒，塞太多标准会拖慢每一轮，因为这些内容每次都要进上下文。

6\. 权限先收紧

agent 可以读文件、改代码、跑测试、lint、看 git status、看 diff、commit。

push、deploy、删库、rm -rf、读取 .env 和 secrets 这类动作直接禁止。默认可以接受编辑，但任何不可逆操作都留给人。

7\. 把时间挪到策略验证

原文说 Shopify 的工程时间分配已经从 70% 执行、30% 策略，翻到 70% 策略、30% 执行

AI 写更多代码之后，人要花更多时间判断用户流程、需求是否成立、架构该怎么选。20% productivity gain 来自更快试 10 个方案，而不是更快敲完同一个方案。

## 💬 Replies

### 1 @chuhaiqu (出海去孵化器) (Author)

*Thu May 21 13:44:53 +0000 2026*

2026 年度见面会来了！6 月 13 日，北京，总共 15 场主题分享+一场快闪。现场将汇集投资人、出海创业者与增长专家，一起聊品味、增长、出海及 AI 新范式！

🎫 欢迎锁定早鸟票（¥99，正价¥299）：
\- 直购[chq.sh/bj](http://chq.sh/bj)F
\- 详情[chq.sh/2026](http://chq.sh/2026)r
\- 听友群[chq.sh/tyq](http://chq.sh/tyq)0

### 2 @josepha_ai_tool (jose_Phoebe)

*Thu May 21 10:15:49 +0000 2026*

@chuhaiqu 第5和第7是真正拉开差距的地方——CLAUDE.md 本质上是把隐性团队知识显性化，而 70/30 策略翻转意味着 AI 编程的瓶颈已经从"写不出来"变成"不知道该写什么"，大多数团队还卡在用 AI 加速执行的阶段

