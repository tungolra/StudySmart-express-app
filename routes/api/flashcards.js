const express = require("express");
const router = express.Router();
flashcardsAPICtrl = require("../../controllers/api/flashcards");

router.get("/api/flashcards/:id", flashcardsAPICtrl.sendCards);
router.put(
  "/api/decks/:deckID/flashcards/:cardID",
  flashcardsAPICtrl.updateCards
);

module.exports = router;
