const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const bodyParser = require("body-parser");

// Decouple controlleren ved at sende modellerne fra routes videre til controller (Persistence/02)

router.use(bodyParser.json()); // support json encoded bodies
// router.use(bodyParser.urlencoded({ extended: true })); 	// support encoded bodies

/* GET User by ID */
router.get("/:id/", userCtrl.getUserById);

/* GET all users */
router.get("/", userCtrl.getAllUsers);

/* DELETE user */
router.delete("/:id", userCtrl.deleteUser);

/* PUT user */
router.put("/", function (req, res) { });

module.exports = router;
