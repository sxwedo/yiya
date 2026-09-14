---
type: Concept
title: "Agent 自进化飞轮"
description: "评测→记忆→落地→控制四齿咬合：信号进治理、治理进改配套、改完再评、人当教练。瓶颈在衔接，评测失真则飞轮反转。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - delivery-harness
  - eval-driven-development
  - harness-self-improvement
  - playbook-feedback-loop
  - agentloop
sources:
  - ../references/agent-self-evolution-flywheel.md
  - ../../../raw/articles/腾讯技术工程/Agent开始“自我进化”：会出题、会反思，还会自己长出新技能.md
  - ../../../raw/articles/阿里云云原生/让 Agent 越用越准、成本越来越低：AgentLoop 的 Agent 经验自进化闭环.md
---

# Definition

**Agent 自进化飞轮**（腾讯技术工程）针对的不是「模型不够强」，而是上线半年仍在犯三个月前的错——流量喂进去，经验没攒下来。评测、记忆、Self-Improve 在多数团队是拆散的：分数进周报不进 Skill；向量记忆噪声高被关掉；自动生成的 Skill 无筛选、无回滚。每块都能说「我做了」，合起来没有复利，因为**环节之间的数据通路是断的**。

先对齐「改什么」。Artifacts 迭代（Self-Refine、多改几版输出）任务结束人没变，是打草稿。**Harness 自改进**改记忆 / Skill / Prompt / 工具 / 工作流，跨会话生效，即时、可回滚，是当前主战场（文中落地案例：迭代 −70%、Token −80%+，参数未动）。Model 进化把经验写进权重，持久但贵、风险大，仍偏研究。日期格式常错：本次多试几次 ≠ 写一条 Skill ≠ 微调模型。绝大多数团队写 Skill 就够。

四齿：

1. **信号（评测）** — 不只上线前打分。三重职责：方向指引、更新前门控、经验筛选（这次值不值得存）。失真的正反馈会让 Agent 自信地学错，加速开往悬崖。所以 **评测可信度 > 系统复杂度**。弱评估器有系统性偏差（偏好长文、编号、表面正确）；只评最终答案会漏幻觉碰巧对、工具冗余、推理错但记住答案。日常粗粒度筛失败，失败 case 再细粒度归因。
2. **积累（记忆）** — 核心不是存储，是治理：版本、主动遗忘、冲突、溯源。堆向量召回噪声，飞轮第二齿就卡死。见 [历史不等于记忆](./history-vs-memory.md)。
3. **落地** — 知道 ≠ 改好。候选修复经门控/灰度；线上失败回流当下一轮种子。半自动，不是静默改生产。
4. **控制** — 人当教练和裁判，防隐蔽累积偏移；冷启动第一圈须人推。

腾讯另一文把研究侧划成三路：经验/Skill 外挂（不改权重）、RL 写进权重、零数据互出题（Agent0 等）。被低估的是「总结者」本身该不该训练。

AgentLoop 把同一飞轮落成产品：Trace → 清洗组装 Trajectory → 挖有效路径/失败模式/工具约束 → Recall Skill 注入下次运行。自进化**不改权重**；模型推理、工具执行、知识库给事实，经验库判断优先做什么、哪条路易失败、如何恢复。上线前评测集覆盖不了真实新表达，人工看 Trace 会先成为瓶颈。

原则：闭环价值在箭头（衔接），不在单点先进。评测必须流进记忆和 Skill；更新必须再被评测验证。与 [Harness 自改进](./harness-self-improvement.md)（改哪一层）、[Playbook 反馈闭环](./playbook-feedback-loop.md)（一次失误变全队默认）、[Delivery Harness](./delivery-harness.md)（修复写回合同）同族。

## Related

- [Delivery Harness](./delivery-harness.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [AgentLoop](../entities/agentloop.md)
