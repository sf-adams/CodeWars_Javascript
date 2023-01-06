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
