const router = require("express").Router();
const bodyParser = require("body-parser");

const answerCtrl = require("../controllers/answerCtrl");

router.use(bodyParser.json());

/* POST answer */
router.post("/:id", answerCtrl.postAnswer);

router.put("/:id", answerCtrl.updateAnswer);

router.delete("/:qid/:aid", answerCtrl.deleteAnswer);

module.exports = router;
