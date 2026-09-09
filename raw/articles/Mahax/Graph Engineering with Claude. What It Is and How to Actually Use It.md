---
title: "Graph Engineering with Claude. What It Is and How to Actually Use It"
author: "Mahax (@Mahaximus_)"
url: "https://x.com/Mahaximus_/status/2082442856417956173"
ingested: "2026-09-09"
date: "Wed Jul 29 12:27:21 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 Graph Engineering with Claude. What It Is and How to Actually Use It

A few weeks ago the whole AI field was talking about loops. Then graphs showed up on everyone's timeline and loops were suddenly old news overnight.

The shift happened fast. But most of what gets posted about graph engineering is either too vague to be useful or too technical to actually follow. Nobody explains what a graph actually is before they start telling you to build one.

By the end of this article you will know what a graph actually is, how to recognize one hiding inside your current workflow. The single pattern that makes them powerful, where they quietly fail, and how to build one yourself with Claude in a couple of minutes.

---

##                         What a graph actually is

Most people hear "graph" and think of a chart with bars or lines. That's not this. A graph in the context of AI work is simpler than it sounds: it's a map of which jobs need to happen and what each one depends on.

Two things make up the whole thing.

A node is a unit of work. One agent, one task, one thing going in and one thing coming out. Not "research everything about this topic and then write a summary and also check the sources." Just one of those. The smaller and more defined the job, the more useful the node.

An edge is a dependency. It connects two nodes when the second one genuinely needs what the first one produced. Not "these two things happen in sequence." Only when the output of one actually feeds the input of the other.

![Image](../_media/mahax-graph-engineering/Mahaximus__2082442856417956173_1.jpg)

That's it. Nodes do the work. Edges carry what moves between them. Everything else in graph engineering is just applying those two ideas at different scales.

---

##      Your current workflow is already a graph

Here is the thing most people miss when they first hear about graph engineering: you are already doing it. Just badly.

When you write a prompt like "research this topic, then summarize what you find, then write a draft based on the summary" - that is a graph. A single unbranching chain where every step waits for the one before it to finish. One head, one line, one thing at a time.

It runs correctly. It also runs slowly, and it breaks easily. If the summary step produces something unusable, the draft step fails. If the research step takes too long, everything behind it waits. A chain has no redundancy and no flexibility - it is the simplest possible graph, and simple is not the same as efficient.

The first move in graph engineering is not learning something new. It is looking at what you already have and asking: does every step actually need to wait for the one before it? Because most of the time, it doesn't.

