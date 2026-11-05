---
title: "Unlock Opus 5.5: The Harness Guide for Agents That Actually Ship"
author: "Trackmind (@0xTrackmind)"
url: "https://x.com/0xTrackmind/status/2113644871529418857"
ingested: "2026-11-05"
date: "Fri Oct 23 14:53:01 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 Unlock Opus 5.5: The Harness Guide for Agents That Actually Ship

Your agent just did it again.

It said "done" while the tests were red. It edited the wrong file. It forgot a decision you made an hour ago. It retried the same broken command nine times and burned through your budget doing it.

So you did what everyone does. You rewrote the prompt. Then you swapped the model. Then you pasted in more docs.

Same failures. Different day.

I lived in that loop for about three weeks. I had a coding agent, running on Claude Opus 5.5, maintaining a small service that tracks onchain activity for my own research. Every morning I opened the repo to the same mess: a "finished" feature with a red test suite, a config file edited that I never mentioned, and one overnight run that retried a failing API call 41 times before the budget cap finally stopped it.

I kept rewriting the prompt. The prompt was never the problem.

Here is the good news: in most of these cases the model was never the problem. Opus 5.5 is already capable of far more than your setup lets it show. What holds it back is everything wrapped around it. That wrapper now has a name: the harness.

And if you learn to see it, you will stop fixing agents at the wrong layer.

---

## The evidence is already public

Two data points worth knowing.

LangChain took its coding agent and moved it from 52.8% to 66.5% on Terminal Bench 2.0. That is a jump from outside the top 30 into the top 5. The model stayed the same. They only changed the system around it: prompts, tools and middleware.

OpenAI described an experiment where a team of three engineers drove roughly 1,500 pull requests into a repository where every line was written by Codex. When progress was slow at the start, their diagnosis was not "the model is too weak." It was that the environment was underspecified. The engineers' job shifted from writing code to designing environments, stating intent and building feedback loops.

Same story twice. The leverage was not in the model. It was in the system around it.

---

## What happened when I stopped touching the prompt

After those three weeks I ran a small experiment on my own backlog.

I picked 20 real tasks from the repo: bug fixes, small features, a couple of refactors. Same model (Opus 5.5), same base prompt, same machine. I ran the batch twice.

Run A: a bare prompt dropped into the repo. Nothing else.

Run B: the same prompt, plus a harness I put together over one weekend. A short contract per task with a "done when" line. A 40-line map file instead of my old wall of docs. A test gate before anything could be called finished. A retry cap of three. A rule file for what the agent could and could not touch.

The numbers, as I logged them:

- Tasks accepted without me touching them: 8 of 20 in Run A, 16 of 20 in Run B.

- Runaway retry loops: 5 in Run A, 0 in Run B.

- Average cost per accepted task: about $4.10 in Run A, about $1.60 in Run B.

- Time I spent babysitting per day: roughly two hours, down to about 25 minutes.

I did not change the model once: it was Opus 5.5 in both runs. I did not touch the prompt wording either. Everything that moved came from the system around it.

---

## Agent = Model + Harness

