var express = require("express");
var router = express.Router();
const passport = require("passport");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home", { title: "Study Smart" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/");
});

module.exports = router;
