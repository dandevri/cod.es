'use strict';

const promise = new Promise((fulfill, reject) => {
  // call fulfill
  setTimeout(function () {
    fulfill('FULFILLED!');
  }, 300);
});

// Add handler to the promise
promise.then(console.log);