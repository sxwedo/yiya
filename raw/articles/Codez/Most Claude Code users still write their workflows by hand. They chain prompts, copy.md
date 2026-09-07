---
title: "How to master Dynamic Workflows in Claude Code: 6 patterns and 14 steps Anthropic engineers actually"
author: "Codez (@0xCodez)"
url: "https://x.com/0xCodez/status/2062127385923776831"
ingested: "2026-09-07"
date: "Wed Jun 03 11:00:55 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 How to master Dynamic Workflows in Claude Code: 6 patterns and 14 steps Anthropic engineers actually

Most Claude Code users still write their workflows by hand. They chain prompts, copy outputs, paste them into the next prompt, fix what went wrong, repeat.

9 out of 10 builders haven’t tried Dynamic Workflows even once, even though they shipped two weeks ago.

They write 50 prompts when one workflow would do. This is the 14-step roadmap and the 6 patterns Anthropic’s own engineers actually use - for migrations, research, sorting, root-cause, triage, and evals.

> Follow my Substack to get fresh AI alpha: [movez.substack.com](https://movez.substack.com/)

Dynamic Workflows shipped in Claude Code on May 28, 2026. The default Claude Code harness is built for coding - and that works well for most coding tasks. But there are classes of work where one context window starts to break down: long-running, massively parallel, highly structured, or adversarial. 

For those, Anthropic used to build custom harnesses themselves (Research, Code Review, agent teams). With Dynamic Workflows, Claude writes that harness for you on the fly, custom-built for your task, in JavaScript.

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_2.png)

14 steps. 6 patterns. One workflow instead of fifty prompts.

---

Part 1 · The Mental Model

## 01\. A workflow is a harness Claude writes.

The default Claude Code harness has Claude plan and execute in the same context window. For most coding work, this is great. For long-running, parallel, or adversarial work, it breaks down. 

A Dynamic Workflow is Claude writing its own custom harness for the task - a JavaScript file with a few special functions that spawn and coordinate subagents, plus standard JavaScript (Math, JSON, Array) to process the data flowing between them.

[Embedded Tweet: https://x.com/i/status/2060054180379689074]

Three things this gives you that the default harness cannot:

- Per-agent isolation. Each subagent gets its own context window with one focused goal. No cross-contamination.

- Per-agent model choice. The workflow picks which model each subagent uses - Opus for hard reasoning, Haiku for cheap exploration, Sonnet for the middle.

- Per-agent isolation level. Worktree (isolated git checkout) or remote (no checkout). The workflow decides what each agent needs.

Start one by either asking Claude directly (“make a workflow that…”) or with the trigger word ultracode. If a workflow is interrupted - user action, terminal quit - resuming the session picks up where it left off.

---

## 02\. The 3 failure modes workflows solve.

To know when a workflow is the right tool, you have to know what it fixes. The longer Claude works on a complex task in a single context window, the more it becomes susceptible to three specific failure modes - named directly in the Anthropic launch writing:

- Agentic laziness - Claude stops before finishing a complex, multi-part task and declares done after partial progress. Addresses 20 of the 50 items in a security review and calls the rest “handled.”

- Self-preferential bias - Claude prefers its own results when asked to verify or judge them against a rubric. A verifier with skin in the game can’t be a fair verifier.

- Goal drift - the gradual loss of fidelity to the original objective across many turns, especially after compaction. Each summarization step is lossy. “Don’t do X” constraints quietly disappear at turn 47.

A workflow solves all three structurally: separate Claudes with their own contexts, focused goals, and isolated state. If your task suffers from any of these patterns - that’s the signal to reach for a workflow.

---

## 03\. Static vs Dynamic workflows.

You may have already built static workflows using the Claude Agent SDK or claude -p - coordinating multiple Claude Code instances together. 

- Static workflows are generic: written once to handle every edge case. They work, but they have to be conservative.

- Dynamic Workflows are different: Claude writes this workflow for this task. The harness is tailor-made. Below is the same question handled both ways:

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_3.png)

The reason the dynamic version wins isn’t the search step - both can search. 

It’s that the workflow gets to shape itself around your context: read your billing code, check each feature against the actual new provider docs, price at your transaction volume, and run an adversarial “why not to migrate” pass against its own emerging answer. 

A static harness can’t do this because it doesn’t know your code exists.

---

## 04\. The core API. agent(), parallel(), pipeline().

Three functions do most of the work in a workflow. Knowing them is enough to read any workflow Claude writes for you and to nudge Claude when you want a specific shape.

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_5.png)

