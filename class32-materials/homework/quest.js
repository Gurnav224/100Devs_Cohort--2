

const fs = require('fs');


function putCopyRightTofile(cb){
    fs.readFile("a.txt",'utf-8',function(err,data){
        if(err){
            console.error('error while reading file ',err);
            return 
        }
        data = data + " every time when I ran the code the file text changing";

        fs.writeFile('a.txt',data,function(err){
            if(err){
                console.error('error writing file ',err);
                return ;
            }
            cb();
        })
    })
}


putCopyRightTofile(function(){
    console.log('copyright has been put')
})