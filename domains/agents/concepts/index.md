# concepts

* [Advisor](./advisor.md) — 给主 Agent 配第二模型旁听：读每一轮输出，在同一条流里注入提醒或硬拦截，用于实时纠偏。
* [Agent OTel 探针](./agent-otel-probe.md) — 以 OpenTelemetry 探针采集 Agent 运行轨迹：用 Trace ID 串联模型与工具调用，形成可观测拓扑。
* [Agent 自进化飞轮](./agent-self-evolution-flywheel.md) — 评测→记忆→落地→控制四齿咬合的工程闭环：每环输出成为下一环输入，靠回流持续转动。
* [Agent 遥测接入形态](./agent-telemetry-ingress.md) — 按 Agent 形态与改造意愿选择成本最低的数据接入路径：一键、框架 SDK、注解埋点、或无侵入内核观测。
* [异步记忆沉淀](./async-memory-precipitation.md) — 请求路径并行加载记忆；会话结束后异步筛选、去重并写入长期层，避免把沉淀成本放进热路径。
* [Coding Agent Workflow](./coding-agent-workflow.md) — 用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。
* [复合检索 Agent](./compound-retrieval-agent.md) — 由 Agent 自主决定多源并行检索、评估补搜与精读，再整合权威与实时上下文生成回答，而非单次向量召回。
* [Delivery Harness](./delivery-harness.md) — 包裹在模型之外的交付控制系统：合同锁事实、边界限半径、证据控跃迁、修复写回默认规则。
* [Engineering Bot](./engineering-bot.md) — 长期运行、带岗位记忆与工具权限的工程角色 Bot：接任务、创建并跟进 Cloud Agent，人只处理关键判断。
* [Evidence Gate](./evidence-gate.md) — 交付状态跃迁的证据门禁：每一步结论必须对应可复查证据，答不全则停在原地。
* [四层 Agent 记忆](./four-layer-agent-memory.md) — 按生命周期拆分 Working / Session / User / Agent Memory：当前步、会话史、跨 Agent 用户事实、单 Agent 经验与约定。
* [Harness 自改进](./harness-self-improvement.md) — 通过持久化改记忆、Skill、Prompt、工具与工作流来进化 Agent；即时生效、可回滚，是当前最高性价比的自进化层。
* [历史不等于记忆](./history-vs-memory.md) — 原始会话记录保留当时说过什么；记忆是整理后可更新、可遗忘、可按需召回的状态，长上下文不能替代。
* [知识与技能分离](./knowledge-skill-separation.md) — 知识回答「我们知道什么」，技能回答「我们该怎么做」；技能可回滚，知识层应持续积累且不随拒绝回滚。
* [Minimal Agent Harness](./minimal-agent-harness.md) — 极简代理框架哲学：核心只保留原语（Primitives, not features），高级能力由扩展/技能按需组装，以降低上下文税并保持可控。
* [多智能体失效模式](./multi-agent-failure-modes.md) — 多 Agent 协作中的系统性失效：协调成本膨胀、低方差从众同错、独有信息被淹没，以及目标冲突时的对抗升级。
* [多智能体治理](./multi-agent-governance.md) — 多 Agent 系统的核心不是堆叠数量，而是提供信任、冲突解决与多样性保护等社会基础设施。
* [Multi-Harness Control Plane](./multi-harness-control-plane.md) — 在多个 Coding Agent Harness 之上建统一控制面：任务与项目上下文与 Harness 无关，适配器封装差异，权限与状态放在执行器之外。
* [在线记忆流水线](./online-memory-pipeline.md) — 会话可靠进入提取→写成可独立理解的事实→补结构与关联→混合检索取回当前相关记忆，与离线长期整理分工。
* [Playbook 反馈闭环](./playbook-feedback-loop.md) — 从任务失误复盘到更新共享 Playbook，并让其他 Bot 在下次任务默认加载新规则。
* [检索质量 Pipeline](./retrieval-quality-pipeline.md) — 在召回之后用分级筛选提升精准度：快速通道、交叉编码粗筛、LLM 精评；承认向量相似不等于语义相关。
* [Role-first Agent](./role-first-agent.md) — 以长期岗位（而非单次对话或单仓项目）组织 Agent：稳定职责、可验收交付、可交接与权限边界。
* [TTSR](./ttsr.md) — Time-Traveling Stream Rules：规则平时休眠不占上下文，输出匹配偏离条件时中止流并注入提醒后重试。
* [WikiSkill 三层架构](./wikiskill-architecture.md) — 把 Agent 变强拆成 Raw（不可变轨迹）、Wiki（可复用知识）、Skills（可执行技能）三层，技能从知识生长。
* [Loop Engineering](./loop-engineering.md) — 设计可自转的 agent 闭环（找活/分派/验收/状态）
* [Software Factory Cost Equation](./software-factory-cost.md) — Uber 式 agent 用量四层与成本等式优化
* [Graph Engineering](./graph-engineering.md) — 节点/边依赖图：假边、菱形并行、checker
* [Plan 模式与主子 Agent](./plan-mode-multiagent.md) — Plan-and-Execute + 主子协作 + A2A（得物）
* [LLM-as-Judge Runtime](./llm-as-judge-runtime.md) — 运行时裁判：拆判据、比对照、审轨迹、确定性包边
* [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md) — 图状态选活/分流 + 永久纠错 + 人审元循环
* [AI Design De-slop](./ai-design-deslop.md) — 约束优先、删减、设计工具多变体，防 agent UI 糊
