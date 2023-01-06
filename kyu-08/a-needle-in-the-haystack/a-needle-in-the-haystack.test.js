const findNeedle = require("./a-needle-in-the-haystack");

// Testing from the
test.skip("Should find the string 'needle' in array of strings", () => {
  expect(
    findNeedle([
      "hay",
      "junk",
      "hay",
      "hay",
      "moreJunk",
      "needle",
      "randomJunk",
    ])
  ).toBe("found the needle at position 5");
});

// Basic test from the example given in
test.skip("Should find the string 'needle' in mixed array", () => {
  expect(
    findNeedle([
      "3",
      "123124234",
      undefined,
      "needle",
      "world",
      "hay",
      2,
      "3",
      true,
      false,
    ])
  ).toBe("found the needle at position 3");
});

// Basic test from the example given in
test.skip("Should find the string 'needle' in array of numbers with one string", () => {
  expect(
    findNeedle([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      8,
      7,
      5,
      4,
      3,
      4,
      5,
      6,
      67,
      5,
      5,
      3,
      3,
      4,
      2,
      34,
      234,
      23,
      4,
      234,
      324,
      324,
      "needle",
      1,
      2,
      3,
      4,
      5,
      5,
      6,
      5,
      4,
      32,
      3,
      45,
      54,
    ])
  ).toBe("found the needle at position 30");
});
