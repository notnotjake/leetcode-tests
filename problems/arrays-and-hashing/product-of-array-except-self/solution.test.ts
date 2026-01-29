import { expect, test, describe } from "bun:test";
import { productExceptSelf } from "./solution";

describe("Product of Array Except Self", () => {
	test("example 1: [1,2,3,4]", () => {
		expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
	});

	test("example 2: [-1,1,0,-3,3]", () => {
		expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
	});

	test("two elements", () => {
		expect(productExceptSelf([2, 3])).toEqual([3, 2]);
	});

	test("contains multiple zeros", () => {
		expect(productExceptSelf([0, 0, 1])).toEqual([0, 0, 0]);
	});

	test("all ones", () => {
		expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
	});

	test("negative numbers", () => {
		expect(productExceptSelf([-1, -2, -3])).toEqual([6, 3, 2]);
	});

	test("mixed positive and negative", () => {
		expect(productExceptSelf([2, -3, 4, -5])).toEqual([60, -40, 30, -24]);
	});
});
