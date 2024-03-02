
// function sayHello(firstName,lastName){
//     const message = `Hello ${firstName} ${lastName}`;
//     return message;
// }

// console.log(sayHello("Gurnav","chaudhary"))

// function square1(x){
//     return x*x;
// }


// const square2 = x => x*x;


// console.log(square1(0))
// console.log(square1(2))
// console.log(square1(5))


// console.log(square2(0))
// console.log(square2(2))
// console.log(square2(5))


// function min(a,b){
//     if(a<b){
//         return a
//     }
//     else if(b<a){
//         return b;
//     }
// }

// console.log(min(4.5,5))
// console.log(min(19,9))

// calculator

// function calculate(num1,operator,num2){
//     if(operator === "+"){
//         return num1+num2
//     }
//     else if(operator === "-"){
//         return num1-num2;
//     }
//     else if(operator === "*"){
//         return num1*num2
//     }
//     else if(operator === "/"){
//         return num1/num2
//     }
// }


// console.log(calculate(4,"+",6))
// console.log(calculate(4,"-",6))
// console.log(calculate(2,"+",0))
// console.log(calculate(12,"/",0))

function calculateCircumference(r){
   let circumference = 2*Math.PI*r
   return Math.round(circumference)
}

console.log(calculateCircumference(5))

function calculateArea(r){
    let area = Math.PI*r**2;
    return area
}

console.log(calculateArea(5))