console.log("Hello Transpiler !");


abstract class Monster {
    private Alive: boolean;
    constructor() {
        this.Alive = true;
    }
    isAlive() {
        return this.Alive
    }
    isDamaged() {
        this.Alive = false;
    }
    abstract attack(player: Player);
    abstract getPoints(): number;
}

class MonsterEasy extends Monster {

    private points: number;
    constructor() {
        super();
        this.points = 1;
    }
    attack(player: Player) {
        let dice = new Dice();
        let tossMonster = dice.launch();
        let tossPlayer = dice.launch();
        let tossShield = dice.launch();
        if (tossMonster > tossPlayer && tossShield > 2) {
            player.isDamaged(10);
        } else {
            player.setScore(this.getPoints());
            this.isDamaged();
            player.whichMob(this, player);
        }
    }
    getPoints(): number {
        return this.points;
    }

}

class MonsterHard extends Monster {
    private points: number;
    constructor() {
        super();
        this.points = 2;
    }

    attack(player: Player) {
        const shieldLimit = 2;
        const magicAvoid = 6;
        let dice = new Dice();
        let tossMonster = dice.launch();
        let tossPlayer = dice.launch();
        let tossShield = dice.launch();
        let tossMagickAttack = dice.launch();
        if (tossMonster > tossPlayer && tossShield > shieldLimit) {
            player.isDamaged(10);
            if (tossMagickAttack != magicAvoid) {
                player.isDamaged(tossMagickAttack * 5);
            }
        } else {
            player.setScore(this.getPoints());
            this.isDamaged();
            player.whichMob(this, player);
        }

    }
    getPoints(): number {
        return this.points;
    }
}

class Player {
    private easyDown = 0;
    private hardDown = 0;
    private score = 0;
    private alive: boolean;
    private life: number;
    constructor() {
        this.life = 150;
        this.alive = true;
    }

    getLife() {
        return this.life;
    }

    isAlive() {
        if (this.getLife() <= 0) {
            this.alive = false;
        }
        return this.alive;
    }

    isDamaged(damage: number) {
        this.life -= damage;
    }

    setScore(points:number) {
        this.score += points;
    }

    getScore() {
        return this.score;
    }

    getEasy() {
        return this.easyDown;
    }

    getHard() {
        return this.hardDown;
    }

    incrEasy() {
        this.easyDown ++;
    }

    incrHard() {
        this.hardDown ++;
    }

    whichMob(monster:Monster, player:Player) {
        if (monster instanceof MonsterEasy) {
            player.incrEasy();
        } else {
            player.incrHard();
        }
    }

    attack(monster: Monster) {
        let dice = new Dice();
        let tossMonster = dice.launch();
        let tossPlayer = dice.launch();
        if( tossPlayer >= tossMonster) {  
            monster.isDamaged();
            this.whichMob(monster, this);
        }


    
    }

}

class Dice {

    constructor() {

    }

    launch(): number {
        return Math.floor(Math.random() * 6);
    }

}

class Game {

    constructor() {

    }

    popMob(): Monster {
        let coin = Math.floor(Math.random() * 2);
        if (coin == 0) {
            return new MonsterEasy();
        } else {
            return new MonsterHard();
        }
    }

}

//équivalent main :
let player = new Player();
let game = new Game();
let mob:Monster;
do {  
    
    mob = game.popMob(); 
    do {
        player.attack(mob);
        if (mob.isAlive) {
            mob.attack(player);
        }
        
    } while (mob.isAlive());

} while (player.isAlive());

console.log("Snif, vous êtes mort...");
console.log("Bravo !!! Vous avez tué " + player.getEasy() +" monstres faciles et " + player.getHard() + " monstres difficiles.");
console.log("Vous avez " + player.getScore() + " points.");



