// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// My attempt
function doubleChar(str) {
  let newString = [];
  let splitString = str.split("");

  for (i = 0; i < splitString.length; i++) {
    newString.push(splitString[i] + splitString[i]);
  }

  return newString.join("");
}

console.log(doubleChar("This is a test"));
console.log(doubleChar("1234!_"));

// Solution
function doubleCharSolution(str) {
  let word = "";

  for (i = 0; i < str.length; i++) {
    word += str[i] + str[i];
  }

  return word;
}

console.log(doubleCharSolution("Test"));
console.log(doubleCharSolution("This is a test"));
console.log(doubleCharSolution("This is a 1234 %&"));

// Cool discovery - you can reference the index position of a character in a string as well as an array. This way you don't need to convert it to an array first. e.g.
// let stringTest = "Test";
// console.log(stringTest[1]);
