//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.color = "red"
stopwatch.shape = "round"
stopwatch.brand = "G-shock"
stopwatch.type = "digital"

stopwatch.sec = function timeInSec(sec){
    console.log(   `${sec} sec`)
}

stopwatch.min = function timeInSec(min){
    console.log(   `${min} min`)
}

stopwatch.hour= function timeInSec(hour){
    console.log(   `${hour} sec`)
}

console.log(stopwatch)


stopwatch.hour(2)
stopwatch.min(45)
stopwatch.sec(44)