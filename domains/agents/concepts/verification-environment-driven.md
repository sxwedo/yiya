---
type: Concept
title: "验证与环境驱动"
description: "主战场不在生成：编码只占研发链路两三成，AI 边界由「可验证的反馈」决定；把内部工作流改造成有反馈可验证的环境（分层验证、约束/假设分离、环境即代码），交付物从 diff 升级为可复现的验证路径。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-26T17:30:00Z }
related:
  - coding-agent-workflow
  - delivery-harness
  - harness-runtime-layer
  - evidence-gate
  - eval-driven-development
  - requirement-as-delivery
sources:
  - ../../../raw/articles/CnSharp AI研究/阿里巴巴《AI Native 研发范式实践手册》解读.md
---

# Definition

**验证与环境驱动**（阿里《AI Native 研发范式实践手册》，2026-10）：SWE-bench Verified 两年从不足 30% 涨到约 80%，但研发效率没有同比涨——生成代码只占研发链路 20–30%（阿里口径），按阿姆达尔定律把三成的环节压到零，整体收益仍有明显上限；一堆 AI 写完的代码堵在交付流水线上，总吞吐没变。瓶颈滑向需求理解、环境构建、测试验证、发布运维。

底层规律：**AI 优先解决「反馈公开、验证可规模化」的问题**——coding 和数学先破，不是因为简单，而是少有的「对错机器自己能判」的领域；企业内部答案藏在内部系统里，验证一次成本高。所以 AI 的边界由可验证反馈确定，工程上该做的是**主动把内部研发工作流改造成有反馈、可验证的环境**。主战场在验证与环境，不在让 AI 更会写代码。

对照：[Delivery Harness](./delivery-harness.md) 是模型外交付控制面（合同/边界/证据门）；[Harness 运行时层](./harness-runtime-layer.md) 管 Loop 外运行时；本页管「为什么投资要流向验证与环境，以及环境长什么样」。

## Mechanism

1. **单点自动化率 ≠ 端到端吞吐。** 万有无界 auto bug fix 比例 60%+，bug 日清率只从 53% 到最高 63%——触发靠人、校验靠人，链路里的人工节点吃掉收益。电气化类比：用大电动机替换蒸汽机但保留传动轴，就是「把 AI 塞进现有 workflow、保留人工节点」的过渡形态；真正的跃升在单元驱动——每台机器独立电机、按生产流程重组工厂。workflow 嵌入有现实价值，但方向是围绕 Agent 重构流程。
2. **分层验证体系。** 秒级反馈（编译、类型、单测）给 Agent 高频自迭代；分钟级（集成、契约、浏览器自动化）覆盖更真实行为；人工只留给机器判不了的：业务价值、体验、伦理。Agent 频繁等人确认，通常不是模型不行，是缺秒级和分钟级验证层。
3. **Spec 分离约束与假设。** 数据不出域、接口向后兼容、延迟阈值是**约束**——长期保存、尽量自动检查；单体还是微服务、用什么缓存是**假设**——允许 AI 按实现与运行反馈自己调整。Spec 划「什么算对」的边界，不规定实现路径。混着写的后果：AI 要么死守过时决策，要么擅自推翻硬约束。
4. **仓库 ≠ 项目。** 交给 Agent 的通常只是仓库，不是能跑的项目：工具链、关联仓库、配置、数据库、外部服务、排障入口分散在个人电脑与个人经验里。同一任务换一个 Agent 实例就重复三次环境失败，探查成果不复利。解法是**可执行的环境定义**（运行时、依赖、网络边界、验证方式声明成代码，可 review、可版本化）；状态边界放在任务上（任务内保留排障现场，结束回收）；通过验证的配置/数据/服务桩是**候选基线**——销毁实例、从候选基线重建、跑同一组验证，结果一致才算「能复现」。交付物从一份 diff 升级为**一条可以重新运行和检查的验证路径**。环境反馈也是接口：明确的拒绝记录比长时间超时有用，因为它直指缺哪项处理——不要给 Agent 沉默的失败。
5. **容器 ≠ Sandbox。** 容器只回答「在哪跑」；生产级 Sandbox 还要答：能执行哪些命令、能访问哪些地址、用什么身份、出错保留什么、何时销毁。默认拒绝出站（放大提示注入与依赖投毒的是网络通道）、凭据只给占位值（出站代理按域名+路径+方法注入认证头，Agent 永远看不到真凭据，快照不带凭据状态）、服务端 TTL 回收孤儿实例。

## Boundaries

不是 Harness 页（四职责与程序性/模型推理机制见 [Harness 运行时层](./harness-runtime-layer.md)）；不是度量页（三层指标与归因链见 [评测驱动开发](../../engineering/concepts/eval-driven-development.md)）；身份权限与高风险门禁见 [自主性分层](./autonomy-layering.md) 与 [Evidence Gate](./evidence-gate.md)。案例数字（策略交付 10 天→2 天、缺陷率 −70%）是团队自述，无独立评测。

## Related

- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Delivery Harness](./delivery-harness.md)
- [Harness 运行时层](./harness-runtime-layer.md)
- [Evidence Gate](./evidence-gate.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [需求即交付](./requirement-as-delivery.md)
