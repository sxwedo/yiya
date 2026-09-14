---
type: Concept
title: "组织摩擦"
description: "需求流转中不直接创造业务价值的等待与消耗。AI 压缩编码后，摩擦占比被放大：个体提效不等于组织提效。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - pm-efficiency-governance
sources:
  - ../references/ai-coding-pm-paradigm.md
---

# Definition

**组织摩擦**（腾讯健康 / 腾讯云开发者）是需求在协作里产生的、不直接创造业务价值的等待与消耗：排期、资源协调、跨团队、联调、返工。它不集中在单环节，随流转累积。

公式：

**组织效率 = 价值创造时间 /（价值创造时间 + 组织摩擦时间）**

价值创造：需求分析、方案、实现、测试。摩擦：等人、等环境、等对齐。四个真实案例的共同点：真正编码很短，绝大部分周期耗在协作上。AI Coding 提升的是编码段；端到端体感不变，是因为分母里的摩擦被放大了。

观测：中位数可以改善，P85 仍顽固停在三个双周迭代以上——复杂需求的承诺线没动。个体产出和项目交付分化。

治理重点从「研发测要多久」转到「等待和协同去哪儿了」。要可观测的项目语义（阶段、责任、进入下一阶段的条件），再谈数据可信和瓶颈。PM 侧怎么把感知建成 Skill、人去推动，见 [PM 效率治理](./pm-efficiency-governance.md)。

## Related

- [PM 效率治理](./pm-efficiency-governance.md)
