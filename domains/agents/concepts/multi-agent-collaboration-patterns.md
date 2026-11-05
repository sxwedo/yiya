---
type: Concept
title: "多 Agent 协作模式"
description: "先过三道闸（瓶颈可拆、交付可定义、交接划算）再选协作形：顺序交接、主管分工、专家路由、并行协作；拆分后系统还要管任务、上下文权限、进度回传与失败变更。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T01:00:00Z }
related:
  - multi-agent-architecture-selection
  - multi-agent-governance
  - multi-agent-failure-modes
  - plan-mode-multiagent
  - role-first-agent
  - graph-driven-agent-workflow
  - graph-engineering
  - llm-as-judge-runtime
  - requirement-as-delivery
  - agentloop
sources:
  - ../../../raw/articles/Datawhale/重磅！Google发布多智能体最佳实践！.md
  - ../../../raw/articles/叶小钗/一文讲透多Agent协作：4种模式、3个判断标准、4大工程落地陷阱.md
  - ../../../raw/articles/Claude/Common workflow patterns for AI agents—and when to use them.md
  - ../../../raw/articles/Claude/Building multi-agent systems: When and how to use them.md
  - ../../../raw/articles/Claude/Introducing dynamic workflows in Claude Code.md
  - ../../../raw/articles/Claude/Multi-agent coordination patterns： Five approaches and when to use them.md
  - ../../../raw/articles/阿里云云原生/15 个 Agent 组成研发小队：多智能体协作的端到端研发体系.md
  - ../../../raw/articles/搜狐技术产品/多Agent协作与AI开发团队构建实战.md
---

# Definition

**多 Agent 协作模式**回答「什么时候拆、怎么合作、拆完系统还要干什么」，而不是默认越多 Agent 越好。叶小钗以写公众号为例，把判断标准与四种合作形写清楚。

## 先过闸，再拆人

1. **瓶颈可拆**：真正卡在「可独立推进且持续判断」的工作段，而不是单次工具并发就能解决的搜索。
2. **交付可定义**：每人负责什么、交回什么、结果怎么被下一环使用——否则分头查完对不上。
3. **交接划算**：每多一个 Agent 都要交代背景、准备上下文、验收结果并付调用成本；省下的等待与上下文干扰，要盖过汇总与返工。

单 Agent 稳定工作仍需系统提示词、上下文管理、工具管理、权限与安全边界（边界靠程序执行，不靠提示词口头约束）。

## 四种合作形（可组合）

| 模式 | 要点 | 适用 |
| --- | --- | --- |
| **顺序交接** | 前环达标才开后环；可回流补查 | 步骤稳定的流水（调研→写作→审查）；程序预置步骤叫工作流，Agent 在允许范围内自判下一步 |
| **主管分工** | 协调 Agent 动态委派执行 Agent 并汇总；可多层但要限层数与任务数 | 一开始列不全步骤、随进展改安排 |
| **专家路由** | 按请求类型分给已定责 Agent | 类别清晰、工具/权限差异大 |
| **并行协作** | 无交叉的工作同时做；勿同时改同一工件，先交意见再统一合并 | 事实核查 ∥ 表达检查这类正交任务 |

顺序交接的隐患：摘要一路漏关键条件——后环要能回到原始资料核对。

## 拆分后系统还要做的四件事

把多 Agent 当项目组：程序（不一定是独立 PM 软件）提供能力——

1. **创建与管理任务**：编号、状态、配额、超时、取消与关联子任务
2. **准备上下文 + 限制工具权限**：执行 Agent 看不到协调侧全对话；权限在启动时由程序落地
3. **记录进度并交回结果**：查询或完成通知；汇总方要裁决冲突意见，不能盲合并
4. **处理需求变化与失败**：改/取消任务；结果带原请求快照以免用过期结论；失败分可重试 vs 缺料；保留工具轨迹可回查

Anthropic 把「工作流」与「完全自主 Agent」分开：工作流给整体路径与检查点，步内仍可推理与用工具。生产里三种块盖大多数：**顺序**（有依赖）、**并行**（独立子任务 fan-out/fan-in）、**evaluator-optimizer**（生成与评判分开迭代，要有可测量停止条件）。先用单 Agent、再加最简工作流；三种可嵌套。evaluator-optimizer 见 [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)。

协调形再拆五条（从简到复杂）：**generator-verifier**（质量可显式判据）、**orchestrator-subagent**（可拆且子任务有界，默认起点）、**agent teams**（并行、独立、长跑，工人跨任务保上下文）、**message bus**（事件驱动、生态会涨）、**shared-state**（发现要实时互见，无中心路由）。子任务短用主管分工；要长记忆用 teams；流程随事件变用总线；发现要互喂用共享状态。Dynamic workflows 是并行子代理 + 独立核验的产品形。

