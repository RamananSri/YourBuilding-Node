const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const bodyParser = require("body-parser");

router.use(bodyParser.json()); // support json encoded bodies

/* GET all users */
router.get("/", userCtrl.getAllUsers);

/* PUT user */
router.put("/:id/", userCtrl.updateUser);

/* GET User by ID */
router.get("/:id/", userCtrl.getUserById);

/* DELETE user */
router.delete("/:id", userCtrl.deleteUser);

/* PUT subscriptions */
router.put("/:id/subs", userCtrl.putSubscription);

module.exports = router;
