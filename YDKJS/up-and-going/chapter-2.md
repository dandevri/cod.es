 # Chapter 2 - Into JavaScript

 This chapter is an overview of topics covered deeper troughout this book. Any good foundation is laid brick by brick, so don't expect that you'll immediately understand it all the first pass through. 6th edition of ECMAScript.

## Values & Types
JavaScript has typed values not typed variables. JS has built-in types. `typeof` operator tells you the type of a value. Only values have types in JavaScript; variables are just simple containers for those values.

You can explicitly set something undefined. But it means a variable that hasn't been assigned a value.

### Objects
With objects you can set properties and they can hold there own values of any type. Most useful value type in JS. Use dot or bracket notation to access them.

There are a couple of other value types that you will commonly interact with in JavaScript programs: array and function. You should think of them as subtypes.

#### Arrays
Array is an object that holds values in indexed positions. The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties.

#### Functions
Again, functions are a subtype of objects -- typeof returns "function", which implies that a function is a main type -- and can thus have properties, but you typically will only use function object properties (like foo.bar) in limited cases.

### Built-in Methods
The built-in types and subtypes we've just discussed have behaviors exposed as properties and methods that are quite powerful and useful.

string has an String object wrapper (called a native) that has the method on the prototype.  For the most part, you don't need to worry about or directly use these object wrapper forms of the values -- prefer the primitive value forms in practically all cases and JavaScript will take care of the rest for you.

### Comparing values
Main types of value comparison. *equality and inequality*. The result is always a boolean.

#### Coercion
Explicit and implicit. People call coercion evil, it can produce surprising results. Most of the time implicit coercion can even make your code more understandable.

#### Truthy and Falsy
When a non-boolean value is coerced to a boolean, does it become true or false, respectively? It's important to remember that a non-boolean value only follows this "truthy"/"falsy" coercion if it's actually coerced to a boolean.

#### Equality
Non-equality should not be confused with inequality. The proper way to characterize them is that == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called "strict equality" for this reason.

Many developers feel that === is more predictable, so they advocate always using that form and staying away from ==. I think this view is very shortsighted. I believe == is a powerful tool that helps your program, if you take the time to learn how it works.


* If either value (aka side) in a comparison could be the true or false value, avoid == and use ===.
* If either value in a comparison could be of these specific values (0, "", or [] -- empty array), avoid == and use ===.
* In all other cases, you're safe to use ==. Not only is it safe, but in many cases it simplifies your code in a way that improves readability.

What these rules boil down to is requiring you to think critically about your code and about what kinds of values can come through variables that get compared for equality. 

#### Inequality
Also called relational comparison. Typically they will be used with ordinally comparable values like numbers. There are no strict inequality operators.

NaN in the < and > comparisons, and the specification says that NaN is neither greater-than nor less-than any other value.

## Variables
In JavaScript, variable names (including function names) must be valid identifiers. Certain words cannot be used as variables, but are OK as property names. These words are called "reserved words," and include the JS keyword.

### Function scopes
You use the var keyword to declare a variable that will belong to the current function scope, or the global scope if at the top level outside of any function.

#### Hoisting
Wherever a var appears inside a scope, that declaration is taken to belong to the entire scope and accessible everywhere throughout. This behavior is called hoisting. 'Moved' to the top of the enclosing scope. It can be confusing to rely on this feature with variables, it is more common with functions. 

Variables are only available to lower/inner scopes. If you try to access a variable's value in a scope where it's not available, you'll get a ReferenceError thrown. If you try to set a variable that hasn't been declared, you'll either end up creating a variable in the top-level global scope (bad!)

In addition to creating declarations for variables at the function level ES6 lets you declare variables to belong to individual blocks (pairs of { .. }), using the let keyword. Block scoping is very useful for managing your variable scopes in a more fine-grained fashion, which can make your code much easier to maintain over time. Block scoped instead of function scoped.

## Conditionals