//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)


function evenNumber(arr){
    let  evenarr = [];
    arr.forEach(element => {
        if(element%2===0){
            evenarr.push(element)
        }
    });
    return evenarr
}


console.log(evenNumber([1,2,3,4,5,6,7,8,9,10]))