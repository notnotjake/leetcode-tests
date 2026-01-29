import { expect, test, describe } from 'bun:test'
import { topKFrequent } from './solution'

describe('Top K Frequent Elements', () => {
	test('example 1: [1,1,1,2,2,3], k=2', () => {
		const result = topKFrequent([1, 1, 1, 2, 2, 3], 2)
		expect(result.sort((a, b) => a - b)).toEqual([1, 2])
	})

	test('example 2: [1], k=1', () => {
		expect(topKFrequent([1], 1)).toEqual([1])
	})

	test('all same frequency, k=2', () => {
		const result = topKFrequent([1, 2, 3], 2)
		expect(result.length).toBe(2)
		// Any 2 of [1,2,3] is valid since all have same frequency
	})

	test('negative numbers', () => {
		const result = topKFrequent([-1, -1, 2, 2, 2, 3], 2)
		expect(result.sort((a, b) => a - b)).toEqual([-1, 2])
	})

	test('k equals unique count', () => {
		const result = topKFrequent([1, 1, 2, 2, 3, 3], 3)
		expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3])
	})

	test('larger array', () => {
		const result = topKFrequent([4, 1, -1, 2, -1, 2, 3, 3, 3, 3], 2)
		expect(result.sort((a, b) => a - b)).toEqual([-1, 3])
	})
})
