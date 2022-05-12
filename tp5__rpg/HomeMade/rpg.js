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
console.log("Hello Transpiler !");
var Monster = /** @class */ (function () {
    function Monster() {
        this.Alive = true;
    }
    Monster.prototype.isAlive = function () {
        return this.Alive;
    };
    Monster.prototype.isDamaged = function () {
        this.Alive = false;
    };
    return Monster;
}());
var MonsterEasy = /** @class */ (function (_super) {
    __extends(MonsterEasy, _super);
    function MonsterEasy() {
        var _this = _super.call(this) || this;
        _this.points = 1;
        return _this;
    }
    MonsterEasy.prototype.attack = function (player) {
        var dice = new Dice();
        var tossMonster = dice.launch();
        var tossPlayer = dice.launch();
        var tossShield = dice.launch();
        if (tossMonster > tossPlayer && tossShield > 2) {
            player.isDamaged(10);
        }
        else {
            player.setScore(this.getPoints());
            this.isDamaged();
            player.whichMob(this, player);
        }
    };
    MonsterEasy.prototype.getPoints = function () {
        return this.points;
    };
    return MonsterEasy;
}(Monster));
var MonsterHard = /** @class */ (function (_super) {
    __extends(MonsterHard, _super);
    function MonsterHard() {
        var _this = _super.call(this) || this;
        _this.points = 2;
        return _this;
    }
    MonsterHard.prototype.attack = function (player) {
        var shieldLimit = 2;
        var magicAvoid = 6;
        var dice = new Dice();
        var tossMonster = dice.launch();
        var tossPlayer = dice.launch();
        var tossShield = dice.launch();
        var tossMagickAttack = dice.launch();
        if (tossMonster > tossPlayer && tossShield > shieldLimit) {
            player.isDamaged(10);
            if (tossMagickAttack != magicAvoid) {
                player.isDamaged(tossMagickAttack * 5);
            }
        }
        else {
            player.setScore(this.getPoints());
            this.isDamaged();
            player.whichMob(this, player);
        }
    };
    MonsterHard.prototype.getPoints = function () {
        return this.points;
    };
    return MonsterHard;
}(Monster));
var Player = /** @class */ (function () {
    function Player() {
        this.easyDown = 0;
        this.hardDown = 0;
        this.score = 0;
        this.life = 150;
        this.alive = true;
    }
    Player.prototype.getLife = function () {
        return this.life;
    };
    Player.prototype.isAlive = function () {
        if (this.getLife() <= 0) {
            this.alive = false;
        }
        return this.alive;
    };
    Player.prototype.isDamaged = function (damage) {
        this.life -= damage;
    };
    Player.prototype.setScore = function (points) {
        this.score += points;
    };
    Player.prototype.getScore = function () {
        return this.score;
    };
    Player.prototype.getEasy = function () {
        return this.easyDown;
    };
    Player.prototype.getHard = function () {
        return this.hardDown;
    };
    Player.prototype.incrEasy = function () {
        this.easyDown++;
    };
    Player.prototype.incrHard = function () {
        this.hardDown++;
    };
    Player.prototype.whichMob = function (monster, player) {
        if (monster instanceof MonsterEasy) {
            player.incrEasy();
        }
        else {
            player.incrHard();
        }
    };
    Player.prototype.attack = function (monster) {
        var dice = new Dice();
        var tossMonster = dice.launch();
        var tossPlayer = dice.launch();
        if (tossPlayer >= tossMonster) {
            monster.isDamaged();
            this.whichMob(monster, this);
        }
    };
    return Player;
}());
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.prototype.launch = function () {
        return Math.floor(Math.random() * 6);
    };
    return Dice;
}());
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.popMob = function () {
        var coin = Math.floor(Math.random() * 2);
        if (coin == 0) {
            return new MonsterEasy();
        }
        else {
            return new MonsterHard();
        }
    };
    return Game;
}());
//équivalent main :
var player = new Player();
var game = new Game();
var mob;
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
console.log("Bravo !!! Vous avez tué " + player.getEasy() + " monstres faciles et " + player.getHard() + " monstres difficiles.");
console.log("Vous avez " + player.getScore() + " points.");
