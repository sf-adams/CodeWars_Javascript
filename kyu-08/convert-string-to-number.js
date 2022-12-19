// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// My Attempt
function stringToNumber(string) {
  return Number(string);
}

console.log(stringToNumber("65"));
console.log(stringToNumber("90"));
console.log(stringToNumber("10000"));
console.log(stringToNumber("Test"));

// Solution
// Two main solutions to this, but one of them contains something called "Unary Plus"

// The unary plus (+) operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

// So in this case you might try:
function convertNumber(str) {
  return +str;
}

console.log(convertNumber("25"));

// The other is to simply use the parseInt() method
