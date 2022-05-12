var click = "X";
var fin = false;
var compteur = 0;

function jeu(td) {

    let valeur = td.innerHTML;
    if (fin != true) {
        if (valeur != "X" && valeur != "O") {
            if (click == "X") {
                td.innerHTML = click;
                td.setAttribute("name", click);
                click = "O";
                compteur++;
                tour();
            } else {
                td.innerHTML = click;
                td.setAttribute("name", click);
                click = "X";
                compteur++;
                tour();
            }
        }
    }
}

function endGame() {
    let c11 = document.getElementById("case11").getAttribute("name");
    let c12 = document.getElementById("case12").getAttribute("name");
    let c13 = document.getElementById("case13").getAttribute("name");
    let c21 = document.getElementById("case21").getAttribute("name");
    let c22 = document.getElementById("case22").getAttribute("name");
    let c23 = document.getElementById("case23").getAttribute("name");
    let c31 = document.getElementById("case31").getAttribute("name");
    let c32 = document.getElementById("case32").getAttribute("name");
    let c33 = document.getElementById("case33").getAttribute("name");
    let p = document.getElementById("victoire");
    p.style.color = "red";

   
        //condition row
        if (c11 == c12 && c12 == c13) {
            p.innerHTML = quiGagne();
        }
        if (c21 == c22 && c22 == c23) {
            p.innerHTML = quiGagne();
        }
        if (c31 == c32 && c32 == c33) {
            p.innerHTML = quiGagne();
        }
        //conbdition column
        if (c11 == c21 && c21 == c31) {
            p.innerHTML = quiGagne();
        }
        if (c12 == c22 && c22 == c32) {
            p.innerHTML = quiGagne();
        }
        if (c13 == c23 && c23 == c33) {
            p.innerHTML = quiGagne();
        }
        //condition diag
        if (c11 == c22 && c22 == c33) {
            p.innerHTML = quiGagne();
        }
        if (c13 == c22 && c22 == c31) {
            p.innerHTML = quiGagne();
        }
        if(compteur == 9 && fin == false) {
            p.innerHTML = "Egalité"
        }

}

function quiGagne() {
    let btn = document.getElementById("btnReset");
    btn.innerHTML = "Rejouer"
    fin = true;
    if (click == "O") {
        return "'X' a gagné";
    } else {
        return "'O' a gagné";
    }
}

function init() {
    
    let c11 = document.getElementById("case11").setAttribute("name", "11");
    let c12 = document.getElementById("case12").setAttribute("name", "12");
    let c13 = document.getElementById("case13").setAttribute("name", "13");
    let c21 = document.getElementById("case21").setAttribute("name", "21");
    let c22 = document.getElementById("case22").setAttribute("name", "22");
    let c23 = document.getElementById("case23").setAttribute("name", "23");
    let c31 = document.getElementById("case31").setAttribute("name", "31");
    let c32 = document.getElementById("case32").setAttribute("name", "32");
    let c33 = document.getElementById("case33").setAttribute("name", "33");
    let btn = document.getElementById("btnReset");
    btn.innerHTML = "Reset";
    let cases = document.getElementsByTagName("td");
    for (let cas of cases) {
        cas.innerHTML = "";
    };
    let p = document.getElementById("victoire");
    p.innerHTML = "";
    click = "X";
    fin = false;
    compteur = 0;
    tour();
}

function tour(){
    let tour = document.getElementById("tour");
    tour.innerHTML = "Joueur: "+ click;
}