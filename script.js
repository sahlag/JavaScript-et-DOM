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

// Tableau de multiplication

function calculer(){
    document.getElementsByName("table")[0].innerHTML="";

    var valeur =document.getElementsByName("nombre")[0].value;
    for (var i=0; i<=9; i++){
        var value=i*valeur;
        document.getElementsByName("table")[0].innerHTML+=valeur+"*"+i+"="+value+"\n";
    }  
}

// barre de progression.
function progression(){
    document.getElementById('Pro').value+=5;
    document.getElementById('num').innerHTML=document.getElementById('Pro').value+"%";
}

// selection par sélecteur CSS

function colorer(){
    var x = document.querySelectorAll("#elem em");
    for( var i = 0; i < x.length;i++){
        x[i].style.color= "red";
    }
}
