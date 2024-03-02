//Get a dog photo from the dog.ceo api and place the photo in the DOM

const img = document.querySelector('img');
const random = document.querySelector("#random")

function getDogApiData(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>res.json())
    .then((data)=>{
        displayImg(data)

        
    })
    .catch((err)=>console.log(err))
}

getDogApiData();


random.addEventListener('click',function(){
    getDogApiData()
})

function displayImg(src){
    console.log("displaying data",src)
    img.setAttribute('src',src.message)
}

