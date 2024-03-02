


let hour =  new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();

if (hour<0 || hour>23 || minute<0 || minute>59 || second<0 || second>59){
   return "Invalid Input"
}

second++;

if(second===60){
    second = 0;
    minute++;
    if(minute===60){
        minute = 0;
        hour++;
        if(hour===24){
            hour = 0;
        }
    }
}

console.log(`${hour}H:${minute}M:${second}S`)
