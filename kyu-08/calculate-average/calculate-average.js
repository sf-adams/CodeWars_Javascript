function findAverage(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return array.length == 0 ? 0 : result / array.length;
}

module.exports = findAverage;
