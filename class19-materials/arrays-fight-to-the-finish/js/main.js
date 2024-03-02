//Create an array of movie titles. Loop through the array and each element to the h2.

let movie = ['spider man','Avenger','Thor']

for(let i=0; i<=movie.length-1; i++){
    document.querySelector("h2").innerHTML += movie[i]
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.

const num = [10,20,30];

num.forEach((ele,idx)=>{
  num[idx] = ele+3
})

console.log(num)
//Find the average of all the numbers from question three



let sum  = 0;
let avg = 0
for(let i=0; i<=num.length; i++){
   sum = sum+i;

   avg = sum/num.length;

}

console.log(avg)