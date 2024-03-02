//Create a pizza object that has four properties and three methods

let pizza = {};

pizza.name = "Pizaa Express 2.O";
pizza.type = "Fast Food";
pizza.price = 300;
pizza.rating = 4.5;

pizza.offer = function(){
    if(this.price>=300){
     return "Flat 15% OFF"
    }
}

pizza.fastDelivery = function(){
    return "For Fast Delivery Extra charge are applicable"
}

pizza.Choose = function(){
    return true?"veg":"non-veg"
}




console.log(pizza)