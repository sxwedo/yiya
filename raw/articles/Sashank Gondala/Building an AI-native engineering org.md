---
title: "Building an AI-native engineering org"
author: "Sashank Gondala"
url: "https://x.com/sgondala2/status/2115832070274723875"
ingested: "2026-11-05"
date: "Thu Oct 29 15:44:10 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 Building an AI-native engineering org

Last week Will Larson (@Lethain) asked how leaders are evaluating engineering managers for AI skills. [My reply](https://x.com/sgondala2/status/2112290994695864383), a list of questions to think about, got a lot of bookmarks.

More broadly, I've been thinking about how to build an AI-native engineering org for a while. Sharing some lessons from the last nine months of building at FurtherAI.

![Image](https://pbs.twimg.com/media/HVxWbVdbEAAI80x.jpg)

## Part 1: What changed in how we ship

## How much we ship per engineer

Since January, the number of code changes each engineer merges a day has grown about 5x, while our revert rate has stayed under half a percent.

![Image](https://pbs.twimg.com/media/HVxWe-SbwAAhSRC.jpg)

But giving engineers coding agents didn't get us there on its own.

Every time we sped up one step, work piled up at the next.

So we started going through the entire process of shipping software, one step at a time, and figuring out what we could optimize.

## Rebuilding the shipping process

![Image](https://pbs.twimg.com/media/HVxWhuJbAAAcPSr.jpg)

- Code (March) – Agents write the code and engineers steer them. We don’t have a clean number for where this started, as early on the tools only left a mark on a change once in a while. But it’s safe to say it’s now almost 100%.

- Tests (April) – Agents write tests alongside code. 91% of changes now include tests, up from 15%.

- Review (May) – AI reviews 99% of changes before a person does, up from 60%. Human reviewers can focus on the parts that need judgment.

- CI (June) – We parallelized tests and run only those affected by a change. CI now runs 20× the tests in the same 17 minutes.

- Bug reports (July) – We've started using ClaudeTag (@claudeai) to automate our bug intake process. Anyone can report a bug in Slack, and ClaudeTag figures out duplicates, files a ticket, and assigns it to the right person. It now files 60% of bug tickets.

- Rules (August) – When a bug or a review comment exposed a rule only engineers knew, we turned it into a small Python check that runs on every commit and every PR, fails the build and prints the fix. This way, we convert tribal knowledge into rules. Agents hit these checks, fix their own code and move on. We went from zero to 21 rules. They're a big part of why low-risk changes can now merge without a person.

- Merging (August) – Low-risk changes that pass tests, automated checks, and AI review merge on their own. Up to a third of our changes now merge without a person involved.

- Code channels (September) – Anyone can open a Slack channel, describe a change to an agent, and have it open a PR. We don't have a clean number for this yet, but it's been great for collaboration: several people can work with the same agent in one channel, adding context and steering it as it goes. We also heavily use Devin's (@cognition) cloud sessions to collaborate as a team.

We also use our in-house [Poirot and Sherlock](https://x.com/sgondala2/status/2069599852284244447?a=P_IQhCZs0WqgDLCF0ek&s=20) agents to investigate and resolve issues across production and staging. They have all the tools and context they need across logs, metrics, trace and read-only database access

Some of the best moments are when agents work together. Claude Tag triages a request, Devin does the work, and Poirot pulls the internal data it needs. It's fun to watch them talk to each other and pass information along.

One interesting side effect is that non-engineers have started shipping code too. Our designer has merged about 50 changes since August, including the ones that built our design system. People in deployment and customer-facing roles can also make UI tweaks themselves right from slack

## What it cost us

None of this was free. Through the summer, much of our engineering effort went into tests and tooling, and customer-facing changes per engineer stayed between 17 and 30 a month.

In September, that jumped to 45. October is on pace for 48.

![Image](https://pbs.twimg.com/media/HVxXSJObkAA-sMZ.jpg)

## Part 2: What's changing in the team

As engineering got faster, we started noticing a different problem.

## The new bottleneck

We got much faster at writing code, but not nearly as fast at deciding what to build.

Here's a simplified example.

Say a feature used to take ten days: three to plan, six to build, and one to review.

If agents make building 3.5× faster, but planning and review stay the same, the overall feature only gets 1.75× faster.

Planning and review now account for 70% of the time, up from 40%.

![Image](https://pbs.twimg.com/media/HVxXV_xa8AETyWW.jpg)

Traditionally, a lot of these decisions flow through engineering managers, PMs, and designers. That becomes increasingly difficult as engineers get faster.

How do you organize a team where engineers can build much faster, without creating bottlenecks around decisions and reviews?

Our bet is to push more ownership to engineers. Rather than adding more layers of management, we want engineers to handle more of the planning, execution, and review themselves.

That changes what we expect from engineers and managers.

## What it means for engineers

I'm starting to think of engineering seniority in terms of how much of a problem someone can own end to end. Roughly:

- Junior engineer – Builds with an agent and can tell when it's wrong.

- Senior engineer – Plans and reviews their own work.

- Staff engineer – Takes a vague problem, makes the tradeoffs, and owns the number that says whether it worked.

It also means engineers need to be closer to customers.

We're empowering engineers to own more of the process end-end, from understanding the customer problem to shipping a solution to verifying success and owning regressions in production.

## What it means for managers

This also changes what we expect from engineering managers.

1\. Be in the work.

Managers need to understand what's being built, why, and whether it's the right solution.

I want managers trying features on staging as an end user would, not just checking that the code was reviewed. You catch a different class of problems when you actually use the product.

But the goal isn't just to review more. As always, it's to develop engineers who can make the right decisions themselves, so managers only step in on the ones that need their judgment.

2\. Be more product-savvy.

When writing code becomes cheaper, deciding what to build matters a lot more.

I want engineering managers who understand customers, have strong product opinions, and are comfortable making product decisions, not just technical ones.

They should also help engineers develop that judgment. We shouldn't need a PM or designer to make every small product decision.

## Where this leaves us

We spent most of this year figuring out how to make engineers faster. Now we're trying to figure out how to make the entire organization move at that speed.

I suspect this will be a harder problem than automating code, tests, and reviews.

We're still early, and there's a lot we haven't figured out. But it's one of the most interesting engineering challenges I've worked on.

I'm curious what other teams are seeing. What broke first as your engineers started shipping faster?

We're hiring Engineering Manager / Director at @furtheraicom to solve the next wave of challenges. If this sounds interesting, reach out!

### 🖼️ Attached Media

![Image 1](https://pbs.twimg.com/media/HVw2CyXa8AEa29n.jpg)

