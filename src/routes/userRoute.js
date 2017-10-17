const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const userDB = require("../models/user");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

// Decouple controlleren ved at sende modellerne fra routes videre til controller (Persistence/02)

router.use(bodyParser.json()); // support json encoded bodies
// router.use(bodyParser.urlencoded({ extended: true })); 	// support encoded bodies

/* GET User by ID */
router.get("/:id/", userCtrl.getUserById);

/* GET all users */
router.get("/", function(req, res) {});

/* POST user */
router.post("/", userCtrl.postUser);

/* DELETE user */
router.delete("/:id", function(req, res) {});

/* PUT user */
router.put("/", function(req, res) {});

module.exports = router;
