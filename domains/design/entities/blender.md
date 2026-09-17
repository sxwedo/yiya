---
type: Entity
title: "Blender"
description: "免费开源 3D：建模、材质、灯光、动画、渲染。Astra 热之后普通人也能让编码 Agent 接本机 Blender；MCP 不自动提高美术。"
kind: product
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-17T04:00:00Z }
related:
  - holo-card-studio
  - mcp
  - open-design
sources:
  - ../../../raw/articles/诺鸭船长3/上帝之手Blender丨从入门到榨干.md
---

# Identity

**Blender**（[blender.org](https://www.blender.org)）：免费开源 3D 创作软件。诺鸭船长3 入门文：虚拟摄影棚——模型、材质、灯光、相机；算图叫渲染。Astra 出来后下载量涨，外行能借编码 Agent 摸一把，不是一夜变大神。

文称实测 Mac Blender 5.2.1 LTS；官方 MCP 插件 1.0.3 要 5.1+。先切简体中文；界面翻译不影响 `bpy`。灰色预览先别让 AI 重做，看材质切「材质预览」。

## Mechanism

三种接入，不用全装：**脚本**先做东西；**MCP** 经常改正在打开的工程；看屏幕操作用来检查结果。向 Codex（文中 GPT-6 Astra）描述需求，由它操作本机 Blender，不是在 Blender 里找聊天框。配置交给 AI，人核对连上没有。MCP 不自动提高美术质量。

工程里的物体、材质、机位会留着，下次换角度、改布置、出新图。案例：可走进去的晚餐小游戏、白模追逐短片再交给视频模型、角色闪卡。卡面 Skill 见 [Holo Card Studio](./holo-card-studio.md)。

## Boundaries

不是网页 UI De-slop，不是生图提示词课。不是 Three.js 本体。本页不是 Blender 手册。

## Related

- [Holo Card Studio](./holo-card-studio.md)
- [MCP](../../agents/entities/mcp.md)
- [Open Design](./open-design.md)
