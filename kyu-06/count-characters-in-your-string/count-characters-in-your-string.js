function count(string) {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let x = string[i];
    if (result[x] === undefined) {
      result[x] = 1;
    } else {
      result[x] += 1;
    }
  }
  return result;
}

module.exports = count;
