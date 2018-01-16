var person = {
    name: ['Bob', 'Smith'],
    age: 32,
    greeting: function() {
        alert('Hi');
    }
};

console.log(person.age);

person.age = 44;

console.log(person.age);

var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue;

var person1 = {
    name: 'Chris',
    greeting: function () {
        alert('Hi! I\'m ' + this.name + '.');
    }
}

var person2 = {
    name: 'Brian',
    greeting: function () {
        alert('Hi! I\'m ' + this.name + '.');
    }
}

console.log(person1.greeting())

// Constructor functions

function Person(name) {
    this.name = name;
    this.greeting = function() {
        alert('hi');
    }
}

var person3 = new Person('Bob');
var person4 = new Person('Sarah');

console.log(person3.name);