## Using regex

```js
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}
```

A number of steps in this solution:

1. Convert to all lower case
2. Create an array of substrings
3. Sort them alphabetically
4. Convert the array back into a single string
5. Use [match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) to retrieve the result of matching a string against a regular expression that groups items

## Using filter

```js
function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function (val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}
```
