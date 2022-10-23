var router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/index", decksCtrl.index);
router.get("/new-deck", decksCtrl.newDeck);

module.exports = router;
