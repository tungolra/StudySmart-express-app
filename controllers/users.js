// const { nextTick } = require("process");

const User = require("../models/user");

module.exports = {
  index,
  settings,
};

function index(req, res) {
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, "i") }
    : {};
  let sortKey = req.query.sort || "name";
  User.find(modelQuery).exec(function (err, users) {
    if (err) return next(err);
    res.render("index", {
      title: "StudySmart",
      users,
      user: req.user,
      name: req.query.name,
      sortKey,
    });
  });
}

function settings(req, res) { 
    res.render("users/settings")
}