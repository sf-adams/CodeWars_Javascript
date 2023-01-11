## Using regex

```js
function removeExclamationMarks(string) {
  return string.replace(/!/gi, "");
}
```

- The `/` section was used to identify the search
- The `!` highlights the contents of the search
- The `g` flag looks for all instances of the contents
- The `i` flag makes the search case-insensitive (_e.g. A and a the same_)
