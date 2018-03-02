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