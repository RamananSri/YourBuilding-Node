const mongoose = require("mongoose");
const userSchema = mongoose.Schema;
const validator = require('validator');
const bcrypt = require("bcryptjs");

var userModel = new userSchema({
	id: String,
	name: String,
	address: String,
	phone: String,
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		validate: {
			validator: (value) => {
				return validator.isEmail(value);
			},
			message: '{VALUE} is not a valid email'
		}
	},

	password: String
});

userModel.pre("save", function (next) {
	var user = this;

	if (user.isModified("password")) {
		bcrypt.genSalt(10, (error, salt) => {
			bcrypt.hash(user.password, salt, (error, hash) => {
				user.password = hash;
				next();
			})
		});
	} else {
		next();
	}
});

module.exports = mongoose.model("users", userModel);
