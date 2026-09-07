---
title: "Loop Engineering."
author: "Addy Osmani (@addyosmani)"
url: "https://x.com/addyosmani/status/2064127981161959567"
ingested: "2026-09-07"
date: "Mon Jun 08 23:30:35 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 Loop Engineering.

Loop engineering is replacing yourself as the person who prompts the agent. You design the system that does it instead. A loop here can be thought of a recursive goal where you define a purpose and the AI iterates until complete. It's roughly five building blocks and Claude Code and Codex both have all five now.

I believe this may be the future of how we work with coding agents. However, its still early, I'm skeptical and you absolutely have to be careful about token costs (usage patterns can vary wildly if you are token rich or poor). You also still need some way to ensure quality doesn't drop and concerns re: slop are valid. That said, let's explore what this is all about.

@steipete recently [said](https://x.com/steipete/status/2063697162748260627): “You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents.” Similarly, @bcherny, head of Claude Code at Anthropic, [said](https://x.com/rohanpaul_ai/status/2063289804708835412) “I don't prompt Claude anymore. I have loops running that prompt Claude and figuring out what to do. My job is to write loops”.

Okay, so what does any of that mean?

For like two years the way you got something out of a coding agent was you wrote a good prompt and shared enough context. You type a thing, you read what came back, you type the next thing. The agent is a tool and you are holding it the entire time, one turn after the other. That part is kind of over, or at least some think it's going to be.

Now you build a small system that finds the work, hands it out, checks it, writes down what is done and then decides the next thing, and you let that system poke the agents instead of you. I wrote before about the cousin of this, [agent harness engineering](https://addyosmani.com/blog/agent-harness-engineering/), which is making the environment one single agent runs inside and the [factory model](https://addyosmani.com/blog/factory-model/) \- the system that builds the software. Loop engineering sits one floor above the harness. The harness but it runs on a timer, it spawns little helpers, and it feeds itself.

The thing that surprised me is this is not really a tool thing anymore. A year ago if you wanted a loop you wrote a pile of bash and you maintained that pile forever and it was yours and only yours. Now the pieces just ship inside the products. Steinberger's list maps almost exactly onto the Codex app, and then almost the same onto Claude Code. And once you notice the shape is the same you stop arguing about which tool, you just design a loop that still works no matter which one you happen to be sitting in.

## The five pieces, and then notes

A [loop](https://x.com/reach_vb/status/2063713960495558940) needs five things and then one place to remember stuff. Let me list it first and then map it.

1. Automations that go off on a schedule and do discovery and triage by themselves.

1. Worktrees so two agents working in parallel dont step on each other.

1. Skills to write down the project knowledge the agent would otherwise just guess.

1. Plugins and connectors to plug the agent into the tools you already use.

1. Sub-agents so one of them has the idea and a different one checks it.

Then the sixth thing, the memory. A markdown file, or a Linear board, anything that lives outside the single conversation and holds what's done and what is next. Sounds too dumb to matter. But it's the same trick every long running agent depends on and I went into it in [long-running agents](https://addyosmani.com/blog/long-running-agents/), the model forgets everything between runs so the memory has to be on disk and not in the context. The agent forgets, the repo doesnt.

Both products have all five now.

![Image](../_media/x-2064127981161959567/addyosmani_2064127981161959567_1.png)

The names are a bit different here and there but the capability is the same thing. Let me go one by one because honestly the details are where a loop either holds together or quietly leaks everywhere.

## Automations, this is the heartbeat

Automations are what make a loop an actual loop and not just one run you did once. In the Codex app you make one in the Automations tab and you pick the project, the prompt it will run, how often, and if it runs on your local checkout or on a background worktree. The runs that find something go to a Triage inbox, and the runs that find nothing just archive themselves which is nice. OpenAI uses them internally for boring stuff like daily issue triage, summarizing CI failures, writing commit briefings, hunting bugs somebody added last week. And an automation can call a skill, so you keep the recurring thing maintainable, you fire $skill-name instead of pasting a giant wall of instructions into a schedule that nobody will ever update.

Claude Code gets to the same place but through scheduling and hooks. You can run a prompt or a command on a interval with /loop, you can schedule a cron task, you can fire shell commands at certain points in the agent lifecycle with hooks, or you push the whole thing to GitHub Actions if you want it to keep running after you close the laptop. Same idea exactly, you define an autonomous task, you give it a cadence, and the findings come to you so you are not the one going around checking.

There is a second in-session primitive worth knowing, and it's the one closer to what this whole post is about. /loop re-runs on a cadence. /goal keeps going until a condition you wrote is actually true, and after every turn a separate small model checks whether you are done, so the agent that wrote the code isnt the one grading it. You give it something like "all tests in test/auth pass and lint is clean" and walk away. Codex has the same thing, also called /goal, it keeps working across turns until a verifiable stopping condition holds, with pause and resume and clear. Same primitive, both tools, wich is kind of the pattern for this whole article.

So this is the part that surfaces the work. The rest of the loop is what acts on it.

## Worktrees so parallel doesn't turn into chaos

The second you run more than one agent the files start colliding, that becomes the failure. Two agents writing the same file is the exact same headache as two engineers committing to the same lines and nobody talked to each other first. A git worktree fixes it, its a separate working directory on its own branch sharing the same repo history, so one agent's edits literally can not touch the other one's checkout.

Codex builds the worktree support right in so several threads hit the same repo at once and dont bump into each other. Claude Code gives you the same isolation with git worktree, a --worktree flag to open a session in its own checkout, and a isolation: worktree setting you stick on a subagent so each helper gets a fresh checkout that cleans itself up after. I wrote about the human side of all this in [the orchestration tax](https://addyosmani.com/blog/orchestration-tax/), the worktrees take away the mechanical collision but YOU are still the ceiling, your review bandwith decides how many you can actually run, not the tool.

## Skills, so you stop explaining your project every single time

A skill is how you stop re-explaining the same project context every session like a goldfish. Both tools use the same format, a folder with a SKILL.md inside holding instructions and metadata, and then optional scripts, references, assets. Codex runs a skill when you call it with $ or /skills, or by itself when your task matches the skill description, which is the reason a tight boring description beats a clever one. Claude Code does it the same way and I wrote the pattern up in [agent skills](https://addyosmani.com/blog/agent-skills/).

Skills are also where intent stops costing you over and over. I argued in [the intent debt](https://addyosmani.com/blog/intent-debt/) that an agent starts every session cold and it will fill any hole in your intent with a confident guess. A skill is that intent written down on the outside, the conventions, the build steps, the “we dont do it like this because of that one incident”, written one time where the agent reads it every run. Without skills the loop re-derives your whole project from zero every cycle, with skills it kind of compounds.

One thing to keep straight, the skill is the authoring format and a plugin is how you ship it. When you want to share a skill across repos or bundle a few together you package them as a plugin. True in Codex, true in Claude Code.

## Plugins and connectors, the loop touches your real tools

A loop that can only see the filesystem is a tiny loop. Connectors, which are built on MCP, let the agent read your issue tracker, query a database, hit a staging api, drop a message in Slack. Codex and Claude Code both speak MCP so the connector you wrote for one usually just works in the other. And plugins bundle connectors and skills together so your teammate installs your setup in one go instead of rebuilding the whole thing from memory.

This is the difference between an agent that says “here is the fix” and a loop that opens the PR, links the Linear ticket and pings the channel once CI is green by itself. The connectors are the reason the loop can act inside your actual environment instead of just telling you what it would do if it could.

## Sub-agents, keep the maker away from the checker

The most useful structural thing in a loop, by far, is splitting the one who writes from the one who checks. The model that wrote the code is way too nice grading its own homework. A second agent with different instructions and sometimes a different model catches the stuff the first one talked itself into.

Codex only spawns subagents when you ask, runs them at the same time and then folds the results back into one answer. You define your own agents as TOML files in .codex/agents/, each with a name, a description, instructions and optional model and reasoning effort, so your security reviewer can be a strong model on high effort while your explorer is some fast read-only thing. Claude Code does the same with subagents in .claude/agents/ and agent teams that pass work between them. The usual split in both is one agent explores, one implements, one verifies against the spec.

I made this case twice already, once as [the code agent orchestra](https://addyosmani.com/blog/code-agent-orchestra/) and once as [adversarial code review](https://addyosmani.com/blog/adversarial-code-review/). The reason it matters specifically inside a loop is the loop runs while you are not watching, so a verifier you actually trust is the only reason you can walk away. Subagents do burn more tokens since each one does its own model and tool work, so spend them where a second opinion is worth paying for. This is also basically what Claude Code's /goal does under the hood, a fresh model decides if the loop is done instead of the one that did the work, the maker and checker split applied to the stop condition itself.

## What one loop looks like

Stick it together and a single thread turns into a little control panel. Here is one shape I keep using.

An automation runs every morning on the repo. Its prompt calls a triage skill that reads yesterdays CI failures, the open issues, the recent commits, and writes the findings into a markdown file or a Linear board. For each finding that is worth doing the thread opens an isolated worktree and sends a sub-agent to draft the fix, and a second sub-agent reviews that draft against the project skills and the existing tests.

Connectors let the loop open the PR and update the ticket. Anything the loop can not handle lands in the triage inbox for me. The state file is the spine of the whole thing, it remembers what got tried, what passed, what is still open, so tomorrow morning the run picks up where today stopped.

And look at what you actually did there. You designed it one time. You did not prompt any of those steps. Thats Steinberger's whole point made real, and its the same loop in Codex or in Claude Code because the pieces are the same pieces.

## What the loop still does not do for you

The loop changes the work, it does not delete you from it. And three problems actually get sharper as the loop gets better, not easier.

Verification is still on you. A loop running unattended is also a loop making mistakes unattended. The whole reason you split the verifier sub-agent from the maker is to make the loop's “its done” mean something, and even then “done” is a claim and not a proof. I keep saying the same line from [code review in the age of AI](https://addyosmani.com/blog/code-review-ai/), your job is to ship code you confirmed works.

Your understanding still rots if you allow it. The faster the loop ships code you did not write, the bigger the gap between what exists and what you actually get. Thats [comprehension debt](https://addyosmani.com/blog/comprehension-debt/) and a smooth loop just makes it grow faster unless you read what the loop made.

And yeah, the comfortable posture is probably the risky one. When the loop runs itself its very tempting to stop having an opinion and just take whatever it gives back. I called that [cognitive surrender](https://addyosmani.com/blog/cognitive-surrender/). Designing the loop is the cure when you do it with judgement and the accelerant when you do it to avoid thinking, same action, opposite result.

## Build the loop. Stay the engineer.

I think this is a preview of how our work is going to evolve. That said, If I weren't reviewing the code myself or if I relied entirely on automated loops to fix it my product’s quality would suffer. I'd likely end up stuck in a downward spiral, continuously digging myself into a deeper hole.

That said, go ahead and set up your loops, but don't forget that prompting your agents directly is still effective. It's all about finding the right balance.

Loops can also result in different outcomes depending on you. Two people can build the exact same loop and get completely opposite results. One uses it to move faster on work they understand deeply. The other uses it to avoid understanding the work at all. The loop doesn't know the difference. You do.

That's what makes loop design harder than prompt engineering, not easier. Cherny's point isn’t that the work got easier. It's that the leverage point moved.

Build the loop. But build it like someone who intends to stay the engineer, not just the person who presses go.

### 🖼️ Attached Media

![Image 1](../_media/x-2064127981161959567/addyosmani_2064127981161959567_2.jpg)

## 💬 Replies

### 1 @heynavtoor (Nav Toor)

*Tue Jun 09 15:53:56 +0000 2026*

@addyosmani your job is building the loop that runs the agents for you

### 2 @Tuteth_ (tut™)

*Tue Jun 09 05:29:54 +0000 2026*

@addyosmani incredible article.

excited to build my first loop now that i fully get it. 

thank you

### 3 @addyosmani (Addy Osmani) (Author)

*Tue Jun 09 05:30:51 +0000 2026*

@Tuteth\_ Thanks for the kind words!

### 4 @0xQuantCat (Quant Cat)

*Tue Jun 09 04:52:49 +0000 2026*

@addyosmani This is one of the better articles about loops on here. Bookmark it

I find it funny how guys with (probably) infinite tokens tell users to loopify their workspaces, while everyone else is pushed out of their pro plan’s weekly usage and are basically forced to run on API basis

### 5 @addyosmani (Addy Osmani) (Author)

*Tue Jun 09 05:09:30 +0000 2026*

@0xQuantCat Thank you! I'm on a limited plan too and think we need to be realistic with how much far loops can be pushed without infinite tokens (still usable, just mindfulness)

### 6 @lucianomlima (Luciano Lima)

*Tue Jun 09 00:53:36 +0000 2026*

@addyosmani Unless you don't have unlimited tokens. In this case you continue to prompt the agent 😂

### 7 @addyosmani (Addy Osmani) (Author)

*Tue Jun 09 02:04:18 +0000 2026*

@lucianomlima Thus the disclaimer 😀 I genuinely believe this is a direction we're heading towards but (1) token costs and (2) verification against what "good" means are important factors

### 8 @yatesjalex (Alex Yates)

*Tue Jun 09 01:59:57 +0000 2026*

@addyosmani Absolutely incredible article thank you so much for sharing Addy!

### 9 @addyosmani (Addy Osmani) (Author)

*Tue Jun 09 02:01:03 +0000 2026*

@yatesjalex My pleasure! Thanks for reading

### 10 @greenido (greenido)

*Tue Jun 09 01:11:33 +0000 2026*

@addyosmani …the main point for people that need to pay for tokens is ‘be careful’ and monitor closely as it can go ‘up and to the right’ $$$ quickly.

### 11 @addyosmani (Addy Osmani) (Author)

*Tue Jun 09 02:02:58 +0000 2026*

@greenido Yeah I think we're heading towards these patterns, but have to be mindful of token costs making it less accessible to some at this time.

### 12 @malims_ (neverMind)

*Sun Jun 14 19:33:36 +0000 2026*

@addyosmani This is so amazing. Simple and precise!

### 13 @addyosmani (Addy Osmani) (Author)

*Sun Jun 14 19:52:10 +0000 2026*

@malims\_ Thank you!

### 14 @santtiagom_ (santi)

*Tue Jun 09 00:27:20 +0000 2026*

@addyosmani goal → agent → validation → repeat until done

but the hard part is defining "done".

### 15 @theonejvo (Jamieson O'Reilly)

*Tue Jun 09 03:07:34 +0000 2026*

I agree. The ability to define, measure and improve quality is yet to be solved by AI. While looping might move things positively in one direction, it's important that we don't collectively, globally, slopify our standards.

The risk I'd flag goes a layer deeper than RLHF mechanics. Picture a large share of the world's inference burn shifting into autonomous loops, and people getting comfortable accepting whatever comes out, in which case, acceptance is a signal providers learn from, whether explicit or just behavioural - did you keep the diff, did the session continue, did you come back?

When a human reviews one output at a time, that signal carries real judgment per token. When an agent ships a thousand-token diff and the tests went green, nobody truly looked, yet it still gets logged as success.

So providers start receiving a flood of high-volume, low-information "this was good" feedback, and the cheapest reading of that flood is "ship more of the same." It compounds through a selection effect too. 

The people most bothered by slop churn or build their own hard evals, while the people who tolerate it keep generating tokens. The surviving signal skews toward slop-tolerance, and that skewed signal feeds the next round of tuning. You end up optimizing toward the taste of whoever complains least.

There's a second channel that makes it worse too, that is, as AI code fills public repos, that code becomes pretraining data for the next base model. The corpus drifts on its own, even before any feedback loop touches it. Slop in the weights, slop in the corpus, slop in the feedback, three paths reinforcing each other.

Market correction does exist as a counterforce, but it runs at the speed of software actually failing in production, which can take years to surface. So the slop loop runs at training cadence and inference volume. 

My worry (one I think is not being discussed enough here) is that the corrective forces are simply slower than the thing they're correcting. Nobody has to choose slop for the whole system to drift there, which is exactly what makes it the path of least resistance.

![Reply 15 Image 1](../_media/x-2064127981161959567/theonejvo_2064182588470870045_1.jpg)

### 16 @Dcmat (Dcmat)

*Tue Jun 09 05:29:07 +0000 2026*

@addyosmani What's the best tech stack right now for loops?

I've been working on this idea for a while. Had some early versions of this on OpenClaw some months ago, but it wasn't as smooth as I wanted at the time.

I think it's time to get back into this.

### 17 @shrutikapoor08 (Shruti Kapoor)

*Tue Jun 09 00:25:48 +0000 2026*

@addyosmani So it is becoming a thing!

### 18 @josesilesdata (José Siles | AI | Data)

*Tue Jun 09 08:58:52 +0000 2026*

@addyosmani Pasar de prompts manuales a diseñar el sistema que hace los loops solo es el salto de nivel que diferencia a los ingenieros de IA de verdad.

### 19 @iuditg (Udit Goenka)

*Tue Jun 09 05:25:26 +0000 2026*

@addyosmani Try using this Addy: [github.com/uditgoenka/aut…](https://github.com/uditgoenka/autoresearch)

### 20 @devparagiri (Dev)

*Tue Jun 09 00:17:18 +0000 2026*

@addyosmani preprint coming out soon! 

![Image](../_media/x-2064127981161959567/devparagiri_2064139740966748168_1.png)

### 21 @lalkaka (Rustam X. Lalkaka)

*Tue Jun 09 00:07:56 +0000 2026*

@addyosmani loops extending into production is where things get weird/wild/interesting. [x.com/lalkaka/status…](https://x.com/lalkaka/status/2064045071029485714)

### 22 @nfcampos (Nuno Campos)

*Wed Jun 10 16:35:15 +0000 2026*

@addyosmani ha great minds... [x.com/nfcampos/statu…](https://x.com/nfcampos/status/2064746971944956299)

### 23 @TiTan_Web3_ (泰坦链 | DeFi)

*Wed Jun 24 03:07:57 +0000 2026*

@addyosmani what's your done check?

### 24 @alphabatcher (Alpha Batcher)

*Tue Jun 09 08:58:43 +0000 2026*

@addyosmani probably the best article and sharing about Loop Engineering

### 25 @GOJO_CHAIN (고조 체인)

*Sat Jun 27 05:28:46 +0000 2026*

@addyosmani How do you verify good?

### 26 @iAmHenryMascot (Henry Mascot)

*Fri Jun 19 13:11:57 +0000 2026*

@addyosmani [x.com/iAmHenryMascot…](https://x.com/iAmHenryMascot/status/2067957989328224525?s=20)

### 27 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Tue Jun 09 15:47:03 +0000 2026*

@addyosmani [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2064373120895451495)

### 28 @gerardsans (Gerard Sans | Axiom 🇬🇧)

*Tue Jun 09 12:43:44 +0000 2026*

@addyosmani [x.com/gerardsans/sta…](https://x.com/gerardsans/status/2063015138748236012)

### 29 @GaryLHenderson (Gary)

*Tue Jun 09 12:57:42 +0000 2026*

@addyosmani Easy guide to understand Loops

[x.com/GaryLHenderson…](https://x.com/GaryLHenderson/status/2064329835099427313?s=20)

### 30 @t20000622yy (也无风雨也雾晴)

*Sun Jun 14 14:07:58 +0000 2026*

@addyosmani “Loop engineering” is exactly it. The agent is not the product; the loop around it is.

I’m building Hive for the unsexy but necessary part: who got the task, what happened, what memory survived.
[github.com/tt-a1i/hive](https://github.com/tt-a1i/hive)

### 31 @RealRichomie (Richard He)

*Fri Jun 12 03:07:49 +0000 2026*

@addyosmani loop + trigger = AGI

### 32 @Triumph_Games (Triumph Games)

*Mon Jun 22 03:37:17 +0000 2026*

@addyosmani Top tier workflows

### 33 @GuruVerseX (GuruVerseX)

*Sun Jun 21 08:54:33 +0000 2026*

@addyosmani loops gonna eat prompts

### 34 @wundercorp (WunderCorp, Inc.)

*Tue Jun 09 07:44:56 +0000 2026*

@addyosmani 

![Image](../_media/x-2064127981161959567/wundercorp_2064252388404256772_1.jpg)

