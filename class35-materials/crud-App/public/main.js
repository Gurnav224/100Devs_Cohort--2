


const update = document.querySelector('#update-button');


update.addEventListener('click',function(){
    const data = {
        name: 'Gurnav',
        quote: 'Life is like a coin. You can spend it any way you wish, but you only .',
      }
    fetch('/quotes',
        {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }
    )
    .then((res)=>res.json())
    .then((data=>{
        console.log(data)
        window.location.reload()
    }))

})


const deleteButton = document.querySelector('#delete-button');
const message = document.querySelector('#message');


deleteButton.addEventListener('click',function(event){
    event.preventDefault()
    fetch('/quotes',
        {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:'Gurnav'
            })
        }
    )
    .then((res)=>res.json())
    .then((quotes)=>{
        console.log(quotes)
        if(quotes==='No quote to delete'){
            message.textContent = quotes
        }
        else{
            message.textContent = quotes
            setTimeout(()=>{
                window.location.reload(true)
            },1000)

        }
    })
})