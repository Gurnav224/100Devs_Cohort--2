//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)




function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=txeqm5Cpy4g0x393QAM3R5sZUn9UQX0cG9XfHJ3y&date=${choice}`
  console.log(url)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      if(data.media_type==='image'){

        document.querySelector('img').src = data.hdurl
      }
      else if(data.media_type==='video'){
        document.querySelector('iframe').src = data.url
      }
        document.querySelector('h3').innerHTML = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

