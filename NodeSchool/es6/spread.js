let args = process.argv.slice(2);
var min = Math.min(...args);
console.log(`The minimum of [${args}] is ${min}`);