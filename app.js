const express = require("express"); // Webserver framework
//const jwt = require("jsonwebtoken");
const mongoose = require("mongoose"); // DB framework
const swaggerTools = require("swagger-tools");
const yaml = require("yamljs");
const swaggerDoc = yaml.load("YBAPI.yaml");
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
	app.use(middleware.swaggerUi());
});

const homeRoute = require("./src/routes/homeRoute");
const users = require("./src/routes/userRoute");
const api = require("./src/routes/apiRoute");

const app = express();

mongoose.connect("mongodb://dat:dat@ds119685.mlab.com:19685/yourbuilding", {
	useMongoClient: true
});
//yb.dk/
app.use("/", homeRoute);
//yb.dk/api
app.use("/api", api);

//app.use("/api/users", users);
//yb.dk/api/users

// ip -  "192.168.87.101"

app.listen(3000, function () {
	console.log("Example app listening on port 3000!");
});


