var fs = require("fs");

var errorMessage = "test";
var logFile = "log.txt";

var logErrors = fs.writeFile(logFile, (err, data) => {
	console.log(data);
});

module.exports = {
	logErrors
};
