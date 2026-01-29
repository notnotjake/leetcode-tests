export function topKFrequent(nums: number[], k: number): number[] {
	// Create frequency map of all integers
	const freq = new Map<number, number>()
	for (const n of nums) {
		freq.set(n, (freq.get(n) ?? 0) + 1)
	}

	// create new array of empty arrays, enough for any k number
	const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => [])
	for (const [num, count] of freq) {
		buckets[count].push(num)
	}

	// Now get the top integers from buckets
	let result: number[] = []
	for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
		result.push(...buckets[i])
	}

	return result.slice(0, k)
}

topKFrequent([4, 1, -1, 2, -1, 2, 3, 3, 3, 3], 2)
