const { MongoDriverError } = require("mongodb");
const User = require("../models/user");

function index(req, res) {
  let decks = req.user.decks;
  console.log(decks);
  let allCards = decks.reduce((acc, deck) => {
    let newDeck = deck.flashcards.map(card => ({flashcard: card, deckName: deck.name}))
    return [...acc, ...newDeck]  
  }, []);
  res.render("decks/index", { decks, allCards });
}
function newDeck(req, res) {
  res.render("decks/new-deck");
}
function create(req, res) {
  User.find(req.user, function (err, user) {
    if (err) return res.send(err.message);
    req.user.decks.push(req.body);
    req.user.save(function (err) {
      if (err) return res.send(err.message);
      res.redirect("/summary");
    });
  });
}
function show(req, res) {
  //find by ID
  let deck = req.params.id;
  res.render("decks/show-deck", { deck });
}
function updateDeck(req, res) {

}
function deleteDeck (req, res){

}

module.exports = {
  index,
  newDeck,
  create,
  show,
  updateDeck,
  deleteDeck
};
