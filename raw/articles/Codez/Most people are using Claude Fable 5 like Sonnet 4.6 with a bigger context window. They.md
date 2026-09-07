---
title: "Build self-improving agent system with Fable 5 in 14 steps : loops, dynamic workflows, routines"
author: "Codez (@0xCodez)"
url: "https://x.com/0xCodez/status/2065089060104720776"
ingested: "2026-09-07"
date: "Thu Jun 11 15:09:34 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 Build self-improving agent system with Fable 5 in 14 steps : loops, dynamic workflows, routines

Most people are using Claude Fable 5 like Sonnet 4.6 with a bigger context window. They prompt it. It works for 5 minutes. They close the tab.

9 out of 10 users have never run an agent system that compounds - where every run leaves the next run smarter, every state file accumulates, every skill sharpens.

Fable 5 was built to run for days. You’re using it for minutes. This is the 14-step roadmap to build the self-improving system Fable 5 was designed for.

> Follow my Substack to get fresh AI alpha: [movez.substack.com](https://movez.substack.com/)

Claude Fable 5 launched June 9, 2026 - the first publicly available Mythos-class model, the tier Anthropic put one rung above Opus. 

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_3.jpg)

This is the 14-step roadmap to build the self-improving system Fable 5 was designed for - sourced from Anthropic engineering posts, the team’s public experiments, and verified against the launch documentation as of June 2026. 

Three tiers: what Fable 5 actually unlocks, the three primitives that make it compound (loops, dynamic workflows, routines), and the self-improvement layer that turns it into a system.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_5.png)

14 steps. 3 tiers. Stop prompting. Start building a system that compounds.

---

PART 1 · What Fable 5 actually unlocks

## 01\. Fable 5 is a Mythos-class model. Days-long autonomy is the headline.

Claude Fable 5 launched June 9, 2026 as the first publicly available Mythos-class model - the tier Anthropic introduced one rung above Opus. 

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_7.jpg)

Mythos Preview shipped in April through Project Glasswing to a handful of critical-infrastructure partners; Fable 5 is the version Anthropic considered safe for general release, with built-in safety classifiers that decline requests in high-risk areas. 

Mythos 5 (without those classifiers) remains Glasswing-only.

What Fable 5 actually does that previous Claude models couldn’t sustain, from Anthropic’s launch documentation:

- Days-long autonomous sessions. Run inside an agent harness like Claude Code or Claude Managed Agents (CMA), Fable 5 can work for days - planning across stages, delegating to sub-agents, and checking its own work.

- Self-verification built in. Writes its own tests to check its work. Uses vision to check outputs against goals. Distills lessons into general rules. Tests its own assumptions.

- Most ambitious code work. Large migrations, complex implementations, multi-day autonomous coding sessions. The headline use case Anthropic puts forward is “hand off large projects and review completed deliverables.”

- Multi-stage knowledge work. Deep research and analysis to deliverables ready for review - with minimal oversight.

The pricing matches the tier: $10 per million input tokens, $50 per million output tokens, with the existing 90% input token discount for prompt caching. 

Available on Claude API, AWS, Amazon Bedrock, Vertex AI, Microsoft Foundry, and the consumption-based Enterprise plan. This is not a subscription model. Heavy use earns its own bill.

---

## 02\. Self-improving is not self-learning.

The phrase “self-improving agent system” gets thrown around carelessly. The version that’s real and the version that’s hype are very different things, and the gap is worth understanding before you build anything.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_9.jpg)

- Self-learning - the agent updates its own weights based on what it learns. Fable 5 does not do this. No publicly available model does this in production. 

Recursive self-improvement (RSI) is the long-term direction Anthropic itself warned about in May 2026, not the capability shipping today.

- Self-improving - the system around the agent compounds. Each session writes lessons to memory. Skills sharpen as edge cases get added. 

State files accumulate verified facts. Eval loops refine prompts and rubrics. The model stays the same; the environment it runs in gets sharper.

