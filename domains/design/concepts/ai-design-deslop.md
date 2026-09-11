---
type: Concept
title: "AI Design De-slop"
description: "用 AI 做产品设计时：先列约束再解法、主动删减、在设计工具多变体迭代，避免在真仓库里打地鼠式改 UI。"
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-10T00:20:00Z }
related:
  - ian-xiaohei-illustrations
  - coding-agent-workflow
sources:
  - ../../../raw/articles/Matt Dailey/How I Design with AI..md
---

# Definition

**AI Design De-slop**（AI 设计去糊）：工程师用 agent 做落地页/App/TUI 时，默认输出易同质、堆砌；要用设计规程压住。

要点（Matt Dailey / Ref）：

1. **先整体约束**：列约束 → 多方案 → 约束变了再回第一步（Alexander）；反馈先判是否改约束，别立刻 spot-fix「打地鼠」。  
2. **删除**：agent 爱加文案/线/图标；逐元素问「是否真要」。  
3. **在设计工具迭代**：Figma / Design Mode / HTML 原型出 3～4 变体；避免原型重力（在真仓首版上硬改）。  
4. **组件库 + showcase**：视图与逻辑分离；先在 `/showcase` 玩组件再接主应用。  
5. **Preview deploy + 真数据**：大功能可前后端 PR 分离。  
6. **偷参考**：同类产品截图当 agent 上下文。  
7. **练品味**：对反应做反思，团队可「打谷」式共评。

与 [Coding Agent Workflow](../../agents/concepts/coding-agent-workflow.md) 互补：后者偏写代码工作流，本页偏 **agent 参与 UI 时的设计纪律**。

## Related

- [Ian 小黑配图](../entities/ian-xiaohei-illustrations.md)
- [Coding Agent Workflow](../../agents/concepts/coding-agent-workflow.md)
- [打开 raw](<../../../raw/articles/Matt Dailey/How I Design with AI..md>)
