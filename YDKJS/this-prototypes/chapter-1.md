# Chapter 1

It's a special identifier keyword that's automatically defined in the scope of every function, but what exactly it refers to bedevils even seasoned JavaScript developers. JavaScript's this mechanism isn't actually that advanced, but developers often paraphrase that quote in their own mind by inserting "complex" or "confusing".

## Why This
Instead of relying on this, you could have explicitly passed in a context object. However, the this mechanism provides a more elegant way of implicitly "passing along" an object reference, leading to cleaner API design and easier re-use. The more complex your usage pattern is, the more clearly you'll see that passing context around as an explicit parameter is often messier than passing around a this context.

## Confusions
*first we must dispel some misconceptions about how it doesn't actually work.*

### Itself
**The first common temptation is to assume this refers to the function itself.** But for just a moment, we'll explore that pattern, to illustrate how this doesn't let a function get a reference to itself like we might have assumed.

While it is true that this approach "solves" the problem, unfortunately it simply ignores the real problem -- lack of understanding what this means and how it works -- and instead falls back to the comfort zone of a more familiar mechanism: lexical scope.

> But constantly guessing at how to use this, and usually being wrong, is not a good reason to retreat back to lexical scope and never learn why this eludes you.

Instead of avoiding this, we embrace it. We'll explain in a little bit how such techniques work much more completely, so don't worry if you're still a bit confused!

### Its Scope
**The next most common misconception about the meaning of this is that it somehow refers to the function's scope.** To be clear, this does not, in any way, refer to a function's lexical scope. No such bridge is possible. You cannot use a this reference to look something up in a lexical scope. It is not possible.

## What's This
We said earlier that this is not an author-time binding but a runtime binding. It is contextual based on the conditions of the function's invocation.

When a function is invoked, an activation record, otherwise known as an execution context, is created. One of the properties of this record is the this reference which will be used for the duration of that function's execution.

## Review
this is actually a binding that is made when a function is invoked, and what it references is determined entirely by the call-site where the function is called.