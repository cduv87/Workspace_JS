let linebreak = document.createElement("br");
// Exercice 1 : Ajouter dans le html un input de type 
// texte ainsi qu'un paragraphe vide Ecrire une fonction 
// javascript déclenchée quand l'utilisateur saisi du texte 
// dans l'input et qui affiche la saisie dans le paragraphe 
// OPTION : Prendre en compte la suppression des lettres

let input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","input");
input.setAttribute("oninput","prompt()");
// input.addEventListener('input', prompt());
let p1 = document.createElement("p1");
p1.setAttribute("id", "p1");
p1.style.backgroundColor = "lightskyblue";
let exo1 = document.getElementById("exo1");
exo1.appendChild(input);
exo1.appendChild(linebreak);    
exo1.appendChild(p1);
  



// function prompt() {
//     let text = input.value;
//     document.getElementById("p1").innerHTML = text;
// }

function prompt() {
    let text = document.getElementById("input").value;
    console.log(text);
    document.getElementById("p1").innerHTML = text;
}

//----------------------------------------

// Exercice 2 : Ajouter un champ de type password pour saisir 
// le mot de passe et la confirmation du motDePasse.Faire une 
// fonction javascript déclenchée quand l'utilisateur saisi du 
// texte dans l'un des input pour afficher la vérification des 
// mots de passe en temps réel dans un paragraphe en dessous

let input1 = document.createElement("input");
input1.setAttribute("type","password");
input1.setAttribute("id","input1");
input1.setAttribute("oninput","checkPwd()");
let input2 = document.createElement("input");
input2.setAttribute("type","password");
input2.setAttribute("id","input2");
input2.setAttribute("oninput","checkPwd()");
let p2 = document.createElement("p")
p2.setAttribute("id", "p2");
let exo2 = document.getElementById("exo2");
exo2.appendChild(input1);

exo2.appendChild(input2);

exo2.appendChild(p2);

function checkPwd() {
    let pwd1 = document.getElementById("input1").value;
    let pwd2 = document.getElementById("input2").value;
    if (pwd1 == pwd2) {
        p2.innerHTML = "OKAY"
        p2.style.backgroundColor = "green";
    } else {
        p2.innerHTML = "NO MATCH"
        p2.style.backgroundColor = "red";
    }
    
}



//-----------------------------------------

// Exercice 3 : Ajouter un champ de type password pour saisir le mot de passe.
// Ajouter une icone avec un oeil.
// Au clic sur cet oeil, le mot de passe est révélé.
// Un autre clic cache le mot de passe.

//creation input
let input3 = document.createElement("input");
input3.setAttribute("type","password");
input3.setAttribute("id","input3");

//creation icon
let icon = document.createElement("button");
icon.setAttribute("class", "fa-solid fa-eye-slash");
icon.setAttribute("id", "icon");
// icon.addEventListener('click', brouillard());
icon.setAttribute("onclick", "brouillard()");

//ajout sur la div
let exo3 = document.getElementById("exo3");
exo3.appendChild(icon); 
exo3.appendChild(input3);


// function brouillard() {

//     let i = document.getElementById("icon");
//     let btn_style = i.getAttribute("class");
//     btn_style_invisible = "fa-light fa-eye"
//     if (btn_style == btn_style_invisible) { 
//         icon.setAttribute("class", "fa-solid fa-eye");
//         let inputCalled = document.getElementById("input3");
//         inputCalled.getAttribute("type", "text");
        
//     } else {
//         icon.setAttribute("class", "fa-light fa-eye");
//         let inputCalled = document.getElementById("input3");
//         inputCalled.getAttribute("type", "password");
        
//     }
// }


function brouillard() {

    let btn_style = icon.getAttribute("class");
    btn_style_invisible = "fa-solid fa-eye-slash";
    if (btn_style == btn_style_invisible) { 
        icon.setAttribute("class", "fa-solid fa-eye");
        input3.setAttribute("type", "text");
        
    } else {
        icon.setAttribute("class", "fa-solid fa-eye-slash");
        let inputCalled = document.getElementById("input3");
        inputCalled.setAttribute("type", "password");
        
    }
}