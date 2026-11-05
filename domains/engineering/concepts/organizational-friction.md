---
type: Concept
title: "组织摩擦"
description: "需求流转中不直接创造业务价值的等待与消耗。AI 压缩编码后，摩擦占比被放大：个体提效不等于组织提效。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - pm-efficiency-governance
  - coding-agent-workflow
  - openspec
  - software-factory-cost
  - requirement-as-delivery
sources:
  - ../references/ai-coding-pm-paradigm.md
  - ../../../raw/articles/货拉拉技术/个人提效，攒不成组织提效：货拉拉 AI Coding 落地实践.md
  - ../../../raw/articles/CnSharp AI研究/阿里巴巴《AI Native 研发范式实践手册》解读.md
  - ../../../raw/articles/Sashank Gondala/Building an AI-native engineering org.md
---

# Definition

**组织摩擦**（腾讯健康 / 腾讯云开发者）是需求在协作里产生的、不直接创造业务价值的等待与消耗：排期、资源协调、跨团队、联调、返工。它不集中在单环节，随流转累积。

公式：

**组织效率 = 价值创造时间 /（价值创造时间 + 组织摩擦时间）**

价值创造：需求分析、方案、实现、测试。摩擦：等人、等环境、等对齐。四个真实案例的共同点：真正编码很短，绝大部分周期耗在协作上。AI Coding 提升的是编码段；端到端体感不变，是因为分母里的摩擦被放大了。

观测：中位数可以改善，P85 仍顽固停在三个双周迭代以上——复杂需求的承诺线没动。个体产出和项目交付分化。

治理重点从「研发测要多久」转到「等待和协同去哪儿了」。要可观测的项目语义（阶段、责任、进入下一阶段的条件），再谈数据可信和瓶颈。PM 侧怎么把感知建成 Skill、人去推动，见 [PM 效率治理](./pm-efficiency-governance.md)。

货拉拉 AI Coding（万深高）：千人团队五个卡点——用法各自为政、重复整理项目资料、风格不统一、说不清提升了多少、成本风险没人管。先抬 80% 下限：统一工作台 AiBox 下发 Rules/Skills/Commands/MCP。再走 Spec：OpenSpec 的 delta + Superpowers 的 Skill；自己的四件事是需求系统接入、spec 自动召回、用完打分回写、全链路 trace。度量：AI 代码占比只认合入主干且带三层 hash 签名；FPY 看 v1 有多少活到 commit——测的是生成质量不是代码质量，高也可能是人懒得改。三个坑：≤2 步单文件走补全，多步才 Agentic；上下文按场景召回，加规范先回答何时注入、命中率；副 Agent 独立回源码打幻觉，不共用主 Agent 上下文。合入后存活/返工/变更失败还没进账。

阿里手册（2026-10）给同一现象补了组织理论层：康威定律（跨团队沟通贵）、人月神话（沟通随人数指数涨）、Taylor 分工（注意力稀缺）、经理评价制（产出不可观测）——经典组织设计的隐含前提全是「人形约束」，AI 每条都是反面（无沟通衰减、不需激励、无 context switching 成本）。组织不再能被 org chart 描述，更像 **execution graph**：人、Agent、数据、权限、工具、审批都是节点，核心问题从 ownership（谁拥有）转向 routing + governance（任务怎么流转、风险怎么控）；若执行单元变成「任务+上下文+权限+工具」且依赖资产化，reorg 不必重建人际信任网络——**组织适应速度本身成为红利**。**人既是瓶颈也是兜底**：需求不完整、代码没注释、API 不一致，过去靠「走过去问老王」悄悄补上；Agent 接管越多，这些隐性补丁的洞越显形——不是 AI 搞坏了流程，是把人默默兜住的缺口暴露了。转型的真实代价是**蒸馏焦虑**：员工每写一份 SOP 都在导出知识，结构上接近自我替代；员工不说，Harness 就建不成——缓解靠明确的红利分享、真实的接住机制、诚实分类，以及 KPI 跟着「判断比执行值钱」改，口头承诺不算。配套：专业岗合并、3–5 人小队冲具体问题、管理者新增意图教练/身份重建/虚无对抗。

Sashank Gondala（FurtherAI 九个月，2026-10）是这套理论的正面实证：人均日合入变更 5 倍、revert 率 <0.5%。路径不是发个 agent 就完事，而是**沿交付链逐环重建**：代码（3 月）→ 测试（4 月，含测试变更 15%→91%）→ AI 先审 99% 的变更（人只审需判断的）→ CI 并行只跑受影响测试（17 分钟跑 20 倍）→ ClaudeTag 自动接 bug 工单（60% 工单由它立）→ 8 月把只有工程师知道的规则固化成 21 个 Python check（每次提交与 PR 都跑、失败打印修法）， Tribal knowledge 变成程序门禁后低风险变更可无人合入（已达 1/3）→ 9 月 Slack 代码频道：任何人描述变更让 agent 开 PR，设计师自 8 月合了约 50 个变更。代价诚实：夏天工程力全砸测试与工具，人均客户可见变更 17–30/月，9 月才跳到 45。新瓶颈 = 决定做什么：规划+review 占比从 40% 涨到 70%（阿姆达尔又一次）；解法是把 ownership 下推给工程师——初级=能用 agent 且知道它错了，高级=自审自规划，staff=接模糊问题、做取舍、拥有那个说明「有没有用」的数字；管理者要「be in the work」。

## Related

- [PM 效率治理](./pm-efficiency-governance.md)
- [Coding Agent Workflow](../../agents/concepts/coding-agent-workflow.md)
- [OpenSpec](../../agents/entities/openspec.md)
- [Software Factory Cost Equation](../../agents/concepts/software-factory-cost.md)
- [需求即交付](../../agents/concepts/requirement-as-delivery.md)
