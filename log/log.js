var fs = require("fs");

var errorMessage = "test";
var logFile = "log.txt";
fs.writeFile
var logErrors = fs.writeFile(logFile, (err, data) => {
	console.log(data);
});

module.exports = {
	logErrors
};
