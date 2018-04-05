const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // here belongs the FizzBuzz logic
    // Hint：
    // When it's finished you have to return an object
    // with the property `done: true` but before you
    // have to set `done: false`
    let num = 1;
    return {
      next() {
        if (num > max) {
          return { done: true };
        }
        let value = num;
        if (value % 15 === 0) {
          value = 'FizzBuzz';
        } else if (value % 3 === 0) {
          value = 'Fizz';
        } else if (value % 5 === 0) {
          value = 'Buzz';
        }
        num++;
        return { done: false, value: value };
      }
    }
  }
}

for (var n of FizzBuzz) {
  console.log(n);
}

