const User = require("../models/user");
const Deck = require("../models/deck");

function summary(req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) return res.send(err.message);
    let decks = req.user.decks;
    console.log(decks)
    res.render("summary/summary.ejs", { decks });
  });
}

module.exports = {
  summary,
};
