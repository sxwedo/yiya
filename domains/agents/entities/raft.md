---
type: Entity
title: "Raft"
description: "人与 Agent 共用频道工作空间：长期身份与记忆，本机 daemon 跑 Claude / Codex 等；不是分布式共识算法。"
kind: product
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-07T18:40:00Z }
related:
  - role-first-agent
  - grok-bot
  - puffo
  - proof
  - herdr
  - pilot-protocol
  - multi-agent-governance
sources:
  - ../references/raft-site.md
  - ../../../raw/articles/搜狐技术产品/多Agent协作与AI开发团队构建实战.md
---

# Identity

**Raft**（<https://raft.build/zh-cn/）让人和多个> Agent 在同一套频道、私信、线程、任务里协作。每个 Agent 有名字、身份、记忆和专长，跑在本机轻量 daemon 上，底层仍是 Claude、Codex、Hermes 等已有运行时：自己领任务、并行、交接。不是再做一个编码 CLI，也不是 [分布式共识里的 Raft](https://raft.github.io/)。

定位：人机**组队工作空间**。同公司形态对照：[Grok Bot](./grok-bot.md) 是岗位制工程多智能体（带队 Bot + 进仓执行）；[Proof](./proof.md) 是共写文档；[Herdr](./herdr.md) 是持有终端会话。多 Agent 怎么共处见 [多智能体治理](../concepts/multi-agent-governance.md)。

## Mechanism

搜狐横评（2026-10）的概念模型与原语：

- **容器层级**：Server（顶层工作空间，URL slug 创建后不可改，各 Server 完全隔离）→ Channel（含默认 #all）→ Thread（从任意消息展开的对话分支，内容不进主频道流）/ Task（@mention Agent 时生成的工作单元）。典型组合：有 Task + 有 Thread = 主流模式（claim 后在 Thread 里干活汇报）；有 Thread 无 Task = 讨论/头脑风暴；有 Task 无 Thread = 极简任务直接回主频道。
- **六大原语**：Channel/Thread 隔离上下文；**Task Claim**（必须先 claim 才能干活，系统强制，多 Agent 并行防同文件冲突）；MEMORY.md（Agent 私有持久记忆，重启不丢，可给其他 Agent 检查）；Daemon（本地守护进程，代码不出本机，模型走用户自己的 API）；**混合 Runtime**（同一 Server 混用 Claude Code / Codex / OpenCode 等，切换 Runtime 时 workspace、memory、identity 保留）；@mention 派发。
- **被横评测出的短板**：无结构化质量门禁（质量全靠 Agent 提示词设计）、无形式化流水线（Channel 天然双向，单向流要额外约束）、无原生编排（Pipeline/DAG 要人肉或 Agent 模拟）。缓解：prompt 约定链式 @mention 模拟流水线、完成后必须 @QC 替代 Hook。

## Boundaries

成文源目前是一篇横评（2026-10，作者称 Raft 前称 Slock）；安装点击与操作面板细节以仓或站点为准。不是分布式共识里的 Raft。平台不管质量门禁，那是团队层设计（见 [多 Agent 协作模式](../concepts/multi-agent-collaboration-patterns.md)）。

## Related

- [Role-first Agent](../concepts/role-first-agent.md)
- [Grok Bot](./grok-bot.md)
- [Puffo](./puffo.md)
- [Proof](./proof.md)
- [Herdr](./herdr.md)
- [Pilot Protocol](./pilot-protocol.md)
- [多智能体治理](../concepts/multi-agent-governance.md)
- [多 Agent 协作模式](../concepts/multi-agent-collaboration-patterns.md)
