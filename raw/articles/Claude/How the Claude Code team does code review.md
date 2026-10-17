---
title: "How the Claude Code team does code review"
author: "Claude"
url: "https://claude.dev/blog/solving-code-review-at-anthropic/"
ingested: "2026-10-17"
date: "2026-10-15"
---

# 📰 How the Claude Code team does code review

How do you review code at the volume agents produce it? On the Claude Code team, once we had high coverage and deep reviews, we started optimizing for the minimum amount of human review time that doesn't raise reverts or incidents.

AUTHOR: Addy Osmani, Morgan Westlee Lunt, and Qing Wang. CATEGORY: Engineering. PUBLISHED: Oct 15, 2026.

We've said before that Claude writes about 90 percent of Claude Code's own code. So how do we review code at the volume we produce it? Does anyone read code anymore? And if something breaks, who catches it?

This post covers the code review flow on the Claude Code team and how it has evolved. From June to September, merged pull requests to Claude Code's codebase more than doubled while the share that had to be reverted fell by more than 40 percent.

We didn't remove review. But we did move most of the reading to machines, optimized for human time and attention, and invested heavily in making it fast and easy to undo mistakes.

## Rethinking the purpose of code review

When agents write code, the number of changes goes up, fast. In Anthropic's monorepo, changes landing per day went from about 2,500 in May to more than 30,000 in September this year.

Claude Code lives in its own repository, separate from the monorepo, but it's seeing a lot of pressure too. When you are shipping this fast, manual, line-by-line code review is incredibly difficult if not impossible.

Code review does two jobs:

- Find and fix issues before they ship
- Build shared context and codebase understanding across the team

This article mainly focuses on finding and fixing issues.

We think "did a human read the code?" is an imprecise proxy for "what could go wrong with this change, and which check—automated or human—is the right one to catch it?"

Asking that question also changed when review happens. Before, review was a gate at the end of the road: write the code, open a PR, wait for your colleague.

Now, review runs continuously, more like spellcheck while you write. Most changes have been reviewed and fixed by Claude at least once before a human is asked to look.

## The scarce resource: human time and attention

The goal is that most pull requests in the Claude Code repos merge with at most one human in the loop, who can be the author, with no increase in reverts or incidents. To measure human time, they track human approvals per PR (median and 95th percentile), human comments, and how long a PR waits on a person. Revert and incident rates are the guardrail.

## The life of a change

A typical change goes through multiple layers:

Before the PR: Claude runs tests, build and linter; a second agent reviews the diff in a fresh context.

On every PR: required CI (red blocks merge); Claude code review (agents hunt for bugs in parallel, verifiers vote, survivors ranked by severity); security review (open findings block merge); risk-based approval (classifier sets tier: no person, one, or two).

Merging: merge queue re-runs checks on latest main with the change applied.

After merge: behind a flag, internal use first; gradual release (latest then stable); watch, fix forward or roll back.

## Layer by layer

### 1. The work is verified before anyone else looks

Give Claude something it can run and ask it to show the output instead of saying it's done. Then a subagent reviews the diff with fresh context. Internal skills hunt for bugs, simplify the diff, and check behavior end to end.

CLAUDE.md tells Claude what the project is; keep it short. REVIEW.md, written by code owners, tells the reviewer what matters. Good ones say what failure looks like, cap the nits, list paths to skip, and ask for a file and line as evidence.

### 2. AI review on every pull request

Every PR gets a Claude review before a person looks. Findings get verified by other agents before humans review them. Several agents look for bugs at the same time. Then a separate group votes on each finding. Style-only findings get dropped. What's left is tagged Important, Nit, or Pre-existing. Every finding has to be answered: fix it or resolve with a reason.

### 3. Security review that can block

A PR can't merge while any finding from the bug review or the security review is still open.

### 4. Automated checks that block

Lint, type checks, tests on every platform, and a build. PR template asks how the change was tested and how to undo it.

### 5. Human approval, scaled by risk

- Low (docs, copy, internal-only, additive behind a flag): none required once automated review and security are green
- Medium (ordinary product changes, sensitive areas): one person
- High (highest-risk plus listed paths): two people

The change sets the tier, not the author. An agent's approval never counts as a person's. Whoever prompted the change is on the hook. An approval covers one specific commit.

### 6. Merge queue, flags and a gradual release

Merge queue re-runs every check against main. New behavior usually ships behind a flag to employees first.

### 7. Fast detection, fast rollback

Flags turn off without a deploy. Weekly on-call. Incident reviews ask which layer should have caught the issue.

## How we make the reviewer better

Incidents become an eval. Past PRs that caused incidents, with fix-forwards and reverts, expert-checked. The reviewer runs against that set daily. Noise is measured by how people respond to comments. Noise costs more when the author is an agent: a person waves off a nit; an agent fixes it and starts another round. Review has to converge; cap rounds. About 59% of later-round flags were code present since the first pass.

## Where humans stay in the loop

Humans still set direction, own the change, and handle incidents. Shared context is the other job of review: open channels, not a gate on every line.

## "You land it, you own it"

If something still goes wrong, you usually fix it. Small changes, reversible, blast radius sets the bar, regressions surface fast, not blame.

## When we change direction

Agents make it cheap to start things. Raise a different direction early in the thread, not as a blocking comment on a finished PR.

## How you can adopt this process

Before the PR: checks in a short CLAUDE.md, hooks, /code-review and /security-review, REVIEW.md.

On every PR: require CI; Testing/Risk/How to revert in the template; AI reviewer; security review; match effort to risk; cap review rounds.

Approval: risk tiers from the change; lighter paths for trusted authors; CODEOWNERS; never let a bot replace a required human; dismiss approvals on new commits.

Merge and after: merge queue, flags, internal first, staged releases, one-step rollback; incidents into eval; measure human time with revert/incident as guardrail.

## Where this is going

Code Review's announcement said approving a pull request is still a human call; the product posts findings, not approvals. Their own repos go further on low-risk automated merges. When a review misses something, put the fix into CLAUDE.md, a skill or a new check. Goal: less human time per change, and no more reverts than before.

With thanks to Emma Webb, Michael Segner and Amie Rotherham for their reviews.

Original: https://claude.dev/blog/solving-code-review-at-anthropic/
