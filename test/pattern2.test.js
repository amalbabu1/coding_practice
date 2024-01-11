const pattern2 = require("../src/pattern2");

describe("pattern 2", () => {
  test("3", () => {
    const pattern = "*\n**\n***";
    expect(pattern2(3)).toBe(pattern);
  });
  test("4", () => {
    const pattern = "*\n**\n***\n****";
    expect(pattern2(4)).toBe(pattern);
  });
});
