// class Animal{
//     constructor(name){
//         this._name = name
//     }
//     get name(){
//         return this._name
//     }
//     speak(){
//         console.log(`${this._name} makes a sound`)
//     }
// }

// class Dog extends Animal{
//     constructor(name,breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} barks`)
//     }
// }
// class Cat extends Animal{
//     constructor(name, breed){
//         super(name)
//         this._breed = breed
//     }
//     get breed(){
//         return this._breed
//     }
//     speak(){
//         super.speak()
//         console.log(`${this.name} meows`)
//     }
// }


class Parent{
    constructor(fathername,mothername){
        this._fathername = fathername;
        this._mothername = mothername
    }
    get getName(){
      return  this._fathername
    }
    sayName(){
        console.log(`My parents Name are: ${this._fathername} and ${this._mothername}`)
    }
}


class Mother extends Parent{
    constructor(fathername,mothername,gender){
        super(fathername,mothername)
        this._gender = gender;
    }
    get getName(){
      return  this._mothername
    }
    get sayGender(){
        return this._gender
    }
    sayHello(){
        console.log(`I am mother and my name is ${this._mothername} and my gender is ${this._gender}`)
    }
}

class Father extends Parent{
    constructor(fathername,mothername,gender){
        super(fathername,mothername)
        this._gender = gender
    }
    get getName(){
        return this._fathername
    }
    get sayGender(){
        return this._gender
    }
    sayHello(){
        console.log(`I am father and my name is ${this._fathername} and my gender is ${this._gender}`)
    }
}

const parent = new Parent('Abhishek','saloni');

const mother = new Mother('vaibhav','priya','female');

const father = new  Father('abhay','neha','male')


console.log(parent)
console.log(mother)
console.log(father)


