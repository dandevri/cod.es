# Chapter 4 - Hoisting

Both function scope and block scope behave by the same rules in this regard: any variable declared within a scope is attached to that scope. But there's a subtle detail of how scope attachment works with declarations that appear in various locations within a scope, and that detail is what we will examine here.

## Chicken or the Egg?
There's a temptation to think that all of the code you see in a JavaScript program is interpreted line-by-line, top-down in order, as the program executes. While that is substantially true, there's one part of that assumption which can lead to incorrect thinking about your program.

So, what's going on here? It would appear we have a chicken-and-the-egg question. Which comes first, the declaration ("egg"), or the assignment ("chicken")?

## The Compiler Stikes Again
Recall that the Engine actually will compile your JavaScript code before it interprets it. So, the best way to think about things is that all declarations, both variables and functions, are processed first, before any part of your code is executed.
`var a = 2`

The declaration, is processed during the compilation phase. The second statement, the assignment, is left in place for the execution phase.

So, one way of thinking, sort of metaphorically, about this process, is that variable and function declarations are "moved" from where they appear in the flow of the code to the top of the code. This gives rise to the name "Hoisting".

> In other words, the egg (declaration) comes before the chicken (assignment).

Only the declarations themselves are hoisted, while any assignments or other executable logic are left in place.

It's also important to note that hoisting is per-scope.

Function declarations are hoisted, as we just saw. But function expressions are not.

## Functions first
Functions are hoisted first, and then variables. While multiple/duplicate var declarations are effectively ignored, subsequent function declarations do override previous ones.

## Review
All declarations in a scope, regardless of where they appear, are processed first before the code itself is executed. You can visualize this as declarations (variables and functions) being "moved" to the top of their respective scopes, which we call "hoisting".

*Declarations themselves are hoisted, but assignments, even assignments of function expressions, are not hoisted.*