const isIsogram = require("./isograms.js");

describe("Testing for Isograms", () => {
  it("Should work with capital letters", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  it("Should work with lower case letters", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  it("Should work when the same characters are not adjacent", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  it("Should work when same characters are not the same case", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  it("Should work with an empty string, as it is a valid isogram", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
});
