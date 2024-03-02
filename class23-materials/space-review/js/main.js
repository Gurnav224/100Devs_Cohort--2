//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.

let arr = [1,2,3,4,5,6,7,8,9];

const sum = arr.reduce((acc,curr)=>acc+curr,0);

alert(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

function makeSqure(squared){
return squared.map((num)=>num*num)
}

console.log(makeSqure(arr))

let str = "i am lookig entery level web developemnt job"

//Create a function that takes string
//Print the reverse of that string to the console

function revStr(str){
    return str.split('').reverse().join("")
}

console.log(revStr(str))

//Create a function that takes in a string
//Alert if the string is a palindrome or not

let str2 = "121"

function checkPalindorme(str){
    let rev = str.split('').reverse().join("");

    if(rev===str){
        return "str is palindorme"
    }

    return "not a palindorme"
}


console.log(checkPalindorme(str2))
console.log(checkPalindorme(str))
console.log(checkPalindorme('racecar'))