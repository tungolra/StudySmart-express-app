const User = require("../models/user");

function index(req, res) {
  res.render("decks/index"); 
}

module.exports = {
  index,
};
