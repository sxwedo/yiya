---
type: Entity
title: "Lieflat Charts"
description: "Agent Skill：用统一字体、留白、线条和动效做数据可视化；默认出编辑感图表，明确要报告时才生成整页 HTML。"
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-14T05:05:35Z }
related:
  - skills-sh
  - agent-skills
  - ai-design-deslop
  - ian-xiaohei-illustrations
  - holo-card-studio
sources:
  - ../../../raw/bookmarks/github.md
---

# Summary

**Lieflat Charts**（[larashero3-dotcom/lieflat-charts](https://github.com/larashero3-dotcom/lieflat-charts)）是一套 Agent Skills 格式的数据可视化 skill，可给 moxt、Claude Code、Codex 等兼容 `SKILL.md` 的 agent 用。在 [moxt.ai](https://moxt.ai) 制作。

默认把数据做成有编辑感的图表；只有用户明确要求报告、年报、月报、白皮书、海报或 brief 时，才从 12 套中英文整页模板生成可发布 HTML。

三种视觉语法：

- **Lupi**：细线、点阵、逐条记录、大量留白；适合论文、长文、年报。
- **Glance**：粗柱、大数字、色块、清晰排序；适合周报、汇报、dashboard。
- **Basics**：熟悉的柱/线/环等轮廓，加可数刻度与发丝线。

另有网络、路径、多段流向等交互大图。色彩：Mono 保底；青瓷蓝 / 椰林绿 / 编辑部红；用户给品牌色可 custom。同一份 HTML 或一组图只用一套色。

定位：图表/报告视觉 Skill，不是 harness。发现安装层见 [skills.sh](../../agents/entities/skills-sh.md)。与 [Ian 小黑配图](./ian-xiaohei-illustrations.md)、[Holo Card Studio](./holo-card-studio.md) 同属生成视觉资产，对象分别是正文插画、卡面、数据图。

## Related

- [skills.sh](../../agents/entities/skills-sh.md)
- [Agent Skills](../../agents/entities/agent-skills.md)
- [AI Design De-slop](../concepts/ai-design-deslop.md)
- [Ian 小黑配图](./ian-xiaohei-illustrations.md)
- [Holo Card Studio](./holo-card-studio.md)
