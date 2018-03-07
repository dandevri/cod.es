# Chapter 
this is a binding made for each function invocation, based entirely on its call-site (how the function is called).

## Call-site
Call-site: the location in code where a function is called (not where it's declared). It's not always that easy, as certain coding patterns can obscure the true call-site.

What's important is to think about the call-stack (the stack of functions that have been called to get us to the current moment in execution). 

Take care when analyzing code to find the actual call-site (from the call-stack), because it's the only thing that matters for this binding.

Another way of seeing the call-stack is using a debugger tool in your browser.

## Nothing but Rules
We turn our attention now to how the call-site determines where this will point during the execution of a function. You must inspect the call-site and determine which of 4 rules applies. 

### Default binding
The first rule we will examine comes from the most common case of function calls: standalone function invocation. Think of this this rule as the default catch-all rule when none of the other rules apply.
Because in this case, the default binding for this applies to the function call, and so points this at the global object. If strict mode is in effect, the global object is not eligible for the default binding, so the this is instead set to undefined.

Intentionally mixing strict mode and non-strict mode together in your own code is generally frowned upon. Your entire program should probably either be Strict or non-Strict.

### Implicit binding
Does the call-site have a context object, also referred to as an owning or containing object, though these alternate terms could be slightly misleading.

Regardless of whether foo() is initially declared on obj, or is added as a reference later (as this snippet shows), in neither case is the function really "owned" or "contained" by the obj object.

However, the call-site uses the obj context to reference the function, so you could say that the obj object "owns" or "contains" the function reference at the time the function is called.

One of the most common frustrations that this binding creates is when an implicitly bound function loses that binding, which usually means it falls back to the default binding, of either the global object or undefined, depending on strict mode.

Either way the this is changed unexpectedly, you are not really in control of how your callback function reference will be executed, so you have no way (yet) of controlling the call-site to give your intended binding.

### Explicit binding
What if you want to force a function call to use a particular object for the this binding, without putting a property function reference on the object?

Specifically, functions have call(..) and apply(..) methods.  Invoking foo with explicit binding by foo.call(..) allows us to force its this to be obj.

If you pass a simple primitive value (of type string, boolean, or number) as the this binding, the primitive value is wrapped in its object-form (new String(..), new Boolean(..), or new Number(..), respectively). This is often referred to as "boxing"

We create a function bar() which, internally, manually calls foo.call(obj), thereby forcibly invoking foo with obj binding for this. This binding is both explicit and strong, so we call it hard binding.

Since hard binding is such a common pattern, it's provided with a built-in utility as of ES5: Function.prototype.bind.

### NEW binding
In traditional class-oriented languages, "constructors" are special methods attached to classes, that when the class is instantiated with a new operator, the constructor of that class is called. However, there really is no connection to class-oriented functionality implied by new usage in JS.  In JS, constructors are just functions that happen to be called with the new operator in front of them. They're just regular functions that are, in essence, hijacked by the use of new in their invocation.

With new in front of it, and that makes that function call a constructor call. There's really no such thing as "constructor functions", but rather construction calls of functions.

By calling foo(..) with new in front of it, we've constructed a new object and set that new object as the this for the call of foo(..).
So new is the final way that a function call's this can be bound. We'll call this new binding.

## Everything in order
There must be an order of precedence to these rules, and so we will next demonstrate what order to apply the rules.

So, explicit binding takes precedence over implicit binding, which means you should ask first if explicit binding applies before checking for implicit binding.

### Determining this

```
Is the function called with new (new binding)? If so, this is the newly constructed object.

var bar = new foo()

Is the function called with call or apply (explicit binding), even hidden inside a bind hard binding? If so, this is the explicitly specified object.

var bar = foo.call( obj2 )

Is the function called with a context (implicit binding), otherwise known as an owning or containing object? If so, this is that context object.

var bar = obj1.foo()

Otherwise, default the this (default binding). If in strict mode, pick undefined, otherwise pick the global object.

var bar = foo()
```

## Binding exceptions
Borrowing terminology from networking (and the military), we can create a "DMZ" (de-militarized zone) object -- nothing more special than a completely empty, non-delegated (see Chapters 5 and 6) object.

Another thing to be aware of is you can (intentionally or not!) create "indirect references" to functions, and in those cases, when that function reference is invoked, the default binding rule also applies.

## Lexical This
Normal functions abide by the 4 rules we just covered. But ES6 introduces a special kind of function that does not use these rules: arrow-function. Instead of using the four standard this rules, arrow-functions adopt the this binding from the enclosing (function or global) scope.

While arrow-functions provide an alternative to using bind(..) on a function to ensure its this, which can seem attractive, it's important to note that they essentially are disabling the traditional this mechanism in favor of more widely-understood lexical scoping. 

While self = this and arrow-functions both seem like good "solutions" to not wanting to use bind(..), they are essentially fleeing from this instead of understanding and embracing it.

A program can effectively use both styles of code (lexical and this), but inside of the same function, and indeed for the same sorts of look-ups, mixing the two mechanisms is usually asking for harder-to-maintain code, and probably working too hard to be clever.

## Review