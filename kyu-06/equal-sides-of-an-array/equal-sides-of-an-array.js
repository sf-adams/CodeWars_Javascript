function findEvenIndex(array) {
  for (let i = 0; i < array.length; i++) {
    let leftValue = 0;
    let rightValue = 0;
    let left = array.slice(0, i).reduce((a, b) => a + b, leftValue);
    let right = array.slice(i + 1).reduce((a, b) => a + b, rightValue);

    if (left === right) {
      // return `The array was: [${array}] ${i}`;
      return i;
    }
  }
  return -1;
}

module.exports = findEvenIndex;

// Better solution

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndexSolution = (a) =>
  a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));

// 1. First we have the function sum which has 3 parameters (a, from, to).
// 2. This function takes 'a' slices it from index 'from' to index 'to' (important to remember that the index 'to' is not included in slice).
// 3. This sliced array is then reduced, The reduce() method executes a function on each element of the array, in order, passing in the return value from the calculation on the preceding element (MDN).
// 4. Now we have the FindEvenIndex function which has 1 parameter (a).
// 5. This function takes 'a' and uses the findIndex method. The findIndex() method returns the index of the first element in the array that satisfies the provided testing function (MDN).
// 6. The function that this findIndex method takes, uses the sum function.
// 7. This function inside of findIndex says, if the sum of all elements from index '0' to index 'i' (remember it doesn't include i) is equal to the sum of all the elements from index 'i + 1' to the last index of the array (because an end to the slice method is omitted), return that index, if the index is not found, the finIndex method will automatically return -1.
