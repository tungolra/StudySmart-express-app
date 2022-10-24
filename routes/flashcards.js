var router = require("express").Router();
const flashcardsCtrl = require("../controllers/flashcards");

router.get("/new-card", flashcardsCtrl.newCard);

module.exports = router;
