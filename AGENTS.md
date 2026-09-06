# yiya — Agent 手册（精简版）

三件事：
1. **LLM Wiki**：raw → 编纂 → 更新 log
2. **OKF v0.2**：概念 = Markdown + YAML；**必有 `type`**；路径即 id；保留名 `index.md` / `log.md`
3. **Domain**：写入 `domains/<id>/` 或 `shared/`，不要一锅炖

可调用流程在 [`.agents/skills/`](.agents/skills/)（ingest / lint / new-domain / promote-to-shared）。

---

## 路由

| 内容 | 写入 |
|---|---|
| 未分域剪藏 | `raw/_inbox/` |
| 跨域实体（人/公司/通用工具） | `shared/` |
| Agent / Grok Bot / harness | `domains/agents/` |
| 工程与可维护性 | `domains/engineering/` |
| 敏感 | `private/`（不进 git） |

域表：`config/domains.yaml`。新域用 skill `yiya-new-domain`。

---

## raw

- 物理唯一：`raw/library/YYYY/MM/<slug>/`（**只到月**）
- 正文文件名 = **原文标题**（人话）；配图放同级 `media/`
- 认领：改 `raw-manifest.yaml`（`domain` + `path`）
- 禁止按域复制原件

---

## OKF 最小字段

```yaml
---
type: Concept          # Reference | Entity | Concept | Overview（先够用）
title: ""
description: ""
status: draft          # draft | stable | deprecated
domain: agents
generated: { by: agent:ori, at: 2026-09-04T00:00:00Z }
sources: []
---
```

链接优先 `/concepts/foo.md` 这种 bundle 根相对路径。

---

## 概念互链（双链）

- 相关 Concept/Entity **必须**在正文加 `## Related`，用 bundle 根路径互链，如 `[Evidence Gate](/concepts/evidence-gate.md)`。
- 可同步 frontmatter `related: [slug, ...]`（同域 slug）。
- 跨域用相对路径，如 `../../engineering/concepts/semantic-layer.md`。
- **不**单独建 backlinks 目录；反链交给 Obsidian / 图谱工具从出站链计算。
- 同一 Reference 拆出的概念彼此互链；主题相近的族（记忆 / harness / 语义层等）至少连成小团。

## Ingest 默认要瘦

入库请走 **`.agents/skills/yiya-ingest`**。默认：1 Reference + 1～2 Concept/Entity。禁止类型集邮。

常驻目录：`references/` `entities/` `concepts/`。其它类型目录按需再建。

---

## 红线

- 未认领 raw 不写正式概念
- 不删 raw 原件（除非人类明确授权）
- 不平行发明第二套元数据（用 OKF 的 `sources` / `generated` / `verified` / `status`）
