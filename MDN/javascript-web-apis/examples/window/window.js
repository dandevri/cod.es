var div = document.querySelector('div');

window.onresize = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    div.style.width = w + 'px';
    div.style.height = h + 'px';
}