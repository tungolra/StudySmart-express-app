var router = require("express").Router();
const flashcardsCtrl = require("../controllers/flashcards");

router.get("/decks/:id/flashcards/new", flashcardsCtrl.newCard);
router.post("/decks/:id", flashcardsCtrl.create);

module.exports = router;
