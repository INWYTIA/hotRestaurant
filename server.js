const Table = require("./table");
const express = require("express");
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitList = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/table", function(req, res) {
  return res.json(reservations);
});

app.post("/api/table", function(req, res) {
  var newTable = req.body;

  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  if(reservations.length < 5) {
    reservations.push(newTable);
  } else {
    waitList.push(newTable);
  }

  res.json(newTable);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});