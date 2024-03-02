//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function arrNum(arr){
    let even = [];

    arr.forEach((num)=>{
        if(num%2===0){
            even.push(num)
        }
    })

return even
}


let l = arrNum([1,2,3,4,5,6,7,10,12]);


console.log(l)