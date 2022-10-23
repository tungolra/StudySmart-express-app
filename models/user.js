const mongoose = require("mongoose");

//mock database 
const me = {
    id: 1,
    name: "Ralph", 
    email: "abc@123.com",
    googleId: "106847162975287723123",
    avatar: "https://lh3.googleusercontent.com/a/ALm5wu1YvLMhcM6h3u37aZTwFhETLZ8mGSi1vSXZ-UpK=s96-c",
    decks: [{
        
    }]

 }

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
    avatar: String,
    decks: [deckSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
