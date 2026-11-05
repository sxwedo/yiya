---
type: Concept
title: "自主性分层"
description: "自主度不是一个数。Addy 拆 agency×orchestration 两轴；阿里 PA 拆「谁定义问题（L1–L5）× 做到哪一步」两轴。授权看问题定义权×失败代价；杠杆是把目标和验收规则说清，让 L5 降 L4、L4 降按规则执行。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-10-26T13:30:00Z }
related:
  - loop-engineering
  - auto-mode
  - role-first-agent
  - evidence-gate
  - multi-agent-architecture-selection
  - open-muse
  - today-ai
sources:
  - ../../../raw/articles/阿里技术/Personal Agent 落地思考：主动性从哪来，又卡在哪？.md
  - ../../../raw/articles/Addy Osmani/Agentic Autonomy Levels.md
  - ../../../raw/articles/CnSharp AI研究/阿里巴巴《AI Native 研发范式实践手册》解读.md
---

# Definition

**自主性分层**：两篇互不相识的文章做同一个动作——把「agent 自主性」从单轴梯子拆成两根独立的轴，因为一个数说不清「该放多开」。

- **Addy Osmani（2026-07，工程视角）**：Yegge 的 Gas Town L1–L5 单梯只回答「你信不信这一个 agent」。他拆成 **agency**（单个 agent 离你多远：建议→有界任务→奔目标自循环）× **orchestration**（多 agent 编排技能：一线程→各占 worktree→orchestrator 吃 backlog 做例外管理）。每一档的问题不是「在第几级」，是「这个任务配哪一级 + 什么验证能让这一级站得住」。
- **阿里技术（2026-10，Personal Agent 视角）**：横轴**谁定义问题**（L1–L5：定时/时间规则/触发条件都是用户定的，L1–L3 再聪明也只是按规则执行；L4 用户给目标、Agent 自己算「缺什么补什么」，前提是差距**可计算**；L5 连目标都是 Agent 推断的）。纵轴**做到哪一步**（告知→建议→内部执行→对外执行）。L3→L4 是质变。两轴独立：L5 可以停在告知，L3 也可以直接对外执行。

# Mechanism

1. **主动性来自「目标−现状=差距」。** 没目标就没差距，主动只是刷存在感。外显三件套：身份 + 数据源 + 记忆，缺一件主动性就缺一角（有身份没数据源=在场无事做；有数据源没记忆=群发通知；有记忆没身份=等你开对话框）。身份还送事件源：agent 有自己账号后，git push/merge 像 pipeline 触发一样唤醒它。
2. **PA 没发明新机制，只是把任务级 goal/loop/outcome 的周期放大。** 放大后三件事变了：主动性从加分项变刚需（用户长期不在场）；授权跟着子任务走、不跟着目标走；目标会漂，长周期里最危险的失败是「目标已错位、还在用力推」，需要关键节点重新对齐。
3. **能不能交出去，不看第几层，看两个问题：谁定义的（责任归属）× 失败代价（可撤回？影响谁？可验证？）。** Daisy 实测很诚实：每日 loop 产出 276 条 todo，loop 自己执行关闭 0 条，126 条是作者一次性手动核销；同 PA 的白名单自动回复（对外、不可逆）却敢放——因为规则全是自己定的。卡点不在能力，在「算错了谁担」。
4. **L4 与 L5 各有结构性风险。** L4：Agent 定义问题、责任在人，人会本能停在「建议」。L5：再叠一层「目标猜错」（Meta Muse 被曝推断用户没说出口的目标、读聊天邮件，引隐私争议），所以今天 L5 只适合停在告知。
5. **杠杆是显式对齐：说清目标，L5 降 L4；说清验收规则，L4 降为按规则执行，问题定义权和责任一起回到人手里。** 升仓实例：从「猜我关心什么」（discover 话题清单）→「对照专家目标算差距」→「符合入库规则（挂得上体系、来源一手、与已有结论冲突要标出）的直接入库」。Addy 侧同构：goal-driven autonomy 的停条件必须可自动化测量，模糊目标上不了 L4。
6. **治理侧的三阶段与交集权限（阿里手册，2026-10）。** 人机协同从本地辅助 → 云端自主 → 多 Agent 协同，实质是**信任边界外移**（从人身上，到云端运行时，再到 Agent Team 与跨系统授权）。Agent 同时踩中人、应用、服务账号三类主体的边界：复用人账号审计分不清，复用服务账号找不到责任人，当应用管表达不出「代表某用户做某任务」的委托语义——要新增主体模型。有效权限是交集：用户权限 ∩ Agent 能力上限 ∩ 平台策略 ∩ 本次委托范围 ∩ 运行时约束，每次调用重算，不是查一次表。内部 API 三态返回：允许/拒绝/**Challenge**——Challenge 让 Agent 暂停并向人说明要访问什么、为什么、影响什么，确认后只签覆盖本次的短期凭证。实习生类比只能用一半（要导师、边界、Review，但它没有职业伦理与归属感），治理靠机器可执行护栏，不靠文化。落地排序：可见（归属、负责人、任务记录）→ 可控 → 自主。

## Boundaries

不是 PA 产品卡（[Open Muse](../entities/open-muse.md)、[Today AI](../entities/today-ai.md)、Qoder Cloud Agents 只是本分层的产品化外壳）。单次工具调用批不批见 [Auto Mode](./auto-mode.md)；「可逆才放手」的岗位级授权见 [Role-first Agent](./role-first-agent.md)；多 agent 编排选型见 [Multi-Agent 架构选型](./multi-agent-architecture-selection.md)。文末 Qoder 推广段不展开。

## Related

- [Loop Engineering](./loop-engineering.md)
- [Auto Mode](./auto-mode.md)
- [Role-first Agent](./role-first-agent.md)
- [Evidence Gate](./evidence-gate.md)
- [Multi-Agent 架构选型](./multi-agent-architecture-selection.md)
- [Open Muse](../entities/open-muse.md)
- [Today AI](../entities/today-ai.md)
