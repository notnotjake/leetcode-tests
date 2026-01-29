import { expect, test, describe } from "bun:test";
import { twoSum } from "./solution";

describe("Two Sum", () => {
  test("example 1: [2,7,11,15], target=9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  test("example 2: [3,2,4], target=6", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  test("example 3: [3,3], target=6", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  test("negative numbers: [-1,-2,-3,-4,-5], target=-8", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });

  test("mixed positive and negative: [-3,4,3,90], target=0", () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });
});
