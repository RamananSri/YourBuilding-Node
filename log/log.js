var fs = require("fs");
var moment = require("moment");

var logErrors = (path, message) => { fs.appendFile(path, moment().add(1, "hours").locale("dk").format('LLL') + " Error: " + message + "\r\n") };

module.exports = {
	logErrors
};
