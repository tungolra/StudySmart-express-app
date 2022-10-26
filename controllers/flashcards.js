const User = require("../models/user");
// const { newDeck } = require("./decks");

function newCard(req, res) {
  let deck = req.params.id;
  res.render("flashcards/new-card", { deck });
}

function create(req, res) {
  let deckId = req.params.id;
  let deck = req.user.decks.find((deck) => {
    if (deck._id == req.params.id) {
      return true;
    }
  });
  deck.flashcards.push(req.body);
  req.user.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect(`/decks/${deckId}`);
  });
}
function show(req, res) {
  res.render("flashcards/show-card");
}
function updateCard(req, res) {
  // let decks = req.user.decks
  // pass in deck name for h2
  // pass in card object to fill preview
  let decks = req.user.decks;
  let cardID = req.params.id;
  let deckName = req.query.deckName
  console.log(req.query.deckName)

  let fc = deckName.flashcards.find((c) => {
    if (c._id == req.params.id) {
      console.log("_id: ".c._id, "req.params.id: ", req.params.id);
      return true;
    }
  });

  res.render("flashcards/edit", { cardID });
}
function edit(req, res) {}
function deleteCard(req, res) {}

module.exports = {
  newCard,
  create,
  show,
  updateCard,
  edit,
  deleteCard,
};
