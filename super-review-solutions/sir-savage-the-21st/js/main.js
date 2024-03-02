//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function Print21Times(){
    for(let i=1; i<=21; i++){
        document.querySelector('#savageSays').innerHTML += " 21"
    }
}
Print21Times();
