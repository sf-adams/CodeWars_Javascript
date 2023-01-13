const duplicateCount = require("./counting-duplicates");

describe("Sample tests", () => {
  it("Should handle an empty string", () => {
    expect(duplicateCount("")).toBe(0);
  });
  it("Should handle all lower case", () => {
    expect(duplicateCount("asdfdsa")).toBe(3);
  });
  it("Should handle a longer string", () => {
    expect(duplicateCount("aaaabbbbcccceeeeedrrrr")).toBe(5);
  });
  it("Should handle a mixed case string", () => {
    expect(duplicateCount("aAbejarJ")).toBe(2);
  });
  it("Should handle a mix of strings and numbers", () => {
    expect(duplicateCount("a1Bb32")).toBe(1);
  });
});
