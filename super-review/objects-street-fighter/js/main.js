//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods


class Fighter{
    constructor(name,strength,stealth,score){
        this.name = name;
        this.stealth = stealth;
        this.strength = strength;
        this.score = score;
        this.getName=function(){
          return this.name
        }
        this.getStrength = function(){
            return this.strength 
        }
        this.getScore = function(){
            return this.score
        }
    }

   
}


const fighter = new Fighter('poke',1000,200,0);

console.log(fighter)

const newF = new Fighter('jole',299,39,19);

Fighter.prototype.speed = 1000

console.log(newF)