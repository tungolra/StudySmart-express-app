const mongoose = require("mongoose");


const flashcardSchema = new mongoose.Schema(
  {
    front: String,
    back: String,
    due: {type: Date, default: new Date()}, 
    position: Number,
    tags: { type: String },
    status: { type: String, default: "New"}
  },
  {
    timestamps: true,
  }
);
const deckSchema = new mongoose.Schema(
  {
    //make unique
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
    avatar: String,
    decks: [deckSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
