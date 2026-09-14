---
type: Concept
title: "Engineering Bot"
description: "长期守一个领域、带岗位记忆与工具权限的带队角色：接任务、创建并跟进 Cloud Agent；人只处理产品取舍、权限和大影响面。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-14T20:00:00Z }
related:
  - role-first-agent
  - grok-bot
  - playbook-feedback-loop
sources:
  - ../references/javaguide-grok-bot-engineering.md
---

# Definition

**Engineering Bot**（Grok Bot for Engineering，Lingxi Li；JavaGuide 转述）是 Cloud Agent 前面的一层带队角色，不是又一个写代码窗口。多开几个 Codex / Claude Code / Cursor 谁都会；麻烦从任务跑起来之后才开始——这个在等权限，那个卡测试，PR 交了没人看截图和 Diff。15 个 Cloud Agent 靠人盯；要同时跑 200 个，得在前面再放一层。数字来自产品自述，无独立评测，普通团队复制不了这个规模；可复制的是分层。

两层：

- **Engineering Bot**：长期守一个领域（例：Baltata 移动共享层+iOS，Shaoruru 桌面+CI，Hogan 基础设施和归属不明，Craig Android，Quill Agent Harness）。持有岗位记忆、Skill、验收要求。创建 Cloud Agent，把说明、Skill、验收一起发出去；自己留在仓外读运行记录，卡住补消息，跑偏打断。
- **Cloud Agent**：进具体代码库修改、测试、开 PR。

人保留产品取舍、权限不足、影响面大的修改。领域长期专守，是因为每个 Bot 上下文有限——发任务时带上的规格更具体，而不是把全世界塞进单次会话。

接续靠共享看板（Notion 或 `TASKS.md`），不是靠聊天记录。工程 Bot 每 30 分钟扫 PR：CI 失败、合并冲突、安全告警。有问题把原 Cloud Agent 拉回 `Working`；都处理好才 `Ready for Review`，再跑独立审查。「移动端快照失败」后面要跟失败命令和 PR；只写「测试有问题」，换会话还得重查。

验收：截图必须出现需求点的变化（最好前后对照）；贴项目现有测试命令和结果；说明 diff 动了哪些文件；跑不通继续查，被权限卡住写清阻塞。口头「已修复」退回。Agent 连项目都启动不了，开再多窗口只是多几个等人的任务。

先把一两个任务跑到「能接续、能验证」，再加并行。定时巡检、自动提交、自动合并往后排。支付、权限、数据迁移、生产配置仍由人确认，留操作记录和回滚。岗位组织见 [Role-first Agent](./role-first-agent.md)；失误变全队默认见 [Playbook 反馈闭环](./playbook-feedback-loop.md)。

## Related

- [Role-first Agent](./role-first-agent.md)
- [Grok Bot](../entities/grok-bot.md)
- [Playbook 反馈闭环](./playbook-feedback-loop.md)
