//Create a stopwatch object that has four properties and three methods

const stopwatch = {
    brand:'titan',
    color:'black',
    price:"1200$",
    isAvailable:true,
    getBrand:function(){
        console.log(this.brand)
    },
    getColor:function(){
        console.log(this.color)
    },
    getPrice:function(){
        console.log(this.price)
    }
}


console.log(stopwatch)

console.log(stopwatch.getBrand())