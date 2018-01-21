var link = document.querySelector('a');
link.textContent = 'Mozzila Developer Network';
link.href = 'https://developer.mozilla.org';

var sect = document.querySelector('section');
var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

sect.appendChild(para);

var text = document.createTextNode(' — the premier source for web development knowledge.');
var linkPara = document.querySelector('p');
linkPara.appendChild(text);

para.setAttribute('class', 'highlight');