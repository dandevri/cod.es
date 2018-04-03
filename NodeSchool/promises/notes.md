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