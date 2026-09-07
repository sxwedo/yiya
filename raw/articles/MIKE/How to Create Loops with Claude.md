---
title: "How to Create Loops with Claude"
author: "MIKE (@mikenevermiss)"
url: "https://x.com/mikenevermiss/status/2066401066518802637"
ingested: "2026-09-07"
date: "Mon Jun 15 06:03:00 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 How to Create Loops with Claude

stop making prompts.

start designing loops.

a prompt gets you one response. a loop gets you a system that keeps working after you close the laptop. Boris Cherny, who runs Claude Code at Anthropic, put it plainly: he does not prompt Claude anymore, he has loops running that prompt Claude and figure out what to do. his job is to write loops.

Peter Steinberger said the same thing from a different angle: you should not be prompting coding agents anymore, you should be designing loops that prompt your agents. the leverage point has moved. it is no longer about crafting the perfect message. it is about building the system that sends messages for you, reviews the results, and decides what happens next.

a loop is a recursive goal. you define a purpose, the agent iterates against it, and the loop keeps running until a real stopping condition is met. the agent forgets everything between runs. the loop does not. that single fact is the entire architecture.

What a Loop Actually Is

\--------------------------

Addy Osmani, a Google engineer who wrote the essay that named this practice, breaks a loop into six parts: automations, worktrees, skills, connectors, sub-agents, and memory. every working loop is some combination of these six.

automations are what make a loop a loop instead of a one-time run. this is a schedule, a cron job, a webhook, or a hook inside Claude Code that fires without you typing anything. the agent finds work and triages it before you ask.

worktrees keep parallel agents from stepping on each other. if two agents touch the same files at the same time, you get collisions. git worktrees give each agent its own isolated copy of the repo to work in.

skills are procedure manuals the agent reads instead of being told from scratch every time. memory is a state file on disk, usually markdown, that survives between runs. the agent forgets, the file does not.

Start With One Trigger

\-------------------------

every loop starts with something that fires without you. the simplest version is a cron job that runs a Claude Code prompt on a schedule. the next version is a hook, a script that runs automatically when a specific event happens, like a commit or a file change.

pick one recurring task you currently do manually and turn the trigger into the first piece. "every morning at 8am, read yesterday's CI failures, open issues, and recent commits, and write findings to a markdown file." that single automation is a complete, working loop on its own.

do not try to build the full six-part system on day one. one automation that writes one state file is already more leverage than a hundred well-crafted prompts, because it runs without you.

Give the Loop a Memory File

\------------------------------

