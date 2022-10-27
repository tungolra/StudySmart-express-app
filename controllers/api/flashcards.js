const User = require("../../models/user");

function sendCards(req, res) {
  let decks = req.user.decks;
  let deck = decks.find((deck) => deck._id == req.params.id);
  // map through deck.flashcards for due cards and form array
  //pass array into send
  let dueCards = [];
  decks.forEach((deck) => {
    deck.flashcards.forEach((card) => {
      if (card.status === "Due") {
        dueCards.push(card);
      }
    });
  });
  res.send({ deck, dueCards });
}

function updateCards(req, res){
  console.log("hit")
  console.log(req.body)
}
//after log-in, run a function that assesses statuses of all flashcards
// based on their due date, matching if it is before or after today;
// if before, it is due
// if after, it is pending

//function to create array for cards that are due

//function that changes the status and due date of card depending on click

module.exports = {
  sendCards,
  updateCards,
};
