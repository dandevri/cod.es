# Chapter 2 - Lexical Scope
There are two models of how scope work. Most common is lexical scope other is dynamic scope.

## Lex-Time
The lexing process examines a string of source code characters and assigns semantic meaning to the tokens as a result of some stateful parsing.

Lexical scope is based on where variables and blocks of scope are authored. Set in stone by the time the lexer processes your code. Think of scopes as bubbles. 

Scope bubbles are defined by where the blocks of scope are written. Each function creates a new bubble of scope.

### Look ups
The structure and relative placement of these scope bubbles fully explains to the Engine all the places it needs to look to find an identifier.

Scope look-up stops once it finds the first match. The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier).

Global variables are also automatically properties of the global object (window in browsers, etc.) No matter where a function is invoked from, or even how it is invoked, its lexical scope is only defined by where the function was declared.

## Cheating Lexical
If lexical scope is defined only by where a function is declared, which is entirely an author-time decision, how could there possibly be a way to "modify" (aka, cheat) lexical scope at run-time? Cheating lexical scope leads to poorer performance.

While the eval(..) function can modify existing lexical scope if it takes a string of code with one or more declarations in it, the with statement actually creates a whole new lexical scope out of thin air, from the object you pass to it.

### Performance
Both eval(..) and with cheat the otherwise author-time defined lexical scope by modifying or creating new lexical scope at runtime.

The JavaScript Engine has a number of performance optimizations that it performs during the compilation phase.

No matter how smart the Engine may be about trying to limit the side-effects of these pessimistic assumptions, there's no getting around the fact that without the optimizations, code runs slower.

## Review
Lexical scope means that scope is defined by author-time decisions of where functions are declared. The lexing phase of compilation is essentially able to know where and how all identifiers are declared, and thus predict how they will be looked-up during execution.