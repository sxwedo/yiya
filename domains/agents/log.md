# Agent 与 Grok Bot — Log

## 2026-09-06
* **Update**: raw 层改为扁平 `articles/<人话标题>.md` + `bookmarks/` 列表；去掉 `library/YYYY/MM` 与 per-bookmark stub。
* **Update**: 书签型必须写 raw 链接 stub + claimed；回填 [earendil-works/pi](./references/earendil-pi-github.md) stub。
* **Update**: AGENTS + yiya-ingest 增加书签型入口（Entity + URL Reference，不灌整站）。
* **Entity**: 新建 [oh-my-pi](./entities/oh-my-pi.md)；更新 [Pi](./entities/pi.md) 与 overview 实体表；Advisor/TTSR/Minimal Harness 互链产品实体。
* **Decision**: 明确 Entity=具名产品/人；盘点顺序 Domain→Entity→Concept→Reference；修复「Pi 派」误解的根因（展示+词表+overview 空）。
* **Update**: 存量 Concept/Entity 补 `## Related` 互链与 `related:`；规则写入根 AGENTS.md / yiya-ingest。
* **Ingest**: [得物复合检索 Agent](./references/dewu-compound-retrieval-agent.md) → concepts [复合检索 Agent](./concepts/compound-retrieval-agent.md), [检索质量 Pipeline](./concepts/retrieval-quality-pipeline.md).
* **Ingest**: [货拉拉记忆在线侧](./references/huolala-llm-memory-online.md) → concepts [历史不等于记忆](./concepts/history-vs-memory.md), [在线记忆流水线](./concepts/online-memory-pipeline.md).

## 2026-09-05
* **Ingest**: [Agent 自进化飞轮](./references/agent-self-evolution-flywheel.md) → concepts [Agent 自进化飞轮](./concepts/agent-self-evolution-flywheel.md), [Harness 自改进](./concepts/harness-self-improvement.md).
* **Ingest**: [得物 MultiAgent 记忆](./references/dewu-multiagent-memory.md) → concepts [四层 Agent 记忆](./concepts/four-layer-agent-memory.md), [异步记忆沉淀](./concepts/async-memory-precipitation.md).
* **Ingest**: [Anthropic 多智能体失效](./references/anthropic-multiagent-failures.md) → concepts [多智能体失效模式](./concepts/multi-agent-failure-modes.md), [多智能体治理](./concepts/multi-agent-governance.md).
* **Ingest**: [WikiSkill](./references/wikiskill-three-layer.md) → concepts [WikiSkill 三层架构](./concepts/wikiskill-architecture.md), [知识与技能分离](./concepts/knowledge-skill-separation.md).
* **Ingest**: [Pi vs oh-my-pi](./references/pi-vs-oh-my-pi.md) → entity [Pi](./entities/pi.md), concept [Minimal Agent Harness](./concepts/minimal-agent-harness.md).
* **Ingest**: [AgentLoop 数据接入](./references/agentloop-data-ingress.md) → concepts [Agent OTel 探针](./concepts/agent-otel-probe.md), [Agent 遥测接入形态](./concepts/agent-telemetry-ingress.md).
* **Ingest**: [oh-my-pi 配置实操](./references/oh-my-pi-setup.md) → concepts [Advisor](./concepts/advisor.md), [TTSR](./concepts/ttsr.md).
* **Ingest**: [JavaGuide · Grok Bot 工程玩法](./references/javaguide-grok-bot-engineering.md) → concepts [Engineering Bot](./concepts/engineering-bot.md), [Playbook 反馈闭环](./concepts/playbook-feedback-loop.md).
* **Ingest**: [得物小摊 AI Native 演进实录](./references/dewu-delivery-harness.md) → concepts [Delivery Harness](./concepts/delivery-harness.md), [Evidence Gate](./concepts/evidence-gate.md).

## 2026-09-04
* **Initialization**: Slim scaffold (references / entities / concepts only).
* **Ingest**: [AI Engineering Skills Map: Using coding agents](./references/ng-coding-agents-skills.md) → [Coding Agent Workflow](./concepts/coding-agent-workflow.md) (2026-09-06).
