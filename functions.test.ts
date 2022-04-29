const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("shuffledArray returns an array", () => {
    let shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
    expect(shuffledArray).toBe(shuffleArray());
  });
  test("shuffledArray returns length", () => {
    let shuffledArray = shuffleArray([1, 2, 3, 4, 5]);
    expect(shuffledArray).toEqual(shuffleArray.length);
  });
});
