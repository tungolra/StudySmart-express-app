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
    // date to default to current day
    due: {type: Date, default: new Date()}, 
    // status to default to pending..should i have a "new" status?
    status: String,
    tags: { type: String },
    status: { type: String, default: "New"}
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
