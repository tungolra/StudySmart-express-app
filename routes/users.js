var router = require("express").Router();
const usersCtrl = require("../controllers/users");

/* GET users listing. */
router.get("/",  usersCtrl.index);
router.get("/users/settings",usersCtrl.settings, function(req, res) {
    console.log("hit router")})

module.exports = router;
