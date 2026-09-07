---
name: yiya-ingest
description: >-
  Ingest a URL, article, official docs page, or local clip into the yiya
  personal knowledge base, or file a durable Q&A conclusion onto existing
  pages. Use when the user asks to 入库, ingest, 抓取后写知识, claim raw, 回写,
  or process a link/file into yiya. Also when they say "按 ingest 跑",
  mention clix read, or drop a docs.example.com URL.
argument-hint: "[url-or-path] [domain?]"
---

# yiya-ingest

把原料变成可维护的 OKF 知识，或把问答结论续写进已有页。**先读仓库根 `AGENTS.md`**（路由、红线），本 Skill 只写步骤。

## 默认要瘦

- **新建** Entity/Concept/Reference 合计 **≤2**。bookmarks 表、类型 index、`log.md`、overview 实体表**不计**。
- **改旧页不限数量**：同指称或同簇已有页都碰（补 `sources`、Related、一句对照）。通常连 index/log 一共 3–8 个文件。
- 本文的稳定对象是**具名产品/人**才改/建 Entity；模式文可以零 Entity。产品名写进 Entity 页。
- Concept/Entity 的 `sources` + Related **直链 raw**。成文**默认不建** Reference（多页都链 raw）。书签型必须有 Reference。历史 Reference 不批量删。

盘点顺序：先定 Domain，再 **Entity → Concept →（可选）Reference**。

## 入口判定

先看 URL 形态，再选成文或书签。

- **成文型**（文章/长帖，或一篇有稳定标题的官方指南/规范）：走「捕捉正文 → raw → 盘点已有 → 续写或建页」。官方文档作者用官方名，不用 `_unknown`。
- **书签型**（网站首页、GitHub 仓库、产品主页、**docs 门户/根**、打开即用的在线工具）：
  1. 判定 domain；在目标域 + `shared` 的 `entities/` 找同产品，已有则只补 Reference、书签行与 Related，不新开第二张产品 Entity
  2. 按 URL 追加一行（只收入口）：`github.com/org/repo` → `github.md`；文档门户 / docs 根 → `docs.md`；打开即用的检测/查询 → `tools.md`；其余产品/机构首页 → `sites.md`。打开就能跑一次（Ping、looking glass、whois）进 `tools.md`；要安装或当产品用的仍进 `sites.md`
  3. 书签只写对应表 + Entity/Reference
  4. **一条** Reference：`resource:` 指向**该行所在表**（github / sites / docs / tools）；`tags` 含 `bookmark`（GitHub 再加 `github`）。docs 门户与工具页 Notes 可写常用深链
  5. 完成：Entity（新建或更新）+ Reference + 对应表一行
- **官方文档怎么判**（成文或书签，不开第四种 raw）：
  | 形态 | 走 | 完成标准 |
  |---|---|---|
  | 文档门户 / docs 根，或无稳定单篇标题的中间层（如 `/engine/`） | 书签进 `docs.md` | 挂**产品** Entity；已有则只补 docs 行与文档 Reference |
  | 单页、能一次读完、有稳定标题 | 成文 | 先改该产品 Entity / 相关 Concept |
  | 整棵文档树、API 全表、一串平行章节 | 书签进 `docs.md` | 只收 docs 根；等用户指定单篇再成文 |
- **回写**（仅当用户说「回写」/「把这答写进 wiki」）：跳过捕捉与写入 raw，从「盘点已有」起跑；默认只改旧页。问答本身不自动回写。

## 步骤

### 1. 捕捉正文

成文型：用本会话可用的 URL 读取工具拉取**这一页**（用户点名的优先，否则环境默认）。失败则停在缺口处。已是本地文件则直接用。书签型、docs 根、回写入口跳过本步。

### 2. 写入 raw

成文型：

