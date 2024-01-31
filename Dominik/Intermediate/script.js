//Capitalize ---------------------------------------------------------

let capitalize = function(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

let inputString = "i am a web dev";
let capitalizedString = capitalize(inputString);
document.write(capitalizedString);
