const express = require("express");
const app = express();
const path = require("path");
const Subscribers = require("./models/subscribers");

// Display homepage to the client
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

// Fetching all the subscribers from the database
app.get("/subscribers", async (req, res) => {
  let subscribers = await Subscribers.find();
  res.json(subscribers);
});

// Fetching subscriber's name and the channel they subscribed
app.get("/subscribers/names", async (req, res) => {
  let subscribers = await Subscribers.find().select({
    name: 1,
    subscribedChannel: 1,
    _id: 0,
  });
  res.json(subscribers);
});

// Fetching subscriber by their id from the database
app.get("/subscribers/:_id", async (req, res) => {
  let subscriberId = req.params._id;
  await Subscribers.findById(subscriberId)
    .then((subsId) => {
      res.status(200).json(subsId);
    })
    .catch((err) => {
      res.status(400).send({ message: err.message });
    });
});

// Invalid page handling
app.use((req, res) => {
  res.status(404).send({ message: "Page Not Found" });
});

module.exports = app;
