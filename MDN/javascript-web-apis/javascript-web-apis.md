# Client-side web APIs

When writing JavaScript you won't go very far before you start to use APIs. Interfaces for manipulating different aspects of the browser and operating systems.

## Introduction to web APIs

### What are APIs?
> Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily.

They abstract more complex code away with easier syntax.

Electricity analogy; you simpply plug into a socket and it works. You don't try to wire directly into the power supply.

Client-side JavaScript has many APIs available to it. Not part of JavaScript language itself, they are built on top of the core JavaScript language.


* JavaScript; high-level scripting languge built into browsers that allows you to implement functionality on web pages.
* Browser APIs; built into the web browser to expose data from the browser and surround computer environment. (GPS, Bluetooth etc.)
* Thid party APIs; not built into the browser by default. Grab code somewhere on the web.
* JavaScript libraries: Custom functions that you can attach to your web page to speed up functionality.
* JavaScript frameworks; Next step up from libraries. Packages with also HTML and CSS. Install to write entire web application.
> When calling a method from a library, the developer is in control. With a framework, the control is inverted: the framework calls the developer's code.

### What can APIs do?
**Common browser APIs**  
List of commong categories of browser APIs.

**Common third-party APIs**  

### How do APIs work?

**They are based on objects**  
APIs are interacted with in your code using one or more JavaScript objects, which serve as containers for data the API (object properties) use and the functionality the API makes avaliable (object methods)

A function that is taken by another function as an argument is called a callback function.

Invoking a function only when an operation has been completed is very common in JS apis. Making sure one operation has completed before trying to use the data. These are called asynchronous operations.

**They have recognizable entry points**   
* API objects commonly contain constructor, which are invoked to created instances of those objects.
* API objects often have several options available than can be tweaked.

When using an API, you should make sure you know where the entry point is for the API. Often APIs have slighly more complex entry points.

**They use events to handle changes in state**  
Event handler properties most of the time.

**They have additional security mechanism where appropriate**
WebAPI features are subject to the same security considerations as JavaScript and other web technologies. But they sometimes have additional security mechanisms in place. (https, require permission)