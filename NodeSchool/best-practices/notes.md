# Best Practices

## Seperation of Concerns
Seperate (decompose) functions and require them in node environment.

## Switch statements
They are often considered 'code smells'. Difficult to maintain compared to other constructs.

## Test Driven Development
Write the tests for the functionality that you want to implement first.

## Controller
In practice you should always delegate specific functionality to its own service and have a controller like vendingMachine.js orchestrate all the work that these services do.