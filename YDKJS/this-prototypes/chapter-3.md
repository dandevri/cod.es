# Chapter 3

## Syntax

Objects come in two forms: the declarative (literal) form, and the constructed form.

The constructed form and the literal form result in exactly the same sort of object. The only difference really is that you can add one or more key/value pairs to the literal declaration, whereas with constructed-form objects, you must add the properties one-by-one.

 It's extremely uncommon to use the "constructed form" for creating objects.

## Type
It's a common mis-statement that "everything in JavaScript is an object". This is clearly not true.

* Note that the simple primitives (string, number, boolean, null, and undefined) are not themselves objects. 
* By contrast, there are a few special object sub-types, which we can refer to as complex primitives.

### Built-in objects
There are several other object sub-types, usually referred to as built-in objects. But in JS, these are actually just built-in functions. Each of these built-in functions can be used as a constructor (that is, a function call with the new operator -- see Chapter 2), with the result being a newly constructed object of the sub-type in question.

The primitive value "I am a string" is not an object, it's a primitive literal and immutable value. To perform operations on it, such as checking its length, accessing its individual character contents, etc, a String object is required.

In both cases, we call a property or method on a string primitive, and the engine automatically coerces it to a String object, so that the property/method access works.

## Contents
As mentioned earlier, the contents of an object consist of values (any type) stored at specifically named locations, which we call properties. What is stored in the container are these property names, which act as pointers (technically, references) to where the values are stored.

In objects, property names are always strings. If you use any other value besides a string (primitive) as the property, it will first be converted to a string.

### Property vs Methods
Some developers like to make a distinction when talking about a property access on an object, if the value being accessed happens to be a function.  *The specification makes this same distinction, interestingly.*

Technically, functions never "belong" to objects, so saying that a function that just happens to be accessed on an object reference is automatically a "method" seems a bit of a stretch of semantics.

Every time you access a property on an object, that is a property access, regardless of the type of value you get back. The safest conclusion is probably that "function" and "method" are interchangeable in JavaScript.

### Arrays
Arrays assume numeric indexing, which means that values are stored in locations, usually called indices.

Arrays are objects, so even though each index is a positive integer, you can also add properties onto the array: Be careful: If you try to add a property to an array, but the property name looks like a number, it will end up instead as a numeric index (thus modifying the array contents):

### Duplicating Objects
Firstly, we should answer if it should be a shallow or deep copy. Various JS frameworks have each picked their own interpretations and made their own decisions. But which of these (if any) should JS adopt as the standard? For a long time, there was no clear answer.

### Property Descriptors
But as of ES5, all properties are described in terms of a property descriptor. Which you can edit or change the boolean property from.

#### Immutability
It's important to note that all of these approaches create shallow immutability. That is, they affect only the object and its direct property characteristics. If an object has a reference to another object (array, object, function, etc), the contents of that object are not affected, and remain mutable.

#### Get and Put
There's a subtle, but important, detail about how property accesses are performed.

Since there's an internally defined [[Get]] operation for getting a value from a property, it should be obvious there's also a default [[Put]] operation.

#### Getters and Setters
ES5 introduced a way to override part of these default operations, not on an object level but a per-property level, through the use of getters and setters. Getters are properties which actually call a hidden function to retrieve a value. Setters are properties which actually call a hidden function to set a value.

For accessor-descriptors, the value and writable characteristics of the descriptor are moot and ignored, and instead JS considers the set and get characteristics of the property.

#### Existence
We can ask an object if it has a certain property without asking to get that property's value.

By contrast, hasOwnProperty(..) checks to see if only myObject has the property or not, and will not consult the [[Prototype]] chain. "enumerable" basically means "will be included if the object's properties are iterated through".

There's (currently) no built-in way to get a list of all properties which is equivalent to what the in operator test would consult (traversing all properties on the entire [[Prototype]] chain.

## Iteration
ES5 also added several iteration helpers for arrays, including forEach(..), every(..), and some(..). Each of these helpers accepts a function callback to apply to each element in the array, differing only in how they respectively respond to a return value from the callback.

ES6 adds a for..of loop syntax for iterating over arrays (and objects, if the object defines its own custom iterator):

## Review
The literal form is almost always preferred, but the constructed form offers, in some cases, more creation options.

Many people mistakenly claim "everything in JavaScript is an object", but this is incorrect. Objects are one of the 6 (or 7, depending on your perspective) primitive types. Objects have sub-types, including function, and also can be behavior-specialized, like [object Array] as the internal label representing the array object sub-type.

Whenever a property is accessed, the engine actually invokes the internal default [[Get]] operation (and [[Put]] for setting values), which not only looks for the property directly on the object, but which will traverse the [[Prototype]] chain (see Chapter 5) if not found.