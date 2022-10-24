var router = require("express").Router();
const flashcardsCtrl = require("../controllers/flashcards");

router.get("/decks/:id/flashcards/new", flashcardsCtrl.newCard);
router.post("/decks/:id", flashcardsCtrl.create);
router.get("/decks/:id/flashcards", flashcardsCtrl.show);

module.exports = router;
