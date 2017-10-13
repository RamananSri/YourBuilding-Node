const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const router = express.Router();
const userDB = require("../models/user");

// Decouple controlleren ved at sende modellerne fra routes videre til controller (Persistence/02)

// router.use(bodyParser.json()); // support json encoded bodies
// router.use(bodyParser.urlencoded({ extended: true })); 	// support encoded bodies

/* GET User by ID */
router.get("/:id/", function(req, res) {
	userDB
		.findOne({
			id: req.params.id
		})
		.exec(function(error, result) {
			if (error) {
				res.send("fejl: " + error);
			}
			console.log("User fundet");
			res.js .json(result);
		});
});

/* GET all users */
router.get("/", function(req, res) {});

/* POST user */
router.post("/", function(req, res) {});

/* DELETE user */
router.delete("/:id", function(req, res) {});

/* PUT user */
router.put("/", function(req, res) {});

module.exports = router;
