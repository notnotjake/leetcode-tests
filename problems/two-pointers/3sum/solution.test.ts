import { expect, test, describe } from 'bun:test'
import { threeSum } from './solution'

// Helper to compare triplet arrays regardless of order
function sortTriplets(triplets: number[][]): number[][] {
	return triplets.map(t => [...t].sort((a, b) => a - b)).sort((a, b) => {
		for (let i = 0; i < 3; i++) {
			if (a[i] !== b[i]) return a[i] - b[i]
		}
		return 0
	})
}

describe('3Sum', () => {
	test('example 1: [-1,0,1,2,-1,-4]', () => {
		const result = threeSum([-1, 0, 1, 2, -1, -4])
		expect(sortTriplets(result)).toEqual(sortTriplets([[-1, -1, 2], [-1, 0, 1]]))
	})

	test('example 2: [0,1,1] - no valid triplets', () => {
		expect(threeSum([0, 1, 1])).toEqual([])
	})

	test('example 3: [0,0,0] - all zeros', () => {
		expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]])
	})

	test('no triplets possible', () => {
		expect(threeSum([1, 2, 3])).toEqual([])
	})

	test('multiple valid triplets', () => {
		const result = threeSum([-2, 0, 1, 1, 2])
		expect(sortTriplets(result)).toEqual(sortTriplets([[-2, 0, 2], [-2, 1, 1]]))
	})

	test('all negative numbers', () => {
		expect(threeSum([-1, -2, -3])).toEqual([])
	})

	test('larger array with duplicates', () => {
		const result = threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])
		expect(sortTriplets(result)).toEqual(sortTriplets([
			[-4, 0, 4],
			[-4, 1, 3],
			[-3, -1, 4],
			[-3, 0, 3],
			[-3, 1, 2],
			[-2, -1, 3],
			[-2, 0, 2],
			[-1, -1, 2],
			[-1, 0, 1]
		]))
	})
})
