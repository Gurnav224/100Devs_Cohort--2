// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let myVar = "happy new year?";

alert(myVar.endsWith("?"))
//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console

let myrole = "I am looking junior developer job";



console.log(myrole.replace("junior developer","software engineer"))


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function makeChoice(){
 const choice = Math.random();

 if(choice<0.33){
    return "rock"
 }
 else if(choice<0.66){
   return "paper"
 }
 else{
    return "scissors"
 }
}

console.log(makeChoice());


// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function


function winnerChoice(choice){
    let bot = makeChoice();

    if((choice==="rock" && bot==="scissors")||(choice==="paper" && bot==="paper")||(choice==="scissors"&&bot==="paper")){
        console.log("win")
    }
    else if(choice===bot){
        console.log("you tied")
    }
    else{
        console.log("you lose")
    }
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


function choices(arr){
    arr.forEach(choice => {
         winnerChoice(choice)
    });
}
choices(['rock','paper','scissors'])