---
name: yiya-reflect
description: >-
  Review and synthesize yiya raw sources and knowledge nodes within recent
  days (default 7) into a high-signal learning report ("温故而知新").
  Identifies emergent themes, epistemic delta, digestion rates, thin nodes,
  and next actionable steps. Use when the user asks to 反思, reflect, 温故知新,
  复习, 学习报告, 周期总结, 周报, or review recent learning.
argument-hint: "[--days 7] [--domain <id>]"
---

# yiya-reflect

温故而知新。整理最近时间窗口（默认 7 天）内摄入的所有原料与沉淀的知识内容，萃取认知差与共性模式，诊断消化盲点，整合成结构化的高信噪比学习报告。

**先读仓库根 `AGENTS.md`**（三层架构与五条规矩）。本 Skill 只写分析与报告沉淀步骤。

不写流水账，不堆砌文件清单；核心在**从「温故」推导出「知新」**：

- **温故**：理清本周摄入了哪些原料、沉淀了哪些实体与概念、彼此如何连接；
- **知新**：提炼跨篇模式（Emergent Themes）、记录认知迭代（Epistemic Delta）、定位未消化盲点与薄卡，输出明确的后续精读或探索动作。

---

## 步骤

### 1. 扫描近期活动

在仓库根执行配套扫描脚本，捕获时间窗口内的原料成文、书签更新与知识节点变动：

```bash
python3 .agents/skills/yiya-reflect/scan.py --days 7
```

- 若用户指定了天数（如 `--days 14` / `最近两周`），带上对应 `--days`。
- 若用户限定了特定领域（如 `agents`、`engineering`、`design`、`trading`、`shared`），带上 `--domain <id>`。
- 需要机器结构化数据时可加 `--json`。

完成标准：获得近期文件变动全景、原料认领映射（谁被谁引用）、消化率、薄卡及孤岛节点统计。

### 2. 精读与脉络梳理（温故）

根据扫描结果，抽样深读核心变动文件：

1. **重点原料**：阅读本周期重要成文的前言、核心机制节，提炼核心事实。
2. **知识沉淀**：检查本周期新建或大幅修改的 Entity / Concept 页面，对照其 `sources` 与 `## Mechanism`。
3. **关联追踪**：看原料是如何被转化为知识的，哪些原料仅被「顺带挂靠」，哪些真正深化了词条。

完成标准：心中有清晰的「原料输入 → 知识沉淀」流转路径，而非单纯看标题。

### 3. 提炼知新（认知演化与模式涌现）

针对梳理出的内容，提炼出 3 个维度的深度思考：

1. **模式涌现（Emergent Themes）**：本周期输入的内容在呼应什么技术趋势或工程范式？（例如：从单 Agent Loop 演进至 Multi-Agent Control Plane、上下文工程中的缓存与剪枝策略、业务本体论驱动的 Data Agent）。
2. **认知差与演进（Epistemic Delta）**：新摄入的知识相比过去的常识或旧页面，推翻、修正或强化了什么假设？边界（Boundaries）在哪里收窄或拓宽了？
3. **方法论沉淀（Practices & Frameworks）**：提炼出可以直接指导实践的工程准则、设计经验或避坑指南。

完成标准：至少归纳出 2~3 个具有穿透力的模式主题，并指明具体的认知演化点。

### 4. 消化诊断与结构体检

评估知识资产的健康度与转化完整性：

1. **原料消化率**：本周期成文有多少篇尚未被任何知识页认领？（识别有价值但被遗忘的深文）
2. **机制薄卡（Thin Nodes）**：哪些页面虽然挂了成文 `sources`，但仍停留在摘要壳或缺少 `## Mechanism` / `## Boundaries`？
3. **图谱孤岛（Isolated Nodes）**：哪些新建词条 `Related` 链接 < 2，未与主知识网络交织？
4. **过载风险**：是否有单一概念被塞入过多异构 raw（`sources > 15`），需触发拆解重构（Refactor）？

完成标准：输出客观的盲点清单，作为下一步行动的数据基础。

### 5. 生成报告并落盘

学习报告落盘写入 `raw/_inbox/research/reflect/<YYYY-MM-DD>.md`（同日已有则追加序号 `-2`，如 `2026-09-17-2.md`）。

报告严格采用以下骨架：

```markdown
---
title: yiya 学习复盘报告 (YYYY-MM-DD)
date: YYYY-MM-DD
type: Research
period: YYYY-MM-DD ~ YYYY-MM-DD (N 天)
scope: all | <domain>
---

# yiya 学习复盘与认知演进报告

> 周期：YYYY-MM-DD ~ YYYY-MM-DD ｜ 覆盖范围：<scope>

## 一、基本盘盘点 (Digest)

- **输入原料**：成文 N 篇（已认领 M 篇，未转化 K 篇，转化率 X%），书签表更新 P 处
- **知识产出**：新建知识页 A 篇，修订知识页 B 篇
- **核心知识流转对照**：
  * `[原料简名](<相对路径.md>)` → 沉淀/更新 `[目标概念/实体](<相对路径.md>)`

## 二、核心脉络与模式涌现 (Emergent Themes)

### 1. [主题一：如 从 Loop 到 Harness 的工程收敛]
- **核心洞见**：...
- **技术机制与演变**：...
- **涉及词条/原料**：...

### 2. [主题二：如 业务本体驱动的数据智能体落地]
...

## 三、认知差与边界演化 (Epistemic Delta)

- **新认知立项**：...
- **旧认知修正/推翻**：...
- **适用边界明晰**：...

## 四、知识库消化诊断与盲点 (Digestion & Blind Spots)

### 1. 待消化原料（高价值未挂载）
- `[标题](<相对路径.md>)` — 为什么重要、建议挂载何处

### 2. 机制薄弱点（有原料但缺机制/边界）
- `[词条](<相对路径.md>)` — 缺少机制核心，建议执行 `yiya-rewrite`

### 3. 图谱孤岛与过载预警
- `[词条](<相对路径.md>)` — 孤立节点 / 过载风险

## 五、温故知新：下一步行动 (Next Horizons)

- [ ] **精读重写**：对 `X`、`Y` 执行 `yiya-rewrite`，补齐机制与边界
- [ ] **缺口探索**：围绕 `Z` 主题运行 `yiya-dream` 或 `yiya-explore` 拓展图谱
- [ ] **重构拆解**：对过载概念 `W` 进行多模式解耦
```

完成标准：报告已完整写入目标路径，所有 Markdown 链接符合 yiya 规范（内部相对路径，含空格或括号时使用 `<>` 包裹）。

### 6. 呈现与停

在会话中直接呈现报告的核心精华内容，列出落盘路径，提示用户：

- 哪些薄弱词条可直接调用 `yiya-rewrite` 精读深化；
- 哪些未认领原料建议通过 `yiya-ingest` 认领或归档；
- 停。不擅自修改任何 wiki 原正文。

---

## 完成标准

- [ ] 已运行 `scan.py` 统计近期数据
- [ ] 报告包含「基本盘盘点」「模式涌现」「认知差」「消化诊断」「后续行动」五大核心板块
- [ ] 内部链接一律采用相对路径，含空格/`()` 已用 `<>` 包裹
- [ ] 报告文件成功落盘至 `raw/_inbox/research/reflect/<日期>.md`
- [ ] 会话内已清晰向用户汇报学习结论，未在用户未授权下篡改已有 wiki 正文
