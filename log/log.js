var fs = require("fs");
var moment = require("moment");

var logErrors = (path, message) => { fs.appendFile(path, moment().format('LTS') + message + "\r\n") };

module.exports = {
	logErrors
};
