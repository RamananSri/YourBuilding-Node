var fs = require("fs");
var moment = require("moment");

var logErrors = (path, message) => { fs.appendFile(path, moment.lang("dk").format('LLL') + " " + message + "\r\n") };

module.exports = {
	logErrors
};
