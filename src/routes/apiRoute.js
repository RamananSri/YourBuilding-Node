const authCtrl = require("../controllers/authCtrl");
const bodyParser = require("body-parser");
const router = require("express").Router();

router.use(bodyParser.json());

// Authentication middleware
router.use(authCtrl.authenticate);

module.exports = router;
