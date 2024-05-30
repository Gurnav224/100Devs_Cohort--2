// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// 

class Contractor{
    constructor(name,role){
        this._name = name;
        this._role = role
    }
    get name(){
        return this._name
    }

    sayHello(){
        console.log(`Hello, my name is ${this._name} and I'm on the ${this._name} role`)
    }

}


class Front extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = tech;
    }

    get tech(){
        return this._tech
    }

    sayHello(){
        console.log(`Hello I am a ${this._name} and I work on the frontend !`)
    }
}

class Backend extends Contractor{
    constructor(name,role,tech){
        super(name,role)
        this._tech = role
    }

    get tech(){
        return this._tech
    }

    sayHello(){
        console.log(`Hello I am a ${this._name} and I work on the backend`)
    }
}

const machi = new Front('The machine','Front-end');
const simba = new Backend('Simba','Backend','Nodejs')






let anglist  = [machi,simba];

for(let a of anglist){
    a.sayHello()
}