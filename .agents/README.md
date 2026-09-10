# .agents

本仓库给 Agent 用的 **Skills**（可调用流程）。常驻规则与**问答协议**在仓库根 [`AGENTS.md`](../AGENTS.md)。问答没有独立 skill。

| Skill | 何时用 |
| --- | --- |
| [`yiya-ingest`](./skills/yiya-ingest/SKILL.md) | 入库（成文/书签/docs 根）或用户说「回写」时把结论续写进已有页 |
| [`yiya-lint`](./skills/yiya-lint/SKILL.md) | 检查某个 domain / shared bundle（知识项仅当用户说全面体检 / lint 知识） |
| [`yiya-dream`](./skills/yiya-dream/SKILL.md) | 从现有 Entity/Concept 缺口向外搜，只写 `raw/_inbox/research/dream/<日期>.md` 候选表 |
| [`yiya-explore`](./skills/yiya-explore/SKILL.md) | 按订阅热源探索（不绑当前图），只写 `raw/_inbox/research/explore/<日期>.md` 候选表 |
| [`yiya-new-domain`](./skills/yiya-new-domain/SKILL.md) | 新增一个领域 bundle |
| [`yiya-promote-to-shared`](./skills/yiya-promote-to-shared/SKILL.md) | 把跨域实体升格到 `shared/` |

对 Agent 可以说：`按 .agents/skills/yiya-ingest 处理这条 URL`。
