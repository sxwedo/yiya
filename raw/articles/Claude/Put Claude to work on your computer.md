---
url: https://claude.com/blog/dispatch-and-computer-use
author: Claude
ingested: "2026-09-11"
---

# Put Claude to work on your computer

# 📰 Put Claude to work on your computer

> In Claude Cowork and Claude Code, Claude can use your computer to point, click, and complete tasks. Dispatch lets you assign them from your phone.

In Claude Cowork and Claude Code, you can now enable Claude to use your computer to complete tasks. When Claude doesn’t have access to the tools it needs, it will point, click, and navigate what’s on your screen to perform the task itself. It can open files, use the browser, and run dev tools automatically — with no setup required. 

This feature is now available in research preview for Claude Pro and Max subscribers. It works especially well with [Dispatch](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork), which lets you assign Claude tasks from your phone.

[![Embedded YouTube video](https://img.youtube.com/vi/NAauIR6JFps/0.jpg)](https://www.youtube.com/watch?v=NAauIR6JFps)

## How Claude uses your computer

Claude will reach for the most precise tool first, starting with connectors to services like Slack or Google Calendar. When there isn’t a connector, Claude can directly control your browser, mouse, keyboard, and screen to complete tasks. It will scroll, click to open, and explore as needed, always asking for your explicit permission first. 

We’ve built this capability with safeguards that minimize risk, including prompt injection. When Claude uses your computer, our system will automatically scan activations within the model to detect for such activity. You also have the ability to stop Claude at any point, and Claude will always request permission before accessing new applications.

![](../_media/claude-put-claude-to-work-on-your-computer/Claude_dispatch-and-computer-use_1.png)

Computer use is still early compared to Claude’s ability to code or interact with text. Claude can make mistakes, and while we continue to improve our safeguards, threats are constantly evolving. We recommend starting with the apps you trust and not working with sensitive data. Some apps are off-limits by default for this reason. You can learn more about safety best practices [here](https://support.claude.com/en/articles/14128542).

## Message Claude from anywhere

Last week, we released [Dispatch](https://support.claude.com/en/articles/13947068-assign-tasks-to-claude-from-anywhere-in-cowork): a new feature in Claude Cowork (and now available in Claude Code) that lets you have one continuous conversation with Claude from your phone or your desktop. You can assign Claude a task on your phone, turn your attention to something else, then open up the finished work on your computer.

![](../_media/claude-put-claude-to-work-on-your-computer/Claude_dispatch-and-computer-use_2.png)

With Dispatch, you can tell Claude to automatically check your emails every morning or pull some metrics every week, or spin up a Claude Cowork or Claude Code session for a report or a pull request. 

Claude’s new computer use capability makes Dispatch even more helpful. Now, Claude can use your computer on your behalf while you’re away. For example, to create a morning briefing while you’re on the train; make changes in your IDE, run tests, and put up a PR; or keep your 3D printing project moving according to your initial plan.

## Getting started

Claude’s computer use capability in Claude Cowork and Claude Code is in research preview. It won’t always work perfectly: complex tasks sometimes need a second try, and working through your screen is slower than using a direct integration. We're sharing it early because we want to learn where it works and where it falls short—just like we did with Claude Cowork.

It is available now for Claude Pro and Claude Max subscribers. Computer use is supported on macOS and Windows, and you'll need to enable it in the desktop app settings. You’ll also need to make sure your desktop app is awake and running. From there, you can pair it with the mobile app and try handing off a task from your phone.

