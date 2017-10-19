const authCtrl = require("../controllers/authCtrl");
const bodyParser = require("body-parser");
const router = require("express").Router();

router.use(bodyParser.json());

router.post("/", authCtrl.authenticate);

module.exports = router;
