---
type: Concept
title: "用不可靠组件造可靠系统"
description: "AI 组件输出不可预测是常态；工程价值在于熟练决定下一步，把不可靠部件组织成可靠软件系统。"
status: draft
domain: engineering
generated: { by: agent:yiya-librarian, at: 2026-09-05T15:25:00Z }
related:
  - eval-driven-development
sources:
  - /references/ng-evals-watershed.md
---

# Definition

**用不可靠组件造可靠系统**是 AI 应用工程的核心手艺：模型与工具调用的结果不可预先钉死，因此开发必须比传统软件更迭代——反复构建、看中间结果、再决定下一步试什么。

瀑布式「预画清流程」的前提在此失效。熟练工程师的天花板，不在消除不可靠，而在组织不可靠：边界、回退、评测与运营把局部失败关在系统可承受范围内。

## Related

- [评测驱动开发](/concepts/eval-driven-development.md)