parallel() is a barrier: it fans out, then waits for everything before returning. pipeline() is streaming: each item flows through every stage independently. 

Pick by the question: do I need all results before I can do anything next? Yes → parallel. No → pipeline (cheaper, faster overall).

---

## 05\. Classify-and-act. Route the work before doing it.

A classifier agent decides on the type of task, then the workflow routes to different agents or behaviors based on the answer. Or a classifier runs at the end, sorting raw outputs into buckets for whatever comes next.

When this pattern earns its keep:

- The task is heterogeneous - different sub-types need different treatment.

- You want to spend the expensive model only where complexity demands it (classifier on cheap, then route to Opus only when needed).

- The decomposition of work is itself non-trivial and benefits from a model deciding the shape.

Example: “Explain how the auth module works.” A classifier subagent reads the codebase first, estimates complexity, then routes the actual explanation task to Sonnet for a 10-file module or Opus for a 100-file one. The right model for the job, decided after the work is understood.

---

## 06\. Fan-out-and-synthesize. Many small steps, one merged result.

Split a task into many smaller steps. Run an agent on each step in parallel. Synthesize the results into one answer. 

The synthesize step is a barrier - it waits for every fan-out agent, then merges their structured outputs.

Why this pattern dominates in practice: it solves the “too many things at once” failure of single-context work. Each subagent sees only its piece. The orchestrator never gets distracted by 50 unrelated details. 

Each step benefits from its own clean window so they don’t cross-contaminate.

Use this when:

- You have a clearly enumerable list of work items (50 files, 200 endpoints, 100 reviews).

- Each item is independent - no item needs another’s output to begin.

- You want a single consolidated answer at the end, not a pile of partial reports.

