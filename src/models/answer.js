const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var answerModel = new Schema({
	description: {
		type: String,
		required: true
	},
	likeCounter: {
		type: Number,
		required: true
	},
	userId: {
		type: String,
		required: true
	},
	userName: {
		type: String,
		required: true
	},
	answerDate: {
		type: Date,
		required: true
	}
	
});

module.exports = mongoose.model("answers", answerModel);
