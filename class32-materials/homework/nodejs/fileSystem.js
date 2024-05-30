
// file system modules

var fs = require('fs');
const path = require('path');


// fs.mkdir(path.join(__dirname , '/test'),(err)=>{
//     if(err){
//         console.log('something went wrong')

//         return err
//     }

//     console.log('folder is created ')

// })


fs.writeFile(path.join(__dirname , 'test','test.txt'),'hello nodejs/',(err)=>{
    if(err){
        throw err;
    }

    fs.appendFile(path.join(__dirname,'test','test.txt'),' nodejs data is added \n', (err)=>{
        if(err){
            throw err;
        }
        console.log('data is updated...................')
    })

    console.log('data added..........')
})