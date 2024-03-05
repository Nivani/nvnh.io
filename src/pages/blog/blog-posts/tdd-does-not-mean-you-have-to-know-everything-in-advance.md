---
title: No, TDD does not mean you have to know everything in advance
publishDate: 2023-09-19
description: Test-Driven Development (TDD) means you write tests first before you write the implementation. It sounds simple enough, but in practice you feel like this only works for rockstar developers...
cta: CtaTddExercise
---

Test-Driven Development (TDD) means you write tests first before you write the implementation.

It sounds simple enough, but in practice you feel like this only works for rockstar developers. You have to have the perfect code in your head before you even start! But you don't know how the code will look like. You just write it first and then add tests afterwards. Testing is a chore. You just do it because your PR will not be approved if you don't or because someone will complain that code coverage went down.

If this is your experience, you're not alone. Getting started is the hard part, that first failing test.

Let's see what [Wikipedia has to say](https://en.wikipedia.org/wiki/Test-driven_development#Test-driven_development_cycle):

> The adding of a new feature begins by writing a test that passes iff the feature's specifications are met. The developer can discover these specifications by asking about use cases and user stories. A key benefit of test-driven development is that it makes the developer focus on requirements before writing code. This is in contrast with the usual practice, where unit tests are only written after code.

Often times the gap between the "use case" or "user story" you got assigned and the code is too big to just write a test. You don't know enough about that part of the application or that part of the code to get started and you want to write some code to see what happens or to experiment with different solutions.

But you also want to do TDD and TDD says you need to write a failing test first 😮. So you get a chicken-and-egg problem. The thing is: that experimentation by writing code is part of "discovering the specifications", so it's totally ok to hack away without tests at this stage.

Saying you can't write any code without having a failing test first is like saying you can't do *any* architecture or design because you're doing TDD. There have also been misunderstandings about this. Uncle Bob [has written about it](https://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html#emergence):

> The idea that the high level design and architecture of a system emerge from TDD is, frankly, absurd. Before you begin to code any software project, you need to have some architectural vision in place. TDD will not, and can not, provide this vision. That is not TDD’s role.

Once you know enough to write a failing test, make sure to **start from scratch**. If you don't, testing will be harder and you will bypass a lot of the advantages of TDD. It will lead to complicated and brittle tests.

You don't need to delete all your code, but set it aside for inspiration and start from scratch **with** a failing test.

# TDD is an ideal

We would like to live in magical fairy land where everything is perfect and we can Red -> Green -> Refactor all of our code all of the time. But we live in the real world. Of course there is code that is harder to test and code that is easier to test. Some parts of an application are inherently harder to test even if it's the best code in the world. Some bad codebases make it very hard to write *any* tests. It's easy to get discouraged trying to apply TDD there.

Should we write off TDD because of this? Does TDD suck because of this?

Of course not!

If you're having bad experiences try TDD on pure functions or a set of classes without dependencies first. Once you see the benefits, you'll be motivated to use it on the harder-to-test code as well.

TDD has gone through many misunderstandings over the years. I highly recommend this [talk by Ian Cooper](https://www.youtube.com/watch?v=EZ05e7EMOLM) for anyone practicing TDD.
