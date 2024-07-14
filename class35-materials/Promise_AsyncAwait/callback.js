
let promise = new Promise(function(resolve,reject){
setTimeout(()=>resolve('Done!',1000))

setTimeout(()=>reject('1erre'),3000)
})

promise.then(
    result => console.log(result),
    error => console.error(error)
)