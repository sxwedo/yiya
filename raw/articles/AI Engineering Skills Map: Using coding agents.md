---
title: "AI Engineering Skills Map: Using coding agents"
author: "Andrew Ng (@AndrewYNg)"
url: "https://x.com/AndrewYNg/status/2095890279865721217"
ingested: "2026-09-06"
date: "Fri Sep 04 15:02:37 +0000 2026"
content_type: "article"
subtypes: []
type: "Article"
---

# 📰 AI Engineering Skills Map: Using coding agents

A key AI engineering skill is using coding agents. Your skill at steering them both to write code and to carry out non-code tasks, such as analyzing data or managing system operations, allows you to get a lot more done.

The rapid pace of evolution for coding agents means this skill, too, is evolving rapidly — faster than other top-level AI engineering skills. Proprietary agents (like Claude Code, Codex, and Cursor) and open agents (like OpenCode and Pi) progress in strides via both harness and model improvements. So keeping up with how to use coding agents requires a continuous process of experimentation, building, and learning.

In interviewing dozens of top AI Engineers and reflecting on our own team’s use of coding agents, we found a consistent high-level workflow for building software with them. The key steps are:

- Planning. This includes (i) brainstorming, which may include research, experimentation, and understanding the existing codebase (if any) and (ii) writing a spec that captures requirements, technical design, and architecture, followed by generating an execution plan. You might also review the plan to interrogate key assumptions and check for security, overengineering, and other gaps.

- Execution, where you build, test, and verify, with the right balance between agent autonomy and human oversight. This involves (i) having the agent build the software, with a calibrated level of agent autonomy and (ii) verifying its output via automated and/or human checks.

- Deployment and monitoring, in which you (i) deploy, perhaps gated with a CI/CD pipeline or additional human gates, and (ii) use agents to watch logs, surface issues, and propose and execute improvements.

This high-level workflow is similar to the one typically used to build software before coding agents. Now, we focus much less on code and instead focus on deciding what to build, designing the architecture, writing the spec, and verifying outputs.

The duration of each step can vary significantly between projects, and steps can be omitted. For example, the spec for a greenfield (meaning built-from-scratch) prototype might be loosely described in a quickly written prompt, whereas the spec for a brownfield (pre-existing) project with many users might require much more effort to write and verify. Further, the workflow is highly iterative, and skilled developers know when feedback from a later step should lead them back to an earlier one. For example, if verification fails, they know how to steer the agent to rebuild and fix errors; or if monitoring surfaces issues, how to have agents update the system and redeploy.

To use coding agents effectively in this workflow, the key skills are:

- Directing the workflow

- Enabling agent autonomy

- Reviewing the work

- Customizing the agent and its environment

- Coding agent foundations

Directing the workflow. You know how to navigate each step of the workflow above. This involves deciding how much human and how much agent effort to spend on each and when to go back to an earlier step to iterate. It requires deeply understanding the tradeoffs of speed, cost, technical risk, and human effort, so you can decide how much to research and plan up front, when to retain human ownership over critical work, how to choose the architecture, how much detail to write into a set of planning artifacts (like a spec), and how to decompose the work into verifiable steps.

Enabling agent autonomy. When applying a coding agent to the steps in the workflow, you choose the autonomy level: Do you watch it and go back-and-forth interactively or delegate a larger chunk of work to it? And when do you set a clear goal and have it loop until it succeeds? Additionally, you have to manage the context carefully for the agent. As the build proceeds through different phases, you will calibrate when to make sure key learnings, user feedback, and assumptions — including assumptions that changed partway through the build — are captured for the agent to use downstream. Additionally, you will decide when to set up many agents to run in parallel on a decomposition of the task — either by having a human or a higher-level agent orchestrate these other agents — and how to manage human attention across concurrent agent sessions. You also know how to run agents safely, setting permissions and gating actions appropriately to let development proceed quickly while limiting the risk of leaks, data loss, or other damage.

Reviewing the work. The output of a coding agent is uncertain. We don’t know in advance what good ideas it might come up with and what bugs it will implement. Reviewing and verifying the output is a key step to ensure you are getting the result you want and to redirect the agent if not. You will design testing and validation that is matched to the task, applying both behavioral and functional verification as needed. You might also test user flows, perhaps having an agent provide screenshots as evidence of success or failure. For qualitative/behavioral evaluation, eval sets, perhaps with LLM-as-a-judge, can be used.

You also need to decide how much of these tests should be automated. Some workflows will have all testing and validation fully automated so the agent can check its work and know when it has succeeded in completing a task. You have to evaluate the tests to ensure they correspond to your aims, and you will evolve them if not. Additionally, you use agentic code review and run AI-enabled security and architecture audits. When AI review isn’t sufficient, you judiciously insert human reviews of the code behavior (and, infrequently, of code as well) while exploring how to automate this review further. Finally, you verify deployment and can operationalize monitoring and incident management with agents.

Customizing the agent and its environment. Your ability to update both the agent and the environment it works in allows your agents to efficiently get the context they need, access tools, and build correctly and efficiently. You know how to integrate agent skills, plugins, and MCP servers. Occasionally you will prune them when they are no longer necessary (such as when a new model obviates an old skill). You can use hooks to automate repeatable parts of the development process, like triggering automated code reviews or CI/CD pipelines. You can also maintain the environment the agent works in: updating the standing context (such as AGENTS.md or CLAUDE.md) with information on the codebase, key architectural assumptions, code style, and data access patterns. You know how to preserve state across multiple sessions and across parallel agents, and accumulate agent learnings over time, perhaps by running post-run retrospectives to capture what did and did not work. You also know how to set up consistent conventions and structure to make your codebase navigable to the agent, and how to occasionally clear out agent-generated debt. When you work in a team, you consider how to coordinate context across different developers’ agents.

Coding agent foundations. Finally, to make good decisions throughout, you have a good understanding of how coding agents work: how they carry out codebase search/retrieval, how they manage their context windows, how different operations (like adding tool calls, MCP servers, etc.) affect context, how agents and subagents interact, and how the agent is built by wrapping a harness around an LLM. This makes the agent less of a black box and helps you to recognize failure modes, such as overengineering a simple solution, losing rigor because the agent lacks an explicit verification process, stopping short of the goal, or agent actions that risk destruction of files or production data. It also helps you reason about the agent’s state and steer it by giving it the right prescription or context. And when monitoring a run, this understanding allows you to better spot when the agent goes off-track and requires your intervention.

I find that social media often gives oversimplified descriptions of how to use coding agents. For example, it is sometimes useful to get agents to run autonomously for hours and burn millions or tens of millions of tokens. But currently the practical utility of very long-horizon tasks — especially relative to their cost — has been amplified beyond reality. Instead, most effective coding agent use is a complex, highly iterative process, and being able to intervene with high-skill judgement gives much better results.

Your skill at using coding agents will make you an effective builder. This positions you to also steer the overall build. I will say more about this in a future article.

### 🖼️ Attached Media

![Image 1](https://pbs.twimg.com/media/HRYTehda0AAcCvW.jpg)

