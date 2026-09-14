---
type: Entity
title: "DeepSeek Harness"
description: "DeepSeek 开源 Agent 组装框架：Agent = Model + Harness；Everything is a Plugin。Developer Preview，会破兼容。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - pi
  - grok-build
  - harness-runtime-layer
  - minimal-agent-harness
sources:
  - ../references/deepseek-ai-deepseek-harness-github.md
  - ../../../raw/articles/Russell/万字长文：Deepseek Harness 一文全看懂！！.md
---

# Summary

**DeepSeek Harness**（仓 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)）官方公式：**Agent = Model + Harness**。模型输出结构化意图；外面的程序检查工具是否存在、权限、参数、真正执行、把结果塞回下一轮。Russell 万字文：谁打开网页、查过哪家公司、失败是重试还是编、改文件谁审路径、中断从哪续、删错能否还原——这些问题很少由模型单独解决。

口号 **Everything is a Plugin**：模型适配器、工具注册表、Session Log、Agent Loop、存储、沙箱、调度、UI 都由插件提供。架构文档口径是没有必须改源码才能扩展的特权核心——仍有核心接口和基础包，意思是可用配置换实现，不必 Fork 改内部。当时官方标 **Developer Preview**，会有破坏兼容的修改。对使用者是能读写文件、搜索、跑命令的 Agent；对开发者是组装框架。

启动用配置叠一棵插件树：

1. **Profile** — 整套配方（模型、工具、记录、UI、安全）。自带 web / headless 等。
2. **Bundle** — 可复用的一组插件（研究套件、代码审查套件）。一个 Profile 可叠多个。
3. **Patch** — 局部改（换模型、关工具、加路径限制），避免复制整份 Profile。

上层盖下层；命令行最后。Cordis 按**依赖**加载，不是按配置书写顺序。插件声明需要 `tools` 和 `fs`，电源没接上就不开机；`fs` 消失则卸载依赖它的文件工具，避免半残按钮。时空可组合：离开时撤销它注册的工具、追加的 system prompt、事件监听。

对照 [Harness 运行时层](../concepts/harness-runtime-layer.md)、[Minimal Agent Harness](../concepts/minimal-agent-harness.md) 的 [Pi](./pi.md)、同簇 [Grok Build](./grok-build.md)。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Minimal Agent Harness](../concepts/minimal-agent-harness.md)
- [Pi](./pi.md)
- [Grok Build](./grok-build.md)
