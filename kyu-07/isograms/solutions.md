## Using `Set`

```js
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length;
}
```

> [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) about set

Set objects let you store unique values, just as mathematical sets. So in theory if you store the word 'mooose' in a set it should have only 4 values for each unique word(m,o,s,e). With that you solve the part of 'counting' unique words. Afterwards you just compare the length of a set with the length of a passed string. If they match it means words are unique since set can only have unique values.

Number example:

```js
Set(2, 3, 4, 3, 3, 4, 5, 6, 3) will output following: 2, 3, 4, 5, 6 - so no same values allowed. */
```

---

## Using `regex`

```js
function isIsogram(str) {
  return !/(\w).\*\1/i.test(str);
}
```

---

## Most similar to mine

```js
function isIsogram(str) {
  var i, j;
  str = str.toLowerCase();
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false;
  return true;
}
```
