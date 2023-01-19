## Split(), Map() and Join() Solution

```js
function solution(string) {
  string = string.split("").map(function (el) {
    if (el === el.toUpperCase()) {
      el = " " + el;
    }
    return el;
  });
  return string.join("");
}
```

1. split("") converts the string into an array of each of its UTF-16 "characters"
2. The map() method adds a space to an element if it equals its upper case equivalent
3. After running through the whole array, the join("") method reconnects all the individual strings

---

## Regex Solution

```js
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}
```
