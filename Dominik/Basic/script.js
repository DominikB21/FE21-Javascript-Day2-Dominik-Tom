//Exercise 1 ---------------------------------------------------------

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

document.write("<br><br>");

//Exercise 2 ----------------------------------------------------------

let favoriteFoods = ["pizza","hamburger","ice cream","chocolate"];

function randomFood() {
  
}

randomFood();