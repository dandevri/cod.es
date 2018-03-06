# Chapter 
this is a binding made for each function invocation, based entirely on its call-site (how the function is called).

## Call-site
Call-site: the location in code where a function is called (not where it's declared). It's not always that easy, as certain coding patterns can obscure the true call-site.

What's important is to think about the call-stack (the stack of functions that have been called to get us to the current moment in execution). 

Another way of seeing the call-stack is using a debugger tool in your browser.

## Nothing but Rules
We turn our attention now to how the call-site determines where this will point during the execution of a function. You must inspect the call-site and determine which of 4 rules applies. 

### Default binding
Because in this case, the default binding for this applies to the function call, and so points this at the global object. If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.

Intentionally mixing strict mode and non-strict mode together in your own code is generally frowned upon. Your entire program should probably either be Strict or non-Strict.

### Implicit binding
Does the call-site have a context object, also referred to as an owning or containing object, though these alternate terms could be slightly misleading.

However, the call-site uses the obj context to reference the function, so you could say that the obj object "owns" or "contains" the function reference at the time the function is called.

One of the most common frustrations that this binding creates is when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the global object or undefined, depending on strict mode.

Either way the this is changed unexpectedly, you are not really in control of how your callback function reference will be executed, so you have no way (yet) of controlling the call-site to give your intended binding.

### Explicit binding
What if you want to force a function call to use a particular object for the this binding, without putting a property function reference on the object?

Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj.

If you pass a simple primitive value (of type string, boolean, or number) as the this binding, the primitive value is wrapped in its object-form (new String(..), new Boolean(..), or new Number(..), respectively). This is often referred to as "boxing"

We create a function bar() which, internally, manually calls foo.call(obj), thereby forcibly invoking foo with obj binding for this. This binding is both explicit and strong, so we call it hard binding.

Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: Function.prototype.bind.

### new binding