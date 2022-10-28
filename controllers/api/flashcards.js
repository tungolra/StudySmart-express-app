const User = require("../../models/user");

function sendCards(req, res) {
  let decks = req.user.decks;
  let deck = decks.find((deck) => deck._id == req.params.id);
  let dueCards = [];
  decks.forEach((deck) => {
    deck.flashcards.forEach((card) => {
      if (card.status === "Due") {
        dueCards.push(card);
      }
    });
  });
  res.send({ deck, dueCards });
}

function updateCards(req, res) {
  let decks = req.user.decks;
  decks.forEach((deck) => {
    deck.flashcards.forEach((card) => {
      if (card.id === req.params.cardID) {
        card.due = req.body.currentDueDate;
        card.status = req.body.status;
      }
    });
  });
  req.user.save(function (err) {
    if (err) return res.send(err.message);
  });
}

module.exports = {
  sendCards,
  updateCards,
};
