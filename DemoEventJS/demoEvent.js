let compteur = 0;

function compteurIncremente() {
    compteur++;
    let p = document.getElementById("compteur");
    p.innerHTML = "Vous avez cliqué " + compteur + " fois";
}



function changeColor(button) {
    let randR = getRandInt(256)
    let randV = getRandInt(256)
    let randB = getRandInt(256)
    button.style.backgroundColor = "rgb(" + randR + "," + randV + "," +randB + ")";
}

function getRandInt(borneMax) {
  return Math.floor(Math.random() * borneMax);
}