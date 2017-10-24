var jwt = require("jsonwebtoken");
const userDB = require("../models/user");
var secret = "this is the secret secret secret 12356";
const bcrypt = require("bcryptjs");

// findUser = function(email, password) {
// 	var user = userDB;
// 	return user.findOne({ email }).then(user2 => {
// 		if (!user2) {
// 			return Promise.reject();
// 		}
// 		return new Promise((resolve, reject) => {
// 			bcrypt.compare(password, user2.password, (err, res) => {
// 				if (res) {
// 					resolve(user2);
// 				} else {
// 					reject();
// 				}
// 			});
// 		});
// 	});
// };

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
	var token = req.body.token;
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
