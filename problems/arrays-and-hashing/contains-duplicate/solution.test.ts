import { expect, test, describe } from 'bun:test'
import { containsDuplicate } from './solution'

describe('Contains Duplicate', () => {
	test('example 1: [1, 2, 3, 1] -> true', () => {
		expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
	})

	test('example 2: [1, 2, 3, 4] -> false', () => {
		expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
	})

	test('example 3: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2] -> true', () => {
		expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
	})

	test('single element -> false', () => {
		expect(containsDuplicate([1])).toBe(false)
	})

	test('two same elements -> true', () => {
		expect(containsDuplicate([1, 1])).toBe(true)
	})

	test('two different elements -> false', () => {
		expect(containsDuplicate([1, 2])).toBe(false)
	})

	test('negative numbers with duplicate', () => {
		expect(containsDuplicate([-1, -2, -3, -1])).toBe(true)
	})

	test('large numbers', () => {
		expect(containsDuplicate([1000000000, -1000000000, 1000000000])).toBe(true)
	})
})
