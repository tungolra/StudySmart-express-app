const User = require("../models/user");

function newCard(req, res) {
  let deck = req.params.id

  res.render("flashcards/new-card", { deck });
}

function create(req, res) {
  console.log(req.params.id);
  res.redirect("show-deck")
}

module.exports = {
  newCard,
  create,
};
