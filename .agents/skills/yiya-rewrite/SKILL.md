---
name: yiya-rewrite
description: >-
  Deep-read existing yiya sources and rewrite Entity/Concept pages into
  mechanisms and boundaries, not one-line summaries. Use when the user says
  精读, 重写, 按簇写, 不要只写摘要, 全量扫描, 实体太简单, or asks to deepen wiki
  pages from raw. Does not ingest new URLs. Not lint (that only reports).
argument-hint: "[cluster or page paths or 全量]"
---

# yiya-rewrite

把**已有** wiki 页按原料精读重写成可脱离 raw 复述的机制页。先读根 `AGENTS.md`。不抓新 URL（那是 `yiya-ingest`）；不扫结构（那是 `yiya-lint`）。Entity 正文骨架见 `templates/entity.md`。

## 何时用

用户要「精读原文再写」「实体/概念太薄」「按簇重写」「全量扫描重写 Entity」。日常入库仍走 ingest 深度条；本 skill 管**旧页**。

## 不要做

- **不给纯书签 Entity 注水**（只有 github/sites/docs/tools 行、没有成文 `sources` → Identity + Boundaries 一句 + Related）。即使用户说「全量重写」，书签卡也只出名单，不编未灌源码、不空填 Timeline/Mechanism。
- 不把清单/顺带文写进 `sources`（主旨判定同 ingest）
- 不在 `## Related` 堆 `raw/`
- 不假装读过未灌库的全书
- 不把 Notes 写进 `description`
- 一次不灌全库：按簇写。用户说「全量」时先分类再按簇推进，每簇停一下，除非他们说「都完成再停」

## 专文完成态

Entity 按 `templates/entity.md`：Identity ·（有则）Timeline · Mechanism ·（有则）Notes · Boundaries · Related。能脱离 raw 复述。禁止停在「上游仓库是 X。一句话简介。」Concept 仍写 Definition + 何时不用 + Related。

## 步骤

### 1. 定范围

- **点名页或簇**：只处理这些。
- **全量扫描**（`全量` / `实体太简单` / 未点名又要扫 Entity）：先分类，再动手。

```text
A 书签卡     0 成文 sources → 不重写成长文；可选补 kind / Identity 一句
B 专文薄页   有成文 sources，缺 Mechanism/Boundaries → 重写队列
C 已过关     骨架已齐 → 不因字数再写
D 原料不足   成文只是要点/公告 → 标明缺口，不注水
```

### 2. 精读

打开该页全部 `sources`（raw 或 Reference 的 `resource`）。读机制、数字、边界、对照，不读目录当已读。

### 3. 重写

保留 YAML `type` / `title` / `domain` / `sources`（可剥弱挂）。补 `kind`。按模板写正文，空节删除。深度对照 `domains/agents/concepts/harness-runtime-layer.md`。Related 只链 Entity / Concept / Overview。

### 4. 索引与 log

改了 `description` 则更新类型 `index.md`。`log.md` 前缀：`* **YYYY-MM-DD rewrite** | …`

### 5. 停

列出改了哪些页、故意没动哪些（书签/未灌全书/已过关）。用户说继续再下一簇。

## 完成标准

- [ ] 全量时已输出 A/B/C/D，不是直接开写 100 张书签卡
- [ ] 范围内每页都打开了对应 raw/Reference
- [ ] 专文 Entity 有 Identity / Mechanism / Boundaries；书签卡未注水
- [ ] Related 无 `raw/`；弱挂已从 `sources` 拿掉
- [ ] `index.md` / `log.md` 已更新
