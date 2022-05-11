let compteur = 0;

function compteurIncremente() {
    compteur++;
    let p = document.getElementById("compteur");
    p.innerHTML = "Vous avez cliqué " + compteur + " fois";
}

setInterval(changeColor, 60);
setInterval(changeColor2, 60);
function changeColor(button) {
    let randR = getRandInt(256)
    let randV = getRandInt(256)
    let randB = getRandInt(256)
    button.style.backgroundColor = "rgb(" + randR + "," + randV + "," +randB + ")";
}

function changeColor() {
    let button = document.getElementById("btn1")

    let randR = getRandInt(256)
    let randV = getRandInt(256)
    let randB = getRandInt(256)
    button.style.backgroundColor = "rgb(" + randR + "," + randV + "," +randB + ")";

}
function changeColor2() {

    let body = document.getElementsByTagName("body")[0]
    let randR = getRandInt(256)
    let randV = getRandInt(256)
    let randB = getRandInt(256)

    body.style.backgroundColor =  "rgb(" + randR + "," + randV + "," +randB + ")";
}

function getRandInt(borneMax) {
  return Math.floor(Math.random() * borneMax);
}