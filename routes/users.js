var router = require("express").Router();
const usersCtrl = require("../controllers/users");

/* GET users listing. */
router.get("/", usersCtrl.index);

module.exports = router;
