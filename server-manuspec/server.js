const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config();
// const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log("pls mark help hellpp");

app.listen(8080, () => {
  console.log("Welcome to the ManuSpec server. Running on port", 8080);
});
