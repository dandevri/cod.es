## Babel Setup
Even with the power of the latest version of node.js, it isn't possible right now to use all of the features from ES6.

## Class
New syntax for defining class-like structures. Build on top of prototypes.

## Class Extend
You can extend classes to build on top of other classes. The extends keyword inherits methods defined on other objects.
super allows to specify whether the function defined in this class should be used or the class it extends from, the "super-class".
-

In node.js/io.js it's common to use commonjs modules but in the browser you had to use other solutions like require.js or browserify or were forced to create your own global namespaces. Basically, they look a lot like commonjs modules. With export you can specify the objects to be exported and instead of require you can use import to import the object.

## Modules default export
When you use export default you do not need to use the curly braces {...} and you don't need to know the name of the exported method.

## Block Scope
-

## Computed Property
In ES6 the way to access and define object literals has been improved. It is now possible to use expressions as property names.

## Iterator for Of
In ES6 the for of way to iterate over an array has been added.

## Generator
The difference to other ways is the function* notation and that you use yield where you would have used return before.

## Destructure
This new syntax is similar to the destructuring in Clojure. It makes it easier to access properties of arrays and objects.

## Arrow Function
-

## Rest and Spread
But since arguments is not an array several methods (like map or reduce) could not be used.
