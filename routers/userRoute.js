const express = require("express");
const userCtrl = require("../controllers/userCtrl");
const router = express.Router();

/* GET home page. */
router.get("/get/:id/", function(req, res) {
  var user = userCtrl.getUserById(req.params.id);
  res.send(user);
});

module.exports = router;
