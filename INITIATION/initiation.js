console.log("Hello World ! Sincerely, from the JS file. ");

//déclarer une variable
var nombre =2; // variabkle globale
let nombre2 = 5; // variable locale

console.log(nombre2)
nombre2 = "toto"
console.log(nombre2)

let resultat = nombre + 3;

console.log(resultat)

//concatenation
let prenom= "Adrien";
console.log("Bonjour " + prenom);

//test true or false
console.log(1 > 3);

let chiffre = 1; // type en chiffre
let chiffreString = "1"; //type en string avec les ""


// == simple il compare pruement les charactères
console.log(chiffre==chiffreString);

// egalité stricte === et !== il compare les type en plus des chars
console.log(chiffre===chiffreString);

//cast plus affichage du type
let chiffreCast = Number(chiffreString);
console.log(typeof chiffreCast)

// operateurs logiques
console.log(true || false)

//EXOS BOOLEENS
console.log("EXO BOOLEANS");

console.log("exo1 :" + (true && false)); //false

console.log("exo2 :" + (true || false)); //true

console.log("exo3 :" + (false || false)); //false

console.log("exo4 :" + (true || true)); //true

console.log("exo5 :" + (true && true)); //true

let drapeau = "vert";
let mer = "calme";
let surveille = true;

if (drapeau != "rouge") {
    console.log("j'ai le droit d'aller me baigner")
} else {
    console.log("j'ai PAS le droit d'aller me baigner")
}

if (drapeau != "rouge" && surveille) {
    console.log("Baignade Autorisée")
} else {
    console.log("j'ai PAS le droit d'aller me baigner")
}

if(surveille || (mer == "calme" && drapeau == "vert")) {
    console.log("baignade ok")
} else {
    console.log("pas baignade")
}

//tableau

let monTableau = ["Printemps", "Eté","Automne","Hiver"];

for(let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

monTableau.push("toto");

for(let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);
}

function direBonjour1() {
    console.log("Bonjour !")
}

direBonjour1();


function direBonjour2(prenom) {
    console.log("Bonjour !" + prenom)
}

direBonjour2("Adrien");