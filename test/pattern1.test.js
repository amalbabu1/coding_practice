const printPattern = require("../src/pattern1");

describe("pattern 1", () => {
  test(" 3", () => {
    const pattern = "***\n***\n***";
    expect(printPattern(3)).toBe(pattern);
  });

  test("4", () => {
    const pattern = "****\n****\n****\n****";
    expect(printPattern(4)).toBe(pattern);
  });
});
