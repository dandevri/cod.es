# Appendix

## A
Lexical scope is the set of rules about how the Engine can look-up a variable and where it will find it. The key characteristic of lexical scope is that it is defined at author-time, when the code is written (assuming you don't cheat with eval() or with).

Dynamic scope, by contrast, doesn't concern itself with how and where functions and scopes are declared, but rather where they are called from. In other words, the scope chain is based on the call-stack, not the nesting of scopes in code.

The key contrast: lexical scope is write-time, whereas dynamic scope (and this!) are runtime. Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.

## B
The point is that tools can transpile ES6 code to work in pre-ES6 environments. You can write code using block-scoping, and benefit from such functionality, and let a build-step tool take care of producing code that will actually work when deployed.

Instead of implicitly hijacking an existing block, the let-statement creates an explicit block for its scope binding.

## C
The so-called "fat arrow" is often mentioned as a short-hand for the tediously verbose (sarcasm) function keyword.

The problem is the loss of this binding. 

The short explanation is that arrow-functions do not behave at all like normal functions when it comes to their this binding. They discard all the normal rules for this binding, and instead take on the this value of their immediate lexical enclosing scope, whatever it is.