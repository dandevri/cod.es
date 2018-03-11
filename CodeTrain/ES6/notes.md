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

## 16.8
Filter gets a function as argument. That callback function recieves each value of the area. If it's true it will keep it.

You can also filter out 'falsy' values. (such as undefined)

## 16.9
Sort filters the original array. It doesn't create a new array. JS only knows some default sort function. If you want to sort something yourself, you need to write your own compare function.

## 16.10
*Skipped*

## 6.2
Object oriented programming with classes. Functional programming are mostly based on functions, which are the core part of JavaScript.
Each part is a seperate object and you want to create multiple of it. You make your code resuable.

* Encapsulation; data and functionality into an object
* Class / template / blueprint; new block of code that is encapsulated.

`new` keyword creates the object. 

* class is cookiecutter
* object itself is a instance

The new keyword calls a function but it's a special kind of function. It's a function to construct an object. Every class needs a constructor. It's the setup.

This keyword is a reference to the current object. You don't have to specify the funnction keyword inside class.

## 6.3
You want to give arguments to the created instance.