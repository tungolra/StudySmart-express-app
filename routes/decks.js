var router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/index", decksCtrl.index);

module.exports = router;
