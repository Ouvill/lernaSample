const lib2 = require("lib2")

test("adds 1 + 2 to equal 3", () => {
  lib2();
  expect(1 + 2).toBe(3);
});
