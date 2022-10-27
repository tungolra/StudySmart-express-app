const User = require("../../models/user");

async function showCard(req, res) {
  try {
    let deckID = req.params.id;
    let deckIdx = req.user.decks.findIndex((deck) => deck._id == deckID);
    let flashcards = req.user.decks[deckIdx];
    console.log(deckID)
    console.log(deckIdx)
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ devMessage: "error getting teams", errorMessage: err.message });
  }
}

module.exports = {
  showCard,
};
