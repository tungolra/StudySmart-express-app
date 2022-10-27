var createError = require("http-errors");
var express = require("express");
var path = require("path");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
const session = require("express-session");
const methodOverride = require("method-override")

require("dotenv").config();
var app = express();
require("./config/database");
const passport = require("passport");
require("./config/passport");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(methodOverride("_method"))
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "StudySmart!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/", require("./routes/users"));
app.use("/summary", require("./routes/summaries"));
app.use("/decks", require("./routes/decks"));
app.use("/", require("./routes/flashcards"))
app.use("/", require("./routes/api/flashcards"))


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
