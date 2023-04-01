// Imports--
const express = require("express");

const clc = require("cli-color");

// File imports--

// Variables--

const app = express();

const PORT = process.env.PORT || 8000; // after deploying the port which is freely available will be automatically assigned!!

// ejs(view engine) // it will search the files inside the view
// folder  then it  will render You don't have to import anything

app.set("view engine", "ejs");

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

app.post("/signup", (req, res) => {
  console.log(res.body);
  return res.send(true);
});

app.post("/login", (req, res) => {
  console.log(res.body);
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
// Step2 SignUP
// Step3 Email verification ...
// Step4 login
// after login redirect to dashboard!.

// command-
// initialize node JS- npm init -y
// install express and nodemon-  npm i express nodemon mongoose

// using package for CLI Colors--  https://www.npmjs.com/package/cli-color

//To start the server - npm run dev
