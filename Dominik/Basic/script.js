//Exercise 1 ---------------------------------------------------------
document.write("Exercise 1<hr>");

let randomTemp = Math.floor(Math.random() * 31 - 5);
console.log(randomTemp);

function temperatureText() {
  if (randomTemp <= 10) {
    document.write("The weather is cold");
  } else {
    document.write("The weather is moderate");
  }
}

temperatureText(randomTemp);

document.write("<br><br>");

//Exercise 2 ----------------------------------------------------------
document.write("<br>Exercise 2<hr><br>");

function randomFood() {
  return favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)];
}

let favoriteFoods = ["pizza","hamburger","ice cream","chocolate"];

document.write(randomFood());

document.write("<br><br>");

//Exercise 3 ----------------------------------------------------------
document.write("<br>Exercise 3<hr><br>");

function crystalGazer(numberOfChildren, partnersName, geographicLocation, jobTitle) {
  document.write(`You will be a ${jobTitle} in ${geographicLocation} and married to ${partnersName} with ${numberOfChildren} kids.`);
}

crystalGazer(2, "Patricia", "Vienna", "Programmer");

document.write("<br><br>");

//Exercise 4 ----------------------------------------------------------
document.write("<br>Exercise 4<hr><br>");

function ageCalculator(birthYear, currentYear) {
  document.write(`You are either ${currentYear-birthYear} or ${currentYear-birthYear-1}`);
}

ageCalculator(2001, 2024);

document.write("<br><br>");

//Exercise 5 ----------------------------------------------------------
document.write("<br>Exercise 5<hr><br>");

function ageCalculatorNew(birthYear) {
  let currentYear = new Date().getFullYear();
  document.write(`You are either ${currentYear-birthYear} or ${currentYear-birthYear-1}`);
}

ageCalculatorNew(2001);

document.write("<br><br>");

//Exercise 6 -----------------------------------------------------------
document.write("<br>Exercise 6<hr><br>");

function degreesToRadians(degrees) {
  document.write(degrees * (Math.PI/180));
}

degreesToRadians(90);

document.write("<br><br>");

//Exercise 7 -----------------------------------------------------------
document.write("<br>Exercise 7<hr><br>");
