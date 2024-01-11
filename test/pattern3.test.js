const printPattern = require("../src/pattern3");

describe("pattern 2", () => {
  test("3", () => {
    const pattern = "1\n12\n123";
    expect(printPattern(3)).toBe(pattern);
  });
  test("4", () => {
    const pattern = "1\n12\n123\n1234";
    expect(printPattern(4)).toBe(pattern);
  });
});
