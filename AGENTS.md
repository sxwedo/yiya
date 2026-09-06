# yiya

三层：**raw（原料）→ domains/shared（知识）→ AGENTS/skills（约定）**。

流程 skill：`.agents/skills/`（`yiya-ingest` / `yiya-lint` / `yiya-new-domain` / `yiya-promote-to-shared`）。

## 架构

```
raw/
  _inbox/                      # 未分域
  bookmarks/github.md|sites.md # 表格：项目/站点 · URL · 作者 · 简介
  articles/<作者>/<标题>.md    # 成文；无作者 → _unknown/
  articles/_media/<slug>/      # 配图（不进作者目录）
domains/<id>/                  # OKF bundle：entities/ · concepts/ · references/（按需）
shared/                        # 跨域实体
```

域路由见 `config/domains.yaml`。敏感进 `private/`（不进 git）。

## 四条规矩

1. **raw 正文不改**（除非人类授权删除/替换）
2. **成文默认**：1～2 个 Entity/Concept，`sources` + Related **直链 raw**（相对路径）
3. **Reference 可选**：仅一书 ≥2 概念共用，或书签型；历史 Reference 先留
4. **链接一律相对路径**（`./x.md`、`../entities/y.md`、`../../../raw/...`）；**禁**以 `/` 开头（GitHub 404）

具名产品/框架/人 → **Entity**；模式/方法 → **Concept**。盘点顺序：Domain → Entity → Concept →（可选）Reference。

## 入库摘要

| 类型 | 做什么 |
|---|---|
| 成文 | `clix read` → `articles/<作者>/` + manifest → Entity/Concept 直链 raw |
| 书签 | 追加 bookmarks 表 → Entity + Reference（指向表） |

成文认领：`raw-manifest.yaml`。书签不 per-link claim。细则与完成标准见 `yiya-ingest`。

## OKF 最小字段

```yaml
---
type: Concept   # Entity | Concept | Reference | Overview
title: ""
description: ""
status: draft   # draft | stable | deprecated
domain: agents
generated: { by: agent:ori, at: 2026-09-04T00:00:00Z }
sources: []     # 优先相对路径指向 raw 或 Reference
related: []
---
```

必有 `type`。保留名：`index.md` / `log.md`。

## 红线

- 未认领成文 raw 不写正式概念
- 不删 raw 原件（除非人类明确授权）
- 不类型集邮；不平行发明第二套元数据
