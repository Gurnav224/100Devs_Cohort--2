

const button = document.querySelector('#randomRiddle');
const showAnswer = document.querySelector('#showAnswer')

function showRandomImage(){
  let arrarOfImage = ['https://images.pexels.com/photos/941555/pexels-photo-941555.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3762807/pexels-photo-3762807.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/7327772/pexels-photo-7327772.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/2122954/pexels-photo-2122954.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/3768897/pexels-photo-3768897.jpeg?auto=compress&cs=tinysrgb&w=600'];
   document.querySelector('img').src = arrarOfImage[Math.floor(Math.random()*arrarOfImage.length)]
  }
  
 

button.addEventListener('click',newFunction())



function newFunction() {

  return () => {
    const url = `https://riddles-api.vercel.app/random`;


    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        showRandomImage();

        document.querySelector('h2').innerHTML = `<strong>Riddle: </strong>${data.riddle}`;
        document.querySelector('p').innerHTML = `<strong>Answer: </strong>${data.answer}`;
        document.querySelector('p').style.display = 'none'

      })
      .catch(error => console.error('Error:', error));
  };


  
}


newFunction()

showAnswer.addEventListener('click',()=>{
  document.querySelector('p').style.display = 'block'

})
