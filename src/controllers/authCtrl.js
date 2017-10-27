var jwt = require("jsonwebtoken");
const userDB = require("../models/user");
var secret = "this is the secret secret secret 12356";
const bcrypt = require("bcryptjs");

var login = (req, res) => {
	userDB.findOne({ email: req.body.email }, (error, user) => {
		if (!user) {
			res.json({
				success: false,
				message: "Password or username not found"
			});
		} else {
			var token = jwt.sign(JSON.stringify(user._id), secret);
			bcrypt.compare(req.body.password, user.password, (err, result) => {
				if (result) {
					res.json({
						success: true,
						message: "Tillykke du er inde i vores fede system",
						token: token,
						user: user
					});
				} else {
					res.json({
						success: false,
						message: "Du er ikke logget ind!!"
					});
				}
			});
		}
	});
};

var authenticate = (req, res, next) => {
	console.log(req.headers.token);
	console.log(req.body);
	var token = req.headers.token;
	if (token) {
		jwt.verify(token, secret, (error, decoded) => {
			if (error) {
				return res.json({ succes: false, message: "invalid token" });
			} else {
				req.decoded = decoded;
				next();
			}
		});
	} else {
		return res.json({ succes: false, message: "get a token noob" });
	}
};

module.exports = {
	login,
	authenticate
};
