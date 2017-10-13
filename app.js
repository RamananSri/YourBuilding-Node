const express = require("express"); // Webserver framework
const mongoose = require("mongoose"); // DB framework
const bodyParser = require("body-parser");
const index = require("./src/routes/index");
const users = require("./src/routes/userRoute");

const app = express();

mongoose.connect("mongodb://dat:dat@ds119685.mlab.com:19685/yourbuilding", {
	useMongoClient: true
});



app.use("/", index);
app.use("/users", users);

// app.get("/Ramanan", function(req, res) {
// 	res.send("Hello Ramanan");
// });

// // Query parameters - localhost:3000/book?id=3
// app.get("/book/", (req, res) => {
// 	res.send("hej " + req.query.id);
// });

// // Return JSON
// app.get("/books", (req, res) => {
// 	res.json({ a: 123, b: 123 });
// });

// // Body parsers (urlencoded + json)
// const urlEncodedParser = bodyParser.urlencoded({ extended: false });
// const jsonParser = bodyParser.json();

// app.get("/api/project", jsonParser, (req, res) => {
// 	res.json({});
// });

// app.post("/api/projects", urlEncodedParser, (req, res) => {
// 	res.sendStatus(200);
// });

// ip -  "192.168.87.101"

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});
