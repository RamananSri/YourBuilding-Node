const bodyParser = require("body-parser");

const router = require('express').Router();

const questionCtrl = require('../controllers/questionCtrl');

router.use(bodyParser.json());

/* GET all questions */
router.get("/:subCategory", questionCtrl.getBySubCategory);

/* UPDATE question */
router.put("/:id/", questionCtrl.updateQuestion);

/* GET question by ID */
router.get("/:id/", questionCtrl.getQuestionByUserId);

/* DELETE question */
router.delete("/:qid", questionCtrl.deleteQuestion);

/* POST question */
router.post("/", questionCtrl.postQuestion);

module.exports = router;