const userDB = require("../models/user");

var getUserById = function (req, res) {
	userDB
		.findOne({
			id: req.params.id
		})
		.exec(function (error, result) {
			if (error) {
				res.send("fejl: " + error);
			}
			console.log("User fundet");
			res.json(result);
		});
};

var postUser = (req, res) => {
	userDB.create(req.body),
		error => {
			if (error) {
				return res.json({
					succes: false,
					message: "user ikke oprettet"
				});
			}
			res.json({ succes: true, message: "User oprettet" });
		};
};

var getAllUsers = function (req, res) {
	userDB.find({}, function (error, result) {
		if (error) {
			res.send("fejl: " + error);
		}
		res.json(result);
	});
};

var deleteUser = function (id) { };

var updateUser = function (user) { };

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
