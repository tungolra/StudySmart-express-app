const express = require("express");
const router = express.Router();
flashcardsAPICtrl = require("../../controllers/api/flashcards");

router.get("/api/flashcards/:id", flashcardsAPICtrl.showCard);

module.exports = router;
