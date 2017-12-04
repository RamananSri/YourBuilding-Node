const questionDB = require("../models/question").question;
var mainCategories = require("../models/question").mainCategories;
var subCategories = require("../models/question").subCategories;

// Get array of available subcategories
var getAllCategories = (req, res) => {
	if (req.params.id == 1) {
		return res.json(mainCategories);
	}
	if (req.params.id == 2) {
		return res.json(subCategories);
	}
};

var getBySubCategory = (req, res) => {
	questionDB.find({ subCategory: req.params.subCategory }, function(error, result) {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json(result);
	});
};

var getQuestionByUserId = (req, res) => {
	questionDB.findOne({ userId: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json(result);
	});
};

var deleteQuestion = (req, res) => {
	questionDB.findOneAndRemove({ _id: req.params.id }, error => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json({ success: true, message: "Spørgsmål slettet" });
	});
};

var postQuestion = (req, res) => {
	questionDB.create(req.body, error => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json({ success: true, message: "Spørgsmål oprettet" });
	});
};

var updateQuestion = (req, res) => {
	questionDB.findByIdAndUpdate({ _id: req.params.id }, req.body, error => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		return res.json({
			success: true,
			message: "Spørgsmål opdateret"
		});
	});
};

module.exports = {
	getBySubCategory,
	getQuestionByUserId,
	postQuestion,
	deleteQuestion,
	updateQuestion,
	getAllCategories
};
