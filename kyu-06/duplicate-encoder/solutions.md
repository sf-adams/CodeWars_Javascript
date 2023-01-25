## Using _indexOf_ and _lastIndexOf_

```js
function duplicateEncode(word) {
  let unique = "";
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
      unique += "(";
    } else {
      unique += ")";
    }
  }
  return unique;
}
```

- Creates a new variable
- Converts the given word to lower case
- Loops through the given word
- Each iteration it compares the position of the last index
  - If there is another instance of the character, adds "(" to the variable _unique_
  - Otherwise it adds a closing brace to the _unique_ variable
- Returns _unique_
