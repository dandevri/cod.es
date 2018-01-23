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

The Fetch api is basically a modern replacement for XHR. Itwas introduced in browsers recently to make asynchronous HTTP request easier to do in JavaScript.

**Fetch**
* Invoke the fetch method, passing the url of the resource
* Promises are used for performing asynchronous operations.
* .then() to run some follow-up code after the promise resolves, 

Most of the newer JavaScript APIs are heavily based on promises. Resolves means finish perform the specified operation. 

The code passed into then is a won't run immediately, it will run at some point in the future when the response has been returned.

You can directly chain multiple promise blocks (then blocks) onto the end of one another, passing the result of each block to the next block as you travel down the chain.

**Which should you use?**
XHR has been around for a long time and has good cross-browser support. Fetch and Promises are a more recent additions to the web platform.

## Third party APIs
Provide API's to make use of their data.

### What are third party APIs?
Allow acces to third party company functionality via JavaScript to use on your own site.

Browser APIs are built in to the browser, you can acces them from JavaScript immediately.

Thid party APIs are located on third party server. To access them from JavaScript you first need to connect to the API functionality and make it available in your page. Typically linking to the library on the server.

Security for browser APIs tends to be handled by permission prompts, the user knows what is going on the the websites they visit. Third party APIs 
tend to use key codes. (developer key)

**RESTful API**
Instead of getting data using the features of a JavaScript library we get data by making HTTP request to specific URLs.

### An approach for using third party APIs

*Find the documentation; it's essential to find out where the documentation is, so you can find out what features the API has.
* Get a developer key
* Connect the API to your app; This is usually done either by connecting to the API's JavaScript (as we did in the Google Maps API), or by making requests to the correct URL(s). Construct the REST url.
* Requesting data from the API; Make a request
* Display the data;

## Drawing graphics
The browser contains some very powerful graphics programming tools.

### Graphics on the web
Image element, background image and SVG. We could animate SVG trough css and javascript there was stilll no way to do the same for images.

Situation started to improve when browsers began to support the canvas element and canvas api.

Around 2006-2007 Mozilla started work on 3D canvas implementation. This became WebGL.

You can chain multiple assignments together, handy if you want to set multiple variables to the same value.

### 2d canvas basics
If you want to draw anything more complex than a rectangle, you need to draw a path.

* Rect
* Arc (circles)
* Paths
* Text
* Images


### Loops and animations
You wont't experience the full power of convas unless you update or animate it in some way.

There are a few JavaScript functions that allow you to run functions repeatedly, several times a seclond.

The next time the browser is ready to update the screen, your function will get called.

On each frame we clear the canvas and redraw everything. Once you've drawn a graphic to a canvas, there's no way to manipulate that graphic individually like you can with DOM elements.

### WebGL
3D canvas content is specified using the WebGL API, which is a completely separate API from the 2D canvas API, even though they both render onto <canvas> elements.

> WebGL is based on the OpenGL graphics programming language, and allows you to communicate directly with the computer's GPU. As such, writing raw WebGL is closer to low level languages such as C++ than regular JavaScript; it is quite complex but incredibly powerful.

Because of its complexity, most peoplw write 3d graphics using a third party JavaScript library. They handle the WebGL for you, letting you work on a higher level.