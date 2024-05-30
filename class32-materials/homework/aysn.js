


function readAsyncFileOperation(){
    let p = new Promise(function(resolve){
        resolve("hi there")
    })
    return p
}

async function main(){
    const value =  await readAsyncFileOperation()
    console.log(value)
}


main()