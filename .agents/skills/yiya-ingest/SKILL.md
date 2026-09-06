---
name: yiya-ingest
description: >-
  Ingest a URL, article, or local clip into the yiya personal knowledge base
  (LLM Wiki + OKF + Domain). Use when the user asks to 入库, ingest, 抓取后写知识,
  claim raw, or process a link/file into yiya. Also when they say "按 ingest 跑"
  or mention clix read / download then generate knowledge.
argument-hint: "[url-or-path] [domain?]"
---

# yiya-ingest

把原料变成可维护的 OKF 知识。**先读仓库根 `AGENTS.md`**（路由、raw 命名、红线），本 Skill 只写步骤。

## 默认要瘦

一文默认只产出：

1. **1～2 个**高信号页：若文中有**具名产品/框架/公司/人**，其中至少 **1 个必须是 Entity**；模式/方法用 Concept。禁止只写 Concept、把产品名埋在正文里。
2. Concept/Entity 的 `sources` + Related **直链 raw**（相对路径）。**默认不建** Reference。
3. **才建 Reference**：① 一文拆出 ≥2 个 Concept/Entity 要共用来源卡；② **书签型**（仍要 Reference）。

禁止 Comparison / Synthesis / Question / Decision「集邮」。有清晰洞见再另开页。历史 Reference 不批量删。

盘点时按 **Entity → Concept →（可选）Reference** 报，避免 Entity 被 Concept 列表淹没。

## 入口判定

- **成文型**（文章/长帖）：走下方「捕捉正文 → raw → 概念/实体（直链 raw）」；仅多概念共用时才加 Reference。
- **书签型**（网站首页、GitHub 仓库、产品主页，用户只丢 URL、不要整站）：
  1. 判定 domain；建或更新 **Entity**
  2. **追加**到 `raw/bookmarks/github.md` 或 `sites.md` 表格一行（项目/站点、URL、作者、简介）；**不**建 per-project stub 目录，禁止整站正文
  3. 书签不进任何认领表（只在 bookmarks 表 + Entity/Reference）
  4. **一条** Reference：`resource:` 可指向对应 bookmarks 列表（或原文 URL）；正文写收藏理由；`tags` 含 `bookmark`（GitHub 再加 `github`）
  5. **不要** `clix read` 整站
  6. 已有同名 Entity（如 Pi）→ 只补 Reference、书签条目与 Related，禁止新建重复实体
  7. 完成标准：Entity + Reference + bookmarks 列表条目


## 步骤

### 1. 捕捉正文

- 若用户给了 URL：可用其指定工具（如 `clix read <url>`）拉取；失败则停住报错，**不要编造正文**。
- 若已是本地文件：直接用。

### 2. 写入 raw

1. **查重**：扫 `raw/articles/**/*.md` 的 frontmatter `url:`（及书签表 URL），已存在则停止或只补链，勿重复建 raw。
2. 先放 `raw/_inbox/`（或一步到位 articles）。
3. 成文：`raw/articles/<作者>/<人话标题>.md`（作者取 frontmatter `author:` 短名，去掉尾部 `(@handle)`；无作者用 `_unknown`；非法路径字符去掉或改全角）。**必须**有 `url:`（无 URL 的本地稿可写 `url: local:` + 说明）。
4. 配图：`raw/articles/_media/<slug>/`（`<slug>` 短、稳定、偏 ASCII；**不**放进作者目录）；正文相对链接写成 `../_media/<slug>/...`。
5. **不要**写 `raw-manifest.yaml`（已废除）。

`domain` 不确定就问用户；常见：`agents` / `engineering`；跨域实体资料可 `shared`。认领=下一步知识页链上该 raw。

### 3. 编纂 1～2 个概念/实体（默认）

- 用 `templates/concept.md` 或 `templates/entity.md`
- `sources` **直链 raw**（相对路径，如 `../../../raw/articles/<作者>/原文标题.md`）；Related 也可链 raw
- 只写以后还会被引用的稳定知识，不要复述全文
- **互链**：同文拆出的概念彼此加 `## Related` + 相对路径（同目录 `./foo.md`；同 bundle `../entities/bar.md`）；跨域用 `../../<domain>/concepts/...`。可写 `related:` frontmatter。不要建 backlinks 目录；**禁止**以 `/` 开头的路径。

### 4. 建 Reference（仅当需要）

仅当：一书 ≥2 概念共用，或书签型。在目标 bundle 的 `references/`：

- 复制 `templates/reference.md`
- `type: Reference`
- `resource` 用**相对路径**指向 raw（成文：`../../../raw/articles/<作者>/原文标题.md`；书签：`../../../raw/bookmarks/github.md` / `sites.md`）。**禁止**以 `/` 开头
- Notes **首条**加 `[打开 raw](相对路径)`；外链 URL 可另写
- 各 Concept/Entity 的 `sources` 可指这条 Reference，**或**仍直链 raw（二者择一写清即可）

### 5. 维护索引与 log

- 更新该 bundle `log.md`（新在前，日期 `YYYY-MM-DD`）
- 仅当有新页时，更新对应子目录 `index.md` 与必要时 `overview.md`

### 6. 结构体检（自生长）

对照根 `AGENTS.md` 与当前目录，判断本批入库是否冲击约定：

- 新 Domain？改路由？改 raw/书签/Reference/互链约定？跨域实体应升 `shared`？

**有实质建议**：回报里用短列表写出「建议改什么 + 为什么」，**停住等用户**说「改」再动 AGENTS/目录（可 @Ori）；说「不改」则 `log.md` 记跳过。
**无影响**：跳过提问，直接下一步。

禁止顺手开域或大改约定。

### 7. 回报

用简短列表告诉用户：raw 路径、新建了哪些 OKF 页；若有结构建议一并附上。不要贴长文。

## 完成标准

- [ ] 成文型：`raw/articles/<作者>/<人话标题>.md`（配图在 `_media/<slug>/`）；书签型：已追加到 `raw/bookmarks/github.md` 或 `sites.md`
- [ ] 成文型：raw 头有 `url:`；已查重无重复；至少一页 Concept/Entity（或 Reference）链到该 raw
- [ ] 成文默认**无** Reference；若建了则 `resource:` 相对 + Notes `[打开 raw](...)`。书签型必须有 Reference
- [ ] Concept/Entity `sources`（或 Related）能点到 raw
- [ ] Concept/Entity ≤ 2（除非用户明确要求加页）
- [ ] `log.md` 已更新
- [ ] 已做结构体检：无影响则沉默；有影响则已提示用户并等待「改/不改」
