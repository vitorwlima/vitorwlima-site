_December 2025_

---

Reinforcement learning is the current standard for training LLMs to use computers. From all the major paradigms in machine learning, this is the most actionable one. Instead of learning from static examples, an RL agent learns by acting inside a world, observing the consequences and outcomes of its actions.

### How it works

There are two essential pieces for it: environments that mimic reality, and infrastructure to replay given tasks on it thousands of times.

The environments can be as simple as a chessboard or as complex as a replica of Gmail. In both cases, the environment defines the rules of the world the agent inhabits: what it can see, what it's allowed to do, and how the world responds. In a game like chess, those rules are contained and perfectly defined. In a web interface like Gmail, they come from layers of UI state, complex interactions, and events affecting multiple users at once.

The second pillar is repetition. Reinforcement learning works because the same task can be attempted not once, but thousands or millions of times. This requires infrastructure that can deterministically reset the world, replay interactions, introduce controlled variation, and collect outcomes at scale.

Together, a world to act in and the ability to revisit it endlessly are what transform interaction into learning.

### The complexity of application environments

We introduced two examples of environments, a chessboard and a Gmail replica. In the first case, the rules of the world are easy to define. An 8x8 board, 8 pawns for each side, two knights that move in L shape, and so on. Every valid action, every illegal move, and every possible position can be formally described. As for the second case, this could not be further from reality.

Real-world applications are complex beyond any initial assumptions. The simple, cleanly defined scenarios we have in chess don't exist in this realm. The minimum complexity found tends to be a lot higher.

Take the seemingly trivial ability of starring an email. Intuitively, we think: you click a star, the email is starred, and the UI updates. But, upon more investigation, we'll find out that emails are not starred, individual messages inside a thread are. So what does "starring” an email actually mean? Are all messages in a thread starred, or just one? If so, which one? What happens when a starred email is moved to spam and later restored? Is the star persisted? Can we star messages while they're in the trash? And if so, what happens to it when it's restored?

None of these questions are obvious. Yet all of them define the rules of this world.

It is relatively easy to build something that _looks_ like Gmail. It is much harder to build something that _behaves exactly_ like Gmail.

### How accurate environments need to be

Once we understand the innate complexity of real-world web applications, a more uncomfortable problem emerges: **what happens when the environment is wrong?**

If the simple act of starring an email has all of that overhead, we are correct to assume that other features are even worse: writing emails, drafting, forwarding, labeling, snoozing, you name it. All of these have countless steps in which a replica can go wrong and implement different behaviors, diverging from reality.

For reinforcement learning, this is a recipe for disaster.

Unlike supervised learning, where small data errors can average out, reinforcement learning operates in a closed feedback loop, where small errors in the environment can compound over time. The agent doesn’t just observe inaccuracies. It adapts to them. It exploits them. It builds entire strategies around them.

The result is an agent that performs beautifully in training, but fails when dealing with the real world.

### How environments can match reality

Inaccurate environments produce agents optimized for fictional worlds. The goal, then, is not to create convincing replicas, but to create behaviorally accurate ones.

The only way to approach this problem is through continuous comparison against reality. Every feature in a replica should be treated as a hypothesis about how the real system behaves. Every flow must be compared side-by-side to the real one, until it's confusing to tell them apart. Every little behavior difference must be noted so it can be fixed. Every inconsistency must be raised.

This transforms environment building into an ongoing validation loop: observe real behavior, encode it, compare it against reality, fix any failures, and repeat. And it shouldn't start when the initial build is close to finished, but throughout the entire process.

When this process is taken seriously, something important happens. The environment is no longer just a replica, but rather a faithful simulation of reality. Agents training on top of it are not becoming good at a fake world, they are practicing how to act on top of real behaviors and edge cases.

That is the difference between environments built for demonstration and environments built for real-world operation.

### What this unlocks

When environments preserve reality at the deepest levels of behavior, reinforcement learning becomes the most powerful method. Agents stop optimizing for demos, and start optimizing for value.

This is the difference between automation that works in controlled conditions and automation that works under the weird and unexpected behaviors that are inherent to modern software. It is the difference between scripted and real intelligence.

The future of computer-use agents will not be defined by how large their models are, but by how truthful their experience is.
