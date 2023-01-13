const duplicateCount = require("./counting-duplicates");

describe("Sample tests", () => {
  it("Should cope with an empty string", () => {
    expect(duplicateCount("")).toBe(0);
  });
});
