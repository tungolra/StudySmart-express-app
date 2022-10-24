const User = require("../models/user");

function newCard(req, res) {
  res.render("flashcards/new-card");

}

module.exports = {
  newCard,
};
