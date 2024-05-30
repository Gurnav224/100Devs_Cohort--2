//Write your pseduo code first! 


document.querySelector('button').addEventListener('click',TempConverter)

function TempConverter(){
    const Temp = Number(document.querySelector('input').value);
    const fahrenheit = Temp*1.8+32;
    document.querySelector('h2').innerHTML = fahrenheit
}