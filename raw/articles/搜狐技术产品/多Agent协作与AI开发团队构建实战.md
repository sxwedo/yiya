---
title: "多Agent协作与AI开发团队构建实战"
author: "搜狐技术产品"
url: "https://mp.weixin.qq.com/s/B_-wRwD72JhEr0wLTZULzA"
ingested: "2026-10-26"
date: "2026-10-21 23:30:00"
---

# 📰 多Agent协作与AI开发团队构建实战

![](https://mmbiz.qpic.cn/mmbiz_gif/qMicvibdvl7p34TReicCCVtPOGT2QCgUiaakribFfntuY6j0wY3K6TenkbteCans3GaElIXcGjvD1tzOx5j5qYcZJJA/640?wx_fmt=gif)

### 01

### 多 Agent 协作概览

**1. 背景与动机**

2023 年是 AI 代码补全元年，2024–2025 年是 AI IDE 崛起期，而 2026 年，AI 编程正式进入 **Agent 工程化阶段** 。

单 Agent 在处理复杂软件工程任务时面临天然瓶颈：一个 Agent 同时承担需求分析、架构设计、编码实现、测试验证和 CI/CD 部署，不仅上下文窗口捉襟见肘，更会因为角色混淆导致"自己写代码、自己写测试、自己说通过"的 **共谋问题（Collusion Problem）** 。

多 Agent 协作的核心价值不在于并行加速，而在于 **通过角色隔离实现制衡** — 让写测试的 Agent 和写实现的 Agent 各自独立，再由第三方 QC Agent 做对抗式验证。

但多 Agent 协作带来了新的工程挑战：如何分配任务、如何防止冲突、如何管理状态、如何保证质量。没有管理层的多 Agent 工作流会崩溃 — 每个窗口有自己的上下文，提示词手动复制，失败消失在终端日志里，Agent 之间可能重复或覆盖彼此的工作。

### 这催生了一个新 AI 产品：Agent 协作平台。

**2. 调研范围与方法**

本文从三个互补的视角进行分享：

| **视角** |         **信息源**         |    **价值**    |
|:-------|:------------------------|:-------------|
|**横向对比**|   CodePick 2026 平台评测    | 行业全景，理解模式分类  |
|**纵向深潜**|     Slock/Raft 官方文档     | 单平台深入，理解协作方式 |
|**实践落地**|agents-zone-skillset 参考实现|生产级团队设计，理解协作原则|

**3. 核心问题**

本文将分析如下四个关键问题：

1）. 多 Agent 协作有哪些模式分类？各自适用什么场景？

2）. 平台层需要提供哪些原语来支撑协作？

3）. 如何设计一个生产级的 Agent 开发团队？

4）. 在 Slock/Raft 平台上构建 Agent 开发团队的具体路径是什么？

---

### 02

### 多 Agent 协作模式分类

**1. 按组织拓扑分类**

通过对比主流平台和参考实现，可以识别出五种组织拓扑 ：

|     **拓扑**      |**信息流**|    **决策权**     |  **代表**   |
|:----------------|:------|:---------------|:----------|
|    **聊天频道型**    | 双向对话  |   分散（谁@谁干活）    |Slock/Raft |
|    **任务面板型**    | 单向分配  |集中（Assignee 机制） |  Multica  |
|  **Agent 市场型**  | 按需组队  |    自动（平台撮合）    |  LobeHub  |
|**Commander 调度型**| 中心辐射  |集中（Commander 决策）|   Orkas   |
|    **流水线型**     | 单向串行  |     按阶段递交      |agents-zone|

**聊天频道型（Slock/Raft）**：把"和 Agent 协作"建模成聊天 — 创建 Server、Channel，邀请 Agent 进来，@mention 派任务。核心是 Task Claim 机制：Agent 必须先 claim 才能干活，多 Agent 并行时自动避免冲突。最接近人类团队的日常协作心智模型。

**任务面板型（Multica）**：更接近 Jira/Linear 的协作模型 — Issues、看板、Assignees、状态流转。Multica 自身不执行代码，而是作为"协作控制平面"连接 Jira/Linear/GitHub Issues 和底层的 Coding Agent Runtime。支持 Skill 复用，Agent 之间可以共享能力定义 。

**Agent 市场型（LobeHub）**：最大的开源 Agent 协作平台（73K+ Stars），核心是 Agent Marketplace + Agent Groups。提供 273K+ Skills 和 51K+ MCP Servers，Agent Groups 功能支持为复杂任务自动组建团队 。

**Commander 调度型（Orkas）**：MIT 开源桌面客户端，采用 Commander + Workers 架构。Commander 负责理解任务并分派给 Workers，Workers 各自执行后汇报。独特的 COMPETENCE.md 自进化机制让 Agent 能力档案随实践不断更新 。

**流水线型（agents-zone）**：不依赖外部平台，在 Claude Code 内部定义完整的角色流水线。信息严格单向流动（PM → 架构师 → 故事编写者 → 测试员 → 编码员），每个交接点设置 QC 门禁。最强调质量保证和角色隔离 。

**2. 按协调机制分类**

|  **机制**  |      **特征**       |                  **代表**                  |
|:---------|:------------------|:-----------------------------------------|
|**中心化调度** |    一个调度者统一分配任务    |     Orkas Commander、agents-zone 指挥家      |
|**去中心化协商**|   Agent 间直接通信协商   |Slock/Raft Channel 对话、LobeHub Agent Groups|
| **混合式**  |调度者编排 + Agent 间有限交互| agents-zone（指挥家编排 + Agent 在 Thread 中工作）  |

****3. 关键设计维度对比矩阵****

|    **维度**    |**Slock/Raft**|**Multica**|**LobeHub**|     **Orkas**     |**agents-zone**|
|--------------|--------------|-----------|-----------|-------------------|---------------|
|   **协调方式**   |  Channel 对话  |   任务分配    |   自动组队    |     Commander     |    指挥家+流水线    |
|   **冲突防护**   |  Task Claim  | Assignees |     —     |         —         |     故事文件锁     |
|  **状态持久化**   |  MEMORY.md   | Issue 状态  |     —     |   COMPETENCE.md   |  PROGRESS.md  |
|   **质量门禁**   |      —       |     —     |     —     |         —         |    QC 对抗验证    |
|   **执行隔离**   |  Daemon 本地   |    云端     |   插件沙箱    |       本地桌面        |  子 Agent 隔离   |
|**混合 Runtime**|     ✅ 支持     |   ✅ 支持    |   ✅ 支持    |       ✅ 支持        |  ❌ Claude 单一  |
|   **开源程度**   |    商业+开源     |    商业     | MIT 73K★  |      MIT 桌面       |    MIT 开源     |
|  **人类参与度**   |    中（聊天）     |   低（看板）   |   低（市场）   |中（Commander 可人可 AI）|  可高可低（指挥家自主）  |

**Note**：在所有对比维度中，只有 agents-zone 提供了结构化的质量门禁机制（QC 对抗验证）。这是因为平台侧通常只解决"如何协调"，而不解决"如何保证质量" — 这需要在 Agent 开发团队层面设计。

---

### 03

### Raft 平台分析

**1. Raft 核心概念模型**

Raft(前称Slock) 是一个人类和 Agent 共享频道、线程和时间的工作空间 。其概念模型如下：

```

Server（顶层容器，也称个人工作空间）├── Channel（频道）│   ├── #all（默认频道，所有成员自动加入）│   ├── #feature-x（自建频道，公开或私有）│   ├── Thread（线程 — 从任意频道消息展开的对话分支）│   └── Task（任务 — @mention Agent 时生成，Agent 必须 claim task才能工作）├── Direct Message（私信 — 任意成员间）├── Agent（AI 团队成员）│   ├── Runtime（底层引擎：Claude Code / Codex / OpenCode）│   ├── Memory（MEMORY.md 持久记忆）│   └── Identity（持久身份，跨会话保留）├── Human（人类团队成员）└── Computer（执行环境）    └── Daemon（本地守护进程，npx @botiverse/raft-daemon@latest）

```

Server 是 Raft 的顶层容器 。URL slug 在创建时确定（如 `app.raft.build/s/your-slug`），创建后不可更改。每个 Server 是独立的 — 频道、成员、Agent 和数据完全隔离。

Thread 是纯对话分支，任何人都可以从消息展开；Task 是 @mention Agent 时系统生成的工作单元，Agent claim 后通常在 Thread 中执行。两者的典型组合模式：

|       **模式**        |**Thread**|**Task**|                   **典型场景**                    |
|:--------------------|:---------|:-------|:----------------------------------------------|
|**有 Task + 有 Thread**|    ✅     |   ✅    |Agent 被 @mention 派发任务，claim 后在 Thread 中工作（主流模式）|
|**有 Thread + 无 Task**|    ✅     |   ❌    |       人类之间的讨论、Agent 的非正式回复、头脑风暴、代码评审讨论        |
|**有 Task + 无 Thread**|    ❌     |   ✅    |    极简任务，Agent claim 后直接在主频道回复（不展开 Thread）     |

**2. 六大协作原语详解**

|       **原语**       |**解决的问题**|                                                                   **机制**                                                                    |
|:-------------------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------|
|**Channel / Thread**|  上下文隔离  |                             Channel 按话题分离上下文；Thread 从消息展开，内容不出现在主频道流中。Agent claim task 后在 Thread 中更新进度，保持主频道干净                              |
|   **Task Claim**   |  并发冲突   |                                               Agent 必须先 claim 才能工作，系统强制执行。防止多 Agent 同时修改同一文件                                                |
|   **MEMORY.md**    |  跨会话遗忘  |                                      Agent 私有持久记忆文件，重启不丢失。可在 Agent workspace panel 中浏览，也可让其他 Agent 检查                                       |
|     **Daemon**     |  数据安全   |                                   Agent 在用户本地机器执行，代码不出本机。通过 `npx @botiverse/raft-daemon@latest` 启动轻量守护进程                                    |
|   **混合 Runtime**   |  能力互补   |同一 Server 中可混用不同 Runtime — 一个 Agent 用 Claude Code，另一个用 Codex CLI，第三个用 OpenCode + Deepseek。切换 Runtime 时 Agent 的 workspace、memory 和 identity 保留|
|  **@mention 派发**   |  任务路由   |                                             在频道中 @特定 Agent 指派任务，Agent claim 认领后在 Thread 中工作并汇报                                              |

**3. Raft 的优势与局限**

**优势** ：

• **心智模型自然**：聊天频道是人类最熟悉的协作方式，从 Slack/Discord 迁移认知成本极低

• **数据安全**：Daemon 本地执行，代码不出本机，模型走用户自己的 API（可用国内方舟/百炼）`

• **Runtime 混配**：同一团队可以按任务选择最合适的引擎，成本与能力兼顾

• **持久身份**：Agent 有真正的身份、记忆和专长，不是一次性的匿名执行者

**局限** ：

• **缺乏结构化质量门禁**：平台不提供原生的 QC/验证机制，质量保证完全依赖 Agent 提示词设计

• **缺乏形式化流水线**：Channel 天然支持双向对话，需要额外约束来实现单向信息流

• **无原生编排能力**：没有 Pipeline/DAG 定义，自动化流程需要人工或各 Agent 模拟

---

### 04

### agents-zone 中的 Agent 团队设计

**1. 团队拓扑与角色设计**

agents-zone 定义了一个 **11 角色的 AI 开发团队**，模拟完整的软件工程生命周期：

![](https://mmecoa.qpic.cn/sz_mmecoa_png/0FhfRxcGrraVe35Qx6KkoeHwbOg5NSicbtI8d35T4icSOExl1NwpgrRSINHC3dySzd1G1SX2YpPCZtEibLuiaRORI1liadjrs0Cic9eSeWcR1yDlc/640?wx_fmt=png&from=appmsg)

单story开发流程

**完整角色清单** ：

|   |  **角色**   |       **文件**        |**类型**|  **触发方式**  |       **核心职责**       |
|:--|:----------|:--------------------|:-----|:-----------|:---------------------|
| 1 |   产品经理    |   `skills/prd.md`   |Skill |   `/prd`   |     调研优先的 PRD 创建     |
| 2 |    架构师    |`skills/architect.md`|Skill |`/architect`|     PRD → 技术架构设计     |
| 3 |   故事编写者   |  `skills/story.md`  |Skill |  `/story`  |      创建自包含的开发故事      |
| 4 |    测试员    | `agents/tester.md`  |Agent | 子 Agent 启动 |  TDD 红灯 — 从需求写失败测试   |
| 5 |    编码员    |  `agents/coder.md`  |Agent | 子 Agent 启动 |  TDD 绿灯 — 实现代码让测试通过  |
| 6 |  QC 审计员   |   `skills/qc.md`    |Skill |   `/qc`    |    对抗式验证，抓假测试和占位符    |
| 7 |   自动 QC   | `skills/auto_qc.md` |Skill |    自动触发    |    检测完成报告，自动触发 QC    |
| 8 |CI/CD 持续集成器| `skills/follow.md`  |Skill | `/follow`  |监控 GitHub Actions，自动修复|
| 9 |    指挥家    | `skills/conduct.md` |Skill | `/conduct` |    编排完整工作流，自主完成故事    |
|10 |   环境搭建    |  `skills/setup.md`  |Skill |  `/setup`  |  Git Worktree、依赖验证   |
|11 |   HRBP    |  `skills/hrbp.md`   |Skill |   `/hr`    |     把项目需求嵌入团队文档      |

**2. Agent 与 Skill 的二元区分**

agents-zone 的设计决策之一是将角色分为 **Agent** 和 **Skill** 两种类型：

|**维度**|**Agent（**`**agents/**` **目录）**|**Skill（**`**skills/**` **目录）**|
|:-----|:------------------------------|:------------------------------|
| 执行方式 |    独立子 Agent，通过 Task 工具启动     |      主 Agent 自身执行，斜杠命令触发      |
| 上下文  |            独立上下文窗口            |         共享主 Agent 上下文         |
| 隔离性  |       强隔离 — 不会污染主 Agent       |         无隔离 — 共享所有状态          |
| 适用场景 |          需要代码级隔离的长任务          |         轻量决策、文档生成、验证          |
| 代表角色 |            测试员、编码员            |         PM、架构师、QC、指挥家         |

**设计理由**：编码和测试需要在隔离的上下文中执行（避免 Coder 的实现细节污染 Tester 的测试设计，反之亦然），而 PRD/架构/Story/QC 需要读取全局信息来做出正确决策，因此共享主 Agent 上下文更合适。

agents-zone 的 Agent/Skill 二元区分是 Claude Code 单主 Agent 架构下的产物 — 需要区分"独立子 Agent"和"主 Agent 内 Skill"来解决上下文隔离问题。而在 Raft 中，**每个角色都是独立 Agent**（各自拥有独立的 Runtime、Memory 和 Identity），上下文隔离由平台天然保证，不再需要 Agent/Skill 二元区分。同时在 Raft 中，Channel 和 Thread 解决了另一个问题： **会话隔离，**不同工作流的对话不混杂在同一频道中。

**3. 七大协作设计原则**

#### **原则一：单向信息流** ####

```

PM → 架构师 → 故事编写者 → 测试员 → 编码员 ↓     ↓        ↓        ↓        ↓[产出][产出]   [产出]     [产出]   [产出]

```

每个角色只读取上一个角色的产出，不回头找上游。信息回流会导致需求在传递中发生变异，最终偏离原始意图 。

#### **原则二：QC 门禁（对抗式验证）** ####

QC 审计员是整个体系的关键角色。它不信任任何声明，而是去读实际代码来验证 ：

• 测试员说"覆盖了所有 AC" → QC 去读测试代码，逐条比对验收标准

• 编码员说"所有测试通过" → QC 去实际运行测试

• 发现**假测试**（无论实现如何都会通过的测试）→ 打回

• 发现**占位符代码**（TODO、FIXME、NotImplemented）→ 打回

QC 的验证报告包含具体的 `file:line` 引用和修复建议，确保问题定位精确 。

#### **原则三：故事文件 = 唯一信息源** ####

测试员和编码员只读 story.md 文件，不直接从上游角色获取信息。这个设计防止"传话"效应 — 如果允许 Agent 之间互相直接传递信息，每一跳都可能引入理解偏差。

#### **原则四：有界失败循环** ####

• **编码员**：最多 3 次迭代。3 次后仍然失败 → 停止并报告阻塞

• **CI/CD 自愈器**：最多 2 次迭代。同一错误持续存在 → 停止并给出错误分析

这是 Agent 工程中的关键安全机制：防止 AI 陷入无限重试循环，消耗资源却无进展。

#### **原则五：跨会话状态（PROGRESS.md）** ####

指挥家 Conduct 通过 `PROGRESS.md` 文件在会话之间保持状态。文件中会追踪每个功能（从Testing到CI/CD）的阶段进度：

```

Design → Architecture → Story → Setup → Testing → Coding → QC → Dev Testing → CI/CD  [x]        [x]          [x]     [x]      [ ]     [ ]     [ ]     [ ]        [ ]

```

下次打开会话，指挥家读取 PROGRESS.md 即可从上次停止的地方继续推动任务。

#### **原则六： TDD** ####

测试员从**需求**设计测试用例，而非从**实现代码**推导测试。这是刻意为之 ：

• **测试设计**（WHAT to test）= 来自验收标准和需求

• **测试实现**（HOW to test）= 可以读代码了解接口签名

如果让 AI 先看实现再写测试，结果就是"代码做了什么就测什么" — 这是循环验证，抓不到任何 bug。

#### **原则七：HRBP 元适配** ####

HRBP 不写代码、不写测试，而是 **根据项目需求调整团队本身**：

```

你告诉 HRBP: "测试放在 test/component/"  → HRBP 找出需要知道这个信息的角色（测试员 HIGH、编码员 MEDIUM）  → 提出修改方案  → 你确认  → HRBP 更新角色文档

```

这是元编程思想的应用：不是为每个任务手动配置 Agent，而是让一个专门的角色来维护整个团队的项目适配度。

**4. 状态持久化策略对比**

各平台实现采用了不同的持久化策略：

|   **机制**    |  **实现方**  |  **粒度**  |     **内容**     | **更新者** |
|:------------|:----------|:---------|:---------------|:--------|
|  MEMORY.md  |   Raft    | Agent 私有 | 每个 Agent 的工作记忆 |Agent 自身 |
| PROGRESS.md |agents-zone|   项目全局   |功能阶段进度、工件路径、阻塞记录|   指挥家   |
|COMPETENCE.md|   Orkas   |Agent 能力档案| Agent 的技能和经验记录 |Agent 自进化|

三者解决的是不同层面的记忆问题：MEMORY.md 是"我记住了什么"（工作记忆），PROGRESS.md 是"项目到了哪一步"（流程状态），COMPETENCE.md 是"我能做什么"（能力档案）。一个完整的多 Agent 系统可能需要三者兼备。

---

### 05

### 在 Raft 上构建聊天模式 AI 开发团队

我们将 agents-zone 的设计模式映射到 Raft 平台能力上，给出可落地的聊天模式 AI 开发团队构建方案。

**1. 概念映射分析**

#### **角色级映射清单** ####

agents-zone 的 11 个角色并非都能一一映射为 Raft Agent。下表逐角色分析映射可行性，明确需要在 Raft 中创建的 Agent、无法映射的角色，以及需要人类参与的交接环节：

|   |**agents-zone 角色** |**类型**|**Raft 映射**|         **Raft Agent 名称**         |               **所在频道**               |                                               **映射说明**                                               |
|:--|:------------------|:-----|:----------|:----------------------------------|:-------------------------------------|:-----------------------------------------------------------------------------------------------------|
| 1 |    产品经理 `/prd`    |Skill |   ✅ 可映射   |           **PM-Agent**            |            [\#planning]()            |                                      通过 prompt 注入 prd.md 的角色定义                                       |
| 2 | 架构师 `/architect`  |Skill |   ✅ 可映射   |        **Architect-Agent**        |            [\#planning]()            |                                   通过 prompt 注入 architect.md 的角色定义                                    |
| 3 |  故事编写者 `/story`   |Skill |   ✅ 可映射   |          **Story-Agent**          |            [\#planning]()            |                                     通过 prompt 注入 story.md 的角色定义                                      |
| 4 |        测试员        |Agent |   ✅ 可映射   |         **Tester-Agent**          |          [\#development]()           |                                    Runtime 须用 Claude Code（需执行代码）                                     |
| 5 |        编码员        |Agent |   ✅ 可映射   |          **Coder-Agent**          |          [\#development]()           |                                    Runtime 须用 Claude Code（需执行代码）                                     |
| 6 |   QC 审计员 `/qc`    |Skill | ✅ 可映射（拆分） |**QC-Plan**<br/><br/>**QC-Develep**|[\#planning]()  <br/>[\#development]()|        agents-zone 中是 1 个角色，Raft 中按频道拆为 2 个独立 Agent：QC-Planning 验证 PRD/架构/故事，QC-Code 验证测试和实现         |
| 7 |       自动 QC       |Skill |  ❌ 无法映射   |                 —                 |                  —                   |        依赖"检测完成报告→自动触发 QC"的 Hook 机制，Raft 无原生 Webhook/事件触发。**通过 prompt 约定 Agent 完成后自动 @QC 来替代**        |
| 8 |CI/CD 自愈器 `/follow`|Skill |   ✅ 可映射   |           **CI-Healer**           |             [\#ci]()-cd              |                               Runtime 须用 Claude Code（需执行 shell 和 git）                                |
| 9 |  指挥家 `/conduct`   |Skill |  ❌ 无法映射   |                 —                 |                  —                   |                    Raft 无原生编排引擎。**规划阶段由 Agent 链式 @mention 自动流转（见 5.3），开发阶段由人类触发**                    |
|10 |   环境搭建 `/setup`   |Skill |  ❌ 无法映射   |                 —                 |                  —                   |                    涉及本地 Git Worktree 创建、依赖安装等操作，属于本地开发环境配置，**需人类或本地脚本在 Raft 外完成**                    |
|11 |    HRBP `/hr`     |Skill |  ❌ 无法映射   |                 —                 |                  —                   |需要动态修改其他 Agent 的 prompt/系统提示词，Raft 不支持通过 API 或 Agent 修改其他 Agent 配置。**需人类在 [#team]()-config 频道讨论后手动调整**|

**映射统计**：

|      **类别**       |**数量** |                           **说明**                           |
|:------------------|:------|:-----------------------------------------------------------|
|✅ 可直接映射为 Raft Agent|**8 个**|PM、Architect、Story、Tester、Coder、QC-Plan、QC-Develop、CI-Healer|
|      ❌ 无法映射       |**4 个**|              自动 QC、指挥家conduct、环境搭建setup、HRBP               |

在Raft的操作面板建立对应角色，如下图所示：

![](https://mmecoa.qpic.cn/mmecoa_png/0FhfRxcGrrYV5ZsicmUEzV4bicjorrnRia6GIFlZ95OKRMDCO8IeWTQJAXJ4ictIicYFEibdqvC5gCtYvFzv4hndL4QP0YcQNIJZuIvFSPc7tLyeo/640?wx_fmt=png&from=appmsg)

角色Roles

在Raft的操作面板建立对应频道，如下图所示：  

![](https://mmecoa.qpic.cn/mmecoa_png/0FhfRxcGrraXmUGZHZJB5lrs0UCARcV2ba6WMPwGFzQHWPhTqvRSvpHdJQ6ggytNfF3cBGA7buiceSc8BSomI9icCVq2jtCDVbr4BiaEWyNtaI/640?wx_fmt=png&from=appmsg)

频道channels
>
>
> **关键结论**：agents-zone 的 11 个角色中，**8 个 Raft Agent** 分布在 3 个频道（[#planning]()、[#development]()、[#ci]()-cd）中即可覆盖核心功能。规划阶段（需求→架构→故事）合并在 `[#planning]()` 一个频道中，通过 Agent 链式 @mention 实现自动流转，大幅减少人类介入。其余 4 个角色的功能需要由 **人类、Agent prompt 约定或外部工具链** 承担。
>
>

#### **人类参与的交接环节** ####

在完整的协作流程中，以下环节需要人类介入：

|**交接环节**|                   **人类动作**                    |                        **替代方案**                        |
|:-------|:----------------------------------------------|:-------------------------------------------------------|
|  需求输入  |       人类在 [#planning]() 描述需求并 @PM-Agent       |                      — （起点必须是人类）                       |
| 规划阶段流转 |                       —                       |PM→QC→Architect→QC→Story→QC 通过 prompt 约定链式 @mention 自动流转|
|规划→开发交接 |      人类在和独立的AI助手讨论后，手动创建和修改Agent的prompt       |              人类审批是唯一门禁（story.md 决定下游全部行为）              |
| QC 触发  |                       —                       |    通过 prompt 约定 Agent 完成时自行 @QC（替代自动 QC 的 Hook 机制）     |
|  环境搭建  |        人类本地执行 `git worktree add`、安装依赖         |                        本地脚本自动化                         |
|  团队适配  |   人类在 [#team]()-config 讨论后手动修改 Agent prompt   |               等 Raft 支持 API 修改 Agent 配置                |
|  最终审批  |人类在 [#cicd]() 频道中，收到审核 PR 的 task 时，完成审核，并决定是否合并|                 — （线上部署的代码，必须由人类把关决策）                  |

#### **协作机制映射** ####

|**agents-zone 概念**|     **Raft 对应物**     |          **映射策略**           |        **差距与补充**        |
|:-----------------|:---------------------|:----------------------------|:------------------------|
|   故事文件（唯一信息源）    |    Channel Pin 消息    |   将 story.md 内容 pin 在频道顶部   |      需要约定 Pin 使用规范      |
|      QC 门禁       |独立 QC Agent + @mention|      交接时 @QC-Agent 做验证      |   部分需要人工触发，平台无原生 hook   |
|   PROGRESS.md    |   MEMORY.md + 共享文件   |每个 Agent 的 MEMORY.md + 共享进度文件|       需要统一文件格式约定        |
|      有界失败循环      |     Thread 重试计数      |   Agent 在 prompt 中内置计数逻辑    |   依赖 prompt 约束，无系统级强制   |
|     HRBP 元适配     |         人工手动         |       暂无直接对应，需在人类手工完成       |Raft 不支持动态修改 Agent prompt|

**2. Server 空间架构设计**

根据 Raft 聊天式多 Agent 协作的特点，并结合 agents-zone 的开发团队设计，完成了以下多 Agent 聊天式开发团队的 Server 架构设计：

```

Server: "MyProject" (app.raft.build/s/myproject)│├── #planning（规划频道 — 需求/架构/故事一站式完成）│   ├── Agent: PM-Agent│   │   └── Runtime: Claude | Prompt: 基于 prd.md│   │   └── 完成后自动 @QC-Plan 验证，通过后自动 @Architect-Agent│   ├── Agent: Architect-Agent│   │   └── Runtime: Claude | Prompt: 基于 architect.md│   │   └── 完成后自动 @QC-Plan 验证，通过后自动 @Story-Agent│   ├── Agent: Story-Agent│   │   └── Runtime: Claude | Prompt: 基于 story.md│   │   └── 完成后自动 @QC-Plan 验证│   └── Agent: QC-Plan│       └── Runtime: Claude | Prompt: 基于 qc.md│       └── 分阶段验证：PRD 质量 → 架构合理性 → 故事可执行性│├── #development（开发频道 — 核心）│   ├── Agent: Tester-Agent│   │   └── Runtime: Claude Code | Prompt: 基于 tester.md│   ├── Agent: Coder-Agent│   │   └── Runtime: Claude Code | Prompt: 基于 coder.md│   └── Agent: QC-Develop│       └── Runtime: Claude Code | Prompt: 基于 qc.md (--phase=both)│├── #ci-cd（部署频道）│   └── Agent: CI-Healer│       └── Runtime: Claude Code | Prompt: 基于 follow.md│├── #team-config（团队配置频道 — 人类专用）│   └── 用于讨论 Agent 配置调整（替代 HRBP 功能）│└── Computer: dev-machine    └── Daemon 和 runtime 运行

```

**频道设计逻辑**：

将需求、架构、故事拆分合并到 `[#planning]()` 一个频道，核心原因是 **这三步是严格串行的规划链**，共享同一个 QC Agent（QC-Plan），且都使用 Claude 推理型 Runtime。合并后的关键优势：

1）. **Agent 链式自动流转**：通过 prompt 约定，PM-Agent 完成 PRD 后自动 @QC-Plan 验证，QC 通过后自动 @Architect-Agent，依次类推。人类只需在 [#planning]() 中发起第一个 @PM-Agent，整个规划链自动运行到 story.md 完成

2）. **减少人类介入**：从原来的每步手动 @Agent（3 次触发 + 3 次 QC 触发 = 6 次人类操作）降为仅 1 次触发

3）. **上下文天然共享**：PM 的 PRD、架构师的 ARCHITECTURE.md 都在同一频道中，下游 Agent 可以直接引用上游的 Pin 消息，无需跨频道传递

4）. **QC Agent 合并**：QC-Plan 一个 Agent 即可覆盖 PRD/架构/故事三阶段的验证，避免创建 3 个高度重复的 QC Agent

**Runtime 选择策略**：

|       **角色**       | **推荐 Runtime**  |       **理由**        |
|:-------------------|:----------------|:--------------------|
|PM、架构师、故事编写者、QC-Plan|  Claude (推理型)   |  需要深度分析和推理，不需要执行代码  |
|  测试员、编码员、QC-Code   |Claude Code (执行型)|  需要读写文件、运行测试、执行构建   |
|     CI/CD 自愈器      |Claude Code (执行型)|需要执行 shell 命令和 git 操作|

**3. 协作流程设计**

#### **Thread 与 Task 的使用约定** ####

在 Raft 中，**Thread** 是从频道消息展开的对话线程，**Task** 是可以被 Agent claim 的工作单元。两者是 Raft 协作的基础原语，在本方案中的使用约定如下：

|  **原语**  |         **创建时机**         |     **创建者**      |                    **用途**                     |
|:---------|:-------------------------|:-----------------|:----------------------------------------------|
|**Thread**|     Agent 开始处理一项工作时      |    Agent 自动展开    |隔离工作过程，保持主频道干净。Agent 的中间思考、文件操作、调试过程都在 Thread 内|
| **Task** |人类或上游 Agent @mention 派发任务时|被 @mention 的消息自动生成|    Agent 必须 claim Task 才能开始工作，防止多 Agent 冲突    |
| **Pin**  |      Agent 完成阶段性产出时      |Agent 将产出 Pin 到频道 |            作为下游 Agent 的正式输入（唯一信息源）            |

#### **单 Story 完整流程** ####

我们以一个单 Story 完整的功能开发流程在 Raft 上运转为例进行说明：  

![](https://mmecoa.qpic.cn/sz_mmecoa_png/0FhfRxcGrrbaib1O3rguaUKsxBdubvgAxFqHnfmKZ0Su2k9R8qqIh9UrHicFkSxtxI2FHiaslYXtgP8UibP47reLv5mtGAMptP7Qcqjt0gpnb1Q/640?wx_fmt=png&from=appmsg)

单story开发流程
>
>
> 说明：实线为正常流转，虚线为 QC 验证失败时打回上一个 Agent 修改（不继续流转）。每个 Agent 在独立 Thread 中工作，主频道只保留交接消息。
>
>

#### **多 Story 调度策略** ####

当规划阶段产出多个 Story（如 story-1.md、story-2.md、story-3.md）时，[#development]() 中如何调度？

### 推荐策略：串行为主，有限并行

|        **策略**        |                         **做法**                          |      **适用场景**      |      **风险**      |
|:---------------------|:--------------------------------------------------------|:-------------------|:-----------------|
|**串行执行**<br/><br/>（推荐）|           完成 story-1 的全部 TDD 流程后，再开始 story-2            |Story 之间有依赖、或团队刚开始使用|     低风险，易调试      |
|       **有限并行**       |多个 Story 同时在 [#development]() 中运行，每个 Story 在独立的 Thread 链中| Story 之间完全独立、无文件冲突 |需依赖 Task Claim 防冲突|
|      **多频道并行**       |           为每个 Story 创建独立的 [#dev]()-story-N 频道           |     大型项目、多人协作      |     频道管理成本高      |

**串行执行的具体流程**：

```

人类审批 story 列表后：Story-1:  人类: @Tester-Agent 请基于 story-1.md 写测试  → Tester → QC → Coder → QC → CI-Healer → PR  → Story-1 完成 ✅Story-2:  人类（或 QC-Develop 自动）: @Tester-Agent 请基于 story-2.md 写测试  → Tester → QC → Coder → QC → CI-Healer → PR  → Story-2 完成 ✅...依此类推

```

**有限并行的约束条件**：

如果多个 Story 同时在 [#development]() 中运行，必须满足以下条件：

1）. **Story 之间无文件冲突**：不同 Story 修改不同的文件集合。如果有交叉，Task Claim 机制会阻止第二个 Agent 修改已被 claim 的文件，但冲突解决仍需人工介入

## 2.） 每个 Story 使用独立的 git 分支 ：如 feat/story-1 、 feat/story-2 ，通过分支隔离代码变更

3）. **Thread 命名约定**：每个 Thread 标题包含 Story 编号（如 `[S1] 测试编写`、`[S2] 代码实现`），方便人类区分

```

#development 频道（有限并行模式）：│ 时间线 →││ Story-1: [S1]Tester ──Thread──> [S1]QC ──> [S1]Coder ──Thread──> [S1]QC ──> CI│ Story-2:      [S2]Tester ──Thread──> [S2]QC ──> [S2]Coder ──Thread──> [S2]QC ──> CI││ ※ Story-2 可以在 Story-1 的 Coder 阶段就开始 Tester 阶段│ ※ 前提：两个 Story 修改的文件不重叠│ ※ Task Claim 机制确保同一文件不会被两个 Agent 同时修改

```

#### **CI/CD 频道的上下文传递** ####

CI-Healer 需要知道仓库地址、分支名、CI 系统等信息才能工作。信息来源有三个层级：

|        **层级**        |         **机制**         |                         **内容**                          |        **配置时机**         |
|:---------------------|:-----------------------|:--------------------------------------------------------|:------------------------|
| **Agent MEMORY.md**  |    CI-Healer 的持久记忆     |仓库 URL、CI 系统类型（GitHub Actions/GitLab CI）、CI 配置文件路径、常见修复模式|Server 初始化时由人类写入，一次配置长期有效|
|**[\#planning]() Pin**|        规划阶段的产出         |           ARCHITECTURE.md 中的仓库结构、部署流程、环境变量约定            |     每次规划链完成后自动 Pin      |
|       **触发消息**       |@CI-Healer 的 @mention 消息|               本次的具体分支名、Story 编号、关联的 PR 编号               | 每次触发时由 QC-Develop 或人类附带 |

**推荐的 MEMORY.md 模板**（Server 初始化时写入 CI-Healer 的 Memory）：

```

## 项目信息- 仓库: https://github.com/{org}/{repo}- 默认分支: main- 开发分支: dev- CI 系统: GitHub Actions- CI 配置: .github/workflows/ci.yml- 部署环境: staging → production## 常用命令- 查看 CI 状态: gh run list --branch {branch}- 查看失败日志: gh run view {run-id} --log-failed- 重新触发: gh run rerun {run-id}## 修复模式- lint 失败: 运行 npm run lint:fix 并提交- 类型检查失败: 检查 tsconfig 和新增类型定义- 测试失败: 先本地复现，区分环境问题和代码问题

```

这样 CI-Healer 在每次被触发时，从 MEMORY.md 获取项目级信息（仓库、CI 系统），从触发消息获取任务级信息（分支、Story），两者结合即可自主工作。

**4. 频道设计决策**

agents-zone 原始设计中，需求（/prd）、架构（/architect）、故事（/story）是三个独立的 Skill，由不同的斜杠命令分别触发。映射到 Raft 时，有两种频道方案：

|      **方案**       |                       **频道数**                       |    **人类操作次数**     |            **问题**            |
|:------------------|:----------------------------------------------------|:------------------|:-----------------------------|
|      ❌ 三频道分离      |[\#requirements]() + [#architecture]() + [#stories]()|6 次（3 次触发 + 3 次 QC）|   人类成为"人肉路由器"，在频道间来回跳转传递产物   |
|✅ 合并为 [#planning]()|                  1 个 [#planning]()                  |1 次（仅首次 @PM-Agent） |Agent 链式 @mention 自动流转，人类可全程旁观|

**合并可行的三个前提**：

1）. **严格串行**：PRD → 架构 → 故事是固定顺序，不存在并行或乱序场景

2）. **同质 Runtime**：三个 Agent 都用 Claude 推理型，无需不同执行环境

3）. **QC 逻辑同构**：验证 PRD 质量、架构合理性、故事可执行性，本质都是"文档审核"，一个 QC-Planning Agent 通过不同的 prompt 阶段即可覆盖

**信息流一致性保障**：合并频道不意味着打破单向信息流。通过 prompt 约定：

• 每个 Agent 只读取上游 Agent 的 Pin 产物，不读取其他 Agent 的对话内容

• 每个 Agent 在独立的 Thread 中工作，主频道只展示最终产出

• QC-Planning 在每个阶段独立验证，验证失败则打回，不继续流转

**保留分离的场景**：如果团队规模大、需求和架构由不同人类负责、或需要对频道做权限隔离（如需求频道对开发者不可见），则应保持三频道分离方案。

**5. 关键挑战与应对策略**

|    **挑战**    |              **根因**               |                                             **应对策略**                                             |
|:-------------|:----------------------------------|:-------------------------------------------------------------------------------------------------|
| **缺乏原生流水线**  |        Raft 是聊天模型，不是流水线模型         |                通过 prompt 约定 Agent 完成后链式 @mention 下一个 Agent，模拟流水线。规划阶段和开发阶段均可自动流转                 |
| **QC 触发时机**  |        平台无 Hook/Webhook 机制        |                  **约定**<br/><br/>：每个 Agent 完成后必须在消息中 @QC Agent；通过 prompt 硬编码该行为                  |
|  **跨频道触发**   |[\#development]() 完成后需通知 [#ci]()-cd|                QC-Develop 验证通过后在消息中 @CI-Healer 并附带分支和 Story 信息；跨频道 @mention 即可触发                 |
|  **信息回流风险**  |         Channel 天然支持双向对话          |                        通过 Agent 系统提示词严格约束"只读上游 Pin 产物，不读取其他 Agent 的对话内容"                         |
|**多 Story 调度**|    多个 Story 产生多个 Task，需协调执行顺序     |          **串行为主**<br/><br/>：完成一个 Story 的 TDD 全流程后再开始下一个；条件满足时可有限并行（参见 5.3 多 Story 调度策略）          |
|   **成本控制**   |      8 个 Raft Agent 同时运行成本高       |**按阶段激活**<br/><br/>：规划阶段只启动 [#planning]() 的 4 个 Agent，开发阶段才启动 [#development]() 的 3 个 Agent。不需要全量常驻|
|  **上下文窗口**   |             长对话导致信息丢失             |                    利用 MEMORY.md 做阶段性总结；Thread 隔离减小单次上下文负担；必要时做 Session Reset                     |
|**HRBP 功能缺失** |     Raft 不支持动态修改 Agent prompt     |               短期：人工在 [#team]()-config 频道讨论后手动更新 Agent 配置；长期：等平台支持 API 修改 Agent 配置                |

**6. 分阶段实施**

### Phase 1：最小可用团队

只部署核心 TDD 循环：

```

#development 频道：  - Tester-Agent（Claude Code）  - Coder-Agent（Claude Code）  - 人类作为 QC、Story Writer 和流程调度

```

验证 Task Claim 机制是否能有效防止冲突，Thread 隔离是否足够清晰。人类手动完成故事拆分（story.md），直接在 [#development]() 中工作。

### Phase 2：加入规划链和 QC

```

新增：  - #planning 频道：PM-Agent、Architect-Agent、Story-Agent、QC-Plan  - #development 新增：QC-Develop  - 人类只需在 #planning 触发一次，规划链自动流转

```

验证 Agent 链式 @mention 自动流转的可靠性，QC Agent 是否能真正发现质量问题。验证故事拆分质量对下游开发的影响。

### Phase 3：加入 CI/CD

```

新增：  - #ci-cd 频道：CI-Healer  - 人类退到审批角色（审核 PR、处理阻塞）

```

验证 CI 自愈器能否自动修复常见问题。至此 8 个 Raft Agent 全部部署，人类全流程仅需 3 次操作。

---

### 06

### 趋势与总结

**1. 多 Agent 到 Meta-Harness**

Meta-Harness 解决的是"管理 Agent 的管理层"问题 — 统一接入异构 Agent、安全隔离、调度编排和可观测审计。五个核心维度：

1）. **统一接入**：一个界面管理不同 Runtime 的 Agent

2）. **安全隔离**：沙箱会话 + 策略控制权限

3）. **调度编排**：并行/协作/辩论/收敛

4）. **可观测审计**：追踪谁让哪个 Agent 改了什么、花了多少配额

5）. **跨平台互通**：Agent 不被锁定在单一平台

**2. 演进及实践建议**

未来趋势是 Agent 能够从自身的成功和失败中自动学习，无需人工干预，拥有**自进化能力**。

Raft 已支持同一 Server 内混用不同 Runtime，**混合 Runtime 优化**为成本与能力的平衡提供了可能 — 用 Claude 做需要深度推理的 QC，用更快更便宜的模型做简单的代码生成。随着模型生态的丰富，Runtime 选择将变成 Agent 团队设计中的核心决策维度。

|**阶段**|                             **建议**                              |
|:-----|:----------------------------------------------------------------|
|**短期**|在现有工具链（如 Claude Code）中引入 agents-zone 的 TDD 红绿灯分离和 QC 对抗验证，不依赖外部平台|
|**中期**|           在 Raft 上分阶段方案搭建 Agent 团队，验证多 Agent 协作的实际效果            |
|**长期**|            关注 Meta-Harness 的成熟度，准备跨平台迁移能力，避免被单一平台锁定             |

---

**3. 总结**

1）. **多 Agent 协作模式可按三个维度分类**：组织拓扑（聊天/看板/调度/流水线）、协调机制（中心化/去中心化/混合）、任务分解（功能/阶段/数据）。没有"最好"的模式，只有最适合特定场景的模式。

2）. **平台提供协调原语，团队设计保证质量**：Raft 提供了 Channel/Thread、Task Claim、Memory、Daemon、混合 Runtime 等协作原语，但质量门禁（QC 对抗验证）需要在 Agent 团队层面设计，平台本身不提供。

3）. **agents-zone 的七大原则构成了生产级 Agent 团队的设计准则**：单向信息流、QC 门禁、唯一信息源、有界失败循环、跨会话状态、反串通 TDD、HRBP 元适配。这些原则独立于平台，可以在任何协作工具上实施。

4）. **在 Raft 上构建 agents-zone 式团队是可行的，但需要填补映射差距**：最大的差距是缺乏原生流水线和 QC Hook，需要通过 @mention Agent 和任务链约定 rules/chain-flow.md 来弥补。推荐分三个阶段逐步实施。

[![](https://mmecoa.qpic.cn/sz_mmecoa_jpg/0FhfRxcGrrY0BibGoPrskRsYwwpLfLo7CFIBPw4IhpHmHibHgWRnmy0RC4qhmUh0EqbwE9bWZt4I6w0TtqNrCm6nsnib3wib645CDT4KaMGUerw/640?wx_fmt=jpeg&from=appmsg)](https://mp.weixin.qq.com/s?__biz=MzU3NTY3MTQzMg==&mid=2247564658&idx=2&sn=beb376784b0b221d311e185fa0bda8d4&scene=21#wechat_redirect)

