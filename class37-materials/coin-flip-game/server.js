const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views',path.join(__dirname, 'views'))

const PORT = 8000;

app.get('/',(req,res)=>{
    const coinChoices = ['head','tail'];




    let outcome = coinChoices[Math.floor(Math.random()*coinChoices.length)];



    res.render('index',{outcome})
})

app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`)
})