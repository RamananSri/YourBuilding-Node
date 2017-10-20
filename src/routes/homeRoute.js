const express = require("express");
const bodyParser = require("body-parser");

const authCtrl = require("../controllers/authCtrl");
const userCtrl = require("../controllers/userCtrl");

const router = express.Router();
router.use(bodyParser.json());

/* GET home page. */
router.get("/", (req, res, next) => {
	res.json({ index: "Your building" });
	next();
});

/* POST check login credentials */
router.post("/login", authCtrl.login);

/* POST create user */
router.post("/create", userCtrl.postUser);

module.exports = router;
