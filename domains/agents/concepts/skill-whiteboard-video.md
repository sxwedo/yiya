---
type: Concept
title: "字幕驱动白板手绘成片"
description: "用 Codex + 白板 skill 把文稿做成手绘讲解视频：先分幕确认，源图无字，文字后期叠；人判、模型执行。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T02:47:46Z }
sources:
  - ../../../raw/articles/SAMUEL/我用 Codex 把一段文字做成了手绘动画：从配音成片，完整教学.md
related:
  - agent-skills
  - codex
  - knowledge-skill-separation
---

# Definition

**字幕驱动白板手绘成片**：不是一句「帮我做个视频」。人用自然语言提可验收要求，[Codex](../entities/codex.md) 调 skill、脚本和本地工具。白板动画是 skill 的核心流程；配音、音乐、排版是后续适配，**装同名 skill ≠ 一键复刻全部结果**。

流水线（每步先确认再往下）：

1. 检查 skill 完整性（`SKILL.md`、脚本、预览、依赖），先报告不生成。
2. 文稿 → UTF-8 SRT；无配音时标明**预估时间轴**。
3. 按语义分幕，不机械等分时长。
4. 统一风格**无字底图**（精确文字后期叠层，避免改数字就重画）。
5. 区域标注：模块编号、顺序、保护区域；预览台改完必须保存。
6. 静态底图按区域落笔渲染，不是视频模型空想整片。
7. 修改要指明幕次、模块、内容、位置、时机。
8. 合并用各幕**最后确认版**，保留历史。
9. TTS 先短试听再全片；`edge-tts` 等是外挂在线语音，不是白板 skill 自带，文稿会上传。
10. 改一句文案须同步 SRT、音频、画面字幕。

人仍负责：每幕讲什么、删什么、用哪路声音、何时进入下一步。公开发布前核验事实与素材授权。

## Related

- [Agent Skills](../entities/agent-skills.md)
- [Codex](../entities/codex.md)
- [知识与技能分离](./knowledge-skill-separation.md)
- [打开 raw](<../../../raw/articles/SAMUEL/我用 Codex 把一段文字做成了手绘动画：从配音成片，完整教学.md>)
