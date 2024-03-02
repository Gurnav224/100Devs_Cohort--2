//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let num = [1,2,3,4,5,6,7,8,9,10];

let sum = num.reduce((acc,curr)=>acc+curr,0);

// alert(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

const squared = num.map(n=>n*n);

console.log(squared)

//Create a function that takes string
//Print the reverse of that string to the console
let str = "mystring";

let reverse = str.split('').reverse().join('');

console.log(reverse)

//Create a function that takes in a string
//Alert if the string is a palindrome or not


function checkStrPalindorme(str){
    let reverse = str.split('').reverse().join('');

    if(str===reverse){
        return "palindorme"
    }
    else{
        return "Not palindorme"
    }
}

console.log(checkStrPalindorme("nan"))