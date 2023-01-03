// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// My Attempt
function highAndLow(string) {
  const splitString = string.split(" ");

  function sortNumbers(a, b) {
    return a - b;
  }

  const sortedNumbers = splitString.sort(sortNumbers);
  const lowestValue = sortedNumbers[0];
  const highestValue = sortedNumbers[sortedNumbers.length - 1];
  const newString = `${highestValue} ${lowestValue}`;

  return newString;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// Solution

// When sorting numbers, because unicode puts things alphabetically, you have to use a different function to sort numerically

function highAndLow(numbers) {
  var arr = numbers.split(" ").sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0];
}
