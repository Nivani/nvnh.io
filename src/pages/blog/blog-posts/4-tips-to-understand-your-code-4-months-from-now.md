---
title: 4 tips to understand your code 4 months from now
publishDate: 2022-07-31
description: As software developers, we've all been there. You're writing some code, you know it's dirty, but the deadline's coming closer, and you go "it's working now, I'll just refactor it later", and we all know how that turns out...
cta: CtaNewsletter
---

As software developers, we've all been there: you're writing some code, you know it's **dirty**, but the **deadline**'s coming closer, and you go: "it's working now, I'll just **refactor it later**", and we all know how that turns out.

This **repeats** a few times, and before you know it, it's just one **big bowl of spaghetti** that you **don't want to touch** anymore.

Let's look at a few things you can do to **help the next developer** who looks at your code. After all, that developer could be **future you**!

We'll look at a solution for the [first puzzle of Advent of Code 2021](https://adventofcode.com/2021/day/1). The puzzle has 2 parts, our solution includes part 2.

The assignment goes like this:
* You get a list of integers
* Use a sliding window to go over them
* Calculate the sum of each sliding window
* Count the number of times the sum of each window increases

This code solves the puzzle:

```js
function countDepthIncreases(msmts, { windowSize = 1 } = {}) {
  let c = 0;
  for (let i=0; i <= msmts.length - windowSize; i++) {
    const s1 = msmts
      .slice(i, i + windowSize)
      .reduce((s, v) => s + v, 0);
    const s2 = msmts
      .slice(i + 1, i + windowSize + 1)
      .reduce((s, v) => s + v, 0);
    if (s2 > s1) {
      c++;
    }
  }
  return c;
}
```

When you glance at the code, you can kind of get an idea of what's happening, but you have to **read** the whole thing **carefully** to understand or make a change. It's **not clean code**.

It's not necessarily a problem to have this kind of code when you're exploring a solution, as long as everything fits in your head. But it's **not** the kind of code that should end up **in production**. As software developers, [we read code much more than we write it](https://skeptics.stackexchange.com/questions/48560/is-code-read-more-often-than-its-written). So if we want to be **efficient** as developers, we should **prioritize** writing code that is **easy to read and understand**, not quick to write.

The first advice you typically get is:
* Use **clear names**
* Document unclear code with comments

So let's do that.

This is exactly the same code, but with better names and some clarifying comments:

```js
function countDepthIncreases(depthMeasurements, { windowSize = 1 } = {}) {
  let increaseCount = 0;
  for (let i=0; i <= depthMeasurements.length - windowSize; i++) {
    // Slice current window and calculate sum
    const currentWindowSum = depthMeasurements
      .slice(i, i + windowSize)
      .reduce((sum, value) => sum + value, 0);

    // Slice next window and calculate sum
    const nextWindowSum = depthMeasurements
      .slice(i + 1, i + windowSize + 1)
      .reduce((sum, value) => sum + value, 0);

    if (nextWindowSum > currentWindowSum) {
      increaseCount++;
    }
  }
  return increaseCount;
}
```

That looks better already, doesn't it? It's clear that there's something going in with sliding windows, making sums and counting increases.

Now **comments** are all well and good, but as Robert C. Martin points out in [Clean Code](https://www.goodreads.com/book/show/3735293-clean-code), they have a **tendency to get out of date**. Let's assume for a minute that the requirements change (don't they always?): instead of the sum, we should use the median to detect increases. In this kind of scenario it often happens that someone updates the code but doesn't update the comments. Now the comments say "sum" but the code says "median" and it's just confusing instead of clarifying. We might spot that quickly in our small example here, but when you're working on a **large project** it can get **really crazy** when you've been staring at the same code for **hours**, and you suddenly realize that that comment you trusted was **lying** to you all along!

That's why it is better if you can **explain yourself in code**.

Let's see what that looks like:

```js
function countDepthIncreases(depthMeasurements, { windowSize = 1 } = {}) {
  let increaseCount = 0;
  for (let i=0; i <= depthMeasurements.length - windowSize; i++) {
    const currentWindow = getWindowAt(depthMeasurements, i, windowSize);
    const nextWindow = getWindowAt(depthMeasurements, i + 1, windowSize);

    if (sum(nextWindow) > sum(currentWindow)) {
      increaseCount++;
    }
  }
  return increaseCount;
}

function getWindowAt(arr, i, windowSize) {
  return arr.slice(i, i + windowSize);
}

function sum(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}
```

That's quite clear, isn't it? Without any comments!

By extracting functions and giving them meaningful names we can **clearly communicate** what's happening **without using comments**. We can **explain ourselves in code**. It's clear from the code that we're using sliding windows and that we're counting increases based on the sum of these windows.

Could we improve it even more?

Let's compare the code to the description of the solution in plain English:
* Use a sliding window to go over them
* Calculate the sum of each sliding window
* Count the number of times the sum of each window increases

Is it clear from the code that this is happening? It's certainly more clear than the first version, but everything is in 1 for loop and your fellow developers (and future you) would still need to read the code carefully to understand what's happening.

Let's see what happens if we **decouple** our solution **into self-contained steps**:

```js
function countDepthIncreases(depthMeasurements, { windowSize = 1 } = {}) {
  const measurementWindows = extractSlidingWindows(depthMeasurements, windowSize);
  const windowSums = measurementWindows.map(sum);
  return countIncreases(windowSums);
}

function extractSlidingWindows(arr, windowSize) {
  const slidingWindows = [];
  for (let i=0; i <= arr.length - windowSize; i++) {
    slidingWindows.push(arr.slice(i, i + windowSize));
  }
  return slidingWindows;
}

function sum(arr) {
  return arr.reduce((sum, val) => sum + val, 0);
}

function countIncreases(values) {
  let increasesCount = 0;
  for (let i=1; i < values.length; i++) {
    if (values[i] > values[i - 1]) {
      increasesCount++;
    }
  }
  return increasesCount;
}
```
`countDepthIncreases()` is only 3 lines now. One for each step we described in English. It's not necessary to go look at the implementation of the different functions to see what's going on here. When a change is need, it's quite clear where the change needs to happen and because the different steps are self-contained it is less likely that a change to one part will break another part of the solution.

Need to use median instead of sum to detect increases? ok, no problem, write a `median()` function and replace it:

```js
function countDepthIncreases(depthMeasurements, { windowSize = 1 } = {}) {
  const measurementWindows = extractSlidingWindows(depthMeasurements, windowSize);
  const windowSums = measurementWindows.map(median);
  return countIncreases(windowSums);
}
```
Need to count decreases instead of increases? ok, no problem, write a `countDecreases()` function and replace it:

```js
function countDepthDecreases(depthMeasurements, { windowSize = 1 } = {}) {
  const measurementWindows = extractSlidingWindows(depthMeasurements, windowSize);
  const windowSums = measurementWindows.map(median);
  return countDecreases(windowSums);
}
```
Apart from readability, there is an added benefit to these self-contained steps: you can **mix-and-match** to create different **variations** of the solution and **reuse parts** of it in something completely different:
* Need to count increases of both sum and median? Ok, you can add more 3-line functions for different variations
* Need to do something else with sliding windows? Ok, you can reuse `calculateWindows()`

In summary:
* Use **clear and meaningful names**
* Always try to **explain yourself in code**
* Use **comments** only when you **can't explain yourself in code**
* Decouple your solution into **self-contained steps** that do 1 thing 
