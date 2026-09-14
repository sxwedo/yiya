# concepts

* [Advisor](./advisor.md) — 主循环外的第二模型：读共享上下文，只给计划/纠偏/停止，不调工具、不对用户说话。可每轮旁听，也可由执行器按需升级。
* [Agent OTel 探针](./agent-otel-probe.md) — 用 OpenTelemetry 探针采集 Agent 轨迹：Trace ID 串联模型与工具调用及上下文依赖，组装思考与执行拓扑；旁路故障不进热路径。
* [Agent 自进化飞轮](./agent-self-evolution-flywheel.md) — 评测→记忆→落地→控制四齿咬合：信号进治理、治理进改配套、改完再评、人当教练。瓶颈在衔接，评测失真则飞轮反转。
* [Agent 遥测接入形态](./agent-telemetry-ingress.md) — 按 Agent 形态与改造意愿选成本最低的接入：一键、框架 SDK、注解埋点、或 eBPF 无侵入。Service Name 圈定归属，License Key 鉴权。
* [Agent On-call](./agent-oncall.md) — 把 Agent 做成 CI/CD 值班第一响应：Slack 常驻记忆与指令、MCP 连观测与代码仓、Skill/lessons 沉淀复盘，编排子 Agent 并行取证并出 SITREP。
* [Auto Mode](./auto-mode.md) — 分类器替人批工具调用：安全的自动放行，破坏性/外泄/越权拦截或回退人工。比逐条 Approve 少打断，比跳过全部权限更有边界；文件系统与网络隔离要一起上。
* [异步记忆沉淀](./async-memory-precipitation.md) — 请求路径并行加载短期历史与长期记忆；会话结束后异步筛选、去重并写入长期层，沉淀失败不阻断本轮。
* [Coding Agent Workflow](./coding-agent-workflow.md) — 用 coding agents 构建软件的高层工作流：规划→执行→部署监控，配合引导、自主度、验收、环境定制与 harness 基础。
* [复合检索 Agent](./compound-retrieval-agent.md) — Agent 自主决定多源并行检索、评估补搜与精读，再按来源权威性交织生成回答；不是单次向量召回。
* [Delivery Harness](./delivery-harness.md) — 模型外的交付控制系统：合同锁事实、边界限半径、证据控跃迁、修复写回默认规则。上限不是生成速度，是质量秩序。
* [Engineering Bot](./engineering-bot.md) — 长期守一个领域、带岗位记忆与工具权限的带队角色：接任务、创建并跟进 Cloud Agent；人只处理产品取舍、权限和大影响面。
* [Evidence Gate](./evidence-gate.md) — 交付状态跃迁的证据门禁：每一步结论必须对应可复查证据，答不全则停在 pending。AI 可整理证据，不能替责任人签字。
* [四层 Agent 记忆](./four-layer-agent-memory.md) — 按生命周期拆 Working / Session / User / Agent Memory：当前步、会话史、跨 Agent 用户事实、单 Agent 经验。内容形态（文本/偏好/技能）是另一轴。
* [Harness 自改进](./harness-self-improvement.md) — 通过持久化改记忆、Skill、Prompt、工具与工作流来进化 Agent；即时生效、可回滚，是当前最高性价比的自进化层。
* [Harness 运行时层](./harness-runtime-layer.md) — Agent Loop 之外的运行时：装配上下文、管会话与权限沙箱、持久化事件、调度子 Agent。Agent 决定下一步，Harness 决定这一步在什么约束下发生。
* [历史不等于记忆](./history-vs-memory.md) — 原始会话只保留当时说过什么；记忆是可更新、可遗忘、可按需召回的状态。长窗口提高一次能读多少，不替代状态维护。
* [知识与技能分离](./knowledge-skill-separation.md) — 知识回答「我们知道什么」，技能回答「我们该怎么做」。Skill 被拒可回滚；Wiki 保留拒因，不随技能回滚。
* [字幕驱动白板手绘成片](./skill-whiteboard-video.md) — Codex + 白板 skill 把文稿做成手绘讲解视频：先分幕确认，源图无字，文字后期叠。人判、模型执行；装同名 skill ≠ 一键成片。
* [Minimal Agent Harness](./minimal-agent-harness.md) — 极简代理框架哲学：核心只保留原语（Primitives, not features），高级能力由扩展/技能按需组装，以降低上下文税并保持可控。
* [多智能体失效模式](./multi-agent-failure-modes.md) — 多 Agent 相互作用的全局风险：协调税、低方差从众同错、独有信息被淹没、目标冲突时对抗升级。不是单 Agent 对齐的叠加。
* [多智能体治理](./multi-agent-governance.md) — 即使每个 Agent 单独对齐，相互作用仍可能出系统问题。需要信任、冲突协议、多样性保护与共享协调面，而不是堆数量。
* [多 Agent 协作模式](./multi-agent-collaboration-patterns.md) — 先过三道闸（瓶颈可拆、交付可定义、交接划算）再选协作形：顺序交接、主管分工、专家路由、并行协作；拆分后系统还要管任务、上下文权限、进度回传与失败变更。
* [多 Agent 架构选型](./multi-agent-architecture-selection.md) — Google/DeepMind/MIT 经验判据：先看单 Agent 基线与任务可分解性，再在 SAS / Independent / Centralized / Decentralized / Hybrid 中选型；防错靠验证而非堆数量，智能体数有最优值。
* [Multi-Harness Control Plane](./multi-harness-control-plane.md) — 多套 Coding Agent Harness 之上的控制面：任务与项目事实与执行器无关，适配器封装差异，权限和状态放在 Harness 外。
* [在线记忆流水线](./online-memory-pipeline.md) — 会话可靠进入提取→写成可独立理解的事实→补结构与关联→混合检索取回当前相关记忆；与离线睡眠整理、请求路径异步沉淀分工。
* [Playbook 反馈闭环](./playbook-feedback-loop.md) — 局部失误变成全队下次默认行为：复盘 → 更新共享 Playbook / AGENTS.md / CI / Skill，而不是停在聊天提醒里。
* [检索质量 Pipeline](./retrieval-quality-pipeline.md) — 召回之后分级筛选：FastPass 放行、交叉编码粗筛、LLM 精评。向量相似不等于语义相关；筛挂中间件，对 Agent 透明。
* [Role-first Agent](./role-first-agent.md) — 以长期岗位而不是一轮聊天或一个代码仓组织 Agent：稳定职责、可验收交付、可交接、有权限边界。
* [TTSR](./ttsr.md) — Time-Traveling Stream Rules：规则默认休眠不占窗口；输出匹配偏离条件时中止当前流，注入系统提醒后从同一位置重试，压缩后仍保留。
* [WikiSkill 三层架构](./wikiskill-architecture.md) — Raw 不可变轨迹、Wiki 可复用知识、Skills 可执行规程。技能从知识生长；训练时不查 Wiki；拒 Skill 不回滚 Wiki。
* [Loop Engineering](./loop-engineering.md) — 把努力从「一手一手 prompt」转到设计可自己找活、分派、验收、记状态并再开下一轮的系统；停条件与上下文防腐是难点。
* [Software Factory Cost Equation](./software-factory-cost.md) — Uber 式软件工厂：把 agent 用量拆成四层与成本等式，用基准选模、压缩/缓存、MCP→CLI/code-mode、上下文图与可见性杠杆压低每会话成本。
* [Graph Engineering](./graph-engineering.md) — 节点是有合同的单任务，边只在真传递产出时存在。删假边、菱形并行、checker 拦坏输入；静态图优先于动态图。
* [Plan 模式与主子 Agent](./plan-mode-multiagent.md) — 企业级 MultiAgent：把「要做什么」做成可持久化运行对象；主 Agent 规划汇总，子 Agent 专责；A2A 跨服务时 contextId 必须绑租户。
* [用代码做计划](./plan-with-code.md) — 监督比你聪明的执行器：先让它用自己的话复述问题，用 /how /why /teach 和并行原型收集证据，满意后再拆必须跑过代码的小 PR。
* [LLM-as-Judge Runtime](./llm-as-judge-runtime.md) — 把 LLM 裁判从离线评测搬进 agent 运行时：拆分判据、成对比较、审过程而非只审终答、多裁判分歧升级，并用确定性检查包住裁判。
* [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md) — 用知识图状态动态选工作与路由：固定 schema/gate，查询式 launch，按节点状态分流，永久记录纠错，并由人审元循环提议改规则。
