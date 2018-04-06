## Run Stop Run
Generators are functions which can be stopped while in process and run later as many times as you want. 
The yield expression - stop the generator and send out woo string. This pauses the state of the generator until we call next

## Generator Iterator
The main thing we need to know is generators are iterators. They are just a wrapper of an iterator object. They instead return an iteratio object with a few methods.

## Delegating Generators
We can delegate iteration control from our generator to another one.

## Catch Errors
The best thing generators bring to us is synchronicity. The code inside generator functions is synchronous, even if we iterate generators asynchronously.

## Look Sync do Async
Generators can pause their execution while async calls complete.