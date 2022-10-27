const User = require("../models/user");


function summary(req, res) {
  let userName = req.user.name.split(" ")[0]
    let decks = req.user.decks;
    res.render("summary/summary.ejs", { decks, userName });

}

module.exports = {
  summary,
};
