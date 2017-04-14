---
title: Functions
author: Corrado Canepari
excerpt: Writing methods in JavaScript
categories: HelloWorld
layout: post
date: 2017-04-14
---

# Methods

---

We see the world "function" tossed around a lot, and many beginner programmers still have no idea what a function actually is.

>A **function** is the description of steps that produces a certain results. Function can have parameters, and they can return some value.

This definition is really close to the definition of an Algorithm, which happens to be another word that gets tossed around a lot:

>An **algorithm** is the description of the sequence of steps to produce an output given a certain input.

The difference is that an algorithm is something that computes an input to produce an output, while a function does not necesserily take an input, and it does not necessirily produce an output.

In JavaScript functions are kind of a big deal, since they allow for smarter programming, but they are also used with **callbacks**, which is another argument for another time.

## Syntax

---

This is the general syntax for declaring a function:

<div class="multiline">
<pre>
function myFunc(input) {
	return output
}
</pre>
</div>

But ES6 introduced another way to write function, called an arrow function: 

<div class="multiline">
<pre>
let myFunc = (input) => {
	return output
}
</pre>
</div>

But why would anyone want to use it? It's not like it's shorter or anything... Well, check this out, then:

<div class="multiline"><pre>let myFunc = input => output</pre></div>

Say whaaat? Yes, that is exactly the same thing. With arrow functions, if you only have a line of code, you can avoid both the curly braces and the return statement, since JavaScript will automatically assume that you want to return the value after the arrow.

## Calling functions

---

Ok, so we have a function like this: `let sum = (a, b) => a + b`. How do we call it?

It's real easy:

<div class="multiline">
<pre>
let sum = (a, b) => a + b

let seven = sum(5, 2)

console.log(seven)
</pre>
</div>

What we want to do is write the function's name, followed by the paramters of the function inside of parentheses. If we assign the value of a function call to variable, it will be the value that the function `returns` to be assigned (in this case, 7)

## Higher order functions

---

Ok, so we said functions are really important in JavaScript, but why? Well, we already mentioned Callbacks, although we won't be explainig them right now, but there's another really cool thing you can do with functions, and that is passing them as arguments to other functions. FUNCEPTION!!

Let's make an example: there is a method you can call in arrays, which basically acts as a for loop:

<div class="multiline">
<pre>
let arr = [1, 2, 'Banana', 4]

arr.forEach(element => console.log(element))
</pre>
</div>

This basically console.log's each element in the array. What is that thing, inside the parentheses? Well, it's a function! The `forEach` function expects another function as an argument, and that function expects a single element of the array as an argument: this function will, therefore, console.log out all of the elements of the array.

We'll talk more about array methods in a later article.

So, to summarize: functions are procedure that can be called on determined sets of arguments, and they can return another value. They can also be used as argouments for higher order function, in which case they may need to be passed an argoument, and they can sometimes be required to have a return value.