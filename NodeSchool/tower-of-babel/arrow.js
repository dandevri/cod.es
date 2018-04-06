var inputs = process.argv.slice(2);
var result = inputs
  .map(input => input[0])
  .reduce((a,b) => a + b);
console.log(result);