function uniqueInOrder(iterable) {
  const result = [];
  result.push(iterable[0]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] != iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
}

module.exports = uniqueInOrder;

// console.log(uniqueInOrder("AB"));
