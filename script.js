var money = 0;
var periodic = setInterval(updateMoney ,100);

function moneyButton() {
  money += 1;
}

function updateMoney() {
  var x = document.getElementById("money counter").innerHTML = "| you have " + money + " money |";
  }