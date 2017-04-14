---
title: Array Methods
author: Corrado Canepari
excerpt: Calling methods on arrays
categories: HelloWorld
layout: post
date: 2017-04-14
---

# Cool array operations

---

As we said in an earlier article, arrays are the most basic and widely used data structure in JavaScript, and this makes it indispensable for us to be familiar with all the methods you can call on them.

Let's start with one example we used in the previous article:

## The forEach method

---

The forEach method loops over all the elements of an array, and passes them as arguments to a function:

<div class="multiline">
<pre>
let arr = [1, 2, 'Banana', 4]

arr.forEach(element => console.log(element))
</pre>
</div>

This is really similar to writing a for loop, but it is way shorter.

## The push method

---

This is probably one of the most basic array methods: all it does is it adds an element to an existing array:

<div class="multiline">
<pre>
let arr = [1, 2, 'Banana']

arr.push(4)

console.log(arr) // [1, 2 'Banana', 4]
</pre>
</div>

## The splice method

---

This method is the complete opposite of the `push` method: it removes elements from ann array instead of adding them:

<div class="multiline">
<pre>
let arr = [1, 2, 3, 4, 5]
arr.splice(0, 3)
</pre>
</div>


The first argument represents the position from where JavaScript starts removing elements, and the second one the number of numbers to remove.

The splice method can also add values to an array in a certain position:

<div class="multiline">
<pre>
let arr = [1, 2, 3, 4]

arr.splice(2, 1, 'Banana')
</pre>
</div>

In this case array will be equal to `[1, 2, 'Banana', 4]`


## The concat method

---

This method concatenates two array together:

<div class="multiline">
<pre>
let arr1 = [1, 2]
let arr2 = ['Banana', 4]

let new_arr = arr1.concat(arr2)
</pre>
</div>

new_arr will be equal to `[1, 2, 'Banana', 4]`

## The join method

---

The join method joins all the elements of the array into a string. It takes a parameter, which will be the separator:

<div class="multiline">
<pre>
let arr = ['I', 'am', 'a', 'String']

let string = arr.join(' ')
</pre>
</div>

In this case the `string` variable will be equal to 'I am a String'.

## The reverse method

---

The reverse method will simply reverse the order of all the elements of an array:

<div class="multiline">
<pre>
let arr = [1, 2, 'Banana', 4]

let reversedArr = arr.reverse
</pre>
</div>

In this case, reversedArr will be equal to `[4, 'Banana', 2, 1]`

## More complex methods

From now on we'll be talking about more complex methods, which accept another function as an argument. Let's start off with one of the most useful ones:

## The map method

---

The map method loops over each element of an array and `maps` it to a different value:

<div class="multiline">
<pre>
let array = [1, 2, 3, 4]

array.map(el => el + 1)
</pre>
</div>

This block of code increments by one the value of each element of the array. 

An important note is that, since this function takes another function which a parameter, you can do stuff like this:

<div class="multiline">
<pre>
let arr = [4, 9, 16]

arr.map(Math.sqrt)
</pre>
</div>

The Math.sqrt() function takes a number as an argument and returns its square root, so it is a valid argument for map.

## The filter function

---

The filter function filters out all the elements of an array which do not satisfy a certain condition, expressed by a function which returns a boolean value:

<div class="multiline">
<pre>
let array = [1, 2, 3, 4, 5, 6]

let newArray = array.filter(el => el > 3)
</pre>
</div>

In this case the newArray variable will be equal to `[4, 5, 6]`

## The reduce function

---

The reduce function is the most versatile function that can be called on an array: it performs any operation on its members.

Here's an example: 

<div class="multiline">
<pre>
let arr = [1, 2, 3]

let sum = arr.reduce(((prev, element) => prev + element), 0)
</pre>
</div>

This is the most complicated method for arrays, so you'll want to learn this properly, since it's also the most useful:

The first argument is the function that gets executed, and it has two parameters: the first one is the value returned last time, and the second one is the current value of the array you are looping over. The second argument of the `Array.reduce()` function is the initial value of the accumulator.

This is great! We now know everything there is to know about arrays. Next up, we're going to talk about the DOM and get to the real fun stuff!
Stay tuned for that!