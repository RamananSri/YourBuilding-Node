const bodyParser = require("body-parser");
const router = require("express").Router();

const authCtrl = require("../controllers/authCtrl");

router.use(bodyParser.json());

// Authentication middleware
router.use(authCtrl.authenticate);

module.exports = router;
