---
name: yiya-lint
description: >-
  Lint one yiya OKF bundle for missing type, broken local links, leading-slash
  paths, duplicate raw urls, unlinked raw, and thin indexes. Use when the user
  asks to lint, 检查, 校验知识库, or review a domain's consistency.
  Epistemic pass only when they say 全面体检, lint 知识, or 知识体检.
argument-hint: "[domains/agents|domains/engineering|shared]"
---

# yiya-lint

对**单个** bundle 做结构检查。一次只跑一个 bundle。

默认是书本契约（type、链接、index）。Karpathy 式知识 lint（矛盾、过时句、缺页）是另一档，见下方知识项。

入库末尾的「结构体检」是 ingest 步骤（路由/约定），不是本 skill。

## 参数

- bundle：`domains/agents` | `domains/engineering` | `shared`
- 未指定时：**问用户**，不要自行猜刚改过的域。

## 触发

- **默认**（`lint` / `检查` / `校验知识库` / `review consistency`）：只跑下面「检查项」。
- **知识项**（仅 `全面体检` / `lint 知识` / `知识体检`）：检查项 **加上** 知识项。

## 检查项（默认）

1. **OKF `type`**：除 `index.md` / `log.md` / `README.md` / `AGENTS.md` 外，每个 `.md` 的 frontmatter 须有非空 `type`。
2. **本地链接**：正文与 `resource` / `sources` 里指向本仓库的链接；列出断链（可修复的提出补丁，先问再改）。
3. **相对路径**：`sources` / `resource` / Related / 正文里指向本仓库的路径，不以 `/` 开头。
4. **raw 查重（全库）**：`raw/articles/**` 的 `url:`，以及 `bookmarks/github.md` / `sites.md` / `docs.md` 的 URL 是否重复（跨 bundle，因 url 全局唯一）。
5. **未链 raw（本域启发式）**：本域 `sources`/Related/`resource` 未引用、且明显属于本域主题的成文 raw。
6. **重复实体**：本域 `entities/` 与 `shared/entities/` 标题/别名明显撞车（升格用 `yiya-promote-to-shared`）。
7. **过瘦/过肥**：一文下 Concept 明显集邮时列入 `notes`。
8. **index 一句话**：类型 `index.md` 每条应为 `* [Title](./x.md) — <一句话>`；缺则 `notes`。

## 知识项（仅「全面体检」/「lint 知识」/「知识体检」）

在同一 bundle 上额外看，只报告、不擅自合并：

- 页间明显矛盾
- 被更新源打脸、仍当现行的旧句
- 正文提到的稳定对象没有对应 Entity/Concept
- 单源卡是否与已有同指称页该合并
- 同簇页是否应互相追加 `sources`

## 输出

- `missing_type` / `broken_links` / `absolute_paths` / `duplicate_urls` / `unlinked_raw` / `duplicates` / `notes`
- `epistemic: skipped` 或 `epistemic: …`

用户同意后再改文件。可选在该 bundle `log.md` 记：`* **YYYY-MM-DD lint** | bundle → 摘要`。

## 完成标准

- [ ] 已点名 bundle 路径
- [ ] 默认检查项都填了输出键
- [ ] `epistemic: skipped` 或已跑知识项
- [ ] 未在用户同意前批量改文件
