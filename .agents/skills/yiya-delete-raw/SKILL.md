---
name: yiya-delete-raw
description: >-
  Delete named yiya raw files and cascade: unused media, matching bookmark
  rows, wiki pages whose only source is that raw, and strip sources/Related
  on remaining pages. Use when the user asks to 删除 raw, 移除 raw, 授权删除,
  or names `raw/` paths to drop from the knowledge base.
argument-hint: "<raw/path> [raw/path...]"
---

# yiya-delete-raw

用户点名 `raw/` 路径后**整条清**。先读根 `AGENTS.md`。本 Skill 只写步骤。

输入：一条或多条 `raw/` 路径。点名即做。

## 步骤

### 1. 收齐对象

- 路径须存在且落在 `raw/`。缺文件列入报告，其余继续。
- **成文 / inbox**：记下 `url:`、正文里的 `_media/<slug>/`。
- **书签表**（`raw/bookmarks/*.md`）：须同时有行标识（URL 或项目名）；只删那一行。缺标识则该项停下问。
- **本批点名的 raw 才删文件**；其他 raw 保留。

### 2. 判定 wiki（整批一次）

对 `domains/*` 与 `shared`：搜本批路径、`url:`、将被删的 wiki 页。

先把本批 raw + 匹配书签行放入定罪集合。重复直到不动：

| 页 | 定罪（整页删） |
|---|---|
| Reference | `resource` / Notes 只指向定罪 raw，或 Notes/标题/URL 对上本批书签行（`resource` 是整张书签表时，用行对，不用表对） |
| Entity / Concept | `sources` 去掉定罪项后为空 |

`index.md` / `log.md` / `overview.md` / `map.md` 不整页删，只改行。

其余命中页：**留页**，只摘定罪链（`sources`、`related:`、Related、正文、`resource`）。

### 3. 动手

1. 先改留着的页（摘链）。
2. 删定罪 wiki 页；类型 `index.md` 去行；Entity 还从该域 `overview.md` 实体表和 `shared/map.md` 去行。
3. 其他页链到已删 wiki 的 Related / `related:` 一并摘掉。
4. 删 raw 文件；作者目录空了就删目录。
5. `_media/<slug>/`：没有剩下的成文再链它 → 删整个 slug 目录。
6. 书签表删行。
7. 各碰到的 `log.md`：去掉**只写这一条 raw** 的 ingest 行；文首加 `* **YYYY-MM-DD delete** | <路径> → <删了哪些页>`。批量「N 篇」汇总行不动。

### 4. 回报

短列表：删了哪些 raw / 书签行 / wiki 页；哪些页只摘了链。

## 完成标准

- [ ] 点名的 raw（及无主配图、空作者目录）已不在仓库
- [ ] 匹配书签行已删；书签表文件仍在
- [ ] `sources` 已空的 Entity/Concept/专属 Reference 已删，index / overview / map 已对齐
- [ ] 仍有其他 sources 的页只摘链，整页还在
- [ ] 未点名的 raw 未删
- [ ] `log.md` 已记 `delete`
