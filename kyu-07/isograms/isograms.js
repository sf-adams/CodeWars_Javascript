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

// Using Set
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}

/* Set objects let you store unique values, just as mathematical sets. So in theory if you store the word 'mooose' in a set it should have only 4 values for each unique word(m,o,s,e). With that you solve the part of 'counting' unique words. Afterwards you just compare the length of a set with the length of a passed string. If they match it means words are unique since set can only have unique values.

Number example:

Set(2, 3, 4, 3, 3, 4, 5, 6, 3) will output following: 2, 3, 4, 5, 6 - so no same values allowed. */

// Using regex
function isIsogram(str) {
  return !/(\w).*\1/i.test(str);
}

// Most similar to mine
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  return true;
}
