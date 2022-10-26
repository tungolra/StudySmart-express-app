var router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/index", decksCtrl.index);
router.get("/new-deck", decksCtrl.newDeck);
router.post("/index", decksCtrl.create);
router.get("/:id", decksCtrl.show);
router.get("/:id/edit", decksCtrl.updateDeck);
router.put("/:id", decksCtrl.edit)
router.delete("/:id", decksCtrl.deleteDeck);

module.exports = router;
