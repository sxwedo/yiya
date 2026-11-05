---
type: Entity
title: "DeepSeek Harness"
description: "DeepSeek 开源 Agent 组装框架：Agent = Model + Harness；Everything is a Plugin。Developer Preview，会破兼容。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T22:00:00Z }
related:
  - pi
  - grok-build
  - harness-runtime-layer
  - minimal-agent-harness
  - data-agent-landing
  - tls-agentloop
sources:
  - ../references/deepseek-ai-deepseek-harness-github.md
  - ../../../raw/articles/Russell/万字长文：Deepseek Harness 一文全看懂！！.md
  - ../../../raw/articles/DeepSeek Harness/Exploring Super-agent Design： Towards a More Autonomous Agent System.md
  - ../../../raw/articles/Datawhale/突发：DeepSeek重磅开源 超级Agent架构.md
  - ../../../raw/articles/阿里云云原生/从长程 Agent 到 Super-agent，解锁更多场景.md
---

# Identity

**DeepSeek Harness**（仓 [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness)）官方公式：**Agent = Model + Harness**。模型输出结构化意图；外面的程序检查工具是否存在、权限、参数、真正执行、把结果塞回下一轮。Russell 万字文：谁打开网页、查过哪家公司、失败是重试还是编、改文件谁审路径、中断从哪续、删错能否还原——这些问题很少由模型单独解决。

## Mechanism

口号 **Everything is a Plugin**：模型适配器、工具注册表、Session Log、Agent Loop、存储、沙箱、调度、UI 都由插件提供。架构文档口径是没有必须改源码才能扩展的特权核心——仍有核心接口和基础包，意思是可用配置换实现，不必 Fork 改内部。当时官方标 **Developer Preview**，会有破坏兼容的修改。对使用者是能读写文件、搜索、跑命令的 Agent；对开发者是组装框架。

启动用配置叠一棵插件树：

1. **Profile** — 整套配方（模型、工具、记录、UI、安全）。自带 web / headless 等。
2. **Bundle** — 可复用的一组插件（研究套件、代码审查套件）。一个 Profile 可叠多个。
3. **Patch** — 局部改（换模型、关工具、加路径限制），避免复制整份 Profile。

上层盖下层；命令行最后。Cordis 按**依赖**加载，不是按配置书写顺序。插件声明需要 `tools` 和 `fs`，电源没接上就不开机；`fs` 消失则卸载依赖它的文件工具，避免半残按钮。时空可组合：离开时撤销它注册的工具、追加的 system prompt、事件监听。

对照 [Harness 运行时层](../concepts/harness-runtime-layer.md)、[Minimal Agent Harness](../concepts/minimal-agent-harness.md) 的 [Pi](./pi.md)、同簇 [Grok Build](./grok-build.md)。

官方架构文（2026-10，自称是架构思想而非现有功能介绍）把下一步定为 **Super-agent**：打破 Agent 与单次手动会话的绑定，成为跨会话保持上下文、并行推进多任务互不干扰的「连续实体」。出发点：单任务上限取决于模型，**多任务上限取决于人的注意力**——人通常只能同时跟 3–5 个活跃会话。四特征：Continuous（在 IM/GitHub 原地对话，像一个 agent，不再需要记「会话 X 里有没有上下文 Y」）、Productive（并行多任务、未完成即可接下一条指令）、Proactive（监听环境事件自主行动）、Persistent（常在线、自动恢复）。单 ReAct 循环给不了这四样，只能靠系统架构：Router/Worker 两层（长命 Router 管全局连续性与人际交互，上下文隔离的 Worker 层高并发跑任务——会话应是系统实现细节，不是用户心智负担）、事件驱动、全双工多通道、计算/状态/环境分离加 Watchdog。配套开源 `dsh-superagent-prototype` 插件包。阿里云云原生提醑：LangChain 范式为降低开发复杂度设计，DSH 为降低体验与成本优化复杂度设计，两者都在帕累托前沿，透明换来工程复杂度，没有绝对最好只有取舍；场景例：主管早上在 IM 群要 20 分钟汇报、下午邮件改成 10 分钟，连续实体自己识别是同一件事并自主更新，不需要人搬上下文。

## Boundaries

Developer Preview，会破兼容。不是 DeepSeek 对话模型本身，不是必须 Fork 才能扩展的铁核——但仍有核心接口。

## Related

- [Harness 运行时层](../concepts/harness-runtime-layer.md)
- [Minimal Agent Harness](../concepts/minimal-agent-harness.md)
- [Pi](./pi.md)
- [Grok Build](./grok-build.md)
- [Data Agent 落地](../../engineering/concepts/data-agent-landing.md)
- [TLS AgentLoop](./tls-agentloop.md)
