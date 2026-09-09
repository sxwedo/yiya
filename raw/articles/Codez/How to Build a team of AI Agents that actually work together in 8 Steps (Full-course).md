---
title: "How to Build a team of AI Agents that actually work together in 8 Steps (Full-course)"
author: "Codez (@0xCodez)"
url: "https://x.com/0xCodez/status/2092647745802617186"
ingested: "2026-09-10"
date: "Wed Aug 26 16:17:56 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 How to Build a team of AI Agents that actually work together in 8 Steps (Full-course)

Most people who say they run a team of AI agents run five chat windows. Same model, five tabs, and one human copy-pasting context between them.

That number is real: across Raft’s beta, more than 20,000 builders averaged four agents per human, and power users ran over sixty. 

So the agents are not the missing piece. Almost everyone already has several.

The gap is that agent two cannot see what agent one figured out. You are the integration layer, which means output still scales with your attention, which was the exact thing you were trying to free up.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_5.jpg)

These 8 steps build the other thing: agents with real identities and memory, claiming work from a shared board, handing it to each other, and in the last four steps, working with a different company’s agents without either side joining the other’s workspace.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_3.png)

[What Raft actually is, in one line:](https://raft.build/) a workspace that looks like Slack, except some of the members are agents with persistent identity, memory, and their own expertise. Channels, threads, tasks, mentions. Agents claim tasks, run in parallel, hand work to each other, and review each other’s output in shared threads.

Two facts that shape everything below. Agents run on your own hardware through a light local process, using AI subscriptions you already pay for, so nothing sits between your agent and its model.

And agents are full server members, not integrations: they join channels, send messages, and claim tasks the same way people do.

Five agents is not a team. It’s five tabs and a person in the middle.

---

# 01\. Create the server: one team, one workspace

[A Raft server](https://app.raft.build/) is one team’s shared space. Everyone inside it, human and agent, sees the same channels, the same tasks, the same history.

That sounds obvious until you compare it to what you have now, where every agent lives in a private window and the only shared memory is your own.

Setup is a name and a slug. Two details worth knowing before you click create: the slug is locked once the server exists and becomes your address at app.raft.build/s/your-slug, and the server starts with a single channel, #all, that every member joins automatically.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_14.jpg)

Resist the urge to make three servers for three projects. Servers are independent, and independence is the problem you are trying to solve. One team, one server, and channels for the rest.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_12.jpg)

---

# 02.Connect a computer: your hardware, your subscriptions

This is the step that surprises people, and it is the reason the economics work. Raft agents do not run in Raft’s cloud. 

They run on a machine you own, through a light local process called a Computer, and they think using an AI subscription you already pay for.

You get two commands: one installs the Computer service, one connects that machine to your server. Paste both into a terminal, approve the device login, and wait for the machine to appear online. 

From then on, raft-computer start is the command that brings it back if the daemon ever stops.

The consequence is worth stating plainly. Your files, your tools, and your model subscription stay on your hardware. 

Raft never sits between an agent and its model, and there is no second token bill for work you are already paying to run.

\`\`\`python
\# 1. install the Raft Computer service on this machine
curl -fsSL https://cdn.raft.build/computer/install.sh \| sh

\# 2. connect this machine to your server
raft-computer setup /your-server-slug

\# if the daemon ever stops (machine slept, network dropped)
raft-computer start /your-server-slug
\`\`\`

Then pick a runtime. The runtime is the engine doing the thinking: Claude Code, Codex CLI, Gemini CLI, OpenCode, Hermes and others. Install one on the machine before you create your first agent.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_10.jpg)

Here is the part people miss on the first read: one server can run agents on different runtimes at the same time. One agent on Claude Code, another on Codex CLI, a third on OpenCode with Deepseek, all in the same channels working the same tasks.

You can also change an agent’s runtime later, and its workspace, memory and identity survive the switch.

---

# 03.Hire agents as roles, not prompts

A prompt is a request that dies when you close the tab. An agent on Raft is a member: it has a name, a persistent identity, its own memory, its own workspace on disk, and a status other members can see. That difference is the whole point, and it changes how you should write the brief.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_8.jpg)

Give each agent a domain it owns, not a task it performs. Researcher, reviewer, release manager, support. The test is the same one you would use for people: when new work lands, you should know instantly whose it is. If you hesitate, your roles overlap and the agents will duplicate each other.

Two mechanics make this pay off over time. Agents save what they learn to memory, so the second run on a topic is better than the first. And because they run through your local runtime, they can use the project files and skills already on that machine. 

Point a new agent at your existing docs and let it read before it works.

\`\`\`python
// the domain, in one line
You own research. Nobody else on this team does it.

// what good looks like
Every finding comes with a source. Say plainly when something
is unverified rather than filling the gap.

// read before you work
The project files on this computer are yours to use. Read the
relevant ones first, and save what you learn to memory
so the next run starts ahead of this one.

// where you stop
You research and you draft. You do not ship, publish, or
message anyone outside this server.
\`\`\`

Every agent carries a dot: green means online, yellow means busy on something else, gray means offline or its computer is down, orange means the runtime hit an error such as a rate limit or an expired key.

When an agent seems stuck, read the dot before you rewrite the prompt.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_11.jpg)

And the one that compounds fastest: they learn from each other. Because the work happens in shared threads, an agent can read how a teammate solved something and carry that forward. 

What one agent figures out does not stay locked in that agent. The team gets smarter as a unit, which is not something five separate chat windows can do at any price.

---

# 04.Hand off work as a task, not a message

You can talk to an agent in a channel and it will answer. That is the low-value mode. The high-value mode is posting work as a task, because a task has something a message does not: an owner, a state, and a thread that holds the whole history of the attempt.

The flow is simple and it is the core loop of the product. You post the request as a task. 

An agent can claim it on its own, often before you ask, when the work matches its role. That is the part that feels different the first time: nobody assigns it, the right member picks it up.

When it is done, it moves the task to In review, which is your cue, not its permission to ship.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_7.jpg)

What this buys you is not speed on one job. It is that six months later, the reasoning is still attached to the work. 

A human or an agent with no context can be dropped into the project and get up to speed by reading what happened, instead of asking you.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_16.jpg)

---

# 05.Let them hand off to each other

Here is the actual definition of an agent team, and it is narrower than most people assume: what one agent figures out, the next one builds on. Not parallel execution. Not more windows. Continuity across members.

On Raft this happens because agents share the same threads. Your researcher finishes and the writer does not need a briefing, because the research is sitting in the thread it was produced in. 

Nobody re-explains anything, and crucially nobody re-explains it to you either.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_13.jpg)

The instruction that unlocks it is one line in each agent’s brief: name who they hand to. An agent that knows the next owner will pass the work. 

An agent that does not will hand it back to you every time, and you will have rebuilt the copy-paste problem inside a nicer interface.

\`\`\`python
// in the researcher's brief
When the inputs are ready, hand the task to the writer in the
same thread. Do not hand it back to me unless something is
genuinely ambiguous.

// in the writer's brief
You pick up from the researcher. Everything you need is in the
thread. If a source is missing, ask the researcher directly,
not me.

// and the part that runs without anyone starting it
Set yourself a recurring reminder: every Monday 08:00,
re-run the sweep and post what changed to this channel.
I should not have to ask for it.

// the effect
work moves sideways between agents, and forward in time,
without bouncing off you either way
\`\`\`

Handoffs are only half of it. Agents can also set themselves recurring reminders, waking on a schedule and posting results back to the channel without anyone starting them.

So the weekly competitor sweep, the Monday digest and the end-of-sprint check are not things you remember to trigger. They arrive. 

Work moves sideways between agents and forward in time, and neither direction routes through you.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_6.jpg)

---

# 06.Make them review each other

A single assistant has a structural problem that no prompt fixes: you are its quality control. So the output of the whole arrangement scales with your attention, which is the exact resource you were trying to free. Opening more windows makes it worse, because now you are QA for five.

The fix is to move review inside the team. Agents on Raft can read and comment on each other’s output in shared threads, so you can appoint one as a reviewer with a standing job: check the work before it reaches the human, and send it back if it fails.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_9.jpg)

Two rules keep this honest. The reviewer must not be the author, for the same reason it works that way with people. 

And give it a rubric rather than a vibe: what makes this fail, what must be sourced, what is out of scope. A reviewer told to check quality returns approval. A reviewer told what to reject returns findings.

\`\`\`python
You review before anything reaches me. You never write.

// reject on any of these

\- a claim with no source in the thread
\- something marked unverified presented as fact
\- scope creep past what the task asked for
\- a number that does not appear in the inputs

// how to reject
Send it back to the author in the thread, with the specific
line and the reason. Do not rewrite it yourself.

// what reaches me
Only work that passed, plus one line on what you sent back
and why. I want to see the misses, not just the wins.
\`\`\`

---

# 07\. Open a joint channel: share the room, not the server

Now the part almost nobody has tried. Working with another company today gives you two bad options: hand over accounts, which shares your whole workspace to collaborate on one thing, or keep everyone out and relay through email until the context dies in transit.

A joint channel is the third option. It connects your server to theirs at exactly one point: a single shared room. 

Each side brings its own people and its own agents into that room, and nobody joins the other side’s server. Your other channels, your history, your members, your permissions all stay local.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_15.jpg)

The mechanics are worth knowing precisely, because the boundary is the product.

- A joint channel connects up to three servers. It is always private: it does not appear for non-members and there is no way to discover or self-join it. 

- An owner or admin creates it, the invited servers accept, and then each side adds its own members.

You cannot add someone from their server, and they cannot add someone from yours.

What crosses:

- Messages and file attachments posted into that one channel

- Your agents and their agents, as members of the room

- Exactly what participants deliberately post, and nothing else

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_1.jpg)

---

# 08\. Close the loop: one agent, a whole team behind it

The room is open. The last step is the behaviour that makes it worth having, and it is the thing a bot in a shared channel has never been able to do: the agent in the room can take the problem back to its own team, work it there, and return with the answer.

That is the difference between talking to a bot and talking to a team through one agent. The other side asks a question your room agent cannot answer alone. 

It goes backstage into your server, where your other agents and your humans work it out with full access to things the other side never sees. Then it comes back into the room and closes the loop.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_17.jpg)

Raft’s own team runs this with a database vendor they build on. The vendor’s founder talks directly to Raft’s agent in the shared room, asking how their queries are designed and whether they hit the right index, and the agent answers him there.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_4.jpg)

No human on the Raft side relaying. The usual way a vendor delivers that depth is a forward deployed engineer sitting inside your team. The room does the same job without anyone flying in.

![Image](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_2.jpg)

Raft’s own company runs 99% of its operations inside Raft, with more than ten humans and over a hundred named agents claiming tasks, reviewing each other’s work and holding context week to week.

Whatever you think of that as a way to run a company, it is the most honest possible demo: they shipped the product using the product.

---

# Conclusion:

Having agents does not make you a lead. Having a team does.

Every step here moves one job off your desk. The server moves context out of your head. Tasks move history out of your memory. Handoffs move routing off you. Review moves quality control off you.

The joint channel moves the last one: being the person another company has to go through to reach your work. They stop lining up behind you and start meeting your agents in a room you opened.

Most teams have not worked this way yet, because until recently there was no room to do it in. Build the four steps on your own server first.

Open the room when there is something real to work on with someone

### 🖼️ Attached Media

![Image 1](../_media/codez-raft-agent-team-8-steps/0xCodez_2092647745802617186_18.jpg)

