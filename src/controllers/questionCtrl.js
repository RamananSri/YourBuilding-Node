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
		res.json({ success: true, message: "Question deleted" });
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
		res.json({ success: true, message: "Question created" });
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
			message: "Question updated"
		});
	});
};

module.exports = {
	getBySubCategory,
	getQuestionByUserId,
	postQuestion,
	deleteQuestion,
	updateQuestion,
	getAllMainCategories,
	getAllSubCategories
};
