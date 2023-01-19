## Without using conditional

```js
function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
```

By finding out that

## Second solution

```js
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 === 1;
}
```
