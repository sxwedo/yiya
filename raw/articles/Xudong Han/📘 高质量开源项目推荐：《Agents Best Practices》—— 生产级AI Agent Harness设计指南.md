---
title: "📘 高质量开源项目推荐：《Agents Best Practices》—— 生产级AI Agent Harness设计指南"
author: "Xudong Han (@Xudong07452910)"
url: "https://x.com/Xudong07452910/status/2061243832742912233"
ingested: "2026-09-07"
date: "Mon Jun 01 00:30:00 +0000 2026"
content_type: "note_tweet"
subtypes: []
type: "NoteTweet"
---

📘 高质量开源项目推荐：《Agents Best Practices》—— 生产级AI Agent Harness设计指南

这是一个 provider-neutral Agent Skill，专为 Claude Code、Codex 等 AI Coding 工具设计，提供构建可靠 agentic harness（运行时框架）的完整最佳实践参考。

核心理念非常清晰： “模型只负责提出动作，Harness 负责验证、授权、执行、记录并返回观察结果。”强调运行时严谨性而非仅靠 Prompt，让 Agent 从“偶尔能用”走向生产级可靠。

仓库包含大量实用内容：
1\. Agentic Loop（模型-工具-观察循环）
2\. 窄型工具与权限检查
3\. 规划模式、流程编排
4\. 上下文管理、记忆压缩
5\. 技能/连接器、提示缓存、可观测性、评估体系
6\. MVP Agent 蓝图生成、现有 Harness 审计清单等

特别适合正在使用 Claude Code、Codex 或构建多 Agent 系统的开发者、AI Agent 工程师和科研工作者。

