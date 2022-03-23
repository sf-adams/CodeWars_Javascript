/*
Description:

Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n (inclusive).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/

function powersOfTwo(n) {

  // Create new array for storing the powers
  let result = [];

  // Create a for loop, starting at index position 0, setting
  // an upper limit of n, and incrementing by 1
  for (var i = 0; i <= n; i++) {

    // Use the push method to add each new element to the end of the array
    result.push(2 ** i);

    // An alternative that uses the Math.pow() static method.
    // Give it two arguments, base and exponent, and it returns
    // base to the power of exponent:
    // result.push(Math.pow(2, i));
  }

  //
  return result;
}

// Print the result of the function with an example of n = 6
console.log(powersOfTwo(6));