Self-improvement, in this sense, is a property of the system you build. Fable 5 has the raw capability - long context, sub-agent delegation, vision self-check, days-long stamina - that turns the environment-feedback loop into something that actually compounds run over run. 

> Anthropic’s engineering team puts it directly:

“Rather than directly prompting and steering Fable 5, it’s often better to design loops that let the model self-correct in response to environment feedback (e.g., /goal or Outcomes) and manage its own context (e.g., via memory).”

---

## 03\. The compound stack: four layers, one feedback loop.

Figure 1 at the top of this article shows the architecture in one diagram. Read it from the bottom up - that’s the order the system gets built, and the order the leverage compounds.

- Layer 1 · Primitives. Fable 5 itself, sub-agents, worktrees, the tools the agent reaches for. Raw capability with no system around it yet. This is what most people use today.

- Layer 2 · Orchestration. /goal and Outcomes for self-correcting loops. Dynamic Workflows for complex multi-step orchestration. Routines for laptop-off cloud runs. This is what turns the primitives into a workflow.

- Layer 3 · Memory. State files, Skills, Knowledge Bases, lessons written down. Memory is what makes tomorrow’s session resume instead of restart.

- Layer 4 · Self-improvement. Vision self-checks, eval loops, rule distillation. The agent grades its own output, refines the Skill that produced it, writes the lesson back to memory. The loop closes.

The reason this architecture compounds: every output from layer 1 flows up through layer 4, where it gets graded, distilled, and written back to layer 3. Tomorrow’s run at layer 1 inherits the sharpened memory and refined Skills from yesterday. The model is stateless; the system around it isn’t.

---

## 04\. When to use Fable 5 vs Opus 4.8 vs Sonnet 4.6. The cost-capability matrix.

Fable 5 costs \~5× what Opus 4.8 does per token. Not every step in a self-improving system needs the top tier. The teams running this in production route by task complexity, not by default:

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_10.jpg)

- Fable 5 for the heavy-lift orchestrator role: planning across days, delegating to sub-agents, checking work with vision, distilling rules from accumulated evidence. 

Use Fable 5 where the “days at a time” capability earns its pricing.


- Opus 4.8 for hard-but-bounded subtasks the orchestrator delegates: architecture decisions, complex debugging, deep code reviews. Also the explicit fallback for any request Fable 5’s classifiers block (cyber, bio, chem, distillation).


- Sonnet 4.6 for high-volume worker tasks: lint passes, simple refactors, test scaffolding, doc updates. The bulk of fan-out work runs here.


- Haiku 4.5 for grader sub-agents and cheap classifiers. Independent context window, low cost - ideal for the verifier role Anthropic explicitly recommends.

The cost pattern that makes a self-improving system economical, used by teams running this in production: orchestrator on Fable 5, workers on Sonnet 4.6, graders on Haiku 4.5, fallback to Opus 4.8 on classifier blocks. Same pattern Anthropic engineers use internally.

---

PART 2 · The three Primitives

## 05\. /goal vs Outcomes. Two implementations of the same idea.

The Anthropic Claude Code team publishes two near-identical primitives for goal-driven loops  one in each harness.

They share the same shape: an independent grader checks the work, a not-met verdict starts the next iteration, the loop exits when the grader passes. 

The implementations differ in surface details that matter for which you use.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_6.jpg)

The decision rule between them is short:

- Use /goal in Claude Code when the work happens at your machine and you want a quick, in-session loop with a measurable end state. Best for hands-on coding, debugging flaky tests, refining a single file. Plain text goal, model grader, in-terminal feedback.

- Use Outcomes in CMA when the work needs to run for hours or days on Anthropic-hosted infrastructure with a sandbox, GPUs, or a controlled environment. Best for ML training, long-running migrations, multi-day research. File-based rubric with gradable criteria, sub-agent grader, hard max\_iterations bound.

