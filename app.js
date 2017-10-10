const express = require("express"); // Webserver framework
// const bodyParser = require("body-parser"); // Post request parsing af f.eks. forms fra user
const index = require("./routers/index");
const users = require("./routers/userRoute");

const app = express();

app.use("/", index);
app.use("/users", users);

module.exports = app;

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

app.listen(3000, "192.168.87.108", function() {
  console.log("Example app listening on port 3000!");
});