create one markdown file, call it \`STATE.md\` or \`PROGRESS.md\`, and place it where every iteration of the loop can read and write it. this file is the loop's only memory. everything the agent needs to pick up where it left off goes here.

at the start of each run, the agent reads this file first. at the end of each run, it writes back what happened and what comes next. this is the PROGRESS.md pattern, and it is the single most important file in any loop. without it, every run starts from zero regardless of how many runs came before.

structure the file in plain sections: what was done last run, what is in progress, what is blocked, what to try next. keep it short. a memory file the agent has to read 2000 lines of is worse than no memory file at all.

Split the Writer From the Checker

\------------------------------------

the model that wrote the code is, in Osmani's words, too nice grading its own homework. a single agent that writes and then reviews its own work will mark its own work as done more often than it should.

the fix is the evaluator-optimizer pattern, named in Anthropic's own engineering writeup on building effective agents: one agent generates, a second agent critiques against an objective standard, and the loop repeats until the check passes. the check has to fail on something real: a test suite, a type checker, a build command, a linter.

a second agent told to "review this" with no objective signal just adds a second optimist. it will agree with the first agent more often than not. the verifier needs a hard gate, not an opinion.

Isolate Parallel Work With Worktrees

\---------------------------------------

once you are running more than one agent against the same codebase, isolation stops being optional. run \`git worktree add ../agent-1-branch\` to give each agent its own working directory pointed at its own branch. this prevents two agents from editing the same file at the same time and corrupting each other's changes.

a typical parallel setup: one sub-agent explores and writes a plan, a second sub-agent implements against that plan in its own worktree, a third sub-agent verifies the implementation against tests in a separate worktree. each agent only ever sees its own copy.

this is also where loops scale from "one task running in the background" to "an entire pipeline of tasks running at once," each isolated, each reporting back to the shared memory file when done.

Set a Hard Stop Condition

\-----------------------------

a loop without a real exit condition fails quietly. engineer Geoffrey Huntley documented this as the "Ralph Wiggum loop": an agent meant to emit a completion signal only when finished emits it early, and the loop exits believing a half-done job is complete.

your stop condition needs to be checkable by something other than the agent's own claim. "the test suite passes," "the build succeeds," "the linked ticket moves to Done with a passing CI run" are real stop conditions. "the agent says it's finished" is not.

set a maximum iteration count as a backstop regardless of what your primary stop condition is. ten or twenty iterations is a reasonable ceiling for most loops. if the loop hits the ceiling without meeting the real stop condition, it should halt and flag for review, not keep running.

Wire In a Human Review Checkpoint

\------------------------------------

not every loop should run fully unattended from day one. Boris Cherny's framing uses an autonomy ladder with four levels: level one suggests only, level two drafts changes for a human to apply, level three applies low-risk changes but requires human approval before publish or merge, level four applies and completes automatically with audit logs.

start every new loop at level one or two. run it for a week, read its output, and correct what it gets wrong. once the loop is consistently producing work you would approve without changes, move it to level three. level four is earned, not assumed.

the runs that find something should go to a triage inbox or a flagged list. the runs that find nothing should archive themselves silently. you should never have to open a loop's output to confirm that nothing happened.

Watch the Token Cost

\------------------------

a single bad iteration is a wasted prompt. a single bad loop running unattended overnight is a bill. agentic loops can run for dozens or hundreds of iterations, and each iteration is a full model call with the accumulated conversation history attached.

before you let any loop run unsupervised, run it manually for three to five iterations and check the token usage per iteration. multiply that by your maximum iteration count to get a worst-case cost per run. multiply that by how often the automation fires to get a worst-case daily cost.

build a command allowlist for any loop that can execute shell commands. restrict it to the specific commands the task actually needs, things like \`npm\`, \`git\`, \`ls\`, \`cat\`. an agent with unrestricted shell access inside an unattended loop is the fastest way to turn a token-cost problem into a security problem.

Build the Second Loop Differently Than the First

\----------------------------------------------------

your first loop should be small, single-purpose, and heavily supervised. your second loop should connect to the first. this is where automations, skills, and memory start compounding instead of just running in parallel.

a daily triage loop writes findings to a shared state file. a second loop, also on a schedule, reads that state file and picks the highest-priority item to act on. neither loop needs the other to function, but together they form a pipeline that moves work from "discovered" to "in progress" without you touching either one.

this is also when skills start paying off. once you have written a skill file for how your loop should triage CI failures, every future loop that touches CI failures reads that same skill instead of you re-explaining it. the loops do not just run independently, they share what they have learned.

The Shift in What Your Job Becomes

\--------------------------------------

once a few loops are running, your daily work changes shape. you stop opening a chat window to ask a question and start opening a triage inbox to review what the loops found overnight. the to-do list stops being a static pile of tasks and becomes a set of agents, routines, and loops that keep converting ideas into drafts, fixes, and reviews.

this does not mean you stop deciding what matters. it means the deciding happens at the loop-design level instead of the per-task level. you are not writing fewer prompts because you are doing less. you are writing fewer prompts because the loops are writing them for you, and your attention moves to the parts that actually need a human: the review checkpoint, the stop condition, and the next loop worth building.

### 🖼️ Attached Media

![Image 1](../_media/x-2066401066518802637/mikenevermiss_2066401066518802637_1.jpg)

## 💬 Replies

### 1 @alphabatcher (Alpha Batcher)

*Mon Jun 15 16:36:09 +0000 2026*

@mikenevermiss clean article about important topic ( Loop )

thanks, Mike

### 2 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 21:22:53 +0000 2026*

@alphabatcher you’re welcome man

### 3 @zeplyn_eth (ZΞP🍌)

*Tue Jun 16 11:02:08 +0000 2026*

@mikenevermiss Thanks for keeping us in the loop 😎

### 4 @mikenevermiss (MIKE) (Author)

*Tue Jun 16 13:30:09 +0000 2026*

@zeplyn\_eth got you man

### 5 @Nikitont (Nikiton)

*Mon Jun 15 06:31:45 +0000 2026*

@mikenevermiss Good article, buddy, I shake your hand.

### 6 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 06:35:54 +0000 2026*

@Nikitont thank you niki

### 7 @catznfa (CATZ)

*Mon Jun 15 06:11:34 +0000 2026*

@mikenevermiss Reading this carefully

### 8 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 06:15:48 +0000 2026*

@catznfa chad

### 9 @Leonajardinho (Leo)

*Mon Jun 15 06:05:05 +0000 2026*

@mikenevermiss On my way to read this article now

### 10 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 06:07:15 +0000 2026*

@Leonajardinho chad

### 11 @RackzHQ (Rackz)

*Mon Jun 15 07:24:28 +0000 2026*

@mikenevermiss I promise I would read this (tomorrow)

### 12 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 07:25:02 +0000 2026*

@I\_am\_Rackz tell me if you do

### 13 @virenbaraiya (Viren)

*Tue Jun 16 05:50:19 +0000 2026*

@mikenevermiss and if you want to make your loop durable and really long running (like running for hours and be able to retry/continue after you restart), use Conductor OSS.

Here is the skill that does it effortlessly,  if you build something using that would love to see!

### 14 @mikenevermiss (MIKE) (Author)

*Tue Jun 16 05:51:46 +0000 2026*

@virenbaraiya thanks for sharing man

### 15 @pjl_92 (PhilLimmer)

*Tue Jun 16 06:00:06 +0000 2026*

Thanks for sharing Mike! 

Loop engineering is a great framing but for many implementations they are still missing the hard parts - shared memory across agents, quality tracking, and stopping conditions tied to outcomes not just budgets.

We've been running this in production at @Akai\_by\_deel :
 
⚽️ Orchestrator fires from a hook, creates tasks for sub-agents

 ⚽️ Sub-agents run independently but with shared rules and guardrails, allocated specific tasks

 ⚽️ They write back to a combined case history that acts as shared memory

⚽️ We built a algorithmic score that tracks if the loop is actually producing results over time (based on frequency, output, evals etc) 

⚽️ Importantly - Agents can be decommissioned automatically when they drift below threshold

This is where agents actually start to do the work for you.

### 16 @mikenevermiss (MIKE) (Author)

*Tue Jun 16 06:14:34 +0000 2026*

@pjl\_92 that’s amazing 
would you be interested in a potential collaboration? let me know

### 17 @Mike1721707 (Mike)

*Wed Jun 17 07:49:31 +0000 2026*

@mikenevermiss Sorry but I don’t agree I’ve been building loop systems from day 1, it’s a poor solution for accuracy and control. I am currently working on a system that has solved this for me now and it’s not looping.

### 18 @mikenevermiss (MIKE) (Author)

*Wed Jun 17 07:50:46 +0000 2026*

@Mike1721707 due you mind to share ?

### 19 @ceekszn (ceek)

*Mon Jun 15 06:05:35 +0000 2026*

@mikenevermiss bookmarked 
gonna give this a good read

### 20 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 06:07:04 +0000 2026*

@ceekszn hope you do bro

### 21 @plainionist (Seb)

*Tue Jun 16 11:16:10 +0000 2026*

@mikenevermiss Nice article 👍 My current setup is already quite close to the one you are describing 😉

### 22 @mikenevermiss (MIKE) (Author)

*Tue Jun 16 13:29:52 +0000 2026*

@plainionist thats amazing

### 23 @MoonEmpirE0 (Arti)

*Mon Jun 15 22:52:24 +0000 2026*

@mikenevermiss You're Richard Feynman of the AI 

Now I'm understanding loop and I'll create my first one staring small.. 

The explain is very clear 
I know now more about hook and work tree 
They were dark corners for me

Thanks from heart Mike

### 24 @mikenevermiss (MIKE) (Author)

*Tue Jun 16 04:21:12 +0000 2026*

@MoonEmpirE0 this means alot to me man
thank you so much

### 25 @RealMarvelX (MAIL)

*Mon Jun 15 06:03:56 +0000 2026*

@mikenevermiss I’ll look this up. Thanks for sharing Mike

### 26 @mikenevermiss (MIKE) (Author)

*Mon Jun 15 06:07:28 +0000 2026*

@RealMarvelX youre welcome

### 27 @mirko_monti6 (Mirko Monti)

*Thu Jun 18 06:47:47 +0000 2026*

@mikenevermiss Great piece Mike

Would be great to have a list of best loops

### 28 @mikenevermiss (MIKE) (Author)

*Thu Jun 18 07:40:07 +0000 2026*

@mirko\_monti6 [x.com/mikenevermiss/…](https://x.com/mikenevermiss/status/2067510249687224648)
here you go man

