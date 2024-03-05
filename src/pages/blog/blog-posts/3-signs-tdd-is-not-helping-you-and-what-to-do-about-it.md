---
title: 3 signs TDD is not helping you and what to do about it
publishDate: 2023-12-30
description: At first sight, Test-Driven Development (TDD) seems like it comes from a magical place where requirements are clear, determined in advance and never change...
cta: CtaTddExercise
---


At first sight, Test-Driven Development (TDD) seems like it comes from a magical place where requirements are clear, determined in advance and never change. But in practice, the business never makes up their mind, user requirements change all the time and countless tests break every time you have to make a change. It's just a big waste of time!

This is how a lot of people experience TDD, but it doesn't have to be this way.

TDD became popular as part of Extreme Programming (XP). One of the main points of XP is to expect changing requirements and provide practices to deal with that. TDD is one of those practices, so when countless tests break every time you make a change, something's wrong. This can be worse than having no tests.

Here's 3 signs TDD isn't helping you:

1. Every time you make a change, countless tests break and have to be updated.
2. When refactoring, you have to rewrite all the tests.
3. You're spending more time mocking than actually testing.

All of these can be avoided by **picking the right unit** for your unit tests.

# What's the unit?

Unit tests are often testing a single class or function and anything outside of that class or function is mocked. This leads to a ton of white-box, very fine-grained tests that break every time something changes. This is a real pain for little gain.

There is a key misunderstanding about unit tests that still persists today: the unit under test. Picking the right unit is a very valuable skill to have.

In an episode of The Engineering Room on Youtube, Michael feathers explains it as ["What's the thing that you can test easy?"](https://www.youtube.com/watch?v=UGD8pMMJlbk&t=1682s).

> ...if you can easily test it because it has **minimal coupling** to other pieces, then that's the unit. It doesn't matter if it's three or four classes working together, but it's this **cohesive chunk** that you can work with.

There is also the popular talk "TDD, Where Did It All Go Wrong", where [Ian Cooper explains this misunderstanding at 28:49](https://www.youtube.com/watch?v=EZ05e7EMOLM&t=1729s). He says:

> The system under test is really the exports from a module, its facade.

This facade can be a single class or interface, but the implementation details could have more classes. You're looking to test a **stable contract**.

If you get the unit right and that unit has a flexible contract that is not prone to breaking changes, you will have fewer mocks and much fewer breaking tests.

# But what does this mean in practice?

As an example, let's take the frontend of a user registration flow:

1. Asking the user's e-mail address, a password and repeat the password
2. Asking for a confirmation code that was sent by e-mail
3. Registration success with links to

When we want to have unit tests, what would be a good unit?

What about... the whole thing?

It has a **stable contract**: the input fields that need to be filled in, the buttons to press and the calls to the backend.

It's a **cohesive chunk** with **minimal coupling**: the only dependencies are a few API calls to the backend we can mock.

But won't this lead to so many tests it's hard to see what's going on anymore?

It might feel like the unit is too big for a unit test, but it all depends on what you're testing and where.

# What are you testing where?

The unit under test is the registration flow, so the tests should focus on the registration flow itself, not on all the little details of the flow.

For example: you test that when a user fills in an invalid e-mail address, a validation message is shown and we can't continue to the next step. You don't test all the ways an e-mail address can be invalid.

If you want to test all the ways an e-mail address can be invalid, create a [pure](https://en.wikipedia.org/wiki/Pure_function) e-mail validation function, test it separately and use it in your components. It's not because the validation function is already part of another test that you cannot test it individually.

Some people will say "But you have to mock out the e-mail validation, because if there's a bug in it, your registration flow tests might fail even though there is nothing wrong with the flow itself".

This is a risk, but it's only a small risk. A bug in the e-mail validation function will most likely manifest in the edge-cases. If you use e-mail addresses like `john.doe@gmail.com` and `obviously_not_an_email_address.test` while testing the registration flow, you will not run into these problems. Not worth mocking everything out.

Though the unit seems big, if your tests run in isolation, are self-contained, fast and small these are perfectly fine unit tests.

Next time you're doing TDD:

* Look for units that are **cohesive chunks** with **minimal coupling** and a **stable contract**. Design your code so that these exist.
* Make sure your tests **focus on the unit under test**, not all the little details of the unit that can be tested individually.
