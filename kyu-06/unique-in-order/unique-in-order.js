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

/*

Clever Solution
- Uses spread operator and filter to return a new array without repeating


var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

---

Best Practice Solution
- Not disimilar to my solution

function uniqueInOrder(it) {
  var result = []
  var last

  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }

  return result
}

*/
