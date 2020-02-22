const Table = require("./table");

var reservations = [];
var waitList = [];

var object = new Table(document.getElementById("aleph").textContent(), document.getElementById("beth").textContent(), document.getElementById("gimmel").textContent(), document.getElementById("daleth").textContent())

function tablePush() {
  if(reservations.length < 5) {
    reservations.push(object);
  } else {
    waitList.push(object);
  }
}

tablePush();