// Custom (named) function
function myFunction() {
    alert('hello');
}

// Anonymous function
// function() {
//     alert('hello');
// }

// Assign anonymous function to variable
var myGreeting = function() {
    alert('Hello');
}

myGreeting();

var x = 1;
function a() {
    var y = 2;
}
function b() {
    var z = 3;
}
function output(value) {
    var para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Value: ' + value;
}

function myBigFunction() {
    var myValue = 1;

    subFunction1(myValue);
    subFunction2(myValue);
    subFunction3(myValue);
}

function subFunction1(value) {
    console.log(value);
}

function subFunction2(value) {
    console.log(value);
}

function subFunction3(value) {
    console.log(value);
}

function squared(num) {
    return num * num;
}

var number = squared(12);
console.log(number);