阿里云云原生把主管分工做成 15 个 Worker 的能力池：各有 Skill、Tool、上下文和职责，Leader 按任务调度。测试不过回原来的 Code Session；方案方向错了，带着失败证据重新 Research / Explore；反复不收敛触发 Human Gate。任务状态要留下：前一个做了什么、为什么、验证发现了什么。实现和验证分给不同 Agent。他们算过：复杂 Feature 约 20 个工作日，编码只占 2 天；编码快十倍，总周期仍约 18 天。编码变快后突出的是确认、协作、验证和等待——同一判断见 [需求即交付](./requirement-as-delivery.md)，那页是腾讯 OK 单流水线，本段是多角色小队。运行面他们叫 AgentCore；优化面见 [AgentLoop](../entities/agentloop.md)。先把范围和验收钉死；受约束样例里 19 题对照专家，交付从约一个月收到一周内。

与 [多智能体治理](./multi-agent-governance.md)（社会基础设施）、[多智能体失效模式](./multi-agent-failure-modes.md)、[Plan 模式与主子 Agent](./plan-mode-multiagent.md)（主子编排落地）、[Role-first Agent](./role-first-agent.md)、[Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md) 互补：本页专精「何时拆 + 四种形 + 运行时任务面」。

搜狐技术产品的横评（2026-10）给同一问题补了**动机与拓扑两块**。动机：多 Agent 的核心价值不是并行加速，是**角色隔离制衡**——单 Agent 自己写代码、自己写测试、自己说通过是「共谋问题」（Collusion）；让测试 Agent 与实现 Agent 各自独立，再由第三方 QC 对抗验证。没有管理层的工作流会崩：每个窗口自己的上下文、提示词手动复制、失败消失在终端日志、Agent 互相覆盖工作。五拓扑：聊天频道型（[Raft](../entities/raft.md)，@mention 派活 + Task Claim 防冲突）、任务面板型（Multica，Issue/看板/Assignee，协作控制平面）、Agent 市场型（LobeHub，按需组队）、Commander 调度型（Orkas，中心辐射 + COMPETENCE.md 自进化）、流水线型（agents-zone，单向串行 + 交接点 QC 门禁）；协调机制另分中心化/去中心化/混合。**平台只管协调，不管质量**——横评里只有 agents-zone 有结构化质量门禁，QC 要在团队层自己设计。

agents-zone 七原则（平台无关，可迁移）：①**单向信息流**（只读上游产出，不回头找上游，防止传话变异）；②**QC 门禁**：QC 不信任任何声明，去读实际代码逐条比对验收标准、真跑测试，抓假测试（怎么实现都能过的）和占位符（TODO/FIXME/NotImplemented）打回，报告带 `file:line`；③**故事文件 = 唯一信息源**（测试员/编码员只读 story.md，不经中间 Agent 传话）；④**有界失败循环**（编码员 3 轮、CI 自愈 2 轪后停并报阻塞，防无限重试）；⑤**跨会话状态**（PROGRESS.md 追踪每功能阶段）；⑥**反串通 TDD**：测试从需求/验收标准设计，不从实现推导——先看实现再写测试就是循环验证，抓不到 bug；⑦**HRBP 元适配**：不写码不写测，根据项目需求改其他角色文档本身（元编程）。Agent/Skill 二分：需要上下文隔离的长任务（测试员、编码员）起独立子 Agent，需要全局信息的决策（PM/架构/QC）共享主 Agent 上下文。状态分三层：MEMORY.md（我记住了什么）/ PROGRESS.md（项目到哪一步）/ COMPETENCE.md（我能做什么），完整系统可能三者兼备。平台映射的诚实账：无原生编排/钩子的聊天平台里，自动 QC、指挥家、环境搭建、HRBP 都映射不了，靠 prompt 约定链式 @mention 模拟，人守规划审批与最终合并；规划三步（PRD→架构→故事）可合一个频道由链式 @mention 自动流转，把人从 6 次触发降到 1 次。


## Boundaries

先过三道闸再选形。不是治理制度（多智能体治理），不是主子 Plan 运行对象。拆了还不划算就别拆。

## Related

- [多 Agent 架构选型](./multi-agent-architecture-selection.md)
- [多智能体治理](./multi-agent-governance.md)
- [多智能体失效模式](./multi-agent-failure-modes.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Role-first Agent](./role-first-agent.md)
- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [Graph Engineering](./graph-engineering.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
- [需求即交付](./requirement-as-delivery.md)
- [AgentLoop](../entities/agentloop.md)
