---
title: Avoid the pain of mocking modules with dependency injection
publishDate: 18 Sep 2022
description: When you're unit testing, there is no way around it, from time to time you'll need mocking...
---

When you're unit testing, there is no way around it: from time to time you'll need mocking. Modern testing libraries have support for *mocking modules*. This means injecting mocks into the module system. Both [Jest](https://jestjs.io/docs/mock-functions#mocking-modules) and [Vitest](https://vitest.dev/guide/mocking.html#modules) have support for this.

When you look at the examples in the documentation, it seems simple enough. But when you try to do it in a production code base, it becomes a big frustrating mess.

These are quotes from a thread I came across. Luckily, it doesn't have to be this way:

> It would either work, or not work at all. It just felt completely random at times.  
> ...  
> I have no clue what is happening behind the scenes when I run my tests.  
> ...  
> It just feels so extremely magical.

## Mocking modules is a TDD anti-pattern

Before we get into dependency Injection (DI), let's see how mocking modules causes so much pain.

Since we hook into the module system, tests that share modules can no longer run in isolation, they will affect each other: if a module is mocked in one test, it will have to be mocked in other tests. And if you're not careful, mocks from one test will creep into other tests. This is a [TDD anti-pattern](https://en.wikipedia.org/wiki/Test-driven_development#Practices_to_avoid,_or_%22anti-patterns%22):

> you should always start a unit test from a known and pre-configured state

A mock from one test creeping into another test is not "a known and pre-configured state".

Modern testing libraries like Jest and Vitest do a good job of avoiding these problems because they:
* Keep the module systems of test files separated
* Always run tests from one file in the order that they are defined
* Suggest clearing all mocks after each test with an `afterEach()`

But you still have to be careful what you're doing:  
* Want to mock a module in one test, but not in the other? Too bad, you'll have to put the tests in different files.
* Forgot to clear mocks in a test? Pain.
* Using `it.concurrent()` to run tests in parallel? Pain!

And on top of that: you need to know the library-specific API's to inject your mocks into the module system.

Maybe this doesn't seem too bad, but things can get quite subtle: you run your tests locally, everything seems fine, so you push the code. Your CI pipeline runs the tests, everything green, great! Life is good.  
The next day you push some completely unrelated code and your test from the day before suddenly fails. Or worse: 3 weeks later someone else pushes completely unrelated code and some random test suddenly fails. WTF is going on?!

This is what we call "flaky" tests. They're pretty much bugs in your tests, the worst kinds of bugs: those you can't reproduce predictably because they only happen sometimes. That's what happens when your tests do not start from a "known and pre-configured state".

## Plain JS Dependency Injection

What if I told you all of this pain can be avoided by applying just *one technique*, no new syntax or tool, just plain JS. Introducing: Dependency Injection (DI).

Wikipedia describes the goal of [DI](https://en.wikipedia.org/wiki/Dependency_injection) like this:

> dependency injection aims to separate the concerns of constructing objects and using them, leading to loosely coupled programs.

It says "constructing objects" because this technique has its origin in object-oriented programming. You don't need objects (or classes for that matter) to make use of it, we'll be constructing a function.

This is the function we will be testing:

<script src="https://gist.githubusercontent.com/Nivani/ea18f2d5bce43a10089674adb0c37f5c/a1471b434c59a3b25b01c39bfdbd86340bb40ffe.js?file=get-products.js"></script>

And a Jest test that mocks the Axios module:

<script src="https://gist.githubusercontent.com/Nivani/ea18f2d5bce43a10089674adb0c37f5c/a1471b434c59a3b25b01c39bfdbd86340bb40ffe.js?file=get-products.spec.js"></script>

We have to mock the Axios module here because there is no other way to make `getProducts()` call a different Axios instance. The current implementation is tightly coupled to the default Axios instance.

We can fix that with DI, let's see what the code looks like:

<script src="https://gist.githubusercontent.com/Nivani/ea18f2d5bce43a10089674adb0c37f5c/767043cbe40aa6977fc66a6baf12581dca4960d7.js?file=get-products.js"></script>

In the tests we can now use the factory function `createGetProducts()` to create our own version of getProducts with a mocked Axios instance. No need to get fancy, the mock is also plain JS:

<script src="https://gist.githubusercontent.com/Nivani/ea18f2d5bce43a10089674adb0c37f5c/767043cbe40aa6977fc66a6baf12581dca4960d7.js?file=get-products.spec.js"></script>

By using DI instead of module mocking:

* Your code is more loosely coupled
* Your tests can run in isolation
* You do not need to know any framework-specific syntax / module magic to inject a mock
