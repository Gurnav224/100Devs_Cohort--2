import mongoose from "mongoose";
import { config } from "dotenv";
config();



const dbUrl = process.env.MONGODB_URI


mongoose.set('strictQuery', false)

mongoose.connect(dbUrl)
.then(result => {
    console.log('connected to mongodb')
})
.catch((error)=>{
    console.log('error to connecting to mongodb',error.message)
})

const noteSchema = new mongoose.Schema({
  content:String,
  important:Boolean
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})


const Note = mongoose.model('Note',noteSchema);


export default Note;