var jwt = require("jsonwebtoken");
const userDB = require("../models/user");
var secret = "this is the secret secret secret 12356";

var login = (req, res) => {
	userDB.findOne(
		{ email: req.body.email, password: req.body.password },
		(error, user) => {
			if (!user) {
				res.json({
					succes: false,
					message: "Password or username not found"
				});
			} else {
				var token = jwt.sign(JSON.stringify(user._id), secret);
				res.json({
					succes: true,
					message: "Tillykke du er inde i vores fede system",
					token: token
				});
			}
		}
	);
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
