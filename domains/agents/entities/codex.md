---
type: Entity
title: "Codex"
description: "OpenAI 编码 Agent：Approval + Sandbox 两道边界；Thread/Turn/Item + Thread Manager 管长任务。选可监督可恢复，不选最轻 Loop。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T14:25:00Z }
related:
  - claude
  - pi
  - grok-build
  - opencode
  - hermes-agent
  - harness-runtime-layer
sources:
  - ../references/openai-codex-github.md
  - ../references/openai-codex-plugin-cc-github.md
  - ../../../raw/articles/OpenAI/Codex now works directly in Chrome on macOS and Windows.md
  - ../../../raw/articles/腾讯技术工程/从一次 LLM 调用到完整 Harness，Agent 到底经历了什么？.md
---

# Summary

**Codex**（仓 [openai/codex](https://github.com/openai/codex)）是 OpenAI 的编码 Agent。入口从开源 CLI 扩到 IDE / Web / App / SDK；App Server 让不同客户端共用同一套任务生命周期、审批和流式事件。点允许 ≠ 拿到整机。对照见 [Harness 运行时层](../concepts/harness-runtime-layer.md)：**Agent 决定下一步；Harness 决定这一步在什么权限和生命周期里发生。**

## 怎么做

两道执行边界，工具调用要连续穿过：

- **Approval**：这个动作要不要停下来问人；请求绑到具体 Thread / Turn / Item。
- **Sandbox**：还能写哪些目录、能否上网、能碰哪些系统资源。接受一条命令不会自动取消其余限制。

Q&A 的错停在屏幕上；编码 Agent 的错是覆盖文件、跑错命令、越出工作区。模型越强，越不能只靠 Prompt 提醒小心。

任务骨架是 **Thread / Turn / Item**：Thread 是可多轮的任务，Turn 是人往前推的一次，Item 把消息、Reasoning、命令、改文件、工具、审批拆成可观察单元。可 Start / Resume / Fork / Interrupt，运行中的 Turn 可 Steer。保存的不是聊天记录，是还能生长的任务状态。

**Thread Manager** 是任务控制平面，不是第二套记忆、也不做推理：内存里按 Thread ID 找活跃实例；冷任务才从 Thread Store / Rollout 装回。Resume 仍在跑就返回现实例，避免同一历史开两套 Loop。Fork 按持久化快照裁切历史、换新 ID。子 Agent 是派生的**子 Thread**（自己的上下文、工具运行时、Rollout），不是塞进主循环的一段特殊逻辑。

对过去分两层：模型看到装配压缩后的上下文；Rollout / Thread Store / SQLite 管可恢复轨迹。启用 Memory 后，后台从历史 Rollout 抽稳定事实，整合进 `~/.codex/memories/`。**恢复一次任务**和**从许多任务里学习**是两条管线。

OpenBench（腾讯文引，2026-07，同一 `gpt-5.6-sol`、7 套 harness、42 题都跑完）：Codex 31/42（73.8%），中位 94.6s，成功任务均 117,107 新 token，是该组最重一档。样本小，不当总榜；它说明短任务视角会把审批、沙箱、持久化算成开销——Codex 换的是长任务可监督、中断、恢复、并行。

Chrome 扩展（官方帖：macOS/Windows，当时除 EU/UK；Linux 未列）：Codex 应用里装插件，后台并行多 tab，不抢浏览器。底层写代码导航；有插件用插件，要登录态网站才用 Chrome。这是工具面扩展，不是另一套 Thread 模型。

[openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) 是在 Claude Code 里调 Codex 做评审或委派，不是第二份 Codex 运行时。

## 何时不用

- 当「最轻终端 Loop」：那是 [Pi](./pi.md)（默认少工具、不内置权限）。
- 当「多客户端事件投影」：那是 [OpenCode](./opencode.md)。
- 当「开源的是 TUI/harness、权重另备」：那是 [Grok Build](./grok-build.md)。
- 当「第二次少走弯路」：那是 [Hermes Agent](./hermes-agent.md) 的后台回顾。
- 当 OpenAI API 示例集：cookbook 不是本产品。
- 当白板成片教程：那是用 Codex 跑 skill 的案例，见 [字幕驱动白板手绘成片](../concepts/skill-whiteboard-video.md)，不在本页展开。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Pi](./pi.md)
- [OpenCode](./opencode.md)
- [Grok Build](./grok-build.md)
- [Hermes Agent](./hermes-agent.md)
- [Claude](./claude.md)
