console.log("Hello from typescript")

abstract class FigureGeometrique {

    private couleur: string;

    constructor(couleur: string) {



        this.couleur = couleur;

    }

    getCouleur(): string {
        return this.couleur;
    }

    setCouleur(couleur: string) {
        this.couleur = couleur;

    }

    abstract calculAire():number;

}

class Carre extends FigureGeometrique {

    private cote: number;

    constructor(couleur: string , cote: number) {
        super(couleur);
        this.cote = cote;
    }

    getCote():number {
        return this.cote;

    }

    calculPerimeter():number {
        return 4 * this.cote;
    }

    calculAire(): number {
        return this.cote * this.cote;
    }

}

// let figure = new FigureGeometrique("rouge");
// console.log(figure.getCouleur());

let carre1 = new Carre("vert", 5);
console.log(carre1);
console.log(carre1.calculPerimeter());
console.log(carre1.getCote());
console.log(carre1.calculAire());
