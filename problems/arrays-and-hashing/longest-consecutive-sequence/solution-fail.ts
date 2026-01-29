/**
 * Given an unsorted array of integers, return the length of the
 * longest consecutive elements sequence.
 *
 * Must run in O(n) time.
 */
export function longestConsecutive(nums: number[]): number {
	console.log(nums)

	const values = new Set()

	for (const n of nums) {
		values.add(n)
	}

	let maxRun = 0

	for (const n of nums) {
		let thisRun = 1 // length of consecutive numbers found
		let nextNumber = n + 1

		while (values.has(nextNumber)) {
			nextNumber++
			thisRun++
		}

		if (thisRun > maxRun) {
			maxRun = thisRun
		}
	}

	console.log(maxRun)
	return maxRun
}

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])
