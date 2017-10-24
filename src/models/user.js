const mongoose = require("mongoose");
const userSchema = mongoose.Schema;
const validator = require('validator');

var userModel = new userSchema({
	id: String,
	name: String,
	address: String,
	phone: String,
	email:{
		type: String,
		required: true,
		trim: true,
		unique: true,
		validate: {
			validator: (value) => {
				return validator.isEmail(value);
			},
			message: '{value} is not a valid email'
		}


	} ,
	password: String
});

module.exports = mongoose.model("users", userModel);
