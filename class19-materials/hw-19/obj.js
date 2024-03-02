const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
  };
  
  pen.type;  // "ballpoint"
  pen.color; // "blue"
  pen.brand; // "Bic"




  const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp:1,

    describe(aurora){
        return `${this.name} has ${this.health} has health points and ${this.strength} as strength and ${this.xp} xp`
          }
  };

  // aurora is harmed by an arrow

  aurora.health -= 20;

  aurora.strength += 10

  aurora.xp += 15;
  


//   console.log(aurora.describe())



const dog = {
    name:"buso",
    species:"labra",
    size:"medium",

  bark(){
    return "BOO BOO !"
  }
}
// console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
// console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


const r = 5;

// TODO: create the circle object here

const circle = {
    circumference(){
        return 2*Math.PI*r
    }
,
    area(){
return Math.PI*r*r
    }
}

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

const account = {
    name:"Alex",
    balance:0,
    credit(value){
         if(value>0){
            return "Positive"
         }
         else {
            return "Negative"
         }
    },
    debit(amt){
return `debit ${amt}`
    },
    describe(){
        return `Owner ${this.name} , balance ${this.balance}`
    }
}

console.log(account.describe())

console.log(account.credit(250))

console.log(account.debit(80))