# Chapter 1 - What is Scope

Ability to store values in variables and later retrieve or modify those values. This is what gives a program state. Where do these variables live and where are they stored? These questions speak to the need for a well-defined set of rules for storing variables in some location, and for finding those variables at a later time. We'll call that set of rules: Scope.

## Compiler Theory
JS is in fact a compiled language. It is not compiled in advance but nevertheless JavaScript performs many of the same steps.

Compiled-language process; three steps before it is executed. Roughly called compilation.
* Tokenizing/Lexing; breaking up strings of text into meaningful chunks (tokens). part of token or not; that is lexing (State vs statefull)
* Parsing; Taking a stream of tokens and turning it into a tree of nested elements. Represent the grammatical structure of the program. This is called an **AST**
* Code generation; Process of taking and AST and turning it into executable code. Machine instructions; it creates at the engine level.

The JS engine is far more complex then just those three steps. JavaScript doesn't have the luxury to optimize. It is compiled just seconds before it is executed. JS engines use all kinds of tricks for this. It will almost be ready to execute right away.

## Understanding Scope
Think of this process as a conversation.
* Engine; responsible for start-to-finish compilation and execution of our JavaScript program.
* Compiler; handles all the dirty work (parsing code generation)
* Scope; friend of engine. Collects identifiers and enforces strict rules.

> For you to fully understand how JavaScript works, you need to begin to think like Engine (and friends) think, ask the questions they ask, and answer those questions the same.

### Back & Forth
When you see `var a = 2;`. Engine sees it as two distinct statements. One for compiler and one for engine.

The first thing Compiler will do with this program is perform lexing to break it down into tokens, which it will then parse into a tree.

1. Compiler asks Scope to see if a variable a already exists for that particular scope collection.
1. Compiler then produces code for Engine to later execute,

To summarize: two distinct actions are taken for a variable assignment: First, Compiler declares a variable (if not previously declared in the current scope), and second, when executing, Engine looks up the variable in Scope and assigns to it, if found.

#### Compiler Speak
When Engine executes the code that Compiler produced for step (2), it has to look-up the variable a to see if it has been declared, and this look-up is consulting Scope. But the type of look-up Engine performs affects the outcome of the look-up.

Engine would be performing an "LHS" look-up for the variable a. The other type of look-up is called "RHS".

I bet you can guess what the "L" and "R" mean. These terms stand for "Left-hand Side" and "Right-hand Side".

> In other words, an LHS look-up is done when a variable appears on the left-hand side of an assignment operation, and an RHS look-up is done when a variable appears on the right-hand side of an assignment operation.

Being slightly glib for a moment, you could also think "RHS" instead means "retrieve his/her source (value)", implying that RHS means "go get the value of...".

> "who's the target of the assignment (LHS)" and "who's the source of the assignment (RHS)"

LHS and RHS meaning "left/right-hand side of an assignment" doesn't necessarily literally mean "left/right side of the = assignment operator". There are several other ways that assignments happen, and so it's better to conceptually think about it as: "who's the target of the assignment (LHS)" and "who's the source of the assignment (RHS)".

The 2 value is assigned to the parameter a. To (implicitly) assign to parameter a, an LHS look-up is performed.

### Nested Scope
We said that Scope is a set of rules for looking up variables by their identifier name. There's usually more than one Scope to consider, however.

Just as a block or function is nested inside another block or function, scopes are nested inside other scopes.

Engine starts at the currently executing Scope, looks for the variable there, then if not found, keeps going up one level, and so on. If the outermost global scope is reached, the search stops, whether it finds the variable or not.

### Errors
*Why does it matter whether we call it LHS or RHS?*

> If an RHS look-up fails to ever find a variable, anywhere in the nested Scopes, this results in a ReferenceError being thrown by the Engine.

> By contrast, if the Engine is performing an LHS look-up and arrives at the top floor (global Scope) without finding it, and if the program is not running in "Strict Mode" [^note-strictmode], then the global Scope will create a new variable of that name in the global scope.

### Review
> Scope is the set of rules that determines where and how a variable (identifier) can be looked-up. This look-up may be for the purposes of assigning to the variable, which is an LHS (left-hand-side) reference, or it may be for the purposes of retrieving its value, which is an RHS (right-hand-side) reference.

Unfulfilled RHS references result in ReferenceErrors being thrown. Unfulfilled LHS references result in an automatic, implicitly-created global of that name (if not in "Strict Mode" [^note-strictmode]), or a ReferenceError (if in "Strict Mode" [^note-strictmode]).