---
title: "HackerTube"
author: "Andrej Karpathy"
url: "https://karpathy.bearblog.dev/hacker-tube/"
ingested: "2026-11-05"
date: "2026-10-31"
---

# HackerTube

It was Friday night at 11pm, I was tired, I went to YouTube to watch something and realized that I was looking at an enshittified wall of slop. Insanely exaggerated thumbnails, dumb recommendations of the same tired topics, truly terrible idiocracy-grade content. I'm sure this algorithm works well for the median person on the internet, but it definitely does not work for me. So this morning (Saturday) I took a hold of my Opus 5.5 and gave it the task: Let's write our own YouTube clone based on whatever videos have been recommended on Hacker News. And Opus came back with: hackertube.org !

Opus downloaded all comments of HackerNews, filtered them, ran Sonnet over them in a Workflow (Claude Code feature), got rid of spam, and narrowed everything down to 40K comments recommending a YouTube video. In total, we get 6,454 YouTube videos that have been recommended by a few people on HN from 2007-2026 across 150 topics. Then we wrap it up in a YouTube UI, get a domain, push to a VPS, secure, harden, optimize and voila! HackerTube:

- Contains quality content
- Uses the 50% thumbnail instead of the uploaded thumbnail
- Custom and good ForYou recommendations without any user accounts, storing state in local browser session
- Keyboard shortcuts
- Export of the site's data available to give to your agent to easily create your own version

This takes ~2 hours now. I can breathe again. Thank you Opus 5.5

EDIT: A little more on my process. I use Claude Code (desktop app for Mac). I use Opus 5.5 on Medium effort as my default. I don't actually do anything resembling traditional engineering anymore (read/write code, run commands in a terminal, or etc.), I only talk to Claude and have it do everything. In this case, the only "manual" thing I did was stare at a few of the pages and nitpick about the UI: make this smaller, move this there, this part is confusing, don't show this, this button looks weird, etc. A lot of these small fixes have the character that they are very easy to do (state the feedback in plain English), but at the same time very annoying to do manually (you have to figure out where and how to edit some HTML/CSS, it's tedious). So you outsource it, and the agents are actually quite good at all of it now.

Source: https://karpathy.bearblog.dev/hacker-tube/
