
const path = require("path");
var express = require("express");
const index = require("./index.js")
const Table = require('./tables.js');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservations = [];
var waitList = [];

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



// Routes
// =============================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "main.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

// Displays tables reserved
app.get("/api/tablesapi", function (req, res) {
  return res.json(index.reservations);
});

app.get("/api/waitlistapi", function (req, res) {
  return res.json(index.waitList);
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});