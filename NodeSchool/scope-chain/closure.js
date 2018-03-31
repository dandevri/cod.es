function foo() {
  var bar;
  quux = 12;
  function zip() {
    bar = true;
    var quux = 14;
  }
  return zip;
}