# Chapter 3 - Function vs Block Scope

Scope consists of a series of "bubbles" that each act as a container or bucket, in which identifiers (variables, functions) are declared. These bubbles nest neatly inside each other, and this nesting is defined at author-time. But what exactly creates a bubble?

## Scope from Functions
JS has function based scope, no other structures create their own scope. Function scope encourages the idea that all variables belong to the function, and can be used and reused throughout the entirety of the function (and indeed, accessible even to nested scopes).

## Hiding in Plain Scope
In other words, you can "hide" variables and functions by enclosing them in the scope of a function.

*They tend to arise from the software design principle "Principle of Least Privilege".* This principle states that in the design of software, such as the API for a module/object, you should expose only what is minimally necessary, and "hide" everything else.

### Collision avoidance
Avoid unintended collision between two different identifiers with the same name but different intended usages. A particularly strong example of (likely) variable collision occurs in the global scope. Or use modules; Using these tools, no libraries ever add any identifiers to the global scope, but are instead required to have their identifier(s) be explicitly imported into another specific scope through usage of the dependency manager's various mechanisms.

## Functions as Scopes
While this technique "works", it is not necessarily very ideal.  Use iffe; Instead of treating the function as a standard declaration, the function is treated as a function-expression.

The easiest way to distinguish declaration vs. expression is the position of the word "function" in the statement (not just a line, but a distinct statement). If "function" is the very first thing in the statement, then it's a function declaration. Otherwise, it's a function expression.

### Anonymous vs named
You are probably most familiar with function expressions as callback parameters. *This is called an "anonymous function expression"* Function expressions can be anonymous, but function declarations cannot omit the name -- that would be illegal JS grammar.

* No usefuful display name so it's harder to debug.
* Needing to self-reference is when an event handler function wants to unbind itself after it fires.
* Anonymous functions omit a name that is often helpful in providing more readable/understandable code.

Inline function expressions are powerful and useful -- the question of anonymous vs. named doesn't detract from that. The best practice is to always name your function expressions.

### Invoking  Function Expressions
The first enclosing ( ) pair makes the function an expression, and the second () executes the function. Two forms of iffe; These two forms are identical in functionality. It's purely a stylistic choice which you prefer.

## Blocks as Scopes
While functions are the most common unit of scope, and certainly the most wide-spread of the design approaches in the majority of JS in circulation, other units of scope are possible. Block scope is a tool to extend the earlier "Principle of Least Privilege Exposure" [^note-leastprivilege] from hiding information in functions to hiding information in blocks of our code.

### let
If that were all we had, and it was for many, many years, then block scoping would not be terribly useful to the JavaScript developer.

The let keyword attaches the variable declaration to the scope of whatever block (commonly a { .. } pair) it's contained in. 
Using let to attach a variable to an existing block is somewhat implicit. It can confuse you if you're not paying close attention to which blocks have variables scoped to them, and are in the habit of moving blocks around, wrapping them in other blocks, etc., as you develop and evolve code.

However, declarations made with let will not hoist to the entire scope of the block they appear in. Such declarations will not observably "exist" in the block until the declaration statement. A particular case where let shines is in the for-loop case.

#### Garbage Collection
Another reason block-scoping is useful relates to closures and garbage collection to reclaim memory. Block-scoping can address this concern, making it clearer to the engine that it does not need to keep.

### Const
In addition to let, ES6 introduces const, which also creates a block-scoped variable, but whose value is fixed (constant). Any attempt to change that value at a later time results in an error.

## Review
Functions are the most common unit of scope in JavaScript. Variables and functions that are declared inside another function are essentially "hidden" from any of the enclosing "scopes", which is an intentional design principle of good software.

Though some seem to believe so, block scope should not be taken as an outright replacement of var function scope. Both functionalities co-exist, and developers can and should use both function-scope and block-scope techniques where respectively appropriate to produce better, more readable/maintainable code.