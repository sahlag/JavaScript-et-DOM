var title = document.querySelector('h1');
title.addEventListener('click', updateName);

function updateName(){

    var title = prompt('Entrer votre nom');

    title.innerHTML = 'Bonjour: ' + title;
}

// contenu d'un objet avec innerHTML: affiche le contenu html.

var elem = document.getElementById("name");
var text = elem.innerHTML;
alert(text);

// contenu d'un objet avec textCentent: affiche le cntenu textuel.

var para = document.getElementById('hamida');
var prenom = para.textContent;
alert(prenom);