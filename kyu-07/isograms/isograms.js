function isIsogram(string) {
  let lowercase = string.toLowerCase();
  let result = false;
  if (lowercase.length > 0) {
    for (let i = 0; i < lowercase.length - 1; i++) {
      console.log(lowercase[i]);
      if (lowercase.includes(lowercase[i], i + 1)) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
  } else {
    return true;
  }
  return result;
}

module.exports = isIsogram;

console.log(isIsogram("moOse"));
