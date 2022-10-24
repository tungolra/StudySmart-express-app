const User = require("../models/user");

function newCard(req, res) {
  //   User.find(req.user, function (err, user) {
  //     if (err) return res.send(err.message);
  //     //how do i pass in the specific deck i want to push the new flashcard to
  //     console.log(req.params.id);
  console.log();
  res.render("flashcards/new-card");
  //   });
}
module.exports = {
  newCard,
};
