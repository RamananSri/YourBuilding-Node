const questionDB = require("../models/question");

var postAnswer = (req, res) => {
	// Find the question
	questionDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		// Add answer to the answers array on question
		result.answers.push(req.body);
		// Save to DB
		result.save(error => {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}
			return res.json({
				success: true,
				message: "Spørgsmål oprettet"
			});
		});
	});
};

var updateAnswer = (req, res) => {
	questionDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		// Save to DB
		result.save(error => {
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
	});
};

var deleteAnswer = (req, res) => {
	questionDB.findOneAndRemove({ _id: req.params.id }, error => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json({ success: true, message: "Answer deleted" });
	});
};

module.exports = {
	deleteAnswer,
	postAnswer,
	updateAnswer
};
