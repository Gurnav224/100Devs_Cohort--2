//Create a dog object that has four properties and three methods

let dog = {}

dog.breed= 'labrador';
dog.color = 'black';
dog.legs = 4
dog.age = 8

dog.name = 'busho'


dog.bark = function(){
    return 'bark'
}

dog.jump = function(){
    return 'Jump'
}


dog.fetch = function(){
    return "Zooommm"
}

console.table(dog)