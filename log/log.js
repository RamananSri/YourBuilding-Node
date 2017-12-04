var fs = require("fs");

var errorMessage = "test";
var logFile = "log.txt";

var logErrors = fs.writeFile(logFile, errorMessage, (err, data) => {
	console.log(data);
});

module.exports = {
	logErrors
};
