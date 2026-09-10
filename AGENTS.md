# yiya

三层：**raw（原料）→ domains/shared（知识）→ AGENTS/skills（约定）**。

流程：`.agents/skills/`（`yiya-ingest` / `yiya-lint` / `yiya-dream` / `yiya-explore` / `yiya-new-domain` / `yiya-promote-to-shared` / `yiya-delete-raw`）。问答协议在本文件，无独立 query skill。

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
2. **成文先续写与高内聚**：先定 Domain（`overview.md` / `config/domains.yaml`），再在目标域 + `shared` 找同指称 Entity/Concept。
   - **能改则改旧页**（补 `sources`、修润核心论点、增补对比）；但**严禁垃圾桶挂靠**：只有成文的核心论点直接支撑该概念时才追加，弱相关或仅顺带提及的不追加。
   - **过载拆分（Refactor）**：单页 `sources > 15` 或涵盖正交子主题时应触发拆解，不再硬塞；新建 Entity/Concept 合计日常 ≤2，但在执行授权的重构拆分时不计。
3. **Reference 降噪与防空心化**：
   - **废弃书签必建空心 Reference**：书签收录进 `raw/bookmarks/*.md` 后，直挂对应 Entity，无需为纯 URL 制造只有 5 行的跳转卡。
   - Reference 仅用于需撰写深度评注、拆解笔记的重磅专著/经典论文/权威规范；成文与普通书签**默认不建** Reference。
4. **链接一律相对路径**：`./x.md`、`../entities/y.md`、`../../../raw/...`；**禁**以 `/` 开头（GitHub 404）。目标含空格或括号 `()` 时必须写成 `[标题](<相对路径.md>)`，不能写成 `[标题](相对路径.md)`，否则 CommonMark 会截断，阅读页与 GitHub 都不认成链接。Frontmatter `sources:` / `resource:` 是 YAML 路径，不用加 `<>`。
5. **元数据单一事实来源（DRY）**：
   - Frontmatter `sources:` 专司**原料溯源**（机器可读，直链 raw 或深度 Reference）。
   - 正文 `## Related` 专司**维基网络互链**（人类与导航可读，链向相关 Entity / Concept / Overview），**禁止**无脑重复抄录几十条 raw 文章链接。

具名产品/框架/人 → **Entity**（仅当本文的稳定对象就是该具名物）；模式/方法 → **Concept**（模式文可以零 Entity）。盘点：Entity → Concept →（极少需）Reference。

## 问答

用户提问（不是入库 / 回写 / lint / 删除 raw）时：

1. 读 `shared/map.md` → 目标域 `overview.md` + **类型** `index.md` → 匹配的 Entity/Concept。域根 `index.md` 只是文件夹封面。
2. 用已有页作答，引用相对路径。wiki 缺口才读 raw。
3. **停。不改 wiki。**

完成：已打开 map + overview + 类型 index；引用了相对路径；raw 仅在缺口；未写 wiki。

要落盘时用户说「回写」→ `yiya-ingest` 回写分支。

## 入库与重构

| 类型 | 做什么 |
| --- | --- |
| 成文 | 文章/长帖，或一篇有稳定标题的官方指南：拉这一页 → `raw/articles/<作者>/` → 匹配核心 Concept/Entity 续写；无匹配且必要才新建 |
| 书签 | GitHub → `github.md`；产品/机构首页 → `sites.md`；docs 门户/根 → `docs.md`；工具 → `tools.md`。直接在对应 Entity 记录或补链，不建空心 Reference |
| 重构 (Refactor) | 当 Concept 出现概念漂移、`sources > 15` 或包含非核心杂质时：剥离非核心 raw 链接，提炼拆分出独立子概念或回归内聚定义 |

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
