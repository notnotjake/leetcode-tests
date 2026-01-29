import { expect, test, describe } from 'bun:test'
import { longestConsecutive } from './solution'

describe('Longest Consecutive Sequence', () => {
	test('example 1', () => {
		expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
	})

	test('example 2', () => {
		expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
	})

	test('empty array', () => {
		expect(longestConsecutive([])).toBe(0)
	})

	test('single element', () => {
		expect(longestConsecutive([5])).toBe(1)
	})

	test('no consecutive elements', () => {
		expect(longestConsecutive([10, 20, 30, 40])).toBe(1)
	})

	test('all same elements', () => {
		expect(longestConsecutive([1, 1, 1, 1])).toBe(1)
	})

	test('negative numbers', () => {
		expect(longestConsecutive([-3, -2, -1, 0, 1])).toBe(5)
	})

	test('mixed positive and negative', () => {
		expect(longestConsecutive([1, -1, 0, 2, -2])).toBe(5)
	})
})
