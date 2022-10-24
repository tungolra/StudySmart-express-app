const User = require("../models/user");
const Deck = require("../models/deck");

function summary(req, res) {
  User.findById(req.params.id, function (err, user) {
    let decks = req.user.decks;
    if (err) return res.send(err.message);
    res.render("summary/summary.ejs", { decks });
  });
}

module.exports = {
  summary,
};
