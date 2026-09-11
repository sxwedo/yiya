---
title: "How Carta Healthcare gets AI to reason like a clinical abstractor"
author: "Claude"
url: "https://claude.com/blog/carta-healthcare-clinical-abstractor"
ingested: "2026-09-11"
date: "April 8, 2026"
---

# How Carta Healthcare gets AI to reason like a clinical abstractor

> Inside a clinical data abstraction platform processing 22,000 surgical cases a year—and how the team reached 99% accuracy by getting context engineering right. ‍

*In our new series,* ***How startups build with Claude****, we highlight how hypergrowth organizations are transforming their industries with AI. In this article, we share engineering lessons learned behind the creation of Lighthouse, Carta Healthcare's clinical data abstraction platform, and why context engineering matters as much as model capability when you’re building AI-powered systems at scale.*

|The quick pitch|                                                         |
|---------------|---------------------------------------------------------|
|     Name      |                    Carta Healthcare                     |
|    Founded    |                          2017                           |
|      CEO      |                       Brent Dover                       |
|     Stack     |                Claude in Amazon Bedrock                 |
|    Growth     |10x growth in the last 3 years, supporting 125+ hospitals|

Clinical registries collect standardized data on patients who share a common diagnosis, procedure, or condition. Hospitals submit to registries to benchmark outcomes, identify gaps in care, and drive quality improvement, but registries are only as valuable as the data that feeds them, and producing that data is harder than it looks.

Turning patient records into registry-ready data is called clinical data abstraction. Trained abstractors read through charts, interpret physician notes, reconcile conflicting documentation, and apply clinical judgment where the record isn't clear. A routine case can take 60 minutes; a complex one can take five or six hours. For a large health system, that adds up to more than [11,000 hours of skilled labor annually](https://claude.com/customers/carta-healthcare) for a single registry program.

Traditional automation tools haven't been able to close the gap. Rules-based systems and NLP can handle predictable documentation, but clinical language rarely is. The same finding might appear as a structured field at one hospital and buried free-text at another. Edge cases multiply, context matters, and the cost of getting it wrong isn't a bad recommendation—it's flawed quality data that undermines the registry entirely.

That gap is exactly what [Carta Healthcare](https://www.carta.healthcare/), a clinical data management solution, built software to close at scale. Their platform, [Lighthouse](https://www.carta.healthcare/clinical-data-management/clinical-data-abstraction/), uses Claude to reason across clinical documentation the way a trained abstractor would.

What they discovered in the process reshaped their approach and offered a blueprint for any team trying to get AI from pilot to production.

## **From rules-based extraction to clinical reasoning**

The questions registry abstractors answer aren't simple lookups in a database.

For example, answering the question *"what was the most recent glucose before the procedure?"* requires knowing the exact procedure start time, then finding a lab value that precedes it. *"Was aspirin prescribed at discharge?"* requires distinguishing between a medication ordered for a patient to take home versus one administered during their stay.

The obvious approach is to automate those judgments with rules: map how clinicians document specific findings, build extraction logic around those patterns, and scale from there. But clinical documentation isn't consistent enough for that approach to work. The same clinical finding gets documented in a structured field at one hospital and as free-text in a clinical note at another.

Carta Healthcare’s early systems used natural language processing (NLP) to extract registry data automatically. Pattern recognition, it turned out, can't replicate clinical judgment.

"That's where Carta Healthcare started years ago with NLP, and it's exactly why we moved to LLMs," says Hannah Glaser, Applied AI Applications Manager at Carta Healthcare.  

Getting reasoning right is critical as three abstractors can review the same cardiac case and reach different but defensible answers. Physician notes point one way, imaging studies another. The right answer requires weighing both, and that's not a problem you can rule your way out of.

"What an AI system needs to understand is what a trained clinical abstractor understands: how to read clinical language in context, weigh conflicting evidence across documents, apply temporal logic relative to specific procedure dates, and handle ambiguity," Glaser says. "If weight was assessed after the procedure, a skilled abstractor knows that doesn't count as a pre-procedure weight, and the system needs to know that too.”

Carta Healthcare evaluated several models before settling on Claude.

“No other model we evaluated showed the same capability for understanding and interpreting clinical documentation,” says Glaser.
