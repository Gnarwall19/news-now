// Import Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Import scraping tools!
var cheerio = request("cheerio");
var request = require("request");

// VV REQUIRE ALL MODELS HERE VV

// Set the PORT
var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({
    extended: false
}));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Set Handlebars
var exphbs = require("express-handlebars");

// Configure the view engine and set as handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars")