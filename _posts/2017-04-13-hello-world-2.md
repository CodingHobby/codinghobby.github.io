---
date: 2017-4-13
title: First Baby Steps
excerpt: Welcome to JavaScript
categories: JavaScript
author: Corrado Canepari
layout: post
---

# Welcome to JS

---

Wow! You're finally ready to learn some programming! Buckle up, but remember:

> Patience, young grasshopper!

Before learning to USE Javascript, we have to understand what it IS.

# What is Javascript?

---

As most of you will already know, JavaScript is a programming language. But what type of language is it?

Well, it's a **weakly typed, interpreted scripting language**.

It was also originally made to be a **functional** programming language (to discover how JavaScript came to be check out [this article](https://codinghobby.github.io/history/2017/03/25/js-history.html))

Most parts of this phrase are well explained in [this article](https://codinghobby.github.io/helloworld/2017/03/23/hw-1.html) but, just as a refresher, that phrase means that JavaScript is a language in which data is ported 
from one type to another based on what you need to do. The scripts you create are not compiled into another lower level language, but they are directly intrepreted by either your Browser or Node, depending on which one you are using.

And, finally, what is probably the hardest definition, functional. In [Wikipedia](https://en.wikipedia.org/wiki/Functional_programming)'s words:

> In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation 
> as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements.

Now that we've got that covered, let's dig into actual programming!


# Variables and data structures

---

A crucial part of programming is storing data. There are lots of different ways to do so: you can have SQL databases, NoSQL database et cetera, but the most basic way to is to use variables.

Variables are one of the most important things in programming: they allow for your application to be dynamic rather than, as we say, "hard coded".

You may not understand what I'm saying, so here's an example. Let's say we want our program to write "Hello World" to the screen. I'm going to use Pseudo-Code, which is often used to represent problems in a non-syntax specific way:

<div class="multiline"
<pre>say "Hello World"</pre>
</div>

Looks easy enough, right? Well, let's say that we want the user to be able to change the text through a text box. We could do this in two ways:

<div class="multiline">
<pre>
say INPUT_BOX_TEXT
say INPUT_BOX_TEXT
</pre>
</div> or

<div class="multiline">
<pre>
let INPUT = INPUT_BOX_TEXT

say INPUT
say INPUT
</pre>
</div>

This way, it looks like not assigning variables takes fewer time both to write and to execute but, in reality, it does not.
This is because we probably don't want to use that variable only in that place and, since we have the input value memorized, we no longer need to waste energy accessing the data through the input field.

But how do variables work in JavaScript?

It's really simple: all you have to do is state the name of the variable with the keyword `var` in front of it and assign it a value with the `=` operator. Here's an example:

<div class='multiline'>
<pre>
var myVariable = 0
</pre>
</div>

What this code says is, basically this: `I want there to be a variable called myVariable, and its value should be initialized to 0`.

You can have variables that store different data types: you can have `Numbers` (1), `Strings` ('This is a string') and `Booleans` (true or false)

Sometimes, though, variables just are not enough: this is where more complex data structures come in. The most simple example of a more complex data structure is an array.

Arrays are list of elements with a precise order, where `ARRAY index i` is the i-th elemnt of the array. When are arrays useful?

Let's say you had a list of greetings, and you wanted to print wach one of them (don't worry about the syntax, for now: we'll discuss it later)

<div class="multiline">
<pre>
let greetings = ["Hi", "Hello"]

say greetings[0]
say greetings[1]
</pre>
</div>

Note that array indexes start from 0, so the 1st index of an array will actually be its second element.

## Basic Syntax

---

For now we just used Pseudo-Code and, while it's really useful for elaborating solutions to problems, our browser won't just interpret it: this is where syntax comes in.

Syntax is the form in which a program is written, and each programming language has its own.

Let's start learning some basic Javascript Syntax, then! Let's start with `say`. Up to this point we've used a function called say, which, in our minds, prints something to the screen. The problem is that it does not exist in JavaScript. 

What does exist is a command to output something to our console, and that command is `console.log`. Let's try it out:

<div class='multiline'>
<pre>
console.log('Hello World')
</pre>
</div>

If you open up you browser's console, you should see "Hello World" printed out.

What about variables? Well, it's a bit more complicated: ES6 (EcmaScript 2015) introduced a few new ways of declaring variables: in ES5 you just had one keyword: `var`.

Now you also have another two keywords: `let` and `const`.

Personally I only usually use `let` and `const` since they have less problems with scoping (read all about it [here](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75))

`const` defines a variable which value you cannot modify: this comes in handy to avoid side effects from other functions, which may have acces to the global scope.

`let` defines a variable which is only valid for the current scope, which means it avoids name collisions and varius stuff that could give you a serious headache if you were to get it wrong.

Let's see some basic declarations:

<div class='multiline'>
<pre>
const MY_CONSTANT = 24
var myVar = 'Hello, there!'
let scopedVar = true
</pre>
</div>

You can see some strange stuff going on with how I format my variable names: it's convention to have constants named in uppercase with snake_casing, and variables in lowercase with camelCasing.

Let's go on to array syntax. Here is how you declare an array in JavaScript: 

<div class="multiline">
<pre>
let myArray = [1, 2, 3]
console.log(myArray[0])
</pre>
</div>

You just declare it as if it were a variable or a constant! After the equal sign you have to list all the comma separated values that will be in the array and enclose them in square brackets. Then, to acces its values, you just write the array's name, followed by the index you want to acces, enclosed in square brackets.

If you want to make an empty array, you can just leave the brackets empty.

## Basic Maths

---

Maths and calculations are a really big part of programming, expecially if you want to develop algorithms. Let's talk about mathematical operators in JavaScript:

<div class='multiline'>
<pre>
let sum = 4 + 2
let difference = 4 - 2
let product = 4 * 2
let division = 4 / 2
let modulus = 4 % 2
</pre>
</div>

They all seem pretty standard, except for the last one. That is the modulus operator, and it returns the remainder of a division (4 % 2 = 0).


Congratulations! Now you know how to output stuff to the console, create variables, constants, arrays and do basic maths! Have fun with this few concepts, you can make some pretty interesting stuff with them! Next time
we'll be talking about loops. Stay tuned for that!