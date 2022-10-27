const User = require("../models/user");

function summary(req, res) {
  let userName = req.user.name.split(" ")[0];
  let decks = req.user.decks;
  let dueCards = [];
  decks.forEach((deck) => {
    deck.flashcards.forEach((card) => {
      let dueDate = card.due.getTime();
      let today = new Date().getTime();
      if (today > dueDate) {
        card.status = "Due";
        dueCards.push(card);
      } else if (today < dueDate) {
        card.status = "Pending";
      }
    });
  });
  req.user.save(function (err) {
    if (err) return res.send(err.message);
  });
  res.render("summary/summary.ejs", { decks, userName, dueCards });
}

module.exports = {
  summary,
};
