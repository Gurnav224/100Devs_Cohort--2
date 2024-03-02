//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const getCocktail = document.querySelector("#getCocktailByName");
const getCocktailIdBtn = document.querySelector("#getCocktailById");
const getCocktailFirstLetter = document.querySelector(
  "#getCocktailByFirstLetter"
);
const randomCocktailBtn = document.querySelector("#random");
const categorySelectBtn = document.querySelector('#floating-select');

// function to fetch cocktail data by Name ;

async function getCocktailByName() {
  const searchInput = document.querySelector("input").value;
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  try {
    const res = await fetch(url + searchInput);
    return await res.json();
  } catch (err) {
    return console.error("Error while getting cocktail by Name", err);
  }
}

// function to fetch cocktail data by Id

async function getCocktailById(cocktailId) {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
  try {
    const res = await fetch(url + cocktailId);
    return await res.json();
  } catch (error) {
    return console.error("Error while getting cocktail by Id", error);
  }
}

// function to fetch cocktail data by firstLetter;

async function getCocktailByFirstLetter(letter) {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
  try {
    const res = await fetch(url + letter);
    return await res.json();
  } catch (error) {
    return console.error("Error while getting cocktail by FirstLetter", error);
  }
}

// function to  fetch random cocktail;
async function getRandomCocktail(){
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    try {
        const res = await fetch(url);
        return await res.json()
    } catch (error) {
        return console.error("Error while getting random cocktail",error)
    }
}


// function to fetch list of cocktails via categories;

async function getCocktailByCategoriesList(){
const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

try {

    const res = await fetch(url);
    
    return await res.json();
  
    
} catch (error) {
    return console.error("Error fetching cocktails list ",error)
}
}

// function to fetch cocktail by categories;

async function getCocktailByCategories(category){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;


    try {
        const res = await fetch(url);
        const data =  await res.json()
        if(data.drinks){
            console.log(data.drinks)
            displayCocktails(data.drinks)
        }
        else{
            console.log(`No cocktails found for category: ${category}`)
        }
    } catch (error) {
        return console.error("Error fetching cocktail by category",error)
    }
}


// function to display cocktails in the DOM

function displayCocktails(cocktails) {
  const rowElement = document.querySelector(".row");
  rowElement.innerHTML = "";
  cocktails.forEach((cocktail) => {
    rowElement.innerHTML += `
            <section class="col-4 my-3">
    
           <div class="card" >
      <img src=${cocktail.strDrinkThumb} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${cocktail.strDrink}</h5>
        <p class="card-text">${cocktail.strInstructions||""}</p>
      </div>
    </div>
    </section>
            `;
  });
}

// function to display categories in a dropdown select element;



document.addEventListener("DOMContentLoaded", () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  getCocktailByName(url).then((data) => {
    if (data.drinks) {
      displayCocktails(data.drinks);
    } else {
      document.querySelector(".row").innerHTML = "<h1>No Cocktails Found</h1>";
    }
  });

});

// event listener for getting cocktails by Names
getCocktail.addEventListener("click", () => {
  const cocktailByNameData = getCocktailByName();

  cocktailByNameData.then((data) => {
    if (data.drinks) {
      displayCocktails(data.drinks);
    } else {
      console.log("No Cocktails Found");
      document.querySelector(".row").innerHTML = "<h1>No Cocktails Found</h1>";
    }
  });
});

//event listener get cocktail by Id

getCocktailIdBtn.addEventListener("click", () => {
  const cocktailId = document.querySelector("input").value;

  const cocktailById = getCocktailById(cocktailId);

  cocktailById.then((data) => {
    if (data.drinks) {
      console.log(data.drinks);
      displayCocktails(data.drinks);
    } else {
      console.log("No cocktail found with the provided Id");
    }
  });
});

// event listener get cocktail by first letter;

document.querySelector("input").addEventListener("change", () => {
  const firstLetter = document.querySelector("input").value;
  const cocktailByFirstLetter = getCocktailByFirstLetter(firstLetter);
  console.log(firstLetter);
  cocktailByFirstLetter.then((data) => {
    if (data.drinks) {
      displayCocktails(data.drinks);
    } else {
      console.log("No cocktail found iwth the provided FirstLetter");
    }
  });
});



// event listener to get random cocktail

randomCocktailBtn.addEventListener('click',()=>{
    const randomCocktail = getRandomCocktail();

    randomCocktail
    .then((data)=>{
        if(data.drinks){
         displayCocktails(data.drinks)
        }
        else{
            console.log("No Cocktail found")
        }
    })
})

// event listener to get list of cocktail categories;

document.addEventListener("DOMContentLoaded", () => {
  const cocktailCategories = getCocktailByCategoriesList();

  cocktailCategories.then((data) => {
    if (data.drinks) {
      const categories = data.drinks.map((drink) => drink.strCategory);
      displayCategoriesInDropdown(categories);
    } else {
      console.log('No categories found');
    }
  });
});




// function to display categories in a dropdown select ;

function displayCategoriesInDropdown(categories){
 const selectCategory = document.getElementById("floating-select");

 categories.forEach(category=>{
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    selectCategory.appendChild(option)
 })
}

// event listener to the category select element;

categorySelectBtn.addEventListener('change',()=>{
    const selectedCategory = categorySelectBtn.value;
    console.log(selectedCategory)
     if(selectedCategory){
        getCocktailByCategories(selectedCategory)
     }
})