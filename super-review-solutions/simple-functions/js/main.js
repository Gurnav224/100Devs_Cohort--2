//---Easy
//create a function that subtracts two numbers and alerts the difference
function subtract(a,b){
    return a-b;
}

alert(subtract(10,5))
//create a function that divides three numbers and console logs the quotient
function divides(a,b,c){
    return a/b/c
}

console.log(divides(12,6,2));
//create a function that multiplys three numbers and returns the product
function multiply(a,b,c){
    return a*b*c
}

console.log(multiply(3,5,6));

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number

function threeNumber(n1,n2,n3){
    return ((n1+n2)%n3)
}


console.log(threeNumber(12,24,56));

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number


function hard(p1,p2,p3,p4){
  if(p1*p2>100){
     console.log(p3+p4);
  }
  else if(p1*p2<100){
    console.log(p3-p4)
  }
  else if(p1*p2===100){
    alert((p1*p2*p3)%p4)
  }
}


hard(25,40,45,18);