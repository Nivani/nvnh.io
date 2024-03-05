---
title: Composing Software by Eric Elliot, what you need to know
publishDate: 2022-09-04
description: Functional programming (FP) is a big deal in the Javascript community. It's one of the fundamentals of building good software and great to learn if you want to grow as a developer...
cta: CtaNewsletter
---

Functional programming (FP) is a big deal in the Javascript community. It's one of the fundamentals of building good software and great to learn if you want to [grow as a developer](/index.php/2022/07/05/how-to-grow-as-a-developer-without-getting-overwhelmed/).

FP has its roots in math academia, so a lot of the learning material is theoretical, making it hard to wrap your head around. It's not always easy to see how you can apply it in your day job. The more practical information is scattered and often hidden in documentation for specific libraries.

I don't know of any course or book that's *the* reference on Functional Programming in Javascript. I have recommended [Composing Software by Eric Elliott](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc), but apparently some people [don't like that](https://www.reddit.com/r/javascript/comments/whxmzt/comment/ijclkqj/).

I do agree with some of the criticism, but it sounds like the whole book is rubbish and that's not true at all. You can still learn a lot from it: most of the advice is good, it doesn't go too heavy on the theory and the examples are practical.

There *are* a few things you should know: two OOP principles that come up in the book, object composition and the open-closed principle, are not used correctly. The book describes a forgotten history of OOP before getting into these things, but that's not a good reason to confuse readers by redefining well-known OOP principles. Let's see what's going on here.

## The wrong definition of Object composition

Skip the chapter on object composition. It explains that there are 3 types of object composition, but I'm not sure where these are coming from. It's confusing.

"What is object composition" starts with a quote from Wikipedia, but it comes from the [Composite data type](https://en.wikipedia.org/wiki/Composite_data_type) page and not [Object composition](https://en.wikipedia.org/wiki/Object_composition).

Then 3 types of object composition are described:

* Aggregation: I don't know where this definition of aggregation comes from, but [in the classic GoF book](https://softwareengineering.stackexchange.com/questions/389939/how-to-implement-acquaintance-and-aggregate-as-described-by-the-gang-of-four) and [in UML](https://en.wikipedia.org/wiki/Object_composition#UML_modeling_technique), aggregation has a different meaning.
* Concatenation comes back later in the book in the chapter about functional mixins. We will come back to this in the next section.
* Delegation uses a form of object composition, so I can kind of see how it relates, but it's closer to class inheritance than object composition. It's not very relevant to what you should know about object composition and why you should favor it over class inheritance.

## Mixins are not "object composition" in "favor object composition over class inheritance"

In the chapter "Functional Mixins" the confusion about object composition continues:

> Mixins are a form of object composition

And then a few paragraphs further:

> it is the most common form of inheritance in JavaScript

So... are mixins composition or inheritance?

Technically speaking, describing mixins as "object composition" is not wrong if you only consider the meaning of the words in English: you're composing objects together to form a new object. But when we talk about object composition in OOP, this is not what we mean. Functional mixins are a form of multiple inheritance, not object composition.

It's not a bad technique, it's useful to know it and use it. Just remember that you're doing multiple inheritance. The book seems to suggest that you're applying "favor object composition over class inheritance", but this is not true. In fact, the "Caveats" section has this warning:

> Like class inheritance, functional mixins can cause problems of their own. In fact, it’s possible to faithfully reproduce all of the features and problems of class inheritance using functional mixins.

## Composition is not necessarily harder with classes

In "Why composition is harder with classes" the book tries to make the point that composition is harder with classes because mixins are harder with classes. Since mixins are not object composition, this is not correct.

What you should remember from this chapter is:
* A factory function is more flexible than `new` or `class`.
* Changing from `new` or `class` to a factory function could be a breaking change.

## A clumsy reference to the open-closed principle

Further in this chapter, there is a section called "Code that Requires `new` Violates the Open/Closed Principle". It starts like this:

> Our APIs should be open to extension, but closed to breaking changes.

This is good advice and the open-closed principle has a similar high-level goal, but it's not what the open-closed principle means.

The open-closed principle generally means what Wikipedia calls the [polymorphic open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle#Polymorphic_open–closed_principle). We would use interfaces rather than abstract base classes these days, but Robert C. Martin's article is in C++ and from 1996. The concept of interfaces didn't exist in the language, abstract base classes were the closest thing.

## That's not acceptable, aren't there any other resources to learn from?

Specifically for Javascript there are some alternatives:
* [Profession Frisby's Mostly Adequate Guide to Functional Programming](https://mostly-adequate.gitbook.io/mostly-adequate-guide/)
* [Functional-Light JavaScript](https://github.com/getify/Functional-Light-JS) by Kyle Simpson

Personally I learned functional programming from an online course on Coursera: [Functional Programming Principles in Scala](https://www.coursera.org/learn/scala-functional-programming). It's a lot of work to learn a new language and translate what you learned to Javascript just to get into functional programming. I didn't learn Scala just to get into functional programming. But if you're serious, and you're up for a challenge, feel free to learn Scala. Or go find the definitive learning material for purely functional languages like Haskell or Lisp. It's not the most efficient way, but you will learn a lot, I promise!
