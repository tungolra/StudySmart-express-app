const User = require("../models/user");
const Deck = require("../models/deck")
function summary(req, res) {
  //populate decks, pass in all decks to view
  User.findById(req.params.id, function (err, user) {
      let decks = req.user.decks
      console.log(decks)
    if (err) return res.send(err.message);
      res.render("summary/summary.ejs", { decks });
    
  })
}


module.exports = {
  summary,
};
