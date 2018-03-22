# Functional Programming in JavaScript

## 1 - Higher Order Functions
Functional programming wil make you more secure with programming and be a overall better developer.
Easier to read, more reusable.

'Functions are values'. You can pass it around like any other value.

composition; compose small function into bigger function
When we write software in small simple functions they compose together.

Functions you send into other functions are callback functions. Callback function can thus be stored in variable.

## 2 - Map
Map always return the full length of the array but then transformed.
Arrow functions; shorter syntax for functions. Mostly used in callbacks.

## 3 - Reduce basics
List transformation, they are pretty specific. Reduce can be useful for more tranforms.
Reduce is multi-tool.

## 4 - Reduce advanced
Strings and other data types are basically just bytes. You need to transform it; use character encoding. Most common is utf-8.

## 5 - Closures
Functions are also closures. The function body has access to variables that are defines outside the functions scope.
the function will remember the outer context.
callbacks do have access to the variables inside the outer function.
Closures is one of the concepts that are really important to JS. Have to use alot in your own code.

## 6 - Currying
When a function doesn't take all it's arguments upfront. The feeling of confusion means that you are learning. It's basically a chain of function returns.
Function can pass through the application. You can store each seperate function in a variable.
Every functional library most of the time can make a function curry.

## 7 - Recursion
Recursion; when a function calls itself until it doesn't.
Call stack; stack of function calls the code made. ES6 removed the limit. Tail call optimization.
Simple example of recursion is a countdown. The function calls itself until return condition.

Everytime you do a loop, you can use recursion instead. Doesn't work the other way around.
Don't start coding to early, take the time to see the problem.

## 8 - Promises
When this thing is done call this code. (callbacks)
Promises are more composable as promises. A promise returns not the value itself.
Money analogy; banks has the promise of lending you money and then you can go to people to buy a house.
Promise gets resolve and reject as arguments. These are functions aswell.
Promise.all will in turn return a new promise.

Promises are just like callback, they handle async code. Promises are more powerful then callbacks because they compose.

## 9 - Functors
Functors; map and filters are functors for example.
You want to handle more types of arguments. e.g. an array or strings
Functor family.
Functor; a function that when given a value and a function will unwrap the value into it's part, feed those parts into the function and takes the return value in a structured form.
