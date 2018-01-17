# JavaScript objects

Most things are objects, core features aswell as browser APIs. Object-based nature of JavaScript is important if you want to do advanced stuff.

## Object basics

> An object is a collection of related data and/or functionality (which usually consists of several variables and functions — which are called properties and methods when they are inside objects.) 

* Variables = properties
* Functions = methods

* name/value pair are properties
* the functions are methods

This object is called an 'object literal'. Literally written out the object content as we create it. This is the format you use if you want to transfer data.

* dot notation; object name acts as the 'namespace' to  access anything 'encapsulated' inside the object. Sub-namespace (objects inside objects)
* bracket notation; Instead of using index numbers you are using the name associated with ech member's value. Objects are sometimes called 'associative arrays'.

You can set or get the value of the object.

Useful aspect of bracket notation is that you can use variables. (Thus inputs of some sort)

**This**
This keywords refers to the current object the code is being wirrrten inside. It will always ensure that the correct values are used when a memeber's context changes.

Every time we use something from the built-in browser API or JavaScript objects we use features with the dot notation.

Built in objects/APIs don't always create object instances automatically.

Message passing; objects communicatie with eachother.

## Object-oriented JavaScript

OOP (Object-oriented programming) use objects to modal real worls things. 

> Object data (and often, functions too) can be stored neatly (the official word is encapsulated) inside an object package (which can be given a specific name to refer to, which is sometimes called a namespace), making it easy to structure and access; objects are also commonly used as data stores that can be easily sent across the network.

Abstraction; creating a simple model of amore complex thing. 

Generic object type definitions is called a class, it isn't acutally an object. It is a template that defines what an object should have.

From our class, we can create object instances. When an object instance is created from a class, the constructor function is run to create it. Creating an object is called instantiation.

You can create child classes to inherit from the parent and give them special features.

Some people argue that JavaScript is not a true object-oriented language. JavaScript uses constructor functions to define objects.

* Own namespace
* New keywords to create new object instance

Creating objects:
* Object literal
* Constructor function
* object() constructor
* create() method

## Object prototypes
Prototypes are the mechanism by which JavaScript objects inherit features one another, it's not the same as inheritance in other object-oriented programming languages.

JavaScript is often described as a prototype-based language. 

**Each object has a prototype object, which acts as a template object that inherits methods and properties from.

 Prototype Chain; different objects have properties and methods defined on other objects available to them.

Properties and methods are defined on the prototype property on the objects constructor function, not the object instance themselves. 

**In JS a link is made.** They don't copie over properties and methods defined on the class.

Prototype object = template object. 

Methods and properties are not copied from one object to another, they are accessed by walking up the chain.

> prototype property is one of the most confusingly-named parts of JavaScript — you might think that this points to the prototype object of the current object, but it doesn't (that's an internal object that can be accessed by __proto__, remember?). prototype instead is a property containing an object on which you define members that you want to be inherited.

Every constructor functions has an object containing a constructor property. Points to the original constructor.

Adding methods to the prototype are then available on all object instances created from the constructor.

> In our code we define the constructor, then we create an instance object from the constructor, then we add a new method to the constructor's prototype:

.this will be referencing global scape not the function scope.

Define properties inside the constructor and the methods on the prototype.