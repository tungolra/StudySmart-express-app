const User = require("../models/user");

function index(req, res) {
  res.render("decks/index"); //WHY WONT YOU REND
}

module.exports = {
  index,
};
