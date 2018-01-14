## Overview

Coverage of commonly-encountered types of code blocks. (Conditional statements, loops, functions)

## Making decisions in your code
Different actions according to inputs. We as humans make decisions all the time. Conditional statements allow us to represent decisions in JavaScript.

* An if else statement is also valid if you don't include the else keyword. The second code block is always run. Regardless of the condition. Most of the time you want to run the code block or the other.

Conditional statements always test boolean values.

> Any value that is not false returns true when tested.

You can nest if .. else if you want. 

If you want to test multiple conditions without nesting 'logical' operators can be used.

Not logical operator can be used to negate an expression. (It reverses the if / else aswell)

Any other value then zero evaluaties to true.

If else can be good for a couple of choices and when you have complex conditions. Switch statement are good for single values as input and many choices.

Ternary operators are good for just true or false returns. It requires less syntax then if else.

## Looping Code

> Programming languages are very useful for rapidly completing repetitive tasks.

Programming loops are all to do with doing the same thing over and over again — which is termed iteration in programming speak.

* Counter; initialized value
* Exit condition: when the loop stops
* Iterator; increments the counter

Loops are great for doing the same thing over and over again. Rapidly completing repetitive tasks.

**For loops:**
* Initializer: variable set to number (counter variable)
* Exit condition: expressions with comparison operator.
* Final expression: Run each time loop has gone through full iteration. (Increment counter variable)

If the loop doesn't reach the exit condition then you get an infinite loop.

* break keyword exits the loop
* continue exits the next interation of the loop

**While:**
Many other types of loops. They both have the same three items as a for loop.

**Do while:**
Exit condition comes after everything. The code incise the curly braces is always run once before the check is made.

**Which loop type should you use?**
They are all largely interchangeable. It's personal preference. For loop is the most common used.

## Functions

Store a piece of code that does a single task inside a fedined block. You can then call that code whenever you need it.

> Any time you use parentheses () you are making use of a function. (except built-in structures such as conditions or loops)

You use functions all the time even if you don't declare them yourself. These are the built-in browser functions. (methods)

Many of the functions you are calling when you invoke (run) a built in browser function isn't even JavaScript. Built-in browser functions are not part of the core JavaScript language.

**Functions versus methods:**
Technically speaking, built in browser functions are methods. 
* Methods are functions inside objects. Variables are called properties.

**Custom functions**  
Custom functions are the ones defined in your code, not inside the browser.

**Invoking functions**  
You need to run (invoke) the function after its de clared.

**Anonymous functions**  
You can create a function that doesn't have a name. It won't do anything on its own. 

Custom named functions are mostly the best way to declare functions.

You will mainly use anonymous functions to just run a load of code in response to an event firing.

**Parameters**  
Functions can require parameters to be specified when you invoke them. Sometimes they are optional.

When you call the functions these 'placeholders' are called arguments.

**Scope**
> When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from inside other functions or from code outside the functions.

> The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

Scoping rules do not apply to loop and conditional blocks.

**Functions inside functions**
You can call a function inside another function. It makes the code often more readable. Just be aware of scope.

## Build your own function

*Interactive example*

## Function return values
Some functions don't return a significant value after completion.

> Return values are just what they sound like — values returned by the function when it completes.

Generally, a return value is used where the function is an intermediate step in a calculation of some kind. You want to get to a final result, which involves some values. 

## Introduction to events

