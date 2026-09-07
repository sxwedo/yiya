---
title: "Oh My Opencode绝对是2026上班第一天最值得学的工具，附上简明教程："
author: "WquGuru (@wquguru)"
url: "https://x.com/wquguru/status/2007481319731958146"
ingested: "2026-09-07"
date: "Sat Jan 03 15:56:58 +0000 2026"
content_type: "note_tweet"
subtypes: ["quoted"]
type: "NoteTweet"
---

Oh My Opencode绝对是2026上班第一天最值得学的工具，附上简明教程：

2026年AI编码代理已进入多代理协作时代，Oh My Opencode作为OpenCode的顶级插件（GitHub 5.3k星），将单一代理升级为生产级团队：异步子代理（类似Claude Code）、精选专长代理（Sisyphus总控、oracle架构师、frontend-ui-ux-engineer等）、LSP/AST工具链、MCP集成（Exa搜索、Context7文档、[Grep.app](http://Grep.app)代码搜索），并完美兼容Claude Code Hook和Skills

核心优势：多模型互补（Claude Opus规划、Gemini视觉、GPT调试），并行执行降低token消耗，提升复杂项目效率。学会它，你能让AI像真实开发团队一样分工协作，从原型到全栈应用一键生成

快速安装：

1\. 安装OpenCode（开源Claude Code替代）：
curl -fsSL [opencode.ai/install](https://opencode.ai/install) \| bash

2\. 安装Bun（插件依赖）：
curl -fsSL [bun.sh/install](https://bun.sh/install) \| bash

3\. 一键安装Oh My Opencode（互动配置订阅）：
bunx oh-my-opencode install

4\. 认证模型（支持Claude Max、Codex、Gemini）：
opencode auth login
依次登录Anthropic、OpenAI、Google（浏览器OAuth）

5\. 启动并测试：
opencode
输入：ultrawork Build a full-stack Todo app with React and Node
Sisyphus会自动@子代理分工：frontend处理UI、oracle审架构、librarian查文档

进阶配置（\~/.config/opencode/oh-my-opencode.json）：
{
  "agents": {
    "Sisyphus": { "model": "anthropic/claude-opus-4.5" },
    "frontend-ui-ux-engineer": { "model": "google/gemini-3-pro" }
  },
  "ralph\_loop": { "enabled": true }  // 自动迭代至完成
}

提示技巧：
\- 用“ultrawork”或“ulw”触发全火力并行。
\- @agent调用专长（如@oracle审设计）
\- 监控界面实时显示token和进度

掌握这个，2026你的生产力将充分整合cc、codex和gemini cli，仓库：[github.com/code-yeongyu/o…](https://github.com/code-yeongyu/oh-my-opencode)

## 💬 Replies

### 1 @wquguru (WquGuru) (Author)

*Mon Jan 05 01:17:20 +0000 2026*

模型中转教程参考 [linux.do/t/topic/1329050](https://linux.do/t/topic/1329050)（感谢linus提示词作者 @Naaaarukaru  的分享）

更多模型provider参考官方文档：[opencode.ai/docs/providers…](https://opencode.ai/docs/providers/#base-url)

### 2 @rueiciwang (Ricky Wang)

*Mon Jan 05 01:22:34 +0000 2026*

@wquguru Windows 小夥伴可以替換 1-2 步驟 😁

1\. 安装OpenCode（开源Claude Code替代）： 
(用 admin 開 powershell) 
choco install opencode

2\. 安装Bun（插件依赖）： 
powershell -c "irm[bun.sh/install.ps1\|iex](http://bun.sh/install.ps1%7Ciex)z"

並感謝分享, 一周開工就開始學習使用新東西～！

### 3 @wquguru (WquGuru) (Author)

*Mon Jan 05 01:24:08 +0000 2026*

@rueiciwang cool 太棒啦！

### 4 @starkljm (Mr.鼓先生)

*Sun Jan 04 04:13:03 +0000 2026*

@wquguru 现在真的Oh My God了,最大的短板是我自己

学不完,根本学不完

### 5 @wquguru (WquGuru) (Author)

*Mon Jan 05 01:20:25 +0000 2026*

@starkljm 信息筛选很重要嘿嘿，看完这个能缓解很多焦虑感 [x.com/wquguru/status…](https://x.com/wquguru/status/2007669143378727203?s=46)

### 6 @WNutz42 (坚果口袋)

*Sun Jan 04 03:45:19 +0000 2026*

@wquguru 可以不用三家认证，直接用 opencode zen 的模型呗？

### 7 @wquguru (WquGuru) (Author)

*Mon Jan 05 01:23:43 +0000 2026*

@WNutz42 yes 这是官方推荐的（毕竟能收钱哈哈

### 8 @ethan_han999 (Ethan_Han)

*Sun Jan 04 18:23:58 +0000 2026*

@wquguru 支持配置Antigravity Tools 吗

### 9 @wquguru (WquGuru) (Author)

*Mon Jan 05 01:22:57 +0000 2026*

@ethan\_han999 没试过，或许这个可以参考一下 [linux.do/t/topic/1404993](https://linux.do/t/topic/1404993)

### 10 @wangdefou (得否)

*Sun Jan 04 17:05:00 +0000 2026*

@wquguru 明天就去配置起来

### 11 @justin_newbee (justin0798)

*Sun Jan 04 04:17:48 +0000 2026*

@wquguru 也不看花多少钱的token

### 12 @Hikolary (Linioi)

*Sat Jan 03 20:27:34 +0000 2026*

@wquguru Open Code 感觉本身就有 bug，调用 LLM 总是会一条消息发完就停下了。体验挺差的。

### 13 @always_movingon (yyy)

*Sun Jan 04 17:36:31 +0000 2026*

@wquguru 广告这么多

