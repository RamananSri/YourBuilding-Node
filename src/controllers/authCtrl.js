var jwt = require("jsonwebtoken");
const userDB = require("../models/user");
const app = require("../../app");

var authenticate = (req, res) => {
	userDB.findOne({ email: req.body.email }, (error, user) => {
		if (!user) {
			res.json({
				succes: false,
				message: "Password or username not found"
			});
		} else if (user) {
			if (user.password != req.body.password) {
				res.json({
					succes: false,
					message: "Password or username not corrent"
				});
			} else {
				var token = jwt.sign(user, app.get("secretkey"), {
					expiresIn: Math.floor(Date.now() / 1000) + 60 * 60
				});
				res.json({
					succes: true,
					message: "Tillykke du er inde i vores fede system",
					token: token
				});
			}
		}
	});
};

module.exports = {
	authenticate
};
