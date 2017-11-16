const userDB = require("../models/user");
const bcrypt = require("bcryptjs");
// const httpClient = require("request");

var getUserById = (req, res) => {
	userDB.findOne({ _id: req.params.id }, (error, result) => {
		if (error) {
			return res.json({
				success: false,
				message: error.message
			});
		}
		res.json(result);
	});
};

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
	// old password defined
	if (req.body.password) {
		userDB.findOne({ _id: req.params.id }, (error, result) => {
			if (error) {
				return res.json({
					success: false,
					message: error.message
				});
			}
			// compare client password with databse password
			bcrypt.compare(
				req.body.password,
				result.password,
				(err, result) => {
					if (err) {
						return res.json({
							success: false,
							message: err.message
						});
					}
					// compare match - set + hash new password
					if (result) {
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
						// find and update
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
					// compare does not match
					return res.json({
						success: false,
						message: "Password mismatch"
					});
				}
			);
		});
	} else {
		// old password not defined
		return res.json({
			success: false,
			message: "Forkert kodeord",
			statusCode: "1"
		});
	}
};

var updateUser2 = (req, res) => {
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
						} else {
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

					console.log("HELLO WORLD");
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

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
