


class Character {
    constructor(name, health, strength){
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.xp = 0;
        this.inventory = {
            gold: 10,
            keys: 1
        };
    }

    attack(target){
        if(this.health > 0){
            let damage = this.strength;
            console.log(`${this.name} attacks ${target.name} and causes ${damage} points of damage, ${this.inventory.gold} gold, and ${this.inventory.keys} key.`);
            target.health -= damage;
            if(target.health > 0){
                console.log(`${target.name} has ${target.health} health points left.`);
            } else {
                this.health = 0;
                const bonusXP = 10;
                console.log(`${this.name} eliminates ${target.name} and gains ${bonusXP} experience points.`);
                this.xp += bonusXP;
                this.acquireInventory(target.inventory);
            }
        } else {
            console.log(`${this.name} can't attack as they are eliminated.`);
        }
    }

    describe(){
        return `${this.name} has ${this.health} health points, ${this.strength} strength, and ${this.xp} experience points. Inventory: Gold - ${this.inventory.gold}, Keys - ${this.inventory.keys}.`;
    }

    acquireInventory(victimInventory){
        this.inventory.gold += victimInventory.gold;
        this.inventory.keys += victimInventory.keys;
    }
}

const aurora = new Character('Aurora', 150, 25);
const glacius = new Character('Glacius', 130, 30);

console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character('Spike', 40, 20);

console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());
