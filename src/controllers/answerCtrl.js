const answerDB = require("../models/answer");
const questionDB = require("../models/question");

var postAnswer = (req, res) => {
	questionDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}

		result.answer[result.answer.length + 1] = req.body.answer;

		questionDB.findByIdAndUpdate({ _id: req.params.id }, result, error => {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}

			res.json({
				success: true,
				message: "Answer updated"
			});
		});
	});
};

var updateAnswer = (req, res) => {
	questionDB.findOne({ userId: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		var answer = result.answer;
		array.forEach(function(answer) {
			if (answer.userId === req.body.userId) {
			}
		}, this);
		res.json(result);
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
