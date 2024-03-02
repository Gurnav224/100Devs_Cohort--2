const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];


// .length to get the size of array
console.log(movies.length)

// access the array element using index

movies[0]
movies[1]
movies[2]


// iterate over the array

for(let i=0; i<movies.length; i++){
    movies[i]
}

// foreach

movies.forEach(move=>{
    move
})

// for-of-loop

for(const el of movies){
    el
}


// adding an element to the array in the end

movies.push("Ghostbusters")

console.log(movies)


// add element to the array in the starting

movies.unshift("Pacific Rim")

console.log(movies)

// removing an element from the array

console.log(movies.pop())

// splice method to remove an element from the array


movies.splice(0,2)

console.log(movies)