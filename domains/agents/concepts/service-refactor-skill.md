---
type: Concept
title: "服务重构 Skill"
description: "重构难在调用链里的隐式规则，不是换语言。Skill 三层渐进加载 + 五阶段人审：先把链路展开到 DB/RPC，再分层改造。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-26T08:00:00Z }
related:
  - agent-skills
  - knowledge-skill-separation
  - coding-agent-workflow
  - harness-runtime-layer
sources:
  - ../../../raw/articles/腾讯云开发者/一个Skill搞定服务重构：从链路分析到测试自动化.md
---

# Definition

**服务重构 Skill**（腾讯云开发者，内部 `trpc-go-refactor`）：难点不是把 C++ 译成 Go，是多年散落在调用链里的状态机分支、隐式校验、数据依赖、无注释补丁。人工跨 4–5 个进程项目读，漏一个 `switch` 往往上线才爆。文称光出能评审的方案就要 2–3 天。

三层加载（窗口装不下全书）：① 编辑目录时自动注入短 Rule（DDD/命名）；② Skill 主文件描述五阶段，按当前阶段跳转；③ references 按需（链路分析、领域状态机、测试排障）。五阶段线性、人发起、人审、可回退。人定架构边界、字段取舍、灰度；AI 做老代码分析、生成、编译部署。

阶段 1 必须深入方法内部到 DB/缓存/RPC/MQ，不能只画调用箭头。入口层一个方法可能拆出完整 Proto 字段列表。之后才是新服务分层、实现、测试（复用真实数据、可观测排障）。

## Boundaries

不是通用「一键重构」。不是公开 GitHub Skill 包。不是 [Agent Skills](../entities/agent-skills.md) 格式本身。本页不是 tRPC 手册。

## Related

- [Agent Skills](../entities/agent-skills.md)
- [知识与技能分离](./knowledge-skill-separation.md)
- [Coding Agent Workflow](./coding-agent-workflow.md)
- [Harness 运行时层](./harness-runtime-layer.md)
