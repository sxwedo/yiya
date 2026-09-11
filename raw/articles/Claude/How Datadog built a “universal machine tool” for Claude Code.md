---
url: https://claude.com/blog/how-datadog-built-a-universal-machine-tool-for-claude-code
author: Claude
ingested: "2026-09-11"
---

# How Datadog built a “universal machine tool” for Claude Code

# 📰 How Datadog built a “universal machine tool” for Claude Code

> Datadog has an agent write specifications for a deterministic kernel to write application code. ‍

Agents, mechanization, and industrialization

All of Datadog engineers use AI coding tools for production code, and Claude Code drives at least two-thirds of that. With Claude Code, they generate personalized flows in their software development lifecycle in four distinct categories:

* **Targeted changes:** dozens of gnarly bug fixes, performance optimizations, and bridges to existing services.
* **Large refactors:** refactoring a custom protobuf parser in three days as well as rewriting a metrics control from FoundationDB to Postgres in under three months.
* **Replacing large parts:** new sharding algorithms and autoscaling redesigns.
* **Building entire systems**: replacing MongoDB with Postgres, BYOC control planes, and ingestion pipelines from scratch.

As work flowed across this map, however, they saw it became more complex to generate on one axis and more ambiguous to verify on the other.

## The flow problem

For engineers, flow used to mean a direct relationship between intent and code. You understood the problem, wrote the code, tested it, reviewed it, shipped it, operated it, repeated. With agents, the abstraction is changing rapidly.

“You're no longer writing the code; you're shaping the work. You're deciding what the agent should see. What tools it should have, what success means, how failure should be detected…It's like everyone's promoted three levels up into the management chain, which they didn’t sign up for because they're engineers,” says Sesh Nalla, VP of engineering, Datadog.

With approaches like [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), Datadog’s sessions run longer, sometimes for days. Each agent invents its own tools, its own glue code, and its own conventions. The agents become significantly more useful, but need humans to bridge the gap between agent execution and tools designed for humans.

Machine tools are the jigs, fixtures, gauges, and mills you see in manufacturing. They produce precise, repeatable parts that you assemble into larger, more complex machines like engines, aircraft, nuclear reactors, and lunar landing modules. They were the breakthrough of industrialization as parts became composable, inspectable, and replaceable.

Temper is what Sesh describes as Datadog’s attempt at a universal machine tool for agentic systems. In other words, the smallest kernel required for agents to build what they need in a safe and precise manner.

“This is the point where I felt we needed something more structural,” says Sesh. “If agents are going to build and operate large parts of our systems, of our databases, which are mission critical, they need the equivalent of this machine tool concept. Temper is that machine tool for Datadog.”
