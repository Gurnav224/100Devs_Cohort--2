
const url = "https://api.publicapis.org"

const loading = document.querySelector('.loading');

const row = document.querySelector('.row')
console.log(row)

const select = document.querySelector('#category');

const apiCounts = document.querySelector('#counts');

const random = document.querySelector('#random');

const health = document.querySelector('#health')

const allApi = document.querySelector('#allApi');

const searchForm = document.querySelector('#searchForm');



allApi.addEventListener('click',()=>{
    fetchData(url)
})

random.addEventListener('click',async ()=>{
   const apiUrl = `${url}/random`;

   const response = await fetch(apiUrl);
   const data  = await response.json();
   displayData(data)
})


async function displayCategory(url){
 const categoryApi = `${url}/categories`;
 const response = await fetch(categoryApi);
 const data = await response.json();
 let categories = data.categories

 categories.map((category)=>{
    const opt = document.createElement('option');
    opt.value = category;
    opt.textContent = category;
    select.appendChild(opt)
 })
}

displayCategory(url)

async function fetchData(url,category,search){
    try{
        
        loading.style.display = 'block'
        let apiUrl = `${url}/entries`
        // Add search term to the API URL if provided
        
        if(category){
            apiUrl +=`?Category=${category}`
        }
        console.log(apiUrl)
       
        const response = await fetch(apiUrl);
        const data = await response.json()

     displayData(data)
    }
    catch(error){
        console.error("error while fetching data",error)
    }
}

fetchData(url)


searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const search = document.querySelector('#searchInput').value;
    fetchData(url,search)
})

select.addEventListener('change',()=>{
    const category = select.value;
    console.log(category);

    fetchData(url,category)
   
})



function displayData(data){
    const allApi = data.entries;
    console.log(allApi)
    loading.style.display = "block"
    apiCounts.textContent = `Total Number Of API ${data.count}`
    row.innerHTML = ''


    for(let i=0; i<allApi.length; i++){
        const col = document.createElement('div');
        col.className = 'col-md-4';
        const card = document.createElement('div');
        card.className = 'card m-2 border-dark';
        const apiName = document.createElement('h3');
        apiName.className = 'card-header '
        apiName.innerHTML = `<strong>API: </strong> ${allApi[i].API}`

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const description = document.createElement('p');
        description.className = 'card-text';
        description.innerHTML = `<strong>Description: </strong>${allApi[i].Description}`

        const auth =  document.createElement('p');
        auth.className = 'card-text';
        auth.innerHTML = `<strong>Auth: </strong> ${allApi[i].Auth?"required":"not required"}`

        const HTTPS = document.createElement('p');
        HTTPS.className = 'card-text';
        HTTPS.innerHTML = `<strong>HTTPS: </strong>${allApi[i].HTTPS}`

        const cors = document.createElement('p');
        cors.className = 'card-text';
        cors.innerHTML = `<strong>CORS: </strong>${allApi[i].Cors}`

        const link = document.createElement('a');
        link.href = allApi[i].Link
        link.target = "_blank"
        link.className = 'btn btn-primary'
        link.textContent = 'Check'

        const category = document.createElement('p');
        category.className = 'card-text';
        category.innerHTML = `<strong>Category </strong> ${allApi[i].Category}`
    
        cardBody.appendChild(description)
        cardBody.appendChild(auth)
        cardBody.appendChild(HTTPS)
        cardBody.appendChild(cors)
        cardBody.appendChild(category)
        cardBody.appendChild(link)
        card.appendChild(apiName)
        card.appendChild(cardBody)
       col.appendChild(card)
    row.appendChild(col)
    }
   


  
}




