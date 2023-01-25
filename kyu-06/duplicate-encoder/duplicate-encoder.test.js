const duplicateEncode = require("./duplicate-encoder");

describe("duplicateEncode", () => {
  it("should encode a string", () => {
    expect(duplicateEncode("din")).toBe("(((");
    expect(duplicateEncode("recede")).toBe("()()()");
    expect(duplicateEncode("Success")).toBe(")())())");
    expect(duplicateEncode("(( @")).toBe("))((");
  });
});
