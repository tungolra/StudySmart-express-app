const User = require("../models/user");

function index(req, res) {
  res.render("decks/index");
}
function newDeck(req, res) {
  res.render("decks/new-deck");
}

module.exports = {
  index,
  newDeck,
};
