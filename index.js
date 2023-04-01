// Imports--
const express = require("express");

const clc = require("cli-color");
const { Model } = require("mongoose");

// File imports--
const { cleanUpAndValidate } = require("./utils/AuthUtils");

// Variables--

const app = express();

const PORT = process.env.PORT || 8000; // after deploying the port which is freely available will be automatically assigned!!


// ejs(view engine) // it will search the files inside the view
// folder  then it  will render You don't have to import anything

app.set("view engine", "ejs");

// middlewares
//remember we have to use middleware because by default the data is url-encoded format so we need to type cast into the json formate
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes(Note- urls are not case  sensitive they will be converted to smaller case)--
app.get("/", (req, res) => {
  return res.send("This is a LM App");
});

app.get("/signup", (req, res) => {
  return res.render("Signup");
});

app.get("/login", (req, res) => {
  return res.render("login");
});

// end point for signup and login page to post the data to the server!!
//remember we have to use middleware because by default the data is url-encoded format so we need to type cast into the json formate
//

//MVC 
// Model- functions which interact with database
// utility functions- functions which does not interact with db
app.post("/signup", async(req, res) => {
  console.log(req.body);
  const { name, email, password, username } = req.body;

  try {
    await cleanUpAndValidate({ name, email, password, username });

    //check if the user exits

    const userExistEmail = await userSchema.findOne({ email });

    console.log(userExistEmail);
    if (userExistEmail) {
      return res.send({
        status: 400,
        message: "Email Already exits",
      });
    }

    const userExistUsername = await userSchema.findOne({ username });

    if (userExistUsername) {
      return res.send({
        status: 400,
        message: "Username Already exits",
      });
    }

    //hash the password using bcypt
    const hashPassword = await bcrypt.hash(password, saltRound);

    const user = new userSchema({
      name: name,
      email: email,
      password: hashPassword,
      username: username,
    });

    try {
      const userDb = await user.save();
      console.log(userDb);
      return res.send({
        status: 201,
        message: "User register successfully",
        data: userDb,
      });
    } catch (error) {
      return res.send({
        status: 500,
        message: "Database error",
        error: error,
      });
    }
  } catch (error) {
    console.log(error);
    return res.send({
      status: 400,
      message: "Data Invalid",
      error: error,
    });
  }
});

//data validations
 
 

app.post("/login", (req, res) => {
  console.log(req.body);
  return res.send(true);
});

app.listen(PORT, () => {
  console.log(
    clc.underline.italic.magentaBright(`Hello, world! Port No- ${PORT}`)
  );
  console.log(clc.underline.italic.redBright(`http://localhost:${PORT}`));
});

//EGS
// step1 create server and connect to mongodb database!.
// Step2 SignUP( 1.data validation/cleanup, 2.firt check  user exits or not  
// if not then create a user in db,)
// Step3 Email verification ...
// Step4 login
// after login redirect to dashboard!.

// command-
// initialize node JS- npm init -y
// install express and nodemon-  npm i express nodemon mongoose

// using package for CLI Colors--  https://www.npmjs.com/package/cli-color

//To start the server - npm run dev