与我之前推荐的《Learn Harness Engineering》和《Harness Books》高度互补，可作为理论+实践的进阶参考。目前已获得 1.2k+ stars ⭐。
[github.com/DenisSergeevit…](https://github.com/DenisSergeevitch/agents-best-practices)e

#AIAgent #ClaudeCode #HarnessEngineering #Codex
#AI教程

## 💬 Replies

### 1 @cuisitekp (卡牌大师崔斯特)

*Mon Jun 01 01:52:32 +0000 2026*

感谢老板分享啊。我详细研究了一下，这个项目整体理念是对的，但是用 Skill 本身的约束性还是不够，AI 经常会漏读 Skill 或者不按 Skill 走。

我们的方法是：
1\. 先利用 hooks 保证工作流的信息都会强制被 AI 读取
2\. 然后再告诉 AI 去调用 Skill

这样子就可以保证它 90% 的时候都会调用，都会按照工作流程走。
[github.com/mindfold-ai/Tr…](https://github.com/mindfold-ai/Trellis)

### 2 @Xudong07452910 (Xudong Han) (Author)

*Mon Jun 01 05:24:02 +0000 2026*

@cuisitekp 感谢分享你的实战经验！确实，单纯靠 Skill description 的约束力还是有限，AI 经常会‘选择性遗忘’。你们用 hooks 强制注入工作流信息再让它调用 Skill 的做法很聪明，能把遵循率拉到 90% 真的强！

### 3 @xindogchen (Xin Chen 🐉)

*Mon Jun 01 04:24:32 +0000 2026*

@Xudong07452910 这个 Agents Best Practices 的核心理念“模型只提动作，Harness 负责验证、授权、执行、记录和观察”真的戳中了当前 Agent 从玩具到生产级的最大痛点

### 4 @Xudong07452910 (Xudong Han) (Author)

*Mon Jun 01 05:47:47 +0000 2026*

@xincheng422315 完全同意！这正是当前 Agent 从玩具级走向生产级的最大瓶颈，光靠 prompt 堆再多也解决不了 runtime 的可靠性问题。《Agents Best Practices》把这个理念系统化地拆成了可落地的一整套 checklist 和 blueprint。

### 5 @pand_lin (shoa)

*Mon Jun 01 03:45:58 +0000 2026*

@Xudong07452910 当前还没有最佳实践

### 6 @Xudong07452910 (Xudong Han) (Author)

*Mon Jun 01 05:25:58 +0000 2026*

@pand\_lin 目前业界还处于探索阶段，真正成熟的‘最佳实践’还在不断迭代中。
不过《Agents Best Practices》这个 repo 已经把很多一线实践（尤其是 Claude Code / Codex 场景）系统化地整理出来了，可以当作当前最接近‘最佳实践’的参考材料。

### 7 @m13v_ (Matt)

*Mon Jun 01 01:31:02 +0000 2026*

@Xudong07452910 harness 把验证、授权、日志都管了，可长会话跑久了 auto-compact 还是会悄悄把刚记下的决策从上下文里丢掉。我们在 fazm 里把这些决策做成带间隔重排的 recall 卡，让你重看时主动想起，[fazm.ai/r/67hmytyi](https://fazm.ai/r/67hmytyi)

### 8 @Marcus_KCEX (Marcus)

*Mon Jun 01 02:42:07 +0000 2026*

@Xudong07452910 收藏即学废啊哈  
这架构图看麻了  
让我试试看能坚持读到第几章

### 9 @php_martin (Martin)

*Tue Jun 02 16:38:58 +0000 2026*

@Xudong07452910 Agent最佳实践太及时了！Codex真正生产力靠的是喂养体系。我整理的7工具（语音→截图→第二大脑）+风险笔记，能让Agent从玩具变成可靠员工：[x.com/php\_martin/sta…](https://x.com/php_martin/status/2060416141961670749) 推荐一起对照着优化！

### 10 @ace_prooflayer (Hichem Benali)

*Mon Jun 01 08:44:16 +0000 2026*

@Xudong07452910 The harness is where most agent reliability lives or dies,

Closed by Default + code-generated receipts turn a fragile loop into something auditable ✅️

### 11 @TheKryptoWiz (The Crypto Wiz)

*Mon Jun 01 04:13:44 +0000 2026*

@Xudong07452910 Provider-neutral harness design is the right frame. Models propose moves, but the harness decides whether the work is repeatable, testable, and worth trusting.

### 12 @Ayuan_cc (Ayuan)

*Mon Jun 01 02:48:53 +0000 2026*

@Xudong07452910 哥你发的我要看不完了

### 13 @CoCo_AIxWeb3 (CoCo_AI)

*Mon Jun 01 08:21:48 +0000 2026*

@Xudong07452910 這篇《Agents Best Practices》開源指南寫得非常實用
專門給Claude Code、Codex這類工具設計生產級agent harness
強調模型只負責提出動作，Harness負責驗證執行
我覺得這種工程化思維正是目前agent從玩具走向可靠的關鍵

### 14 @Lilian11120981 (Dr. Signal)

*Mon Jun 01 01:34:48 +0000 2026*

@Xudong07452910 行吧，AI都开始讲最佳实践了，人类程序员是不是可以退休了。。不过感觉最后还是得人背锅，懂了

### 15 @Junexus_indie (仁戈)

*Mon Jun 01 02:59:50 +0000 2026*

@Xudong07452910 这不就是给AI戴上安全帽再上工地吗，终于不是全靠提示词玄学了啊。

能把Agent从“会整活”拉到“真能上线”，这星涨得一点不冤哈。

### 16 @jdcastrori (Julian David Castro)

*Mon Jun 01 14:20:55 +0000 2026*

@Xudong07452910 This is the right split.

The model proposes. The harness validates, authorizes, executes, logs, and returns observations.

For real workflows, the runtime is the product surface: permissions, receipts, evals, rollback, review.

Which part do teams usually skip first?

### 17 @zuanshaonian111 (zi 7)

*Mon Jun 01 02:43:56 +0000 2026*

@Xudong07452910 天啊 这项目真硬核  
模型画饼 你干活是吧  
生产级Agent的保姆级教程

### 18 @S3Eg5YAPlr41879 (kacy)

*Tue Jun 02 10:43:37 +0000 2026*

@Xudong07452910 try it

