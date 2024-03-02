// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value

let myfood = "burger";

alert(myfood)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = "myString";

alert(str.charAt(1))
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function num3(a,b,c){
   return (a/b)*c
}

console.log(num3(3,4,6))
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cuberoot(n){
return Math.cbrt(n)
}

console.log(cuberoot(3))
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


function weather(month){
    let lowerMonth  = month.toLowerCase()
    if(lowerMonth==="june" || lowerMonth==="july" || lowerMonth==="august"){
    alert("YAY")
    }
    else{
        alert("BOO!")
    }
}


console.log(weather("june"))
//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.


function lo(n){
for(let i=1; i<=n; i++){
    if(i%5!==0){

        console.log(i)
    }
}
}

console.log(lo(25))