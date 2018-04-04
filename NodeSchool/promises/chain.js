first()
  .then(result => { return second(result)})
  .then(console.log);