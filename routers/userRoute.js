const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json()); // support json encoded bodies
// router.use(bodyParser.urlencoded({ extended: true })); 	// support encoded bodies

/* GET User by ID */
router.get("/:id/", function(req, res) {
	var user = userCtrl.getUserById(req.params.id);
	res.send(user);
});

/* GET all users */
router.get("/", function(req, res) {
	var user = userCtrl.getAllUsers();
	res.send(user);
});

/* POST user */
router.post("/", function(req, res) {
	userCtrl.postUser(req.body);
	res.send(userCtrl.getAllUsers()); // Test
});

/* DELETE user */
router.delete("/:id", function(req, res) {
	userCtrl.deleteUser(req.params.id);
	res.send(userCtrl.getAllUsers()); // Test
});

module.exports = router;
