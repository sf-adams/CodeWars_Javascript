/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// My attempt
function digitize(number) {
  if (number >= 0) {
    const numberArray = String(number).split("");
    const reverseArray = numberArray.reverse();
    const numberConvert = reverseArray.map((x) => Number(x));
    return numberConvert;
  }
}

console.log(digitize(15395));
console.log(digitize(734195));
console.log(digitize(425));

// Solution
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// 1. Takes the number and uses the String constructor as a function to turn the initial number into a string.
// 2. Splits each number into a new element in an array of strings. By leaving no space in between the quotation marks it splits after each character, rather than at the end of each word.
// 3. Maps the new array of strings to another array, converting each element back to a number.
// 4. Reverses the array for the final step.
