// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday= "diwali"
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday)
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let myStr = "can you do it55";
alert(myStr.slice(-3))
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.

function take5(one,two,three,four,five){
return 100-(one+two+three+four+five)
}


console.log(take5(12,2,3,5,5))
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function take3(num1,num2,num3){
let min = Math.min(num1,num2,num3);
let max = Math.max(num1,num2,num3);
console.log(`the min number is ${min} and the max number is ${max}`)
}

take3(2,4,5)
take3(8,4,5)
take3(8,11,5)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.

function headOrTails(){
    const possibleOutcomes = ["head","tails"];
    const randomlPossibility = Math.floor(Math.random()*possibleOutcomes.length);

    return possibleOutcomes[randomlPossibility];
}

console.log(headOrTails())
console.log(headOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.


function takeNum(number){
    for(let i=0; i<=number; i++){
        console.log(headOrTails())
    }
}

takeNum(5);