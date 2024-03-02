// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".


function arr(ar){
if(ar[0]<ar[ar.length-1]){
    alert("Hi")
}
else if(ar[0]>ar[ar.length-1]){
    alert("bye")
}
else if(ar[0]===ar[ar.length-1]){
    alert("we close in an hour")
}

}


console.log(arr([6,2,3,4,5,6]))