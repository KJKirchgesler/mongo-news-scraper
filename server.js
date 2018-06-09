// Dependencies
const express = require("express");
const bodyParser = require("body-parser"); // Parses JSON responses
const mongoose = require("mongoose"); // mongodb object modeling for node.js
const request = require("request"); // Makes http calls
const cheerio = require("cheerio"); // Tool to scrape websites

// Require all models
//const db = require("./models");

// Port configuration for localhost and Heroku
const PORT = process.env.PORT || 8080;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Controllers
// const router = require("./controllers/api.js");
// app.use(router);

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


// Start the server
app.listen(PORT, function () {
    console.log(`This application is running on port: ${PORT}`);
});