# yiya

三层：**raw（原料）→ domains/shared（知识）→ AGENTS/skills（约定）**。

流程：`.agents/skills/`（`yiya-ingest` / `yiya-lint` / `yiya-new-domain` / `yiya-promote-to-shared` / `yiya-delete-raw`）。问答协议在本文件，无独立 query skill。

## 架构

```
raw/
  _inbox/                      # 未分域
  bookmarks/github.md|sites.md|docs.md|tools.md  # 仓库 / 产品站 / 文档门户 / 在线工具
  articles/<作者>/<标题>.md    # 成文；无作者 → _unknown/
  articles/_media/<slug>/      # 配图（不进作者目录）
domains/<id>/                  # OKF bundle：entities/ · concepts/ · references/（按需）
shared/                        # 跨域实体与纲领
```

域路由见 `config/domains.yaml`。敏感进 `private/`（不进 git）。

## 四条规矩

1. **raw 正文不改**（除非人类授权删除/替换）
2. **成文先续写**：先定 Domain（`overview.md` / `config/domains.yaml`），再在目标域 + `shared` 找同指称 Entity/Concept。能改则改旧页并追加 `sources`（**改旧页不限数量**）。找不到才建页。**新建** Entity/Concept/Reference 合计 ≤2。bookmarks 表、类型 index、`log.md`、overview 实体表不计。`sources` + Related **直链 raw**（相对路径）
3. **Reference**：书签型必须有；成文默认不建（多页都直链 raw）。历史 Reference 先留
4. **链接一律相对路径**（`./x.md`、`../entities/y.md`、`../../../raw/...`）；**禁**以 `/` 开头（GitHub 404）

具名产品/框架/人 → **Entity**（仅当本文的稳定对象就是该具名物）；模式/方法 → **Concept**（模式文可以零 Entity）。盘点：Entity → Concept →（可选）Reference。

## 问答

用户提问（不是入库 / 回写 / lint / 删除 raw）时：

1. 读 `shared/map.md` → 目标域 `overview.md` + **类型** `index.md` → 匹配的 Entity/Concept。域根 `index.md` 只是文件夹封面。
2. 用已有页作答，引用相对路径。wiki 缺口才读 raw。
3. **停。不改 wiki。**

完成：已打开 map + overview + 类型 index；引用了相对路径；raw 仅在缺口；未写 wiki。

要落盘时用户说「回写」→ `yiya-ingest` 回写分支。

## 入库

| 类型 | 做什么 |
|---|---|
| 成文 | 文章/长帖，或一篇有稳定标题的官方指南：拉这一页 → `articles/<作者>/`（官方文档作者用官方名）→ 先改已有页 |
| 书签 | GitHub → `github.md`；产品/机构首页 → `sites.md`；docs 门户/根 → `docs.md`；打开即用的检测/查询 → `tools.md`。挂 Entity + Reference |

官方文档怎么判、步骤、结构体检见 `yiya-ingest`。查重扫 raw 头 `url:`；认领=知识页链上该 raw。

## 删除

点名 `raw/` 路径 → `yiya-delete-raw`（整条清）。

## OKF

必有 `type`。字段照 `templates/`。保留名：`index.md` / `log.md`。

## 红线

- 成文 raw 入库时须写/更新链到它的 Concept/Entity；查重先扫 raw 的 `url:`
- 不删 raw 原件（除非用户点名 `raw/` 路径 → `yiya-delete-raw`）
- 不类型集邮；不平行发明第二套元数据
- 入库后按 ingest 做结构体检；有建议则停，等用户说「改」再动约定
