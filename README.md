# yiya

个人知识库。

原料进 `raw/`，知识进 `domains/` 与 `shared/`，约定进 `AGENTS.md`。

> 知识一次编译，交叉引用复利。不是每次检索重挖。

## 结构

```
raw/               原文与书签，正文不改
domains/<id>/      分域 wiki：entities · concepts · references
shared/            跨域实体与纲领
private/           敏感内容，不进 git
AGENTS.md          问答、入库、红线
.agents/skills/    ingest · lint · dream · explore · …
```

起步域：[Agent 与 harness](domains/agents/overview.md) · [工程与可维护性](domains/engineering/overview.md) · [设计与人读面](domains/design/overview.md)。

## 阅读

```bash
./web.sh start    # http://localhost:5173/
./web.sh stop
```

没有 `web/node_modules` 时会先安装依赖。也可用 Obsidian 打开本仓库。

查询从 [地图](shared/map.md) 进入目标域。

## Agent

```text
按 .agents/skills/yiya-ingest 处理 <URL>
按 .agents/skills/yiya-delete-raw 处理 <路径>
```

提问先读地图与域 overview。细则见 [AGENTS.md](AGENTS.md)。

## 来源与许可

本库中的原文与摘录主要整理自互联网上已公开的文章、帖文与站点，仅供个人学习与备忘。著作权仍归原作者与原发布方所有。

若您认为某条内容不宜保留，请开 Issue，会尽快核实并处理。

代码与约定文件以 [MIT License](LICENSE) 发布。
