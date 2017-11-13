const mongoose = require("mongoose");
const userSchema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");

var userModel = new userSchema({
	name: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	CVR: {
		type: Number,
		required: false
	},
	email: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		validate: {
			validator: value => {
				return validator.isEmail(value);
			},
			message: "{VALUE} is not a valid email"
		}
	},
	password: {
		type: String,
		required: true
	}
});

userModel.pre("save", function(next) {
	var user = this;

	if (user.isModified("password")) {
		bcrypt.genSalt(10, (error, salt) => {
			bcrypt.hash(user.password, salt, (error, hash) => {
				user.password = hash;
				next();
			});
		});
	} else {
		next();
	}
});

module.exports = mongoose.model("users", userModel);
