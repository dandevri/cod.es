var btn = document.querySelector('button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.onclick = function () {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
    console.log(e);
}

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', bgChange);
}

/* Event Handler properties:
bt.onclick 
*/