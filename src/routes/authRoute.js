const authCtrl = require("../controllers/authCtrl");
const bodyParser = require("body-parser");
const router = require("express")
	.Router()
	.use(bodyParser.json);

router.post("/auth", authCtrl.authenticate);



module.exports = router;
