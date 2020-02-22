var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
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
  return res.json(reservations);
});

app.get("/api/waitlistapi", function (req, res) {
  return res.json(waitList);
});

