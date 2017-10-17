const mongoose = require("mongoose");
const userSchema = mongoose.Schema;

var userModel = new userSchema({
	id: String,
	name: String,
	address: String,
	phone: String,
	email: String
});

module.exports = mongoose.model("users", userModel);
