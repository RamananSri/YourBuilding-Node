const userDB = require("../models/user");
const {SHA256} = require('crypto-js');
const bcrypt = require('bcryptjs');

var getUserById = (req, res) => {
	userDB.findOne({ id: req.params.id }, (error, result) => {
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
		var password = req.body.password;
		bcrypt.genSalt(10, (err, salt)=> {
			bcrypt.hash(password, salt, (err,hash)=>{
				console.log(hash);
			});
		});
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
	userDB.findOneAndRemove({ id: req.params.id }, error => {
		if (error) {
			return res.json({ succes: false, message: "mongo error" });
		}
		res.json({ succes: true, message: "User deleted" });
	});
};

var updateUser = (req, res) => {};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
