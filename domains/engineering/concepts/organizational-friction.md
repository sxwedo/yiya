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
sources:
  - ../references/ai-coding-pm-paradigm.md
  - ../../../raw/articles/货拉拉技术/个人提效，攒不成组织提效：货拉拉 AI Coding 落地实践.md
---

# Definition

**组织摩擦**（腾讯健康 / 腾讯云开发者）是需求在协作里产生的、不直接创造业务价值的等待与消耗：排期、资源协调、跨团队、联调、返工。它不集中在单环节，随流转累积。

公式：

**组织效率 = 价值创造时间 /（价值创造时间 + 组织摩擦时间）**

价值创造：需求分析、方案、实现、测试。摩擦：等人、等环境、等对齐。四个真实案例的共同点：真正编码很短，绝大部分周期耗在协作上。AI Coding 提升的是编码段；端到端体感不变，是因为分母里的摩擦被放大了。

观测：中位数可以改善，P85 仍顽固停在三个双周迭代以上——复杂需求的承诺线没动。个体产出和项目交付分化。

治理重点从「研发测要多久」转到「等待和协同去哪儿了」。要可观测的项目语义（阶段、责任、进入下一阶段的条件），再谈数据可信和瓶颈。PM 侧怎么把感知建成 Skill、人去推动，见 [PM 效率治理](./pm-efficiency-governance.md)。

货拉拉 AI Coding（万深高）：千人团队五个卡点——用法各自为政、重复整理项目资料、风格不统一、说不清提升了多少、成本风险没人管。先抬 80% 下限：统一工作台 AiBox 下发 Rules/Skills/Commands/MCP。再走 Spec：OpenSpec 的 delta + Superpowers 的 Skill；自己的四件事是需求系统接入、spec 自动召回、用完打分回写、全链路 trace。度量：AI 代码占比只认合入主干且带三层 hash 签名；FPY 看 v1 有多少活到 commit——测的是生成质量不是代码质量，高也可能是人懒得改。三个坑：≤2 步单文件走补全，多步才 Agentic；上下文按场景召回，加规范先回答何时注入、命中率；副 Agent 独立回源码打幻觉，不共用主 Agent 上下文。合入后存活/返工/变更失败还没进账。

## Related

- [PM 效率治理](./pm-efficiency-governance.md)
- [Coding Agent Workflow](../../agents/concepts/coding-agent-workflow.md)
- [OpenSpec](../../agents/entities/openspec.md)
- [Software Factory Cost Equation](../../agents/concepts/software-factory-cost.md)
