const { MongoDriverError } = require("mongodb");
const User = require("../models/user");

function index(req, res) {
  res.render("decks/index");
}
function newDeck(req, res) {
  res.render("decks/new-deck");
}
function create(req, res) {
  //create function
//   User.findById(req.params.id, function (err, user) {
    // if (err) return res.send(err.message);
    console.log(req.user)
    // user.decks.push(req.body);
    // deck.save(function (err) {
    //   if (err) return res.redirect("decks/new-deck");
      res.redirect("/summary");
    // });
//   });
}
function show (req, res) {
    //find by ID
    console.log(req.user)
    res.render(`decks/show-deck`)
}

module.exports = {
  index,
  newDeck,
  create,
  show,
};
