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

    fetch(url).then(function(response) {
        return response.text()
        }) .then(function(text) {
        poemDisplay.textContent = text;
    }) 
}
updateDisplay('Verse 1');
verseChoose.value = 'Verse 1';
