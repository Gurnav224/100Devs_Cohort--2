//--- Easy
//create a variable and assign it a number
var num = 12
//minus 10 from that number
num = num-10;
//print that number to the console
console.log(num)
//--- Medium
//create a variable that holds a value from the input

//add 25 to that number
//alert that number




//--- Hard
//create a variable that holds the h1

//add an event listener to that element that console logs the sum of the two previous variables

const h1 = document.querySelector('h1');
const show = document.querySelector('#show');


h1.addEventListener('click',()=>{
    let input = Number(document.querySelector('input').value);

input += 25;
show.textContent = input+num
})