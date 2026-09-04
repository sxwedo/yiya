# .agents

本仓库给 Agent 用的 **Skills**（可调用流程）。常驻规则仍在仓库根 [`AGENTS.md`](../AGENTS.md)。

| Skill | 何时用 |
|---|---|
| [`yiya-ingest`](./skills/yiya-ingest/SKILL.md) | 把文章/链接/剪藏入库并编纂少量知识 |
| [`yiya-lint`](./skills/yiya-lint/SKILL.md) | 检查某个 domain / shared bundle |
| [`yiya-new-domain`](./skills/yiya-new-domain/SKILL.md) | 新增一个领域 bundle |
| [`yiya-promote-to-shared`](./skills/yiya-promote-to-shared/SKILL.md) | 把跨域实体升格到 `shared/` |

对 Agent 可以说：`按 .agents/skills/yiya-ingest 处理这条 URL`。
