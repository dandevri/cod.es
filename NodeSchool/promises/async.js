const promise = new Promise((fulfill, reject) => {
  fulfill('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');