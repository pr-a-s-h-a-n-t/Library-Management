const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("This is a LM App");
});

app.listen("8000", () => {
  console.log("Hello, world!");
});

// step1 create server and connect to mongodb database!.
// Step2 SignUP
// Step3 Email verification ...
// Step4 login
// after login redirect to dashboard!.

// command-
// initialize node JS- npm init -y
