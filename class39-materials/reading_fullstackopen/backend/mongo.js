import mongoose from "mongoose";

if(process.argv.length < 3){
    console.log('give password as agrugment');
    process.exit(1)
}


const password = process.argv[2]

const dbUrl = `mongodb://root:${password}@localhost:27017/notesApp?authSource=admin`


mongoose.set('strictQuery',false);

mongoose.connect(dbUrl)


const noteSchema = new mongoose.Schema({
    content:String,
    important:Boolean
})


const Note = mongoose.model('note',noteSchema)

const note = new Note({
    content:'Rust is easy',
    important:false
})


note.save().then((result)=>{
    console.log('note saved!')
})

Note.find({important:false}).then(result =>{
    result.forEach((note)=>{
        console.log(note)
    })
    mongoose.connection.close()
})