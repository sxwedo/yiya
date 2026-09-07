---
name: yiya-ingest
description: >-
  Ingest a URL, article, or local clip into the yiya personal knowledge base
  (LLM Wiki + OKF + Domain), or file a durable Q&A conclusion back onto existing
  pages. Use when the user asks to 入库, ingest, 抓取后写知识, claim raw, 回写,
  or process a link/file into yiya. Also when they say "按 ingest 跑"
  or mention clix read / download then generate knowledge.
argument-hint: "[url-or-path] [domain?]"
---

# yiya-ingest

把原料变成可维护的 OKF 知识，或把问答结论续写进已有页。**先读仓库根 `AGENTS.md`**（路由、raw 命名、红线），本 Skill 只写步骤。

## 默认要瘦

一次入库的写入合计 **≤2**（改旧页或建新页）：

1. 若文中有**具名产品/框架/公司/人**，其中至少 **1 个必须是 Entity**；模式/方法用 Concept。产品名写进 Entity 页，不埋在 Concept 正文里充数。
2. Concept/Entity 的 `sources` + Related **直链 raw**（相对路径）。**默认不建** Reference。
3. **才建 Reference**：① 一文拆出 ≥2 个 Concept/Entity 要共用来源卡；② **书签型**（仍要 Reference）。

页类型用 Entity / Concept，Reference 仅按需。有清晰洞见再另开页。历史 Reference 不批量删。

盘点时按 **Entity → Concept →（可选）Reference** 报，避免 Entity 被 Concept 列表淹没。

## 入口判定

- **成文型**（文章/长帖）：走下方「捕捉正文 → raw → 盘点已有 → 续写或建页」。
- **书签型**（网站首页、GitHub 仓库、产品主页，用户只丢 URL、不要整站）：
  1. 判定 domain；**先**在目标域 + `shared` 的 `entities/` 找同名，已有则只补 Reference、书签行与 Related
  2. **追加**到 `raw/bookmarks/github.md` 或 `sites.md` 表格一行（项目/站点、URL、作者、简介）；禁止整站正文
  3. 书签不进任何认领表（只在 bookmarks 表 + Entity/Reference）
  4. **一条** Reference：`resource:` 可指向对应 bookmarks 列表（或原文 URL）；正文写收藏理由；`tags` 含 `bookmark`（GitHub 再加 `github`）
  5. 完成标准：Entity（新建或更新）+ Reference + bookmarks 列表条目
- **回写**（问答沉淀、无新 raw）：跳过捕捉与写入 raw，从「盘点已有」起跑；默认只改旧页。

## 步骤

### 1. 捕捉正文

成文型：用户给了 URL 则用其指定工具（如 `clix read <url>`）拉取；失败则停住报错，停在缺口处。已是本地文件则直接用。回写入口跳过本步。

### 2. 写入 raw

成文型：

1. **查重**：扫 `raw/articles/**/*.md` 的 frontmatter `url:`（及书签表 URL），已存在则停止或只补链，勿重复建 raw。
2. 先放 `raw/_inbox/`（或一步到位 articles）。
3. 成文：`raw/articles/<作者>/<人话标题>.md`（作者取 frontmatter `author:` 短名，去掉尾部 `(@handle)`；无作者用 `_unknown`；非法路径字符去掉或改全角）。**必须**有 `url:`（无 URL 的本地稿可写 `url: local:` + 说明）。
4. 配图：`raw/articles/_media/<slug>/`（`<slug>` 短、稳定、偏 ASCII；**不**放进作者目录）；正文相对链接写成 `../_media/<slug>/...`。

`domain` 不确定就问用户；常见：`agents` / `engineering`；跨域实体资料可 `shared`。认领=知识页链上该 raw。

回写入口跳过本步。

### 3. 盘点已有

读目标域 `entities/index.md`、`concepts/index.md`，以及 `shared` 同名目录。

| 判定 | 动作 |
|---|---|
| 同名 / 同一产品 / 同一模式 | 改该页：补 `sources`、修订 Definition 或 Summary、补 Related |
| 相邻但不是同一对象 | 只加 Related，保持两页 |
| 新的稳定对象 | 才进入下一步建页 |

完成标准：已打开目标域与 `shared` 的类型 index，并对每个候选对象写下「改 / 链 / 建」之一。合计写入仍 ≤2。

### 4. 续写或建页

- **改旧页**：追加 `sources`（相对路径直链 raw）；只补以后还会被引用的稳定句，不复述全文。
- **建新页**：用 `templates/concept.md` 或 `templates/entity.md`。`sources` **直链 raw**（如 `../../../raw/articles/<作者>/原文标题.md`）。
- **互链**：同文涉及的页彼此加 `## Related` + 相对路径（同目录 `./foo.md`；同 bundle `../entities/bar.md`）；跨域用 `../../<domain>/concepts/...`。可写 `related:` frontmatter。链接一律相对路径。

回写入口：默认只走「改旧页」。只有结论是新的稳定对象、且用户同意时才建页。

### 5. 建 Reference（仅当需要）

仅当：一书 ≥2 概念共用，或书签型。在目标 bundle 的 `references/`：

- 复制 `templates/reference.md`
- `type: Reference`
- `resource` 用**相对路径**指向 raw（成文：`../../../raw/articles/<作者>/原文标题.md`；书签：`../../../raw/bookmarks/github.md` / `sites.md`）
- Notes **首条**加 `[打开 raw](相对路径)`；外链 URL 可另写
- 各 Concept/Entity 的 `sources` 可指这条 Reference，**或**仍直链 raw（二者择一写清即可）

### 6. 维护索引与 log

- 更新该 bundle `log.md`（新在前）。新条目前缀：`* **YYYY-MM-DD ingest** | 标题 → 页`（回写用 `writeback`）
- 有新页或改了 `description` 时，更新对应类型 `index.md`：`* [Title](./x.md) — <description 原句>`
- 新建 Entity 时回填该域 `overview.md` 实体表

### 7. 结构体检（自生长）

对照根 `AGENTS.md` 与当前目录，判断本批入库是否冲击约定：

- 新 Domain？改路由？改 raw/书签/Reference/互链约定？跨域实体应升 `shared`？

**有实质建议**：回报里用短列表写出「建议改什么 + 为什么」，**停住等用户**说「改」再动 AGENTS/目录（可 @Ori）；说「不改」则 `log.md` 记跳过。
**无影响**：跳过提问，直接下一步。

顺手开域或大改约定停在建议，等用户说「改」。

### 8. 回报

用简短列表告诉用户：raw 路径、**改了哪些旧页**、新建了哪些 OKF 页；若有结构建议一并附上。不要贴长文。

## 完成标准

- [ ] 成文型：`raw/articles/<作者>/<人话标题>.md`（配图在 `_media/<slug>/`）；书签型：已追加到 `raw/bookmarks/github.md` 或 `sites.md`；回写：无新 raw 要求
- [ ] 已做「盘点已有」，每个候选是改 / 链 / 建之一
- [ ] 成文型：raw 头有 `url:`；已查重无重复；至少一页 Concept/Entity（或 Reference）链到该 raw
- [ ] 成文默认**无** Reference；若建了则 `resource:` 相对 + Notes `[打开 raw](...)`。书签型必须有 Reference
- [ ] Concept/Entity `sources`（或 Related）能点到 raw（回写则链到所据 wiki 页或原 sources）
- [ ] 本次写入（改+建）≤ 2（除非用户明确要求加页）
- [ ] 类型 `index.md` 被改动的条目带一句话；`log.md` 已更新
- [ ] 已做结构体检：无影响则沉默；有影响则已提示用户并等待「改/不改」
