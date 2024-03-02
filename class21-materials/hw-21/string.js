
function max(...numbers){
let result = -Infinity;
for(let number of numbers){
    if(number>result) result = number
}
return result
}

console.log(max(1,2,2,4,5,23))