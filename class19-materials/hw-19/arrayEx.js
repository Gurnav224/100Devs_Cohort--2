// exercise 1
const musketeers = ["Athos", "Porthos","Aramis"];

for(let i=0; i<musketeers.length; i++){
    // console.log(musketeers[i])
}

// add an element

// musketeers.push("D'Artagnan");


// foreach
musketeers.forEach((musk)=>{
    // console.log(musk)
})


//

// console.log(musketeers.pop())


for(const musk of musketeers){
    // console.log(musk)
}


// ex 2 sum of values

const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

for(let i=0; i<values.length; i++){
    sum = sum+values[i]
}

// console.log(sum)


// ex 3 array maximu value

let max  = values[0]

for(let i=0; i<values.length; i++){
    
    if(values[i]>max){
        max = values[i]
    }
}

// console.log(max)

