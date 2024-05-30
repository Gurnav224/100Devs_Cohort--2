// *Variables*
// Create a variable and console log the value
let number = 25;

console.log(number)

// Create a variable, add 10 to it, and alert the value

let three = 23;

three = three+10


alert(three)


// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtracts(n1,n2,n3,n4){
    return n1-n2-n3-n4
}
alert(subtracts(10,2,2,2,))
// Create a function that divides one number by another and returns the remainder

function remainder(n1,n2){
    return n1%n2
}
console.log(remainder(18,4))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function addTwo(n1,n2){
    let sum = n1+n2;

    if(sum > 50){
        alert("Jumanji")
    }
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplys(n1,n2,n3){
    let product = n1*n2*n3;

    if(product%3===0){
        alert("ZEBRA")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in


function countToX(word,x){
    for(let i=0; i<x; i++){
        console.log(i,word)
    }
}

countToX('hello',5)