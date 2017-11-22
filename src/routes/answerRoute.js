const router = require("express").Router();
const answerCtrl = require("../controllers/answerCtrl");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

/* POST question */
router.post("/:id", answerCtrl.postAnswer);

router.put("/:id/", answerCtrl.updateAnswer);

router.delete("/:qid/:aid", answerCtrl.deleteAnswer);

module.exports = router;
