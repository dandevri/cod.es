# JavaScript guides

## Introduction
JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive. 

> Core JavaScript can be extended for a variety of purposes by supplementing it with additional objects.
* Client-side JavaScript
* Server-side JavaScript

JavaScript follows some of the same Syntax of Java, that's why there names are closely related. JavaScript has a prototype-based object model instead of the more common class-based object model.

JavaScript is standardizes at Ecma international. This standardized version of JavaScript, called ECMAScript, behaves the same way in all applications that support the standard. The ECMA-262 standard is also approved by the ISO. The ECMAscript specification thus doesn't specify the use of the DOM etc.

The ECMAScript document is not intended to help script programmers; use the JavaScript documentation for information on writing scripts.

## Grammar and Types

### Declarations
JavaScript is case-sensitive and uses the Unicode character set. Instructions are called statements and are seperated by a semicolon. The source text of JavaScript script gets scanned from left to right and is converted into a sequence of input elements which are tokens, control characters, line terminators, comments or whitespace. 

Variables are symbolic names for values in the application. Names of variables are called identifiers.

> Variables declared with no assigned values are undefined and give a ReferenceError.

* The undefined value converts to NaN when used in numeric context.
* When you evaluate a null variable, the null value behaves as 0 in numeric contexts and as false in boolean contexts.

ECMAScript 2015 introduces block scope instead of function scope.

You can refer to a variable that's declared later. This is called hoisting. Lifted to the top of a function or statement. The declaration is hoisted not the value.

In EcmaScript 2015 the let variables doesn't get hoisted. The variable is in the temporal dead zone.

Only the function declaration gets hoisted to the top not and not the function expression.

Global variables are part of the of the Global Object. The Global objest is the window.

Constants are read-only, and cannot be changed value by assignning or re-declaring. You can't declare a constant with the same name as a function.

### Data Structures
6 data types that are primitives, and object.

JS is dynamically typed. Don't have to specify data type. Data types are converted.

### Literals
These are fixed values not variables. You literally provide them into JavaScript. Some literals are a type of object initializer. Literals can also be Objects.

An object literal is a list of zero or more pairs of property names and associated values of an object. object literals are extended to support setting the prototype at construction, shorthand.

 A string must be delimited by quotation marks of the same type; that is, either both single quotation marks.

## Control flow and error handling
JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application.

* block statement
* conditional if else
* switch

Falsy values, some values always evaluate to false. All other values evaluate to true.

### exception handling statements
You can throw exceptions using the throw statement and handle them using the try...catch statements. If an exception is thrown, the try...catch statement catches it. Use error constructor.

### promises
Objects allowing you to control the flow of deferred and asynchronous operations.

## Loops and Iteration
Loops offer a quick and easy way to do something repeatedly. The various loop mechanisms offer different ways to determine the start and end points of the loop.

* for statement; for loop repeats until a specified condition evaluates to false.
* do...while statement; statement executes once before the condition is checked.
* while statement; statement executes its statements as long as a specified condition evaluates to true.
* label statement; statement with an identifier that lets you refer to it elsewhere in your program
* break statement; statement to terminate a loop
* continue statement; statement can be used to restart 
* for...in statement; iterates a specified variable over all the enumerable properties of an object. Thus it is better to use a traditional for loop with a numeric index when iterating over arrays.
* for...of statement; statement creates a loop Iterating over iterable objects

## Functions

### Definitions
A function definition (also called a function declaration, or function statement) consists of the function keyword.  JavaScript statements that define the function. Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

While the function declaration above is syntactically a statement, functions can also be created by a function expression. Function expressions are convenient when passing a function as an argument to another function. 

### Calling
Calling the function actually performs the specified actions with the indicated parameters. Functions must be in scope when they are called, but the function declaration can be hoisted.

### Scope
A function can refer to and call itself. A function that calls itself is called a recursive function. recursion itself uses a stack: the function stack.

You can nest a function within a function. The nested (inner) function is private to its containing (outer) function. It forms a closure. Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function. A closure must preserve the arguments and variables in all scopes it references.

the closures can contain multiple scopes; they recursively contain the scope of the functions containing it. This is called scope chaining.

When two arguments or variables in the scopes of a closure have the same name, there is a name conflict.

### Closures
JavaScript allows for the nesting of functions and grants the inner function full access to all the variables and functions defined inside the outer function. Since the inner function has access to the scope of the outer function, the variables and functions defined in the outer function will live longer than the duration of the inner function execution, if the inner function manages to survive beyond the life of the outer function. A closure is created when the inner function is somehow made available to any scope outside the outer function.

### Arguments object
The arguments of a function are maintained in an array-like object.

### Function parameters
This is often useful if you don't know in advance how many arguments will be passed to the function.

* Default parameters; other then undefined
* Rest parameters; The rest parameter syntax allows us to represent an indefinite number of arguments as an array. 

### Arrow functions
Arrow functions are always anonymous. 
* Shorter functions;
* Lexical this; Until arrow functions, every new function defined its own this value. Arrow functions capture the this value of the enclosing context.

## Expressions and Operators
A binary operator requires two operands, one before the operator and one after the operator.
A unary operator requires a single operand.
* Assignment operator / Compound assignment operators
* Comparison operators
* Arithmetic operators
* Logical operators
* String operators
* Conditional (ternary)
* Unary operators; delete, typeof etc.
* Relational operators; in

Destructuring; expression that makes it possible to extract data from arrays or objects.

### Expressions
An expression is any valid unit of code that resolves to a value.

Every syntactically valid expression resolves to some value but conceptually, there are two types of expressions: with side effects (for example: those that assign value to a variable) and those that in some sense evaluate and therefore resolve to a value.

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected.

## Numbers and Dates
* Types of numbers
* Math object; The built-in Math object has properties and methods for mathematical constants and functions.
* Date object; JavaScript does not have a date data type. However, you can use the Date object and its methods to work with dates and times in your applications. 

## Text formatting
JavaScript's String type is used to represent textual data. The String object is a wrapper around the string primitive data type. You can't change individual characters because strings are immutable array-like objects.

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

The Intl object is the namespace for the ECMAScript Internationalization API, which provides language sensitiv.

## Regular expressions
