const userDB = require("../models/user");
const bodyParser = require("body-parser");
const express = require("express");

var getUserById = function(req, res) {
	userDB
		.findOne({
			id: req.params.id
		})
		.exec(function(error, result) {
			if (error) {
				res.send("fejl: " + error);
			}
			console.log("User fundet");
			res.json(result);
		});
};

var postUser = function(req, res) {

};

var getAllUsers = function() {};

var deleteUser = function(id) {};

var updateUser = function(user) {};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
