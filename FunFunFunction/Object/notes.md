## P1 - bind and this
this keyword with object literals. This and bind is core concept.
No right way to do object creation in JS.
JavaScript no default environment, it has engines.
JS is a standard and all the companies should sit together and talk about how the language should look.
JavaScript is a functional programming language. But also a object oriented language.
Accept the quirks of JavaScript.
Scheme heritage so it has higher-order functions.

Sometimes the object oriented nature of JavaScript can class with the functional side.
When you reassign a method to a variable it is no longer a method it is just a function.
Method needs the binding of the object, lost connection to the object.
This refers to the context where the function was called, not defined.

## P2 - Examples
This keyword is a special keyword that you can use in functions.
This doesn't mean anything without some context (same as the english language)

JS will figure out what 'this' should be. Bind for example.
Functions are just values that you can pass around.

Bind creates a copy of the function but the this property is very specific.
Context is determined by the time off the call.

## P3 - Prototype
Inheritance with classes; in JS we do inheritance with prototypes. The class is a blueprint. Prototype is delegate.
Class syntax in JS basically uses the prototype. It's just sugar a thin layer on top.
Prototypes are actually a simpler concept that classes but can be confusing.
Classes are just syntax shoved into ES6.
It goes up the prototype chain.
Prototypes don't create an extra copy of the object. Classes create a copy of the blueprint.

## P4 - new keyword
new when its applied to functions (not classes)
As a JS developer you are going to run into other code styles and older versions. You should be comfortable reading it.
In order to understand your present, you need to understand the history.
constructor function

arguments keyword isn't an array.

1. create a new object
2. Set the prototype
3. Execute constructor with this
4. return created object