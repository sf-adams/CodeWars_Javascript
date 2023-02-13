const summation = require("./grasshopper-summation");

describe("summation", () => {
  it("should add all numbers from 1 to n", () => {
    expect(summation(2)).toBe(3);
    expect(summation(4)).toBe(10);
    expect(summation(1)).toBe(1);
    expect(summation(8)).toBe(36);
  });
});
