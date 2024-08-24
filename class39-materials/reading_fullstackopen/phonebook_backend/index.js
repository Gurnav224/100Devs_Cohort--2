import express, { response } from "express";
import morgan from "morgan";
import Person from "./models/phonebook.js";

const app = express();

const errorHandler = (error, request, respone, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    respone.status(400).json({ error: "mailformed id" });
  }
  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

// Create a new token to log the request body
morgan.token("body", (req) => {
  return JSON.stringify(req.body);
});

// Use morgan with a custom format that includes the request method, URL, status, and the request body
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Welcome to Phonebook API");
});

// add new persons to phonebook
app.post("/api/persons", (request, response) => {
  const { name, number } = request.body;

  console.log(name, number);

  if (!name || !number) {
    return response.status(400).json({
      error: "name and number are both required",
    });
  }

  const person = Person({
    name,
    number,
  });

  person.save().then((savedPerson) => {
    response.json(savedPerson);
  });
});

// get all the person from the phonebook
app.get("/api/persons", (request, response) => {
  Person.find().then((persons) => {
    response.json(persons);
  });
});

app.get("/api/info", (request, response , next) => {

  Person.countDocuments({})
  .then(count => {
    const info = `
        <p>Phonebook has info for ${count} people</p>
        <p>${new Date().toString()}</p>
        `;
        response.send(info);

  })
  .catch(error => next(error))

});

// get the person by id
app.get("/api/persons/:id", (request, response , next) => {
  const id = request.params.id;
  Person.findById(id).then((person) => {
    if(person){

      response.json(person);
    }
    else{
      response.status(404).json({error:'person not found'})
    }
  }).catch((error) => next(error))
});

// update the person

app.put("/api/persons/:name", (request, response, next) => {
  const body = request.body;
 
  Person.findOneAndUpdate(
    {name:request.params.name},
    {number:body.number},
    {new:true,runValidators:true,context:'query'}
  )
  .then((updatedPerson)=>{
    if(updatedPerson){
      response.json(updatedPerson)
    }
    else{
      response.status(404).json({error:'person not found'})
    }
  })
  .catch((error)=>next(error))

});

//  delete the person
app.delete("/api/persons/:id", (request, response, next) => {
  const id = request.params.id;

  Person.findByIdAndDelete(id)
    .then((deletePerson) => {
      response.json({ message: "person delete successfully" });
    })
    .catch((error) => next(error));
});

app.use(errorHandler);
app.use(unknownEndpoint);

const port = 3001;

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
