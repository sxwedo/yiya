---
title: "300 AGENTS, ONE GRAPH, AND A LOOP THAT EDITS THE LOOP"
author: "Mr. Buzzoni (@polydao)"
url: "https://x.com/polydao/status/2096128417108287566"
ingested: "2026-09-09"
date: "Sat Sep 05 06:48:53 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 300 AGENTS, ONE GRAPH, AND A LOOP THAT EDITS THE LOOP

> Loops, graphs, dynamic workflows and routines - in the order you should actually build them

---

I have rebuilt the same agent setup four times this year and thrown three of them away. Each version worked for about a week. 

Then the corrections started repeating: the same duplicate company name merged into the wrong node, the same thin source accepted as evidence, the same instruction retyped on Monday that I had already typed on Friday.

What ended that cycle was giving corrections a place to live.

A system improves between runs when two things are true. Something carries forward, and something rejects work before it carries forward. Loop engineering gives you the first. 

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_1.png)

Graph engineering gives the memory a shape you can query. Routines make it run without you in the room. Kimi K3's Agent Swarm supplies enough parallel capacity - up to three hundred agents on one problem - to make the structure worth building in the first place.

Fourteen steps, in build order. Every one of them is a file you write or a rule you set, and none of them takes longer than an afternoon.

\| Phase                    \| Steps \| What it produces                                       \|
\| ------------------------ \| ----- \| ------------------------------------------------------ \|
\| I · The spine            \| 1-4   \| One loop that finishes on its own and refuses bad work \|
\| II · The graph           \| 5-8   \| Memory with a shape, instead of a transcript           \|
\| III · Dynamic workflows  \| 9-11  \| A run that picks its own scope from the graph state    \|
\| IV · Routines and review \| 12-14 \| It runs on a schedule and edits its own instructions   \|

---

# Phase I · The Spine

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_5.png)

---

## 1 · Pick the task by frequency times reversibility

The first task decides whether the system survives its first bad week. You want something that recurs at least weekly, verifies in under a minute, and costs nothing when it comes back wrong. 

> Frequency gives you enough runs to see a pattern. Reversibility gives you room to be wrong in public.

Competitive tracking, changelog monitoring, inbound lead enrichment and source triage all qualify. Anything that sends, pays or publishes does not, at least not this month.

## 2 · Write the stop condition before you write the prompt

Agent setups fail on the same axis over and over: they know how to start and have no idea when they are finished. Write the ending first, in a shape a machine can evaluate.

