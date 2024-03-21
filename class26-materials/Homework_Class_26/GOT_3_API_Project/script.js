
const url = 'https://thronesapi.com/api/v2'

function getAllCharacter(){
  fetch(url+'/Characters')
  .then((res)=>res.json())
  .then((data)=>displayCharacter(data))
  .catch((error)=>console.log('error'+error))
}

getAllCharacter()

const characterDiv = document.querySelector('#displayCharacter')

function displayCharacter(characters){
    console.log(characters)
    characterDiv.innerHTML = characters.map((character)=>{
       console.log(character)
 return  `<div class="character">
 <img src=${character.imageUrl} />
  <h2>${character.fullName}</h2>
 <h3>${character.title}</h3>
 <p>${character.family}</p>
  <button onclick="single(${character.id})" >view Details </button>
  </div>`
    
}).join("")



}



const singleDisplay = document.querySelector('#DisplaySingleCharacter')

function displaySingle(character){
    singleDisplay.innerHTML = "Loading..........."
    if(character){

        singleDisplay.innerHTML =    `<div class="single">
           <img src=${character.imageUrl} />
            
            <h2>${character.fullName}</h2>
           <h3>${character.title}</h3>
           <p>${character.family}</p>
            </div>`
    }
}


function single(id){

    fetch(`${url}/Characters/${id}`)
    .then(res=>res.json())
    .then((data)=>displaySingle(data))
    .catch(err=>console.log("error",err))


}

single(0)