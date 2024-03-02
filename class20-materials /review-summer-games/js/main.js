//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function arrNum(arr){
    let prod = 1;
arr.forEach(num => prod *=num  );

console.log(prod)
}


arrNum([10,2,3])