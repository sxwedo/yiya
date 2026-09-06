---
type: Concept
title: "Evidence Gate"
description: "交付状态跃迁的证据门禁：每一步结论必须对应可复查证据，答不全则停在原地。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T14:52:00Z }
related:
  - delivery-harness
  - harness-self-improvement
  - minimal-agent-harness
sources:
  - /references/dewu-delivery-harness.md
---

# Definition

**Evidence Gate** 拒绝空口“完成”。编译、单测、接口验证、真机验收、生产发布、合入稳定分支是不同状态；每一步都要拿出与结论匹配的证据。

每次交付至少回答：

1. 本版本登记了哪些需求与仓库？
2. 每条产品规则对应哪个用例？
3. 用例产生了什么可复查证据？
4. 哪些体验判断仍须由人签字？

统一验收报告应是「文档—需求—用例—证据」映射，而不是完成宣言。文档读失败、规则无用例、跨模块无回执 → 状态保持 pending。

硬区分：代码完成 ≠ 研发验证通过 ≠ 具备产品验收条件 ≠ 产品真实环境验收通过 ≠ 已生产发布 ≠ 已合入稳定分支。AI 可整理证据，不能替责任人签字。

## Related

- [Delivery Harness](/concepts/delivery-harness.md)
- [Harness 自改进](/concepts/harness-self-improvement.md)
- [Minimal Agent Harness](/concepts/minimal-agent-harness.md)
