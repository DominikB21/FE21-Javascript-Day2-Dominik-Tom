//Exercise 1 ---------------------------------------------------------
document.write("Exercise 1<hr>");

let randomTemp = Math.floor(Math.random() * 32 - 5);
console.log(randomTemp);

function temperatureText() {
  if (randomTemp <= 10) {
    document.write("The weather is cold");
  } else {
    document.write("The weather is moderate");
  }
}

temperatureText(randomTemp);

document.write("<br><br>")

//Exercise 2 ----------------------------------------------------------
document.write("<br>Exercise 2<hr><br>");

function randomFood() {
  return favoriteFoods[Math.floor(Math.random() * favoriteFoods.length)];
}

let favoriteFoods = ["pizza","hamburger","ice cream","chocolate"];

document.write(randomFood());

document.write("<br><br>")

//Exercise 3 ----------------------------------------------------------
