//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["GOT","cursed s3","mirzapur","class of 2020"];

for(let i=0; i<tvShows.length; i++){
    console.log(tvShows[i])
}
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let newArr = [1,2,3,4,5,6,9,7,8]

let arr = newArr.filter((num)=>num%2===0);

console.log(arr)


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number



function sumOfArr(arr){
let l = arr.sort((a,b)=>a-b)
let secondLow = l[1];
let secondHigh = l[l.length-2]
return secondHigh+secondLow
}



console.log(sumOfArr(newArr))
