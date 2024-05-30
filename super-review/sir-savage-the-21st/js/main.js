//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

document.querySelector('h1').addEventListener('click',()=>{
    for(let i=1; i<=21; i++){
        console.log(i,'21')
        const h2 = document.createElement('h2');
        h2.textContent = Number(i)+'. 21'
    
        document.body.appendChild(h2)
    }
})

