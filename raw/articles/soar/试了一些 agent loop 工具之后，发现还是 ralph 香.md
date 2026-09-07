---
title: "试了一些 agent loop 工具之后，发现还是 ralph 香"
author: "soar (@codersoar)"
url: "https://x.com/codersoar/status/2045384177328291865"
ingested: "2026-09-07"
date: "Sat Apr 18 06:09:23 +0000 2026"
content_type: "post"
subtypes: []
type: "Tweet"
---

试了一些 agent loop 工具之后，发现还是 ralph 香
就一个 113 行的 sh 脚本（while 多次迭代执行 claude -p）加上 3个 markdown 的提示词，非常轻量

\- 使用 /prd 把模糊需求转换生成 prd
\- 使用 /ralph 把需求的 prd 转换拆分成任务规划和结果校验点

逻辑清晰，简洁好用

[github.com/snarktank/ralph](https://github.com/snarktank/ralph)

## 💬 Replies

### 1 @kenxuho (KENVO AI)

*Sat Apr 18 14:41:59 +0000 2026*

@codersoar 适合 codex 吗

### 2 @codersoar (soar) (Author)

*Sun Apr 19 01:12:42 +0000 2026*

@kenxuho 只适合 claude-code 和 amp

### 3 @lesliedqbb (Dobby)

*Sat Apr 18 23:32:55 +0000 2026*

@codersoar 113 行的 bash 脚本比一堆框架好用 这太真实了

之前折腾过各种 agent orchestration 工具 最后发现越重的框架越难调 prompt 和校验逻辑反而越难改

ralph 这种思路对 工具链简单点 把精力花在任务拆解和验收标准上

### 4 @Microstrongs (microstrong)

*Sat Apr 18 12:40:58 +0000 2026*

@codersoar 如无必要，勿增实体。

### 5 @htvXman (HTV)

*Mon Apr 20 01:18:28 +0000 2026*

@codersoar Where link to /prd or it's a buildint