![Image](https://pbs.twimg.com/media/HVRASpfW0AAOOj-.png)

The model reasons. It proposes the next action.

The harness is everything else: what the model gets to see, which tools it can touch, what it remembers between sessions, what counts as "done," what it is forbidden to do, and what happens when something breaks.

Put a model in a chat box and it answers questions. Put the same model in a repository with a terminal, tests, project notes, permissions and a reviewer, and it can do real work.

Nothing about the model's intelligence changed. The world it operates in did.

---

## First, find the right layer

Before you touch a prompt, ask one question: which layer is actually broken?

![Image](https://pbs.twimg.com/media/HVRAb6LWMAA4V9Z.png)

Here is the quick diagnostic I would use:

- It misunderstands the ask. That is a prompt problem. Rewrite the instruction.

- It sounds fluent but is wrong or out of date. That is a context problem. It is missing the right information, or drowning in the wrong information.

- It claims it finished without proof, does something unsafe, or forgets between sessions. That is a harness problem. Something around the model is missing.

- It gets stuck repeating itself. That is a loop problem. Nothing decides when to stop or change approach.

- Several agents duplicate work or collide. That is a graph problem. Nobody designed how the pieces coordinate.

Prompt, context, loop and graph are a handy mental model rather than an official standard. But the habit is what matters: a longer prompt only fixes the first row. Most of the pain people describe lives lower down.

Now the practical part. These are seven failures you have probably hit, and the harness fix for each.

---

## 1\. "It did a different job than I asked"

Fix: write a contract before the agent starts.

"Improve the onboarding flow" is fine when a human sits next to you. As an autonomous instruction it is a coin flip.

Turn the request into a small bounded object:

- Goal: reduce drop-off in onboarding

- Constraints: keep authentication as is, no schema changes

- Deliverable: a reviewable pull request

- Done when: tests pass, the analytics event fires, desktop and mobile flows both pass review

- Needs approval: anything that touches production

The line that matters is "done when." Without it, an agent can solve a slightly easier version of your problem and report success with a straight face. With it, finishing becomes something you can check.

Here is the template I paste at the top of every task:

\`\`\`
\# TASK CONTRACT
Goal:           Reduce drop-off in onboarding
Constraints:    Keep auth as is. No schema changes.
Deliverable:    One reviewable pull request
Done when:
  \- npm test passes
  \- the onboarding\_completed event fires (see tests/analytics.test.ts)
  \- desktop and mobile flows both pass the browser check
Needs approval: anything that touches production
If blocked:     stop, write what you tried to STATE.md, do not guess
\`\`\`

The last line is the one people skip. An agent without a "stop" instruction will always prefer to guess.

---

## 2\. "It's lost in my codebase"

Fix: give it a map, not a manual.

The reflex after a mistake is to add more context. More docs, more history, more files.

Context is not storage. It is an attention budget. Pour everything in and the agent understands less.

![Image](https://pbs.twimg.com/media/HVRAzEXWQAIAULt.png)

OpenAI reported the same lesson early on: a short guide that points to deeper material works better than a giant instruction file. So keep one small root file (AGENTS.md, CLAUDE.md, whatever your tool uses) that says where things live: architecture, testing, product rules, security. Let the agent open the detailed document only when the task needs it.

You are not trying to maximize how much it knows. You are trying to maximize useful signal at the moment it acts.

A root file that does this job fits on one screen:

\`\`\`
\# AGENTS.md  (keep it under \~40 lines)

\## Where things live
\- Architecture:   docs/architecture.md
\- Testing:        docs/testing.md        (read before touching any test)
\- Product rules:  docs/product-rules.md
\- Security:       docs/security.md       (read before touching auth or secrets)

\## Hard rules (each one exists because of a real incident)
\- Never edit .env.example.
\- Run the formatter before every commit.
\- UI code never imports from src/data/. Go through src/services/.

\## Definition of done
\- No contract, no work.
\- "Done" means ./check.sh prints GATE: PASS. Paste the output.
\`\`\`

Notice what is missing: explanations, history, style essays. It is a map. The territory lives in the linked files.

---

## 3\. "It says it's done, but it isn't"

Fix: make evidence the gate to completion.

"Done" is not a fact. It is another model output.

In my bare run, the agent reported "done" on all 20 tasks. Only 8 held up when I actually ran the tests.

Replace claims with checks the environment can run:

- "The bug is fixed" means the failing test now passes.

- "The page works" means a browser run completed the flow.

- "The data is correct" means values match the source.

- "The task is complete" means every acceptance check passes.

Use deterministic tools first: types, linters, tests. Do not ask a second model to guess something a compiler can prove. My entire gate is one script:

\`\`\`bash
#!/usr/bin/env bash
\# check.sh: the only definition of "done"
set -e
npm run typecheck
npm run lint
npm test
npm run e2e -- --grep "onboarding"
echo "GATE: PASS"
\`\`\`

If the script does not print GATE: PASS, the task is not done, whatever the agent says.

Then separate the builder from the verifier.

![Image](https://pbs.twimg.com/media/HVRBNZwWsAAvYVM.png)

An agent reviewing its own work tends to carry its own assumptions into the review. Give the checking role its own job and its own rejection criteria. The verifier should not ask "does this look good?" It should ask "what would make this unacceptable?" That turns review from confirmation into an attempt to break the result.

The verifier prompt I use:

\`\`\`
You are the VERIFIER. You did not write this change.
Your job is to find reasons to REJECT it, not to approve it.

Inputs: the task contract, the diff, the output of ./check.sh

Check, in order:
1\. Does every "Done when" line have evidence? Quote it. No evidence = reject.
2\. Does the diff touch anything outside the stated constraints?
3\. Was any test deleted, skipped or weakened to get green?
4\. Name one input or edge case that could break this, and try it.

Reply with exactly one of:
REJECT: &lt;the specific failing criterion and the evidence&gt;
ACCEPT: &lt;one line per criterion, each with its evidence&gt;
\`\`\`

Short, strict, and it cannot reply "looks good to me."

---

## 4\. "It did something I never approved"

Fix: put permissions outside the model.

Telling an agent "never merge to main" is a wish. A protected branch is a wall.

Anything with real consequences should not depend on the model remembering a sentence. Sort actions by how hard they are to undo:

![Image](https://pbs.twimg.com/media/HVRBX20WsAA6Nsj.png)

- Safe and reversible: reading, searching, running tests, editing a working branch. Let it run, and keep a trace.

- Visible to the outside world: sending, deploying, purchasing. Require approval.

- Hard to reverse: deleting data, rotating credentials, publishing globally. Close the lane entirely.

A closed lane is different from a very high threshold. Thresholds get adjusted when someone is in a hurry. Closed lanes stay closed.

In config form it looks like this (an illustrative format; most agent tools have their own permission settings, so map it onto yours):

\`\`\`yaml
\# permissions.yaml: enforced by the tool layer, not by the prompt
allow:                 # runs freely, always logged
  \- read\_file
  \- search
  \- run\_tests
  \- edit\_file: { branch: "agent/\*" }
require\_approval:      # a human says yes first
  \- send\_message
  \- deploy
  \- purchase
deny:                  # lane closed
  \- delete\_data
  \- rotate\_credentials
  \- publish\_global
  \- merge: { branch: "main" }
\`\`\`

The model recommends. The harness decides. The tool executes.

---

## 5\. "It keeps retrying the same thing"

Fix: classify the failure, then cap the attempts.

"Something failed, try again" is a way to pay repeatedly for the same mistake.

LangChain saw agents fall into what they called doom loops: making tiny variations of the same edit again and again. Their fix lived in the harness. A bit of middleware noticed repeated edits to the same file and nudged the agent to reconsider its approach.

Build that instinct in on purpose:

- Timeout: retry with a pause.

- Bad arguments: repair the tool call.

- Missing information: go fetch it.

- Test failure: look at the failing behavior, then change the code, never the test.

- Permission denied: ask a human.

- Same failure twice, nothing changed: stop.

Give every loop a limit on attempts, time and spend. Three tries and then escalate is a sane default. If it is still red after that, the plan is probably wrong, and the loop cannot see the plan.

The whole idea fits in a dozen lines:

\`\`\`python
MAX\_ATTEMPTS = 3
history = \[\]

for attempt in range(MAX\_ATTEMPTS):
    result = run\_step()
    if result.ok:
        break
    if history and result.error == history\[-1\]:
        break                      # same failure twice: stop, do not retry
    history.append(result.error)

if not result.ok:
    write\_state("STATE.md", tried=history)
    escalate\_to\_human()
\`\`\`

That 41-retry night never happened again after I added a cap of three. The agent stopped at attempt three and left me a note listing what it had tried. It was the first genuinely useful debugging report I had ever got out of it.

---

## 6\. "It forgot what we decided"

Fix: keep state outside the conversation.

A chat transcript is a terrible database. Context fills up, sessions crash, and work gets handed to a fresh agent.

Keep a small state file next to the work: the current step, the decisions made and why, the artifacts produced, the open risks, the next action. When a new session starts, it reads the state instead of a lossy retelling of what happened.

Think of it as the difference between a colleague who leaves a handoff note and one who says "it's all in my head."

A state file can be this small:

\`\`\`
\# STATE.md
Current step:  3 of 5 (wire the analytics event)
Decisions:
  \- Use the existing event bus. Reason: no new dependency.
Artifacts:     branch agent/onboarding, draft PR #214
Open risks:    mobile flow not tested yet
Next action:   run ./check.sh, fix the mobile failure
\`\`\`

---

## 7\. "It made the same mistake twice"

Fix: turn every lesson into infrastructure.

This is the one that compounds.

Most people fix the output. Harness engineers fix the class of failure.

![Image](https://pbs.twimg.com/media/HVRCBxkWIAE3GEQ.png)

Say your agent let UI code query the database directly. You can write that rule in the prompt. Better, add it to your guide with the reason. Best of all, add a lint check that fails the build whenever UI code imports the data layer:

\`\`\`javascript
// .eslintrc.js
rules: {
  "no-restricted-imports": \["error", {
    patterns: \[{
      group: \["\*\*/data/\*"\],
      message: "UI code must not import the data layer. Use src/services/."
    }\]
  }\]
}
\`\`\`

Now the rule does not depend on anyone remembering it, human or model.

The progression looks like this: explain it, then checklist it, then automate the check, then enforce it. Each recurring mistake should slide one step further down that ladder, until the environment remembers the lesson so the model does not have to.

A good test for your agent guide: every line should trace back to something that actually went wrong. If you cannot point to the incident, the line is probably noise.

My own guide file started at 6 lines. Three weeks later it is 31, and I can name the night behind each one. "Never edit the example env file" exists because the agent once "helpfully" filled it with values that looked real. "Run the formatter before every commit" exists because I got tired of reviewing whitespace. Small rules, each paid for by one bad morning.

---

## Start smaller than you think

You do not need an orchestration platform on day one.

- Level 0: a prompt and a model. Fine for a quick, low-risk task.

- Level 1: add a contract, a short map and a few well-defined tools.

- Level 2: add stored state, real checks and a bounded loop.

- Level 3: add permissions, traces, recovery paths and human approval gates.

Add a layer only after you have watched the failure it prevents. Keep the harness smaller than the problem it controls.

If you want something to paste today, here is a Level 1 starter prompt:

\`\`\`
Before you write any code:
1\. Restate the task as a contract: goal, constraints, deliverable, "done when".
2\. Read AGENTS.md. Open only the docs this task needs.
3\. Write your plan and current step to STATE.md.

While you work:
\- Never mark a task done without running ./check.sh and pasting its output.
\- If the same error happens twice, stop and write down what you tried.
\- Ask before anything on the approval list. Never touch the deny list.
\`\`\`

One honest caveat: parts of any harness exist to compensate for what today's models are bad at. As models improve, some of those parts will turn into dead weight. Revisit them. A harness you never prune becomes the next thing to debug.

---

## The checklist

Before you give an agent real autonomy, ask:

1. Is "done" defined before it starts?

1. Can it find the right context without loading everything?

1. Does every tool have a clear purpose and a clear failure message?

1. Are decisions stored outside the chat?

1. Does completion require evidence?

1. Is the checking done by something other than the builder?

1. Are risky actions blocked by policy, not by a sentence?

1. Does every loop have a retry cap and a budget?

1. Can the run resume after a crash?

1. Does each failure leave a rule, a test or a check behind?

If several answers are no, a smarter model will not save you. It will just fail faster and more expensively.

---

## The real shift

A prompt asks: what should I tell the model?

Context asks: what should it see right now?

A harness asks: what system lets it act, check its work, recover from failure and stay inside safe limits?

Models will change every few months. The contracts, tests, maps, state and permissions you build around them stay, and every failure you convert into infrastructure makes the next run better.

That is why the advantage is moving out of the prompt and into the system around it.

---

## If this was useful:

→ Follow @0xTrackmind for more practical breakdowns of how AI agents actually work 
→ Bookmark this article and come back to the checklist before your next agent build 
→ Repost it to someone who is still trying to fix every failure with a longer prompt

### 🖼️ Attached Media

![Image 1](https://pbs.twimg.com/media/HVUsoo6X0AAOZkD.png)

