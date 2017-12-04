const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

var userModel = new Schema({
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
	cvr: {
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

//Using pre as middleware
// userModel.pre("save", function(next) {
// 	var user = this;

// 	//Checking if password are changed, and afterward salt and hashing it
// 	if (user.isModified("password")) {
// 		bcrypt.genSalt(10, (error, salt) => {
// 			bcrypt.hash(user.password, salt, (error, hash) => {
// 				user.password = hash;
// 				next();
// 			});
// 		});
// 	} else {
// 		next();
// 	}
// }
// );

module.exports = mongoose.model("users", userModel);
