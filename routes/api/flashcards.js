const express = require("express");
const router = express.Router();
flashcardsAPICtrl = require("../../controllers/api/flashcards");

router.get(
  "/api/flashcards",
  function (req, res) {
    let decks = req.user.decks;
    let deck = decks.find(deck => (deck._id == req.params.id))
    console.log(deck)
    res.send("test")
  },
  flashcardsAPICtrl.showCard
);

module.exports = router;
