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
				message: "Svar oprettet"
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
		for (var i = 0; i < result.answers.length; i++) {
			if (result.answers[i].id == req.body._id) {
				result.answers[i] = req.body;
			}
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
				message: "Svar opdateret"
			});
		});
	});
};

var deleteAnswer = (req, res) => {
	questionDB.findOne({ _id: req.params.qid }, (error, result) => {
		console.log(result.answers[0].id);
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		for (var i = 0; i < result.answers.length; i++) {
			if (result.answers[i]._id == req.params.aid) {
				result.answers.splice(i, 1);
			}
		}
		result.save(error => {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}
			return res.json({
				success: true,
				message: "Svar slettet"
			});
		});
	});
};

module.exports = {
	deleteAnswer,
	postAnswer,
	updateAnswer
};
