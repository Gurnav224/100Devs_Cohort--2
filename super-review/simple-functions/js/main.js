//---Easy
//create a function that subtracts two numbers and alerts the difference

function sub(num1,num2){
    console.log(num1-num2)
}

sub(10,5)

//create a function that divides three numbers and console logs the quotient;

function divides(num1,num2,num3){
console.log(num1/num2/num3)
}

divides(10,5,2)

//create a function that multiplys three numbers and returns the product


function multiply(num1,num2,num3){
    return num1*num2*num3
}
multiply(19,2,4)
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function Medium(num1,num2,num3){
    let add = num1+num2;

    return add%num3
}

console.log(Medium(9,4,3))
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function Hard(num1,num2,num3,num4){
    let multiply = num1*num2;
    if(multiply>100){
        console.log(multiply+num3+num4)
    }
    else if(multiply<100){
        console.log(multiply-num3-num4)
    }
    else if(multiply===100){
        console.log((num1*num2*num3)%num4)
    }
}

Hard(5,4,3,2)