const bodyParser = require("body-parser");

const router = require("express").Router();

const answerCtrl = require("../controllers/answerCtrl");

router.use(bodyParser.json());

/* POST question */
router.post("/:id", answerCtrl.postAnswer);

module.exports = router;
