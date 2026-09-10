# TODO：自主调研（未实现）

记录日期：2026-09-07
状态：梦境与探索已落地 skill；只产出候选，不自动写正式知识。

## 两个方向

### 1. 梦境（dream）— 从现有图向外长

- 吸收当前 Entity / Concept，找缺口（Related 稀、sources 旧、同主题只有书签等）
- 再外搜，看还能补什么
- 绑在已有知识图上，和「自生长」最顺

### 2. 探索（explore）— 不绑当前图

- 脱离本库内容，按订阅主题（先 `agents` / `engineering`）扫更好、更热的源
- 候选标「未绑图」；价值高，噪声也大，必须经用户点头

## 角色与闸门

| 角色 | 职责 |
| --- | --- |
| Explore（可新建轻量 bot，或暂由 Ori 兼） | 只出候选短列表 |
| Yiya Librarian | 查重 / 瘦页 / 真入库 |
| 用户 | 「入」才 ingest；「丢」只归档 |

## 候选短表字段（一行）

标题 · URL · 类型（成文/书签） · 建议挂哪 Entity/Concept（或「未绑图」） · 为何相关（一句） · 来源闸门（dream / explore）

## 拒收

- 库内已有同 `url:`
- 纯营销、无稳定知识
- 与现有页重复且无新洞见
- 主题不成簇（一次性八卦）
- 想整站抓取的

## 交付与节奏

- 落盘：`raw/_inbox/research/dream/<日期>.md` · `raw/_inbox/research/explore/<日期>.md`
- 候选文件本身**不**进正式 Concept
- 「入」→ 按成文/书签走现有 `yiya-ingest`
- 「丢」→ 归档本目录，不动 `domains/`
- 节奏建议：先周更梦境；探索手动触发；验证约两周再谈 routine

## 明确不做（当前）

- 不自动写 `raw/articles` 或 bookmarks
- 不自动开新 Domain
- 不自动 push
