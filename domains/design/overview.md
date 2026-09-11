---
type: Overview
title: "设计与人读面"
description: "排版与品味、人读界面、去 AI slop 的视觉纪律；具名产品见 entities。"
status: draft
domain: design
generated: { by: agent:yiya-librarian, at: 2026-09-11T07:01:27Z }
sources: []
---

# Scope

**收**：人读界面与排版、视觉品味、去 AI slop 的设计纪律、组件 / 阅读页 / 落地页这类给人看的表面；具名设计工具与组件库（仅当本文的稳定对象就是该设计物）。

**不收**：Agent 运行时 / harness / 编码代理产品（见 `agents`）；业务 Ontology / 语义层 / 评测（见 `engineering`）；跨域权威实体升格后放 `shared/entities`。Agent 如何调用设计工具的工作流可留 `agents`；本域收的是设计对象与品味本身。

## 本域实体

| Entity | 一句话 |
| -------- | -------- |
| [Holo Card Studio](./entities/holo-card-studio.md) | 描述/参考图 → Blender 卡面 + Three.js |
| [Ian 小黑配图](./entities/ian-xiaohei-illustrations.md) | 中文小黑怪诞正文配图 Skill |
| [Open Design](./entities/open-design.md) | DeepSeek Harness 设计插件；开源 Claude Design 替代 |
| [shadcn-admin](./entities/shadcn-admin.md) | Shadcn + Vite 后台 UI |

## 本域概念

| Concept | 一句话 |
| -------- | -------- |
| [AI Design De-slop](./concepts/ai-design-deslop.md) | 约束优先、删减、设计工具多变体，防 agent UI 糊 |

## 怎么逛

1. 先看 `entities/`（产品 / 组件库）与类型 `index.md`
2. 再看 `concepts/`（品味与纪律）与 `references/`（来源）
