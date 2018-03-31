## Scopes
Lexical Scoping; scope created withing a functionn. ES6 recently defined Block Scoping.
The way a variable is initialized determines which scope type it is:

* lexical scope; var scoped to function
* block scope; let and const curly braces of the block

## Scope Chains
Scopes can be nested. Each nested inner scope has access to outer scope variables, but NOT vice-versa. Looking from most inner to most outer scope forms a Scope Chain.

## Global Scope
All Javascript runtimes must implicitly create a Global Scope object. (window in the browser, global in node) Accidentily create variables in the global scope.

Shadowing means that the inner() scope only has access to its own foo. There is no way for it to access the foo defined in someFunc(). This can also be an accidental source of bugs, especially when there is deep nesting, or long functions.

## Closures
Closures are wat enables the callback-last programming and handling asymnchronous nature of JS tasks. Then inner() is said to Close Over bar. Therefore inner() is a Closure. The closure will be maintained even
if inner() isn't executed immediately

## Garbage Collection
Memory in Javascript is managed automatically by the runtime. The runtime decides when/if to release any allocated memory. This decision process is called Garbage Collection. Every JS runtime has own algorithm for garbage collection. Mak & Sweep; marking refernces to memory any reference which is nnot marked is swept into the garbage. Pariculary relevant to closures.

hile garbage collection occurs, it blocks the
main thread, which means other Javascript cannot be executed until the event
completes. Be conscious of how janky your application may become due to
extensive Garbage Collection events!