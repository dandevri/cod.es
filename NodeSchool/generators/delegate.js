function *flat (arr) {
  arr.reduce((a,b) => a.concat(b), []);
  yield arr;
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
    console.log( f );
}