Both share the structural move that makes them work: the agent that wrote the code is not the agent that grades it. We go deeper on why that matters in step 6.

---

## 06\. Verifier sub-agent beats self-critique. 

Anthropic engineer Prithvi Rajasekaran wrote a piece on the engineering blog showing models have a hard time self-critiquing their own outputs. The Claude Code team confirmed this empirically with Fable 5:

> “We’ve found that a verifier sub-agent tends to outperform self-critique with Fable 5" 

The mechanism is structural, not about “trying harder.” A model evaluating its own output sees its own reasoning trail and prefers conclusions consistent with what it already wrote. 

A separate model evaluating the same output sees only the artifact and the rubric. The verifier has no skin in the maker’s game.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_11.jpg)

What the chart actually shows, beyond the headline numbers:

- Fable 5 made larger structural changes - TRAIN\_SEQ\_LEN=2048 train+eval (−0.0179), overlapped sliding-window eval (−0.0207), int6 QAT + int6 expo (−0.0163). Each is an architecture-level move, not a constant tweak.

- Fable 5 pushed through a quantization regression to its biggest win - instead of reverting after a failed experiment, it continued investigating.

- Opus 4.7’s first experiment (QK\_GAIN\_INIT=5.0) produced a small win. Nearly everything that followed used the same template: adjust a scalar, measure, keep if positive. The shape is safer, not better.

The takeaway for system design: Fable 5 with an independent verifier explores larger hypothesis spaces and recovers from negative intermediate results. Without the verifier, the same model has nothing forcing it past the first “good enough.”

---

## 07\. Dynamic Workflows compose self-correction patterns. 

Dynamic Workflows shipped in Claude Code on May 28, 2026.

The idea: Claude writes its own JavaScript harness on the fly - a file with agent(), parallel(), and pipeline() primitives, plus standard JS to process the data flowing between them. The harness is custom-built for the task, not generic.

[Embedded Tweet: https://x.com/i/status/2060054180379689074]

For self-improving systems with Fable 5, three of the six documented Dynamic Workflow patterns earn their place:

- Fan-out-and-synthesize. Split the work into N independent pieces, run an agent on each in parallel, synthesize results. Best when each step benefits from its own clean context window - e.g., evaluating each rule in a Skill against historical examples.

- Adversarial verification. For each maker agent, spawn an independent verifier with no exposure to the maker’s reasoning. The structural fix for self-preferential bias from step 6, applied per task.

- Loop until done. Loop spawning agents until a stop condition is met -no new findings, no more errors in the logs, theory verified. Pair with /goal to set a hard completion requirement.

The two patterns that don’t typically appear in self-improving systems but are worth knowing: classify-and-act (route the task to the right model based on a classifier) and tournament (pairwise comparison for taste-based ranking). The first is useful for model routing (step 4). 

The second is rare in coding loops but useful for design or naming tasks.

---

## 08\. Worktrees for parallel safety. Days-long Fable 5 sessions, no file collisions.

The moment a self-improving system spawns more than one agent, files start colliding. Two agents writing the same file is the same problem as two engineers committing to the same lines without talking first. 

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_4.png)

A git worktree fixes it - a separate working directory on its own branch sharing the same repo history, so one agent’s edits literally cannot touch the other’s checkout.

For self-improving systems where Fable 5 spawns sub-agents to verify or specialize, worktrees are non-optional:

- Maker writes in worktree A. Verifier reads in worktree B (or runs against the worktree A checkout with read-only filesystem). No risk the verifier’s exploration touches the maker’s state.

- Parallel structural experiments. If Fable 5 explores multiple architecture changes (like in Parameter Golf), each experiment runs in its own worktree. The orchestrator collects results from all of them; the best one merges.

- Days-long runs with checkpoints. Each major phase can be a separate worktree. A failed phase doesn’t poison the rest.

