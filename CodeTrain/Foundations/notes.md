## 9.6 - JavaScript Closure

Closure; bottle up (closure bubble) that contains elements. In JS it is not usual to define functions inside other ones. (nest them)

The variables inside functions are generated everytime you call them. Same thing with functions nested. Everything inside the function is maintained; that's called a closure.

Scope; the scope isn't just where variables are declared but where things happen.

## 9.19 - Prototypes

Create objects and attach methodes (functions) to the prototype.
Constructor function creates object instance. (Binding the context to the keyword this)

You don't have to define functions on each instance of the object. You can do it smarter by putting that function on the prototype.

Prototype chain; prototype refers to the bigger particle object. Each instance points to the same prototype.

_proto_ refers to a property of the prototype which is a reference up the prototype chain. It refers to object.prototype. With has ownpropertyof you can check if a property is on the object instance itself or up the prototype chain.

Inheritance; you can let object inherit from other objects. Prototypical inheritance.

## 2.1 - Variables
Flow of a program over time. A browser session happens over time, functions kinda control the flow. A variable is a word that stands for something and can vary. Stored in computer memory

* Function; Once (onload)
* Function; loops and draws (loop)
* Function; event (waits)

## 2.2 - Declare variables
* Declare the variable
* Initialize the variable
* Use the variable

Assigment operation; assign a value to a variable.

Right hand is always evaluated and then assigned to the left side.k

## 2.3 - Object literal
Variables that 'go together'. Object literals.

## 3.1 - Conditional statements
Boolean expressions; how does a program make decisions? Boolean indicates true or false. (0, 1)

A conditional statements expects a boolean expression. Often use relational operator. Variable is often part of the expression. Then the expression changes all the time.

## 3.3 - Else and Else If
Order of expressions matter. As soonn if one of the expression is true the program ignores all other and go to next lines of code.

There is a difference by using else if intead of just chaining if statements. They are distinct so if they are true all of them occur. It doesn't skip.

With and / or you can basically join two expression together. Create an intersection for example.