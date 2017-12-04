var fs = require("fs");

var errorMessage = error.message;
var logFile = "log.text";

var logErrors = fs.writeFile(logFile, errorMessage, () => {
	logFile.log(Date.now, errorMessage);
});

module.exports = {
	logErrors
};
