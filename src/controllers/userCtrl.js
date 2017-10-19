const userDB = require("../models/user");

var getUserById = function (req, res) {
	userDB.findOne({ id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json(result);
	});
};

var postUser = (req, res) => {
	userDB.create(req.body, (error) => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json({ succes: true, message: "User created" });
	});
};

var getAllUsers = function (req, res) {
	userDB.find({}, function (error, result) {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json(result);
	});
};

var deleteUser = (req, res) => {
	userDB.findOneAndRemove({ id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json({ succes: true, message: "User deleted" });
	})
};

var updateUser = function (user) { };

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
