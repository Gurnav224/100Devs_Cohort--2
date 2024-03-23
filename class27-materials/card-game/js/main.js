let deckId = '';


fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res=>res.json())
.then((data)=>{
  console.log(data)
  deckId = data.deck_id;
})
.catch((error)=>{
  console.error('error while getting data',error)
})


document.querySelector('button').addEventListener('click',drawTwo);

function drawTwo(){
 const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`;

 fetch(url)
 .then((res)=>res.json())
 .then((data)=>{
  console.log(data.cards[1])
  document.querySelector('#player1').src = data.cards[0].image
  document.querySelector('#player2').src = data.cards[1].image
  let player1Val = convertToNum(data.cards[0].value);
  let player2Val = convertToNum(data.cards[1].value);

  if(player1Val>player2Val){
    document.querySelector('h3').textContent = 'Player 1 wins'
  }
  else if(player2Val>player1Val){
    document.querySelector('h3').textContent = 'Player 2 wins'
  }
  else{
    document.querySelector('h3').textContent = "war's Begin"
  }
 })
}


function convertToNum(val){
  if(val==='ACE'){
    return 14
  }
  else if(val==='KING'){
    return 13
  }
  else if(val==='QUEEN'){
    return 12
  }
  else if(val==='JACK'){
    return 11
  }
  else{
    return  Number(val)
  }
}