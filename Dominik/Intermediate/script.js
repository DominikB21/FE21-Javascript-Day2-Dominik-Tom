//Capitalize ---------------------------------------------------------
document.write("Exercise 1 <hr><br>")

let capitalize = function(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

let inputString = "i am a web dev";
let capitalizedString = capitalize(inputString);
document.write(capitalizedString);

document.write("<br><br><br>")
//Average Grade ------------------------------------------------------
document.write("Exercise 2 <hr><br>")

function averageGrade (math, physics, english) {
  let sum = (math + physics + english);
  let average = (sum / averageGrade.length);
  document.write(`Sum: ${sum}<br>Average: ${average}`)
}

averageGrade(5, 3, 1);