In Claude Code, worktrees are exposed three ways: git worktree directly, a --worktree flag to open a session in its own checkout, and an isolation: worktree setting on subagents so each helper gets a fresh checkout that cleans itself up after the session ends.

---

## 09\. Routines for days-long orchestration. Laptop closed. Fable 5 working.

Routines launched April 14, 2026 in research preview. They’re saved Claude Code configurations - a prompt, repositories, connectors, permissions - that run on Anthropic-managed cloud infrastructure on a trigger. 

Your laptop can be off. The run still happens.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_8.jpg)

For Fable 5 specifically, Routines are the trigger layer that earns the model’s capability. Anthropic measures Fable 5’s “days at a time” on Claude Managed Agents - a hosted sandbox with full tools and no local machine constraint. 

The Parameter Golf experiment ran for up to 8 hours on 8×H100 GPUs. That class of run doesn’t happen on your laptop.

The three Routine trigger types, mapped to self-improvement patterns:

- Schedule triggers - the morning briefing pattern. Daily at 7am: re-run yesterday’s eval suite, distill any new failure modes into Skills, write the digest to Slack. The agent gets sharper while you sleep.

- API triggers - the “fire on event” pattern. CI fails → fire a Routine to investigate. Sentry alert → fire a Routine to triage. The self-improving system reacts to your real environment, not a fixed schedule.

- GitHub event triggers - the “learn from real work” pattern. On PR open, run an evaluation against the latest Skills. On merge, write any new patterns the PR introduced back to the Skill. Repository state and Skill state stay in sync.

