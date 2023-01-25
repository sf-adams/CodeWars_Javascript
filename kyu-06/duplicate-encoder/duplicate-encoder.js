function duplicateEncode(word) {
  let hash = {};
  let charArray = word.toLowerCase().split("");
  for (let i = 0; i < charArray.length; i++) {
    let x = charArray[i];
    if (hash[x] === undefined) {
      hash[x] = 1;
    } else {
      hash[x] += 1;
    }
  }
  return charArray
    .map((letter) => {
      if (hash[letter] === 1) {
        return "(";
      } else {
        return ")";
      }
    })
    .join("");
}

module.exports = duplicateEncode;
