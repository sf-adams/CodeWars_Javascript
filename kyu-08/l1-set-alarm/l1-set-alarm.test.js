const setAlarm = require("./l1-set-alarm");

describe.skip("Set Alarm", () => {
  it("Should not set alarm for both holiday and employment", () => {
    expect(setAlarm(true, true)).toBe(false);
  });
  it("Should not set alarm for unemployment and holiday", () => {
    expect(setAlarm(false, true)).toBe(false);
  });
  it("Should not set alarm for unemployment and no holiday", () => {
    expect(setAlarm(false, true)).toBe(false);
  });
  it("Should set alarm with employment and holiday", () => {
    expect(setAlarm(false, true)).toBe(false);
  });
});
