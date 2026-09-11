---
title: "Claude Code and Slack"
author: "Claude"
url: "https://claude.com/blog/claude-code-and-slack"
ingested: "2026-09-11"
date: "December 8, 2025"
---

# Claude Code and Slack

> Now you can tag @Claude in Slack to spin up Claude Code sessions automatically. Turn bug reports and feature requests into code fixes, get status updates in your thread, and open pull requests—all without leaving Slack.

Today, we're introducing the ability to delegate tasks to Claude Code directly from Slack. Now in beta as a research preview, Claude makes it easy to move context from Slack conversations to coding sessions.

[![Embedded YouTube video](https://img.youtube.com/vi/XpXImenrSPI/0.jpg)](https://www.youtube.com/watch?v=XpXImenrSPI)

## **From discussion to implementation**

The critical context around engineering work often lives in Slack, including bug reports, feature requests, and engineering discussion. When a bug report appears or a teammate needs a code fix, you can now tag Claude in Slack to automatically spin up a Claude Code session using the surrounding context. Use it for:

* **Bug investigation and fixes**: Ask Claude to investigate and fix bugs as soon as they’re reported.
* **Quick code reviews and modifications**: Have Claude implement small features or refactor code based on team feedback.
* **Collaborative debugging**: When team discussion provides crucial context—error reproductions or user reports—Claude can use that information to inform its debugging approach.

## **Route tasks to Claude Code automatically**

This functionality expands on our existing [Claude app for Slack](https://www.claude.com/blog/claude-and-slack), allowing Claude to relay tasks back to Claude Code on the web. When you mention @Claude in Slack, Claude reviews your message to determine if it’s a coding task. If it is, a new Claude Code session will automatically be created. You can also manually tell Claude to handle requests as coding tasks.

Claude gathers context from recent channel and thread messages in Slack to feed into the Claude Code session. It will use this context to automatically choose which repository to run the task on based on the repositories you’ve authenticated to Claude Code on the web.

As the Claude Code session progresses, Claude posts status updates back to your Slack thread. Once complete, you'll find a link to the full session where you can review changes, and a direct link to open a pull request.

## **Getting started**

To get started, ensure the Claude app is installed in your Slack workspace via the[Slack App Marketplace](https://slack.com/marketplace/A08SF47R6P4). Once installed, authenticate with your Claude account and start mentioning @Claude for coding tasks. You’ll need access to [Claude Code on the web](https://www.claude.com/blog/claude-code-on-the-web) for Claude to route coding tasks.

[Explore documentation](https://code.claude.com/docs/en/slack) to learn more.

‍
