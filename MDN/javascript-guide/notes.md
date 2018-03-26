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

### Control flow and error handling
JavaScript supports a compact set of statements, specifically control flow statements, that you can use to incorporate a great deal of interactivity in your application.

* block statement
* conditional if else
* switch

Falsy values, some values always evaluate to false. All other values evaluate to true.

### exception handling statements
You can throw exceptions using the throw statement and handle them using the try...catch statements. If an exception is thrown, the try...catch statement catches it. Use error constructor.