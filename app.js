var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override');
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controller/burgers_controller.js");

app.use("/", routes);

app.listen(port, function() {
  console.log("listening on port", port);
});
