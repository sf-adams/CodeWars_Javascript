const lovefunc = require("./opposites-attract");

describe("Testing love", () => {
  it("Should return false for two evens", () => {
    expect(lovefunc(0, 0)).toBe(false);
  });
  it("Should return true for even then odd", () => {
    expect(lovefunc(2, 1)).toBe(true);
  });
  it("Should return true for odd then even", () => {
    expect(lovefunc(1, 4)).toBe(true);
  });
});
