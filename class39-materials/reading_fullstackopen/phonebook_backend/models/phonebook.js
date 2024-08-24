import mongoose from "mongoose";
import { config } from "dotenv";

config()

const dbUrl = process.env.MONGODB_URI


mongoose.connect(dbUrl)
.then((result)=>{
    console.log(`successfully connected to database , ${result.connection.host}`)
})
.catch((error) =>{
    console.error('error while connecting to database',error.message)
})


const PersonSchema = new mongoose.Schema({
    name:String,
    number:String
})

PersonSchema.set('toJSON',{
    transform:(document, returnObject)=>{
       returnObject.id = returnObject._id.toString()
       delete returnObject._id
       delete returnObject.__v
    }
})




const Person =  mongoose.model('Person',PersonSchema);


export default Person;