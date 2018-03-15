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

## 3.4 - Boolean Variables
booleans are data types. not false is equal to true.

## 4.1 - While and for loops
Repeat loop, essential control structure. Conditional statement is also a control structure.

What's the exit condition? The while loops is a nice translation from if but it needs more lines and 3 elements. The 3 elements of a while loops condens them with a for loop.

## 4.2 - Nested Loops
The window is not updated until the end of the loop is reached. Not to animate something. For each cycle (flipbook idea)

Nested loops (think about x and y) for every x make a list of y's.

## 5.1 - Function basics
Key principles of using funtions.
* Modularity
* Reusability

With functions you can organise your program, modular pieces.

## 5.2 - Function parameters
parameters; placeholder variables. They are local to the functionn. arguments; are the actual values passed in when it's called.

## 5.3 - Function and return
When a function finishes executing it can return a value to you. You can store it in a variable for example. Some function don't evaluate. (they don't return)

## 6.1 - Object-Oriented
-

## 7.1 - Array
Array is a list of values. Arrays and object both are collections but they are differennt. (index based and keys) With an array the elements are in order. Arrays are index based. The variable holds the whole array. The index (in square brackets) can be random. With a 'for' loop for example.

## 7.2 - Array and Loops
Pretty nifty use case of alo using the variable i for index and multiplying the value of it.

## 7.3 - Arrays of Objects
