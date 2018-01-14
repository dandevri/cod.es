var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';

for (var i = 0; i < cats.length; i++) {
    var string = info += cats[i] + ', ';
}

console.log(string);

var i = 0;

while (i < cats.length) {
    if (i === cats.length - 1) {
        info += 'and ' + cats[i] + '.';
    } else {
        info += cats[i] + ', ';
    }

    i++;
}