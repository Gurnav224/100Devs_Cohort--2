class Expresso{
    constructor(color,make,model,price){
this.color = color;
this.make = make;
this.model = model;
this.price = price
    }
    turnOn(){
        console.log("Good Day, I am now on!")
    }
    steam(){
        console.log('Itss summer sale 50%%%%%%%%') 
    }
    brew(){
        console.log("Good stuff coming you way")
    }
}



let espresso = new Expresso('red','Gaggia','Classic PRO',400);

console.log(espresso)