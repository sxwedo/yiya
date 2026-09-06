---
type: Concept
title: "Playbook 反馈闭环"
description: "从任务失误复盘到更新共享 Playbook，并让其他 Bot 在下次任务默认加载新规则。"
status: draft
domain: agents
generated: { by: agent:yiya-librarian, at: 2026-09-05T14:57:00Z }
related:
  - grok-bot
  - agent-self-evolution-flywheel
  - delivery-harness
  - engineering-bot
sources:
  - /references/javaguide-grok-bot-engineering.md
---

# Definition

**Playbook 反馈闭环**把一次局部失误变成全队下次默认行为，而不是停在聊天复盘里。

典型路径（Grok Bot 侧示例）：运营/元 Bot 与工程 Bot 做 1:1 → 回看过早结束或漏步骤的判断 → 更新 Playbook → 通知其他 Bot 加载。

落到普通项目的最小形态：

- 连续跑错测试命令 → 正确命令与适用目录写入 `AGENTS.md` / Skill
- 漏掉合并前检查 → 用 CI 卡住，而不是靠提醒
- Code Review 总漏某类问题 → 补专用 Review Skill

密钥、禁写目录等硬边界应进权限规则 / Hook / Sandbox；只靠聊天提醒只管当前会话。与 Delivery Harness 的 Repair Loop 同族：终点是「下一次同类错误更早失败」。

## Related

- [Grok Bot](../entities/grok-bot.md)
- [Agent 自进化飞轮](./agent-self-evolution-flywheel.md)
- [Delivery Harness](./delivery-harness.md)
- [Engineering Bot](./engineering-bot.md)
