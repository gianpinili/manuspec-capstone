const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { PORT } = process.env;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const customerRoutes = require("./routes/customerRoutes");
const customerFileRoutes = require("./routes/customerFileRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/customers", customerRoutes);
app.use("/customer/:id", customerFileRoutes);
app.use("/profile", profileRoutes);

app.listen(PORT, () => {
  console.log("Welcome to the ManuSpec server. Running on port", PORT);
});
