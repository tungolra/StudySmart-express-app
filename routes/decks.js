var router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/index", decksCtrl.index);
router.get("/new-deck", decksCtrl.newDeck);
router.post("/index", decksCtrl.create);

module.exports = router;
