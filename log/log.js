var fs = require("fs");

var logErrors = (path, message) => { fs.appendFile(path, message + "\r\n") };

module.exports = {
	logErrors
};
