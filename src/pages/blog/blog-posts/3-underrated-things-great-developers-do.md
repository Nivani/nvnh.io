---
title: 3 underrated things great developers do
publishDate: 2022-11-28
description: People are attracted to sexy, complex-sounding things because it's cool to talk about them, and they can act like it's going to fix all of their problems....
cta: CtaNewsletter
---

People are attracted to sexy, complex-sounding things because it's cool to talk about them, and they can act like it's going to fix all of their problems.

Take personal health for example. It's cool to talk about intermittent fasting, biohacking and the latest fitness trends. Not cool to talk about eating more fruits and vegetables, getting enough sleep and consistently moving your body.

Software engineering is no exception. It's really cool to talk about microservices, event sourcing, chaos engineering and Kubernetes. Not cool to talk about legacy code, documentation and writing code that other people can understand. People are suffering from the [silver bullet syndrome](https://www.youtube.com/watch?v=3wyd6J3yjcs) (spoiler alert: nothing's going to fix all of your problems)

It's the software engineering version of [Nailing the Basics is Simple, not Easy](https://thegrowtheq.com/nailing-the-basics-is-simple-not-easy-the-growth-equation-manifesto/):

We know we should test our code, but we rather spend time applying that design pattern we read about.

We know our architecture should be documented, but we rather spend time introducing that cool new library.

We know we should limit work in progress, but we rather spend time starting cool new features.

So let's have a look at a few basic, underrated things you can do to make the difference for your team.

### 1. Make an effort to understand legacy code

Legacy code is everywhere, everybody knows we should deal with it, but nobody wants to. We're quick to discarded it with "this code is horrible, we should rewrite it", and the author is perceived as a bad programmer.

There is a lot of bad code out there, and yes, we should do better. But remember: code is often written with the best intentions, and you don't know the context in which it was created.

When we get into a new codebase, everything tends to look like chaos. When you look closer, you can often find patterns that make it easier to understand. It's usually not as bad as it looks at first sight. Plus, if you ever want to replace it with something new, you better know what it's doing.

This brings us to the next one:

### 2. Share what you learn

I'm not talking about: "Here's how I heard they do X at FAANG, and by the way: we should do this here too!"  
but rather: "Here's what I found out about this undocumented part of the code."

When you're new to a codebase, you have a unique view on it. Use this unique view to make it easier for developers coming after you. Ask yourself: "What piece of information was I missing? What made the codebase click for me?". Focus on patterns that help someone understand the code as a whole, or a notoriously difficult part of the code. Create diagrams (see [C4 model](https://en.wikipedia.org/wiki/C4_model) for inspiration) with some text and share them with your colleagues. Either in your team chat, or in a dedicated knowledge sharing session.

### 3. Write code that other people can understand

Unless you're writing some temporary internal tool, code will be [read more than it's written](https://skeptics.stackexchange.com/questions/48560/is-code-read-more-often-than-its-written). Even if the rest of the code is unreadable spaghetti, you can still make the code you add and update more readable. Write [clean code](https://nvnh.io/index.php/2022/07/31/4-tips-to-understand-your-code-4-months-from-now/) and provide tests.


### The underlying trait

What is the underlying trait of people who do these things?

**Empathy**!

Accept that nobody's perfect. Show that you care about doing better as a team and making things suck less for everybody:
1. Make an effort to understand legacy code
2. Share what you learn
3. Write code that other people can understand
