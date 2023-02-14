const abbrevName = require("./abbreviate-a-two-word-name");

describe("Abbreviate Names", () => {
  it("Should be able to abbreviate any given name", () => {
    expect(abbrevName("Sam Harris")).toBe("S.H");
    expect(abbrevName("Patrick Feenan")).toBe("P.F");
    expect(abbrevName("Evan Cole")).toBe("E.C");
    expect(abbrevName("P Favuzzi")).toBe("P.F");
    expect(abbrevName("David Mendieta")).toBe("D.M");
  });
});
