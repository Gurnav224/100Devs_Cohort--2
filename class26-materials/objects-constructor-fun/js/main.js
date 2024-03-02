//Create a constructor with 4 properties and 3 methods


function MakePizza(size,toppings,price,discount){
  this.size = size;
  this.toppings = toppings;
  this.price = price;
  this.discount = discount;
  this.fastDelivery = function(){
    return "Pay Extra penny"
  }
  this.choose = function(){
    return true?"Veg":"Non-Veg"
  }
  this.name = function(){
    return "Pizza Express 2.0"
  }
}

MakePizza.prototype.cheese = true;

let newPizza = new MakePizza("large",['garle','onion','tamato'],300,"15% OFF");

console.log(newPizza)