const removeExclamationMarks = require("./remove-exclamation-marks");

describe("Remove Exclamations", () => {
  it("Should remove exclamations", () => {
    expect(removeExclamationMarks("Hello World!")).toBe("Hello World");
    expect(removeExclamationMarks("W!hy")).toBe("Why");
    expect(removeExclamationMarks("!!!")).toBe("");
    expect(removeExclamationMarks("test")).toBe("test");
  });
});
