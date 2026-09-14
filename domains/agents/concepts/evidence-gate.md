---
type: Concept
title: "Evidence Gate"
description: "交付状态跃迁的证据门禁：每一步结论必须对应可复查证据，答不全则停在 pending。AI 可整理证据，不能替责任人签字。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - graph-driven-agent-workflow
  - llm-as-judge-runtime
  - delivery-harness
  - harness-self-improvement
  - minimal-agent-harness
  - plan-with-code
  - pstack
sources:
  - ../references/dewu-delivery-harness.md
  - ../../../raw/articles/得物技术/AI Native 交易核心系统的研发范式｜得物技术.md
  - ../../../raw/articles/AI数据奇点/Data Agent二篇：查数Agent 你们的是否可信？.md
---

# Definition

**Evidence Gate**（得物小摊 Delivery Harness 第二层）拒绝空口「完成」。编译、单测、接口验证、真机验收、生产发布、合入稳定分支是**六个不同状态**；每一步都要拿出与结论匹配的证据。答不全，状态停在 pending，不许往后传。

每次交付至少回答：

1. 本版本登记了哪些需求与仓库？
2. 每条产品规则对应哪个用例？
3. 用例产生了什么可复查证据？
4. 哪些体验判断仍须由人签字？

统一验收报告是「文档—需求—用例—证据」映射，不是完成宣言。任何人应能沿着它找到命令结果、真机截图、运行记录和未覆盖项。文档读失败、规则无用例、跨模块无回执 → 一律 pending。

硬区分，中间不能画等号：

```
代码完成
≠ 研发验证通过
≠ 具备产品验收条件
≠ 产品真实环境验收通过
≠ 已生产发布
≠ 已合入稳定分支
```

自动化适合查接口、状态、边界、页面元素。真机是否别扭、文案是否误解、容器网络下体验是否符合预期，仍要产品责任人判断。**AI 可整理证据，不能替责任人签字。** 下一阶段设想：独立评估 Agent 只读需求、diff、测试证据，再判断能不能进验收——生成与评估分离。

查数 Agent 同构：SQL 跑通 ≠ 口径可信。没有指标定义、权限范围、抽样对账，结果只是「模型说对了」。门禁问的是证据形状，不是模型自信。

Grok Bot 侧落地更土：截图里必须出现需求点的变化（最好前后对照）；贴测试命令和结果；说明 diff 动了哪些文件。口头「已修复」退回。截图只证明页面变了，质量还看测试和 Diff。

本页是跃迁门。合同锁事实、边界限半径、修复写回默认，见 [Delivery Harness](./delivery-harness.md)。执行前拦危险工具见 [Auto Mode](./auto-mode.md)。

## Related

- [Graph-Driven Agent Workflow](./graph-driven-agent-workflow.md)
- [LLM-as-Judge Runtime](./llm-as-judge-runtime.md)
- [Delivery Harness](./delivery-harness.md)
- [Harness 自改进](./harness-self-improvement.md)
- [用代码做计划](./plan-with-code.md)
- [pstack](../entities/pstack.md)
- [Minimal Agent Harness](./minimal-agent-harness.md)
