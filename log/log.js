var fs = require("fs");
var moment = require("moment");

var logErrors = (path, message) => { fs.appendFile(path, moment().locale("dk").format('LLL').add(1, "hours") + " Error: " + message + "\r\n") };

module.exports = {
	logErrors
};
