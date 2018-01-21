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

* API objects commonly contain constructor, which are invoked to created instances of those objects.
* API objects often have several options available than can be tweaked.

**They have recognizable entry points**   
When using an API, you should make sure you know where the entry point is for the API. Often APIs have slighly more complex entry points.

**They use events to handle changes in state**  
Event handler properties most of the time.

**They have additional security mechanism where appropriate**
WebAPI features are subject to the same security considerations as JavaScript and other web technologies. But they sometimes have additional security mechanisms in place. (https, require permission)

## Manipulation documents

One of the most common things you'll want to do is maipulate the document structure in some way. Done by using the DOM, a set of API's for controlling HTML and styling information. (Heave use of document object)

### The important parts of a web browser
> Web browsers are very complicated pieces of software with a lot of moving parts, many of which can't be controlled or manipulated by a web developer using JavaScript. 

Despite the limitations, Web APIs still give us access to a lot of functionality that enable us to do a great many things with web pages.

* window; browser tab that a web page is loaded into. `window object`
* navigator; state and identity of the browser (user-agent) `navigator object`
* document; represented by the DOM is the actual page loaded into the window. `document object`

### Document object model
The document loaded in the browser tab is represented by a document object model. Tree structure created by the browser. Makes the HTML structure accessed by programming languages. for example the browser itself uses it to apply styling and other information to the correct elements as it renders a page,

Each element and bit of text has its own entry in tree, each one is called a node.

* Element node; an element
* Root node; html
* Child node; node directly inside another node
* Descendant node; anywhere inside another node.
* Parent node; node which has another node inside it.
* Sibling node; nodes that sit on the same level in the DOM tree.
* Text node; a node containing a text string.

There is no point using JavaScript to create static content — you might as well just write it into your HTML and not use JavaScript. It is more complex than HTML, and creating your content with JavaScript also has other issues attached to it (such as not being readable by search engines).

## Fetching data from the server

Retrieve indifivual data irems from the server to update sections of a webpage without having to load an entire new page.

### What is the problem?
> Originally page loading on the web was simple — you'd send a request for a web site to a server, and as long as nothing went wrong, the assets that made the web page would be downloaded and displayed on your computer.

The trouble with this model is that whenever you want to update any part of the page, for example to display a new set of products or load a new page, you've got to load the entire page again. 

**Ajax**  
Allow web pages to request small chinks of data (HTMl, JSON) and display them only when needed. Ajax comes from Async JavaScript and XML. Altough today you most of the time request JSON. The term "Ajax" is still often used to describe the technique.

The Ajax model involves using a web API as a proxy to more intelligently request data rather than just having the browser to reload the entire page. 
* Page updates are quicker, don't have to wait for page refresh.
* Less data is downloaded on each update.

Some sites also store assets and data on the user's computer when they are first rquested.

### Basic Ajax request
Asynchronous operation, you've got to wait for the operation to complete.