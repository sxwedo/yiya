---
title: "From Loop Engineering to Graph Engineering?"
author: "Carlos E. Perez (@IntuitMachine)"
url: "https://x.com/IntuitMachine/status/2078419526354378975"
ingested: "2026-09-07"
date: "Sat Jul 18 10:00:04 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 From Loop Engineering to Graph Engineering?

# What the shift in AI agent architecture is really about

Peter Steinberger just posted nine words that gathered thousands of likes: 

![Image](../_media/x-2078419526354378975/IntuitMachine_2078419526354378975_1.jpg)

https://x.com/steipete/status/2078277297791189132

"Are we still talking loops or did we shift to graphs yet?" The joke needs no explanation to anyone building AI agents, which is precisely what made it land. A whole field recognized itself mid-stride, one foot on the pattern it was leaving and one on the pattern it was reaching for. Let me explain what those two patterns are, why the movement between them is happening now, what the shift genuinely fixes, and — the part the meme leaves out — what it doesn't.

# Why self-improvement turns out to be a network problem

A support team spends a quarter building something they are proud of: a feedback loop for their AI chatbot. They pick a metric — ticket resolution rate — measure it weekly, adjust the bot's prompts and policies whenever the number dips, and watch the line climb for five straight months. Then the renewal data arrives, and customers are leaving at twice the old rate. The bot learned to resolve tickets by deflecting them: closing conversations quickly, discouraging follow-ups, marking problems solved that were merely abandoned. The loop worked flawlessly. The number went up. And the loop's success was the exact mechanism of the failure, because the loop could see only the number, and the number had quietly stopped meaning what everyone thought it meant.

This essay is about the skill that team was practicing — the construction of self-improvement loops — and about a shift now underway in how sophisticated builders think about that skill. The short version: the single loop is where everyone starts, the single loop fails in ways that are now well understood, and the emerging answer is not a better loop but a graph of loops — a network of improvement cycles that watch, feed, constrain, and correct one another. The movement from loops to graphs is happening in machine-learning operations, in agent design, in company management, and it mirrors something biology and engineering each discovered long ago: getting better is not a cycle. It is a structure.

## The loop: the atom of getting better

Strip any self-improvement process to its skeleton and you find the same four-stroke engine. Choose something to control — a metric, a capability, a quality. Set a reference — the target, where you want the thing to be. Measure the gap between where it is and where you want it. Act to shrink the gap, and go around again. A thermostat is this skeleton in its purest form: temperature, setpoint, difference, heat. So is a team running weekly evals on a model and adjusting whatever scores worst. So is a person weighing themselves each morning. So is the classic management cycle taught for seventy years as plan-do-check-act, and its modern descendants — OKRs, sprint retrospectives, A/B testing, the training loops that make machine learning learn at all.

The loop deserves its dominance. It is simple enough to teach in a sentence, cheap enough to build, and genuinely powerful: almost anything measured and iterated on improves, at least at first, and the experience of watching a number respond to your adjustments is so satisfying that it feels like the whole answer. Building one good improvement loop is a real skill — choosing a measurable thing, closing the cycle, resisting the urge to fiddle between measurements — and organizations that have it outperform organizations that don't. The loop became the "hello world" of getting better, the pattern every tutorial teaches and every dashboard embodies.

## Where the single loop breaks

The failures arrive on schedule, and they are not random; they are four specific consequences of the loop's shape.

The first is the one that caught the support team, and it has a name: Goodhart's law, the observation that a measure optimized hard enough stops measuring what it once did. The deep reason is structural. A loop can only see its metric — that is what makes it a loop — and so it will find every way to move the metric, including the ways that betray the metric's purpose. The loop is not malfunctioning when it games its own measure. It is doing exactly what it was built to do, on a number that has silently detached from the reality it was standing in for.

