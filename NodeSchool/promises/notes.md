# Promises

## Warm Up
In its most basic terms, a promise is an object that defines a method called then. The promise object represents a value that may be available some time in the future. It greatly simplifies asynchronous logic in JavaScript.

## Fulfilling a Promise
Promises have an important internal property: its state.
* fulfilled
* rejected
* pending; state between

Resolved can be either fulfilled or rejected.

## Rejecting
When a promise is rejected, this is typically (though not always) used to indicate that a value was not successfully obtained by the promise.

## To reject or not to Reject
The ES2015 spec states that a promise, once fullfilled or rejected, may not change states for the rest of its lifetime.
Callback-style code usually requires a callback function to be invoked somewhere in the body of the function that it was passed to.

After the 'then' catch you can call both functions.

## Always Async
Promises must not fire their resolution/rejection function on the same turn of the event loop that they are created on. Functions passed to the then method of a promise will be called on the next turn of the event loop. This shows you that despite the promise being resolved synchronously, the provided function is not executed until the next turn of the event loop.

## Shortcuts
You can use second parameter on the '.then' function. Sometimes you only want to handle the rejection and not success. Easier way to achieve this is to use '.catch'. You can then also use '.resolve' and '.reject.

## Promise after Promise
Promises allow you to return another promise, in the then function callbacks. Chain promises together.

## Values and Promises
You don't have to return a promise. Your handlers will wrap your return values in promises even if they are obtained synchronously.

## Throw an Error
One of the tremendous strengths of promises is that they handle errors in a manner similar to synchronous code. You can capture errors thrown inside a function, it will be handled by the next available 'rejection' handler.

## An important rule
Promises are designed to emulate synchronous control flows. If any expression throws an exception, all subsequent
expressions will not be executed and the catch block will catch and handle it. A promise can never resolve more than once.

## Multiple promises
When doing asynchronous programming you will often want to perform multiple operations in parallel.