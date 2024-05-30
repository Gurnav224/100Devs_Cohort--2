const fs = require("fs")

// Asynchronous javascript revision

function square(n){
    return n*n;
}

function sumOfSomething(a,b){
    const num1 = square(a);
    const num2 = square(b);
    return num1+num2
}


const result1 = sumOfSomething(1,2);



function sumOfSomething2(a,b,cb){
const square1 = cb(a);
const square2 = cb(b);
return square1+square2;
}



function readFileSync(){
    fs.readFile('a.txt','utf-8',function(err,data){
        setTimeout(()=>{
            console.log(data)
        },1000)
    })
}

// readFileSync()


function writeFile(){
  fs.writeFile('b.txt','hi how are you',(err)=>{
    if(err){
        console.error('Error writing to file',err);
        return ;
    }
    setTimeout(()=>{
        console.log('file has been written')
    },3000)
    })
}



function readFile2(){
    fs.readFile('b.txt','utf-8',function(error,data){
        if(error){
            console.error('Error while reading file',error)
        }
        setTimeout(()=>{
            console.log(data)
        },5000)
    })
}