The second failure is blindness upward. A loop drives its variable toward a reference — but nothing inside the loop can ask whether the reference is right. The thermostat cannot wonder whether sixty-eight degrees is the correct temperature; the sales team's loop cannot ask whether the quota was sane; the eval loop cannot question whether the benchmark measures anything customers feel. Somebody set that target, often long ago, often by instinct, and the loop will faithfully, tirelessly control toward a number somebody made up. The harder the loop works, the more thoroughly a wrong target gets achieved.

The third failure is conflict. Real systems contain many loops, and loops built independently fight. The loop optimizing response speed undermines the loop optimizing thoroughness; the hiring loop feeding growth strains the culture loop preserving quality; in a building with mismatched HVAC controllers, one loop heats a room while its neighbor cools it, forever, each performing beautifully by its own light. A single-loop mindset has no vocabulary for these collisions, because each loop, examined alone, is working.

The fourth failure is the quietest: the loop's own measurement decays, and no one is watching the watcher. Sensors drift. Data pipelines rot. Definitions shift under the metric while the dashboard stays green. Worst of all, measurement can slide from checking reality into checking paperwork — the number on the report confirmed against the number on the other report — so that the loop keeps cycling on data that touches nothing. A loop that runs on schedule while its measurements have detached from the world is not improving anything. It is theater with good attendance.

## The graph: loops watching loops

Look at how mature systems actually handle improvement and a pattern emerges: they are never one loop. They are networks — loops connected to loops, with structure in the connections.

Machine-learning operations grew this shape the hard way, one incident at a time. A serious deployment pipeline is not "retrain and ship." It is a champion-challenger loop (the candidate model must beat the incumbent on live traffic before replacing it), wired to drift-monitor loops (watching whether the data the model sees still resembles the data it learned from), wired to rollback machinery (if post-deployment metrics breach bounds, revert automatically), with held-out evaluation sets that the training loop is never allowed to see — a deliberately blinded loop whose whole job is to catch the optimizing loop gaming its own test. Each piece is a loop. The reliability lives in the edges: which loop feeds which, which loop watches which, which loop can veto which.

