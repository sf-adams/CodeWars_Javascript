Most solutions for this one were variants on my solution! The only other one that was worth noting:

## Using map()

```js
function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}
```

1. Takes the name, **splits** it into an array of two elements
2. Uses the `map()` method to return the first letter of each string in the array
3. This first letter is made a capital
4. Uses `join()` to combine the two strings, with the **separator** parameter placing a '.' between them
