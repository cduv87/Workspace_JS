
abstract class Monstre {
    
    constructor() {
    }
    // }
    // attaque() {
    //     let de = new De(6);
    //     let jetH:number = de.Launch();
    //     let jetM:number = de.Launch();
    
    // }
    abstract getPoints():number;

}

class MonstreDifficile extends Monstre {

    private points:number = 1;
    constructor() {
    super();
    }
    getPoints():number {
        return this.points;
    }

}

class MonstreFacile extends Monstre {
    private points:number = 2;
    constructor() {
    super();
    }
    getPoints():number {
        return this.points;
    }
    

}

class Joueur {
    private points: number;
    private life: number;
    private name:string;

    constructor(nom:string) {
        this.name = nom;
        this.life = 150;
        console.log("Un nouveau joueur viens de débuter la partie : ")
        console.log("Bienvenue à " + this.name + " !!!");
    }

    setPoints(score:number) {

        this.points += score;
    }

    getLife() {
        return this.life;
    }
    afficheLife() {
        console.log("Points de vies de " + this.name + " : " + this.life + ".")
    }
    getPoints() {
        return this.points;
    }
    affichePoints() {
        console.log("Score de " + this.name + " : " + this.points + ".")
    }
    getName() {
        return this.name;
    }

}


class De {

    private faces: number;

    constructor(faces:number) {
        this.faces = faces;
    }

    Launch() {
        let jet:number = Math.floor(Math.random()*this.faces+1)
        console.log("Jet de dés : " + jet)
        return jet;
    }

}

class Partie {
    private jetHeros:number;
    private jetMonstre:number;
    private de:De;
    private heros:Joueur;
    private monstre:Monstre;

    constructor(){
        this.de = new De(6);
        this.heros = new Joueur("Arnold");
        this.heros.afficheLife();
    }
    Combat() {
        console.log("Un monstre approche !")
        let x:number = Math.floor(Math.random()*2);
        
        if(x == 0) {
            this.monstre = new MonstreFacile();
            console.log("C'est un monstre facile, vous savez ce que vous avez à faire " + this.heros.getName() + ".")
        } else {
            this.monstre = new MonstreDifficile();
            console.log("Attention c'est un monstre difficile, bon courage " + this.heros.getName() + ".")
        }

        console.log(this.heros.getName() + " c'est à vous : ");
        this.jetHeros = this.de.Launch();
        console.log("Tour du monstre : ");
        this.jetMonstre = this.de.Launch();

        if(this.jetHeros >= this.jetMonstre) {
            console.log("Victoire du joueur !!!");
            this.heros.setPoints(this.monstre.getPoints());
            this.heros.affichePoints();
        } else {
            
            
        }


    }
}
  



let fight = new Partie();


