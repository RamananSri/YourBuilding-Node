// Webserver framework
const express = require("express");
const app = express();
app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
}); // ip -  "192.168.87.101"

// MongoDB framework
const mongoose = require("mongoose");
mongoose.connect("mongodb://dat:dat@ds119685.mlab.com:19685/yourbuilding", {
	useMongoClient: true
});

// Swagger documentation
const swaggerTools = require("swagger-tools");
const yaml = require("yamljs");
const swaggerDoc = yaml.load("YBAPI.yaml");
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
	app.use(middleware.swaggerUi());
});

const homeRoute = require("./src/routes/homeRoute");
const users = require("./src/routes/userRoute");
const api = require("./src/routes/apiRoute");

// Routes

//yb.dk/
app.use("/", homeRoute);
//yb.dk/api - middleware authentication
app.use("/api/", api);
//yb.dk/api/users - limited access
app.use("/api/users", users);
