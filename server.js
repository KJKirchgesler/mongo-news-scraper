// Dependencies
const express = require("express");

// Port configuration for localhost and Heroku
const PORT = process.env.PORT || 8080;

// Initialize Express
const app = express();

// Start the server
app.listen(PORT, function () {
    console.log(`This application is running on port: ${PORT}`);
});