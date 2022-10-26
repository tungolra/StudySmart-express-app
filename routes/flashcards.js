var router = require("express").Router();
const flashcardsCtrl = require("../controllers/flashcards");

router.get("/decks/:id/flashcards/new", flashcardsCtrl.newCard);
router.post("/decks/:id", flashcardsCtrl.create);
router.get("/decks/:id/flashcards", flashcardsCtrl.show);
router.get("/flashcards/:id/edit", flashcardsCtrl.updateCard);
router.put("/decks/:id/flashcards/:id", flashcardsCtrl.edit);
// router.delete("/decks/:id/flashcards/:id", flashcardsCtrl.delete);

module.exports = router;
