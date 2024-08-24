import mongoose from "mongoose";


if(process.argv.length < 3){
    console.log('Please provide the password as an argument:')
    process.exit(1)
}



const password = process.argv[2];



const dbUrl = `mongodb://root:${password}@localhost:27017/phonebook?authSource=admin`

mongoose.set('strictQuery', false);

mongoose.connect(dbUrl)

const newEntery = {
    name:process.argv[3],
    number:process.argv[4]
}


const phonebookSchema = new mongoose.Schema({
    name:String,
    number:String
})

const Person = mongoose.model('person',phonebookSchema);

const person = new Person({
    name:newEntery.name,
    number:newEntery.number
})



if(process.argv.length === 5){
person.save().then((result)=>{

        console.log(`added ${result.name} ${result.number} to phonebook`)

        mongoose.connection.close()
        
    })
}





if(process.argv.length === 3){
    Person.find({}).then((persons)=>{
            console.log('Phonebook:')
            persons.forEach((person)=>{
                console.log(`${person.name} ${person.number}`)
                mongoose.connection.close()
            })
            
        })
    }

