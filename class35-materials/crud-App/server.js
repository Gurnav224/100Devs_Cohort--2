const express = require('express');
const app = express();
const { MongoClient, ReturnDocument} = require('mongodb');
const cors = require('cors');


const url = 'mongodb://localhost:27017';
const dbName = 'starWars'

let db ;

app.set('view engine','ejs')


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))

app.use(cors())


async function connectToDatabase(){
    try {
        const client = await MongoClient.connect(url);
         db = client.db(dbName)
        console.log('connected to database successfully')


      
          

    } catch (error) {
            console.error('failed to connect to MongodB',error);
            process.exit(1)
    }
}




app.get('/',async (req,res)=>{

    const quotes = await db.collection('quotes').find().toArray();

    quotes.reverse()

    res.render('index.ejs',{quotes:quotes})
})

app.post('/quotes',async (req,res)=>{
    console.log(req.body)
    const quotesCollection = await  db.collection('quotes')

    try {
  
  const quote =   await  quotesCollection.insertOne(req.body)
   
      res.redirect('/')
  
    } catch (error) {
      console.log('failed to inserted the quote',error)
      res.status(500).json({error:"failed to insert quote"})
    }
  })


  app.put('/quotes',async (req,res)=>{
    try {
      console.log(req.body);
      const quotesCollection = db.collection('quotes');

      const result = await quotesCollection.findOneAndUpdate(
        {name:'Gurnav'},
        {
          $set:{
            name:req.body.name,
            quote:req.body.quote
          }
        },
        {
          upsert:true,
          ReturnDocument:'after'
        }
      );


      if(result){
        console.log('update document',result);
        res.json({message:'Quote updated successfully',updatedQuote:result.value})
      }
      else{
        console.log('No document matched the query. New document inserted.')
        res.json({message:'new quote inserted',insertedquote:result.value})
      }
    } catch (error) {
      res.status(500).json({message:'server error'})
    }
  })


  app.delete('/quotes',async (req,res)=>{
    console.log(req.body)
     const quotesCollection = await db.collection('quotes');

    const result = await  quotesCollection.deleteOne(
      {name:req.body.name})

      console.log(result)

      if(result.deletedCount === 0){
        return res.json('No quote to delete')
      }

      res.json(`Deleted darth vader's quote`)
      

  })
  

app.listen(3000,async ()=>{
    console.log(`server started`)
    await connectToDatabase()
    })
