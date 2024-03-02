let nb1 = 2;
let nb2 = 4;
let nb3 = 0;


if(nb1>nb2){
    nb1 = nb3*2;
    
}
else{
    if(nb2>nb3){
        nb1 += nb3*3
    }
    else{
        nb1 = 0;
        nb3 = nb3*2+nb2;
    }
}

console.log(nb1,nb2,nb3)