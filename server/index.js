"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//The Mongo db known as Mongodb is the database of tweets now.
const Mongodb = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

Mongodb.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  const DataHelpers = require("./lib/data-helpers.js")(db);
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);

  // We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
