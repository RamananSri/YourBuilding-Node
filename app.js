const express = require("express"); // Webserver framework
const mongoose = require("mongoose"); // DB framework
const index = require("./src/routes/index");
const users = require("./src/routes/userRoute");
const swaggerTools = require("swagger-tools");
const yaml = require("yamljs");
const swaggerDoc = yaml.load("YBAPI.yaml");
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
	app.use(middleware.swaggerUi());
});

const app = express();

mongoose.connect("mongodb://dat:dat@ds119685.mlab.com:19685/yourbuilding", {
	useMongoClient: true
});

app.use("/", index);
app.use("/users", users);

// ip -  "192.168.87.101"

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});
