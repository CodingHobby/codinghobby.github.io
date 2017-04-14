---
title: For and While
author: Corrado Canepari
excerpt: JavaScript loops
categories: HelloWorld
layout: post
date: 2017-04-14
---

# JavaScript loops

---

After an epic journey through variables and arrays, you finally got to the fun part of JavaScript!

Today we're going to be talking about one of the most essential parts of JavaScript: loops.

Loops allow us to repeat the same sequence of steps a definite or indefinite number of times in a row.

There are two main loop types, in JavaScript: the for loop and the while loop.

## For loop

---

The for loop repeats a sequence of steps a definite number of times. Here's how the syntax for for loops looks:

<div class="multiline">
<pre>
for(let i = 0; i < 5; i++) {
	console.log(i)
}
</pre>
</div>

This simple loop prints out all the numbers from 0 to 4.

Let's analyse the first line of the loop, which also happens to be the most important one:

`for(let i = 0; i < 5; i++)`. What does this mean?

Well, we're declaring a variable, i, and we're giving it a value of 0. We're then saying that we want the loop to repeat itself if the second part is true (`i < 5`), and we're then saying that, each time the loop runs, we want to implement i's value by 1 (this syntax will be seen a lot: the `++` after the variable name is just shorthand for `i = i + 1`).

At this point, the code between the two curly braces will be run a number of times that varies based on the before mentioned conditions.

But this is not all we can do with for loops: in facts, we can even iterate over arrays! Here's an example:

<div class="multiline">
<pre>
let arr = [1, 2, 'Banana', 3]

for(let i = 0; i < arr.length; i++) {
	console.log(arr[i])
}
</pre>
</div>

This code will output `1 2 Banana 3`.

## While loop

---

The while loop is also very important, as it allows for an indefinite number of repetitions:

<div class="multiline">
<pre>
while(USER_INPUT !== 'exit') {
	console.log('Logged in')
}
</pre>
</div>

In this case, we are reading an immaginary user input and, as long as it is not equal to "exit", we're printing `Logged in` to the console.

But we can also use while loops with a definite number of repetions, just like this: 

<div class="multiline">
<pre>
let i = 0
while(i < 5) {
	console.log(i)
	i++
}
</pre>
</div>

This is really similar to the for loop: in facts we first declare a variable with initial value of 0, we then set a condition which is necessary for the loop to repeat itself, and we then have the increment of the variable's value by one.

## Which one is better?

---

A classic beginner's question is "Which one of the two is better?" or "Which one should I use?".

The answer to both of those questions is: "It depends on what you are trying to do".

While both loops can be used for everything, this does not mean that they have the same performance in every situation. For example, using a while loop to loop over an array is just wasting precious lines of code! The general rule here is

> Do I know how many times I want this to happen?

If the answer is yes, then use a for loop. Otherwise, use the while loop. There are other ways to loop over certain data structures (such as `Array.prototype.forEach`), but we'll look at them in later articles. Until then, there are lots of mathematical and geometrical problems that can be solved just with the knowledge you have now, so get working!
