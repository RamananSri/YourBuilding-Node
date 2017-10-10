const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const router = express.Router();
const bodyParser = require("body-parser");

const urlEncodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

var user = { id: 1, name: "a", address: "a", phone: 1 };

router.post("/", jsonParser, (req, res) => {
	user = req.body.user;
	res.send(user);
});

/* GET User by ID */
router.get("/get/:id/", function(req, res) {
	var user = userCtrl.getUserById(req.params.id);
	res.send(user);
});

/* POST User. */
// router.post("/users/", function(req) {
// 	userCtrl.postUser(req.params.id.name.address.id);
// });

/* GET all users */
router.get("/users", function(req, res) {
	var user = userCtrl.getAllUsers();
	console.log(user);
	res.send(user);
});

module.exports = router;
