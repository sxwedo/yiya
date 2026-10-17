---
title: "How to be more ambitious: A tutorial for humans with models"
author: "Felix Rieseberg"
url: "https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/"
ingested: "2026-10-17"
date: "2026-10-13"
---

# 📰 How to be more ambitious: A tutorial for humans with models

I work on Claude. It's an interesting experience: Every day I learn about yet another feat accomplished with or by Claude that I hadn't considered, didn't think possible, or simply lacked the curiosity and time to try. This month, it may have helped discover a new planet, I've seen the first AI music video that I really like, and we are discussing a new era of math.

Model capabilities don't grow uniformly. Models are, as Terence Tao puts it, "astounding in some directions, while inadequate in others". Some people manage to pilot the astounding capabilities and seem to be flying. Many others are still struggling to get their new wings to work, wondering what they're good for beyond asking "What is the capital of France" or "Can you make this email sound less angry".

I frequently proclaim (together with other people working on AI) that we ought to be more ambitious when using it. It's become a rallying cry. Whenever we see something impressive, we repost and write "we're not ambitious enough". I understand how tricky it is to follow that advice, so here's a tutorial on being more ambitious.

I think of ambition in four types: Speed, Altitude, Depth, and Range.

- Speed: The same work in less time, the bread and butter for AI's economic value. Well established and requires little creativity, so I'll skip this one.
- Altitude: Going up in abstraction and considering the outcome rather than the individual task.
- Depth: Considering a task the way a field-leading expert would. Rather than operating at the task's layer, we go one level deeper and touch the underlying data, tools, and problems.
- Range: Drawing on multiple fields rather than just the one the task might need at the surface.

## Altitude

When you give the model a task, it's executing your best guess at how to get the outcome you want. To be more ambitious in altitude, ask yourself - what do you want to happen next? What's the goal beyond the goal? At the beginning of last year, I still asked Claude to fix individual crashes for me. Eventually I asked Claude to simply keep our apps crash-free.

Everyday office task: a quarterly business review deck.

- Give the model as much data as you can: "Tell me what changed this quarter, why, and what we should do about it."
- Meetings end with decisions: "Work out which three decisions are most urgent... start working on potential directions with for/against arguments."
- The review exists so leadership catches problems early: "Design a better way to do that than a quarterly deck, show from our own history that it would have caught things sooner, and run it beside the current one for a quarter."

Altitude works best if you really are after some ultimate outcome; it works less well for creative endeavors. A tell-tale is if you're going to have meetings to discuss whatever you're working on. There are currently limits ("Claude, go make money" doesn't seem to work for most businesses by itself in 2026).

Altitude is also where people find durable workflows that take the human out of the loop. Doing this well often involves changing your workflow - in order to let Claude make sure our app is crash-free, I first had to make sure it can easily fetch crash reports, understand which app version maps to what git commit, and give it access to Windows, macOS, and Linux computers so it can actually independently reproduce and verify fixes.

## Depth

Being ambitious in depth means pushing the model to use the tools, techniques, media, and knowledge employed by the best professionals in the field - and to keep pushing until even those people might learn something new from your work.

- Insist on the same instruments used by the best in the industry: When prompted to act like a professional, models often switch vocabulary without actually switching methods. When Claude reaches for markdown tables, insist on the use of databases and statistical models.
- Pick unreasonable goals and tell the model that they're very reasonable: You need your website to load in 5s instead of 10s? Ask for 200ms.
- Challenge what you know: Give the model access to the raw information and ask it to adversarially check assumptions.
- Produce new knowledge: Once Claude is already deep inside the data, ask it to find blind spots.
- Use an outside judge: Do not ask the model to judge itself. Ideally that's a tool the model can run to get feedback immediately.

A prompt that often helps:

> I want a deeper version of this task, not a bigger one. Before rewriting it: (1) say what a top professional in this field would do here that I'm not asking for; (2) name the rawest material they would start from instead of what has already been digested for me; (3) name the specific methods and tools they would use; (4) say what, other than you or me, would show the result is right. Then rewrite my prompt to ask for exactly that.

## Range

Being ambitious in range means that we consider our work from the perspective of different fields - more fields than would have been economical in the past. As AI products make it easier to run multi-agent systems, interesting results come from bringing in additional fields.

- Try to replace the nouns with verbs: A quarterly review isn't "a deck". It's "getting busy people to believe a story about cause and effect, and to decide under uncertainty, in 30 minutes".
- Assemble the crew: Use this method to find fields and techniques. Don't ask the model to write like a short seller, ask it to do what a short seller does to research their position.

It is easy to accidentally engage in role play, which will make your transcript weirder without improving the actual outcome.

All the ways in which I describe ambition require the model to have a computer with the ability to install software and access to all kinds of relevant data.

## We have been here before

We humans have always been held back by what we believe possible. Psychology has a name for this: self-efficacy. People with high self-efficacy believe in their own abilities more, and in turn actually accomplish more. Locke and Latham: humans given specific hard goals perform better than those told to try their best.

Hacks:

- Accomplish hard things by believing them to be possible (Dantzig solving unsolved problems thinking they were homework).
- Accomplish hard things after watching somebody else do them (four-minute mile; sub-two-hour marathon).
- Accomplish hard things by giving yourself permission to fail (Inner Game of Tennis; Linux as a hobby).

Self-efficacy isn't a new problem, but it is a more powerful one now. In a world where our abilities make leaps every couple of weeks, we need techniques that allow us to do things we didn't really consider or believe possible.

The image for this post is by Francisco Goya, “Modo de volar” (A Way of Flying).

Felix Rieseberg: EM at Anthropic (Claude.ai, Cowork, Claude Code Desktop). Co-maintainer of Electron.

Original: https://felixrieseberg.com/how-to-be-more-ambitious-a-tutorial-for-humans-with-models/
