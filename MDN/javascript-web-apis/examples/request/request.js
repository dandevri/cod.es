var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function () {
    var verse = verseChoose.value;
    updateDisplay(verse);
};

function updateDisplay(verse) {
    verse = verse.replace(" ", "");
    verse = verse.toLowerCase();
    var url = verse + '.txt';

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';

    request.onload = function() {
        poemDisplay.textcontent = request.response;
    }

    request.send();
    console.log('stuff');
}
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
