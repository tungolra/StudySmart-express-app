const User = require("../models/user");

function summary(req, res) {
  //populate decks, pass in all decks to view
  res.render("summary/summary.ejs");
}


module.exports = {
  summary,
};
