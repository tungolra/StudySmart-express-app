const { MongoDriverError } = require("mongodb");
const User = require("../models/user");

function index(req, res) {
  
  let decks = req.user.decks;
  let allCards = decks.reduce((acc, deck) => {
    let newDeck = deck.flashcards.map((card) => ({
      flashcard: card,
      deckName: deck.name,
    }));
    return [...acc, ...newDeck];
  }, []);
  res.render("decks/index", { decks, allCards });
}
function newDeck(req, res) {
  res.render("decks/new-deck");
}
function create(req, res) {
  req.user.decks.push(req.body);
  req.user.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/summary");
  });
}
function show(req, res) {

  let deckID = req.params.id;
  let deck = req.user.decks.find((deck) => {
    if (deck._id == req.params.id) {
      return true;
    }
  });
  res.render("decks/show-deck", { deckID, deck });
}
function updateDeck(req, res) {
  let deck = req.user.decks.find((deck) => {
    if (deck._id == req.params.id) {
      return true;
    }
  });
  res.render("decks/edit", { deck });
}
function edit(req, res) {
  let idx = req.user.decks.findIndex((deck) => deck._id == req.params.id);
  req.user.decks[idx].name = req.body.editName;
  req.user.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/summary");
  });
}
function deleteDeck(req, res) {
  let idx = req.user.decks.findIndex((deck) => deck._id == req.params.id);
  req.user.decks.splice(idx, 1);
  req.user.save(function (err) {
    if (err) return res.send(err.message);
    res.redirect("/summary");
  });
}

module.exports = {
  index,
  newDeck,
  create,
  show,
  updateDeck,
  edit,
  deleteDeck,
};
