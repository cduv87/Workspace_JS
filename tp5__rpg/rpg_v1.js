var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Monstre = /** @class */ (function () {
    function Monstre() {
    }
    return Monstre;
}());
var MonstreDifficile = /** @class */ (function (_super) {
    __extends(MonstreDifficile, _super);
    function MonstreDifficile() {
        var _this = _super.call(this) || this;
        _this.points = 1;
        return _this;
    }
    MonstreDifficile.prototype.getPoints = function () {
        return this.points;
    };
    return MonstreDifficile;
}(Monstre));
var MonstreFacile = /** @class */ (function (_super) {
    __extends(MonstreFacile, _super);
    function MonstreFacile() {
        var _this = _super.call(this) || this;
        _this.points = 2;
        return _this;
    }
    MonstreFacile.prototype.getPoints = function () {
        return this.points;
    };
    return MonstreFacile;
}(Monstre));
var Joueur = /** @class */ (function () {
    function Joueur(nom) {
        this.name = nom;
        this.life = 150;
        console.log("Un nouveau joueur viens de débuter la partie : ");
        console.log("Bienvenue à " + this.name + " !!!");
    }
    Joueur.prototype.setPoints = function (score) {
        this.points += score;
    };
    Joueur.prototype.getLife = function () {
        return this.life;
    };
    Joueur.prototype.afficheLife = function () {
        console.log("Points de vies de " + this.name + " : " + this.life + ".");
    };
    Joueur.prototype.getPoints = function () {
        return this.points;
    };
    Joueur.prototype.affichePoints = function () {
        console.log("Score de " + this.name + " : " + this.points + ".");
    };
    Joueur.prototype.getName = function () {
        return this.name;
    };
    return Joueur;
}());
var De = /** @class */ (function () {
    function De(faces) {
        this.faces = faces;
    }
    De.prototype.Launch = function () {
        var jet = Math.floor(Math.random() * this.faces + 1);
        console.log("Jet de dés : " + jet);
        return jet;
    };
    return De;
}());
var Partie = /** @class */ (function () {
    function Partie() {
        this.de = new De(6);
        this.heros = new Joueur("Arnold");
        this.heros.afficheLife();
    }
    Partie.prototype.Combat = function () {
        console.log("Un monstre approche !");
        var x = Math.floor(Math.random() * 2);
        if (x == 0) {
            this.monstre = new MonstreFacile();
            console.log("C'est un monstre facile, vous savez ce que vous avez à faire " + this.heros.getName() + ".");
        }
        else {
            this.monstre = new MonstreDifficile();
            console.log("Attention c'est un monstre difficile, bon courage " + this.heros.getName() + ".");
        }
        console.log(this.heros.getName() + " c'est à vous : ");
        this.jetHeros = this.de.Launch();
        console.log("Tour du monstre : ");
        this.jetMonstre = this.de.Launch();
        if (this.jetHeros >= this.jetMonstre) {
            console.log("Victoire du joueur !!!");
            this.heros.setPoints(this.monstre.getPoints());
            this.heros.affichePoints();
        }
        else {
        }
    };
    return Partie;
}());
var fight = new Partie();
