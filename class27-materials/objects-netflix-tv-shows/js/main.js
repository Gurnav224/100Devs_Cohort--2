//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class MakeNetflixTVShows{
    constructor(title,genre,rating,number,numOfEp){
        this.title = title;
        this.genre = genre;
        this.rating =rating;
        this.numOfEp = numOfEp
    }

    play(){
        console.log('Playing')
    }
    stop(){
        console.log("stop")
    }
    saveList(){
        console.log("savetoList")
    }
}

let bridgerton = new MakeNetflixTVShows('Bridgerton','Period Romantic Drama','99%',16);

console.log(bridgerton)