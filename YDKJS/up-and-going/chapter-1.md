Preface:

From the earliest days of the web, JavaScript has been a foundational technology that drives interactive experience around the content we consume. The language faced some criticism, espcially with the light of Java as a brother. The two languages are vastly different. *"JavaScript" is as related to "Java" as "Carnival" is to "Car".*  JS is easy to learn but hard to master. With JavaScript you don't have to have many in-depth knowledge to get a program working. Because JavaScript can be used without understanding, the understanding of the language is often never attained.

Hollow Shell off the richness of JavaScript. Learn and deeply understand all of JavaScript, even and especially "The Tough Parts". *I am not content, nor should you be, at stopping once something just works, and not really knowing why.* You should come away from reading with a firm confidence in your understanding, not just of the theoretical, but the practical "what you need to know" bits.

# Chapter 1: Into programming

Introduction to several basic concepts of programming

## Code
A pogram (source code / code) is a set of special instructions to tell the computer what tasks to perform. The rules for valid format and combinations of instructions is called a computer language, refered to as it's syntax.

### Statements
Something that performs a specific task is called a statement.
* Variables; Boxes where you can store stuff. Variables hold values. A number 2 is a literal value.
* Operators; perform actions with values and variables.

Statements conclude with a semi-colon. Programs are just collections of statements.

### Expressions
Statements are made up of one or more expressions. Expression is any reference to a variable, value or a set combined with operators.

### Executing
Collections of statements, the program needs to executed. Running the program. A computer can't directly understand JS code. You need a interpreter or a compiler.
* Interpreting code; Translation of commands top to bottom line by line
* Compiling: Ahead of time, what's running is already the compiled code.

JS is interpreted, processed each time it's run. But that's not entirely accurate. The JavaScript engine actually compiles the program on the fly and then immediately runs the compiled code.

## Try it Yourself
### Output
console.log in this case. Log is a function of the console object.

### Input
Most common way is to let HTML show elements that the user can put values in, with JS you then read those.

## Operators
Perform actions on values and variables. `=` is for assignment. First calculate the value on the right side and then put it in the variable on the left-side. You should always declare the variable by name before you use it. Declare a variable within a specific scope.

## Values & Types
When you express values in a program, you choose different representations of a value. In programming terminolgy these are called 'types'. JS has built-in values, they are called primitives.

Values that are included directly in the source code are called literals.

### Converting between types
Conversion is called 'coercion.' You need to 'coerce' a value.
* explicit coercion; built-in function to convert
* implicit coercion; compare values that are not of the same type
* loose comparison, strict comparison.
* implicit coercion can create confusion in your code.

However, implicit coercion is a mechanism that can be learned, and moreover should be learned by anyone wishing to take JavaScript programming seriously

## Code comments
Writing code isn't only for the computer. It is as much for other developers or for the compiler. Computer only cares about machine code that comes from compilation.

You should strive not just to write programs that work correctly, but programs that make sense when examined.

Comments are purely to explain something to human. Interpreter / compiler will always ignore these.

## Variables
Most useful programs need to track a value as it changes over the course of the program. Then you can use a symbolic container; variable. The value in the container can vary over time. In some programming languages you even use static typing, (specify type) JavaScript is weakly typed. 

* Variables basicly manage the program state. In other words, state is tracking the changes to values as your program runs.
* Variables also centralize value settings. These are typically called constants. Value that doesn't change trought the program.

Constants also prevent accidentally changing value somewhere else after the initial setting. (ES6) It's kinda similar to static type enforcement.

## Blocks
In code we often need to group statements together. We call it a block. Typically, blocks are attached to some other control statement. A block statement does not need a semicolon (;) to conclude it.

## Conditionals
You need to first consult the current state of your wallet. You can use conditionals for that. Most common is if statement.

If statement requires an expression between the parentheses. Values that aren't already of an expected type are often coerced to that type. 

> The if statement expects a boolean, but if you pass it something that's not already boolean, coercion will occur.

In JS some values are 'falsy' (0 or '') any other value is automatically 'truthy'.

## Loops
Repeating something only while the conditional holds. Each time the loop executes, it's called an iteration.

While do; The only practical difference between these loops is whether the conditional is tested before the first iteration (while) or after the first iteration (do..while).

The conditional is tested on each iteration, much as if there is an implied if statement inside the loop. Use break statement to stop a loop.

* If you are to do counting with loop iterations, the for loop is the most compact way.
* There are specialized loop forms that are intended to iterate over specific values.

## Functions
Break up the program into reusable pieces. You can define a function. A function can be called by name and the code will run each time.

* Functions take arguments (parameters)
* Parameter is placeholer value

Functions are often used for code that you plan to call multiple times, but they can also be useful just to organize related bits of code into named collections, even if you only plan to call them once.

### Scope
Scope (lexical scope); each function get it's own scope. Scope is basically a collection of variables as well as the rules for how those variables are accessed by name. Only code inside that function can access that function's scoped variables. A variable name has to be unique within the same scope -- there can't be two different a variables sitting right next to each other. But the same variable name a could appear in different scopes.

> Lexical scope rules say that code in one scope can access variables of either that scope or any scope outside of it.

## Review
Finally, don't neglect the power of practice. The best way to learn how to write code is to write code.