---
title: "JavaScript cheatsheet 🤩"
date: 2020-01-12
description: Cheat sheet for some JavaScript tricks
author: Petter
---
# JavaScript cheatsheet 🤩

These are stolen goodies 😏
`examples.forEach(example => example.creditSource())` 😇

## True only function in ternary
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