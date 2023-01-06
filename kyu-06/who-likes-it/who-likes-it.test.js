const likes = require("./who-likes-it");

// Using

describe.skip("Calculate Likes", () => {
  test("Should handle empty array", () => {
    expect(likes([])).toBe("no one likes this");
  });

  test("Should handle one name", () => {
    expect(likes(["Peter"])).toBe("Peter likes this");
  });

  test("Should handle two names", () => {
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
  });

  test("Should handle three names", () => {
    expect(likes(["Max", "John", "Mark"])).toBe("Max, John and Mark like this");
  });

  test("Should handle four or more names", () => {
    expect(likes(["Alex", "Jacob", "Mark", "Max", "Benjamin", "Cameron"])).toBe(
      "Alex, Jacob and 4 others like this"
    );
  });
});
