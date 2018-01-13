var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
var array = myData.split(',');

console.log(array);

console.log(array.join(','));
console.log(array.toString());

array.push('Cardiff');
array.push('Bradford');

array.pop();

console.log(array);

