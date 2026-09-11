---
type: Entity
title: "SearchCLI"
description: "火山引擎开源：Agent 驱动搜索自迭代。Skills 出策略，CLI 跑可复现实验，人不让它直接改线上。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-11T17:10:00Z }
related:
  - retrieval-quality-pipeline
  - eval-driven-development
  - agent-skills
sources:
  - ../../../raw/articles/字节跳动技术团队/火山引擎开源 Agent 驱动的搜索自迭代技术.md
---

# Summary

**SearchCLI**（仓 [volcengine/SearchCLI](https://github.com/volcengine/SearchCLI)）把「搜索不好时怎么改」做成 Agent 可跑的实验闭环：校验 Query、Plan 编译成本、批量搜索、相关性标注、比指标、只创建候选 Scene。生产切换仍要人确认。

与 [检索质量 Pipeline](../concepts/retrieval-quality-pipeline.md) 同族：先廉价银标筛方向，再 LLM Judge 精评。与 [评测驱动开发](../../engineering/concepts/eval-driven-development.md) 同族：假设 → 预算 → 证据，不是调一次参数碰运气。Skills 沉淀规程，CLI 保证可复现；对照 [Agent Skills](./agent-skills.md)。

## Related

- [检索质量 Pipeline](../concepts/retrieval-quality-pipeline.md)
- [评测驱动开发](../../engineering/concepts/eval-driven-development.md)
- [Agent Skills](./agent-skills.md)