1. **查重**：扫 `raw/articles/**/*.md` 的 `url:`，以及 `bookmarks/github.md` / `sites.md` / `docs.md` / `tools.md` 的 URL；已存在则停止或只补链。
2. 先放 `raw/_inbox/`（或一步到位 articles）。
3. 成文：`raw/articles/<作者>/<人话标题>.md`（作者取 `author:` 短名，去掉 `(@handle)`；无作者用 `_unknown`）。**必须**有 `url:`（本地稿可 `url: local:` + 说明）。
4. 配图：`raw/articles/_media/<slug>/`；正文链接 `../_media/<slug>/...`。

`domain` 不确定就问用户；常见：`agents` / `engineering`；跨域实体可 `shared`。认领=知识页链上该 raw。

回写入口跳过本步。

### 3. 盘点已有

读目标域 `overview.md`、`entities/index.md`、`concepts/index.md`，以及 `shared` 同名目录。

| 判定 | 动作 |
|---|---|
| 同名 / 同一产品 / 同一模式 | **改**该页：补 `sources`、修订 Definition/Summary、补 Related |
| 同簇相邻、不是同一对象 | **链**：只加 Related，保持两页 |
| 新的稳定对象 | **建**（计入新建 ≤2） |

完成标准：已打开目标域与 `shared` 的类型 index，每个候选是改 / 链 / 建之一。找不到同指称才建。

### 4. 续写或建页

- **改旧页**：追加 `sources`（相对路径直链 raw）；只补以后还会被引用的稳定句。
- **建新页**：用 `templates/concept.md` 或 `templates/entity.md`。`sources` 直链 raw。
- **互链**：同文与同簇已有页加 `## Related` + 相对路径。可写 `related:` frontmatter。

回写入口：默认只改旧页。只有结论是新的稳定对象、且用户同意时才建页。

### 5. 建 Reference（仅当需要）

仅当**书签型**，或成文里多页确需共用一张来源卡（仍优先都直链 raw）。在目标 bundle 的 `references/`：

- 复制 `templates/reference.md`；`type: Reference`
- `resource` 相对路径指向 raw（成文：`../../../raw/articles/<作者>/…`；书签：`../../../raw/bookmarks/github.md` / `sites.md` / `docs.md` / `tools.md`）
- Notes 首条 `[打开 raw](相对路径)`

### 6. 维护索引与 log

- `log.md` 新在前。前缀：`* **YYYY-MM-DD ingest** | 标题 → 页`（回写用 `writeback`，lint 用 `lint`，约定用 `schema`）
- 有新页或改了 `description` 时，更新类型 `index.md`：`* [Title](./x.md) — <description>`
- 新建 Entity 时回填该域 `overview.md` 实体表（shared 则回填 `shared/map.md`）

### 7. 短认知核对 + 结构体检

对本批碰到的页（只报告，不擅自合并）：同簇是否应追加 `sources`；有无被新源打脸的旧句；稳定对象是否缺页。

对照根 `AGENTS.md` 与当前目录：新 Domain？改路由？改约定？跨域实体应升 `shared`？

**有实质建议**：回报里短列表「建议改什么 + 为什么」，**停住等用户**说「改」。说「不改」则 `log.md` 记跳过。
**无影响**：跳过提问。

### 8. 回报

短列表：raw 路径、**改了哪些旧页**、新建了哪些 OKF 页；结构建议一并附上。

## 完成标准

- [ ] 成文型：raw 已写入且头有 `url:`；书签型：已追加 `github.md` / `sites.md` / `docs.md` / `tools.md` 中对应表；回写：用户说了「回写」，无新 raw
- [ ] 已做「盘点已有」，每个候选是改 / 链 / 建之一；同簇已有页已碰
- [ ] 至少一页 Concept/Entity（或书签 Reference）链到该 raw
- [ ] 成文默认无新 Reference；书签型有 Reference（`resource:` 相对 + Notes `[打开 raw]`）
- [ ] **新建** OKF 页 ≤2；改旧页已做
- [ ] 类型 `index.md` 被改条目带一句话；`log.md` 已更新
- [ ] 已做短认知核对与结构体检
