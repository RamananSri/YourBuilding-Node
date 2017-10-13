const mongoose = require("mongoose");
const schema = mongoose.schema;

var userModel = mongoose.model(
	"user",
	new schema({
		name: String,
		address: String,
		phone: String,
		email: String
	})
);

module.exports = {
	userModel
};
