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
  let cardID = req.params.id;
  let deckName = req.query.deckName.replace("%20", " ");
  let foundDeck = req.user.decks.find((deck) => {
    let deckTemp = deck.name.replace(/\s/g, "");
    let deckTemp2 = deckName.replace(/\s/g, "");
    if (deckTemp === deckTemp2) return true;
  });
  let fc = foundDeck.flashcards.find((c) => c._id == req.params.id);
  res.render("flashcards/edit", { cardID, fc, deckName, foundDeck });
}
function edit(req, res) {
  let deckID = req.user.decks.findIndex(
    (deck) => deck._id == req.params.deckID
  );
  let cardID = req.user.decks[deckID].flashcards.findIndex(
    (c) => c._id == req.params.cardID
  );
  req.user.decks[deckID].flashcards[cardID].front = req.body.frontEdit;
  req.user.decks[deckID].flashcards[cardID].back = req.body.backEdit;
  req.user.decks[deckID].flashcards[cardID].tags = req.body.tagEdit;
  req.user.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/decks/index");
  });
}
function deleteCard(req, res) {
  let deckID = req.user.decks.findIndex(
    (deck) => deck._id == req.params.deckID
  );
  let cardID = req.user.decks[deckID].flashcards.findIndex(
    (c) => c._id == req.params.cardID
  );
  req.user.decks[deckID].flashcards.splice(cardID, 1);
  req.user.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/decks/index");
  });
}
module.exports = {
  newCard,
  create,
  show,
  updateCard,
  edit,
  deleteCard,
};
