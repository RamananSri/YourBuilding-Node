const mongoose = require("mongoose");
const answer = require("./answer").schema;
const Schema = mongoose.Schema;

var mainCategories = ["Vand", "Varme", "El"];
var subCategories = ["Varmt", "Koldt", "Fjernvarme", "Pillefyr", "Stærkstrøm", "Svagstrøm"];

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
		required: true,
		enum: mainCategories
	},
	subCategory: {
		type: String,
		required: true,
		enum: subCategories
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
	},
	likeCounter: {
		type: Number,
		required: true
	}
});

var question = mongoose.model("questions", questionModel);

module.exports = {
	question,
	mainCategories,
	subCategories
};