\`\`\`python
// Fan out: one agent per file. Barrier: wait for all.
const reviews = await parallel(
  files.map(file =&gt; () =&gt; agent(
    \`Review ${file} for security issues\`,
    { model: "haiku", schema: IssueList }
  ))
)

// Synthesize: one Opus agent merges everything.
const report = await agent(
  \`Merge these reviews into one prioritized report:\\n${JSON.stringify(reviews)}\`,
  { model: "opus" }
)
\`\`\`

---

## 07\. Adversarial verification

This is the structural fix for self-preferential bias. For each spawned agent, run a separate spawned agent that adversarially verifies its output against a rubric. The verifier has never seen the original work; it can’t favor it.

The pattern matters most for:

- Claim-checking - every factual statement in a report gets its own verifier subagent, checking against the original source.

- Code review - the author agent writes the fix, the reviewer agent (separate context) reviews it. Never the same Claude judging itself.

- Quality gates - before any artifact ships, an adversary tries to find the weakest case against it. If the adversary can’t, you ship.

The pairing rule: the verifier should know only the rubric and the artifact, not who produced it. Otherwise self-preference creeps back in through hints in the prompt.

---

## 08\. Generate-and-filter.

Generate a number of ideas on a topic, then filter them by a rubric or by verification. Dedupe duplicates. Return only the highest quality, tested ideas.

Where this pattern shines:

- Brainstorming - 30 product names, then a verifier kills clichés, trademark conflicts, and weak phonetics. You see 3.

- Hypothesis gene - 5 different approaches to a problem, then each gets scored against your constraints. The winner has earned it.

- Solution design  - 5 different approaches to a problem, then each gets scored against your constraints. The winner has earned it.

The opposite of asking Claude for “the best answer.” Asking for the best answer makes Claude commit early. Generate-and-filter makes Claude commit late, after every option has been challenged.

---

## 09\. Tournament. Pairwise comparison beats absolute scoring.

Instead of dividing the work, have agents compete on it. Spawn N agents that each attempt the same task using different approaches, then judge the results in pairwise fashion until one wins. 

Comparative judgment is more reliable than absolute scoring - especially for taste-based work.

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_6.png)

Why this beats sort-by-score: trying to sort 1,000 items in one prompt fails on two fronts - quality degrades, and it won’t fit in context. A tournament splits the bracket across fresh agents, each comparing just two items. 

The bracket itself lives in deterministic loop code, not in context. Each comparison is fast, fair, and isolated. Same idea works for taste-based ranking: design choices, candidate selection, content prioritization.

---

## 10\. Loop until done.

For tasks with an unknown amount of work, loop spawning agents until a stop condition is met - no new findings, no more errors in the logs, theory verified - instead of running a fixed number of passes.

This pattern is the answer to “keep going until it’s actually done”:

- Flaky test debugging - reproduce, form theories, test them, until one theory holds.

- Bug hunting - keep finding bugs until a full pass returns zero.

- Mining for patterns - cluster, identify rules, until no new clusters appear.

Pair this pattern with /goal to set a hard completion requirement (“don’t stop until one theory works”) and with /loop if you want the entire workflow itself to run on a recurring schedule. 

The bracket and the stop condition live in code; only the active iteration stays in context.

---

## 11\. Compose patterns for real use cases. One workflow, several patterns.

The 6 patterns rarely appear alone. A real workflow composes 2-4 of them. The matrix below pairs each use case from the Anthropic launch writing with the patterns it tends to use:

- Migrations and refactors. Fan-out (one agent per callsite/failing test in a worktree) → adversarial verification (a separate agent reviews each fix) → loop until done. This is the pattern Anthropic used to rewrite Bun from Zig to Rust.

- Deep research (the /deep-research skill). Fan-out (parallel web searches) → adversarial verification (each claim verified independently) → synthesize (one cited report).

- Deep verification of a draft. Identify all factual claims (one agent) → fan-out (one verifier per claim, each agent checks against source) → meta-verifier (checks the verifier’s sources are high quality).

- Sorting 1,000+ items. Tournament (steps 5-9) - pairwise comparison, bucket-rank, or bracket. Comparative judgment, never absolute scoring.

- Memory and rule adherence. Verifier per rule (fan-out) → skeptic persona reviews the rules themselves to avoid false positives.

- Root-cause investigation. Generate theories from disjoint evidence (different agents read logs, files, data) → panel of verifiers and refuters for each theory → loop until one survives.

- Triage at scale. Classify-and-act → dedupe against existing tickets → either attempt the fix or escalate. Pair with /loop for continuous triage.

- Exploration and taste (design, naming, UI choices). Generate-and-filter (5-20 options) → tournament with a rubric → rank or pick.

- Lightweight evals. Run the candidate in a worktree → comparison agents grade against rubric → refine and re-grade. Same shape as a tournament but for grading, not ranking.

The right way to internalize these: identify which failure mode your current task is failing under, then pick the pattern that structurally prevents it. 

Drift → fan-out. Self-preference → adversarial verification. Open-ended → loop until done. Hard-to-score → tournament.

---

## 12\. Pair with /goal, /loop, and token budgets.

Workflows can be expensive. Three controls turn them from “cool but costly” into “a tool I run unattended.”

- /goal sets a hard completion requirement. Pair it with the loop pattern: “don’t stop until one theory works.” Without /goal, a workflow stops at a soft completion point. With /goal, it iterates until the actual end condition is met.

- /loop runs the entire workflow on a recurring schedule. Use it for workflows you want running continuously - triage, weekly research updates, recurring verification.

- Explicit token budgets. Tell Claude in the prompt: “use 10k tokens.” This sets a cap on the workflow run. Without a cap, an ambitious workflow can balloon to 5–10× the tokens you expected.

\`\`\`python
&gt; ultracode quick adversarial review of this assumption:
  "moving to Postgres eliminates our shard rebalancing."
  Use 5k tokens. /goal don’t stop until you have either
  a counterexample or three independent confirmations.
\`\`\`

Quoting the Claude Code team directly: “Best practices are still developing. Dynamic workflows often use more tokens, so think carefully about when and how to use them.” Most traditional coding tasks do not need a panel of 5 reviewers. 

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_4.jpg)

Ask yourself: does this task really need more compute? If a regular Claude Code session would finish it in five minutes, you don’t need a workflow.

---

## 13\. Use the quarantine pattern for untrusted input.

Any workflow that reads untrusted public content - support tickets, bug reports, user feedback, scraped data - needs to assume that content might contain prompt injection. 

The fix: quarantine. Bar the agents that read the untrusted content from taking any high-privilege actions. Separate agents, with no exposure to the raw content, do the acting.

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_1.png)

Any workflow that processes user-submitted content (support tickets, bug reports, customer feedback, social media), scrapes public web pages, or runs against output from a third-party API. 

If the input wasn’t written by you or a trusted teammate, quarantine it. A 30-line read-only reader agent costs almost nothing and removes an entire class of prompt injection risk.

---

## 14\. Save workflows. Ship them as Skills.

Once a workflow works, save it: press s in the workflow menu. Saved workflows go to \~/.claude/workflows. From there you have two paths:

- Keep it local - reuse it across your own projects.

- Ship it as a Skill - bundle the JavaScript file inside a Skill folder, reference it in SKILL.md, and anyone who installs the Skill runs the same workflow.

![Image](../_media/x-2062127385923776831/0xCodez_2062127385923776831_7.png)

One practical nuance worth knowing: when you package a workflow into a Skill, prompt Claude to treat the workflow as a template, not a script to run verbatim. 

That leaves room for Claude to adapt the workflow shape to the specific task at hand while keeping the overall structure intact. Especially useful for workflows like “deep verification” or “triage” that need to flex per use case.

---

## The mistakes that waste tokens on workflows

- Reaching for a workflow when a regular Claude Code session would do. Most traditional coding tasks don’t need a panel of 5 reviewers.

- No token budget. Ambitious workflows balloon to 5–10× what you expected without an explicit cap.

- One agent doing both the work and the verification. Self-preferential bias makes the verifier favor the worker. They must be separate.

- Treating parallel() and pipeline() as interchangeable. The barrier matters - parallel waits for all, pipeline streams.

- Skipping /goal on loop patterns. The workflow stops early at the first soft completion point. /goal forces hard completion.

- Letting untrusted content reach the actor. Quarantine isn’t optional once you process anything user-submitted.

- Sorting with absolute scores. Comparative judgment is more reliable. Use a tournament.

- Never saving working workflows. Re-prompting the same shape every week. Save with s, ship as a Skill.

---

## Conclusion: 

### 🖼️ Attached Media

![Image 1](../_media/x-2062127385923776831/0xCodez_2062127385923776831_8.jpg)

## 💬 Replies

### 1 @0xMovez (Movez)

*Wed Jun 03 11:40:32 +0000 2026*

@0xCodez Top-tier reading, Codez! I was about to start learning Dynamic Workflow! Thanks for the share, bro.

### 2 @gippp69 (Gipp 🦅)

*Wed Jun 03 11:07:14 +0000 2026*

@0xCodez Excellent setup, 100% bookmarking it

### 3 @0xCodez (Codez) (Author)

*Wed Jun 03 11:08:24 +0000 2026*

@gippp69 thanks, Gipp. Are you using Claude Dynamic wokflow yourself ?

### 4 @0xJeyx (Jey)

*Wed Jun 03 11:51:41 +0000 2026*

@0xCodez Dynamic workflow is the GOAT. I'm using it a lot in my work, it's burning tokens a lot, but it's worth it

### 5 @0xCodez (Codez) (Author)

*Wed Jun 03 11:53:50 +0000 2026*

@Jeyxbt one of the best Claude feature they shipped for the past time in my opinion

### 6 @0xMoysei (Moysei)

*Wed Jun 03 12:03:55 +0000 2026*

@0xCodez helpful for businesses, cool

### 7 @0xCodez (Codez) (Author)

*Wed Jun 03 12:59:51 +0000 2026*

@0xMoysei you are welcome Moysei !

### 8 @kiruwaaaaaa (kiruwaaaa)

*Wed Jun 03 11:15:03 +0000 2026*

@0xCodez Awesome article bro

### 9 @0xCodez (Codez) (Author)

*Wed Jun 03 11:15:46 +0000 2026*

@kiruwaaaaaa thanks browski ! happy its useful for you !

### 10 @rgk_degen (RGK)

*Wed Jun 03 12:14:32 +0000 2026*

@0xCodez useful article, thx bro

### 11 @0xCodez (Codez) (Author)

*Wed Jun 03 13:24:03 +0000 2026*

@rgk\_degen You are welcome brother. Happy it’s useful for you!

### 12 @RitOnchain (venus)

*Wed Jun 03 11:05:53 +0000 2026*

@0xCodez amazing alpha released!!

### 13 @0xCodez (Codez) (Author)

*Wed Jun 03 11:07:11 +0000 2026*

@RitOnchain Thanks, Venus! Dynamic Workflow is one of the most revolutionary things released by Claude in the past time, in my opinion.

### 14 @alphabatcher (Alpha Batcher)

*Wed Jun 03 17:38:53 +0000 2026*

@0xCodez best guide about how to be master in dynamic workflow

### 15 @rewind02 (rewind)

*Wed Jun 03 15:57:52 +0000 2026*

@0xCodez workflows are the real feature

### 16 @Nikitont (Nikiton)

*Wed Jun 03 14:43:52 +0000 2026*

@0xCodez Your work is getting better every day, keep going!

### 17 @Argona0x (Argona)

*Wed Jun 03 18:10:27 +0000 2026*

@0xCodez this is now in my top 5 best guides on dynamic workflows

### 18 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Fri Jun 05 16:10:17 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2050664755342475706)

### 19 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Fri Jun 05 16:09:58 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2061591753791004925)

### 20 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Fri Jun 05 16:09:32 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2062579164268445965)

### 21 @leakorsawe (Lea Marie Korsawe)

*Wed Jun 03 18:33:19 +0000 2026*

@0xCodez Anyone figured out how to save tokens? I already asked Claude to only use Sonnet for reading but it still burns through them like a crypto miner in 2021. 

![Image](../_media/x-2062127385923776831/leakorsawe_2062241233876001204_1.png)

### 22 @proyecto_26 (Proyecto 26)

*Wed Jun 03 21:50:46 +0000 2026*

@0xCodez @elonmusk wondering if you can include an "Export to Markdown" option from X to be able to download/use the content of this articles w/ custom agents? 🧐

### 23 @CY_Chase_AI (承越.Chase)

*Mon Jun 08 02:37:48 +0000 2026*

@0xCodez Your article is also very well written ！
Here are my usage tips 
[x.com/cy\_chase\_ai/st…](https://x.com/cy_chase_ai/status/2063779519203520592?s=46)

### 24 @Quasar0x (Quasar)

*Wed Jun 03 15:08:43 +0000 2026*

@0xCodez master of workflows is whole new level 

trying my best on them rn

### 25 @_usernamed_ (Shekhar Upadhaya)

*Mon Jun 08 13:54:57 +0000 2026*

@0xCodez Another interesting deck on harness engineering that might be a good read: [beontheloop.com/deck](https://www.beontheloop.com/deck)

### 26 @StuyBoyNY (StuyBoy From NYC)

*Thu Jun 04 04:42:24 +0000 2026*

@0xCodez @readwise save

### 27 @LeighStillard (Leigh Stillard)

*Sat Jun 06 03:30:21 +0000 2026*

@0xCodez @threadreaderapp unroll

### 28 @kennygao2046 (kennygao2046)

*Thu Jun 04 23:05:10 +0000 2026*

Anthropic 工程师实际使用的模式提炼为6种，也可组合使用：

Classify-and-act（分类-行动）
先用廉价模型分类任务类型，再路由到合适模型/流程。适合异构任务（不同子类型需要不同处理）。

Fan-out-and-synthesize（扇出-合成）
把任务拆成很多独立小任务，并行执行，最后由一个 barrier 合成最终答案。解决“一次性塞太多东西进上下文”的问题。

Adversarial verification（对抗性验证）
最重要模式之一。为每个工作 agent 配一个独立的 verifier agent（只知道 rubric 和产物，不知道是谁写的），专门找茬。这直接解决了 self-preferential bias。

Generate-and-filter（生成-过滤）
先大量生成（想法/方案/假设），再用 verifier 严格过滤、去重、打分。比直接问“给最佳答案”更可靠（避免过早承诺）。

Tournament（锦标赛/配对比较）
多个 agent 用不同方法做同一件事，然后两两比较（pairwise），而不是绝对打分。特别适合主观/品味类任务（设计、命名、UI 选择）。

Loop until done（循环直到完成）
结合 /goal 设置硬停止条件（“直到找到一个能工作的理论”或“直到零 bug”），而不是固定迭代次数。适合调试、root-cause 分析、模式挖掘等开放式任务。

真实工作流几乎都是 2-4 种模式的组合，例如：

大规模迁移/重构：Fan-out + Adversarial verification + Loop until done

深度研究：Fan-out + Adversarial verification + Synthesize

Root-cause 调查：多 agent 生成理论 → verifier/refuter 面板 → Loop

### 29 @dreadlockgeek (Pantera Negra)

*Fri Jun 05 13:13:29 +0000 2026*

@0xCodez Whoops wrong thread 🪡😂 this is cool

### 30 @ph4r05 (Dusan Klinec)

*Wed Jun 03 17:20:35 +0000 2026*

@0xCodez Workflows are awesome. But I do miss one thing though. It cannot emit an user question. AskUserQuestion tool is not available in the main workflow or spawned sub-agents.

### 31 @BLalwaysMattr (✊🏿✊🏾✊🏽✊🏼BLalwaysMattr‼️)

*Mon Jun 15 01:29:43 +0000 2026*

@0xCodez 👀

### 32 @yurii_nekrasov (nekrasov)

*Mon Jun 15 22:28:12 +0000 2026*

@0xCodez Good alpha bro 😎 👊

### 33 @cv_usk (cv usk)

*Wed Jun 03 22:24:23 +0000 2026*

@0xCodez I believe its most practical use is instantly deploying adversarial agents to rigorously stress-test complex LLM system architectures.

