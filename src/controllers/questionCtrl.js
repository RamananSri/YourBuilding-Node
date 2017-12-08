const questionDB = require("../models/question").question;
var mainCategories = require("../models/question").mainCategories;
var subCategories = require("../models/question").subCategories;

// Get array of available subcategories
var getAllSubCategories = (req, res) => {
	return res.json("hej");
};

// Get array of available maincategories
var getAllMainCategories = () => {
	return resizeBy.json(mainCategories);
};

var getByCategory = (req, res) => {
	if (subCategories.includes(req.params.category)) {
		questionDB.find({ subCategory: req.params.category }, function(error, result) {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}
			res.json(result);
		});
	} else {
		questionDB.find({ category: req.params.category }, function(error, result) {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}
			res.json(result);
		});
	}
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
	getByCategory,
	getQuestionByUserId,
	postQuestion,
	deleteQuestion,
	updateQuestion,
	getAllMainCategories,
	getAllSubCategories
};
