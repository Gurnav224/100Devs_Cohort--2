

// async and await 


async function fetchApi(){

    try {
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        if(!response.ok){
            throw new Error(`HTTP error : ${response.status}`)
        }
        const data = await response.json();

 const totalPrice = calculateTotalPrice(data);

 console.log(totalPrice)

    } catch (error) {
        console.error(`Could not get products: ${error} `)
    }
}

fetchApi()


function calculateTotalPrice(data){
    let totalPrice = 0;
 for(let i=0; i<data.length; i++){
  totalPrice += data[i].price;
 }
return totalPrice
}