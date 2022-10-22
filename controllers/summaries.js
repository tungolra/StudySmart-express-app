const User = require("../models/user");

function index(req, res){ 
    res.render("summary/summary.ejs")
}

module.exports = {
  index,
};