---
type: Concept
title: "字幕驱动白板手绘成片"
description: "Codex + 白板 skill 把文稿做成手绘讲解视频：先分幕确认，源图无字，文字后期叠。人判、模型执行；装同名 skill ≠ 一键成片。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - agent-skills
  - codex
  - knowledge-skill-separation
sources:
  - ../../../raw/articles/SAMUEL/我用 Codex 把一段文字做成了手绘动画：从配音成片，完整教学.md
---

# Definition

**字幕驱动白板手绘成片**（SAMUEL × Codex）不是一句「帮我做个视频」。案例交付 2 分 17.7 秒、1080p、30 帧横屏：暖米黄色纸底，人物城市钱包日历账本依次画出，底部单行字幕，晓晓女声 + 无词伴奏。真实过程是：人定内容和风格，逐幕确认画面，再调文字位置时机，最后试听、改字幕、合成。自然语言提可验收要求，[Codex](../entities/codex.md) 调 skill、脚本和本地工具。

边界：不是剪映时间线手工拼。组合是 Codex + `srt-whiteboard-animation` skill + 图像工具 + 本地渲染脚本 + 后来外挂的 `edge-tts` + 混音。Skill 是可执行工作说明书（步骤、资源、何时停下来确认），**不是凭空打开所有能力的开关**。白板动画是 skill 核心；配音、音乐、部分排版是后续适配。装同名 skill ≠ 一键复刻全部结果。

流水线（每步先确认再往下）：

1. 检查 skill 完整性（`SKILL.md`、脚本、预览、依赖），先报告不生成。
2. 文稿 → UTF-8 SRT；无配音时标明预估时间轴。
3. 按语义分幕，不机械等分时长。
4. 统一风格**无字底图**（精确文字后期叠，避免改数字就重画）。
5. 区域标注：模块编号、顺序、保护区域；预览台改完必须保存。
6. 静态底图按区域落笔渲染，不是视频模型空想整片。
7. 修改要指明幕次、模块、内容、位置、时机。
8. 合并用各幕最后确认版，保留历史。
9. TTS 先短试听再全片；`edge-tts` 是在线语音，文稿会上传。
10. 改一句文案须同步 SRT、音频、画面字幕。

人仍负责：每幕讲什么、删什么、用哪路声音、何时进入下一步。政策类原稿（案例是社保对比）制作方法不等于核验事实；公开发布前单独核授权与数字。知识与技能分离见 [知识与技能分离](./knowledge-skill-separation.md)。


## Boundaries

装同名 skill ≠ 一键成片。人判幕次与删改；政策类原稿制作方法不等于核验事实。不是剪映时间线手工拼。

## Related

- [Agent Skills](../entities/agent-skills.md)
- [Codex](../entities/codex.md)
- [知识与技能分离](./knowledge-skill-separation.md)