\`\`\`python
&gt; /schedule daily at 7am, use Fable 5 in CMA
  Goal: Re-run yesterday’s eval suite against the latest skills.
  Any test that newly passes → distill the pattern into the skill.
  Any test that newly fails → investigate, document in STATE.md.
  Post the digest to #engineering. /goal don’t stop until digest is
  posted and STATE.md is updated.

▲ Claude
  Creating routine: nightly-eval-compounding
  \- model: claude-fable-5
  \- harness: claude managed agent (sandbox)
  \- trigger: schedule (0 7 \* \* \*)
  \- grader: independent Haiku sub-agent (Outcomes)
✓ Active. First run tomorrow 07:00 local. Skill set will compound.
\`\`\`

---

PART 3 · The Self-Improvement Layer

## 10\. The 5-stage memory progression.

The single most useful framing for what “agent memory” means in practice comes from the Anthropic team’s Continual Learning Bench 1.0 experiment. Effective use of memory requires a progression of five stages. Each stage is a structural move; each model exits the progression at a different point.

- 1\. Fail - the agent gets something wrong and documents the failure with enough detail to be useful later.

- 2\. Investigate — before moving on, the agent figures out why the failure happened.

- 3\. Verify - the agent turns the diagnosis into a checked fact, not a guess.

- 4\. Distill - the agent turns the verification into a general rule that applies beyond the specific case.

- 5\. Consult - on the next task, the agent reads the rule instead of re-deriving the fact from scratch.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_1.jpg)

The measured difference between models on a SQL exploration task from the Continual Learning Bench, each model with memory provided:

- Sonnet 4.6 exits at step 1. Its memory store is a list of failure notes and open guesses (“maybe prc instead of prc\_usd?”). It rarely consults prior notes. Memory exists but doesn’t compound.

- Opus 4.7 exits at step 3. It creates a schema reference with uncertainty flagged (“possibly prc in cents? Verify.”). Verification coverage runs 7–33% (median \~17%) of questions.

- Fable 5 tends to complete the progression. In its strongest runs, verification coverage reaches 73% (22 of 30), and it distills learnings into general rules that help with future tasks.

## 11\. The state file. Where memory actually lives.

The 5-stage progression is the mental model. The state file is where the model writes each stage’s output. For Fable 5 running in Claude Managed Agents, memory is a mounted filesystem that survives between sessions; in Claude Code locally, a markdown file or a Linear board does the same job.

The structure of a state file that actually supports the 5-stage progression:

\`\`\`python
\# Project memory · trading-platform

\## Verified facts # stage 3 — stop guessing about these
\- prc is in dollars, not cents. Verified via SELECT MIN(prc), MAX(prc) FROM trades.
\- user\_id matches auth\_users.uid via JOIN, not auth\_users.id. Confirmed 2026-06-09.
\- Test database uses Stripe sandbox keys; production uses real keys via env.

\## General rules # stage 4 — consult before re-deriving
\- When querying time-bucketed metrics, always include timezone (default UTC mismatches).
\- Auth middleware order matters: rate\_limit -&gt; jwt -&gt; rbac. Reversing causes 401s.
\- For migrations, never use ALTER on tables &gt;1M rows without batching.

\## Open failures (investigate next session) # stage 1 → 2
\- 2026-06-09: tests/e2e/checkout flakes \~1 in 50 runs. Hypothesis: webhook race.
  Reproduction steps in debug/checkout-flake.md.

\## Lessons learned # stage 4 distillations
\- PowerShell hits TLS 1.2 issue on Windows CI runners. Always shell out to bash.
\- Stripe webhook tests require STRIPE\_WEBHOOK\_SECRET. Skip with clear message if missing.

\## Last session # stage 5 — resume, don’t restart
2026-06-10 03:30 UTC · 7 failures classified, 3 fixes drafted (claude/fix-\*), 4 escalated.
Next: verify the auth middleware fix in claude/fix-rate-limit-order against production load.
\`\`\`

The file has five sections matching the five stages. Verified facts is stage 3 output - things the agent stopped guessing about. General rules is stage 4 - distilled rules that apply beyond the specific case. Open failures is stages 1–2 work in progress. Lessons learned is more stage 4 output. 

Last session is the resume pointer for stage 5.

Two operational rules that decide whether this file actually compounds or just grows:

- Write before walking away. Every Fable 5 session ends by updating STATE.md - what was tried, what passed, what failed, what new rules survived. If the session doesn’t finish with a write, the next one restarts from zero.

- Read at session start. Every new session begins by reading STATE.md and the most relevant Skills. The Continual Learning Bench data shows that without this, Sonnet-class memory behavior shows up even in Fable 5.

---

## 12\. Skills that compound. Write the lesson into the Skill, not just the chat.

STATE.md is for project memory. Skills are for procedural memory - the “how to do this kind of thing” that should apply across projects. 

The compounding pattern: after any non-trivial failure, write the lesson into the Skill itself. The Skill gets sharper every time the system runs.

![Image](../_media/x-2065089060104720776/0xCodez_2065089060104720776_2.jpg)

A Skill that’s been compounding for two weeks looks different from a fresh one. New sections appear: known failure modes, rules that came out of post-mortems, anti-patterns observed in production. 

The Skill is no longer a static set of instructions; it’s an accumulating record of what the team has actually learned.

\`\`\`python
\---
name: ci-triage
description: Classify CI failures, draft fixes for easy ones, escalate the rest.
  Trigger on workflow\_run.failure or on the morning triage routine.
\---

\# CI triage skill

\## Classification rules
\- env: missing secret, wrong env var. # escalate to human, never auto-fix
\- flake: passes on retry without code change. # retry once, then file
\- bug: deterministic failure tied to recent commit. # draft fix
\- dependency: tied to version bump. # draft rollback
\- infra: timeout, OOM, runner issue. # escalate

\## Known failure modes # added by the loop over 14 days
\- webhook-race: e2e checkout flakes when Stripe webhook arrives mid-test.
  Fix: add 2s settle delay in tests/utils/webhook.ts.
\- tls-handshake: Windows runners fail TLS 1.2 in PowerShell. Use bash.
\- db-migration: ALTER on trades table &gt;1M rows times out at 30s. Batch in 10k chunks.

\## Anti-patterns (do NOT do) # added after real incidents
\- Never disable a failing test to make CI green. File it instead.
\- Never modify .github/workflows/ without human approval.
\- Never touch src/payments/ or src/billing/ without security review.

\## State
Update STATE.md after each run with classifications, fixes drafted, escalations.

\## Eval suite # step 13 — the loop verifies the skill
Run against eval/ci-triage-cases.jsonl weekly. Any newly-failing case →
add to known failure modes after Outcomes verifier confirms.
\`\`\`

The compounding contract: every confirmed lesson goes into a Skill, not just STATE.md. STATE.md is project-scoped and dies with the project. Skills live in \~/.claude/skills/ and travel with you. 

Two weeks of disciplined writing produces a Skill that materially outperforms whatever Fable 5 would derive from scratch on a fresh project.

---

## 13\. Self-verification via vision. Fable 5 checks its own UI against the goal.

One of the headline capabilities Anthropic ships with Fable 5 is “uses vision to check outputs against goals.” This sounds abstract until you see what it actually replaces: the human eyeballing a screenshot to confirm the UI looks right. 

Fable 5 does that step itself, in the loop, before declaring done.

The pattern in production:

- Maker sub-agent writes the UI code. Renders the result to a screenshot.

- Verifier sub-agent reads the screenshot with vision, compares it against the goal description, against design tokens in the project Skill, and against the previous screenshot from STATE.md.

- Verdict goes back to the loop. Match → mark task complete. Mismatch → describe the gap, hand back to maker with a structured diff.

This pattern is what Anthropic measured in the Parameter Golf experiment under the same harness: Fable 5 looked at training charts (visual artifact) and decided whether the curve matched the criterion. 

No human in the loop reading the chart. The verifier read the chart.

---

## 14\. The Mythos safety boundary. What Fable 5 won’t do, and how to design around it.

he last step is the one most easily skipped on day one and most expensive to learn the hard way. 

Fable 5 ships with built-in safety classifiers that decline to respond in specific high-risk domains - cybersecurity vulnerability research, biology, chemistry, and model distillation. In those domains, Anthropic falls Fable 5 back to Claude Opus 4.8 automatically. This is documented; it’s not a bug.

What this means for a self-improving system that runs autonomously:

- If your system touches security tooling (SAST scans, exploit research, penetration testing logic, even some classes of code review), expect classifier blocks. Architect for the fallback: route those tasks to Opus 4.8 explicitly, or surface the block to a human reviewer.

- Same for biology, chemistry, and distillation domains. The classifier is broad. A scientific computing workflow might trigger it; a code review of crypto primitives might trigger it.

- Design your Skills to surface the fallback gracefully. A Skill should know which kinds of tasks it produces that may hit the classifier and document the expected behavior. A loop that silently fails on a classifier block looks identical to a loop that fails on a real error — until you debug it.

- Audit the system card. Fable 5’s 319-page system card documents the classifier’s scope. The launch generated controversy in mid-June 2026 because some downgrade behaviors were discovered buried in the document. Read it before deploying to production.

The general design principle: treat the safety boundary as a known fallback, not as a failure mode. A self-improving system that ships with explicit handling of the boundary stays robust as the classifier evolves. A system that ignores it produces silent regressions when Anthropic updates the policy.

---

## § The mistakes that keep Fable 5 at 10% of its potential

- Using Fable 5 like Sonnet 4.6 with more context. A 5-minute prompt-and-close session burns Mythos-tier pricing for no compound effect.

- Self-critique instead of an independent verifier. The maker grades its own homework. Anthropic measured the difference; the team explicitly documents the verifier sub-agent pattern.

- No STATE.md. Every session restarts from zero. The Continual Learning Bench data shows this is where 70%+ of Fable 5’s memory advantage disappears.

- Skills that never get written to. A static Skill is fine; a Skill that doesn’t accumulate lessons after real failures is wasted scaffolding.

- Fable 5 on tasks Sonnet 4.6 would handle. Doc updates, simple refactors, lint fixes. Route by complexity; reserve Fable 5 for the orchestrator role.

- Running long sessions on a laptop. Days-long capability requires cloud infrastructure (CMA or Routines). A closed laptop kills the session.

- Ignoring the Mythos safety boundary. Classifier blocks on cyber/bio/chem produce silent regressions. Architect for the fallback explicitly.

- No vision-verify on visual tasks. UI, dashboards, design fidelity — checking these with text-only verifiers misses the failure mode that matters.

- Skipping /goal or Outcomes. Without an objective stop condition checked by an independent grader, loops stop at “handled enough” instead of done.

- No retention policy review. Sensitive data through a Fable 5 routine without checking the 30-day / 2-year terms creates compliance issues silently.

---

## Conclusion: 

Fable 5 isn’t a faster chat tool. It’s the substrate for a system that compounds.

The first publicly available Mythos-class model didn’t ship to be prompted faster. It shipped to be the orchestrator of a self-improving system you build around it. 

The capability headlines -  days-long sessions, sub-agent delegation, vision self-check, accumulated memory - only earn their pricing if the system around the model is doing its job.

The Anthropic team’s own experiments make the gap visible. Parameter Golf: Fable 5 with an independent verifier explored larger architectural changes and pushed through negative intermediate results to land \~6× more improvement than Opus 4.7. 

Continual Learning Bench: Fable 5 with memory completed the full 5-stage progression with 73% verification coverage, against Opus 4.7’s 17%. The model is the same in both halves of every comparison. The system around it is what changed.

Pick one layer of the compound stack you weren’t doing - probably the verifier sub-agent (step 6), the state file (step 11), or vision-verify (step 13) - and add it tomorrow. Then the next. 

Self-improvement is a property of the system, not the model. Build the system.

### 🖼️ Attached Media

![Image 1](../_media/x-2065089060104720776/0xCodez_2065089060104720776_12.jpg)

## 💬 Replies

### 1 @shmidtqq (shmidt)

*Thu Jun 11 15:13:48 +0000 2026*

@0xCodez great research man!

### 2 @0xCodez (Codez) (Author)

*Thu Jun 11 15:15:53 +0000 2026*

@shmidtqq thank you bro ! Fable 5 is one of the best model for building long running systems, test it youself

### 3 @henrikhinai (Henrikh)

*Thu Jun 11 15:42:18 +0000 2026*

@0xCodez lfg article, mate! I just wanted to test this model

### 4 @0xCodez (Codez) (Author)

*Thu Jun 11 15:45:49 +0000 2026*

@henrikhinai You're welcome, buddy! Share your insights after you read it.

### 5 @HarryTandy (Harry Tandy)

*Thu Jun 11 16:27:54 +0000 2026*

@0xCodez a system that gets smarter while you sleep

### 6 @mfishbein (Mike Fishbein)

*Thu Jun 11 18:19:00 +0000 2026*

@0xCodez what's the best way start putting this into practice? should I copy-paste and send it to Claude Code and tell it to build a skill for me?

### 7 @iamjohnellison (John Ellison)

*Mon Jul 06 00:23:47 +0000 2026*

@0xCodez But so expensive bro tokens be eaten like Cheerios

### 8 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Mon Jul 13 23:57:50 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2076728244460470658)

### 9 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Mon Jun 22 18:08:30 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2068058164801532001)

### 10 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Fri Jun 12 23:16:16 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2065550586280386613)

### 11 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Thu Jun 11 19:40:45 +0000 2026*

@0xCodez [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2065156676706025957)

### 12 @Blum_OG (Blum)

*Thu Jun 11 16:49:41 +0000 2026*

@0xCodez another Claude alpha drop from Codez, thnx man!

### 13 @rewind02 (rewind)

*Thu Jun 11 16:28:29 +0000 2026*

@0xCodez state files change the whole game

### 14 @pavitrabhalla (Pavitra Bhalla)

*Fri Jun 12 14:07:54 +0000 2026*

@0xCodez Great write up! I’d love to chat

### 15 @SerenaTaN5 (ST)

*Thu Jun 11 22:52:33 +0000 2026*

@0xCodez collecting a awesome list of viral claude /loop and /goal on twitter: [github.com/serenakeyitan/…](https://github.com/serenakeyitan/awesome-agent-loops)

### 16 @HaileyCoopr (Hailey)

*Fri Jun 12 08:56:29 +0000 2026*

@0xCodez Loved the CTA in the last line. How do you manage your credentials?
The autonomy is so much that its just impossible to let these agents run on primary devices.
[github.com/agentrhq/auths…](https://github.com/agentrhq/authsome)

### 17 @OM3920s (Oron M)

*Fri Jun 12 07:13:13 +0000 2026*

@0xCodez Running Fable for days will drain all tokens is the world

### 18 @trysuperpumped (SuperPumped)

*Sun Jun 14 14:29:52 +0000 2026*

@0xCodez too bad it is removed within few days of release to public

### 19 @Jesaja (Jesaja)

*Thu Jun 11 21:10:27 +0000 2026*

@0xCodez Toller post, aber? Sollte KI das leben nicht einfacher machen, das sind so viele regeln und trallala, Meine Lieblings Anweisung an eine KI ist immer: "Kannst du das nicht machen?"

### 20 @fornews687857 (fornews)

*Fri Jun 12 01:17:28 +0000 2026*

@0xCodez How to archive a good loop about memory , this is a perfect solution :[github.com/yucai0302/memo…](https://github.com/yucai0302/memory-loop). only need a plugin cc

### 21 @heypearlai (Pearl AI)

*Wed Jul 08 05:57:50 +0000 2026*

@0xCodez Great reminder that workflows outlast models.

### 22 @deepwhitman (Bilal)

*Fri Jun 12 17:47:49 +0000 2026*

@0xCodez nice - can  you create a workflow with fable 5 but specifically ask it to use opus/sonnet for each subagent?

### 23 @AnkitBuildsAI (Ankit Tripathi)

*Mon Jul 06 14:42:59 +0000 2026*

@0xCodez i have read half of the article only .....hats off to your efforts

### 24 @LewisWeldtech (That AI Guy)

*Fri Jun 12 14:46:26 +0000 2026*

@0xCodez [x.com/i/status/20654…](https://x.com/i/status/2065438305261691130)

### 25 @sebdiar10 (Sebastian Diaz)

*Thu Jul 02 20:12:10 +0000 2026*

@0xCodez good

### 26 @StuyBoyNY (StuyBoy From NYC)

*Mon Jul 06 16:41:46 +0000 2026*

@0xCodez @readwise save

### 27 @artale93 (Artale)

*Sat Jun 13 04:26:11 +0000 2026*

@0xCodez awesome work

### 28 @Ethan1stking (Ethan)

*Sun Jul 12 01:49:37 +0000 2026*

@0xCodez @grok 帮我整理成PDF，方便我学习

### 29 @Defi_Roxy (Roxy)

*Mon Jun 22 18:44:35 +0000 2026*

@0xCodez curious how many people who read this actually build the state file

### 30 @ShadowFien21714 (testosteronegod)

*Thu Jul 02 04:25:21 +0000 2026*

@0xCodez @grok youtube link

### 31 @ShadowFien21714 (testosteronegod)

*Thu Jul 02 04:28:20 +0000 2026*

@0xCodez @grok a link to the video from this tweet, featuring an Anthropic engineer

### 32 @yhr331 (IT 老徐说AI)

*Mon Jul 06 08:14:59 +0000 2026*

@0xCodez speed for race

### 33 @supratimsircar (Supratim Sircar)

*Wed Jul 08 03:24:32 +0000 2026*

@0xCodez @grok create a master system prompt for Claude Fable 5 using above framework

