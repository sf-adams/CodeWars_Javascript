function duplicateCount(string) {
  let letters = {};
  let count = 0;

  string
    .toLowerCase()
    .split("")
    .forEach((element) => {
      letters[element] = (letters[element] || 0) + 1;
    });

  for (let i in letters) {
    if (letters[i] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("aAbccDe"));

module.exports = duplicateCount;
