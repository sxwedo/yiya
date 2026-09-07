---
name: yiya-lint
description: >-
  Lint one yiya OKF bundle (domain or shared) for missing type frontmatter,
  broken local links, leading-slash paths, duplicate raw urls, unlinked raw
  orphans, and thin indexes. Use when the user asks to 检查, lint, 体检,
  校验知识库, or review a domain's consistency. When they say 全面体检 or
  lint 知识, also run the epistemic pass.
argument-hint: "[domains/agents|domains/engineering|shared]"
---

# yiya-lint

对**单个** bundle 做轻量体检。默认不要一次扫全家。

## 参数

- bundle 相对路径：`domains/agents` | `domains/engineering` | `shared`
- 未指定时：问用户，或对用户刚改过的那个域跑。

## 检查项（默认）

1. **OKF `type`**：除 `index.md` / `log.md` / `README.md` / `AGENTS.md` 外，每个 `.md` 的 frontmatter 须有非空 `type`。
2. **本地链接**：正文与 `resource` / `sources` 里指向本仓库的链接；列出断链（可修复的提出补丁，先问再大改）。
3. **相对路径**：`sources` / `resource` / Related / 正文里指向本仓库的路径，不以 `/` 开头。
4. **raw 查重**：`raw/articles/**` frontmatter `url:` 是否重复。
5. **未链 raw（孤儿）**：本域 `sources`/Related/`resource` 未引用、且明显属于本域主题的成文 raw（启发式列出，不强制删）。
6. **重复实体**：本域 `entities/` 与 `shared/entities/` 标题/别名明显撞车时列出（升格用 `yiya-promote-to-shared`）。
7. **过瘦/过肥**：一文下 Concept 明显「集邮」时提醒（不强制删）。
8. **index 一句话**：类型 `index.md`（`concepts/` `entities/` `references/`）每条应为 `* [Title](./x.md) — <一句话>`；缺一句话列入 `notes`。

## 知识项（仅「全面体检」/「lint 知识」）

默认不跑。用户明确要求时，在同一 bundle 上额外看：

- 页间明显矛盾
- 被更新源打脸、仍当现行的旧句
- 正文提到的稳定对象（具名产品/模式）没有对应 Entity/Concept
- 单源卡是否与已有同指称 Entity/Concept 该合并（只报告，不擅自合并）

## 输出

简短报告：

- `missing_type`
- `broken_links`
- `absolute_paths`
- `duplicate_urls`
- `unlinked_raw`
- `duplicates` / `notes`
- 知识项开启时另附 `epistemic`

只在用户同意后批量改文件。
