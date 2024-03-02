// *Variables*
// Create a variable and console log the value
let myage = 22;

console.log(myage)
// Create a variable, add 10 to it, and alert the value
myage = myage+10

alert(myage)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subtracts4(n1,n2,n3,n4){
    return n1-n2-n3-n4
}

alert(subtracts4(1,2,3,4));

// Create a function that divides one number by another and returns the remainder

function divides(ZEBRA,Jumanji){
    return ZEBRA/Jumanji
}

console.log(divides(200,25))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function cond1(num1,num2){
   if(num1+num2>50){
    alert("Jumanji")
   }
}

cond1(23,30);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function multiplys(n1,n2,n3){
    if((n1*n2*n3)%3===0){
        alert("ZEBRA")
    }
}

multiplys(12,24,36);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function word(txt,num){
    for(let i=1; i<=num; i++){
        console.log(txt)
    }
}

word("text",21)