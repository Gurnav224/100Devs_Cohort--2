const express = require('express');

const app = express();

const PORT = 3000;


function renderPage(name){
    return `
    <html>
    <head>
    <title>get name </title>
    </head>
    <body>
    <form>
    <input type="text" name="name" /><button>submit</button>
    </form>
    <h1>${name? name : "Unknow"}</h1>
    </body>
    </html> 
`;
}

app.get('/',(req,res)=>{
 let name = req.query.name

 if(name==="Gurnav"){
    res.send(renderPage(name))
 }

 res.send(renderPage(""))

   
})

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})