var router = require("express").Router();
const passport = require("passport");
const usersCtrl = require("../controllers/users");

/* GET home page. */
router.get("/", usersCtrl.index);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/", // this should change to summary page
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) return next(err);
  });
  res.redirect("/");
});

module.exports = router;
