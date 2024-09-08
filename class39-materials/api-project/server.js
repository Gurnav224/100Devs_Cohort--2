const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const methodOverride = require('method-override')
const app = express();



// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(methodOverride())
app.set("view engine", "ejs");

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.DB_URI, {
      dbName: "todo-100Devs",
    });

    if (conn) {
      console.log(`successfully connected to database ${conn.connection.name}`);
    }
  } catch (error) {
    console.error("connection failed to connecting to db");
    process.exit(1);
  }
}

connectDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

const Todo = new mongoose.model("Todo", TodoSchema);




app.post("/todos", async (req, res) => {
  const { title} = req.body;

  try {
    const newTodo = await new Todo({ title});
    await newTodo.save()
    res.status(201).redirect('/');
  } catch (error) {
    res.status(500).json({ error: "new todo not added" });
  }
});

app.get("/", async (req, res) => {
  try {
    const todos = await Todo.find({});
    const itemLefts = await  Todo.countDocuments({completed:true})
    res.render('pages/index',{todos,left:itemLefts});
  } catch (error) {
    res.status(500).json({ error: "error occured to get all the todos" });
  }
});




app.put('/markComplete', async (req, res) => {
    const {title} = req.body;
    console.log('title to updated todo',title)

    const updatedTodo = await Todo.updateOne({title:title},{
      $set:{
        completed:true
      }
    },
  {
    sort:{_id:-1},
    upsert:false
  }
  )

  console.log(updatedTodo)

  res.json({msg:'todo mark completed',updatedTodo})
});



app.put('/markUnComplete',async (req , res)=>{
  const {title} = req.body;
  console.log('unmark complete',title)
  try {
    const unmarkCompleteTodo = await Todo.updateOne({title:title},{
      $set:{
        completed:false
      }
    },
    {
      sort:{_id:-1},
      upsert:false
    }
  )
    res.json({msg:"server send unmark complete",unmarkCompleteTodo})
  } catch (error) {
    res.status(500).json({msg:"error to mark un complete"})
  }
})


app.delete('/deleteTodo', async (req , res)=>{
  const {title} = req.body;
  try {
    const deletedTodo = await Todo.deleteOne({title:title});
    res.status(204).json({msg:"todo delete successfully",deletedTodo})
  } catch (error) {
    res.status(500).json({error:"error to delete todo"})
  }
})


app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById(id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "error occured get single todo" });
  }
});



app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      {
        new: true,
        upsert: true,
      }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "error to updating todo" });
  }
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const todoDeleted = await Todo.findByIdAndDelete(id);
    res.status(204).json({ message: "todo successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "error to deleted successfully" });
  }
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} localhost:${PORT}`);
});
