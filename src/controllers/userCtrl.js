const userDB = require("../models/user");
const { SHA256 } = require("crypto-js");
const bcrypt = require("bcryptjs");

var getUserById = (req, res) => {
	userDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json(result);
	});
};

var postUser = (req, res) => {
	userDB.create(req.body, error => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json({ succes: true, message: "User created" });
	});
};

var getAllUsers = (req, res) => {
	userDB.find({}, function(error, result) {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json(result);
	});
};

var deleteUser = (req, res) => {
	userDB.findOneAndRemove({ _id: req.params.id }, error => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json({ succes: true, message: "User deleted" });
	});
};

var updateUser = (req, res) => {
	userDB.findByIdAndUpdate({ _id: req.params.id}, req.body, error => {
		if(error){
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json({ succes: true, message: "User updated" });
	});
};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
