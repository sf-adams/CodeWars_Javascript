function uniqueInOrder(iterable) {
  const result = [];
  iterable.length >= 1 ? result.push(iterable[0]) : null;
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
}

module.exports = uniqueInOrder;
