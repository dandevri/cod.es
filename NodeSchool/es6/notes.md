## Template
Template literals allow for interpolation.

## Arrow functions
You can put any expression on the right-hand side of the =>, and it will become the return value. 

Arrow functions help to make the confounding issue of this less confounding. Arrow functions lexically bind the value of this. What you need to know is that the value of this in arrow functions is the same as it was in the enclosing scope.e

## Destructuring
Extract data from arrays or objects into distinct variables.

## Spread
ES6 provides two closely related concepts, rest and spread.
An example of a variadic function; function you can call with any number of arguments.
In ES6, you can use the ...args syntax to "spread" an array out when calling such a function.

## Rest
Rest parameters are used when you want to write a function that accepts a variadic number of arguments, but acts on them as if they were an array.

## Default Arguments 1
When you call the function without arguments in those positions, the default ones are applied instead.

## Default Arguments 2
Default arguments can be expressions. It can even take argugments from the function.

## Tagged template strings
Placing a function name, like fn, before the templatestring. Straightforward is automatic escaping of any interpolated variables.