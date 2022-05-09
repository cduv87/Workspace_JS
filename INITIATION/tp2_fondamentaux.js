let ex1 = "une chaine avec des lettres dans un certain ordre pour donner du sens";
let ex2 = "une phrase sans majuscule";

function hundredRandoms() {

    let alreadyIn;
    let tabCent = [];
    let rand;
    console.log("Début tirage");

    do {
        alreadyIn = false;
        rand = Math.floor(Math.random() * 100);
        tabCent.forEach(element => { if (rand == element) { alreadyIn = true } });

        if (alreadyIn == false) {
            tabCent.push(rand);
            console.log(tabCent.length + " : " + rand);

        }


    } while (tabCent.length != 100);

    console.log("Les cents premiers nombres ont tous été générés.")

}

function triLettres(phrase) {
    let tab = [];
    tab = phrase.split("");
    let result = tab.filter(word => word != " ");
    result = result.sort().join("");
    return result;
}

function capitalize(phrase) {
    let tab = phrase.split(" ");
    for (let i = 0; i < tab.length; i++) {
        let str = tab[i]
        str = str.charAt(0).toUpperCase() + str.slice(1);
        tab[i] = str;
    }
    tab = tab.join(" ");
    return tab;
}

hundredRandoms();
console.log(triLettres(ex1));
console.log(capitalize(ex2));
