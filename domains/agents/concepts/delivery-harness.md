---
type: Concept
title: "Delivery Harness"
description: "模型外的交付控制系统：合同锁事实、边界限半径、证据控跃迁、修复写回默认规则。上限不是生成速度，是质量秩序。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - agent-oncall
  - llm-as-judge-runtime
  - plan-mode-multiagent
  - software-factory-cost
  - multi-harness-control-plane
  - coding-agent-workflow
  - grok-bot
  - agent-self-evolution-flywheel
  - evidence-gate
  - harness-self-improvement
  - minimal-agent-harness
  - playbook-feedback-loop
sources:
  - ../references/dewu-delivery-harness.md
---

# Definition

**Delivery Harness**（得物小摊）出现在工程半径被 AI 撑大之后：一个人同时推 H5、运营后台、Node 网关、Go 服务，产出变快，但同一条业务规则跨运行时会变形。重点从「更聪明的 Prompt」转到合同、证据、反馈。模型负责生成与推理；Harness 接管：读哪份事实、可改多大范围、结果如何被证明、何时必须停止。

引爆点是一次很小的**语义分叉**：拼团进度数字取最低成团数，还是当前可售库存？两个都能解释。AI 未必更容易猜错，却能用极高速度把一次猜测扩散成接口、页面、海报、测试的共同前提。失真链：输入偏差 → 执行越界 → 验证缺位 → 缺陷逃逸 → 反馈断裂。Harness 的第一目标：让错误在最便宜、最靠前的位置暴露，阻止未经证明的状态后传。

两类问题不要混：路径、分支、是否走统一网关、发布记录是否完整——有客观答案，交给脚本和门禁；产品口径、架构取舍、真实体验——Agent 可提判断，人负责。

四个组件：

1. **Version Contract** — 事实放在最接近它的位置：口径在产品文档，范围在规格变更，仓库进合同，验收进统一报告，缺陷进 Repair Case。任务开始只加载本轮需要的部分。**临时推断不得自动升格为长期事实。**
2. **Execution Boundary** — worktree 不是 Git 技巧，是第一层隔离。公式：一需求 × 一仓库 = 一现场。只读分析不建树；首次写入从已核对基线拉专属树；跨仓各留现场，靠同一份合同关联，不共享未提交文件。清理也是合同：生产发布成功、提交已推、证据持久化后，才允许从另一棵已注册树 `git worktree remove`；禁直接删目录、禁强制移除、不自动删分支。客户端不得绕过统一请求层；测试入口不得顺手扩到预发/生产；外部写入无授权即停。
3. **Evidence Gate** — 见专页。六个状态不能划等号。
4. **Repair Loop** — 跨模块、易复发的问题，原始反馈、定位、失败基线、候选、回归落在同一个 Repair Case。完成条件：不同提交上基线必须失败、候选必须通过、回归必须通过；建不成 red/green 就停在较早阶段并说明。环境恢复 ≠ 代码修复；偶现未复现 ≠ 已解决。一条反馈只有改变了下一次默认行为才算被吸收：能写成测试的进测试，能固化权限的进门禁，能当不变量的进合同。终点不是复盘文档，是**下一次同类错误更早失败**。

跨运行时战役：多 SKU 履约。不变量写进合同——订单是履约原子，多 SKU 共享一次决策，整单成或整单败；外部回执靠持久稳定标识回到原订单，不能靠当前请求猜关联。任何一层把「订单」理解成「SKU」，就会局部正确、整体错误。

还没宣布完工：本地与 CI 检查入口要统一；完整合同要进流水线；稳定分支与合同语义要对齐。只看生成瞬间它更慢；放到完整交付周期，它提前偿还返工和越权。速度由模型放大，质量秩序由系统托底。

Loop 外面的运行时见 [Harness 运行时层](./harness-runtime-layer.md)。本页专精**交付合同与证据**。

## Related

- [Agent On-call](./agent-oncall.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
- [Plan 模式与主子 Agent](./plan-mode-multiagent.md)
- [Software Factory Cost Equation](./software-factory-cost.md)
- [Multi-Harness Control Plane](./multi-harness-control-plane.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Grok Bot](../entities/grok-bot.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Evidence Gate](./evidence-gate.md)
- [Harness 自改进](./harness-self-improvement.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