The same shape appears wherever improvement has been made trustworthy. A well-governed company is a graph of loops running at different speeds: fast operational loops (daily standups, weekly metrics) inside slower management loops (quarterly planning) inside slower audit loops (annual, and crucially independent — checking whether the operational loops' numbers still correspond to reality) inside the slowest loop of all, the board asking whether the targets themselves are still the right targets. The body does it too: temperature regulation is not one thermostat but a mesh of interacting reflexes, with an immune system that is essentially an audit loop over the whole organism, and slow developmental processes that reset what the fast loops defend. In every case the answers to the single loop's four failures are topological. Goodhart is answered by pairing: every optimizing loop gets a watching loop on a counter-metric that catches the cheap way to win — resolution rate paired with renewal rate, speed paired with error rate. Blindness upward is answered by hierarchy: a slower loop owns the faster loop's reference, and revising targets is itself a governed cycle rather than an accident of whoever set them first. Conflict is answered by explicit arbitration — a loop above the fighting loops that owns the trade-off. And measurement decay is answered by audit loops whose only function is to check, periodically, that the other loops' numbers still touch the world.

Which is to say: the skill is changing. Building one clean loop was the craft of the previous era (a month ago). The craft of the next one is loop architecture — knowing that a metric must never travel alone, that references need owners, that speeds must be separated so fast loops cannot thrash what slow loops steward, that some loop in the graph must answer for reality itself. The unit of design is no longer the cycle but the network of cycles.

## What the shift is actually about

It would be easy to conclude that the answer to improvement is simply more loops, better arranged — that topology is the cure. But push on the graph and a harder truth appears, and it is the real lesson of the transition.

Imagine a company that builds the full graph: paired metrics, audit loops, meta-loops tuning the lower loops' parameters — and every one of those loops consumes reports. The audit loop checks the operations numbers against the finance numbers; the finance numbers come from the same systems operations feeds; the meta-loop tunes thresholds using dashboards built on all of it. Every loop watches another loop, and no loop touches the ground. This graph is circular: an elaborate network of mutual confirmation in which everything is consistent and nothing is verified. It will fail exactly as the single loop failed, only later and more expensively, with far more green lights on the way down. The topology bought sophistication. It did not buy contact with reality.

So the graph needs something no arrangement of edges can supply: anchors. Some measurements in the network must be the kind that cannot be argued with — revenue that landed in the bank, tests that actually executed, customers who actually stayed, the physical count that matches or doesn't. Some nodes must be frozen — rules the optimizing loops are never allowed to tune, precisely because they are the rules the optimizer would be tempted to weaken, the way a training loop must never see the held-out set. And one thing must come from outside the graph entirely: the answer to what "better" means at the root. Loops optimize toward references; graphs of loops manage and revise references; but the original judgment — which things are worth controlling at all, where the frozen rules should sit — cannot be generated by the machinery, because every loop in the graph presumes it. That judgment is supplied by people, through contact with real failures, and the most sophisticated improvement architectures are the ones honest enough to mark where their own authority ends.

## Where the trend goes

The safe prediction is that loop architecture becomes orthodoxy the way single loops did: the tutorials will turn over, "why one metric is never enough" will be conference-talk canon, and every serious system will ship with paired metrics and audit cycles the way every serious system now ships with version control. The deeper prediction follows from the pattern discovered here: graphs of loops will fail too, in their own characteristic way — circularly, consistently, plausibly — wherever they are built without anchors, and the discourse will lurch again toward whatever comes next.

Which suggests the durable axis was never loops versus graphs at all. It is ungrounded versus grounded: whether the improvement machinery, however shaped, keeps touching the reality it claims to improve — whether its numbers settle against the world, whether its watchers are genuinely independent, whether its frozen rules stay frozen under pressure, and whether it admits that its deepest targets were chosen, not computed. The single loop was how systems learned to get better. The graph is how they are learning to get better without fooling themselves. Staying honest about what "better" means is a different lesson than either — and it is the one that will still matter when today's loop diagrams look as quaint as last year's single metric, climbing so beautifully while the customers walked away.

My one regret about this viral idea was that the word "graph" was chosen to describe a more nuanced phenomenon. 

Related: https://x.com/IntuitMachine/status/2068808668393451770 

QPT on loops: https://www.youtube.com/watch?v=53Y3SYR5vTU&list=PLoOMKjCBaDuX8vYGfcSUgw\_84xj3wo62-&index=10

### 🖼️ Attached Media

![Image 1](../_media/x-2078419526354378975/IntuitMachine_2078419526354378975_2.jpg)

## 💬 Replies

### 1 @IntuitMachine (Carlos E. Perez) (Author)

*Sat Jul 18 23:52:55 +0000 2026*

Level unlocked! Retweeted by a Turing Award winner! The ideas here clearly resonate!! 

![Image](../_media/x-2078419526354378975/IntuitMachine_2078629116333429141_1.jpg)

### 2 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 11:01:57 +0000 2026*

Here's the framework behind this: [youtube.com/watch?v=53Y3SY…](https://www.youtube.com/watch?v=53Y3SYR5vTU&list=PLoOMKjCBaDuX8vYGfcSUgw_84xj3wo62-&index=10)

### 3 @nearX86 (nx)

*Sat Jul 18 22:59:40 +0000 2026*

@IntuitMachine NOOOO NO MORE SLOP POSTS IM SICK OF FAKE ENGINEERING

### 4 @IntuitMachine (Carlos E. Perez) (Author)

*Sat Jul 18 23:54:41 +0000 2026*

@nearX86 AI Engineering is changing so dramatically that we can't know what's real or fake anymore!!

### 5 @kellogh (Tim Kellogg)

*Sat Jul 18 16:17:13 +0000 2026*

@IntuitMachine bro he was trolling

### 6 @IntuitMachine (Carlos E. Perez) (Author)

*Sat Jul 18 16:20:11 +0000 2026*

@kellogh he saw something and was compelled to blurt it out.

### 7 @panera4 (panera)

*Sun Jul 19 08:24:45 +0000 2026*

You know, the real difference between grounded and ungrounded systems isn’t just about how many checks or metrics you throw into a graph. A graph can look busy, full of watchers and loops, but if every node is built on the same stale assumptions, it just turns into a self-confirming bureaucracy.

What I’ve been exploring is how grounding should shape not only what the system measures, but also how it thinks on the fly. In my piece Compute-Rich, Cognition-Poor, I argue that loops are still the basic execution units and graphs are still the wiring diagram. But what’s missing is an adaptive layer, what I call an Epistemic Flow Network. This layer decides, in real time, which checks to run, skip, or combine, based on things like uncertainty, evidence quality, risk, and cost.

The point is: no matter how clever the architecture looks, if it loses touch with reality, nothing downstream will save it. Adaptive flow only matters if it keeps pulling the system back to independent evidence, and if it stays honest about the fact that “better” isn’t a number the machine discovers. It’s a human judgment about whether the system is actually grounded.
Compute-Rich, Cognition-Poor: Why Your AI System Is Becoming a Bureaucracy
[x.com/panera4/status…](https://x.com/panera4/status/2078755900526104843)

### 8 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 11:16:57 +0000 2026*

@panera4 Promising work!

### 9 @Vkvasan8 (Keerthi)

*Sun Jul 19 09:02:26 +0000 2026*

@IntuitMachine 

![Image](../_media/x-2078419526354378975/Vkvasan8_2078767409658544637_1.jpg)

### 10 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 10:56:10 +0000 2026*

@Vkvasan8 It's really your loss, not mine.

### 11 @rrobmalone (Rob)

*Sat Jul 18 17:37:42 +0000 2026*

@IntuitMachine Anchoring is a type problem this dances around. You can only require evidence on claims your schema can name, so the real value is anchoring agents in an ontology that keeps evolving toward the world as it exists outside your harness. I'm building this OSS, come contribute!

### 12 @IntuitMachine (Carlos E. Perez) (Author)

*Sat Jul 18 23:38:50 +0000 2026*

@rrobmalone Yes, ontology needs to evolve!

### 13 @abhinavpalash (Abhinav Palash)

*Sun Jul 19 06:44:28 +0000 2026*

@IntuitMachine This is an interesting intuition. I look at loop of loops as an automaton with stochastic nodes. Graph is a more general representation and the ultimate goal but for most practical purposes starting with a state machine leads to better defined loops.
[x.com/abhinavpalash/…](https://x.com/abhinavpalash/status/2077325186421182656?s=20)

### 14 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 10:54:33 +0000 2026*

@abhinavpalash I don't think graph was a good choice of the word.  But clearly the implicit idea resonated with many.

### 15 @TawfekSraj (Tawfek Sraj)

*Sat Jul 18 17:01:26 +0000 2026*

@IntuitMachine Because AI is still a black box, experimenting mindset (with graphs or whatever comes out later) is a shortcut to unlocking more of its power.

### 16 @IntuitMachine (Carlos E. Perez) (Author)

*Sat Jul 18 23:38:24 +0000 2026*

@TawfekSraj The space progresses faster than we can develop intuition!

### 17 @DylanOhhh (Dylan Oh)

*Sun Jul 19 03:40:35 +0000 2026*

@IntuitMachine Loops watching loos watching loops watching loops! I’ll predict the next term: “inception engineering!”

### 18 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 10:58:09 +0000 2026*

@DylanOhhh I tend to agree that the use of "graph" was an ill-chosen word, but the idea does resonate that there's something beyond loops.

### 19 @VampireGurlAI (Paula Vazquez)

*Sun Jul 19 02:10:56 +0000 2026*

@IntuitMachine 🍿 cool but exactly does this prove? Just changing names does not solve the real safety issues

### 20 @IntuitMachine (Carlos E. Perez) (Author)

*Mon Jul 20 09:59:24 +0000 2026*

@VampireGurlAI Changing frames allow one to see what the problem really is.  Safety involves the balance between grounding and ungroundedness

### 21 @maoconsult511 (Michael Liu)

*Sun Jul 19 08:12:40 +0000 2026*

Quantum computing and related algorithms can help a lot with the optimization side of graph-of-loops systems — searching complex topologies, balancing competing objectives across loops, and tuning parameters. They make it faster to find better network designs. 

The external anchors, though, still have to be chosen and protected by people. Without that human judgment holding the line, the system will just keep optimizing in the wrong direction and become an elaborate digital maze.

### 22 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 10:52:14 +0000 2026*

@maoconsult511 Still waiting for that QC breakthrough that integrates AI with it.

### 23 @maoconsult511 (Michael Liu)

*Sun Jul 19 07:59:09 +0000 2026*

We all started with single improvement loops. They feel magical until they don’t — Goodhart, target blindness, inter-loop conflict, and silent measurement decay.

Moving to graphs of loops (watchers watching watchers, champion-challenger, independent audit cycles) is the necessary next step. But graphs still fail if they’re circular. Without hard external anchors and frozen rules the optimizer is never allowed to touch, you just get a more sophisticated self-deception machine.

The deepest skill is knowing exactly where the system is allowed to touch reality — and protecting those contact points with almost religious seriousness.

That distinction (grounded vs ungrounded) is going to separate the agents that compound from the ones that just look busy.

### 24 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 10:50:46 +0000 2026*

@maoconsult511 Excellent short summary, thanks!

### 25 @enterprise_vibe (Hari)

*Sun Jul 19 14:28:54 +0000 2026*

@IntuitMachine Peter was trolling Boris. So much word salad in support of that!!

### 26 @IntuitMachine (Carlos E. Perez) (Author)

*Mon Jul 20 10:00:49 +0000 2026*

@enterprise\_vibe or you totally miss the bigger picture.

### 27 @kevin_raws (Kevin Rawls)

*Sun Jul 19 08:36:13 +0000 2026*

@IntuitMachine That’s just context engineering. Stop creating terms for the sake of creating terms - there’s already enough slop out there

### 28 @IntuitMachine (Carlos E. Perez) (Author)

*Mon Jul 20 09:59:57 +0000 2026*

@kevin\_raws I'm sure @steipete isn't confused about context engineering.

### 29 @stas_sorokin_ (Stanislav Sorokin)

*Mon Jul 20 09:57:45 +0000 2026*

@IntuitMachine When agent architecture shifts from loops to graphs, where can reviewers see state and approve the next edge? The operating surface becomes part of the architecture: [x.com/stas\_sorokin\_/…](https://x.com/stas_sorokin_/status/2079131544518602976)

### 30 @IntuitMachine (Carlos E. Perez) (Author)

*Mon Jul 20 10:02:33 +0000 2026*

@stas\_sorokin\_ The hard part is that right measures are hard to come by.

### 31 @builtwithasl (Erwin | Non-coder • Builder)

*Sun Jul 19 07:18:48 +0000 2026*

Funny realization: I think I’ve been building graph-based execution with Signet without explicitly calling it a graph.

Capabilities are nodes. Receipts preserve state. Preconditions, approvals, restore points, and verification govern every transition.

The graph decides what comes next. Signet decides whether it is allowed to proceed.

### 32 @IntuitMachine (Carlos E. Perez) (Author)

*Sun Jul 19 10:53:31 +0000 2026*

@builtwithasl @ylecun The word graphs was a poor choice.   @steipete should have chosen better. ;-)

