const mongoose = require("mongoose");

const flashcardSchema = new mongoose.Schema(
  {
    front: String,
    back: String,
    due: Date,
    status: String,
    tags: { type: String },
  },
  {
    timestamps: true,
  }
);
const deckSchema = new mongoose.Schema(
  {
    name: String,
    flashcards: [flashcardSchema],
  },
  {
    timestamps: true,
  }
);
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
    decks: [deckSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
