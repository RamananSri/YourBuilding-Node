const userDB = require("../models/user");
const bcrypt = require("bcryptjs");
// const httpClient = require("request");

// http://cvrapi.dk/api?name=logimatic&country=dk

var getUserById = (req, res) => {
	userDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				succes: false,
				message: "mongo error i getUserById"
			});
		}
		res.json(result);
	});
};

var postUser = (req, res) => {
	// CVR API request code

	// httpClient("http://cvrapi.dk/api?name=logimatic&country=dk", (error, res, body) => {
	//   console.log(body);
	// });

	userDB.create(req.body, error => {
		if (error) {
			//Ændre message til besked fra userSchema
			return res.json({
				succes: false,
				message: "mongo error i postUser"
			});
		}
		res.json({ succes: true, message: "User created" });
	});
};

var getAllUsers = (req, res) => {
	userDB.find({}, function(error, result) {
		if (error) {
			return res.json({
				succes: false,
				message: "mongo error i getAllUsers"
			});
		}
		res.json(result);
	});
};

var deleteUser = (req, res) => {
	userDB.findOneAndRemove({ _id: req.params.id }, error => {
		if (error) {
			return res.json({
				succes: false,
				message: "mongo error i deleteUser"
			});
		}
		res.json({ succes: true, message: "User deleted" });
	});
};

var updateUser = (req, res) => {
	if (req.body.password !== null) {
		// get user
		userDB.findOne({ _id: req.params.id }, (error, result) => {
			if (error) {
				return res.json({
					succes: false,
					message: "mongo error i getUserById"
				});
			}
			console.log("Getting user");
			console.log(result.password);

			// Ingen ændringer på password
			if (!req.body.newPassword && result.password == req.body.password) {
				console.log("hej");
				console.log(result.password);

				userDB.findByIdAndUpdate(
					{ _id: req.params.id },
					req.body,
					error => {
						if (error) {
							return res.json({
								succes: false,
								message: "mongo error"
							});
						}
						return res.json({
							succes: true,
							message: "User updated no new pass"
						});
					}
				);
			}

			// Ændre password
			if (req.body.newPassword && result.password === req.body.password) {
				bcrypt.genSalt(10, (error, salt) => {
					bcrypt.hash(req.body.newPassword, salt, (error, hash) => {
						req.body.password = hash;
						return;
					});
				});

				console.log("hej");

				userDB.findByIdAndUpdate(
					{ _id: req.params.id },
					req.body,
					error => {
						if (error) {
							return res.json({
								succes: false,
								message: "mongo error new pass"
							});
						}
						return res.json({
							succes: true,
							message: "User updated new pass"
						});
					}
				);
			}
		});
	}
};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
