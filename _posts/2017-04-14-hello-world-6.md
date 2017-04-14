---
title: DOM manipulation
author: Corrado Canepari
excerpt: JavaScript and the DOM
categories: HelloWorld
layout: post
date: 2017-04-14
---

# The Document Object Model

---

Ah, the DOM! Source of great entertainment for JavaScript programmers! Let's get started...

Let's talk about the Dom. What is it?

>The DOM (Document Object Model), is nothing more then the HTML document in which your script is included.

This means that, if until now you've just been reading, from now on, to follow this course better, you should create your own HTML file. Here is what the index.html file should look like:

<div class="multiline">
<pre>
&lt;html>
  &lt;head>
    &lt;script src="path/to/script.js">&lt;/script>
  &lt;/head>
  
  &lt;body>

  &lt;/body>
&lt;/html>
</pre>
</div>

At this point, we'll be able to acces the `document` from our script:

<div class="multiline">
<pre>
window.addEventListener('load', function() {
	console.log(document)
})
</pre>
</div>

What on Earth is going on with this? Well, since we cannot acces the document until the page as fully loaded, we must first add an **Event Listener** so that document is not `null`. Another alternative is moving the script tag to the bottom of the HTML document.

At this point, we can easily access the document object, so we can do cooler stuff! Here is an example:

<p data-height="265" data-theme-id="light" data-slug-hash="apYdXR" data-default-tab="js" data-user="CorradoCanepari" data-embed-version="2" data-pen-title="Hello world" class="codepen">See the Pen <a href="http://codepen.io/CorradoCanepari/pen/apYdXR/">Hello world</a> by Corrado Canepari (<a href="http://codepen.io/CorradoCanepari">@CorradoCanepari</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Let's look at the first line: here is our first DOM manipulation method: [document.createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement).

What this does is it creates an instance of an HTML tag, which you can then modify before finally appending it to the document, with the command 
`document.body.appendChild(element)`

Let's look at some more cool stuff... What if we wanted elements to interact in some way with the user? Luckily we can use [EventListeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). We can do it through the `element.addEventListener` function. Here is an example:

<p data-height="295" data-theme-id="light" data-slug-hash="xdbQRm" data-default-tab="js,result" data-user="CorradoCanepari" data-embed-version="2" data-pen-title="xdbQRm" class="codepen">See the Pen <a href="http://codepen.io/CorradoCanepari/pen/xdbQRm/">xdbQRm</a> by Corrado Canepari (<a href="http://codepen.io/CorradoCanepari">@CorradoCanepari</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Great! So this is how event listeners basically work: you call the `addEventListener()` function on a DOM element, and specify what event you want to listen for (in our case, `click`) as the first argument, and what you want to do when that happens as a function in your second argument. This function takes an argument, `e`, which is the event object. In this case we need to call the function `e.preventDefault()`, since JavaScript automatically reloads a page when a `button` html element is clicked.

This is all well and good, but what if we want to acces something that is already in the DOM? This is when [`document.getElementById()`](https://developer.mozilla.org/it/docs/Web/API/Document/getElementById) comes to the rescue!

<p data-height="265" data-theme-id="light" data-slug-hash="vmEQWO" data-default-tab="js,result" data-user="CorradoCanepari" data-embed-version="2" data-pen-title="vmEQWO" class="codepen">See the Pen <a href="http://codepen.io/CorradoCanepari/pen/vmEQWO/">vmEQWO</a> by Corrado Canepari (<a href="http://codepen.io/CorradoCanepari">@CorradoCanepari</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

So we can now see that we are not creating a new element, but we are referencing one that already exists in the document.

What if we want to change an element's class? Well, there is a function for that, too!

<p data-height="450" data-theme-id="light" data-slug-hash="EZWRxL" data-default-tab="js,result" data-user="CorradoCanepari" data-embed-version="2" data-pen-title="Jason Pen" class="codepen">See the Pen <a href="http://codepen.io/CorradoCanepari/pen/EZWRxL/">Jason Pen</a> by Corrado Canepari (<a href="http://codepen.io/CorradoCanepari">@CorradoCanepari</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

This is great! You just learnt basic DOM manipulation and, since you can already use Arrays, functions and variables, in the next article we-ll be building a simple Tic Tac Toe game! Until then, have fun with what you know!