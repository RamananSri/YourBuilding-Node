const questionDB = require("../models/question");

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
	updateQuestion
};