[❌](https://abs.twimg.com/emoji/v2/svg/274c.svg) Linear chain:

> Research → Summarize → Write → Check sources → Format → Publish

Six steps in a line. Each one waiting. Total time: the sum of all six.

[✅](https://abs.twimg.com/emoji/v2/svg/2705.svg) Redrawn as a graph:

> Research + Check sources (run at the same time) → Summarize → Write + Format (run at the same time) → Publish

Same work. Less waiting. Finishes faster because independent jobs stop queuing behind each other.

---

##                              The fake-edge test

Once you can see your workflow as a graph, the next move is finding the edges that shouldn't be there.

Look at your current workflow step by step. At each arrow, ask one question: does this step actually need the result of the one before it? Not "does it come after it" - does it genuinely use what the previous step produced?

If yes, the edge is real. Keep the order.

If no, there is no edge. Those two jobs have nothing to do with each other and the wait between them is pure waste.

Take a simple example: "review file A for bugs, then review file B for bugs." It reads like a sequence. But the review of file B never looks at what file A returned. They only run one after the other because that is the order you typed them in. Run them at the same time and the whole thing finishes in the time of the slower one - not the two added together.

Run this test on any workflow in under five minutes:

1. Write out every step as a box

1. Draw an arrow between each pair of consecutive steps

1. For each arrow, ask: does data from step A actually go into step B?

1. If yes - keep the arrow. Real dependency

1. If no - delete the arrow. That's a fake edge

1. Everything with no incoming arrow can start immediately

1. Everything with no outgoing arrow is a final output

> You will find two or three fake edges in almost any workflow you draw. Each one is time you are giving away for free.

---

##                                     The Diamond

Once you start removing fake edges, one pattern shows up more than any other. It's called the diamond and it's the shape that makes graphs worth using.

The idea is simple. One node fans out into several parallel nodes. Those parallel nodes all feed into one final node that pulls their outputs together. Draw it out and it looks like a diamond.

![Image](../_media/mahax-graph-engineering/Mahaximus__2082442856417956173_2.jpg)

Here is what that looks like in practice. Say you are researching a topic to write about. The linear version looks like this: search → read source 1 → read source 2 → read source 3 → synthesize.

The diamond version: search → \[read source 1 + read source 2 + read source 3 in parallel\] → synthesize.

The final synthesis node gets the same inputs either way. But the time it waits is the length of the slowest source read - not all three added together.

The diamond works because synthesis genuinely depends on all three reads. Those are real edges. But the three reads have no dependency on each other. Those connections don't exist. So you run them at the same time and the only wait is at the end, where the wait is unavoidable anyway.

This is why the diamond shows up everywhere once you start looking. Research pipelines. Code review. Market analysis. Any time you have a "gather from multiple places, then combine" shape in your work, you have a diamond. The gathering is parallel. The combining is the convergence point.

The pattern has two rules. First, the parallel nodes must be genuinely independent - no fake edges disguised as real ones. Second, the convergence node must actually need all of them. If it only needs one, the others are wasted work.

Get both of those right and the diamond is the fastest shape a workflow can take.

---

##                       Where graphs quietly fail 

The diamond is clean in theory. In practice it breaks in two specific places, and both are easy to miss.

The first is a bad node going undetected. When three sources run in parallel and one of them returns garbage - a hallucination, an empty result, a misread file, that bad output flows straight into your synthesis node alongside the two good ones. 

The synthesis node doesn't know one of its inputs is wrong. It combines everything and produces a confident answer built on bad material. The parallel structure that made things fast also removed the natural checkpoints where you would have noticed the problem.

The second is a cascade. In a linear chain, a bad step produces a bad output and you see it immediately. In a graph with converging paths, the bad output gets mixed with good outputs and the error becomes harder to trace. By the time the final node responds, the damage is diluted and invisible.

Both problems have the same fix: a checker node.

A checker node sits between your parallel layer and your convergence point. Its only job is to evaluate each output before it moves forward. It doesn't synthesize, doesn't write, doesn't do any of the main work. It asks: is this output usable? If yes, pass it through. If no, flag it, retry, or drop it before it poisons the next step.

The five things a checker node should catch:

1. Empty or null outputs - a node that returned nothing useful

1. Outputs that contradict each other in ways that can't both be true

1. Outputs that are off-topic relative to the original task

1. Confidence signals that are too low to be reliable

1. Format errors that will break the synthesis node's parsing

> A graph without a checker node is a graph that assumes everything upstream worked. That assumption fails more often than you'd expect.

---

##             Static graphs vs. dynamic graphs

Everything so far has assumed you know the shape of your graph before you start. You define the nodes, draw the edges, and run it. That works for repeatable workflows where the structure doesn't change.

But a lot of real work doesn't fit that shape. You start a research task and discover halfway through that one source requires three additional lookups. You start a code review and find that one file needs deeper analysis than the others. The structure you needed wasn't knowable at the start - it only became clear once the work was underway.

That's where dynamic graphs come in. Instead of a fixed structure defined upfront, the graph builds itself as it runs. A node completes its work, looks at what it found, and decides what nodes should come next. The graph isn't planned - it's grown.

The difference matters in practice. A static graph is fast and predictable. You know exactly what will run, in what order, and how long it should take. A dynamic graph is flexible and handles the unexpected. But it's harder to debug when something goes wrong, because the structure that ran isn't the one you originally drew.

Knowing which one you need before you start saves a lot of backtracking:

1. Use a static graph when the task is repeatable and the structure is the same every time

1. Use a static graph when speed and predictability matter more than flexibility

1. Use a dynamic graph when the scope of the work depends on what you find along the way

1. Use a dynamic graph when some nodes need to decide what comes next based on their output

1. Use a static graph first, always - switch to dynamic only when you hit a wall the static version can't handle

1. Never use a dynamic graph for anything where you need to audit exactly what ran and why

Most workflows that feel like they need a dynamic graph actually just need a better-designed static one. The dynamic version is more powerful and harder to control. Reach for it second, not first.

---

##        What the difference actually looks like

Theory is easy to follow in the abstract. Here is the same task run two ways so you can see what actually changes.

The task: analyze three competitor products and write a comparison.

Without a graph:

Research competitor A → Research competitor B → Research competitor C → Compare all three → Write draft → Check facts → Format output

Seven steps, all sequential. Total time is the sum of every step. If step two takes longer than expected, everything behind it waits.

With a graph:

\[Research A + Research B + Research C\] → Checker node → Compare → \[Write draft + Format output\] → Final check

Five logical stages. The three research steps run at the same time. The write and format steps run at the same time. The checker catches bad research before it reaches the comparison. Total time collapses.

The output is the same. The structure is not.

Here is where each approach wins and loses:

\|   \| Linear  \|   Graph\|
\| --- \| --- \| --- \|
\| Setup time  \|  Low \|  Higher \|
\| Total runtime  \| Slow  \|  Fast \|
\|  Easy to debug \| Yes  \|  Harder \|
\|  Handles errors mid-run \| Poorly  \| Well (checker node)  \|
\| Works for one-off tasks  \| Yes  \|  Overkill \|
\|   Works for repeatable workflows\|  Yes \|  Better \|
\|   Scales as task grows\| No  \| Yes \|

The table makes it look like graphs win everywhere except setup and debugging. That's roughly true for anything you run more than once. For a one-off task you'll never repeat, the linear version is almost always faster to build and run.

The graph is worth it when the task is big enough that the time savings compound, or when errors in the middle are expensive enough that the checker node pays for itself.

---

##                   How to build one with Claude

Everything above is still just a mental model until you give Claude something it can execute. This is where it becomes practical.

Claude Code has a workflow keyword that changes how it processes your instructions. Without it, Claude reads your prompt as a sequence and runs each step one after another. With it, Claude parses the structure, identifies which nodes have no dependencies on each other, and runs those in parallel automatically. You describe the graph. Claude figures out the execution order.

A basic workflow looks like this:

\`\`\`python
workflow: research-and-compare

nodes:
  research\_a:
    task: "Research competitor A's pricing, features, and recent news"
    output: competitor\_a.md

  research\_b:
    task: "Research competitor B's pricing, features, and recent news"
    output: competitor\_b.md

  research\_c:
    task: "Research competitor C's pricing, features, and recent news"
    output: competitor\_c.md

  checker:
    task: "Review each research file. Flag any that are incomplete or off-topic."
    depends\_on: \[research\_a, research\_b, research\_c\]
    output: checker\_report.md

  compare:
    task: "Using the research files, write a structured comparison across price, features, and positioning."
    depends\_on: \[checker\]
    output: comparison.md
\`\`\`

![Image](../_media/mahax-graph-engineering/Mahaximus__2082442856417956173_3.jpg)

Three things to notice. First, research\_a, research\_b, and research\_c have no depends\_on - Claude runs all three at the same time the moment the workflow starts. Second, checker lists all three as dependencies, so it waits until all three finish before it runs. Third, compare depends only on checker, not directly on the research nodes - the checker is the gatekeeper

That depends\_on line is the only thing you need to understand to design any graph. No dependencies means parallel. A dependency means wait. Everything else is just deciding which nodes need what.

---

##                      Ready-to-paste prompts

The workflow syntax from the last section works across any repeatable task. Here are four you can drop straight into Claude Code and adapt.

Competitive research:

\`\`\`python
workflow: competitive-research

nodes:
  research\_a:
    task: "Research \[Company A\]. Cover: pricing, core features, recent product changes, public sentiment. Output a structured summary."
    output: company\_a.md

  research\_b:
    task: "Research \[Company B\]. Cover: pricing, core features, recent product changes, public sentiment. Output a structured summary."
    output: company\_b.md

  research\_c:
    task: "Research \[Company C\]. Cover: pricing, core features, recent product changes, public sentiment. Output a structured summary."
    output: company\_c.md

  synthesize:
    task: "Using company\_a.md, company\_b.md, company\_c.md — write a comparison table and a one-paragraph positioning summary for each."
    depends\_on: \[research\_a, research\_b, research\_c\]
    output: comparison.md
\`\`\`

Multi-file code review:

\`\`\`python
workflow: code-review

nodes:
  review\_auth:
    task: "Review auth.py for security issues, edge cases, and code quality. Be specific."
    output: review\_auth.md

  review\_api:
    task: "Review api.py for security issues, edge cases, and code quality. Be specific."
    output: review\_api.md

  review\_db:
    task: "Review db.py for security issues, edge cases, and code quality. Be specific."
    output: review\_db.md

  checker:
    task: "Read all three review files. Flag any issues that appear in more than one file. Note cross-file dependencies that could cause problems."
    depends\_on: \[review\_auth, review\_api, review\_db\]
    output: checker.md

  summary:
    task: "Using all review files and checker.md, write a prioritized list of fixes — critical first, then medium, then low."
    depends\_on: \[checker\]
    output: final\_review.md
\`\`\`

Article research and draft:

\`\`\`python
workflow: article-research

nodes:
  angle\_a:
    task: "Research \[topic\] from the angle of \[audience A\]. What do they care about most? What are the common misconceptions?"
    output: angle\_a.md

  angle\_b:
    task: "Research \[topic\] from the angle of \[audience B\]. What do they care about most? What are the common misconceptions?"
    output: angle\_b.md

  examples:
    task: "Find 3 specific real-world examples of \[topic\] that most people haven't heard of. No generic case studies."
    output: examples.md

  draft:
    task: "Using angle\_a.md, angle\_b.md, and examples.md — write a draft that speaks to both audiences and opens with one of the specific examples."
    depends\_on: \[angle\_a, angle\_b, examples\]
    output: draft.md
\`\`\`

> Replace anything in brackets. The structure stays the same regardless of what you put inside the nodes.

---

##        What changes when you think in graphs

The workflows in the last two sections are useful immediately. But the bigger shift is what happens after you use them for a few weeks.

You stop reading a task as a list of things to do and start reading it as a set of dependencies. The first question stops being "what do I do first?" and becomes "what actually needs to wait for what?" Most of the time the answer is: less than you assumed.

The change shows up in how you write prompts too. A linear prompt tells Claude what to do in order. A graph prompt tells Claude what each piece needs and lets it figure out the order. That's a smaller prompt, easier to edit, and it doesn't break when you swap out one node.

The last thing worth adding to any workflow you run more than twice is a CLAUDE.md entry. This tells Claude how you want graphs handled in that project - your defaults for output format, checker behavior, and error handling, so you don't rebuild that context every session:

\`\`\`python
\# Workflow defaults

When running a workflow:
\- All nodes without depends\_on run in parallel by default
\- Checker nodes should flag incomplete outputs, not silently pass them
\- Output files go to /outputs with the node name as filename
\- If a node fails, pause and report before continuing
\- Never merge outputs from flagged nodes into the final synthesis
\`\`\`

> One file, set once. Every workflow you run in that project inherits it.

The graphs you draw now will look obvious in six months. Not because they were easy - because once you see dependencies clearly, you can't unsee them. The linear version of any workflow starts to look like what it is: a graph with all its edges faked.

---

At the start of this article I said most of what gets posted about graph engineering is either too vague or too technical. I meant it, and I tried to thread the gap.

You now know what a graph is. You know how to find the one hiding inside your current workflow. You know the fake-edge test, the diamond, the checker node, and when to reach for a dynamic graph instead of a static one. You have the syntax to build one in Claude Code and four prompts you can use today.

That is the whole thing. There is no deeper layer of graph theory you need before any of this is useful.

The one thing I'd push back on if someone told me not to include it: the fake-edge test. Run it on one workflow this week. Just one. Draw out the steps, go through the arrows, and ask which ones are actually carrying data. You will find at least one that isn't.

That's the moment the whole model clicks. Not when you understand the theory - when you find the first fake edge in something you built yourself and realize you've been waiting on it for months.

The rest follows from there.

### 🖼️ Attached Media

![Image 1](../_media/mahax-graph-engineering/Mahaximus__2082442856417956173_4.jpg)

