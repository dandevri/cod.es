# Chapter 5 - Scope Closure

We turn our attention to an incredibly important, but persistently elusive, almost mythological, part of the language: closure. 

## Enlightenment
For those who are somewhat experienced in JavaScript, but have perhaps never fully grasped the concept of closures, understanding closure can seem like a special nirvana that one must strive and sacrifice to attain.

**Closure is all around you in JavaScript, you just have to recognize and embrace it.** Closures happen as a result of writing code that relies on lexical scope. They just happen.  oh, closures are already occurring all over my code, I can finally see them now. 

## Nitty Gritty
> Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.

I think the most accurate way to explain bar() referencing a is via lexical scope look-up rules, and those rules are only (an important!) part of what closure is.

The function itself, and pass it as a value. In this case, we return the function object itself that bar references. bar() is executed, for sure. But in this case, it's executed outside of its declared lexical scope.

But the "magic" of closures does not let this happen. That inner scope is in fact still "in use", and thus does not go away. Who's using it? The function bar() itself.

**bar() still has a reference to that scope, and that reference is called closure.**

The function is being invoked well outside of its author-time lexical scope. Closure lets the function continue to access the lexical scope it was defined in at author-time.

Whatever facility we use to transport an inner function outside of its lexical scope, it will maintain a scope reference to where it was originally declared, and wherever we execute it, that closure will be exercised.

## Now I can See
Essentially whenever and wherever you treat functions (which access their own respective lexical scopes) as first-class values and pass them around, you are likely to see those functions exercising closure. When you pass in a callback function, get ready to sling some closure around!

## Loops + Closure
Linters often complain when you put functions inside of loops, because the mistakes of not understanding closure are so common among developers. 

All 5 of those functions, though they are defined separately in each loop iteration, all are closed over the same shared global scope,

It's not enough to have a scope to close over if that scope is empty. Look closely. Our IIFE is just an empty do-nothing scope. 

### Block Scoping revisited
In other words, we actually needed a per-iteration block scope. It essentially turns a block into a scope that we can close over. 

There's a special behavior defined for let declarations used in the head of a for-loop. This behavior says that the variable will be declared not just once for the loop, but each iteration

Block scoping and closure working hand-in-hand.

## Modules
This is the pattern in JavaScript we call module. The most common way of implementing the module pattern is often called "Revealing Module", and it's the variation we present here.

An object with a function property on it alone is not really a module. An object which is returned from a function invocation which only has data properties on it and no closured functions is not really a module, in the observable sense.

### Future modules
ES6 adds first-class syntax support for the concept of modules. When loaded via the module system, ES6 treats a file as a separate module. Each module can both import other modules or specific API members, as well export their own public API members.

The browsers/engines have a default "module loader" (which is overridable, but that's well-beyond our discussion here) which synchronously loads a module file when it's imported.

## Review
Closure seems to the un-enlightened like a mystical world set apart inside of JavaScript which only the few bravest souls can reach. But it's actually just a standard and almost obvious fact of how we write code in a lexically scoped environment, where functions are values and can be passed around at will.

> Closure is when a function can remember and access its lexical scope even when it's invoked outside its lexical scope.