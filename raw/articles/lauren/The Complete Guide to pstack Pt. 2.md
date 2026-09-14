---
title: "The Complete Guide to pstack Pt. 2"
author: "lauren (@poteto)"
url: "https://x.com/poteto/status/2097732320606507506"
ingested: "2026-09-14"
date: "Wed Sep 09 17:02:13 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 The Complete Guide to pstack Pt. 2

In my [last post](https://x.com/poteto/status/2094457600259842065), I showed you why verification is the foundation of everything I do with agents, and how to get started creating your own verification skills. The key lesson was that if an agent can't verify its own work, nothing else matters. You remain the bottleneck, and your whole day will be spent babysitting your agents.

[Embedded Tweet: https://x.com/i/status/2094457600259842065]

But once you have verification working, the next question is: how do you actually figure out what to build?

[https://x.ai/bot/plugin/9717366](https://x.ai/bot/plugin/9717366)

In this post, I am going to walk you through how I do research, planning, prototyping, and architecture with [pstack](https://x.ai/bot/plugin/9717366). This is the exact workflow that allows me to ship thousands of PRs a month into production while keeping code quality extraordinarily high.

![Image](https://pbs.twimg.com/media/HRwSukbbwAA6Xo2.jpg)

# The art of supervising someone smarter than you

Back in the old days of 2024, to make any change in a system, you first needed to read enough of it to build a mental model of what's going on. Depending on the size and complexity of the codebase, this may have taken you anywhere from hours, to even days and months. With a small change, you could get away with maybe only a local understanding of a small subsystem. If you were refactoring the core however, you'd probably need to have a mental model of how the whole thing works in order to do the refactor correctly and effectively. 

Agents obviously remove this barrier. You can make changes to systems very easily by just prompting your agent and it will do it, regardless of how much or little you know about the code. But keeping the quality of the code and user experience high is still difficult, especially if you're not already a domain expert who knows what to look for and ask.

Even though frontier models have gotten very capable, there are still 2 failure modes that I constantly observe:

1. They are unable to fully understand your intent because they're under/poorly specified.

1. They don't have enough context on how to do the work correctly.

Both of these problems are related. Using agents well comes down to how well you're able to prime the agent's context window with high quality context. You can certainly write code that works without doing this, but I find that the outcomes and quality are much better when I've done the work to provide my agents with everything they need to do a high quality job. 

## In your own words

Frontier models are very capable coders. While with older models I might have prompted very specifically what I wanted it to do, almost micromanaging them, the latest models are able to write code better than you or I can. So there's a fine balance I want to strike with telling the agent what I want it to achieve, while giving it the freedom to solve it in ways I might not have thought of. 

This is the art of supervising someone smarter than you, on a codebase you haven't written yourself, and where humans can no longer fit the entire mental model of the codebase in their head.

One technique I like to use is the indirect prompt. Instead of telling the agent exactly what I want, I try to draw it out of the agent instead - in its own words. 

For example, when someone reports an issue in Slack, I will often ask the agent to read the thread and restate the problem in its own words before doing anything else.

For example, I might say:

> /poteto-mode read this slack thread. restate in your own words and in plain english what you think the underlying issue is

This accomplishes three things:

First, it forces the agent to compress a noisy conversation into a structured problem statement. Second, it lets me catch misunderstandings immediately. If the agent fixates on a red herring in the thread, I can correct it quickly before it starts writing any code. 

And third, I haven't potentially led it down the wrong path by stating my own assumptions and hypotheses which could be incorrect or limit what the agent could otherwise achieve.

Building up a mental model

Asking the agent to restate itself in a way that you can understand is an important part of working with someone that is smarter than you. That was the inspiration for [/teach](https://github.com/cursor/plugins/blob/main/pstack/skills/teach/SKILL.md), a skill that helps your agent explain things to you in an intuitive way. I use it whenever I need to make sure my agent is doing something that makes sense to me.

Under the hood, /teach calls out to [/how](https://github.com/cursor/plugins/blob/main/pstack/skills/how/SKILL.md) and [/why](https://github.com/cursor/plugins/blob/main/pstack/skills/why/SKILL.md). 

/how traces runtime mechanics. When you ask /how, the agent assesses the complexity of the subsystem. If the subsystem spans multiple directories or services, it spawns parallel explorer agents on fast, efficient models like Grok.

> /how is virtualization implemented?

/why investigates motivation and intent. Code tells you what happens. It rarely tells you why someone wrote it that way. When you run /why, pstack queries historical evidence across multiple sources in parallel: Git history and PR review comments, Linear tickets, Notion design docs, Slack conversations, Datadog monitors, Sentry errors, code lineage, and analytics warehouse events.

> /why are we still stuck an old version of node.js?

![Image](https://pbs.twimg.com/media/HRv9RlWbsAAnMhL.jpg)

I use /teach whenever I want the agent to restate something so I can better understand and trust its work.

> /teach me why you implemented it this way and not <other way>. what were the tradeoffs you made and why?

In practice, I have also found that the research done by the /teach skill is not just useful to humans, but for agents as well. Even with the latest frontier models, (this also depends on the quality of the harness), in general I find that they still often state things confidently without backing it up with data or actually reading the code needed to build up a mental model of how it works. So this act of teaching you what it's going to do and why ends up helping the agent too.

Learning from history

Many of my projects span multiple conversations. For example, a few months ago I was working on fixing virtualization bugs and perf issues that people were reporting in Cursor. I realized that every time I started a new chat I had to basically start over with building up the rich context my agent had before when it was solving a similar problem. 

What I realized is that your past transcripts are often a gold mine for rich context. pstack ships with the [/recall](https://github.com/cursor/plugins/blob/main/pstack/skills/recall/SKILL.md) skill to pull your recent context from chat history, so even fresh agents have the right context they need to get back to a good state.

> /recall the work i did yesterday on virtualization and then read this bug report on slack

Using /teach, /recall, /how, and /why are how I keep my own mental models of the codebase up to date, compressed into a form I can easily understand and remember. And, it helps agents too!

## Working backwards

Once you understand the problem, how do you specify the solution?

![Image](https://pbs.twimg.com/media/HRv9X7xagAAuJvi.jpg)

In my opinion, most harnesses that have plan modes tend to over-specify implementation details and under-specify everything else. That's why in pstack, I cheekily said that ["I don't believe in planning"](https://github.com/cursor/plugins/blob/main/pstack/README.md#why-are-there-no-planning-skills). The truth is that I do plan, but I do so through code.

For certain kinds of work, like creating shared code or packages that others will use, I am a big believer in readme driven development. If you're not familiar with it, it's a technique of development that was popular back in the day, where you start with crafting your readme first. This forced you to put on your developer experience hat, where you start with describing the APIs to a hypothetical user, and work backwards to the implementation and architecture. 

For example, when I was building Dune, our in-house client framework for desktop apps, I started by first writing a tutorial for it, so I could understand what it would be like to build an app with it. Or at least I tried to. It was real a struggle getting the agent to produce anything good or readable. So I had to first spend some time sharpening my knife, by creating the [/technical-writing](https://github.com/cursor/plugins/blob/main/pstack/skills/technical-writing/SKILL.md) skill.

The first pass of the readme without the /technical-writing skill was painful to read because it mixed up different goals. It tried to be a tutorial, a how-to guide, an architectural explanation, and an API reference all in the same document, written with your usual AI slop and [mannered prose](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-fable-5-1#writing-density).

![Image](https://pbs.twimg.com/media/HRv-FWubcAAOrNy.jpg)

/technical-writing uses the [Diátaxis framework](https://diataxis.fr/) to separate documentation into four distinct modes:

1. Tutorial: Learning by doing. A lesson that leads a newcomer through a series of steps to build something visible.

1. How-to guide: Steps to solve a specific, real-world problem for an experienced user.

1. Reference: Dry, complete, authoritative technical descriptions of machinery, APIs, and configuration flags.

1. Explanation: High-level discussion that clarifies and illuminates background, design choices, and tradeoffs.

It also uses [/unslop](https://github.com/cursor/plugins/blob/main/pstack/skills/unslop/SKILL.md), so it produces documentation that is very readable.

Writing a plan this way is very helpful because it also gives your agents a concrete target and goal that it can check its own work against. And of course, it's also much easier to understand what exactly the agent is going to build. 

Many of pstack's skills compound here in the design phase. For example:

> (1) /recall my work fixing virtualization bugs and perf issues from the past 7 days. use /how and /why to understand how our current virtualization implementation works.

(2) then use /poteto-mode planning and /technical-writing to come up with a new virtualization engine that categorically eliminates flickering and jittering. let's start by writing a tutorial on how i would use this new package to virtualize a React app

(3) after you write the plan, /teach me and prove to me why this new approach is superior to our current engine

The technique here is really about drawing out interesting and rich context that gives your agents the ability to see the problem the same way you do - not just as a small slice:

1. The first part of the prompt recalls relevant past and present context about how virtualization is implemented in my app.

1. The second part guides the agent to use that context, such as bugs it has fixed before, to come up with a new design that eliminates those problems entirely.

1. The final piece is asking your agent to prove to you that this new package is superior. This is where high quality tools like [verification skills](https://x.com/poteto/status/2094457600259842065) are important to have. 

## Measure a hundred times, cut once

![Image](https://pbs.twimg.com/media/HRv9b_jbQAAKTn5.jpg)

When planning, two of the most common mistakes I see are:

1. Accepting the agent's first design.

1. Overcooking the plan without empirical evidence.

When humans wrote code, we often collaborated with each other over design documents. These were docs that talked about high level architecture, alternatives considered, tradeoffs, and any unusual implementation notes. It was very common to go through multiple iterations of these docs before you landed on a settled design. 

With agents, while we can skip the ceremony of the design doc, I often see the mistake of accepting the first thing the agent gives back to you. With pstack, we can instead take the "measure twice, cut once" approach to its limit, using parallel agents.

We do this by using the [prototyping playbook](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/prototype.md). 

In pstack, playbooks aren't skills, but reference files inside of /poteto-mode. These playbooks are conditionally loaded (for token efficiency) depending on the type of task you're working on. These 23 playbooks (as of 0.15.0) each contain a workflow that I use when I'm doing a task. 

Unlike skills, playbooks are automatically used by the agent as part of /poteto-mode. For example:

> /poteto-mode prototype a few options for the new dropdown menu
/poteto-mode fix this bug
/poteto-mode eval this skill change

Prototyping is one of my favorite pstack playbooks. It gives you many attempts at a goal and helps the agent reason about the best option. This is useful not just for visual prototyping, but also prototyping different solutions for features, bug fixes, and so on. 

> /poteto-mode prototype a few options for <feature request>. use /control-app\* and take videos/screenshots for me to review and choose from

\* note: /control-app is the verification skill we created in [Part 1](https://x.com/poteto/status/2094457600259842065)

When prototyping visual changes, the agent builds throwaway sketches in your app or in a scratch directory. If it is testing a UI interaction, it puts two or three variations behind a simple switcher. Then it drives the interaction with the /control-app skill, takes screenshots of each variant, and measures the actual timing or layout.

Prototyping is planning, but with code. It allows agents the freedom to explore the problem space, and to give them a chance to surprise you with something you wouldn't have thought of yourself. Prototypes allow agents to answer their own questions with empirical evidence instead of waiting for my input.

Architecting bigger changes

As an engineer in the agentic era, it's more important to spend my time on architecture, choosing the right data structures, and thinking about how the systems I build will work together. My agents fill in the implementation details.

![Image](https://pbs.twimg.com/media/HRv9hLbaYAAq_sC.jpg)

Another useful skill that pstack ships with is [/architect](https://github.com/cursor/plugins/blob/main/pstack/skills/architect/SKILL.md). It structures design into distinct, disciplined phases:

1. Ground the problem. The agent runs /how and /why over the affected systems to build an accurate mental model of existing ownership and constraints.

1. Sketch. The agent enters an architecture arena. It spawns independent candidate runners in parallel, often across different model families. Each runner receives the grounding brief and drafts a complete design package: the caller's usage sketch, the core type definitions, public function signatures, and a concise rationale. These are usually done by sketching out just the type signatures, that derive from how we want call sites to look like. Each runner must evaluate interface depth, examine failure modes on weak models, and screen against our catalog of design red flags.

1. Cross-judge and Synthesize. A cross-judge agent using a different model than the main agent evaluates the candidates against a strict rubric.

1. Implement against the sketch. The agent replaces the sketch's placeholder bodies with real logic. If the agent discovers during implementation that a function needs unexpected parameters or extra state, it surfaces the discrepancy.

1. Scrap when the design is wrong. If during implementation we find that the sketches were wrong, the agent throws it all away and starts over.

The point here is to give the agent a self contained mini-loop where it can synthesize multiple competing designs from different model families into one optimal approach, and take care to be rigorous and not be afraid to throw its design away if it turns out that the architecture it came up with is wrong based on empirical proof. If the same workaround appears across unrelated call sites, or if the types require escape hatches like 𝚊𝚗𝚢 or forced casts, that is empirical proof that the architecture is wrong. 

> /architect this new <feature request>

The big lesson here is that it's far more effective to plan with code using /poteto-mode prototyping and /architect. 

It's also why I never bother with reviewing abstract plans adversarially. The agents start hallucinating theoretical risks, and inventing complex edge cases to protect against problems that will never happen. Don't overcook your plans when they're still abstract: let the agent answer open questions on its own through prototyping and verifying its own work. 

## Okay but I really want a planning doc

![Image](https://pbs.twimg.com/media/HRv-IJxasAAYt2S.jpg)

While pstack doesn't come with a planning skill, it does ship with a [multi-phase planning playbook](https://github.com/cursor/plugins/blob/main/pstack/skills/poteto-mode/playbooks/multi-phase-plan.md). I typically use this after the agent has come up with a design I'm happy with, as a way to create a tactical execution plan.

> /poteto-mode turn this design into a plan

Every single task in the plan is structured around proof and verification. The playbook tells agents that tests alone are not sufficient verification. It's verified only when it has actually run the code and verified that it works.

Every plan is checked by an automated script that validates its structure and formatting. Once approved, the plan executes item by item. Each PR is small, self-contained, and easily reviewed. 

For really large projects (like one that might take me a whole week), I may sometimes decide to commit the plans temporarily to the codebase so that other agents are aware of the work in progress. But I typically delete them when I'm done so I don't leave the codebase in a state of confusion. I don't find it valuable to keep plans around permanently.

# The workflow in practice

To see how all of these pieces fit together, let us walk through three concrete examples of how I prompt these workflows.

## Example 1: Researching an ambiguous bug

When an issue appears in production and the root cause is unclear:

> /poteto-mode investigate why background workers periodically fail with timeout errors. give me a breakdown of what we know, what data you used, and your best hypotheses.

The agent explores the code, checks metrics and historical commits in parallel, and gives you its best educated guesses on where the problem might lie.

## Example 2: Designing a new service boundary

When introducing a new subsystem that other modules will depend on:

> /poteto-mode we need to add rate limiting for external webhooks. /architect this first, and answer any open questions with prototypes. let me review before proceeding.

The agent grounds the existing webhook architecture, spins up competing design runners across multiple models, benchmarks with throwaway prototypes, and produces a clean, verified interface.

## Example 3: Executing a multi-PR migration

When executing a complex refactor across many files:

> /poteto-mode create a plan to migrate our entire UI library to StyleX. break the migration into small, verifiable PRs. each PR must have its visual regression tests and live verification steps. i want the final result to be 100% identical compared to the original - bugs included

The agent breaks the work into independent steps, writes an auditable checklist, and prepares each unit so that it can be built, verified, and landed safely.

## Example 4: Fix stuff people report on Slack

If you've ever seen me on Slack in one of our issues or feedback channels, you'll probably have seen these classics:

> \# thread already has sufficient context
/poteto-mode do it

/poteto-mode repro this with /control-app. if it repros on main, fix it and show me a video as proof

Many of the skills I've talked about here are already automatically used by /poteto-mode, so the vast majority of times you can just use /poteto-mode and move on with your life!

## The art of planning

Plan Mode is often used as a way to convince yourself that the agent is going to do the right thing. But the reality is that abstract plans only give you the illusion of progress. A long and lengthy plan makes it look like you and your agent were very productive, but it's probably lacking in substance.

pstack gives you tools to combine thorough investigation, empirical evidence, and rigorous verification. When you plan this way, engineering with agents stops feeling like a gamble. It becomes predictable and repeatable.

[https://x.ai/bot/plugin/9717366](https://x.ai/bot/plugin/9717366)

Thanks for reading, and stay tuned for Part 3!

### 🖼️ Attached Media

![Image 1](https://pbs.twimg.com/media/HRK8DfAbEAEt18A.jpg)

