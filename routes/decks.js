var router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/", decksCtrl.index);

module.exports = router;
