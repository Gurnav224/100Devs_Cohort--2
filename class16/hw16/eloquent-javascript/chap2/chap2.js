// Exercise 1
// let str = ""
// for(let i=1; i<=7; i++){
// for(let j =1; j<i+1; j++){
//  str += "#"
// }
// str +="\n"
// }

// console.log(str)


// for(let i=1; i<=100; i++){
//     if(i%3===0){
//         console.log("Fizz")
//     }
//     if(i%5===0){
//         console.log("Buzz")
//     }
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz")
//     }
//     console.log(i)
// }

let str = ""

for(let i=1; i<=8; i++){
    for(let j=1; j<=8; j++){
        if((i+j)%2===0){

            str += " "
        }
        else{
            str += "#"
        }
    }
    str += "\n"
}

console.log(str)