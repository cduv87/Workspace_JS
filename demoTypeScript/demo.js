// déclaration d'une classe mère 
// le function() ici c'est littéralement le constructeur
//la syntaxe suivante est l'ancienne syntaxe avant l'ECMAScript (ajd le ES6 est compatible avec tout les nav)
let Sport = function(nom, description) {

    // construis les attributs
    this.nom = nom;
    this.description = description;

    //définir des fonctions
    this.afficher = function() {
        console.log(this.nom + " " + this.description);
    }

}

// declaration d'un clase fille et son constructeur
let SportDeCompete = function(nom, description, niveau) {
    //appel au constructeur de la classe mère, le THIS doit être en premier
    Sport.call(this, nom, description);
    //définition des attributs propres a la classe fille
    this.niveau = niveau;

}


let rugby = new SportDeCompete("Rugby", " Foot a la main avec un Ballon Ovale", "niveau international");
console.log(rugby);
rugby.afficher();