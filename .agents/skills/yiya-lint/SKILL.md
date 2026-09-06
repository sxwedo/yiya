---
name: yiya-lint
description: >-
  Lint one yiya OKF bundle (domain or shared) for missing type frontmatter,
  broken local links, duplicate raw urls, and unlinked raw orphans. Use when the user asks to 检查,
  lint, 体检, 校验知识库, or review a domain's consistency.
argument-hint: "[domains/agents|domains/engineering|shared]"
---

# yiya-lint

对**单个** bundle 做轻量体检。默认不要一次扫全家。

## 参数

- bundle 相对路径：`domains/agents` | `domains/engineering` | `shared`
- 未指定时：问用户，或对用户刚改过的那个域跑。

## 检查项

1. **OKF `type`**：除 `index.md` / `log.md` / `README.md` / `AGENTS.md` 外，每个 `.md` 的 frontmatter 须有非空 `type`。
2. **本地链接**：正文与 `resource` / `sources[].resource` 里以 `/` 或相对路径指向本仓库的链接；列出断链（可修复的提出补丁，先问再大改）。
3. **raw 查重**：`raw/articles/**` frontmatter `url:` 是否重复。
4. **未链 raw（孤儿）**：本域 `sources`/Related/`resource` 未引用、且明显属于本域主题的成文 raw（启发式列出，不强制删）。
5. **重复实体**：本域 `entities/` 与 `shared/entities/` 标题/别名明显撞车时列出（升格用 `yiya-promote-to-shared`）。
6. **过瘦/过肥**：一文下 Concept 明显「集邮」时提醒（不强制删）。

## 输出

简短报告：

- `missing_type`
- `broken_links`
- `duplicate_urls`
- `unlinked_raw`
- `duplicates` / `notes`

只在用户同意后批量改文件。
