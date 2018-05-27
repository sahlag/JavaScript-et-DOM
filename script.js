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



// sélection par ID.

document.getElementById('hello').innerHTML = "hello la famille"


// vérification que les champs sont remplis lors de validation.
function envoi(){
    var verifName = document.getElementById('nom').value;
    var verifPrenom = document.getElementById('prenom').value;

    if (verifName ==""){
        document.getElementById('Error1').innerHTML ="champ Nom est vide";
    }
    else {
        document.getElementById('Error1').innerHTML="";
    }

    if (verifPrenom == ""){
    document.getElementById('Error2').innerHTML="champ Prenom est vide";
    }
    else {
        document.getElementById('Error2').innerHTML="";
    }
}

