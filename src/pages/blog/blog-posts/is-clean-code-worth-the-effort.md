---
title: Is clean code even worth the effort?
publishDate: 2022-08-22
description: Did you ever spend a lot of time cleaning, refactoring, testing and documenting your code, you're proud of the result, and then... nobody notices?
cta: CtaNewsletter
---

Did you ever spend **a lot of time** cleaning, refactoring, testing and documenting your code, you're **proud** of the result, and then... **nobody** notices? While *some* developers on your team just **hack something together**, leave **horrible code** behind and then **get praised** for delivering "quickly".

**Frustrating**, right? You start to wonder: **is clean code even worth the effort?**

The answer is: **Yes!**

Let's take a look at a few reasons why.

## Working in a bad code base sucks

I'm sure every developer remembers at least one of those **hours-long debug sessions** where it's **mind-numbing** just parsing **what the heck is even going on**, let alone **solve the actual problem**. Working in a **bad** code base is **frustrating** and **sucks**!

Making changes to a bad code base is **slow** and on top of that, the frustration has a negative impact on **motivation** and that impacts the **team**'s ability to do good work even further.

That was a bit of a no-brainer, so let's get to the real stuff.

## Clean code pays off more quickly than we expect

Most people know that we try to write clean, readable code because **bad code comes back to haunt us** over the long term, but we **underestimate** just **how quickly** that happens.

The question "Is the extra work **clean code** requires worth the effort?" is part of a more general question: "Is building **high quality software** worth the effort?"

In 2019, the great Martin Fowler published an article titled: [Is High Quality Software Worth the Cost?](https://martinfowler.com/articles/is-quality-worth-cost.html).

In the chapter ["Visualizing the impact of internal quality"](https://martinfowler.com/articles/is-quality-worth-cost.html#VisualizingTheImpactOfInternalQuality), he admits that you **can be faster** in the **short-term** with quick, low-quality code, but points out that people **underestimate** how quickly this becomes a **problem**. He visualizes it with a nice (pseudo-)graph:

![High quality vs low quality](/assets/blog/high-quality-vs-low-quality.png "High quality vs low quality")

I've seen this happen a number of times. When someone says "this code will slow us down (cost us money) in the future", people seem to think that we're talking about some **far-away future**, like more than a year from now. But it **doesn't take long** for low-quality code to start **slowing us down**. For **larger teams**, I agree with Martin Fowler, it's a matter of **weeks**. For **smaller teams**, it may take a little longer, but we're still talking no more than [a few **months**](/blog/4-tips-to-understand-your-code-4-months-from-now/).

The only situations where you **can** be faster by quickly hacking something together is when all of these apply:
* Short-term results are the only thing that matters
* It's new code or clean existing code
* Everything fits in your head *(making it fit into someone else's head will be a problem though)*

That's a lot of ifs and there are **very few** situations where it makes sense to do this. By quickly hacking something together you pretty much always **shoot yourself** (or the company you work for) **in the foot**.

## Writing clean code doesn't have to take forever

Writing clean code might seem like **a lot** of effort **at first**, but the more you **practice** it the more clean your code will be from the start, to a point where you're actually **faster** writing cleaner code.

If you're a perfectionist, try to be **pragmatic** because there are **diminishing returns**: you could get your code to eg. 80% pretty quickly, but trying to have perfect textbook definition clean code can take a lot of time and is not the goal. You can tweak your code forever and still find some things to change.

Your main goal should be, when a **random developer** gets dropped into the code to make a **change**:
* The change can be made in **one place** without changes in many other places (loose coupling)
* It is **clear** what the code is doing and where the change should be made **without** having to carefully **read every line** to understand what's going on.

In summary, write clean code because:

* Working in a bad code base sucks
* Bad code will come back to haunt you more quickly than you think
* It doesn't have to take forever
