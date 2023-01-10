const isIsogram = require("./isograms.js");

describe("Testing for Isograms", () => {
  it("Should work with capital letters", () => {
    expect(isIsogram("Dermatoglyphics")).toBe(true);
  });
  it("Should work with lower case letters", () => {
    expect(isIsogram("isogram")).toBe(true);
  });
  it("Should work when the same characters are not adjacent", () => {
    expect(isIsogram("aba")).toBe(false);
  });
  it("Should work when same characters are not the same case", () => {
    expect(isIsogram("moOse")).toBe(false);
  });
  it("Should work with different case and characters not adjacent", () => {
    expect(isIsogram("isIsogram")).toBe(false);
  });
  it("Should work with an empty string, as it is a valid isogram", () => {
    expect(isIsogram("")).toBe(true);
  });
});
