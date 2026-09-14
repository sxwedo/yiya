---
type: Entity
title: "Hermes Agent"
description: "Nous Research 开源 Agent：前台做完这次，后台把经历收成 Memory 与 Skills；问第二次少走弯路，不是把聊天当记忆。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T14:35:00Z }
related:
  - pi
  - grok-build
  - codex
  - harness-runtime-layer
  - harness-self-improvement
  - llm-wiki
  - agent-skills
sources:
  - ../references/nousresearch-hermes-agent-github.md
  - ../references/alchaincyf-hermes-agent-orange-book-github.md
  - ../../../raw/articles/Teknium 🪽/Hermes Agent now comes packaged with Karpathy's LLM-Wiki for creating knowledgebases and.md
  - ../../../raw/articles/loveabit/Hermes Curator 横空出世！AI Agent 终于会“自我进化”了！.md
---

# Summary

**Hermes Agent**（[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)）是 Nous Research 的开源 Agent。要解决的不是「这一轮 Loop 多轻」，而是：**下次碰到类似任务，能不能少走弯路。** 聊天记录不够；要在模型外面维护一层会随使用变化的认知系统。对照见 [Harness 运行时层](../concepts/harness-runtime-layer.md)、[Harness 自改进](../concepts/harness-self-improvement.md)。

入口：`hermes update` 之后，Teknium 宣布内置 Karpathy [LLM Wiki](../../../shared/concepts/llm-wiki.md)：新会话 `/llm-wiki <research x>`，从网页/代码/论文编 Obsidian 研究库（例：把 Nous 项目编成互链库）。这是打包进去的知识编译技能，不是 Hermes 等于 yiya。

社区对官方 **Curator** 的归纳：Skills 只增不减会重复、过期、冲突。Curator 记调用频率与场景，默认每周跑一轮清理；相似 skill 合并，通用的收成模板；**Pin 住的不删不合并**。这是 harness 层的剪枝，不是改模型权重。Skill 形态对照 [Agent Skills](./agent-skills.md)。

第三方笔记仓 [hermes-agent-orange-book](https://github.com/alchaincyf/hermes-agent-orange-book) 只当入门书签，本页不编它的目录。

## 何时不用

- 当最轻终端 Loop：那是 [Pi](./pi.md)（同模型换 harness，税可以差一截；数字见运行时层，不在本页复述排行）。
- 当审批/沙箱/Thread 生命周期：那是 [Codex](./codex.md)。
- 当开源的是 TUI、权重另备：那是 [Grok Build](./grok-build.md)。
- 当 Mercury / 权限偏执编排：那是别的产品拿 Hermes 当对照。
- 当「十分钟安装 / 十件事先做 / 监控 160 个 KOL」教程：清单和个例工作流不进 `sources`。
- 当自进化分类学或个人「笔记+模型+Agent」知识栈：Hermes 只是例子，主旨不是本产品。

PAST-Bench、前台 Loop / Session Archive / Background Review 的拆解在 [Harness 运行时层](../concepts/harness-runtime-layer.md)（腾讯专文对象是 Harness，不弱挂进本页）。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Harness 自改进](../concepts/harness-self-improvement.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
- [Agent Skills](./agent-skills.md)
- [Pi](./pi.md)
- [Codex](./codex.md)
- [Grok Build](./grok-build.md)
