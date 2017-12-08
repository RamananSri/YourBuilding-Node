const router = require("express").Router();
const questionCtrl = require("../controllers/questionCtrl");
const bodyParser = require("body-parser");

router.use(bodyParser.json());

/* GET all questions */
router.get("/:category", questionCtrl.getByCategory);

/* UPDATE question */
router.put("/:id/", questionCtrl.updateQuestion);

/* GET question by ID */
router.get("/user/:id/", questionCtrl.getQuestionByUserId);

/* DELETE question */
router.delete("/:qid", questionCtrl.deleteQuestion);

/* POST question */
router.post("/", questionCtrl.postQuestion);

/* Get all categories - weird sti */
router.get("/:id/categories/", questionCtrl.getAllCategories);

module.exports = router;
