const questionDB = require("../models/question").question;
var mainCategories = require("../models/question").mainCategories;
var subCategories = require("../models/question").subCategories;

// Get array of available categorie/subcategories (this code sucks)
var getAllCategories = (req, res) => {
	if (req.params.id == "Main") {
		return res.json(mainCategories);
	}
	if (req.params.id == mainCategories[0]) {
		return res.json([subCategories[0], subCategories[1]]);
	}
	if (req.params.id == mainCategories[1]) {
		return res.json([subCategories[2], subCategories[3]]);
	}
	if (req.params.id == mainCategories[2]) {
		return res.json([subCategories[4], subCategories[5]]);
	}
	return res.json({
		success: false,
		message: "No categories found"
	});
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
	questionDB.find({ userId: req.params.id }, (error, result) => {
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
	questionDB.findByIdAndRemove({ _id: req.params.qid }, error => {
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
	getAllCategories
};
