const express = require('express');

const app  = express();


const PORT = 3000;

app.get('/',(req,res)=>{
    res.json({message:'server started'})
})


app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})