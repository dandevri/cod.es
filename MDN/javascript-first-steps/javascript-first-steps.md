# JavaScript first steps

## What is JavaScript
3 layers: structure, presentation & interactivity

* Core JavaScript; basic programming functionality
* Browser API's; built into the browser. Expose data from computer environment.
* Third party API's; not built into the browser and expose data from other resources.

>  When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab). 

The JavaScript is executed by the JavaScript engine, after the HTML and CSS.

Every browser tab has its own execution environment.

Running order for JavaScript is from top to bottom.

* Interpreted languages; JavaScript result is returned for the code to immediately run in the browser.
* Compiled languages; transformed before they are run by the computer.
* Client side; run on the user's computer. When a web page is viewed the code is downloaded and run by the browser.
* Server side; run on the server. Results are downloaded and displayed by browser.

Dynamic describes both client and server-side.

> Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JavaScript dynamically generates new content inside the browser on the client.

The meaning is slightly different in the two contexts, but related, and both approaches (server-side and client-side) usually work together.

**No inline JavaScript handlers** You then mix interactivity with structure.

## A first splash into JavaScript

> One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real world problems.

This requires a mixture of hard work, experience with the programming syntax, and practice.

Break up a brief in small steps, actionable tasks.

Functions are reusable blocks of code that you can write once and then you can reuse. 

'Events' are actions that happen in the browser. In response we can run blocks of code.

It listens for an event 'event listeners' and blocks of code 'event handlers' are run in response of firing.

In JavaScript everything is an object. An object is a collection of related functionality stored in a single grouping. 

The browser contains a couple of built-in objects.

For example: `document.querySelector` querySelector is a method of the document object.

## What went wrong?

Two main types of errors:

* Syntax errors: basically spelling errors. Most of the time error messages in console.
* Logic errors: syntax is correct but code gives incorrect results. No error message in console.

**Fixing syntax errors:**
Console gives error messages whenever there is a syntax error inside the JavaScript engine.

**Common Errors:**
* missing ; before statement
* missing ) after argument list
* missing: after property id
* missing } after function body
* unterminated string literal

## Storing the information you need
Variable is a cointer vor a value. *Variables aren't the values themselves; they are containers for values. You can think of them being like little cardboard boxes that you can store things in.*

Don't confuse a variable that exists but has no value defined with a variable that doesn't exist at all — they are very different things.

Naming a variable has some specific conventions. 

There are different types of date we can store in variables. In JS you don't have to declare variable types.

* numbers: integers or floats
* string; pieces of text
* booleans; true / false
* arrays; single object that contains multiple values. Acces with index. zero-based.
* objects: models a real life object.

**Loose typing:**
Don't need to specify what data type a variable will contain.

## Basic math in JavaScript

* Integers: whole numbers
* Floating point numbers: decimal points
* Doubles: specific type of floating point numbers

* Binary: Lowest level language, 0s and 1s.
* Octal: Base 8, 0-7
* Hexadecimal: Base 16 0-9 and a-f

Operator precendence; some operators will be applied before others.

* Artithmetic operators
* Increment and decrement operatos
* Comparison operators
* Assignment operators

Comparison operators don't only work on numbers, also on string. Control that swaps between two states is referred to as a toggle.

## Handling text
Concatenating means 'join together'. 

When you enter an acutal string in your code, it is called a string literal. 

Browser converts numbers to strings by default.

## Useful string methods
Again, everything in JavaScript is an object. So a string is a string object instance. You can use methods on it.

## Arrays

List-like objects. Single objects that contain multiple values stored in a list.

Access items in arrays with bracket notation.

Array inside an array is called a multidimensional array.

* Push and pop at end of the array.
* Shift and unshift at beginning.