const userDB = require("../models/user");
const bcrypt = require("bcryptjs");
// const httpClient = require("request");

/* Function that gets a user by ID. Checks the given ID with the ones in the database and returns an
 error message or a user object. */
var getUserById = (req, res) => {
	userDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: errorm.messageS
			});
		}
		res.json(result);
	});
};

/* Function that creates and adds a new user to the database with the values from the given body. */
var postUser = (req, res) => {
	// CVR API request code - // http://cvrapi.dk/api?name=logimatic&country=dk

	// httpClient("http://cvrapi.dk/api?name=logimatic&country=dk", (error, res, body) => {
	//   console.log(body);
	// });

	userDB.create(req.body, error => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json({ success: true, message: "User created" });
	});
};

/* Function that gets all existing users from the DB or returns an error message if this fails. */
var getAllUsers = (req, res) => {
	userDB.find({}, function(error, result) {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json(result);
	});
};

/* Function that deletes a user from the DB with a specific ID. */
var deleteUser = (req, res) => {
	userDB.findOneAndRemove({ _id: req.params.id }, error => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json({ success: true, message: "User deleted" });
	});
};

var updateUser = (req, res) => {
	// Check if password is defined
	if (req.body.password) {
		// Get user
		userDB.findOne({ _id: req.params.id }, (error, result) => {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}

			// Check if Password is correct
			bcrypt.compare(
				req.body.password,
				result.password,
				(err, result) => {
					if (err) {
						return res.json({
							success: false,
							message: error.message
						});
					}

					if (result) {
						// Set + hash new password
						if (req.body.newPassword) {
							bcrypt.genSalt(10, (error, salt) => {
								bcrypt.hash(
									req.body.newPassword,
									salt,
									(error, hash) => {
										req.body.password = hash;
									}
								);
							});
						}

						// Find and update
						userDB.findByIdAndUpdate(
							{ _id: req.params.id },
							req.body,
							error => {
								if (error) {
									return res.json({
										success: false,
										message: error.message
									});
								}
								return res.json({
									success: true,
									message: "User updated"
								});
							}
						);
					}
				}
			);
		});
	} else {
		// Password not defined
		return res.json({
			success: false,
			message: "Forkert kodeord",
			statusCode: "1"
		});
	}
};

/* Making the functions public, so they can be used from other classes. */
module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