\`\`\`
STOP when either is true:
  \- 40 nodes verified at 2+ independent sources each
  \- 3 full passes completed with no new verified node
HARD CAPS: 300 agents · 45 min wall clock · 2 retries per node
ON CAP HIT: write 40-runs record, escalate the unfinished list, exit
\`\`\`

A stop condition made of counts rather than adjectives is the difference between a loop and a runaway process. "Until the research is thorough" is not a stop condition.

## 3 · Move the work step out of the prompt and into SKILL.md

A prompt is a sample of your intent. A file is the intent itself, versioned and reusable, and the swarm loads it before anything else.

\`\`\`
\# SKILL.md · entity research
STEPS: 1 identify → 2 pull primary sources → 3 extract fields → 4 self-check → 5 return
DECISION RULES:
  \- filings and first-party docs outrank coverage of them
  \- conflicting numbers: return both with dates, never average
SELF-CHECK before returning:
  \- every field traces to a source line
  \- confidence below 0.6 means return it flagged, not dropped
OUTPUT: the return schema in SCHEMA.md, nothing else
\`\`\`

The self-check section is what keeps three hundred agents from returning three hundred formats. It is cheap, it runs inside the agent, and it catches the mechanical mistakes before they reach your gate.

## 4 · Add the gate, and make sure the agent does not control it

An agent rereading its own output sees every reason it wrote things that way, so it approves. That holds for K3, for Claude, for every model on the board. A working gate has to be something outside the run.

\| Gate type              \| What it catches                                             \| Cost to build                       \|
\| ---------------------- \| ----------------------------------------------------------- \| ----------------------------------- \|
\| Deterministic script   \| Schema breaks, missing fields, dead links, count mismatches \| 20 minutes, runs free forever       \|
\| Fresh-context verifier \| Thin evidence, wrong entity, invented relationships         \| One prompt, one extra call per node \|
\| Threshold rule         \| Anything below the confidence bar you set in SCHEMA.md      \| One line                            \|
\| Human queue            \| The small pile that failed twice                            \| Your five minutes a day             \|

Run them in that order. The script is free, so it should reject everything it can before a single token gets spent on verification.

---

# Phase II · The Graph

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_6.jpg)

---

## 5 · Decide what a node is, in writing

One line in SCHEMA.md determines every question the system can answer later. A node is a company, or a person, or a filing, or a protocol. Pick one primary type per graph and treat the rest as attributes.

\`\`\`
\# SCHEMA.md
NODE TYPES:  company · person · filing · vendor · protocol
EDGE TYPES:  shared\_investor · shared\_vendor · shared\_filing
             depends\_on · supersedes · contradicts
THRESHOLD:   drop candidate edges below 0.6 confidence
VERIFIED:    a node counts at 2 independent sources
\`\`\`

Write it once and every future run against every market produces graphs that merge and compare the same way.

## 6 · Write the alias table before the first launch

"Block", "Square" and "Block Inc" arriving as three nodes splits one cluster into three, and every query you run afterward inherits that error. Ten minutes of aliases.csv protects a run that puts three hundred agents in the field.

It lives above the graph, not inside it, because it is an input to every future launch. Each duplicate that slips through gets fixed here once.

\`\`\`
canonical,alias
Block Inc,Block
Block Inc,Square
Alphabet Inc,Google

\`\`\`

## 7 · Fix the return schema so the merge stays deterministic

Three hundred agents replying in prose overflows any orchestrator you point them at. Three hundred agents replying in a fixed shape merge without a judgment call and cost a fraction of the tokens.

\`\`\`
RETURN (per agent, nothing else):
  node\_id · label · type
  sources: \[max 3, url + date\]
  candidate\_edges: \[target label + relation type + evidence line\]
  confidence: 0-1
\`\`\`

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_7.png)

## 8 · Land every node before you draw a single edge

A sequential tool notices connections on the way through and tilts the whole map toward whatever it read first. 

The swarm materializes the complete node set, then reasons across all of it at once. Keep that ordering, and give every edge a source line:

\`\`\`
{ "from": "n041", "to": "n077", "type": "shared\_processor",
  "evidence": "sec:0001 p.14", "confidence": 0.86 }
\`\`\`

The evidence field is what lets you walk a client through a claim instead of asking them to trust it.

---

# Phase III · Dynamic Workflows

This is the phase people skip, and it is where a static automation turns into something that responds to its own state.

---

## 9 · Make the launch block a query, not a list

A fixed list of forty companies is a script. A launch block that reads the graph first is a workflow, because next week it dispatches a different set of agents without you editing anything.

That last clause is the whole point of having a graph underneath: the system ranks its own work by structural importance instead of by row order.

\`\`\`
LAUNCH: dispatch one agent per node WHERE
  status = unverified
  OR last\_checked &gt; 30 days
  OR inbound\_edges &gt;= 3 AND confidence &lt; 0.8
CAP: 300. If the query returns more, take the highest inbound\_edges first.
\`\`\`

## 10 · Route by node state instead of running one path for everything

\| Node state      \| Route                                      \| Why                                        \|
\| --------------- \| ------------------------------------------ \| ------------------------------------------ \|
\| Verified, fresh \| Skip entirely                              \| Already paid for, no reason to re-research \|
\| Verified, stale \| One agent, delta check only                \| Cheap, catches what changed                \|
\| Thin (1 source) \| One agent, sources only                    \| Targeted, not a full rerun                 \|
\| Contradicted    \| Two agents with different starting sources \| Disagreement needs independent looks       \|
\| New             \| Full research pass                         \| Nothing to reuse yet                       \|

This table is why the second run costs a fraction of the first. Skipping settled work is the entire economics of the setup.

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_3.png)

## 11 · Branch on the verdict, and cap the retries

\`\`\`
gate pass         → merge into 20-graph, mark verified
gate fail (1st)   → retry once, with the failure reason appended to the task
gate fail (2nd)   → write to 30-queries/needs-human.md, stop touching it
script fail       → never retried, the return was malformed, log and move on
\`\`\`

Retrying a failure without telling the agent what failed is how a loop burns a budget on the same mistake. Passing the reason back turns a retry into a correction.

---

# Phase IV · Routines and the Review Loop

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_9.png)

---

## 12 · Schedule it, then add the event trigger

\`\`\`
ROUTINE weather-check
  schedule: Mon 07:00 Europe/Warsaw
  launch:   00-launches/mobile-payments.md
  budget:   120 agents, 30 min
  on-finish: write 40-runs record, post the diff to me
TRIGGER on new filing in the watched set → run the same launch, scoped to that entity
\`\`\`

The schedule sets a floor and the event trigger handles the spikes. 

Match the interval to how fast the underlying data actually moves; a market that changes monthly does not need a daily run, and paying for one is the most common way people conclude that agents are expensive.

## 13 · Give corrections a permanent home in CONSTRAINTS.md

This file is the reason the system improves rather than merely repeats. Every time you correct something, the correction goes here instead of into a chat message that disappears.

\`\`\`
\# CONSTRAINTS.md
2026-08-19 · press releases are not independent sources. Two releases = 1 source.
2026-08-24 · "acquired by" needs a filing or a company statement, never coverage.
2026-08-29 · subsidiaries roll up to the parent node unless they file separately.
\`\`\`

Loaded at the top of every launch, three lines long at week one and thirty by month three. Each one is a mistake that will not be made again by any agent in any future run.

## 14 · Run the meta-loop that edits your own files

The last step is the one that makes the whole thing self-improving. Once a week, one agent reads the run history and proposes changes to the files you own.
Keep the approval step. An agent that can edit its own constraints without review will eventually edit away the constraint that was inconvenient, and it will be able to explain why that was reasonable.

\`\`\`
WEEKLY REVIEW (one agent, fresh context):
  read: 40-runs/\* from the last 7 days
  find: failure reasons appearing 2+ times
        nodes escalated to human more than once
        alias collisions caught at merge
  propose: edits to SKILL.md, SCHEMA.md, aliases.csv, CONSTRAINTS.md
  output:  a diff. You approve or reject. It never writes to those files itself.
\`\`\`

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_8.jpg)

---

## The Files, in One Place

\`\`\`
graph-workspace/
├── SKILL.md          you write it    · the procedure, loaded first
├── SCHEMA.md         you write it    · node types, edge types, thresholds
├── CONSTRAINTS.md    you write it    · corrections that carry forward
├── aliases.csv       you write it    · canonical names, checked before merge
├── 00-launches/      you write it    · one launch query per question
├── 10-returns/       the swarm writes
├── 20-graph/         the swarm writes · nodes.jsonl · edges.jsonl · graph.md
├── 30-queries/       you ask, it answers · includes needs-human.md
└── 40-runs/          append only     · the input to step 14
\`\`\`

One author per directory. Numeric prefixes fix the write order, so returns never overwrite launches and the graph never overwrites returns. 

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_4.jpg)

40-runs is append only, because it is the file that answers "why does the graph say that" six weeks later.

---

## What It Costs and What It Pays

\| Channel                            \| What it pays                                                                        \| What you need standing first                           \|
\| ---------------------------------- \| ----------------------------------------------------------------------------------- \| ------------------------------------------------------ \|
\| A market map sold as a deliverable \| Replaces an analyst contract that runs into four figures, delivered in an afternoon \| One graph of a market you know, built end to end       \|
\| Retainer on a live graph           \| Monthly fee to re-run, flag new edges, re-verify what moved                         \| The first client's graph already running on a schedule \|
\| The workspace as a product         \| The fourteen steps packaged for someone else's domain                               \| This structure, tested on two different markets        \|

The third one is the actual business. The steps do not change between domains; the schema and the alias table do. 

Anyone who has built two of these can build the third for someone else in a morning, and step 14 means the one they hand over keeps getting better after they walk away.

---

## The Short Version

Steps 1 to 4 give you a loop that finishes. Steps 5 to 8 give it memory with a shape. Steps 9 to 11 let it choose its own work. Steps 12 to 14 make it run without you and rewrite its own instructions from its own failures.

The first run is research. The twelfth is an asset, and the gap between them is four files you wrote in an afternoon.

![Image](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_2.jpg)

---

And if you found this useful:

- Save this article. The links change and new repos pop up weekly, you'll need this as a reference

- For weekly deep dives into AI architecture, quant trading, and the agent economy, follow me: [@polydao](https://x.com/@polydao)

- Join the TG Channel: [Buzzoni Notes](https://t.me/+Wf8q84QkpyJhNjIy) \- here I share my raw prompts, custom skills, and alpha that's too early for X

### 🖼️ Attached Media

![Image 1](../_media/polydao-graph-loop-meta-loop/polydao_2096128417108287566_10.jpg)

