//Modules
var express = require("express");
var bodyParser = require("body-parser");

var routes = require("./routes/routes.js");
var app = express();

//to accept both JSON and url encoded values
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

const port = 3005;

//port where node server should be running on
var server = app.listen(port, function () {
    console.log("app running on port.", server.address().port);
});