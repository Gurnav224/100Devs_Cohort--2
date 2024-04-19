//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
const h3 = document.querySelector('h3')


function renderDisplay(data){
  document.querySelector('ul').innerHTML  = ""

data.classes.forEach(obj=>{
  const li = document.createElement('li');
  li.textContent = obj.name;
  document.querySelector('ol').appendChild(li)
})
  
  data.subclasses.forEach(obj => {
    // create li element and hold it into a variable

    const li = document.createElement('li');
    // get subclasses name
    li.innerHTML = obj.name;

    document.querySelector('ul').appendChild(li)
  });

  
  }


function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  document.querySelector('h2').textContent = choice
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        renderDisplay(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

