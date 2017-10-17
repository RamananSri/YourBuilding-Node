const express = require("express"); // Webserver framework
// const bodyParser = require("body-parser"); // Post request parsing af f.eks. forms fra user
const index = require("./src/routes/index");
const users = require("./src/routes/userRoute");

const app = express();

app.use("/", index);
app.use("/users", users);

// ip -  "192.168.87.101"

app.listen(3000, function() {
	console.log("Example app listening on port 3000!");
});
