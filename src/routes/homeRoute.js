const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authCtrl");
const userCtrl = require("../controllers/userCtrl");
const bodyParser = require("body-parser");
router.use(bodyParser.json());


/* GET home page. */
router.get((req, res, next) => {
    res.json({ index: "Your building" });
    next();
});

router.post("login", authCtrl.login);

router.post("create", userCtrl.postUser);

module.exports = router;
