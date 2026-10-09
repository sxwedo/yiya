---
type: Concept
title: "需求即交付"
description: "别在旧 SDLC 里插 AI。人当翻译官是因为上下文没流通。OK 平台九阶段：需求质量第一道门，Spec 替代口头传递。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-09T10:00:00Z }
related:
  - coding-agent-workflow
  - organizational-friction
  - agent-self-evolution-flywheel
  - delivery-harness
  - evidence-gate
  - plan-with-code
sources:
  - ../../../raw/articles/腾讯技术工程/别只盯着AI Coding，真正的变化发生在整个研发流程.md
---

# Definition

**需求即交付**（腾讯技术工程 / OK 平台，danteyang）：编码工具已经很强，需求仍不能直接丢给 AI，是因为背景在人脑子里，模型每次失忆。人当翻译和决策官、AI 当执行者，编码会变快，但问的是：翻译和决策是不是只有人能做？零基追问：**这个环节是因为人的局限才存在，还是问题本身需要它？** 前后端对协议、需求评审会、等联调——补偿的是人做不到同时持有整条上下文。在旧流程每个环节插一个助手，只是把旧流程加速一遍。真正要改的是流程结构。

OK 平台把这收成「用户提交需求描述，Agent 走完评审→匹配仓库→技术方案→编码→CR→部署」。安全中心 2026-04～06：254 条需求，AI 端到端 172 条（68%）；51% 在 2 小时内完成。传统中位 3～5 个工作日。转人工的是策略、数据、超出能力范围的。

**瓶颈在需求侧。** 需求糊，流水线是沙地上建楼。评审 AI 不做清单式完整性检查，而做访谈：先复述意图、顺着上一轮挖、极糊时给 2～3 种解释让人选、四项必须明确（做什么 / 为谁 / 关键规则 / 验收）。可行性七维打分，≥60 才进开发。

技术方案当施工图，不当提纲：按依赖图自底向上，不按重要性；垂直切片，每步可编译可验证；一步超过约 5 个文件或跨两个子系统就拆；每 2～3 步插检查点。关键决策先找茬。不确定的收到「待确认」，不让模糊进开发。

编码三条纪律：简单优先（注入后架构过复杂类问题约降一半）；只改方案列出的文件，范围外记「发现但不碰」；关键路径先失败测试再实现。审查：**改善即批准**——关键问题（bug / 安全 / 越权）才阻塞；风格建议必须给通过。安全六条（登录态 UID、鉴权中间件、参数化 SQL、无密钥入仓、协议边界校验、资源归属）是硬底线。

人升级成决策者和知识供给者：路径权衡、隐性上下文、偏离时干预、判断该不该做。行级 Review 升到意图级。知识飞轮：平台按需求类型/仓库**前置强注入**（注入率 >90%），不靠模型自己知道该查；蒸馏只留跨需求可复用结论，带置信度；TTL + `knowledge_feedback` + 主干合入刷新架构，防过期污染。

四象限：直接做（CRUD、定位清楚的 Bug、单仓）；人机协同（审批 / 拆模块）；暂不支持（跨仓、大重构、新中间件、资金与核心安全、需灰度迁移）。

组织提效不是每人编码 +50%。角色间等待可占周期 40～60%。用同一份 Spec 在流水线上流转，等待不是被压缩，是消失。约 85% 团队还停在个人编码加速：写得快、改得多。

对照：[Coding Agent Workflow](./coding-agent-workflow.md) 是人怎么驾驭 coding agent 做软件；本页是整条研发生成式重建。[组织摩擦](../../engineering/concepts/organizational-friction.md) 说编码变快后摩擦被放大；这里用端到端门禁把摩擦环节拆掉。[Agent 自进化飞轮](./agent-self-evolution-flywheel.md) 管评测→记忆→落地；本页的飞轮是交付蒸馏 + 强注入。

## Boundaries

不是又一个 AI 编程工具评测，不是 OK 平台产品百科。不是把九阶段拆成九张页。资金/跨仓/大重构不在「直接做」象限。数据来自文中试点，不是全公司基线。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [组织摩擦](../../engineering/concepts/organizational-friction.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Delivery Harness](./delivery-harness.md)
- [Evidence Gate](./evidence-gate.md)
- [用代码做计划](./plan-with-code.md)
