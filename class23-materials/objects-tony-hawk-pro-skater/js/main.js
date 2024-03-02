//Create a Tony Hawk Pro Skater constructor that makes fighting game characters with 4 properties and 3 methods


function TonyHawkCharacter(chName,chStance,chSponsor,chMove){
    this.characterName = chName ;
    this.stance = chStance;
    this.sponsor = chSponsor;
    this.specialMove = chMove ;
    
    this.flip = function(){
        console.log("kickFlip!!!")
    }

    this.taunt = function(){
        console.log(`Don't make me use my ${this.specialMove}`)
    }

    this.grab = function(){
        console.log('Melon Grab')
    }

}



let KareemCampbell = new TonyHawkCharacter('Kareem','Goofy','Element','Ghetto Bird');

console.log(KareemCampbell)