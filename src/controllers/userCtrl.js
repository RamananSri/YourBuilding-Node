const userDB = require("../models/user");
const bodyParser = require("body-parser");
const express = require("express");

var getUserById = function(req, res) {
	userDB.findOne({ id: req.id }, function(err, res) {
		if (err) {
			console.log(err);
		}
		if (res) {
			console.log("awfe");
		} else {
			console.log("Hej");
			//res.json(result);
		}
	});
};

var postUser = function(user) {};

var getAllUsers = function() {
	return UserDal.getAllUsers();
};

var deleteUser = function(id) {
	UserDal.deleteUser(id);
};

var updateUser = function(user) {
	UserDal.updateUser(user);
};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
