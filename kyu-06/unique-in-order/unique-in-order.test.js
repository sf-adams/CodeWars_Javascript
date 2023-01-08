const uniqueInOrder = require("./unique-in-order");

describe.only("Unique in Order Function", () => {
  it("Should push the first item of the string", () => {
    expect(uniqueInOrder("A")).toStrictEqual(["A"]);
  });
  it("Should split a string", () => {
    expect(uniqueInOrder("AAAABBBCCDAABBB")).toStrictEqual([
      "A",
      "B",
      "C",
      "D",
      "A",
      "B",
    ]);
  });
  it("Should split a mixed string", () => {
    expect(uniqueInOrder("ABBCcAD")).toStrictEqual([
      "A",
      "B",
      "C",
      "c",
      "A",
      "D",
    ]);
  });
  it("Should split an array", () => {
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
  });
  it("Should work with an empty array", () => {
    expect(uniqueInOrder([])).toStrictEqual([]);
  });
});
