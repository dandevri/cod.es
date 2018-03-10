# The Coding Train Topics of ES6

## 16.1

In 2015 ES6 was released. Ecmascript 2015; what's the syntax of the JavaScript language and how should it work? Most browsers will support ES6 features natively.

* Var uses function scope
* Let and const use block scope

Variables are hoisted (hoisting). With var the variables are hoisted to the top of the function.

The hoisting process makes code with var prone to error. You can't just replace var with let. There is a technical difference.

## 16.2
const is only an option to help with the efficieny and reduce memory while the program is running. Use const with values that never going to change, so it can handle memory better.

You can't update / assign a constant variable.

* When you make an object a constant you can still manipulate the properties.

Use const with function declaration name. Different syntax.

## 16.3
Most of the time you will use arrow functions (fat arrow) to make anonymous functions. (Unnamed, inlined)

this keyword is crucial. With an arrow function you don't easily lose the value of the keyword and the context. It can be hard for the reader or beginners to understand what implicit functions fat arrows make. 

Normally you would make a function and use it as a callback. You can call it an inline function but if it's over multiple lines that's not really descriptive.

Callback function remembers the correct context with arrow functions.

## 16.4
for of loop

You often use a for loop with the length of the array. With for of you iteratie over everything in the index.

## 16.5
Higher order function. Object-oriented programming is very common in other language environments. But there is also functional programming in the JavaScript community.

Higher order function is a function that has levels of function. (as a callback or returns fucntion) For example higher order functions for arrays.

* Put function as argument it's called a callback
* or return a function (function factory)

## 16.6
Not all methods are higher order functions. Push for example, it doesn't take another function as argument.

* map; pass a function that is applied to every element of the array

Most of these higher order functions return a new array. Doesn't change the original array.

## 16.7
Idea of reduce; you give it something that persist over time and act over it.