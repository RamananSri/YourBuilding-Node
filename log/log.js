var fs = require("fs");
var moment = require("moment");
moment().add(1, "hours");

var logErrors = (path, message) => { fs.appendFile(path, moment().locale("dk").format('LLL') + " Error: " + message + "\r\n") };

module.exports = {
	logErrors
};
