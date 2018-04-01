module.exports = function average(...args) {
  let sum = args.reduce((a,b) => a + b);
  let avg = sum / args.length;
  return avg;
};