const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");
dotenv.config({ path: "./config/config.env" });
const path = require("path");
const methodOverride = require('method-override');
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");

//Loads the handlebars module
const handlebars = require("express-handlebars");

// passport Config
require("./config/passport")(passport);

const app = express();

connectDB();

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Handlebars Helpers

const { formatDate , truncate , stripTags , editIcon  , select} = require("./Helpers/hbs");

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app use method overide for put and delete request

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}))

// Handlebars configurations
app.engine(
  "hbs",
  handlebars.engine({
    helpers:{formatDate , stripTags , truncate , editIcon, select},
    defaultLayout: "main",
    extname: "hbs",
  })
);

app.set("view engine", "hbs");

// sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: mongoose.connection._connectionString,
    }),
  })
);





// passport middlewares
app.use(passport.initialize());
app.use(passport.session());


// Set Global Variables

app.use(function(req , res ,next) {
    res.locals.user = req.user;
    next()
})

// static filees

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/auth", require("./routes/auth"));
app.use("/stories", require("./routes/stories"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
