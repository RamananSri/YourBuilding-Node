const mongoose = require("mongoose");
const answer = require("./answer").schema;
const Schema = mongoose.Schema;

var questionModel = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	subCategory: {
		type: String,
		required: true
	},
	userId: {
		type: String,
		required: true
	},

	answers: [answer],

	picture: {
		data: Buffer,
		contentType: String,
		required: false
	},
	questionDate: {
		type: Date,
		required: true
	}
});

module.exports = mongoose.model("questions", questionModel);
