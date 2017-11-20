const mongoose = require("mongoose");
const answerSchema = mongoose.Schema;

var answerModel = new answerSchema({
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

module.exports = { answerModel };
