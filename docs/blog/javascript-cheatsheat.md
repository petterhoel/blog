---
title: "JavaScript cheatsheet 🤩"
date: 2020-01-12
description: Cheat sheet for some JavaScript tricks
author: Petter
---
# JavaScript cheatsheet 🤩

These are stolen goodies 😏
`examples.forEach(example => example.creditSource())` 😇

## In keyword
Check if property exists with `in` keyword.
``` js
const jsMessage = {
	timestamp: 1579675700173,
	text: 'Truthy and falsy never fooled anyone 😇. Best concept ever.'
}
const communityMessage = {
	timestamp: 1579675709173,
	text: ''
}
if (text in communityMessage && !communityMessage.text) {
	console.info('Community does not agree')
}

```

Example with valueless data attributes. Here cancel would be `''` and falsy, so we wanna check if property is there to find out what kind of button we are dealing with.
``` html
<button ...>Go ahead</button>
<button data-cancel ...>Abort mission</button>
```
``` js
const buttons = document.querySelector('button');
buttons.forEach(button => button.addEventListener('click', handleClick));

function handleClick(event) {
	const { dataset } = event.currentTarget;
	if (cancel in dataset) {  // <----=====<<<<< here
		console.log('This is a cancel button')
	}
}
```
Source: Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/)


## Only run function for true in ternary
``` js
/*
How to run a function using a ternary expression
when you dont have anything to run for the else clause.
*/
const isAdmin = true;
isAdmin ? showAdminBar() : null;
```
Source: Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/)


## Destructure list elements
``` js
const inventory = {
	apples: 20,
	oranges: 10,
};

const entries = Object.entries(inventory);

// access item in list
// [firstItem, secondItem] etc
entries.forEach(([fruit, quantity]) => console.log(fruit, quantity))

// logs the following
// apples 20
// oranges 10
```
Source: Wes Bos [Beginner JavaScript](https://beginnerjavascript.com/)