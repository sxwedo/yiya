---
type: Concept
title: "WikiSkill 三层架构"
description: "Raw 不可变轨迹、Wiki 可复用知识、Skills 可执行规程。技能从知识生长；训练时不查 Wiki；拒 Skill 不回滚 Wiki。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - knowledge-skill-separation
  - llm-wiki
  - self-growing-kb
  - open-knowledge-format
sources:
  - ../references/wikiskill-three-layer.md
  - ../../../raw/articles/Hanako/KARPATHY JUST KILLED THE PROMPT ERA WITH A SINGLE DOCUMENT.md
  - ../../../raw/articles/飞叔慢谈/OKF 工程：一种新的语义表达范式正在形成.md
---

# Definition

**WikiSkill 三层架构**（Google Research，arxiv 2608.27454；Datawhale 解读）给 Agent 一条不靠更大模型的变强路径：经验、知识、技能分开，让技能从持久知识里长出来。

1. **Raw Layer** — 每次迭代的执行轨迹：完整推理、工具调用、输出。不可变。Wiki Maintainer 抽成败模式、Proposer 按需回看具体任务，都靠这层。覆盖或丢失，进化失去事实基础。
2. **Wiki Layer** — 把轨迹编译成结构化知识，跨迭代积累。`patterns/`：每个模式一个 markdown，失败原因或成功策略 + 可操作修复；`logs.md`：本轮发现了什么、改了什么；`skill-impact.md`：哪些改动被接受/拒绝，带 diff。Wiki 永不回滚，见 [知识与技能分离](./knowledge-skill-separation.md)。
3. **Skills Layer** — 当前生效集合。`SKILL.md` 给执行时读；`PURPOSE.md` 回答这个技能为了 Wiki 里哪个 Pattern 而存在，避免盲目打补丁。

每轮四步：

1. Inference Agent 用当前 Skill 在训练集 rollout，轨迹进 Raw。**训练时不能访问 Wiki。**
2. Wiki Maintainer 对采样后的成败轨迹做根因，更新 Pattern 和日志。
3. Skill Proposer 以 ReAct 读 Wiki 索引、查 skill-impact、按需读 Pattern 和轨迹，提出一次创建或补丁。
4. Gating 在验证集评估：升分则接受，否则回滚 Skill，Wiki 不动。

没有 Wiki，Proposer 每次从零分析原始轨迹。贡献不是新算法，是架构：知识在中间持续积累。

与 [LLM Wiki](../../../shared/concepts/llm-wiki.md) 同族（Raw 不可变、Wiki 可复利）。差别：LLM Wiki 编给人读的个人库；WikiSkill 编给 Agent 技能进化的模式库。人用的自生长库见 [Self-growing Knowledge Base](../../../shared/concepts/self-growing-kb.md)。


## Boundaries

编给 Agent 技能进化的模式库，不是给人读的个人 LLM Wiki。训练时不查 Wiki；拒 Skill 不回滚 Wiki。

## Related

- [知识与技能分离](./knowledge-skill-separation.md)
- [LLM Wiki](../../../shared/concepts/llm-wiki.md)
- [Self-growing Knowledge Base](../../../shared/concepts/self-growing-kb.md)
- [Open Knowledge Format](../../../shared/entities/open-knowledge-format.md)
