# Planet Proto

## Simple objects
Object literals.

## Proto
__proto__ is not part of the standard interface of JavaScript, at least not until ES6

## Dynamic Lookups
You can add properties to the prototype of an object at any time, the prototype chain lookup will find the new property. Objects delegate property lookups to their prototype.

## Property Assignment
New/updated properties are assigned to the object, not to the prototype.

## Arrays and Objects
When you change an array or an object you make the change directly on the object.

## Object.create
Assigning prototypes to objects with object.create. Changing the prototype on runtime is a very slow operation.

## Dot New
-

## Constructor Functions
Constructor functions are the most used way in JavaScript to construct prototype chains. The popularity of constructor functions comes from the fact that this was the only original way for constructing types initially. When used with the keyword new functions behave like factories, meaning that they create new objects.

## Implicit this
When we use new with a function, JavaScript injects an implicit reference to the new object being created in the form of the this keyword. One popular convention is to capitalize the first letter of a function when it is intended to be used as a function constructor.

## Function prototype
Every function in JavaScript has a special property called prototype. As confusing as it may sound, this prototype property is not the real prototype (__proto__) of the function. A good clarification is to always refer to the special prototype property of functions as 'the function prototype', never just 'prototype'.