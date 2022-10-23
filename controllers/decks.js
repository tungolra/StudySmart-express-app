const { MongoDriverError } = require("mongodb");
const User = require("../models/user");

function index(req, res) {
  res.render("decks/index");
}
function newDeck(req, res) {
  res.render("decks/new-deck");
}
function create(req, res) {
  //create function
  User.find(req.user, function (err, user) {
    if (err) return res.send(err.message);
    req.user.decks.push(req.body);
    req.user.save(function (err) {
      if (err) return res.send(err.message);
      res.redirect("/summary");
    });
  });
}
function show(req, res) {
  //find by ID
  // console.log(req.user)
  res.render(`decks/show-deck`);
}

module.exports = {
  index,
  newDeck,
  create,
  show,
};
