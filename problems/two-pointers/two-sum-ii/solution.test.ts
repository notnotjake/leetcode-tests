import { describe, expect, test } from 'bun:test'
import { twoSum } from './solution'

describe('Two Sum II - Input Array Is Sorted', () => {
	test('example 1: [2,7,11,15], target 9', () => {
		expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2])
	})

	test('example 2: [2,3,4], target 6', () => {
		expect(twoSum([2, 3, 4], 6)).toEqual([1, 3])
	})

	test('example 3: [-1,0], target -1', () => {
		expect(twoSum([-1, 0], -1)).toEqual([1, 2])
	})

	test('negative numbers', () => {
		expect(twoSum([-5, -3, 0, 2, 7], 4)).toEqual([2, 5])
	})

	test('adjacent elements', () => {
		expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([4, 5])
	})

	test('larger array', () => {
		expect(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19)).toEqual([9, 10])
	})

	test('first and last elements', () => {
		expect(twoSum([1, 3, 5, 7, 9], 10)).toEqual([1, 5])
	})
})
