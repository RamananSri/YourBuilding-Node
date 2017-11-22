var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userDB = require("../models/user");
var secret = "this is the secret secret secret 12356";


/* Login function that checks if a user with the given email and password exists.
 If the user exists and the password is correct, a token is given to authenticate on later requests.
 If the user does not exist or the password is incorrect, an error message will be shown. */
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

/* Authenticate function that validates the users token. */
var authenticate = (req, res, next) => {
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

/* Making the functions public, so they can be used from other classes. */
module.exports = {
	login,
	authenticate
};
