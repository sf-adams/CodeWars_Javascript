/*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

// My attempt
function stray(numbers) {
  // Sort the array so that the extra number is sent to one of the ends.
  const sort = numbers.sort();

  // Compare the first and second numbers. If they match, return the last number, otherwise return the first number.
  return sort[0] == sort[1] ? sort[sort.length - 1] : sort[0];
}

// Test
console.log(stray([1, 1, 2]));
console.log(stray([1, 2, 1]));
console.log(stray([2, 1, 1]));

// Solution
const strayBetter = (numbers, sort = numbers.sort()) =>
  sort[0] == sort[1] ? sort[sort.length - 1] : sort[0];

// Old attempt - didn't work...

// function stray(numbers) {
//   const numberOne = [];
//   const numberTwo = [];

//   for (let i = 0; i < numbers.length - 1; i++) {
//     if (numbers[i] == numbers[i + 1]) {
//       numberOne.push(numbers[i]);
//     } else {
//       numberTwo.push(numbers[i]);
//     }
//   }
//   console.log(numberOne);
//   console.log(numberTwo);
//   return numberOne.length < numberTwo.length ? numberOne[0] : numberTwo[0];
// }

// console.log(stray([1, 1, 2]));
// console.log(stray([1, 2, 1]));
// console.log(stray([2, 1, 1]));
