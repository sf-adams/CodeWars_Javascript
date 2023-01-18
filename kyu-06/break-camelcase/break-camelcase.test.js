const solution = require("./break-camelcase");

describe("Testing camelCase solution", () => {
  it("Should return an empty string from an empty string", () => {
    expect(solution("")).toBe("");
  });
  it("Should return a single word string from a single word string", () => {
    expect(solution("test")).toBe("test");
  });
  it("Should split a camelCase string of two words", () => {
    expect(solution("camelCase")).toBe("camel Case");
  });
});
