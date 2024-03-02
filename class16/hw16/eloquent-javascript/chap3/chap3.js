// exercise 1

function minimumTwoNumbers(num1,num2){

  if(num1>num2){
   return num2+" is minimum"
  }
  else{
    return num1+" is is minimum"
  }
}

// console.log(minimumTwoNumbers(0,10))
// console.log(minimumTwoNumbers(0,-10))

// exercise 2

function isEven(n){
  if(n===0){
    return true
  }
  else if(n===1){
    return false
  }
  else if(n<0){
    return n= -n
  }

  return isEven(n-2)
}

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// Exercise 3;

function countBs(B){
  let count = 0;
  for(let i=0; i<B.length-1; i++){
    if(B[i]==="B"){
      count++;
    }
  }
  return count
}


// console.log(countBs("BBCBCDBCBCG"))


function countChar(str,word){

  let count = 0;

  for(let i=0; i<str.length; i++){
    if(str[i]===word){
      count++
    }
  }
  
return count;
}


// console.log(countChar("kakkerlak", "k"));