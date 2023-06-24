const express = require("express");
const app = require("./src/app.js");
const mongoose = require("mongoose");
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE to mongodb server
const DATABASE_URL = "mongodb+srv://user12:almabetter123@cluster0.zxmw5rn.mongodb.net/subscribers";
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => console.log(err));
db.once("open", () => console.log("connected to database"));

// Start Server on port 3000
app.listen(port, () => console.log(`App listening on port ${port}!`));
