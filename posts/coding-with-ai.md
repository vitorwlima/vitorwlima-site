_October 2025_

---

Here are my thoughts on the current state of AI for coding, and how you can get the most out of it. First of all, I don't believe in "vibe coding"[1] (at least not in present time). What I believe is that, by using AI, competent engineers can achieve **0.5x to 10x** their usual productivity, depending on the task.

### Why 0.5x?

This was not a typo. AI is not magical, and it CAN slow you down in a lot of cases.

Let's start with a fact: LLMs can't be trusted. This means that every line of code it writes should be reviewed and tested by you, similar to how you would do with a PR from another human.

> "Looks good to me, PR approved" without reading can't be done unless you like AI slop[2].

I would say there are 2 reasons as to why they can't be trusted:

- LLMs are not deterministic
- LLMs don't know how to behave like a real-world senior software engineer

The "not-deterministic" argument is self-explanatory: for any given prompt, you can receive countless different results, based on the model you are using and on true randomness. For a field like software, where every little detail can be the difference between the perfect behavior and a bug, this is dangerous.

I also mentioned the AI can't behave like a real-world top engineer, and the reason is not knowledge. The AI is trained upon thousands and thousands of codebases and literally **billions** of lines of code, so it holds more data than any human possibly could. However, it lacks the understanding of the current codebase and the current problem you are trying to solve.

The higher the difficulty of the problem, the more codebase context is required by the AI, and the better the prompt you give it should be. We have many assumptions in our head when building our products - and unless we can actually describe ALL of them, pointing the AI to the correct path, we can't expect it to behave right.

And even if you do write the perfect prompt with all the specs - similar to how tools like [Kiro Code](https://kiro.dev/) incentivize - you will still spend time writing it, reviewing it and testing it after it's done (which can take multiple minutes or even hours).

My main point is that, if we need all this work to get a _possibly_ functional solution, why don't we spend our time actually writing the deterministic code we always have, and get a _surely_ functional solution instead?

### When and how can you get to 10x?

The more repetitive and low-effort your task is, the better the AI can help you. I would say it shines the most on these scenarios:

- building static landing pages that don't require much maintenance
- building MVPs and one-off small projects

Both of these are extremely boosted by AI because you don't care about its weak points: you don't need to craft the perfect prompt, and you don't have to care about code quality.

For landing pages, it's straightforward. Designs are easy to test, and they are easy to write - even easier for a machine. It's still hard to get it to follow exactly what you want, especially if you are going for a pixel-perfect implementation from a Figma file, for example. The caveat is that you can't run into too many bugs though, which means the review process is less time-consuming. With that, you can update the parts the AI got wrong or just use it as inspiration on a full re-write, and the ROI is still positive.

It's even better for MVPs and small projects. Let's say you want to start implementing something in your company's project, but you don't have approval or power to work on that section of the codebase yet. Instead of trying to show by words what you can do, you can now build a demo of what you want using AI all the way. Code is cheaper with LLMs - you can produce throwaway-code for experiments while multitasking on higher-priority work, and you don't lose anything.

Sadly, most of us are building products with greater complexity and higher engineering effort. For these cases, can we still extract value from LLMs?

### The ideal flow

The answer to the last question is **yes**. We can still get valuable information from working with AI, even on novel and complicated codebases. I use it daily, and I believe every engineer should as well. I don't think the 10x productivity boost is achievable, but it's possible to gain at least 50% **consistently**.

My framework for working _when_ I'm heavily using AI (Cursor):

- if you have an easy or intermediate task (< 4 hours), just try prompting the LLM to do it for you
  - if it works and code is great → all perfect and you saved time
  - if it works and code sucks, you can try rewriting some parts or re-write it from scratch with what you learned from diffs → there is a chance you'll lose time
  - if it doesn't work, you should try learning from the diffs and then re-writing it → there is a chance you'll lose time
- if you have a hard task where time is not easily measurable, you can also try prompting the LLM to do it for you
  - if it works → you probably haven't tested it correctly, or your task is not actually that hard
  - if it doesn't → you should look at the path chosen by the AI and try understanding its ideas to improve your own

Bottom line: most of the time when doing this, you may be losing time. The tradeoff is that you will also get some insights on how the LLM approaches your ideas, which may or may not help you and make you more productive when it happens.

Most of the time, I am **not** using AI heavily. However, those are the times where I get the most out of it. I will use Cursor suggestions (tab usage) as it is great for helping you write faster, and I will talk to a model when facing a hard technical problem. This way, I never outsource the coding aspect and I have full control of the implementation and quality of it. I also don't lose any more time on Stack Overflow as any questions or syntax problems are solved right inside my code editor.

### Closing thoughts

AI is a great tool, and it absolutely has the power of making software engineers more productive. However, it can also make engineers less productive if they are not careful and are just riding the wave of nonstop prompting.

My honest recommendation for every engineer reading this is to try changing your workflow for a week to be the opposite of what it currently is in terms of AI usage:

- If you are a heavy AI bro → go one week without it
- If you are against AI → go one week full vibe mode

We need to experiment to learn what actually works best for us. Humans can get so caught up on their own ways, that they may not realize when something is doing good or bad to them.

You may surprise yourself. I'm ending my AI week now, and I'll definitely keep using it more than before, but will dial back a lot from what it currently is. All is a balance.
