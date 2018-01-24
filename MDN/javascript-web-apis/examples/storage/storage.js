localStorage.setItem('name', 'Chris');
var myName = localStorage.getItem('name');
console.log(myName);

localStorage.removeItem('name');
var myName = localStorage.getItem('name');
console.log(myName);