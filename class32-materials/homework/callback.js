

function doStep1(init ,cb){
    const result =  init+1;
    cb(result)
}

function doStep2(init,cb){
    const result =  init+2
    cb(result)
}

function doStep3(init,cb){
    const result = init+5;
    cb(result)
}

function doOperation(){
  doStep1(0,(result1)=>{
    doStep2(result1,(result2)=>{
        doStep3(result2,(result3)=>{
            console.log(result3)
        })
    })
  })
}

doOperation()