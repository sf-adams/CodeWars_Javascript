// Solution
// function findAverage(array) {
//   let result = 0;
//   for (let i = 0; i < array.length; i++) {
//     result += array[i];
//   }
//   return array.length == 0 ? 0 : result / array.length;
// }

// Refactored Solution
function findAverage(array) {
  // Separating the empty array from the rest
  if (array.length === 0) {
    return 0;
  }

  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return array / array.length;
}

module.exports = findAverage;
