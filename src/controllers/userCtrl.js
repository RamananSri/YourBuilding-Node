const userDB = require("../models/user");
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

		userDB.findOne({ _id: req.body._id }, (error, result) => {
			if (error) {
				return res.json({
					succes: false,
					message: "mongo error i getUserById"
				});
			}
			console.log("Getting user");

			// Ingen ændringer på password
			if (!req.body.newPassword && result.password == req.body.password) {
				(req, res) => {
					userDB.findByIdAndUpdate({ _id: req.params._id }, req.body, error => {
						if (error) {
							return res.json({ succes: false, message: "mongo error" });
						}
						return res.json({ succes: true, message: "User updated" });
					});
				};
			}

			// Ændre password
			if (req.body.newPassword && result.password === req.body.password) {
				req.body.password == req.body.newPassword;
				(req, res) => {
					userDB.findByIdAndUpdate({ _id: req.params._id }, req.body, error => {
						if (error) {
							return res.json({ succes: false, message: "mongo error" });
						}
						return res.json({ succes: true, message: "User updated" });
					});
				};
			}
		});
	}

	res.json({ succes: false, message: "Password mismatch" });
};

module.exports = {
	getUserById,
	postUser,
	getAllUsers,
	deleteUser,
	updateUser
};
